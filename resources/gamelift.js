'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const tag = require('./../tag')
const types = require('./../types')

/** @module GameLift */

/** @memberof module:GameLift
*   @extends WKResource
* @property {String} Description Required: No. Information that helps you identify the purpose of this alias.Update requires: No interruption
* @property {String} Name Required: Yes. An identifier to associate with this alias. Alias names don't need to be
            unique.Update requires: No interruption
* @property {AmazonGameLiftAliasRoutingStrategy} RoutingStrategy Required: Yes. A routing configuration that specifies where traffic is directed for this alias,
            such as to a fleet or to a message.Update requires: No interruption
*/
function Alias (name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Alias'
    let properties = {
      Description: new ResourceAttribute('Description', String, false, 'No', null),
      Name: new ResourceAttribute('Name', String, false, 'Yes', null),
      RoutingStrategy: new ResourceAttribute('RoutingStrategy', types.AmazonGameLiftAliasRoutingStrategy, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Alias.prototype = Object.create(WKResource.prototype)

/** @memberof module:GameLift
*   @extends WKResource
* @property {String} Name Required: No. An identifier to associate with this build. Build names don't need to be
            unique.Update requires: No interruption
* @property {AmazonGameLiftBuildStorageLocation} StorageLocation Required: Conditional. The Amazon Simple Storage Service (Amazon S3) location where your build package files are located.Update requires: Replacement
* @property {String} Version Required: No. A version to associate with this build. Version is useful if you want to track
            updates to your build package files. Versions don't need to be unique.Update requires: No interruption
*/
function Build (name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Build'
    let properties = {
      Name: new ResourceAttribute('Name', String, false, 'No', null),
      StorageLocation: new ResourceAttribute('StorageLocation', types.AmazonGameLiftBuildStorageLocation, false, 'Conditional', null),
      Version: new ResourceAttribute('Version', String, false, 'No', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Build.prototype = Object.create(WKResource.prototype)

/** @memberof module:GameLift
*   @extends WKResource
* @property {String} BuildId Required: Yes. The unique identifier for the build that you want to use with this fleet.Update requires: Replacement
* @property {String} Description Required: No. Information that helps you identify the purpose of this fleet.Update requires: No interruption
* @property {Number} DesiredEC2Instances Required: Yes. The number of EC2 instances that you want in this fleet.Update requires: No interruption
* @property {AmazonGameLiftFleetEC2InboundPermission} EC2InboundPermissions Required: No. The incoming traffic, expressed as IP ranges and port numbers, that is permitted to
            access the game server. If you don't specify values, no traffic is permitted to your
            game servers.Update requires: No interruption
* @property {String} EC2InstanceType Required: Yes. The type of EC2 instances that the fleet uses. EC2 instance types define the CPU,
            memory, storage, and networking capacity of the fleet's hosts. For more information
            about the instance types that are supported by GameLift, see the EC2InstanceType parameter in the
            Amazon GameLift API Reference.Update requires: Replacement
* @property {String} LogPaths Required: No. The path to game-session log files that are generated by your game server, with the
            slashes (\) escaped. After a game session has been terminated, GameLift
            captures and stores the logs in an S3 bucket.Update requires: Replacement
* @property {Number} MaxSize Required: No. The maximum number of EC2 instances that you want to allow in this fleet. By default, AWS CloudFormation, sets this property to 1.Update requires: No interruption
* @property {Number} MinSize Required: No. The minimum number of EC2 instances that you want to allow in this fleet. By default, AWS CloudFormation, sets this property to 0.Update requires: No interruption
* @property {String} Name Required: Yes. An identifier to associate with this fleet. Fleet names don't need to be
            unique.Update requires: No interruption
* @property {String} ServerLaunchParameters Required: No. The parameters that are required to launch your game server. Specify these
            parameters as a string of command-line parameters, such as +sv_port 33435
              +start_lobby.Update requires: Replacement
* @property {String} ServerLaunchPath Required: Yes. The location of your game server that GameLift launches. You must escape the slashes
              (\) and use the following pattern:
                C:\\game\\launchpath. For example,
            if your game server files are in the MyGame folder, the path should be
              C:\\game\\MyGame\\server.exe.Update requires: Replacement
*/
function Fleet (name, propertiesObject) {
    let resourceType = 'AWS::GameLift::Fleet'
    let properties = {
      BuildId: new ResourceAttribute('BuildId', String, false, 'Yes', null),
      Description: new ResourceAttribute('Description', String, false, 'No', null),
      DesiredEC2Instances: new ResourceAttribute('DesiredEC2Instances', Number, false, 'Yes', null),
      EC2InboundPermissions: new ResourceAttribute('EC2InboundPermissions', types.AmazonGameLiftFleetEC2InboundPermission, true, 'No', null),
      EC2InstanceType: new ResourceAttribute('EC2InstanceType', String, false, 'Yes', null),
      LogPaths: new ResourceAttribute('LogPaths', String, true, 'No', null),
      MaxSize: new ResourceAttribute('MaxSize', Number, false, 'No', null),
      MinSize: new ResourceAttribute('MinSize', Number, false, 'No', null),
      Name: new ResourceAttribute('Name', String, false, 'Yes', null),
      ServerLaunchParameters: new ResourceAttribute('ServerLaunchParameters', String, false, 'No', null),
      ServerLaunchPath: new ResourceAttribute('ServerLaunchPath', String, false, 'Yes', null)
    }
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Fleet.prototype = Object.create(WKResource.prototype)

module.exports = {  Alias: Alias,
  Build: Build,
  Fleet: Fleet
}
