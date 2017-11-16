[wolkenkratzer](../README.md) > ["macros/ec2meta.macro"](../modules/_macros_ec2meta_macro_.md)



# External module: "macros/ec2meta.macro"

## Index

### Variables

* [instanceTypes](_macros_ec2meta_macro_.md#instancetypes)


### Functions

* [getAMIMap](_macros_ec2meta_macro_.md#getamimap)
* [getInstanceTypeList](_macros_ec2meta_macro_.md#getinstancetypelist)
* [getInstanceTypeMap](_macros_ec2meta_macro_.md#getinstancetypemap)
* [getInstanceTypeNameList](_macros_ec2meta_macro_.md#getinstancetypenamelist)
* [getRegions](_macros_ec2meta_macro_.md#getregions)



---
## Variables
<a id="instancetypes"></a>

###  instanceTypes

**●  instanceTypes**:  *`any`*  =  require('../ec2info.json')

*Defined in [macros/ec2meta.macro.ts:6](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/ec2meta.macro.ts#L6)*





___


## Functions
<a id="getamimap"></a>

###  getAMIMap

► **getAMIMap**(filters: *`any`*, regions: *`any`*, aws: *`any`*): `Bluebird`.<`any`>



*Defined in [macros/ec2meta.macro.ts:76](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/ec2meta.macro.ts#L76)*



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



*Defined in [macros/ec2meta.macro.ts:13](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/ec2meta.macro.ts#L13)*



Returns an array of all instance types and details.
*__memberof__*: module:Macro





**Returns:** `any`







___

<a id="getinstancetypemap"></a>

###  getInstanceTypeMap

► **getInstanceTypeMap**(): `any`



*Defined in [macros/ec2meta.macro.ts:35](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/ec2meta.macro.ts#L35)*



Returns a map of all instance types and details.
*__memberof__*: module:Macro





**Returns:** `any`







___

<a id="getinstancetypenamelist"></a>

###  getInstanceTypeNameList

► **getInstanceTypeNameList**(): `string`[]



*Defined in [macros/ec2meta.macro.ts:22](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/ec2meta.macro.ts#L22)*



Returns an array of just the instance type names available in AWS.
*__memberof__*: module:Macro





**Returns:** `string`[]







___

<a id="getregions"></a>

###  getRegions

► **getRegions**(): `string`[]



*Defined in [macros/ec2meta.macro.ts:48](https://github.com/arminhammer/wolkenkratzer/blob/77659cc/src/macros/ec2meta.macro.ts#L48)*



Returns an array of the names of all regions in AWS.
*__memberof__*: module:Macro





**Returns:** `string`[]







___


