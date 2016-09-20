'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module KinesisFirehose */

/** @memberof module:KinesisFirehose
*   @extends WKResource
* @property {String} DeliveryStreamName Required: No. A name for the delivery stream.Update requires: Replacement
* @property {AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration} ElasticsearchDestinationConfiguration Required: Conditional. An Amazon ES destination for the delivery stream.Update requires: No interruption. If you change the delivery stream destination from an Amazon ES destination to an Amazon S3 or Amazon Redshift destination, update requires some interruptions.
* @property {AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration} RedshiftDestinationConfiguration Required: Conditional. An Amazon Redshift destination for the delivery stream.Update requires: No interruption. If you change the delivery stream destination from an Amazon Redshift destination to an Amazon ES destination, update requires some interruptions.
* @property {AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration} S3DestinationConfiguration Required: Conditional. An Amazon S3 destination for the delivery stream.Update requires: No interruption. If you change the delivery stream destination from an Amazon S3 destination to an Amazon ES destination, update requires some interruptions.
*/
function DeliveryStream (name, propertiesObject) {
    let resourceType = 'AWS::KinesisFirehose::DeliveryStream'
    let properties = {
      DeliveryStreamName: new ResourceAttribute('DeliveryStreamName', String, false, 'No', null),
      ElasticsearchDestinationConfiguration: new ResourceAttribute('ElasticsearchDestinationConfiguration', types.AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration, false, 'Conditional', null),
      RedshiftDestinationConfiguration: new ResourceAttribute('RedshiftDestinationConfiguration', types.AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration, false, 'Conditional', null),
      S3DestinationConfiguration: new ResourceAttribute('S3DestinationConfiguration', types.AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration, false, 'Conditional', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DeliveryStream.prototype = Object.create(WKResource.prototype)

module.exports = {  DeliveryStream: DeliveryStream
}
