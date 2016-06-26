'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class CustomActionType extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodePipeline::CustomActionType'
    let properties = {
      Category: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ConfigurationProperties: new wolkenkratzer.ResourceArray(propertyTypes.AWSCodePipelineCustomActionTypeConfigurationProperties, 'No', null),
      InputArtifactDetails: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCodePipelineCustomActionTypeArtifactDetails, 'Yes', null),
      OutputArtifactDetails: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCodePipelineCustomActionTypeArtifactDetails, 'Yes', null),
      Provider: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Settings: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCodePipelineCustomActionTypeSettings, 'No', null),
      Version: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Pipeline extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::CodePipeline::Pipeline'
    let properties = {
      ArtifactStore: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCodePipelinePipelineArtifactStore, 'Yes', null),
      DisableInboundStageTransitions: new wolkenkratzer.ResourceArray(propertyTypes.AWSCodePipelinePipelineDisableInboundStageTransitions, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null),
      RestartExecutionOnUpdate: new wolkenkratzer.ResourceProperty(Boolean, 'No', null),
      RoleArn: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Stages: new wolkenkratzer.ResourceProperty(propertyTypes.AWSCodePipelinePipelineStages, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  CustomActionType: CustomActionType,
  Pipeline: Pipeline
}