[wolkenkratzer](../README.md) > [ITemplate](../interfaces/itemplate.md)



# Interface: ITemplate


Template Interface
*__member__*: Template



## Properties
<a id="awstemplateformatversion"></a>

###  AWSTemplateFormatVersion

**●  AWSTemplateFormatVersion**:  *`string`* 

*Defined in [types.ts:279](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L279)*





___

<a id="conditions"></a>

###  Conditions

**●  Conditions**:  *`object`* 

*Defined in [types.ts:284](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L284)*


#### Type declaration


[s: `string`]: [ICondition](icondition.md)






___

<a id="description"></a>

### «Optional» Description

**●  Description**:  *`void`⎮`string`* 

*Defined in [types.ts:280](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L280)*





___

<a id="mappings"></a>

###  Mappings

**●  Mappings**:  *`object`* 

*Defined in [types.ts:283](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L283)*


#### Type declaration


[s: `string`]: [IMapping](imapping.md)






___

<a id="outputs"></a>

###  Outputs

**●  Outputs**:  *`object`* 

*Defined in [types.ts:286](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L286)*


#### Type declaration


[s: `string`]: [IOutput](ioutput.md)






___

<a id="parameters"></a>

###  Parameters

**●  Parameters**:  *`object`* 

*Defined in [types.ts:281](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L281)*


#### Type declaration


[s: `string`]: [IParameter](iparameter.md)






___

<a id="resources"></a>

###  Resources

**●  Resources**:  *`object`* 

*Defined in [types.ts:285](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L285)*


#### Type declaration


[s: `string`]: [IResource](iresource.md)






___

<a id="add"></a>

###  add

**●  add**:  *`function`* 

*Defined in [types.ts:287](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L287)*


#### Type declaration
►(e: *[IElement](../#ielement)⎮[ICreationPolicy](icreationpolicy.md)⎮[IResourceMetadata](iresourcemetadata.md)*, options?: *[IAddOptions](iaddoptions.md)*): [ITemplate](itemplate.md)



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | [IElement](../#ielement)⎮[ICreationPolicy](icreationpolicy.md)⎮[IResourceMetadata](iresourcemetadata.md)   |  - |
| options | [IAddOptions](iaddoptions.md)   |  - |





**Returns:** [ITemplate](itemplate.md)






___

<a id="build"></a>

###  build

**●  build**:  *`function`* 

*Defined in [types.ts:293](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L293)*


#### Type declaration
►(): `object`





**Returns:** `object`






___

<a id="import"></a>

###  import

**●  import**:  *`Function`* 

*Defined in [types.ts:295](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L295)*





___

<a id="kind"></a>

###  kind

**●  kind**:  *"Template"* 

*Defined in [types.ts:278](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L278)*





___

<a id="map"></a>

###  map

**●  map**:  *`function`* 

*Defined in [types.ts:296](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L296)*


#### Type declaration
►(iterable: *`Array`.<[IElement](../#ielement)>*, mapFn: *`Function`*): [ITemplate](itemplate.md)



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| iterable | `Array`.<[IElement](../#ielement)>   |  - |
| mapFn | `Function`   |  - |





**Returns:** [ITemplate](itemplate.md)






___

<a id="merge"></a>

###  merge

**●  merge**:  *`Function`* 

*Defined in [types.ts:294](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L294)*





___

<a id="parameterize"></a>

###  parameterize

**●  parameterize**:  *`Function`* 

*Defined in [types.ts:297](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L297)*





___

<a id="putout"></a>

###  putOut

**●  putOut**:  *`Function`* 

*Defined in [types.ts:298](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L298)*





___

<a id="remove"></a>

###  remove

**●  remove**:  *`Function`* 

*Defined in [types.ts:291](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L291)*





___

<a id="removedescription"></a>

###  removeDescription

**●  removeDescription**:  *`Function`* 

*Defined in [types.ts:292](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L292)*





___

<a id="set"></a>

###  set

**●  set**:  *`Function`* 

*Defined in [types.ts:299](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L299)*





___

<a id="yaml"></a>

###  yaml

**●  yaml**:  *`function`* 

*Defined in [types.ts:300](https://github.com/arminhammer/wolkenkratzer/blob/f2716d7/src/types.ts#L300)*


#### Type declaration
►(): `string`





**Returns:** `string`






___


