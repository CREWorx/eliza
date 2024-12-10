[@ai16z/eliza v0.1.5-alpha.0](../index.md) / IAgentRuntime

# Interface: IAgentRuntime

## Properties

### agentId

> **agentId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Properties

#### Defined in

[packages/core/src/types.ts:984](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L984)

***

### serverUrl

> **serverUrl**: `string`

#### Defined in

[packages/core/src/types.ts:985](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L985)

***

### databaseAdapter

> **databaseAdapter**: [`IDatabaseAdapter`](IDatabaseAdapter.md)

#### Defined in

[packages/core/src/types.ts:986](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L986)

***

### token

> **token**: `string`

#### Defined in

[packages/core/src/types.ts:987](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L987)

***

### modelProvider

> **modelProvider**: [`ModelProviderName`](../enumerations/ModelProviderName.md)

#### Defined in

[packages/core/src/types.ts:988](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L988)

***

### imageModelProvider

> **imageModelProvider**: [`ModelProviderName`](../enumerations/ModelProviderName.md)

#### Defined in

[packages/core/src/types.ts:989](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L989)

***

### character

> **character**: [`Character`](../type-aliases/Character.md)

#### Defined in

[packages/core/src/types.ts:990](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L990)

***

### providers

> **providers**: [`Provider`](Provider.md)[]

#### Defined in

[packages/core/src/types.ts:991](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L991)

***

### actions

> **actions**: [`Action`](Action.md)[]

#### Defined in

[packages/core/src/types.ts:992](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L992)

***

### evaluators

> **evaluators**: [`Evaluator`](Evaluator.md)[]

#### Defined in

[packages/core/src/types.ts:993](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L993)

***

### plugins

> **plugins**: [`Plugin`](../type-aliases/Plugin.md)[]

#### Defined in

[packages/core/src/types.ts:994](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L994)

***

### messageManager

> **messageManager**: [`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:996](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L996)

***

### descriptionManager

> **descriptionManager**: [`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:997](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L997)

***

### documentsManager

> **documentsManager**: [`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:998](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L998)

***

### knowledgeManager

> **knowledgeManager**: [`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:999](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L999)

***

### loreManager

> **loreManager**: [`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:1000](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1000)

***

### cacheManager

> **cacheManager**: [`ICacheManager`](ICacheManager.md)

#### Defined in

[packages/core/src/types.ts:1002](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1002)

***

### services

> **services**: `Map`\<[`ServiceType`](../enumerations/ServiceType.md), [`Service`](../classes/Service.md)\>

#### Defined in

[packages/core/src/types.ts:1004](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1004)

## Methods

### initialize()

> **initialize**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1006](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1006)

***

### registerMemoryManager()

> **registerMemoryManager**(`manager`): `void`

#### Parameters

• **manager**: [`IMemoryManager`](IMemoryManager.md)

#### Returns

`void`

#### Defined in

[packages/core/src/types.ts:1008](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1008)

***

### getMemoryManager()

> **getMemoryManager**(`name`): [`IMemoryManager`](IMemoryManager.md)

#### Parameters

• **name**: `string`

#### Returns

[`IMemoryManager`](IMemoryManager.md)

#### Defined in

[packages/core/src/types.ts:1010](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1010)

***

### getService()

> **getService**\<`T`\>(`service`): `T`

#### Type Parameters

• **T** *extends* [`Service`](../classes/Service.md)

#### Parameters

• **service**: [`ServiceType`](../enumerations/ServiceType.md)

#### Returns

`T`

#### Defined in

[packages/core/src/types.ts:1012](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1012)

***

### registerService()

> **registerService**(`service`): `void`

#### Parameters

• **service**: [`Service`](../classes/Service.md)

#### Returns

`void`

#### Defined in

[packages/core/src/types.ts:1014](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1014)

***

### getSetting()

> **getSetting**(`key`): `string`

#### Parameters

• **key**: `string`

#### Returns

`string`

#### Defined in

[packages/core/src/types.ts:1016](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1016)

***

### getConversationLength()

> **getConversationLength**(): `number`

Methods

#### Returns

`number`

#### Defined in

[packages/core/src/types.ts:1019](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1019)

***

### processActions()

> **processActions**(`message`, `responses`, `state`?, `callback`?): `Promise`\<`void`\>

#### Parameters

• **message**: [`Memory`](Memory.md)

• **responses**: [`Memory`](Memory.md)[]

• **state?**: [`State`](State.md)

• **callback?**: [`HandlerCallback`](../type-aliases/HandlerCallback.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1021](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1021)

***

### evaluate()

> **evaluate**(`message`, `state`?, `didRespond`?): `Promise`\<`string`[]\>

#### Parameters

• **message**: [`Memory`](Memory.md)

• **state?**: [`State`](State.md)

• **didRespond?**: `boolean`

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[packages/core/src/types.ts:1028](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1028)

***

### ensureParticipantExists()

> **ensureParticipantExists**(`userId`, `roomId`): `Promise`\<`void`\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1034](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1034)

***

### ensureUserExists()

> **ensureUserExists**(`userId`, `userName`, `name`, `source`): `Promise`\<`void`\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **userName**: `string`

• **name**: `string`

• **source**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1036](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1036)

***

### registerAction()

> **registerAction**(`action`): `void`

#### Parameters

• **action**: [`Action`](Action.md)

#### Returns

`void`

#### Defined in

[packages/core/src/types.ts:1043](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1043)

***

### ensureConnection()

> **ensureConnection**(`userId`, `roomId`, `userName`?, `userScreenName`?, `source`?): `Promise`\<`void`\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **userName?**: `string`

• **userScreenName?**: `string`

• **source?**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1045](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1045)

***

### ensureParticipantInRoom()

> **ensureParticipantInRoom**(`userId`, `roomId`): `Promise`\<`void`\>

#### Parameters

• **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1053](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1053)

***

### ensureRoomExists()

> **ensureRoomExists**(`roomId`): `Promise`\<`void`\>

#### Parameters

• **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:1055](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1055)

***

### composeState()

> **composeState**(`message`, `additionalKeys`?): `Promise`\<[`State`](State.md)\>

#### Parameters

• **message**: [`Memory`](Memory.md)

• **additionalKeys?**

#### Returns

`Promise`\<[`State`](State.md)\>

#### Defined in

[packages/core/src/types.ts:1057](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1057)

***

### updateRecentMessageState()

> **updateRecentMessageState**(`state`): `Promise`\<[`State`](State.md)\>

#### Parameters

• **state**: [`State`](State.md)

#### Returns

`Promise`\<[`State`](State.md)\>

#### Defined in

[packages/core/src/types.ts:1062](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1062)
