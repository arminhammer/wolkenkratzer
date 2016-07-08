'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class MicrosoftAD extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::DirectoryService::MicrosoftAD'
    let properties = {
      CreateAlias: new resource.ResourceProperty('CreateAlias', Boolean, 'No', null),
      EnableSso: new resource.ResourceProperty('EnableSso', Boolean, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      Password: new resource.ResourceProperty('Password', String, 'Yes', null),
      ShortName: new resource.ResourceProperty('ShortName', String, 'No', null),
      VpcSettings: new resource.ResourceProperty('VpcSettings', types.AWSDirectoryServiceMicrosoftADVpcSettings, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SimpleAD extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::DirectoryService::SimpleAD'
    let properties = {
      CreateAlias: new resource.ResourceProperty('CreateAlias', Boolean, 'No', null),
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      EnableSso: new resource.ResourceProperty('EnableSso', Boolean, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      Password: new resource.ResourceProperty('Password', String, 'Yes', null),
      ShortName: new resource.ResourceProperty('ShortName', String, 'No', null),
      Size: new resource.ResourceProperty('Size', String, 'Yes', null),
      VpcSettings: new resource.ResourceProperty('VpcSettings', types.AWSDirectoryServiceSimpleADVpcSettings, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  MicrosoftAD: MicrosoftAD,
  SimpleAD: SimpleAD
}
