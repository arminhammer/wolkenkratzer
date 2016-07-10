'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class CustomActionType extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CodePipeline::CustomActionType'
    let properties = {
      Category: new ResourceAttribute('Category', String, 'Yes', null),
      ConfigurationProperties: new ResourceAttributeArray('ConfigurationProperties', types.AWSCodePipelineCustomActionTypeConfigurationProperties, 'No', null),
      InputArtifactDetails: new ResourceAttribute('InputArtifactDetails', types.AWSCodePipelineCustomActionTypeArtifactDetails, 'Yes', null),
      OutputArtifactDetails: new ResourceAttribute('OutputArtifactDetails', types.AWSCodePipelineCustomActionTypeArtifactDetails, 'Yes', null),
      Provider: new ResourceAttribute('Provider', String, 'Yes', null),
      Settings: new ResourceAttribute('Settings', types.AWSCodePipelineCustomActionTypeSettings, 'No', null),
      Version: new ResourceAttribute('Version', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Pipeline extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::CodePipeline::Pipeline'
    let properties = {
      ArtifactStore: new ResourceAttribute('ArtifactStore', types.AWSCodePipelinePipelineArtifactStore, 'Yes', null),
      DisableInboundStageTransitions: new ResourceAttributeArray('DisableInboundStageTransitions', types.AWSCodePipelinePipelineDisableInboundStageTransitions, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null),
      RestartExecutionOnUpdate: new ResourceAttribute('RestartExecutionOnUpdate', Boolean, 'No', null),
      RoleArn: new ResourceAttribute('RoleArn', String, 'Yes', null),
      Stages: new ResourceAttribute('Stages', types.AWSCodePipelinePipelineStages, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  CustomActionType: CustomActionType,
  Pipeline: Pipeline
}
