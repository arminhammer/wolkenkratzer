'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Trail extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudTrail::Trail'
    let properties = {
      CloudWatchLogsLogGroupArn: new ResourceAttribute('CloudWatchLogsLogGroupArn', String, 'Conditional', null),
      CloudWatchLogsRoleArn: new ResourceAttribute('CloudWatchLogsRoleArn', String, 'No', null),
      EnableLogFileValidation: new ResourceAttribute('EnableLogFileValidation', Boolean, 'No', null),
      IncludeGlobalServiceEvents: new ResourceAttribute('IncludeGlobalServiceEvents', Boolean, 'No', null),
      IsLogging: new ResourceAttribute('IsLogging', Boolean, 'Yes', null),
      IsMultiRegionTrail: new ResourceAttribute('IsMultiRegionTrail', Boolean, 'No', null),
      KMSKeyId: new ResourceAttribute('KMSKeyId', String, 'No', null),
      S3BucketName: new ResourceAttribute('S3BucketName', String, 'Yes', null),
      S3KeyPrefix: new ResourceAttribute('S3KeyPrefix', String, 'No', null),
      SnsTopicName: new ResourceAttribute('SnsTopicName', String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Trail: Trail
}
