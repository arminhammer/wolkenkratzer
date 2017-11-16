[wolkenkratzer](../README.md) > ["macros/lambda.macro"](../modules/_macros_lambda_macro_.md)



# External module: "macros/lambda.macro"

## Index

### Interfaces

* [IZipLambdaResult](../interfaces/_macros_lambda_macro_.iziplambdaresult.md)
* [IZipLambdaTemplateResult](../interfaces/_macros_lambda_macro_.iziplambdatemplateresult.md)


### Variables

* [Lambda](_macros_lambda_macro_.md#lambda)
* [bluebird](_macros_lambda_macro_.md#bluebird)
* [fs](_macros_lambda_macro_.md#fs)
* [jszip](_macros_lambda_macro_.md#jszip)
* [klaw](_macros_lambda_macro_.md#klaw)


### Functions

* [_buildZipLambda](_macros_lambda_macro_.md#_buildziplambda)
* [_createInlineFunction](_macros_lambda_macro_.md#_createinlinefunction)
* [_createInlineTemplate](_macros_lambda_macro_.md#_createinlinetemplate)
* [buildInlineLambda](_macros_lambda_macro_.md#buildinlinelambda)
* [buildInlineLambdaTemplate](_macros_lambda_macro_.md#buildinlinelambdatemplate)
* [buildLambda](_macros_lambda_macro_.md#buildlambda)
* [buildLambdaTemplate](_macros_lambda_macro_.md#buildlambdatemplate)
* [buildZipLambda](_macros_lambda_macro_.md#buildziplambda)
* [buildZipLambdaTemplate](_macros_lambda_macro_.md#buildziplambdatemplate)


### Object literals

* [defaultConfig](_macros_lambda_macro_.md#defaultconfig)



---
## Variables
<a id="lambda"></a>

###  Lambda

**●  Lambda**:  *[IService](../interfaces/_types_.iservice.md)*  =  Service(LambdaJson)

*Defined in [macros/lambda.macro.ts:15](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L15)*





___

<a id="bluebird"></a>

###  bluebird

**●  bluebird**:  *`any`*  =  require('bluebird')

*Defined in [macros/lambda.macro.ts:11](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L11)*





___

<a id="fs"></a>

###  fs

**●  fs**:  *`any`*  =  require('fs-extra')

*Defined in [macros/lambda.macro.ts:10](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L10)*





___

<a id="jszip"></a>

###  jszip

**●  jszip**:  *`any`*  =  require('jszip')

*Defined in [macros/lambda.macro.ts:12](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L12)*





___

<a id="klaw"></a>

###  klaw

**●  klaw**:  *`any`*  =  require('klaw')

*Defined in [macros/lambda.macro.ts:13](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L13)*





___


## Functions
<a id="_buildziplambda"></a>

###  _buildZipLambda

► **_buildZipLambda**(__namedParameters: *`object`*): `Promise`.<[IZipLambdaResult](../interfaces/_macros_lambda_macro_.iziplambdaresult.md)>



*Defined in [macros/lambda.macro.ts:170](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L170)*



Create a Lambda function from a folder or source file


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<[IZipLambdaResult](../interfaces/_macros_lambda_macro_.iziplambdaresult.md)>





___

<a id="_createinlinefunction"></a>

###  _createInlineFunction

► **_createInlineFunction**(__namedParameters: *`object`*): `Promise`.<[IResource](../interfaces/_types_.iresource.md)>



*Defined in [macros/lambda.macro.ts:40](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L40)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<[IResource](../interfaces/_types_.iresource.md)>





___

<a id="_createinlinetemplate"></a>

###  _createInlineTemplate

► **_createInlineTemplate**(__namedParameters: *`object`*): `Promise`.<[ITemplate](../interfaces/_types_.itemplate.md)>



*Defined in [macros/lambda.macro.ts:80](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L80)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<[ITemplate](../interfaces/_types_.itemplate.md)>





___

<a id="buildinlinelambda"></a>

###  buildInlineLambda

► **buildInlineLambda**(__namedParameters: *`object`*): `any`



*Defined in [macros/lambda.macro.ts:131](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L131)*



Create an inline Lambda function


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `any`





___

<a id="buildinlinelambdatemplate"></a>

###  buildInlineLambdaTemplate

► **buildInlineLambdaTemplate**(__namedParameters: *`object`*): `Promise`.<[ITemplate](../interfaces/_types_.itemplate.md)>



*Defined in [macros/lambda.macro.ts:110](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L110)*



Create an inline Lambda function from a folder or source file


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<[ITemplate](../interfaces/_types_.itemplate.md)>





___

<a id="buildlambda"></a>

###  buildLambda

► **buildLambda**(__namedParameters: *`object`*): `Promise`.<`Object`>



*Defined in [macros/lambda.macro.ts:281](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L281)*



Create a Lambda function from a folder or source file


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<`Object`>





___

<a id="buildlambdatemplate"></a>

###  buildLambdaTemplate

► **buildLambdaTemplate**(__namedParameters: *`object`*): `Promise`.<`Object`>



*Defined in [macros/lambda.macro.ts:440](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L440)*



Create a Lambda function from a folder or source file


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<`Object`>





___

<a id="buildziplambda"></a>

###  buildZipLambda

► **buildZipLambda**(__namedParameters: *`object`*): `Promise`.<[IZipLambdaResult](../interfaces/_macros_lambda_macro_.iziplambdaresult.md)>



*Defined in [macros/lambda.macro.ts:257](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L257)*



Create a Lambda function from a folder or source file


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<[IZipLambdaResult](../interfaces/_macros_lambda_macro_.iziplambdaresult.md)>





___

<a id="buildziplambdatemplate"></a>

###  buildZipLambdaTemplate

► **buildZipLambdaTemplate**(__namedParameters: *`object`*): `Promise`.<[IZipLambdaTemplateResult](../interfaces/_macros_lambda_macro_.iziplambdatemplateresult.md)>



*Defined in [macros/lambda.macro.ts:396](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L396)*



Create a Lambda function from a folder or source file


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<[IZipLambdaTemplateResult](../interfaces/_macros_lambda_macro_.iziplambdatemplateresult.md)>





___


<a id="defaultconfig"></a>

## Object literal: defaultConfig


<a id="defaultconfig.environment"></a>

###  Environment

**●  Environment**:  *`object`* 

*Defined in [macros/lambda.macro.ts:18](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L18)*


#### Type declaration





___
<a id="defaultconfig.functionname"></a>

###  FunctionName

**●  FunctionName**:  *`string`*  = "MyFunction"

*Defined in [macros/lambda.macro.ts:19](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L19)*





___
<a id="defaultconfig.handler"></a>

###  Handler

**●  Handler**:  *`string`*  = "index.handler"

*Defined in [macros/lambda.macro.ts:20](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L20)*





___
<a id="defaultconfig.memorysize"></a>

###  MemorySize

**●  MemorySize**:  *`number`*  = 128

*Defined in [macros/lambda.macro.ts:21](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L21)*





___
<a id="defaultconfig.role"></a>

###  Role

**●  Role**:  *`string`*  = "BlankRole"

*Defined in [macros/lambda.macro.ts:22](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L22)*





___
<a id="defaultconfig.runtime"></a>

###  Runtime

**●  Runtime**:  *`string`*  = "nodejs6.10"

*Defined in [macros/lambda.macro.ts:23](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L23)*





___
<a id="defaultconfig.tags"></a>

###  Tags

**●  Tags**:  *`never`[]*  =  []

*Defined in [macros/lambda.macro.ts:24](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L24)*





___
<a id="defaultconfig.timeout"></a>

###  Timeout

**●  Timeout**:  *`number`*  = 30

*Defined in [macros/lambda.macro.ts:25](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/lambda.macro.ts#L25)*





___


