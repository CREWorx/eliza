[@ai16z/eliza v0.1.5-alpha.0](../index.md) / Evaluator

# Interface: Evaluator

Evaluator for assessing agent responses

## Properties

### alwaysRun?

> `optional` **alwaysRun**: `boolean`

Whether to always run

#### Defined in

[packages/core/src/types.ts:436](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L436)

***

### description

> **description**: `string`

Detailed description

#### Defined in

[packages/core/src/types.ts:439](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L439)

***

### similes

> **similes**: `string`[]

Similar evaluator descriptions

#### Defined in

[packages/core/src/types.ts:442](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L442)

***

### examples

> **examples**: [`EvaluationExample`](EvaluationExample.md)[]

Example evaluations

#### Defined in

[packages/core/src/types.ts:445](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L445)

***

### handler

> **handler**: [`Handler`](../type-aliases/Handler.md)

Handler function

#### Defined in

[packages/core/src/types.ts:448](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L448)

***

### name

> **name**: `string`

Evaluator name

#### Defined in

[packages/core/src/types.ts:451](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L451)

***

### validate

> **validate**: [`Validator`](../type-aliases/Validator.md)

Validation function

#### Defined in

[packages/core/src/types.ts:454](https://github.com/CREWorx/eliza/blob/main/packages/core/src/types.ts#L454)
