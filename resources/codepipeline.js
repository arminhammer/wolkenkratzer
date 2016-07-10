'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module CodePipeline */

/** @memberof module:CodePipeline
*   @extends WKResource
* @property {String} Category Required: Yes. The category of the custom action, such as a source action or a build action.
                  For valid values, see CreateCustomActionType in the
                  AWS CodePipeline API Reference.Update requires: Replacement
* @property {AWSCodePipelineCustomActionTypeConfigurationProperties} ConfigurationProperties Required: No. The configuration properties for the custom action.Update requires: Replacement
* @property {AWSCodePipelineCustomActionTypeArtifactDetails} InputArtifactDetails Required: Yes. The input artifact details for this custom action.Update requires: Replacement
* @property {AWSCodePipelineCustomActionTypeArtifactDetails} OutputArtifactDetails Required: Yes. The output artifact details for this custom action.Update requires: Replacement
* @property {String} Provider Required: Yes. The name of the service provider that AWS CodePipeline uses for this custom action.Update requires: Replacement
* @property {AWSCodePipelineCustomActionTypeSettings} Settings Required: No. URLs that provide users information about this custom action.Update requires: Replacement
* @property {String} Version Required: No. The version number of this custom action.Update requires: Replacement
*/
class CustomActionType extends WKResource {
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

/** @memberof module:CodePipeline
*   @extends WKResource
* @property {AWSCodePipelinePipelineArtifactStore} ArtifactStore Required: Yes. The Amazon Simple Storage Service (Amazon S3) location where AWS CodePipeline stores pipeline artifacts. The S3
            bucket must have versioning enabled. For more information, see Create an Amazon S3 Bucket for Your
              Application in the AWS CodePipeline User Guide.Update requires: No interruption
* @property {AWSCodePipelinePipelineDisableInboundStageTransitions} DisableInboundStageTransitions Required: No. Prevents artifacts in a pipeline from transitioning to the stage that you
            specified. This enables you to manually control transitions.Update requires: No interruption
* @property {String} Name Required: No. The name of your AWS CodePipeline pipeline.Update requires: No interruption
* @property {Boolean} RestartExecutionOnUpdate Required: No. Indicates whether to rerun the AWS CodePipeline pipeline after you update it.Update requires: No interruption
* @property {String} RoleArn Required: Yes. A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to
                  make calls to AWS services on your behalf. For more information, see AWS CodePipeline Access Permissions
                     Reference in the AWS CodePipeline User Guide.Update requires: No interruption
* @property {AWSCodePipelinePipelineStages} Stages Required: Yes. Defines the AWS CodePipeline pipeline stages.Update requires: No interruption
*/
class Pipeline extends WKResource {
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

module.exports = {  CustomActionType: CustomActionType,
  Pipeline: Pipeline
}
