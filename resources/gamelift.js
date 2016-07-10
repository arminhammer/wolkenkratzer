'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Alias extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Alias'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      RoutingStrategy: new ResourceAttribute('RoutingStrategy', types.AmazonGameLiftAliasRoutingStrategy, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Build extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Build'
    let properties = {
      Name: new ResourceAttribute('Name', String, 'No', null),
      StorageLocation: new ResourceAttribute('StorageLocation', types.AmazonGameLiftBuildStorageLocation, 'Conditional', null),
      Version: new ResourceAttribute('Version', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Fleet extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Fleet'
    let properties = {
      BuildId: new ResourceAttribute('BuildId', String, 'Yes', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      DesiredEC2Instances: new ResourceAttribute('DesiredEC2Instances', Number, 'Yes', null),
      EC2InboundPermissions: new ResourceAttributeArray('EC2InboundPermissions', types.AmazonGameLiftFleetEC2InboundPermission, 'No', null),
      EC2InstanceType: new ResourceAttribute('EC2InstanceType', String, 'Yes', null),
      LogPaths: new ResourceAttributeArray('LogPaths', String, 'No', null),
      MaxSize: new ResourceAttribute('MaxSize', Number, 'No', null),
      MinSize: new ResourceAttribute('MinSize', Number, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      ServerLaunchParameters: new ResourceAttribute('ServerLaunchParameters', String, 'No', null),
      ServerLaunchPath: new ResourceAttribute('ServerLaunchPath', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Alias: Alias,
  Build: Build,
  Fleet: Fleet
}
