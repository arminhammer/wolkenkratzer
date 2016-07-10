'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class MicrosoftAD extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::DirectoryService::MicrosoftAD'
    let properties = {
      CreateAlias: new ResourceAttribute('CreateAlias', Boolean, 'No', null),
      EnableSso: new ResourceAttribute('EnableSso', Boolean, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Password: new ResourceAttribute('Password', String, 'Yes', null),
      ShortName: new ResourceAttribute('ShortName', String, 'No', null),
      VpcSettings: new ResourceAttribute('VpcSettings', types.AWSDirectoryServiceMicrosoftADVpcSettings, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SimpleAD extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::DirectoryService::SimpleAD'
    let properties = {
      CreateAlias: new ResourceAttribute('CreateAlias', Boolean, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      EnableSso: new ResourceAttribute('EnableSso', Boolean, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Password: new ResourceAttribute('Password', String, 'Yes', null),
      ShortName: new ResourceAttribute('ShortName', String, 'No', null),
      Size: new ResourceAttribute('Size', String, 'Yes', null),
      VpcSettings: new ResourceAttribute('VpcSettings', types.AWSDirectoryServiceSimpleADVpcSettings, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  MicrosoftAD: MicrosoftAD,
  SimpleAD: SimpleAD
}
