'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Trail extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudTrail::Trail'
    let properties = {
      CloudWatchLogsLogGroupArn: new wolkenkratzer.ResourceProperty(String, 'Conditional', null),
      CloudWatchLogsRoleArn: new wolkenkratzer.ResourceProperty(String, 'No', null),
      EnableLogFileValidation: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      IncludeGlobalServiceEvents: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      IsLogging: new wolkenkratzer.ResourceProperty(Boolean, 'Yes', null),
      IsMultiRegionTrail: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      KMSKeyId: new wolkenkratzer.ResourceProperty(String, 'No', null),
      S3BucketName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      S3KeyPrefix: new wolkenkratzer.ResourceProperty(String, 'No', null),
      SnsTopicName: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Trail: Trail
}