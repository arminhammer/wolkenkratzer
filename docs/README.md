
[![npm version](https://badge.fury.io/js/wolkenkratzer.svg)](https://badge.fury.io/js/wolkenkratzer)
[![Build Status](https://travis-ci.org/arminhammer/wolkenkratzer.svg?branch=master)](https://travis-ci.org/arminhammer/wolkenkratzer)
[![Coverage Status](https://coveralls.io/repos/github/arminhammer/wolkenkratzer/badge.svg?branch=master)](https://coveralls.io/github/arminhammer/wolkenkratzer?branch=master)
[![Issue Count](https://codeclimate.com/github/arminhammer/wolkenkratzer/badges/issue_count.svg)](https://codeclimate.com/github/arminhammer/wolkenkratzer)
[![DeepScan Grade](https://deepscan.io/api/projects/1062/branches/2159/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=1062&bid=2159)

# Welcome to Wolkenkratzer!

Wolkenkratzer is a Javascript library that allows you to programmatically generate AWS CloudFormation templates. 

## Warning

The API for wolkenkratzer is not stable! There were many changes between the 0.6.0 and 0.7.0 releases. The API will continue to unstable until the 1.0 release. If you want to use wolkenkratzer make sure you lock the version you are using in your package.json so that your code doesn't break. The API documentation is currently lacking, but will be improved in the future.

The library targets 100% feature parity with CloudFormation. This is accomplished by scraping the public documentation and using that to build the data model. The scraper and json data model are in the cfn-doc-json-stubs project. Markdown documentation for the data model is available at doc.md.

Wolkenkratzer's API is designed around immutable Template objects, and action functions that take an existing Template object and return a new one, without mutating the existing one. This allows for techniques such as method chaining:

```javascript
const { Template, Output, S3, Ref } = require('wolkenkratzer');

let t = Template()
  .add(S3.Bucket('Bucket'))
  .add(Output('BucketName', { Value: Ref('Bucket') }));

console.log(JSON.stringify(t.build(), null, 2));
```

Results in:

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "Bucket": {
      "Type": "AWS::S3::Bucket",
        "Properties": {}
    }
  },
  "Outputs": {
    "BucketName": {
      "Value": {
        "Ref": "Bucket"
      }
    }
  }
}
```

When adding resources to the template, you can optionally have an Output block and (string) Parameters created automatically in one call:

```javascript
const { Template, S3 } = require('wolkenkratzer');

let t = Template().add(S3.Bucket('Bucket'), {
  Output: true,
  Parameters: ['BucketName']
});

console.log(JSON.stringify(t.build(), null, 2));
```

Result:

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "Bucket": {
      "Type": "AWS::S3::Bucket",
      "Properties": {
        "BucketName": { "Ref": "BucketS3BucketParam" }
      }
    }
  },
  "Parameters": {
    "BucketS3BucketParam": {
        "Type": "String"
    }
  },
  "Outputs": {
    "BucketS3BucketOutput": {
        "Value": {
            "Ref": "Bucket"
        },
        "Export": {
            "Name": {
                "Fn::Sub": "${AWS::StackName}-S3-Bucket-Bucket"
            }
        }
    }
  }
}
```

Wolkenkratzer will also do (rudimentary) template type validation, throwing an error if an incorrect value is provided.

# Examples

Please see the examples/ folder for real and tested examples on how to use the library.

# API



## Index

### Interfaces

* [IAddOptions](interfaces/iaddoptions.md)
* [ICondition](interfaces/icondition.md)
* [ICreationPolicy](interfaces/icreationpolicy.md)
* [IDeletionPolicy](interfaces/ideletionpolicy.md)
* [IDependsOn](interfaces/idependson.md)
* [IDescription](interfaces/idescription.md)
* [IFnAnd](interfaces/ifnand.md)
* [IFnBase64](interfaces/ifnbase64.md)
* [IFnEquals](interfaces/ifnequals.md)
* [IFnFindInMap](interfaces/ifnfindinmap.md)
* [IFnGetAZs](interfaces/ifngetazs.md)
* [IFnGetAtt](interfaces/ifngetatt.md)
* [IFnIf](interfaces/ifnif.md)
* [IFnImportValue](interfaces/ifnimportvalue.md)
* [IFnJoin](interfaces/ifnjoin.md)
* [IFnNot](interfaces/ifnnot.md)
* [IFnOr](interfaces/ifnor.md)
* [IFnSelect](interfaces/ifnselect.md)
* [IFnSplit](interfaces/ifnsplit.md)
* [IFnSub](interfaces/ifnsub.md)
* [IMapping](interfaces/imapping.md)
* [IOutput](interfaces/ioutput.md)
* [IOutputProperties](interfaces/ioutputproperties.md)
* [IParameter](interfaces/iparameter.md)
* [IParameterProperties](interfaces/iparameterproperties.md)
* [IRef](interfaces/iref.md)
* [IResource](interfaces/iresource.md)
* [IResourceMetadata](interfaces/iresourcemetadata.md)
* [IService](interfaces/iservice.md)
* [ITemplate](interfaces/itemplate.md)
* [IUpdatePolicy](interfaces/iupdatepolicy.md)
* [IZipLambdaResult](interfaces/iziplambdaresult.md)
* [IZipLambdaTemplateResult](interfaces/iziplambdatemplateresult.md)


### Type aliases

* [ConditionFunction](#conditionfunction)
* [Conditional](#conditional)
* [IAttribute](#iattribute)
* [IElement](#ielement)
* [IIntrinsic](#iintrinsic)


### Variables

* [Lambda](#lambda)
* [bluebird](#bluebird)
* [ec2info](#ec2info)
* [fs](#fs)
* [instanceTypes](#instancetypes)
* [jszip](#jszip)
* [klaw](#klaw)
* [results](#results)
* [s3Service](#s3service)


### Functions

* [Bucket](#bucket)
* [Condition](#condition)
* [CreationPolicy](#creationpolicy)
* [CustomResource](#customresource)
* [DeletionPolicy](#deletionpolicy)
* [DependsOn](#dependson)
* [Description](#description)
* [FnAnd](#fnand)
* [FnBase64](#fnbase64)
* [FnEquals](#fnequals)
* [FnFindInMap](#fnfindinmap)
* [FnGetAZs](#fngetazs)
* [FnGetAtt](#fngetatt)
* [FnIf](#fnif)
* [FnImportValue](#fnimportvalue)
* [FnJoin](#fnjoin)
* [FnNot](#fnnot)
* [FnOr](#fnor)
* [FnSelect](#fnselect)
* [FnSplit](#fnsplit)
* [FnSub](#fnsub)
* [Mapping](#mapping)
* [Output](#output)
* [Parameter](#parameter)
* [Ref](#ref)
* [Resource](#resource)
* [ResourceMetadata](#resourcemetadata)
* [S3BucketTransform](#s3buckettransform)
* [Service](#service)
* [Template](#template)
* [UpdatePolicy](#updatepolicy)
* [buildInlineLambda](#buildinlinelambda)
* [buildInlineLambdaTemplate](#buildinlinelambdatemplate)
* [buildIntrinsic](#buildintrinsic)
* [buildLambda](#buildlambda)
* [buildLambdaTemplate](#buildlambdatemplate)
* [buildZipLambda](#buildziplambda)
* [buildZipLambdaTemplate](#buildziplambdatemplate)
* [getAMIMap](#getamimap)
* [getInstanceTypeList](#getinstancetypelist)
* [getInstanceTypeMap](#getinstancetypemap)
* [getInstanceTypeNameList](#getinstancetypenamelist)
* [getRegions](#getregions)


### Object literals

* [Pseudo](#pseudo)
* [defaultConfig](#defaultconfig)



---
# Type aliases
<a id="conditionfunction"></a>

###  ConditionFunction

**Τ ConditionFunction**:  *[IFnAnd](interfaces/ifnand.md)⎮[IFnEquals](interfaces/ifnequals.md)⎮[IFnIf](interfaces/ifnif.md)⎮[IFnNot](interfaces/ifnnot.md)⎮[IFnOr](interfaces/ifnor.md)* 

*Defined in [types.ts:153](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/types.ts#L153)*





___

<a id="conditional"></a>

###  Conditional

**Τ Conditional**:  *`string`⎮[IRef](interfaces/iref.md)⎮[IFnGetAtt](interfaces/ifngetatt.md)* 

*Defined in [types.ts:152](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/types.ts#L152)*



Intrinsic Functions




___

<a id="iattribute"></a>

###  IAttribute

**Τ IAttribute**:  *[ICreationPolicy](interfaces/icreationpolicy.md)⎮[IDeletionPolicy](interfaces/ideletionpolicy.md)⎮[IDependsOn](interfaces/idependson.md)⎮[IResourceMetadata](interfaces/iresourcemetadata.md)⎮[IUpdatePolicy](interfaces/iupdatepolicy.md)* 

*Defined in [types.ts:143](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/types.ts#L143)*





___

<a id="ielement"></a>

###  IElement

**Τ IElement**:  *[ICondition](interfaces/icondition.md)⎮[IParameter](interfaces/iparameter.md)⎮[IDescription](interfaces/idescription.md)⎮[IOutput](interfaces/ioutput.md)⎮[IResource](interfaces/iresource.md)⎮[ICondition](interfaces/icondition.md)⎮[IMapping](interfaces/imapping.md)* 

*Defined in [types.ts:79](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/types.ts#L79)*





___

<a id="iintrinsic"></a>

###  IIntrinsic

**Τ IIntrinsic**:  *[IRef](interfaces/iref.md)⎮[IFnGetAtt](interfaces/ifngetatt.md)⎮[IFnJoin](interfaces/ifnjoin.md)⎮[IFnAnd](interfaces/ifnand.md)⎮[IFnEquals](interfaces/ifnequals.md)⎮[IFnIf](interfaces/ifnif.md)⎮[IFnNot](interfaces/ifnnot.md)⎮[IFnOr](interfaces/ifnor.md)⎮[ConditionFunction](#conditionfunction)* 

*Defined in [types.ts:197](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/types.ts#L197)*





___


# Variables
<a id="lambda"></a>

###  Lambda

**●  Lambda**:  *[IService](interfaces/iservice.md)*  =  Service(LambdaJson)

*Defined in [macros/lambda.macro.ts:15](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L15)*





___

<a id="bluebird"></a>

###  bluebird

**●  bluebird**:  *`any`*  =  require('bluebird')

*Defined in [macros/lambda.macro.ts:11](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L11)*





___

<a id="ec2info"></a>

###  ec2info

**●  ec2info**:  *`any`*  =  require('../ec2info/www/instances.json')

*Defined in [transform/buildEC2Data.ts:4](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/transform/buildEC2Data.ts#L4)*





___

<a id="fs"></a>

###  fs

**●  fs**:  *`any`*  =  require('fs-extra')

*Defined in [macros/lambda.macro.ts:10](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L10)*





___

<a id="instancetypes"></a>

###  instanceTypes

**●  instanceTypes**:  *`any`*  =  require('../ec2info.json')

*Defined in [macros/ec2meta.macro.ts:5](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/ec2meta.macro.ts#L5)*





___

<a id="jszip"></a>

###  jszip

**●  jszip**:  *`any`*  =  require('jszip')

*Defined in [macros/lambda.macro.ts:12](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L12)*





___

<a id="klaw"></a>

###  klaw

**●  klaw**:  *`any`*  =  require('klaw')

*Defined in [macros/lambda.macro.ts:13](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L13)*





___

<a id="results"></a>

###  results

**●  results**:  *`any`*  =  ec2info.map(i => {
  return {
    arch: i.arch,
    instance_type: i.instance_type,
    linux_virtualization_types: i.linux_virtualization_types
  };
})

*Defined in [transform/buildEC2Data.ts:6](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/transform/buildEC2Data.ts#L6)*





___

<a id="s3service"></a>

###  s3Service

**●  s3Service**:  *`any`*  =  Service(stubs.S3)

*Defined in [transform/s3.ts:5](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/transform/s3.ts#L5)*





___


# Functions
<a id="bucket"></a>

###  Bucket

► **Bucket**(name: *`any`*, newName: *`any`*, region: *`any`*, aws: *`any`*): `void`



*Defined in [macros/s3.macro.ts:14](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/s3.macro.ts#L14)*


*__memberof__*: module:Macro

*__constructor__*: 



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `any`   |  - |
| newName | `any`   |  - |
| region | `any`   |  - |
| aws | `any`   |  - |





**Returns:** `void`





___

<a id="condition"></a>

###  Condition

► **Condition**(name: *`string`*, conditionFn: *[IFnAnd](interfaces/ifnand.md)⎮[IFnEquals](interfaces/ifnequals.md)⎮[IFnIf](interfaces/ifnif.md)⎮[IFnNot](interfaces/ifnnot.md)⎮[IFnOr](interfaces/ifnor.md)*): [ICondition](interfaces/icondition.md)



*Defined in [elements/condition.ts:10](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/elements/condition.ts#L10)*



Create a Condition object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |
| conditionFn | [IFnAnd](interfaces/ifnand.md)⎮[IFnEquals](interfaces/ifnequals.md)⎮[IFnIf](interfaces/ifnif.md)⎮[IFnNot](interfaces/ifnnot.md)⎮[IFnOr](interfaces/ifnor.md)   |  - |





**Returns:** [ICondition](interfaces/icondition.md)





___

<a id="creationpolicy"></a>

###  CreationPolicy

► **CreationPolicy**(resource: *`string`*, content: *`any`*): [ICreationPolicy](interfaces/icreationpolicy.md)



*Defined in [attributes/creationpolicy.ts:3](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/attributes/creationpolicy.ts#L3)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resource | `string`   |  - |
| content | `any`   |  - |





**Returns:** [ICreationPolicy](interfaces/icreationpolicy.md)





___

<a id="customresource"></a>

###  CustomResource

► **CustomResource**(name: *`string`*, properties: *`any`*, options: *`any`*): [IResource](interfaces/iresource.md)



*Defined in [elements/resource.ts:30](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/elements/resource.ts#L30)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |
| properties | `any`   |  - |
| options | `any`   |  - |





**Returns:** [IResource](interfaces/iresource.md)





___

<a id="deletionpolicy"></a>

###  DeletionPolicy

► **DeletionPolicy**(resource: *`string`*, content: *"Delete"⎮"Retain"⎮"Snapshot"*): [IDeletionPolicy](interfaces/ideletionpolicy.md)



*Defined in [attributes/deletionpolicy.ts:3](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/attributes/deletionpolicy.ts#L3)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resource | `string`   |  - |
| content | "Delete"⎮"Retain"⎮"Snapshot"   |  - |





**Returns:** [IDeletionPolicy](interfaces/ideletionpolicy.md)





___

<a id="dependson"></a>

###  DependsOn

► **DependsOn**(resource: *`string`*, content: *`string`⎮`string`[]*): [IDependsOn](interfaces/idependson.md)



*Defined in [attributes/dependson.ts:3](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/attributes/dependson.ts#L3)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resource | `string`   |  - |
| content | `string`⎮`string`[]   |  - |





**Returns:** [IDependsOn](interfaces/idependson.md)





___

<a id="description"></a>

###  Description

► **Description**(content: *`string`*): [IDescription](interfaces/idescription.md)



*Defined in [elements/description.ts:7](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/elements/description.ts#L7)*



Set the Description of a template


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| content | `string`   |  - |





**Returns:** [IDescription](interfaces/idescription.md)





___

<a id="fnand"></a>

###  FnAnd

► **FnAnd**(one: *[Conditional](#conditional)*, two: *[Conditional](#conditional)*): [IFnAnd](interfaces/ifnand.md)



*Defined in [intrinsic.ts:28](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L28)*



Returns an Fn::And object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| one | [Conditional](#conditional)   |  - |
| two | [Conditional](#conditional)   |  - |





**Returns:** [IFnAnd](interfaces/ifnand.md)





___

<a id="fnbase64"></a>

###  FnBase64

► **FnBase64**(input: *`string`*): [IFnBase64](interfaces/ifnbase64.md)



*Defined in [intrinsic.ts:118](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L118)*



Returns an Fn::Base64 object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string`   |  - |





**Returns:** [IFnBase64](interfaces/ifnbase64.md)





___

<a id="fnequals"></a>

###  FnEquals

► **FnEquals**(one: *[Conditional](#conditional)*, two: *[Conditional](#conditional)*): [IFnEquals](interfaces/ifnequals.md)



*Defined in [intrinsic.ts:102](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L102)*



Returns an Fn::Equals object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| one | [Conditional](#conditional)   |  - |
| two | [Conditional](#conditional)   |  - |





**Returns:** [IFnEquals](interfaces/ifnequals.md)





___

<a id="fnfindinmap"></a>

###  FnFindInMap

► **FnFindInMap**(mapName: *`string`*, topLevelKey: *`string`*, secondLevelKey: *`string`*): [IFnFindInMap](interfaces/ifnfindinmap.md)



*Defined in [intrinsic.ts:128](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L128)*



Returns an Fn::FindInMap object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mapName | `string`   |  - |
| topLevelKey | `string`   |  - |
| secondLevelKey | `string`   |  - |





**Returns:** [IFnFindInMap](interfaces/ifnfindinmap.md)





___

<a id="fngetazs"></a>

###  FnGetAZs

► **FnGetAZs**(region: *`string`⎮[IRef](interfaces/iref.md)*): [IFnGetAZs](interfaces/ifngetazs.md)



*Defined in [intrinsic.ts:143](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L143)*



Returns an Fn::GetAZs object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| region | `string`⎮[IRef](interfaces/iref.md)   |  - |





**Returns:** [IFnGetAZs](interfaces/ifngetazs.md)





___

<a id="fngetatt"></a>

###  FnGetAtt

► **FnGetAtt**(target: *[IResource](interfaces/iresource.md)⎮`string`*, attr: *`string`*): [IFnGetAtt](interfaces/ifngetatt.md)



*Defined in [intrinsic.ts:73](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L73)*



Returns an Fn::GetAtt object that references another element in the template


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| target | [IResource](interfaces/iresource.md)⎮`string`   |  - |
| attr | `string`   |  - |





**Returns:** [IFnGetAtt](interfaces/ifngetatt.md)





___

<a id="fnif"></a>

###  FnIf

► **FnIf**(items: *`Array`.<`string`⎮[IIntrinsic](#iintrinsic)>*): [IFnIf](interfaces/ifnif.md)



*Defined in [intrinsic.ts:52](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L52)*



Returns an Fn::If object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `Array`.<`string`⎮[IIntrinsic](#iintrinsic)>   |  - |





**Returns:** [IFnIf](interfaces/ifnif.md)





___

<a id="fnimportvalue"></a>

###  FnImportValue

► **FnImportValue**(value: *`string`⎮[IFnBase64](interfaces/ifnbase64.md)⎮[IFnFindInMap](interfaces/ifnfindinmap.md)⎮[IFnIf](interfaces/ifnif.md)⎮[IFnJoin](interfaces/ifnjoin.md)⎮[IFnSelect](interfaces/ifnselect.md)⎮[IFnSplit](interfaces/ifnsplit.md)⎮[IFnSub](interfaces/ifnsub.md)⎮[IRef](interfaces/iref.md)*): [IFnImportValue](interfaces/ifnimportvalue.md)



*Defined in [intrinsic.ts:204](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L204)*



Returns an Fn::ImportValue object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`⎮[IFnBase64](interfaces/ifnbase64.md)⎮[IFnFindInMap](interfaces/ifnfindinmap.md)⎮[IFnIf](interfaces/ifnif.md)⎮[IFnJoin](interfaces/ifnjoin.md)⎮[IFnSelect](interfaces/ifnselect.md)⎮[IFnSplit](interfaces/ifnsplit.md)⎮[IFnSub](interfaces/ifnsub.md)⎮[IRef](interfaces/iref.md)   |  - |





**Returns:** [IFnImportValue](interfaces/ifnimportvalue.md)





___

<a id="fnjoin"></a>

###  FnJoin

► **FnJoin**(delimiter: *`string`*, values: *`Array`.<`string`⎮[IFnGetAtt](interfaces/ifngetatt.md)⎮[IRef](interfaces/iref.md)>⎮[IFnGetAtt](interfaces/ifngetatt.md)*): [IFnJoin](interfaces/ifnjoin.md)



*Defined in [intrinsic.ts:84](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L84)*



Returns an Fn::Join object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| delimiter | `string`   |  - |
| values | `Array`.<`string`⎮[IFnGetAtt](interfaces/ifngetatt.md)⎮[IRef](interfaces/iref.md)>⎮[IFnGetAtt](interfaces/ifngetatt.md)   |  - |





**Returns:** [IFnJoin](interfaces/ifnjoin.md)





___

<a id="fnnot"></a>

###  FnNot

► **FnNot**(items: *`Array`.<`string`⎮[IIntrinsic](#iintrinsic)>*): [IFnNot](interfaces/ifnnot.md)



*Defined in [intrinsic.ts:44](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L44)*



Returns an Fn::Not object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `Array`.<`string`⎮[IIntrinsic](#iintrinsic)>   |  - |





**Returns:** [IFnNot](interfaces/ifnnot.md)





___

<a id="fnor"></a>

###  FnOr

► **FnOr**(items: *`Array`.<`string`⎮[IIntrinsic](#iintrinsic)>*): [IFnOr](interfaces/ifnor.md)



*Defined in [intrinsic.ts:36](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L36)*



Returns an Fn::Or object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `Array`.<`string`⎮[IIntrinsic](#iintrinsic)>   |  - |





**Returns:** [IFnOr](interfaces/ifnor.md)





___

<a id="fnselect"></a>

###  FnSelect

► **FnSelect**(index: *`string`⎮`number`*, list: *`Array`.<`string`⎮[IFnFindInMap](interfaces/ifnfindinmap.md)⎮[IFnGetAtt](interfaces/ifngetatt.md)⎮[IFnGetAZs](interfaces/ifngetazs.md)⎮[IFnIf](interfaces/ifnif.md)⎮[IFnSplit](interfaces/ifnsplit.md)⎮[IRef](interfaces/iref.md)>*): [IFnSelect](interfaces/ifnselect.md)



*Defined in [intrinsic.ts:155](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L155)*



Returns an Fn::Select object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| index | `string`⎮`number`   |  - |
| list | `Array`.<`string`⎮[IFnFindInMap](interfaces/ifnfindinmap.md)⎮[IFnGetAtt](interfaces/ifngetatt.md)⎮[IFnGetAZs](interfaces/ifngetazs.md)⎮[IFnIf](interfaces/ifnif.md)⎮[IFnSplit](interfaces/ifnsplit.md)⎮[IRef](interfaces/iref.md)>   |  - |





**Returns:** [IFnSelect](interfaces/ifnselect.md)





___

<a id="fnsplit"></a>

###  FnSplit

► **FnSplit**(delimiter: *`string`*, value: *`string`*): [IFnSplit](interfaces/ifnsplit.md)



*Defined in [intrinsic.ts:225](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L225)*



Returns an Fn::Split object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| delimiter | `string`   |  - |
| value | `string`   |  - |





**Returns:** [IFnSplit](interfaces/ifnsplit.md)





___

<a id="fnsub"></a>

###  FnSub

► **FnSub**(input: *`string`*): [IFnSub](interfaces/ifnsub.md)



*Defined in [intrinsic.ts:110](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L110)*



Returns an Fn::Sub object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string`   |  - |





**Returns:** [IFnSub](interfaces/ifnsub.md)





___

<a id="mapping"></a>

###  Mapping

► **Mapping**(name: *`string`*, subName: *`string`*, body: *`object`*): [IMapping](interfaces/imapping.md)



*Defined in [elements/mapping.ts:9](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/elements/mapping.ts#L9)*



Create a Mapping object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |
| subName | `string`   |  - |
| body | `object`   |  - |





**Returns:** [IMapping](interfaces/imapping.md)





___

<a id="output"></a>

###  Output

► **Output**(name: *`string`*, properties: *[IOutputProperties](interfaces/ioutputproperties.md)*): [IOutput](interfaces/ioutput.md)



*Defined in [elements/output.ts:10](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/elements/output.ts#L10)*



Creatr an Output object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |
| properties | [IOutputProperties](interfaces/ioutputproperties.md)   |  - |





**Returns:** [IOutput](interfaces/ioutput.md)





___

<a id="parameter"></a>

###  Parameter

► **Parameter**(name: *`string`*, properties: *[IParameterProperties](interfaces/iparameterproperties.md)*): [IParameter](interfaces/iparameter.md)



*Defined in [elements/parameter.ts:8](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/elements/parameter.ts#L8)*



Create a Parameter object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |
| properties | [IParameterProperties](interfaces/iparameterproperties.md)   |  - |





**Returns:** [IParameter](interfaces/iparameter.md)





___

<a id="ref"></a>

###  Ref

► **Ref**(target: *[IResource](interfaces/iresource.md)⎮[IParameter](interfaces/iparameter.md)⎮`string`*): [IRef](interfaces/iref.md)



*Defined in [intrinsic.ts:60](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L60)*



Returns a Ref object that references another element in the template


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| target | [IResource](interfaces/iresource.md)⎮[IParameter](interfaces/iparameter.md)⎮`string`   |  - |





**Returns:** [IRef](interfaces/iref.md)





___

<a id="resource"></a>

###  Resource

► **Resource**(name: *`string`*, properties: *`any`*, options: *`any`*): [IResource](interfaces/iresource.md)



*Defined in [elements/resource.ts:9](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/elements/resource.ts#L9)*



Create a Resource object


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |
| properties | `any`   |  - |
| options | `any`   |  - |





**Returns:** [IResource](interfaces/iresource.md)





___

<a id="resourcemetadata"></a>

###  ResourceMetadata

► **ResourceMetadata**(resource: *`string`*, content: *`any`*): [IResourceMetadata](interfaces/iresourcemetadata.md)



*Defined in [attributes/metadata.ts:3](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/attributes/metadata.ts#L3)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resource | `string`   |  - |
| content | `any`   |  - |





**Returns:** [IResourceMetadata](interfaces/iresourcemetadata.md)





___

<a id="s3buckettransform"></a>

###  S3BucketTransform

► **S3BucketTransform**(bucketName: *`string`*, logicalName: *`string`*, awsObj: *`any`*): `Promise`.<`Object`>



*Defined in [transform/s3.ts:7](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/transform/s3.ts#L7)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bucketName | `string`   |  - |
| logicalName | `string`   |  - |
| awsObj | `any`   |  - |





**Returns:** `Promise`.<`Object`>





___

<a id="service"></a>

###  Service

► **Service**(json: *`any`*): [IService](interfaces/iservice.md)



*Defined in [service.ts:8](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/service.ts#L8)*



Return a Service object to create Resources and Attributes


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `any`   |  - |





**Returns:** [IService](interfaces/iservice.md)





___

<a id="template"></a>

###  Template

► **Template**(): [ITemplate](interfaces/itemplate.md)



*Defined in [template.ts:60](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/template.ts#L60)*



Returns a new Template object.
*__member__*: Template





**Returns:** [ITemplate](interfaces/itemplate.md)
ITemplate






___

<a id="updatepolicy"></a>

###  UpdatePolicy

► **UpdatePolicy**(resource: *`string`*, content: *`any`*): [IUpdatePolicy](interfaces/iupdatepolicy.md)



*Defined in [attributes/updatepolicy.ts:3](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/attributes/updatepolicy.ts#L3)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resource | `string`   |  - |
| content | `any`   |  - |





**Returns:** [IUpdatePolicy](interfaces/iupdatepolicy.md)





___

<a id="buildinlinelambda"></a>

###  buildInlineLambda

► **buildInlineLambda**(__namedParameters: *`object`*): `any`



*Defined in [macros/lambda.macro.ts:139](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L139)*



Create an inline Lambda function


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `any`





___

<a id="buildinlinelambdatemplate"></a>

###  buildInlineLambdaTemplate

► **buildInlineLambdaTemplate**(__namedParameters: *`object`*): `Promise`.<[ITemplate](interfaces/itemplate.md)>



*Defined in [macros/lambda.macro.ts:118](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L118)*



Create an inline Lambda function from a folder or source file


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<[ITemplate](interfaces/itemplate.md)>





___

<a id="buildintrinsic"></a>

###  buildIntrinsic

► **buildIntrinsic**(input: *`any`*): `any`



*Defined in [intrinsic.ts:171](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/intrinsic.ts#L171)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `any`   |  - |





**Returns:** `any`





___

<a id="buildlambda"></a>

###  buildLambda

► **buildLambda**(__namedParameters: *`object`*): `Promise`.<`Object`>



*Defined in [macros/lambda.macro.ts:290](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L290)*



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



*Defined in [macros/lambda.macro.ts:449](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L449)*



Create a Lambda function from a folder or source file


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<`Object`>





___

<a id="buildziplambda"></a>

###  buildZipLambda

► **buildZipLambda**(__namedParameters: *`object`*): `Promise`.<[IZipLambdaResult](interfaces/iziplambdaresult.md)>



*Defined in [macros/lambda.macro.ts:266](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L266)*



Create a Lambda function from a folder or source file


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<[IZipLambdaResult](interfaces/iziplambdaresult.md)>





___

<a id="buildziplambdatemplate"></a>

###  buildZipLambdaTemplate

► **buildZipLambdaTemplate**(__namedParameters: *`object`*): `Promise`.<[IZipLambdaTemplateResult](interfaces/iziplambdatemplateresult.md)>



*Defined in [macros/lambda.macro.ts:405](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L405)*



Create a Lambda function from a folder or source file


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | `object`   |  - |





**Returns:** `Promise`.<[IZipLambdaTemplateResult](interfaces/iziplambdatemplateresult.md)>





___

<a id="getamimap"></a>

###  getAMIMap

► **getAMIMap**(filters: *`any`*, regions: *`any`*, aws: *`any`*): `Bluebird`.<`any`>



*Defined in [macros/ec2meta.macro.ts:75](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/ec2meta.macro.ts#L75)*



Returns an AMI Map that can be added to a Mapping.
*__memberof__*: module:Macro



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filters | `any`   |  - |
| regions | `any`   |  - |
| aws | `any`   |  - |





**Returns:** `Bluebird`.<`any`>







___

<a id="getinstancetypelist"></a>

###  getInstanceTypeList

► **getInstanceTypeList**(): `any`



*Defined in [macros/ec2meta.macro.ts:12](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/ec2meta.macro.ts#L12)*



Returns an array of all instance types and details.
*__memberof__*: module:Macro





**Returns:** `any`







___

<a id="getinstancetypemap"></a>

###  getInstanceTypeMap

► **getInstanceTypeMap**(): `any`



*Defined in [macros/ec2meta.macro.ts:34](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/ec2meta.macro.ts#L34)*



Returns a map of all instance types and details.
*__memberof__*: module:Macro





**Returns:** `any`







___

<a id="getinstancetypenamelist"></a>

###  getInstanceTypeNameList

► **getInstanceTypeNameList**(): `string`[]



*Defined in [macros/ec2meta.macro.ts:21](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/ec2meta.macro.ts#L21)*



Returns an array of just the instance type names available in AWS.
*__memberof__*: module:Macro





**Returns:** `string`[]







___

<a id="getregions"></a>

###  getRegions

► **getRegions**(): `string`[]



*Defined in [macros/ec2meta.macro.ts:47](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/ec2meta.macro.ts#L47)*



Returns an array of the names of all regions in AWS.
*__memberof__*: module:Macro





**Returns:** `string`[]







___


<a id="pseudo"></a>

## Object literal: Pseudo


Strings constants that map to CloudFormation pseudoparameter Pseudo.AWS_ACCOUNT_ID Pseudo.AWS_NOTIFICATION_ARNS Pseudo.AWS_NO_VALUE Pseudo.AWS_REGION Pseudo.AWS_STACK_ID Pseudo.AWS_STACK_NAME


<a id="pseudo.aws_account_id"></a>

###  AWS_ACCOUNT_ID

**●  AWS_ACCOUNT_ID**:  *`string`*  = "AWS::AccountId"

*Defined in [pseudo.ts:11](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/pseudo.ts#L11)*





___
<a id="pseudo.aws_notification_arns"></a>

###  AWS_NOTIFICATION_ARNS

**●  AWS_NOTIFICATION_ARNS**:  *`string`*  = "AWS::NotificationARNs"

*Defined in [pseudo.ts:12](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/pseudo.ts#L12)*





___
<a id="pseudo.aws_no_value"></a>

###  AWS_NO_VALUE

**●  AWS_NO_VALUE**:  *`string`*  = "AWS::NoValue"

*Defined in [pseudo.ts:13](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/pseudo.ts#L13)*





___
<a id="pseudo.aws_region"></a>

###  AWS_REGION

**●  AWS_REGION**:  *`string`*  = "AWS::Region"

*Defined in [pseudo.ts:14](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/pseudo.ts#L14)*





___
<a id="pseudo.aws_stack_id"></a>

###  AWS_STACK_ID

**●  AWS_STACK_ID**:  *`string`*  = "AWS::StackId"

*Defined in [pseudo.ts:15](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/pseudo.ts#L15)*





___
<a id="pseudo.aws_stack_name"></a>

###  AWS_STACK_NAME

**●  AWS_STACK_NAME**:  *`string`*  = "AWS::StackName"

*Defined in [pseudo.ts:16](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/pseudo.ts#L16)*





___

<a id="defaultconfig"></a>

## Object literal: defaultConfig


<a id="defaultconfig.environment"></a>

###  Environment

**●  Environment**:  *`object`* 

*Defined in [macros/lambda.macro.ts:18](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L18)*


#### Type declaration





___
<a id="defaultconfig.functionname"></a>

###  FunctionName

**●  FunctionName**:  *`string`*  = "MyFunction"

*Defined in [macros/lambda.macro.ts:19](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L19)*





___
<a id="defaultconfig.handler"></a>

###  Handler

**●  Handler**:  *`string`*  = "index.handler"

*Defined in [macros/lambda.macro.ts:20](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L20)*





___
<a id="defaultconfig.memorysize"></a>

###  MemorySize

**●  MemorySize**:  *`number`*  = 128

*Defined in [macros/lambda.macro.ts:21](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L21)*





___
<a id="defaultconfig.role"></a>

###  Role

**●  Role**:  *`string`*  = "BlankRole"

*Defined in [macros/lambda.macro.ts:22](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L22)*





___
<a id="defaultconfig.runtime"></a>

###  Runtime

**●  Runtime**:  *`string`*  = "nodejs6.10"

*Defined in [macros/lambda.macro.ts:23](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L23)*





___
<a id="defaultconfig.tags"></a>

###  Tags

**●  Tags**:  *`never`[]*  =  []

*Defined in [macros/lambda.macro.ts:24](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L24)*





___
<a id="defaultconfig.timeout"></a>

###  Timeout

**●  Timeout**:  *`number`*  = 30

*Defined in [macros/lambda.macro.ts:25](https://github.com/arminhammer/wolkenkratzer/blob/d0b0d87/src/macros/lambda.macro.ts#L25)*





___


