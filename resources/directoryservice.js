'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module DirectoryService */

/** @memberof module:DirectoryService
*   @extends WKResource
* @property {Boolean} CreateAlias Required: No. A unique alias to assign to the Microsoft Active Directory in AWS. AWS Directory Service uses
                  the alias to construct the access URL for the directory, such as
                        http://alias.awsapps.com. By
                  default, AWS CloudFormation does not create an alias.Update requires: Replacement
* @property {Boolean} EnableSso Required: No. Whether to enable single sign-on for a Microsoft Active Directory in AWS.
                  Single sign-on allows users in your directory to access certain AWS services from
                  a computer joined to the directory without having to enter their credentials
                  separately. If you don't specify a value, AWS CloudFormation disables single sign-on by
                  default.Update requires: No interruption
* @property {String} Name Required: Yes. The fully qualified name for the Microsoft Active Directory in AWS, such as
                     corp.example.com. The name doesn't need to be publicly resolvable;
                  it will resolve inside your VPC only.Update requires: Replacement
* @property {String} Password Required: Yes. The password for the default administrative user, Admin.Update requires: Replacement
* @property {String} ShortName Required: No. The NetBIOS name for your domain, such as CORP. If you don't
                  specify a value, AWS Directory Service uses the first part of your directory DNS server name. For
                  example, if your directory DNS server name is corp.example.com, AWS Directory Service
                  specifies CORP for the NetBIOS name.Update requires: Replacement
* @property {AWSDirectoryServiceMicrosoftADVpcSettings} VpcSettings Required: Yes. Specifies the VPC settings of the Microsoft Active Directory server in
                  AWS.Update requires: Replacement
*/
function MicrosoftAD (name, propertiesObject) {
    let resourceType = 'AWS::DirectoryService::MicrosoftAD'
    let properties = {
      CreateAlias: new ResourceAttribute('CreateAlias', Boolean, 'No', null),
      EnableSso: new ResourceAttribute('EnableSso', Boolean, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Password: new ResourceAttribute('Password', String, 'Yes', null),
      ShortName: new ResourceAttribute('ShortName', String, 'No', null),
      VpcSettings: new ResourceAttribute('VpcSettings', types.AWSDirectoryServiceMicrosoftADVpcSettings, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
MicrosoftAD.prototype = Object.create(WKResource.prototype)

/** @memberof module:DirectoryService
*   @extends WKResource
* @property {Boolean} CreateAlias Required: No. A unique alias to assign to the directory. AWS Directory Service uses the alias to construct
                  the access URL for the directory, such as
                        http://alias.awsapps.com. By
                  default, AWS CloudFormation does not create an alias.Update requires: Replacement
* @property {String} Description Required: No. A description of the directory.Update requires: Replacement
* @property {Boolean} EnableSso Required: No. Whether to enable single sign-on for a directory. If you don't specify a value,
                  AWS CloudFormation disables single sign-on by default.Update requires: No interruption
* @property {String} Name Required: Yes. The fully qualified name for the directory, such as
                     corp.example.com.Update requires: Replacement
* @property {String} Password Required: Yes. The password for the directory administrator. AWS Directory Service creates a directory
                  administrator account with the user name Administrator and this
                  password.Update requires: Replacement
* @property {String} ShortName Required: No. The NetBIOS name of the on-premises directory, such as
                  CORP.Update requires: Replacement
* @property {String} Size Required: Yes. The size of the directory. For valid values, see CreateDirectory in the
                     AWS Directory Service API Reference.Update requires: Replacement
* @property {AWSDirectoryServiceSimpleADVpcSettings} VpcSettings Required: Yes. Specifies the VPC settings of the directory server.Update requires: Replacement
*/
function SimpleAD (name, propertiesObject) {
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
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
SimpleAD.prototype = Object.create(WKResource.prototype)

module.exports = {  MicrosoftAD: MicrosoftAD,
  SimpleAD: SimpleAD
}
