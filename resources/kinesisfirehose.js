'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class DeliveryStream extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::KinesisFirehose::DeliveryStream'
    let properties = {
      DeliveryStreamName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ElasticsearchDestinationConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration, 'Conditional', null),
      RedshiftDestinationConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration, 'Conditional', null),
      S3DestinationConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  DeliveryStream: DeliveryStream
}