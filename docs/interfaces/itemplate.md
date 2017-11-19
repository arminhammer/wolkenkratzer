[wolkenkratzer](../README.md) > [ITemplate](../interfaces/itemplate.md)



# Interface: ITemplate


Template Interface
*__member__*: Template



## Properties
<a id="awstemplateformatversion"></a>

###  AWSTemplateFormatVersion

**●  AWSTemplateFormatVersion**:  *`string`* 

*Defined in [types.ts:269](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L269)*





___

<a id="conditions"></a>

###  Conditions

**●  Conditions**:  *`object`* 

*Defined in [types.ts:274](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L274)*


#### Type declaration


[s: `string`]: [ICondition](icondition.md)






___

<a id="description"></a>

### «Optional» Description

**●  Description**:  *`void`⎮`string`* 

*Defined in [types.ts:270](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L270)*





___

<a id="mappings"></a>

###  Mappings

**●  Mappings**:  *`object`* 

*Defined in [types.ts:273](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L273)*


#### Type declaration


[s: `string`]: [IMapping](imapping.md)






___

<a id="outputs"></a>

###  Outputs

**●  Outputs**:  *`object`* 

*Defined in [types.ts:276](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L276)*


#### Type declaration


[s: `string`]: [IOutput](ioutput.md)






___

<a id="parameters"></a>

###  Parameters

**●  Parameters**:  *`object`* 

*Defined in [types.ts:271](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L271)*


#### Type declaration


[s: `string`]: [IParameter](iparameter.md)






___

<a id="resources"></a>

###  Resources

**●  Resources**:  *`object`* 

*Defined in [types.ts:275](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L275)*


#### Type declaration


[s: `string`]: [IResource](iresource.md)






___

<a id="add"></a>

###  add

**●  add**:  *`function`* 

*Defined in [types.ts:277](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L277)*


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

*Defined in [types.ts:283](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L283)*


#### Type declaration
►(): `object`





**Returns:** `object`






___

<a id="import"></a>

###  import

**●  import**:  *`Function`* 

*Defined in [types.ts:285](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L285)*





___

<a id="kind"></a>

###  kind

**●  kind**:  *"Template"* 

*Defined in [types.ts:268](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L268)*





___

<a id="map"></a>

###  map

**●  map**:  *`function`* 

*Defined in [types.ts:286](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L286)*


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

*Defined in [types.ts:284](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L284)*





___

<a id="parameterize"></a>

###  parameterize

**●  parameterize**:  *`Function`* 

*Defined in [types.ts:287](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L287)*





___

<a id="putout"></a>

###  putOut

**●  putOut**:  *`Function`* 

*Defined in [types.ts:288](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L288)*





___

<a id="remove"></a>

###  remove

**●  remove**:  *`Function`* 

*Defined in [types.ts:281](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L281)*





___

<a id="removedescription"></a>

###  removeDescription

**●  removeDescription**:  *`Function`* 

*Defined in [types.ts:282](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L282)*





___

<a id="set"></a>

###  set

**●  set**:  *`Function`* 

*Defined in [types.ts:289](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L289)*





___

<a id="yaml"></a>

###  yaml

**●  yaml**:  *`function`* 

*Defined in [types.ts:290](https://github.com/arminhammer/wolkenkratzer/blob/c1dd44b/src/types.ts#L290)*


#### Type declaration
►(): `string`





**Returns:** `string`






___


