[@ai16z/eliza v0.1.5-alpha.0](../index.md) / IImageDescriptionService

# Interface: IImageDescriptionService

## Extends

- [`Service`](../classes/Service.md)

## Accessors

### serviceType

#### Get Signature

> **get** **serviceType**(): [`ServiceType`](../enumerations/ServiceType.md)

##### Returns

[`ServiceType`](../enumerations/ServiceType.md)

#### Inherited from

[`Service`](../classes/Service.md).[`serviceType`](../classes/Service.md#serviceType-1)

#### Defined in

[packages/core/src/types.ts:974](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L974)

## Methods

### initialize()

> `abstract` **initialize**(`runtime`): `Promise`\<`void`\>

Add abstract initialize method that must be implemented by derived classes

#### Parameters

• **runtime**: [`IAgentRuntime`](IAgentRuntime.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Service`](../classes/Service.md).[`initialize`](../classes/Service.md#initialize)

#### Defined in

[packages/core/src/types.ts:979](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L979)

***

### describeImage()

> **describeImage**(`imageUrl`): `Promise`\<`object`\>

#### Parameters

• **imageUrl**: `string`

#### Returns

`Promise`\<`object`\>

##### title

> **title**: `string`

##### description

> **description**: `string`

#### Defined in

[packages/core/src/types.ts:1066](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L1066)
