'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module WorkSpaces */

/** @memberof module:WorkSpaces
*   @extends WKResource
* @property {String} BundleId Required: Yes. The identifier of the bundle from which you want to create the workspace. A
                  bundle specifies the details of the workspace, such as the installed applications
                  and the size of CPU, memory, and storage. Use the DescribeWorkspaceBundles action to list the bundles that AWS
                  offers.Update requires: Updates are not supported.. To update this property, you must also update another
                  property that triggers a replacement, such as the UserName
                  property.
* @property {String} DirectoryId Required: Yes. The identifier of the AWS Directory Service directory in which you want to create the
                  workspace. The directory must already be registered with Amazon WorkSpaces. Use the DescribeWorkspaceDirectories action to list the directories that are
                  available.Update requires: Replacement
* @property {String} UserName Required: Yes. The name of the user to which the workspace is assigned. This user name must
                  exist in the specified AWS Directory Service directory.Update requires: Replacement
* @property {Boolean} RootVolumeEncryptionEnabled Required: No. Indicates whether Amazon WorkSpaces encrypts data stored on the root volume
                     (C: drive).Update requires: Updates are not supported.. To update this property, you must also update another
                  property that triggers a replacement, such as the UserName
                  property.
* @property {Boolean} UserVolumeEncryptionEnabled Required: No. Indicates whether Amazon WorkSpaces encrypts data stored on the user volume
                     (D: drive).Update requires: Updates are not supported.. To update this property, you must also update another
                  property that triggers a replacement, such as the UserName
                  property.
* @property {String} VolumeEncryptionKey Required: No. The AWS Key Management Service (AWS KMS) key ID that Amazon WorkSpaces uses to encrypt data stored on your
                  workspace.Update requires: Updates are not supported.. To update this property, you must also update another
                  property that triggers a replacement, such as the UserName
                  property.
*/
function Workspace (name, propertiesObject) {
    let resourceType = 'AWS::WorkSpaces::Workspace'
    let properties = {
      BundleId: new ResourceAttribute('BundleId', String, false, 'Yes', null),
      DirectoryId: new ResourceAttribute('DirectoryId', String, false, 'Yes', null),
      UserName: new ResourceAttribute('UserName', String, false, 'Yes', null),
      RootVolumeEncryptionEnabled: new ResourceAttribute('RootVolumeEncryptionEnabled', Boolean, false, 'No', null),
      UserVolumeEncryptionEnabled: new ResourceAttribute('UserVolumeEncryptionEnabled', Boolean, false, 'No', null),
      VolumeEncryptionKey: new ResourceAttribute('VolumeEncryptionKey', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Workspace.prototype = Object.create(WKResource.prototype)

module.exports = {  Workspace: Workspace
}
