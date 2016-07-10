'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

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

module.exports = {
  DeliveryStream: DeliveryStream
}
