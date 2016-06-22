/**
 * Created by arming on 6/20/16.
 */
'use strict'

const cloudpotato = require('./../index')

class Authentication extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Authentication'
    let properties = {

    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class CustomResource extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::CustomResource'
    let properties = {
      ServiceToken: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Init extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Init'
    let properties = {

      RepositoryName: new cloudpotato.ResourceProperty(String, false, null),
      RepositoryPolicyText: new cloudpotato.ResourceProperty(Object, false, null),
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceLabel extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      default: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceParameterLabel extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      ParameterLogicalID: new cloudpotato.ResourceProperty(AWSCloudFormationInterfaceLabel, false, null)
    }
    super(properties, propertiesObject)
  }
}

class AWSCloudFormationInterfaceParameterGroup extends cloudpotato.SubPropertyObject {
  constructor(propertiesObject) {
    let properties = {
      Label: new cloudpotato.ResourceProperty(String, false, null),
      Parameters: new cloudpotato.ResourceArray(String, false, null)
    }
    super(properties, propertiesObject)
  }
}

class Interface extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Interface'
    let properties = {
      ParameterGroups: new cloudpotato.ResourceArray(AWSCloudFormationInterfaceParameterGroup, false, null),
      ParameterLabels: AWSCloudFormationInterfaceParameterLabel
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Stack extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::Stack'
    let properties = {
      NotificationARNs: new cloudpotato.ResourceArray(String, false, null),
      //Parameters: new cloudpotato.ResourceProperty(String, false, null),
      Tags: new cloudpotato.TagSet(),
      TemplateURL: new cloudpotato.ResourceProperty(String, true, null),
      TimeoutInMinutes: new cloudpotato.ResourceProperty(String, false, null)
    }
    super(name, resourceType, properties, propertiesObject)
    this.Parameters = {}
  }
  addParameter (parameter) {
    return this._update(this.Parameters, parameter)
  }
  _update (d, values) {
    if (Array.isArray(values)) {
      values.forEach((v) => {
        if (v.Name in d) {
          this.handleDuplicateKey(v.Name)
        }
        d[v.Name] = v
      })
    } else {
      if (values.Name in d) {
        this.handleDuplicateKey(values.Name)
      }
      d[values.Name] = values
    }
    return values
  }
  toJson() {
    //TODO: Work on adding Parameter output here
    return super.toJson()
  }
}

class WaitCondition extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudFormation::WaitCondition'
    let properties = {
      Count: new cloudpotato.ResourceProperty(String, false, null),
      Handle: new cloudpotato.ResourceProperty(String, true, null),
      Timeout: new cloudpotato.ResourceProperty(String, true, null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class WaitConditionHandle extends cloudpotato.BaseAWSObject {
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