'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
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
function CustomActionType (name, propertiesObject) {
    let resourceType = 'AWS::CodePipeline::CustomActionType'
    let properties = {
      Category: new ResourceAttribute('Category', String, false, 'Yes', null),
      ConfigurationProperties: new ResourceAttribute('ConfigurationProperties', types.AWSCodePipelineCustomActionTypeConfigurationProperties, true, 'No', null),
      InputArtifactDetails: new ResourceAttribute('InputArtifactDetails', types.AWSCodePipelineCustomActionTypeArtifactDetails, false, 'Yes', null),
      OutputArtifactDetails: new ResourceAttribute('OutputArtifactDetails', types.AWSCodePipelineCustomActionTypeArtifactDetails, false, 'Yes', null),
      Provider: new ResourceAttribute('Provider', String, false, 'Yes', null),
      Settings: new ResourceAttribute('Settings', types.AWSCodePipelineCustomActionTypeSettings, false, 'No', null),
      Version: new ResourceAttribute('Version', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
CustomActionType.prototype = Object.create(WKResource.prototype)

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
function Pipeline (name, propertiesObject) {
    let resourceType = 'AWS::CodePipeline::Pipeline'
    let properties = {
      ArtifactStore: new ResourceAttribute('ArtifactStore', types.AWSCodePipelinePipelineArtifactStore, false, 'Yes', null),
      DisableInboundStageTransitions: new ResourceAttribute('DisableInboundStageTransitions', types.AWSCodePipelinePipelineDisableInboundStageTransitions, true, 'No', null),
      Name: new ResourceAttribute('Name', String, false, 'No', null),
      RestartExecutionOnUpdate: new ResourceAttribute('RestartExecutionOnUpdate', Boolean, false, 'No', null),
      RoleArn: new ResourceAttribute('RoleArn', String, false, 'Yes', null),
      Stages: new ResourceAttribute('Stages', types.AWSCodePipelinePipelineStages, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Pipeline.prototype = Object.create(WKResource.prototype)

module.exports = {  CustomActionType: CustomActionType,
  Pipeline: Pipeline
}
