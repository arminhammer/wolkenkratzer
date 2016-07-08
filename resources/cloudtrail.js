'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Trail extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudTrail::Trail'
    let properties = {
      CloudWatchLogsLogGroupArn: new resource.ResourceProperty('CloudWatchLogsLogGroupArn', String, 'Conditional', null),
      CloudWatchLogsRoleArn: new resource.ResourceProperty('CloudWatchLogsRoleArn', String, 'No', null),
      EnableLogFileValidation: new resource.ResourceProperty('EnableLogFileValidation', Boolean, 'No', null),
      IncludeGlobalServiceEvents: new resource.ResourceProperty('IncludeGlobalServiceEvents', Boolean, 'No', null),
      IsLogging: new resource.ResourceProperty('IsLogging', Boolean, 'Yes', null),
      IsMultiRegionTrail: new resource.ResourceProperty('IsMultiRegionTrail', Boolean, 'No', null),
      KMSKeyId: new resource.ResourceProperty('KMSKeyId', String, 'No', null),
      S3BucketName: new resource.ResourceProperty('S3BucketName', String, 'Yes', null),
      S3KeyPrefix: new resource.ResourceProperty('S3KeyPrefix', String, 'No', null),
      SnsTopicName: new resource.ResourceProperty('SnsTopicName', String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Trail: Trail
}
