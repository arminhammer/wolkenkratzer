'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Alias extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Alias'
    let properties = {
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      RoutingStrategy: new resource.ResourceProperty('RoutingStrategy', types.AmazonGameLiftAliasRoutingStrategy, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Build extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Build'
    let properties = {
      Name: new resource.ResourceProperty('Name', String, 'No', null),
      StorageLocation: new resource.ResourceProperty('StorageLocation', types.AmazonGameLiftBuildStorageLocation, 'Conditional', null),
      Version: new resource.ResourceProperty('Version', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Fleet extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Fleet'
    let properties = {
      BuildId: new resource.ResourceProperty('BuildId', String, 'Yes', null),
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      DesiredEC2Instances: new resource.ResourceProperty('DesiredEC2Instances', Number, 'Yes', null),
      EC2InboundPermissions: new resource.ResourceArray('EC2InboundPermissions', types.AmazonGameLiftFleetEC2InboundPermission, 'No', null),
      EC2InstanceType: new resource.ResourceProperty('EC2InstanceType', String, 'Yes', null),
      LogPaths: new resource.ResourceArray('LogPaths', String, 'No', null),
      MaxSize: new resource.ResourceProperty('MaxSize', Number, 'No', null),
      MinSize: new resource.ResourceProperty('MinSize', Number, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      ServerLaunchParameters: new resource.ResourceProperty('ServerLaunchParameters', String, 'No', null),
      ServerLaunchPath: new resource.ResourceProperty('ServerLaunchPath', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Alias: Alias,
  Build: Build,
  Fleet: Fleet
}
