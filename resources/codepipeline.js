'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class CustomActionType extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodePipeline::CustomActionType'
    let properties = {
      Category: new resource.ResourceProperty(String, 'Yes', null),
      ConfigurationProperties: new resource.ResourceArray(types.AWSCodePipelineCustomActionTypeConfigurationProperties, 'No', null),
      InputArtifactDetails: new resource.ResourceProperty(types.AWSCodePipelineCustomActionTypeArtifactDetails, 'Yes', null),
      OutputArtifactDetails: new resource.ResourceProperty(types.AWSCodePipelineCustomActionTypeArtifactDetails, 'Yes', null),
      Provider: new resource.ResourceProperty(String, 'Yes', null),
      Settings: new resource.ResourceProperty(types.AWSCodePipelineCustomActionTypeSettings, 'No', null),
      Version: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Pipeline extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodePipeline::Pipeline'
    let properties = {
      ArtifactStore: new resource.ResourceProperty(types.AWSCodePipelinePipelineArtifactStore, 'Yes', null),
      DisableInboundStageTransitions: new resource.ResourceArray(types.AWSCodePipelinePipelineDisableInboundStageTransitions, 'No', null),
      Name: new resource.ResourceProperty(String, 'No', null),
      RestartExecutionOnUpdate: new resource.ResourceProperty(Boolean, 'No', null),
      RoleArn: new resource.ResourceProperty(String, 'Yes', null),
      Stages: new resource.ResourceProperty(types.AWSCodePipelinePipelineStages, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  CustomActionType: CustomActionType,
  Pipeline: Pipeline
}