'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Authentication extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Authentication'
    let properties = {
      accessKeyId: new ResourceAttribute('accessKeyId', String, 'Conditional', null),
      buckets: new ResourceAttributeArray('buckets', String, 'Conditional', null),
      password: new ResourceAttribute('password', String, 'Conditional', null),
      secretKey: new ResourceAttribute('secretKey', String, 'Conditional', null),
      type: new ResourceAttribute('type', String, 'Yes', null),
      uris: new ResourceAttributeArray('uris', String, 'Conditional', null),
      username: new ResourceAttribute('username', String, 'Conditional', null),
      roleName: new ResourceAttribute('roleName', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class CustomResource extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::CustomResource'
    let properties = {
      ServiceToken: new ResourceAttribute('ServiceToken', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Init extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Init'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Interface extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Interface'
    let properties = {
      ParameterGroups: new ResourceAttribute('ParameterGroups', types.AWSCloudFormationInterfaceParameterGroup, 'No', null),
      ParameterLabels: new ResourceAttribute('ParameterLabels', types.AWSCloudFormationInterfaceParameterLabel, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stack extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Stack'
    let properties = {
      NotificationARNs: new ResourceAttributeArray('NotificationARNs', String, 'No', null),
      Parameters: new ResourceAttribute('Parameters', types.CloudFormationStackParametersPropertyType, 'Conditional', null),
      Tags: new tag.TagSet(),
      TemplateURL: new ResourceAttribute('TemplateURL', String, 'Yes', null),
      TimeoutInMinutes: new ResourceAttribute('TimeoutInMinutes', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class WaitCondition extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::WaitCondition'
    let properties = {
      Count: new ResourceAttribute('Count', String, 'No', null),
      Handle: new ResourceAttribute('Handle', String, 'Yes', null),
      Timeout: new ResourceAttribute('Timeout', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class WaitConditionHandle extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::WaitConditionHandle'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Authentication: Authentication,
  CustomResource: CustomResource,
  Init: Init,
  Interface: Interface,
  Stack: Stack,
  WaitCondition: WaitCondition,
  WaitConditionHandle: WaitConditionHandle
}
