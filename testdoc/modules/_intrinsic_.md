[wolkenkratzer](../README.md) > ["intrinsic"](../modules/_intrinsic_.md)



# External module: "intrinsic"

## Index

### Functions

* [FnAnd](_intrinsic_.md#fnand)
* [FnBase64](_intrinsic_.md#fnbase64)
* [FnEquals](_intrinsic_.md#fnequals)
* [FnFindInMap](_intrinsic_.md#fnfindinmap)
* [FnGetAZs](_intrinsic_.md#fngetazs)
* [FnGetAtt](_intrinsic_.md#fngetatt)
* [FnIf](_intrinsic_.md#fnif)
* [FnImportValue](_intrinsic_.md#fnimportvalue)
* [FnJoin](_intrinsic_.md#fnjoin)
* [FnNot](_intrinsic_.md#fnnot)
* [FnOr](_intrinsic_.md#fnor)
* [FnSelect](_intrinsic_.md#fnselect)
* [FnSplit](_intrinsic_.md#fnsplit)
* [FnSub](_intrinsic_.md#fnsub)
* [Ref](_intrinsic_.md#ref)
* [buildIntrinsic](_intrinsic_.md#buildintrinsic)



---
## Functions
<a id="fnand"></a>

###  FnAnd

► **FnAnd**(one: *[Conditional](_types_.md#conditional)*, two: *[Conditional](_types_.md#conditional)*): [IFnAnd](../interfaces/_types_.ifnand.md)



*Defined in [intrinsic.ts:29](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L29)*



Returns an Fn::And object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| one | [Conditional](_types_.md#conditional)   |  - |
| two | [Conditional](_types_.md#conditional)   |  - |





**Returns:** [IFnAnd](../interfaces/_types_.ifnand.md)





___

<a id="fnbase64"></a>

###  FnBase64

► **FnBase64**(input: *`string`*): [IFnBase64](../interfaces/_types_.ifnbase64.md)



*Defined in [intrinsic.ts:119](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L119)*



Returns an Fn::Base64 object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string`   |  - |





**Returns:** [IFnBase64](../interfaces/_types_.ifnbase64.md)





___

<a id="fnequals"></a>

###  FnEquals

► **FnEquals**(one: *[Conditional](_types_.md#conditional)*, two: *[Conditional](_types_.md#conditional)*): [IFnEquals](../interfaces/_types_.ifnequals.md)



*Defined in [intrinsic.ts:103](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L103)*



Returns an Fn::Equals object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| one | [Conditional](_types_.md#conditional)   |  - |
| two | [Conditional](_types_.md#conditional)   |  - |





**Returns:** [IFnEquals](../interfaces/_types_.ifnequals.md)





___

<a id="fnfindinmap"></a>

###  FnFindInMap

► **FnFindInMap**(mapName: *`string`*, topLevelKey: *`string`*, secondLevelKey: *`string`*): [IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)



*Defined in [intrinsic.ts:129](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L129)*



Returns an Fn::FindInMap object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mapName | `string`   |  - |
| topLevelKey | `string`   |  - |
| secondLevelKey | `string`   |  - |





**Returns:** [IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)





___

<a id="fngetazs"></a>

###  FnGetAZs

► **FnGetAZs**(region: *`string`⎮[IRef](../interfaces/_types_.iref.md)*): [IFnGetAZs](../interfaces/_types_.ifngetazs.md)



*Defined in [intrinsic.ts:144](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L144)*



Returns an Fn::GetAZs object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| region | `string`⎮[IRef](../interfaces/_types_.iref.md)   |  - |





**Returns:** [IFnGetAZs](../interfaces/_types_.ifngetazs.md)





___

<a id="fngetatt"></a>

###  FnGetAtt

► **FnGetAtt**(target: *[IResource](../interfaces/_types_.iresource.md)⎮`string`*, attr: *`string`*): [IFnGetAtt](../interfaces/_types_.ifngetatt.md)



*Defined in [intrinsic.ts:74](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L74)*



Returns an Fn::GetAtt object that references another element in the template


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| target | [IResource](../interfaces/_types_.iresource.md)⎮`string`   |  - |
| attr | `string`   |  - |





**Returns:** [IFnGetAtt](../interfaces/_types_.ifngetatt.md)





___

<a id="fnif"></a>

###  FnIf

► **FnIf**(items: *`Array`.<`string`⎮[IIntrinsic](_types_.md#iintrinsic)>*): [IFnIf](../interfaces/_types_.ifnif.md)



*Defined in [intrinsic.ts:53](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L53)*



Returns an Fn::If object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `Array`.<`string`⎮[IIntrinsic](_types_.md#iintrinsic)>   |  - |





**Returns:** [IFnIf](../interfaces/_types_.ifnif.md)





___

<a id="fnimportvalue"></a>

###  FnImportValue

► **FnImportValue**(value: *`string`⎮[IFnBase64](../interfaces/_types_.ifnbase64.md)⎮[IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)⎮[IFnIf](../interfaces/_types_.ifnif.md)⎮[IFnJoin](../interfaces/_types_.ifnjoin.md)⎮[IFnSelect](../interfaces/_types_.ifnselect.md)⎮[IFnSplit](../interfaces/_types_.ifnsplit.md)⎮[IFnSub](../interfaces/_types_.ifnsub.md)⎮[IRef](../interfaces/_types_.iref.md)*): [IFnImportValue](../interfaces/_types_.ifnimportvalue.md)



*Defined in [intrinsic.ts:205](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L205)*



Returns an Fn::ImportValue object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`⎮[IFnBase64](../interfaces/_types_.ifnbase64.md)⎮[IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)⎮[IFnIf](../interfaces/_types_.ifnif.md)⎮[IFnJoin](../interfaces/_types_.ifnjoin.md)⎮[IFnSelect](../interfaces/_types_.ifnselect.md)⎮[IFnSplit](../interfaces/_types_.ifnsplit.md)⎮[IFnSub](../interfaces/_types_.ifnsub.md)⎮[IRef](../interfaces/_types_.iref.md)   |  - |





**Returns:** [IFnImportValue](../interfaces/_types_.ifnimportvalue.md)





___

<a id="fnjoin"></a>

###  FnJoin

► **FnJoin**(delimiter: *`string`*, values: *`Array`.<`string`⎮[IFnGetAtt](../interfaces/_types_.ifngetatt.md)⎮[IRef](../interfaces/_types_.iref.md)>⎮[IFnGetAtt](../interfaces/_types_.ifngetatt.md)*): [IFnJoin](../interfaces/_types_.ifnjoin.md)



*Defined in [intrinsic.ts:85](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L85)*



Returns an Fn::Join object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| delimiter | `string`   |  - |
| values | `Array`.<`string`⎮[IFnGetAtt](../interfaces/_types_.ifngetatt.md)⎮[IRef](../interfaces/_types_.iref.md)>⎮[IFnGetAtt](../interfaces/_types_.ifngetatt.md)   |  - |





**Returns:** [IFnJoin](../interfaces/_types_.ifnjoin.md)





___

<a id="fnnot"></a>

###  FnNot

► **FnNot**(items: *`Array`.<`string`⎮[IIntrinsic](_types_.md#iintrinsic)>*): [IFnNot](../interfaces/_types_.ifnnot.md)



*Defined in [intrinsic.ts:45](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L45)*



Returns an Fn::Not object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `Array`.<`string`⎮[IIntrinsic](_types_.md#iintrinsic)>   |  - |





**Returns:** [IFnNot](../interfaces/_types_.ifnnot.md)





___

<a id="fnor"></a>

###  FnOr

► **FnOr**(items: *`Array`.<`string`⎮[IIntrinsic](_types_.md#iintrinsic)>*): [IFnOr](../interfaces/_types_.ifnor.md)



*Defined in [intrinsic.ts:37](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L37)*



Returns an Fn::Or object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `Array`.<`string`⎮[IIntrinsic](_types_.md#iintrinsic)>   |  - |





**Returns:** [IFnOr](../interfaces/_types_.ifnor.md)





___

<a id="fnselect"></a>

###  FnSelect

► **FnSelect**(index: *`string`⎮`number`*, list: *`Array`.<`string`⎮[IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)⎮[IFnGetAtt](../interfaces/_types_.ifngetatt.md)⎮[IFnGetAZs](../interfaces/_types_.ifngetazs.md)⎮[IFnIf](../interfaces/_types_.ifnif.md)⎮[IFnSplit](../interfaces/_types_.ifnsplit.md)⎮[IRef](../interfaces/_types_.iref.md)>*): [IFnSelect](../interfaces/_types_.ifnselect.md)



*Defined in [intrinsic.ts:156](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L156)*



Returns an Fn::Select object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| index | `string`⎮`number`   |  - |
| list | `Array`.<`string`⎮[IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)⎮[IFnGetAtt](../interfaces/_types_.ifngetatt.md)⎮[IFnGetAZs](../interfaces/_types_.ifngetazs.md)⎮[IFnIf](../interfaces/_types_.ifnif.md)⎮[IFnSplit](../interfaces/_types_.ifnsplit.md)⎮[IRef](../interfaces/_types_.iref.md)>   |  - |





**Returns:** [IFnSelect](../interfaces/_types_.ifnselect.md)





___

<a id="fnsplit"></a>

###  FnSplit

► **FnSplit**(delimiter: *`string`*, value: *`string`*): [IFnSplit](../interfaces/_types_.ifnsplit.md)



*Defined in [intrinsic.ts:226](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L226)*



Returns an Fn::Split object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| delimiter | `string`   |  - |
| value | `string`   |  - |





**Returns:** [IFnSplit](../interfaces/_types_.ifnsplit.md)





___

<a id="fnsub"></a>

###  FnSub

► **FnSub**(input: *`string`*): [IFnSub](../interfaces/_types_.ifnsub.md)



*Defined in [intrinsic.ts:111](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L111)*



Returns an Fn::Sub object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string`   |  - |





**Returns:** [IFnSub](../interfaces/_types_.ifnsub.md)





___

<a id="ref"></a>

###  Ref

► **Ref**(target: *[IResource](../interfaces/_types_.iresource.md)⎮[IParameter](../interfaces/_types_.iparameter.md)⎮`string`*): [IRef](../interfaces/_types_.iref.md)



*Defined in [intrinsic.ts:61](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L61)*



Returns a Ref object that references another element in the template


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| target | [IResource](../interfaces/_types_.iresource.md)⎮[IParameter](../interfaces/_types_.iparameter.md)⎮`string`   |  - |





**Returns:** [IRef](../interfaces/_types_.iref.md)





___

<a id="buildintrinsic"></a>

###  buildIntrinsic

► **buildIntrinsic**(input: *`any`*): `any`



*Defined in [intrinsic.ts:172](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/intrinsic.ts#L172)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `any`   |  - |





**Returns:** `any`





___


