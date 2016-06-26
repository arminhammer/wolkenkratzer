'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Pipeline extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::DataPipeline::Pipeline'
    let properties = {
      Activate: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      Description: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ParameterObjects: new wolkenkratzer.ResourceProperty(propertyTypes.AWSDataPipelinePipelineParameterObjects, 'No', null),
      ParameterValues: new wolkenkratzer.ResourceProperty(propertyTypes.AWSDataPipelinePipelineParameterValues, 'No', null),
      PipelineObjects: new wolkenkratzer.ResourceArray(propertyTypes.AWSDataPipelinePipelineObjects, 'Yes', null),
      PipelineTags: new wolkenkratzer.ResourceProperty(propertyTypes.AWSDataPipelinePipelinePipelineTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Pipeline: Pipeline
}