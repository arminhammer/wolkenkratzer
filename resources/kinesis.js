'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module Kinesis */

/** @memberof module:Kinesis
*   @extends WKResource
* @property {String} Name Required: No. The name of the Amazon Kinesis stream. If you don't specify a name, AWS CloudFormation generates a unique physical 
                  ID and uses that ID for the stream name. For more information, see 
                  Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.
               Update requires: Replacement
* @property {Number} ShardCount Required: Yes. The number of shards that the stream uses. For greater provisioned throughput,
                  increase the number of shards.Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) to associate with the Amazon Kinesis
                  stream.Update requires: No interruption
*/
function Stream (name, propertiesObject) {
    let resourceType = 'AWS::Kinesis::Stream'
    let properties = {
      Name: new ResourceAttribute('Name', String, false, 'No', null),
      ShardCount: new ResourceAttribute('ShardCount', Number, false, 'Yes', null),
      Tags: new tag.TagSet()
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Stream.prototype = Object.create(WKResource.prototype)

module.exports = {  Stream: Stream
}
