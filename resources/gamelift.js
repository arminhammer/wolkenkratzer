'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Alias extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Alias'
    let properties = {
      Description: new resource.ResourceProperty(String, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      RoutingStrategy: new resource.ResourceProperty(types.AmazonGameLiftAliasRoutingStrategy, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Build extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Build'
    let properties = {
      Name: new resource.ResourceProperty(String, 'No', null),
      StorageLocation: new resource.ResourceProperty(types.AmazonGameLiftBuildStorageLocation, 'Conditional', null),
      Version: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Fleet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Fleet'
    let properties = {
      BuildId: new resource.ResourceProperty(String, 'Yes', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      DesiredEC2Instances: new resource.ResourceProperty(Number, 'Yes', null),
      EC2InboundPermissions: new resource.ResourceArray(types.AmazonGameLiftFleetEC2InboundPermission, 'No', null),
      EC2InstanceType: new resource.ResourceProperty(String, 'Yes', null),
      LogPaths: new resource.ResourceArray(String, 'No', null),
      MaxSize: new resource.ResourceProperty(Number, 'No', null),
      MinSize: new resource.ResourceProperty(Number, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      ServerLaunchParameters: new resource.ResourceProperty(String, 'No', null),
      ServerLaunchPath: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Alias: Alias,
  Build: Build,
  Fleet: Fleet
}