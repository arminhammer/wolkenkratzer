'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class CustomActionType extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodePipeline::CustomActionType'
    let properties = {
      Category: new resource.ResourceProperty('Category', String, 'Yes', null),
      ConfigurationProperties: new resource.ResourceArray('ConfigurationProperties', types.AWSCodePipelineCustomActionTypeConfigurationProperties, 'No', null),
      InputArtifactDetails: new resource.ResourceProperty('InputArtifactDetails', types.AWSCodePipelineCustomActionTypeArtifactDetails, 'Yes', null),
      OutputArtifactDetails: new resource.ResourceProperty('OutputArtifactDetails', types.AWSCodePipelineCustomActionTypeArtifactDetails, 'Yes', null),
      Provider: new resource.ResourceProperty('Provider', String, 'Yes', null),
      Settings: new resource.ResourceProperty('Settings', types.AWSCodePipelineCustomActionTypeSettings, 'No', null),
      Version: new resource.ResourceProperty('Version', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Pipeline extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodePipeline::Pipeline'
    let properties = {
      ArtifactStore: new resource.ResourceProperty('ArtifactStore', types.AWSCodePipelinePipelineArtifactStore, 'Yes', null),
      DisableInboundStageTransitions: new resource.ResourceArray('DisableInboundStageTransitions', types.AWSCodePipelinePipelineDisableInboundStageTransitions, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'No', null),
      RestartExecutionOnUpdate: new resource.ResourceProperty('RestartExecutionOnUpdate', Boolean, 'No', null),
      RoleArn: new resource.ResourceProperty('RoleArn', String, 'Yes', null),
      Stages: new resource.ResourceProperty('Stages', types.AWSCodePipelinePipelineStages, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  CustomActionType: CustomActionType,
  Pipeline: Pipeline
}