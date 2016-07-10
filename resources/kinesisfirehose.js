'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
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
class DeliveryStream extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::KinesisFirehose::DeliveryStream'
    let properties = {
      DeliveryStreamName: new ResourceAttribute('DeliveryStreamName', String, 'No', null),
      ElasticsearchDestinationConfiguration: new ResourceAttribute('ElasticsearchDestinationConfiguration', types.AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration, 'Conditional', null),
      RedshiftDestinationConfiguration: new ResourceAttribute('RedshiftDestinationConfiguration', types.AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration, 'Conditional', null),
      S3DestinationConfiguration: new ResourceAttribute('S3DestinationConfiguration', types.AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  DeliveryStream: DeliveryStream
}
