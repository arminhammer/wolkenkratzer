'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Pipeline extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::DataPipeline::Pipeline'
    let properties = {
      Activate: new resource.ResourceProperty('Activate', Boolean, 'No', null),
      Description: new resource.ResourceProperty('Description', String, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      ParameterObjects: new resource.ResourceProperty('ParameterObjects', types.AWSDataPipelinePipelineParameterObjects, 'No', null),
      ParameterValues: new resource.ResourceProperty('ParameterValues', types.AWSDataPipelinePipelineParameterValues, 'No', null),
      PipelineObjects: new resource.ResourceArray('PipelineObjects', types.AWSDataPipelinePipelineObjects, 'Yes', null),
      PipelineTags: new resource.ResourceProperty('PipelineTags', types.AWSDataPipelinePipelinePipelineTags, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Pipeline: Pipeline
}
