'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Authentication extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Authentication'
    let properties = {
      accessKeyId: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      buckets: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      password: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      secretKey: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      type: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      uris: new wolkenkratzer.ResourceArray(String, 'Conditional', null),
      username: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      roleName: new wolkenkratzer.ResourceProperty(String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class CustomResource extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::CustomResource'
    let properties = {
      ServiceToken: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Init extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Init'
    let properties = {
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Interface extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Interface'
    let properties = {
      ParameterGroups: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCloudFormationInterfaceParameterGroup, 'No', null),
      ParameterLabels: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCloudFormationInterfaceParameterLabel, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stack extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Stack'
    let properties = {
      NotificationARNs: new wolkenkratzer.ResourceArray(String, 'No', null),
      Parameters: new wolkenkratzer.ResourceProperty(propertyTypes.CloudFormationStackParametersPropertyType, 'Conditional', null),
      Tags: new wolkenkratzer.TagSet(),
      TemplateURL: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      TimeoutInMinutes: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class WaitCondition extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::WaitCondition'
    let properties = {
      Count: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Handle: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Timeout: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class WaitConditionHandle extends wolkenkratzer.BaseAWSObject {
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