'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class MicrosoftAD extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::DirectoryService::MicrosoftAD'
    let properties = {
      CreateAlias: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      EnableSso: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Password: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ShortName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      VpcSettings: new wolkenkratzer.ResourceProperty(propertyTypes.AWSDirectoryServiceMicrosoftADVpcSettings, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SimpleAD extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::DirectoryService::SimpleAD'
    let properties = {
      CreateAlias: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EnableSso: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Password: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ShortName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Size: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      VpcSettings: new wolkenkratzer.ResourceProperty(propertyTypes.AWSDirectoryServiceSimpleADVpcSettings, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  MicrosoftAD: MicrosoftAD,
  SimpleAD: SimpleAD
}