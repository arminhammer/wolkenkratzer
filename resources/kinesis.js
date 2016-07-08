'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Stream extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::Kinesis::Stream'
    let properties = {
      Name: new resource.ResourceProperty('Name', String, 'No', null),
      ShardCount: new resource.ResourceProperty('ShardCount', Number, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Stream: Stream
}
