'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Trail extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CloudTrail::Trail'
    let properties = {
      CloudWatchLogsLogGroupArn: new resource.ResourceProperty(String, 'Conditional', null),
      CloudWatchLogsRoleArn: new resource.ResourceProperty(String, 'No', null),
      EnableLogFileValidation: new resource.ResourceProperty(Boolean, 'No', null),
      IncludeGlobalServiceEvents: new resource.ResourceProperty(Boolean, 'No', null),
      IsLogging: new resource.ResourceProperty(Boolean, 'Yes', null),
      IsMultiRegionTrail: new resource.ResourceProperty(Boolean, 'No', null),
      KMSKeyId: new resource.ResourceProperty(String, 'No', null),
      S3BucketName: new resource.ResourceProperty(String, 'Yes', null),
      S3KeyPrefix: new resource.ResourceProperty(String, 'No', null),
      SnsTopicName: new resource.ResourceProperty(String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Trail: Trail
}