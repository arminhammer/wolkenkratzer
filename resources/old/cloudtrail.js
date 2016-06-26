/**
 * Created by arming on 6/20/16.
 */
'use strict'

const wolkenkratzer = require('./../index')

class Trail extends wolkenkratzer.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudTrail::Trail'
    let properties = {
      CloudWatchLogsLogGroupArn: new wolkenkratzer.ResourceProperty(String, false, null),
      CloudWatchLogsRoleArn: new wolkenkratzer.ResourceProperty(String, false, null),
      EnableLogFileValidation: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      IncludeGlobalServiceEvents: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      IsLogging: new wolkenkratzer.ResourceProperty(Boolean, true, null),
      IsMultiRegionTrail: new wolkenkratzer.ResourceProperty(Boolean, false, null),
      KMSKeyId: new wolkenkratzer.ResourceProperty(String, false, null),
      S3BucketName: new wolkenkratzer.ResourceProperty(String, true, null),
      S3KeyPrefix: new wolkenkratzer.ResourceProperty(String, false, null),
      SnsTopicName: new wolkenkratzer.ResourceProperty(String, false, null),
      Tags:  new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Trail: Trail
}