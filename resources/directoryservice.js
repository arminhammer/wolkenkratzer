'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class MicrosoftAD extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::DirectoryService::MicrosoftAD'
    let properties = {
      CreateAlias: new resource.ResourceProperty(Boolean, 'No', null),
      EnableSso: new resource.ResourceProperty(Boolean, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      Password: new resource.ResourceProperty(String, 'Yes', null),
      ShortName: new resource.ResourceProperty(String, 'No', null),
      VpcSettings: new resource.ResourceProperty(types.AWSDirectoryServiceMicrosoftADVpcSettings, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SimpleAD extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::DirectoryService::SimpleAD'
    let properties = {
      CreateAlias: new resource.ResourceProperty(Boolean, 'No', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      EnableSso: new resource.ResourceProperty(Boolean, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      Password: new resource.ResourceProperty(String, 'Yes', null),
      ShortName: new resource.ResourceProperty(String, 'No', null),
      Size: new resource.ResourceProperty(String, 'Yes', null),
      VpcSettings: new resource.ResourceProperty(types.AWSDirectoryServiceSimpleADVpcSettings, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  MicrosoftAD: MicrosoftAD,
  SimpleAD: SimpleAD
}