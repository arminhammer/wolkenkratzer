'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module CodeDeploy */

/** @memberof module:CodeDeploy
*   @extends WKResource
* @property {String} ApplicationName Required: No. A name for the application. If you don't specify a name, AWS CloudFormation generates a unique
            physical ID and uses that ID for the application name. For more information, see Name Type.Update requires: Updates are not supported.
*/
function Application (name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::Application'
    let properties = {
      ApplicationName: new ResourceAttribute('ApplicationName', String, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Application.prototype = Object.create(WKResource.prototype)

/** @memberof module:CodeDeploy
*   @extends WKResource
* @property {String} DeploymentConfigName Required: No. A name for the deployment configuration. If you don't specify a name, AWS CloudFormation
                  generates a unique physical ID and uses that ID for the deployment configuration
                  name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {AWSCodeDeployDeploymentConfigMinimumHealthyHosts} MinimumHealthyHosts Required: No. The minimum number of healthy instances that must be available at any time
                  during an AWS CodeDeploy deployment. For example, for a fleet of nine instances, if you
                  specify a minimum of six healthy instances, AWS CodeDeploy deploys your application up to
                  three instances at a time so that you always have six healthy instances. The
                  deployment succeeds if your application successfully deploys to six or more
                  instances; otherwise, the deployment fails.For more information about instance health, see AWS CodeDeploy Instance Health in the
                     AWS CodeDeploy User Guide.Update requires: Replacement
*/
function DeploymentConfig (name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::DeploymentConfig'
    let properties = {
      DeploymentConfigName: new ResourceAttribute('DeploymentConfigName', String, 'No', null),
      MinimumHealthyHosts: new ResourceAttribute('MinimumHealthyHosts', types.AWSCodeDeployDeploymentConfigMinimumHealthyHosts, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DeploymentConfig.prototype = Object.create(WKResource.prototype)

/** @memberof module:CodeDeploy
*   @extends WKResource
* @property {String} ApplicationName Required: Yes. The name of an AWS CodeDeploy application for this deployment group.Update requires: Replacement
* @property {String} AutoScalingGroups Required: No. A list of associated Auto Scaling groups that AWS CodeDeploy automatically deploys revisions to
                  when new instances are created.Update requires: No interruption
* @property {AWSCodeDeployDeploymentGroupDeployment} Deployment Required: No. The application revision that will be deployed to this deployment group.Update requires: No interruption
* @property {String} DeploymentConfigName Required: No. A deployment configuration name or a predefined configuration name. With
                  predefined configurations, you can deploy application revisions to one instance at
                  a time, half of the instances at a time, or all the instances at once. For more
                  information and valid values, see the DeploymentConfigName parameter
                  for the CreateDeploymentGroup action in the
                     AWS CodeDeploy API Reference.Update requires: No interruption
* @property {String} DeploymentGroupName Required: No. A name for the deployment group. If you don't specify a name, AWS CloudFormation generates a
                  unique physical ID and uses that ID for the deployment group name. For more
                  information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
* @property {AWSCodeDeployDeploymentGroupEc2TagFilters} Ec2TagFilters Required: No. The Amazon EC2 tags to filter on. AWS CodeDeploy includes all instances that match the tag
                  filter with this deployment group.Update requires: No interruption
* @property {AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters} OnPremisesInstanceTagFilters Required: No. The on-premises instance tags to filter on. AWS CodeDeploy includes all on-premises
                  instances that match the tag filter with this deployment group. To register
                  on-premises instances with AWS CodeDeploy, see Configure Existing
                     On-Premises Instances by Using AWS CodeDeploy in the
                     AWS CodeDeploy User Guide.Update requires: No interruption
* @property {String} ServiceRoleArn Required: Yes. A service role Amazon Resource Name (ARN) that grants AWS CodeDeploy permission to make
                  calls to AWS services on your behalf. For more information, see Create a Service Role for
                     AWS CodeDeploy in the AWS CodeDeploy User Guide.NoteIn some cases, you might need to add a dependency on the service role's
                     policy. For more information, see IAM role policy in DependsOn Attribute.Update requires: No interruption
*/
function DeploymentGroup (name, propertiesObject) {
    let resourceType = 'AWS::CodeDeploy::DeploymentGroup'
    let properties = {
      ApplicationName: new ResourceAttribute('ApplicationName', String, 'Yes', null),
      AutoScalingGroups: new ResourceAttributeArray('AutoScalingGroups', String, 'No', null),
      Deployment: new ResourceAttribute('Deployment', types.AWSCodeDeployDeploymentGroupDeployment, 'No', null),
      DeploymentConfigName: new ResourceAttribute('DeploymentConfigName', String, 'No', null),
      DeploymentGroupName: new ResourceAttribute('DeploymentGroupName', String, 'No', null),
      Ec2TagFilters: new ResourceAttribute('Ec2TagFilters', types.AWSCodeDeployDeploymentGroupEc2TagFilters, 'No', null),
      OnPremisesInstanceTagFilters: new ResourceAttribute('OnPremisesInstanceTagFilters', types.AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters, 'No', null),
      ServiceRoleArn: new ResourceAttribute('ServiceRoleArn', String, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
DeploymentGroup.prototype = Object.create(WKResource.prototype)

module.exports = {  Application: Application,
  DeploymentConfig: DeploymentConfig,
  DeploymentGroup: DeploymentGroup
}
