'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Stream extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::Kinesis::Stream'
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ShardCount: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Tags: new wolkenkratzer.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Stream: Stream
}