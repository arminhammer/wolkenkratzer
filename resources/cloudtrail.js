/**
 * Created by arming on 6/20/16.
 */
'use strict'

const cloudpotato = require('./../index')

class Trail extends cloudpotato.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CloudTrail::Trail'
    let properties = {
      CloudWatchLogsLogGroupArn: new cloudpotato.ResourceProperty(String, false, null),
      CloudWatchLogsRoleArn: new cloudpotato.ResourceProperty(String, false, null),
      EnableLogFileValidation: new cloudpotato.ResourceProperty(Boolean, false, null),
      IncludeGlobalServiceEvents: new cloudpotato.ResourceProperty(Boolean, false, null),
      IsLogging: new cloudpotato.ResourceProperty(Boolean, true, null),
      IsMultiRegionTrail: new cloudpotato.ResourceProperty(Boolean, false, null),
      KMSKeyId: new cloudpotato.ResourceProperty(String, false, null),
      S3BucketName: new cloudpotato.ResourceProperty(String, true, null),
      S3KeyPrefix: new cloudpotato.ResourceProperty(String, false, null),
      SnsTopicName: new cloudpotato.ResourceProperty(String, false, null),
      Tags:  new cloudpotato.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Trail: Trail
}