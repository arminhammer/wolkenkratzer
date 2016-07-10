'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Pipeline extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::DataPipeline::Pipeline'
    let properties = {
      Activate: new ResourceAttribute('Activate', Boolean, 'No', null),
      Description: new ResourceAttribute('Description', String, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      ParameterObjects: new ResourceAttribute('ParameterObjects', types.AWSDataPipelinePipelineParameterObjects, 'No', null),
      ParameterValues: new ResourceAttribute('ParameterValues', types.AWSDataPipelinePipelineParameterValues, 'No', null),
      PipelineObjects: new ResourceAttributeArray('PipelineObjects', types.AWSDataPipelinePipelineObjects, 'Yes', null),
      PipelineTags: new ResourceAttribute('PipelineTags', types.AWSDataPipelinePipelinePipelineTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Pipeline: Pipeline
}
