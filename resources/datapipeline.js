'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Pipeline extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::DataPipeline::Pipeline'
    let properties = {
      Activate: new resource.ResourceProperty(Boolean, 'No', null),
      Description: new resource.ResourceProperty(String, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      ParameterObjects: new resource.ResourceProperty(types.AWSDataPipelinePipelineParameterObjects, 'No', null),
      ParameterValues: new resource.ResourceProperty(types.AWSDataPipelinePipelineParameterValues, 'No', null),
      PipelineObjects: new resource.ResourceArray(types.AWSDataPipelinePipelineObjects, 'Yes', null),
      PipelineTags: new resource.ResourceProperty(types.AWSDataPipelinePipelinePipelineTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Pipeline: Pipeline
}