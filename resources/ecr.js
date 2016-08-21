'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module ECR */

/** @memberof module:ECR
*   @extends WKResource
* @property {String} RepositoryName Required: No. A name for the image repository. If you don't specify a name, AWS CloudFormation generates a
            unique physical ID and uses that ID for the repository name. For more information, see
              Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {Object} RepositoryPolicyText Required: No. A policy that controls who has access to the repository and which actions they can
            perform on it. For more information, see Amazon ECR Repository Policies in the
              Amazon EC2 Container Registry User Guide.Update requires: No interruption
*/
function Repository (name, propertiesObject) {
    let resourceType = 'AWS::ECR::Repository'
    let properties = {
      RepositoryName: new ResourceAttribute('RepositoryName', String, 'No', null),
      RepositoryPolicyText: new ResourceAttribute('RepositoryPolicyText', Object, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Repository.prototype = Object.create(WKResource.prototype)

module.exports = {  Repository: Repository
}
