import { names, uniqueNamesGenerator } from "unique-names-generator";
import { v4 as uuidv4 } from "uuid";
import {
    composeActionExamples,
    formatActionNames,
    formatActions,
} from "./actions.ts";
import { addHeader, composeContext } from "./context.ts";
import { defaultCharacter } from "./defaultCharacter.ts";
import {
    evaluationTemplate,
    formatEvaluatorExamples,
    formatEvaluatorNames,
    formatEvaluators,
} from "./evaluators.ts";
import { generateText } from "./generation.ts";
import { formatGoalsAsString, getGoals } from "./goals.ts";
import { elizaLogger } from "./index.ts";
import knowledge from "./knowledge.ts";
import { MemoryManager } from "./memory.ts";
import { formatActors, formatMessages, getActorDetails } from "./messages.ts";
import { parseJsonArrayFromText } from "./parsing.ts";
import { formatPosts } from "./posts.ts";
import { getProviders } from "./providers.ts";
import settings from "./settings.ts";
import {
    Character,
    Goal,
    HandlerCallback,
    IAgentRuntime,
    ICacheManager,
    IDatabaseAdapter,
    IMemoryManager,
    KnowledgeItem,
    ModelClass,
    ModelProviderName,
    Plugin,
    Provider,
    Service,
    ServiceType,
    State,
    UUID,
    type Action,
    type Actor,
    type Evaluator,
    type Memory,
} from "./types.ts";
import { stringToUuid } from "./uuid.ts";

/**
 * Represents the runtime environment for an agent, handling message processing,
 * action registration, and interaction with external services like OpenAI and Supabase.
 */
export class AgentRuntime implements IAgentRuntime {
    /**
     * Default count for recent messages to be kept in memory.
     * @private
     */
    readonly #conversationLength = 32 as number;
    /**
     * The ID of the agent
     */
    agentId: UUID;
    /**
     * The base URL of the server where the agent's requests are processed.
     */
    serverUrl = "http://localhost:7998";

    /**
     * The database adapter used for interacting with the database.
     */
    databaseAdapter: IDatabaseAdapter;

    /**
     * Authentication token used for securing requests.
     */
    token: string | null;

    /**
     * Custom actions that the agent can perform.
     */
    actions: Action[] = [];

    /**
     * Evaluators used to assess and guide the agent's responses.
     */
    evaluators: Evaluator[] = [];

    /**
     * Context providers used to provide context for message generation.
     */
    providers: Provider[] = [];

    plugins: Plugin[] = [];

    /**
     * The model to use for generateText.
     */
    modelProvider: ModelProviderName;

    /**
     * The model to use for generateImage.
     */
    imageModelProvider: ModelProviderName;

    /**
     * Fetch function to use
     * Some environments may not have access to the global fetch function and need a custom fetch override.
     */
    fetch = fetch;

    /**
     * The character to use for the agent
     */
    character: Character;

    /**
     * Store messages that are sent and received by the agent.
     */
    messageManager: IMemoryManager;

    /**
     * Store and recall descriptions of users based on conversations.
     */
    descriptionManager: IMemoryManager;

    /**
     * Manage the creation and recall of static information (documents, historical game lore, etc)
     */
    loreManager: IMemoryManager;

    /**
     * Hold large documents that can be referenced
     */
    documentsManager: IMemoryManager;

    /**
     * Searchable document fragments
     */
    knowledgeManager: IMemoryManager;

    services: Map<ServiceType, Service> = new Map();
    memoryManagers: Map<string, IMemoryManager> = new Map();
    cacheManager: ICacheManager;

    registerMemoryManager(manager: IMemoryManager): void {
        if (!manager.tableName) {
            throw new Error("Memory manager must have a tableName");
        }

        if (this.memoryManagers.has(manager.tableName)) {
            elizaLogger.warn(
                `Memory manager ${manager.tableName} is already registered. Skipping registration.`
            );
            return;
        }

        this.memoryManagers.set(manager.tableName, manager);
    }

    getMemoryManager(tableName: string): IMemoryManager | null {
        return this.memoryManagers.get(tableName) || null;
    }

    getService<T extends Service>(service: ServiceType): T | null {
        const serviceInstance = this.services.get(service);
        if (!serviceInstance) {
            elizaLogger.error(`Service ${service} not found`);
            return null;
        }
        return serviceInstance as T;
    }

    async registerService(service: Service): Promise<void> {
        const serviceType = service.serviceType;
        elizaLogger.log("Registering service:", serviceType);

        if (this.services.has(serviceType)) {
            elizaLogger.warn(
                `Service ${serviceType} is already registered. Skipping registration.`
            );
            return;
        }

        // Add the service to the services map
        this.services.set(serviceType, service);
        elizaLogger.success(`Service ${serviceType} registered successfully`);
    }

    /**
     * Creates an instance of AgentRuntime.
     * @param opts - The options for configuring the AgentRuntime.
     * @param opts.conversationLength - The number of messages to hold in the recent message cache.
     * @param opts.token - The JWT token, can be a JWT token if outside worker, or an OpenAI token if inside worker.
     * @param opts.serverUrl - The URL of the worker.
     * @param opts.actions - Optional custom actions.
     * @param opts.evaluators - Optional custom evaluators.
     * @param opts.services - Optional custom services.
     * @param opts.memoryManagers - Optional custom memory managers.
     * @param opts.providers - Optional context providers.
     * @param opts.model - The model to use for generateText.
