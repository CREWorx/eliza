[@ai16z/eliza v0.1.5-alpha.0](../index.md) / ICacheManager

# Interface: ICacheManager

## Methods

### get()

> **get**\<`T`\>(`key`): `Promise`\<`T`\>

#### Type Parameters

• **T** = `unknown`

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/core/src/types.ts:955](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L955)

***

### set()

> **set**\<`T`\>(`key`, `value`, `options`?): `Promise`\<`void`\>

#### Type Parameters

• **T**

#### Parameters

• **key**: `string`

• **value**: `T`

• **options?**: [`CacheOptions`](../type-aliases/CacheOptions.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:956](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L956)

***

### delete()

> **delete**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/core/src/types.ts:957](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L957)
