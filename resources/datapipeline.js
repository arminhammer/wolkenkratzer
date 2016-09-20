'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module DataPipeline */

/** @memberof module:DataPipeline
*   @extends WKResource
* @property {Boolean} Activate Required: No. Indicates whether to validate and start the pipeline or stop an active pipeline. By
            default, the value is set to true.Update requires: No interruption
* @property {String} Description Required: No. A description for the pipeline.Update requires: Replacement.
* @property {String} Name Required: Yes. A name for the pipeline. Because AWS CloudFormation assigns each new pipeline a unique
                        identifier, you can use the same name for multiple pipelines that are
                        associated with your AWS account.Update requires: Replacement
* @property {AWSDataPipelinePipelineParameterObjects} ParameterObjects Required: No. Defines the variables that are in the pipeline definition. For more
                        information, see Creating
                            a Pipeline Using Parameterized Templates in the
                            AWS Data Pipeline Developer Guide.Update requires: No interruption
* @property {AWSDataPipelinePipelineParameterValues} ParameterValues Required: No. Defines the values for the parameters that are defined in the
              ParameterObjects property. For more information, see Creating a Pipeline Using Parameterized
              Templates in the AWS Data Pipeline Developer Guide.Update requires: No interruption
* @property {AWSDataPipelinePipelineObjects} PipelineObjects Required: Yes. A list of pipeline objects that make up the pipeline. For more information about
            pipeline objects and a description of each object, see Pipeline Object Reference in the
              AWS Data Pipeline Developer Guide.Update requires: Some interruptions. Not all objects, fields, and values can be updated.
                        Restrictions on what can be updated are documented in Editing Your
                            Pipelines in the AWS Data Pipeline Developer Guide.
* @property {AWSDataPipelinePipelinePipelineTags} PipelineTags Required: No. A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you
                        can use to control permissions. For more information, see Controlling Access to
                            Pipelines and Resources in the
                            AWS Data Pipeline Developer Guide.Update requires: No interruption
*/
function Pipeline (name, propertiesObject) {
    let resourceType = 'AWS::DataPipeline::Pipeline'
    let properties = {
      Activate: new ResourceAttribute('Activate', Boolean, false, 'No', null),
      Description: new ResourceAttribute('Description', String, false, 'No', null),
      Name: new ResourceAttribute('Name', String, false, 'Yes', null),
      ParameterObjects: new ResourceAttribute('ParameterObjects', types.AWSDataPipelinePipelineParameterObjects, false, 'No', null),
      ParameterValues: new ResourceAttribute('ParameterValues', types.AWSDataPipelinePipelineParameterValues, false, 'No', null),
      PipelineObjects: new ResourceAttribute('PipelineObjects', types.AWSDataPipelinePipelineObjects, true, 'Yes', null),
      PipelineTags: new ResourceAttribute('PipelineTags', types.AWSDataPipelinePipelinePipelineTags, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Pipeline.prototype = Object.create(WKResource.prototype)

module.exports = {  Pipeline: Pipeline
}
