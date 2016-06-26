'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Alias extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Alias'
    let properties = {
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      RoutingStrategy: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonGameLiftAliasRoutingStrategy, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Build extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Build'
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      StorageLocation: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonGameLiftBuildStorageLocation, 'Conditional', null),
      Version: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Fleet extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Fleet'
    let properties = {
      BuildId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      DesiredEC2Instances: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      EC2InboundPermissions: new wolkenkratzer.ResourceArray(propertyTypes.AmazonGameLiftFleetEC2InboundPermission, 'No', null),
      EC2InstanceType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      LogPaths: new wolkenkratzer.ResourceArray(String, 'No', null),
      MaxSize: new wolkenkratzer.ResourceProperty(String, 'No', null),
      MinSize: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ServerLaunchParameters: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ServerLaunchPath: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Alias: Alias,
  Build: Build,
  Fleet: Fleet
}