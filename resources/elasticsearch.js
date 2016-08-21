'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module Elasticsearch */

/** @memberof module:Elasticsearch
*   @extends WKResource
* @property {Object} AccessPolicies Required: No. An AWS Identity and Access Management (IAM) policy document that specifies who can access the Amazon ES
            domain and their permissions. For more information, see Configuring Access Policies in the
            Amazon Elasticsearch Service Developer Guide.Update requires: No interruption
* @property {Object} AdvancedOptions Required: No. Additional options to specify for the Amazon ES domain. For more information, see
              Configuring Advanced Options in the
            Amazon Elasticsearch Service Developer Guide.Update requires: Replacement
* @property {String} DomainName Required: No. A name for the Amazon ES domain. For valid values, see the DomainName data type in the Amazon Elasticsearch Service Developer Guide.If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the domain name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {AmazonElasticsearchServiceDomainEBSOptions} EBSOptions Required: No. The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in
            the Amazon ES domain. For more information, see Configuring EBS-based Storage in the
            Amazon Elasticsearch Service Developer Guide.Update requires: No interruption
* @property {AmazonElasticsearchServiceDomainElasticsearchClusterConfig} ElasticsearchClusterConfig Required: No. The cluster configuration for the  Amazon ES domain. You can specify options such as
            the instance type and the number of instances. For more information, see Configuring Amazon ES Domains in the
            Amazon Elasticsearch Service Developer Guide.Update requires: No interruption
* @property {AmazonElasticsearchServiceDomainSnapshotOptions} SnapshotOptions Required: No. The automated snapshot configuration for the Amazon ES domain indices.Update requires: No interruption
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) to associate with the Amazon ES
            domain.Update requires: No interruption
*/
function Domain (name, propertiesObject) {
    let resourceType = 'AWS::Elasticsearch::Domain'
    let properties = {
      AccessPolicies: new ResourceAttribute('AccessPolicies', Object, 'No', null),
      AdvancedOptions: new ResourceAttribute('AdvancedOptions', Object, 'No', null),
      DomainName: new ResourceAttribute('DomainName', String, 'No', null),
      EBSOptions: new ResourceAttribute('EBSOptions', types.AmazonElasticsearchServiceDomainEBSOptions, 'No', null),
      ElasticsearchClusterConfig: new ResourceAttribute('ElasticsearchClusterConfig', types.AmazonElasticsearchServiceDomainElasticsearchClusterConfig, 'No', null),
      SnapshotOptions: new ResourceAttribute('SnapshotOptions', types.AmazonElasticsearchServiceDomainSnapshotOptions, 'No', null),
      Tags: new tag.TagSet()
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Domain.prototype = Object.create(WKResource.prototype)

module.exports = {  Domain: Domain
}
