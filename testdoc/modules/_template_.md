[wolkenkratzer](../README.md) > ["template"](../modules/_template_.md)



# External module: "template"

## Index

### Functions

* [Template](_template_.md#template)
* [_addCondition](_template_.md#_addcondition)
* [_addCreationPolicy](_template_.md#_addcreationpolicy)
* [_addDeletionPolicy](_template_.md#_adddeletionpolicy)
* [_addDependsOn](_template_.md#_adddependson)
* [_addDescription](_template_.md#_adddescription)
* [_addMapping](_template_.md#_addmapping)
* [_addOutput](_template_.md#_addoutput)
* [_addParameter](_template_.md#_addparameter)
* [_addResource](_template_.md#_addresource)
* [_addResourceMetadata](_template_.md#_addresourcemetadata)
* [_addUpdatePolicy](_template_.md#_addupdatepolicy)
* [_buildAttribute](_template_.md#_buildattribute)
* [_buildCondition](_template_.md#_buildcondition)
* [_buildFnAnd](_template_.md#_buildfnand)
* [_buildFnBase64](_template_.md#_buildfnbase64)
* [_buildFnEquals](_template_.md#_buildfnequals)
* [_buildFnFindInMap](_template_.md#_buildfnfindinmap)
* [_buildFnIf](_template_.md#_buildfnif)
* [_buildFnImportValue](_template_.md#_buildfnimportvalue)
* [_buildFnJoin](_template_.md#_buildfnjoin)
* [_buildFnNot](_template_.md#_buildfnnot)
* [_buildFnOr](_template_.md#_buildfnor)
* [_buildFnSelect](_template_.md#_buildfnselect)
* [_buildFnSplit](_template_.md#_buildfnsplit)
* [_buildGetAZs](_template_.md#_buildgetazs)
* [_buildMapping](_template_.md#_buildmapping)
* [_buildOutput](_template_.md#_buildoutput)
* [_buildResource](_template_.md#_buildresource)
* [_calcFromExistingTemplate](_template_.md#_calcfromexistingtemplate)
* [_cleanObject](_template_.md#_cleanobject)
* [_isEmptyObject](_template_.md#_isemptyobject)
* [_json](_template_.md#_json)
* [_removeMapping](_template_.md#_removemapping)
* [_removeOutput](_template_.md#_removeoutput)
* [_removeParameter](_template_.md#_removeparameter)
* [_strip](_template_.md#_strip)
* [_stripKind](_template_.md#_stripkind)
* [_validateFnGetAtt](_template_.md#_validatefngetatt)
* [_validateRef](_template_.md#_validateref)



---
## Functions
<a id="template"></a>

###  Template

► **Template**(): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:62](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L62)*



Returns a new Template object.
*__member__*: Template





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)
ITemplate






___

<a id="_addcondition"></a>

###  _addCondition

► **_addCondition**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[ICondition](../interfaces/_types_.icondition.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:755](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L755)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [ICondition](../interfaces/_types_.icondition.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_addcreationpolicy"></a>

###  _addCreationPolicy

► **_addCreationPolicy**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[ICreationPolicy](../interfaces/_types_.icreationpolicy.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:690](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L690)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [ICreationPolicy](../interfaces/_types_.icreationpolicy.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_adddeletionpolicy"></a>

###  _addDeletionPolicy

► **_addDeletionPolicy**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IDeletionPolicy](../interfaces/_types_.ideletionpolicy.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:703](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L703)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IDeletionPolicy](../interfaces/_types_.ideletionpolicy.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_adddependson"></a>

###  _addDependsOn

► **_addDependsOn**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IDependsOn](../interfaces/_types_.idependson.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:729](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L729)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IDependsOn](../interfaces/_types_.idependson.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_adddescription"></a>

###  _addDescription

► **_addDescription**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IDescription](../interfaces/_types_.idescription.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:683](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L683)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IDescription](../interfaces/_types_.idescription.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_addmapping"></a>

###  _addMapping

► **_addMapping**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IMapping](../interfaces/_types_.imapping.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:789](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L789)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IMapping](../interfaces/_types_.imapping.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_addoutput"></a>

###  _addOutput

► **_addOutput**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IOutput](../interfaces/_types_.ioutput.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:762](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L762)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IOutput](../interfaces/_types_.ioutput.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_addparameter"></a>

###  _addParameter

► **_addParameter**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IParameter](../interfaces/_types_.iparameter.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:783](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L783)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IParameter](../interfaces/_types_.iparameter.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_addresource"></a>

###  _addResource

► **_addResource**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IResource](../interfaces/_types_.iresource.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:806](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L806)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IResource](../interfaces/_types_.iresource.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_addresourcemetadata"></a>

###  _addResourceMetadata

► **_addResourceMetadata**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IResourceMetadata](../interfaces/_types_.iresourcemetadata.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:742](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L742)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IResourceMetadata](../interfaces/_types_.iresourcemetadata.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_addupdatepolicy"></a>

###  _addUpdatePolicy

► **_addUpdatePolicy**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IUpdatePolicy](../interfaces/_types_.iupdatepolicy.md)*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:716](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L716)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IUpdatePolicy](../interfaces/_types_.iupdatepolicy.md)   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_buildattribute"></a>

###  _buildAttribute

► **_buildAttribute**(t: *[IAttribute](_types_.md#iattribute)*): `any`



*Defined in [template.ts:437](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L437)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IAttribute](_types_.md#iattribute)   |  - |





**Returns:** `any`





___

<a id="_buildcondition"></a>

###  _buildCondition

► **_buildCondition**(t: *[ICondition](../interfaces/_types_.icondition.md)*): `string`



*Defined in [template.ts:426](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L426)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ICondition](../interfaces/_types_.icondition.md)   |  - |





**Returns:** `string`





___

<a id="_buildfnand"></a>

###  _buildFnAnd

► **_buildFnAnd**(t: *[IFnAnd](../interfaces/_types_.ifnand.md)*): `any`



*Defined in [template.ts:510](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L510)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnAnd](../interfaces/_types_.ifnand.md)   |  - |





**Returns:** `any`





___

<a id="_buildfnbase64"></a>

###  _buildFnBase64

► **_buildFnBase64**(t: *[IFnBase64](../interfaces/_types_.ifnbase64.md)*): `any`



*Defined in [template.ts:502](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L502)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnBase64](../interfaces/_types_.ifnbase64.md)   |  - |





**Returns:** `any`





___

<a id="_buildfnequals"></a>

###  _buildFnEquals

► **_buildFnEquals**(t: *[IFnEquals](../interfaces/_types_.ifnequals.md)*): `any`



*Defined in [template.ts:549](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L549)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnEquals](../interfaces/_types_.ifnequals.md)   |  - |





**Returns:** `any`





___

<a id="_buildfnfindinmap"></a>

###  _buildFnFindInMap

► **_buildFnFindInMap**(t: *[IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)*): `any`



*Defined in [template.ts:457](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L457)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)   |  - |





**Returns:** `any`





___

<a id="_buildfnif"></a>

###  _buildFnIf

► **_buildFnIf**(t: *[IFnIf](../interfaces/_types_.ifnif.md)*): `any`



*Defined in [template.ts:536](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L536)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnIf](../interfaces/_types_.ifnif.md)   |  - |





**Returns:** `any`





___

<a id="_buildfnimportvalue"></a>

###  _buildFnImportValue

► **_buildFnImportValue**(t: *[IFnImportValue](../interfaces/_types_.ifnimportvalue.md)*): `any`



*Defined in [template.ts:494](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L494)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnImportValue](../interfaces/_types_.ifnimportvalue.md)   |  - |





**Returns:** `any`





___

<a id="_buildfnjoin"></a>

###  _buildFnJoin

► **_buildFnJoin**(t: *[IFnJoin](../interfaces/_types_.ifnjoin.md)*): `any`



*Defined in [template.ts:442](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L442)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnJoin](../interfaces/_types_.ifnjoin.md)   |  - |





**Returns:** `any`





___

<a id="_buildfnnot"></a>

###  _buildFnNot

► **_buildFnNot**(t: *[IFnNot](../interfaces/_types_.ifnnot.md)*): `any`



*Defined in [template.ts:523](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L523)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnNot](../interfaces/_types_.ifnnot.md)   |  - |





**Returns:** `any`





___

<a id="_buildfnor"></a>

###  _buildFnOr

► **_buildFnOr**(t: *[IFnOr](../interfaces/_types_.ifnor.md)*): `any`



*Defined in [template.ts:483](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L483)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnOr](../interfaces/_types_.ifnor.md)   |  - |





**Returns:** `any`





___

<a id="_buildfnselect"></a>

###  _buildFnSelect

► **_buildFnSelect**(t: *[IFnSelect](../interfaces/_types_.ifnselect.md)*): (`number`⎮(`string`⎮[IFnIf](../interfaces/_types_.ifnif.md)⎮[IRef](../interfaces/_types_.iref.md)⎮[IFnGetAtt](../interfaces/_types_.ifngetatt.md)⎮[IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)⎮[IFnGetAZs](../interfaces/_types_.ifngetazs.md)⎮[IFnSplit](../interfaces/_types_.ifnsplit.md))[])[]



*Defined in [template.ts:562](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L562)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnSelect](../interfaces/_types_.ifnselect.md)   |  - |





**Returns:** (`number`⎮(`string`⎮[IFnIf](../interfaces/_types_.ifnif.md)⎮[IRef](../interfaces/_types_.iref.md)⎮[IFnGetAtt](../interfaces/_types_.ifngetatt.md)⎮[IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)⎮[IFnGetAZs](../interfaces/_types_.ifngetazs.md)⎮[IFnSplit](../interfaces/_types_.ifnsplit.md))[])[]





___

<a id="_buildfnsplit"></a>

###  _buildFnSplit

► **_buildFnSplit**(t: *[IFnSplit](../interfaces/_types_.ifnsplit.md)*): `any`



*Defined in [template.ts:475](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L475)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnSplit](../interfaces/_types_.ifnsplit.md)   |  - |





**Returns:** `any`





___

<a id="_buildgetazs"></a>

###  _buildGetAZs

► **_buildGetAZs**(t: *[IFnGetAZs](../interfaces/_types_.ifngetazs.md)*): `any`



*Defined in [template.ts:467](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L467)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IFnGetAZs](../interfaces/_types_.ifngetazs.md)   |  - |





**Returns:** `any`





___

<a id="_buildmapping"></a>

###  _buildMapping

► **_buildMapping**(t: *[IMapping](../interfaces/_types_.imapping.md)*): `object`



*Defined in [template.ts:581](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L581)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IMapping](../interfaces/_types_.imapping.md)   |  - |





**Returns:** `object`





___

<a id="_buildoutput"></a>

###  _buildOutput

► **_buildOutput**(t: *[IOutput](../interfaces/_types_.ioutput.md)*): `string`



*Defined in [template.ts:586](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L586)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IOutput](../interfaces/_types_.ioutput.md)   |  - |





**Returns:** `string`





___

<a id="_buildresource"></a>

###  _buildResource

► **_buildResource**(t: *[IResource](../interfaces/_types_.iresource.md)*): `any`



*Defined in [template.ts:378](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L378)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IResource](../interfaces/_types_.iresource.md)   |  - |





**Returns:** `any`





___

<a id="_calcfromexistingtemplate"></a>

###  _calcFromExistingTemplate

► **_calcFromExistingTemplate**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, inputTemplate: *`any`*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:874](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L874)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| inputTemplate | `any`   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_cleanobject"></a>

###  _cleanObject

► **_cleanObject**(object: *`any`*): `any`



*Defined in [template.ts:359](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L359)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| object | `any`   |  - |





**Returns:** `any`





___

<a id="_isemptyobject"></a>

###  _isEmptyObject

► **_isEmptyObject**(obj: *`any`*): `boolean`



*Defined in [template.ts:329](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L329)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  - |





**Returns:** `boolean`





___

<a id="_json"></a>

###  _json

► **_json**(t: *[IElement](_types_.md#ielement)⎮[IFnAnd](../interfaces/_types_.ifnand.md)⎮[IFnBase64](../interfaces/_types_.ifnbase64.md)⎮[IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)⎮[IRef](../interfaces/_types_.iref.md)⎮[IFnGetAtt](../interfaces/_types_.ifngetatt.md)⎮[IFnGetAZs](../interfaces/_types_.ifngetazs.md)⎮[IFnImportValue](../interfaces/_types_.ifnimportvalue.md)⎮[IFnJoin](../interfaces/_types_.ifnjoin.md)⎮[IFnSelect](../interfaces/_types_.ifnselect.md)⎮[IFnSplit](../interfaces/_types_.ifnsplit.md)⎮[IFnSub](../interfaces/_types_.ifnsub.md)⎮[ICreationPolicy](../interfaces/_types_.icreationpolicy.md)⎮[IDeletionPolicy](../interfaces/_types_.ideletionpolicy.md)⎮[IDependsOn](../interfaces/_types_.idependson.md)⎮[IFnEquals](../interfaces/_types_.ifnequals.md)⎮[IFnIf](../interfaces/_types_.ifnif.md)⎮[IFnNot](../interfaces/_types_.ifnnot.md)⎮[IFnOr](../interfaces/_types_.ifnor.md)⎮[IResourceMetadata](../interfaces/_types_.iresourcemetadata.md)⎮[IUpdatePolicy](../interfaces/_types_.iupdatepolicy.md)*): `any`



*Defined in [template.ts:603](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L603)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IElement](_types_.md#ielement)⎮[IFnAnd](../interfaces/_types_.ifnand.md)⎮[IFnBase64](../interfaces/_types_.ifnbase64.md)⎮[IFnFindInMap](../interfaces/_types_.ifnfindinmap.md)⎮[IRef](../interfaces/_types_.iref.md)⎮[IFnGetAtt](../interfaces/_types_.ifngetatt.md)⎮[IFnGetAZs](../interfaces/_types_.ifngetazs.md)⎮[IFnImportValue](../interfaces/_types_.ifnimportvalue.md)⎮[IFnJoin](../interfaces/_types_.ifnjoin.md)⎮[IFnSelect](../interfaces/_types_.ifnselect.md)⎮[IFnSplit](../interfaces/_types_.ifnsplit.md)⎮[IFnSub](../interfaces/_types_.ifnsub.md)⎮[ICreationPolicy](../interfaces/_types_.icreationpolicy.md)⎮[IDeletionPolicy](../interfaces/_types_.ideletionpolicy.md)⎮[IDependsOn](../interfaces/_types_.idependson.md)⎮[IFnEquals](../interfaces/_types_.ifnequals.md)⎮[IFnIf](../interfaces/_types_.ifnif.md)⎮[IFnNot](../interfaces/_types_.ifnnot.md)⎮[IFnOr](../interfaces/_types_.ifnor.md)⎮[IResourceMetadata](../interfaces/_types_.iresourcemetadata.md)⎮[IUpdatePolicy](../interfaces/_types_.iupdatepolicy.md)   |  - |





**Returns:** `any`





___

<a id="_removemapping"></a>

###  _removeMapping

► **_removeMapping**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IMapping](../interfaces/_types_.imapping.md)⎮`string`*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:814](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L814)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IMapping](../interfaces/_types_.imapping.md)⎮`string`   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_removeoutput"></a>

###  _removeOutput

► **_removeOutput**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IOutput](../interfaces/_types_.ioutput.md)⎮`string`*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:834](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L834)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IOutput](../interfaces/_types_.ioutput.md)⎮`string`   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_removeparameter"></a>

###  _removeParameter

► **_removeParameter**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, e: *[IParameter](../interfaces/_types_.iparameter.md)⎮`string`*): [ITemplate](../interfaces/_types_.itemplate.md)



*Defined in [template.ts:854](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L854)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| e | [IParameter](../interfaces/_types_.iparameter.md)⎮`string`   |  - |





**Returns:** [ITemplate](../interfaces/_types_.itemplate.md)





___

<a id="_strip"></a>

###  _strip

► **_strip**(t: *[IParameter](../interfaces/_types_.iparameter.md)⎮[IOutput](../interfaces/_types_.ioutput.md)⎮[IResource](../interfaces/_types_.iresource.md)⎮[ICondition](../interfaces/_types_.icondition.md)*): `any`



*Defined in [template.ts:349](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L349)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [IParameter](../interfaces/_types_.iparameter.md)⎮[IOutput](../interfaces/_types_.ioutput.md)⎮[IResource](../interfaces/_types_.iresource.md)⎮[ICondition](../interfaces/_types_.icondition.md)   |  - |





**Returns:** `any`





___

<a id="_stripkind"></a>

###  _stripKind

► **_stripKind**(target: *`any`*): `any`



*Defined in [template.ts:354](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L354)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| target | `any`   |  - |





**Returns:** `any`





___

<a id="_validatefngetatt"></a>

###  _validateFnGetAtt

► **_validateFnGetAtt**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, att: *[IFnGetAtt](../interfaces/_types_.ifngetatt.md)*): `void`⎮`SyntaxError`



*Defined in [template.ts:342](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L342)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| att | [IFnGetAtt](../interfaces/_types_.ifngetatt.md)   |  - |





**Returns:** `void`⎮`SyntaxError`





___

<a id="_validateref"></a>

###  _validateRef

► **_validateRef**(t: *[ITemplate](../interfaces/_types_.itemplate.md)*, ref: *[IRef](../interfaces/_types_.iref.md)*): `void`⎮`SyntaxError`



*Defined in [template.ts:333](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/template.ts#L333)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| t | [ITemplate](../interfaces/_types_.itemplate.md)   |  - |
| ref | [IRef](../interfaces/_types_.iref.md)   |  - |





**Returns:** `void`⎮`SyntaxError`





___


