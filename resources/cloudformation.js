'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Authentication extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Authentication'
    let properties = {
      accessKeyId: new resource.ResourceProperty(String, 'Conditional', null),
      buckets: new resource.ResourceArray(String, 'Conditional', null),
      password: new resource.ResourceProperty(String, 'Conditional', null),
      secretKey: new resource.ResourceProperty(String, 'Conditional', null),
      type: new resource.ResourceProperty(String, 'Yes', null),
      uris: new resource.ResourceArray(String, 'Conditional', null),
      username: new resource.ResourceProperty(String, 'Conditional', null),
      roleName: new resource.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class CustomResource extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::CustomResource'
    let properties = {
      ServiceToken: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Init extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Init'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Interface extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Interface'
    let properties = {
      ParameterGroups: new resource.ResourceProperty(types.AWSCloudFormationInterfaceParameterGroup, 'No', null),
      ParameterLabels: new resource.ResourceProperty(types.AWSCloudFormationInterfaceParameterLabel, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stack extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Stack'
    let properties = {
      NotificationARNs: new resource.ResourceArray(String, 'No', null),
      Parameters: new resource.ResourceProperty(types.CloudFormationStackParametersPropertyType, 'Conditional', null),
      Tags: new tag.TagSet(),
      TemplateURL: new resource.ResourceProperty(String, 'Yes', null),
      TimeoutInMinutes: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class WaitCondition extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::WaitCondition'
    let properties = {
      Count: new resource.ResourceProperty(String, 'No', null),
      Handle: new resource.ResourceProperty(String, 'Yes', null),
      Timeout: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class WaitConditionHandle extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
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