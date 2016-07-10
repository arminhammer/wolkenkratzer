'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module EC2 */

/** @memberof module:EC2
*   @extends WKResource
* @property {NumberBgpAsnisalwaysanintegervalue} BgpAsn Required: Yes. The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).Update requires: Replacement
* @property {String} IpAddress Required: Yes. The internet-routable IP address for the customer gateway's outside interface. The address must be
               static.Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. The tags that you want to attach to the resource.Update requires: No interruption.
* @property {String} Type Required: Yes. The type of VPN connection that this customer gateway supports.Update requires: ReplacementExample: ipsec.1
*/
class CustomerGateway extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::CustomerGateway'
    let properties = {
      BgpAsn: new ResourceAttribute('BgpAsn', types.NumberBgpAsnisalwaysanintegervalue, 'Yes', null),
      IpAddress: new ResourceAttribute('IpAddress', String, 'Yes', null),
      Tags: new tag.TagSet(),
      Type: new ResourceAttribute('Type', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} DomainName Required: Conditional. A domain name of your choice.Update requires: ReplacementExample: "example.com"
* @property {String} DomainNameServers Required: Conditional. The IP (IPv4) address of a domain name server. You can specify up to four addresses.Update requires: ReplacementExample: "DomainNameServers" : [ "10.0.0.1", "10.0.0.2"
                  ]Example: To preserve the order of IP addresses, specify a comma delimited list as a single string: "DomainNameServers" : [ "10.0.0.1, 10.0.0.2" ]
* @property {String} NetbiosNameServers Required: Conditional. The IP address (IPv4) of a NetBIOS name server. You can specify up to four addresses.Update requires: ReplacementExample: "NetbiosNameServers" : [ "10.0.0.1", "10.0.0.2" ]Example: To preserve the order of IP addresses, specify a comma delimited list as a single string: "NetbiosNameServers" : [ "10.0.0.1, 10.0.0.2" ]
* @property {numbers} NetbiosNodeType Required: Conditional. An integer value indicating the NetBIOS node type:1: Broadcast ("B")2: Point-to-point ("P")4: Mixed mode ("M")8: Hybrid ("H")For more information about these values and about NetBIOS node types, see
                     RFC 2132, RFC 1001, and RFC 1002. We recommend that
                  you use only the value 2 at this time (broadcast and multicast are
                  not currently supported).Update requires: ReplacementExample: "NetbiosNodeType" : 2
* @property {String} NtpServers Required: Conditional. The IP address (IPv4) of a Network Time Protocol (NTP) server. You can specify up to four
                  addresses.Update requires: ReplacementExample: "NtpServers" : [ "10.0.0.1" ]Example: To preserve the order of IP addresses, specify a comma delimited list as a single string: "NtpServers" : [ "10.0.0.1, 10.0.0.2" ]
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this resource.Update requires: No interruption.
*/
class DHCPOptions extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::DHCPOptions'
    let properties = {
      DomainName: new ResourceAttribute('DomainName', String, 'Conditional', null),
      DomainNameServers: new ResourceAttributeArray('DomainNameServers', String, 'Conditional', null),
      NetbiosNameServers: new ResourceAttributeArray('NetbiosNameServers', String, 'Conditional', null),
      NetbiosNodeType: new ResourceAttributeArray('NetbiosNodeType', types.numbers, 'Conditional', null),
      NtpServers: new ResourceAttributeArray('NtpServers', String, 'Conditional', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} InstanceId Required: No. The Instance ID of the Amazon EC2 instance that you want to associate with this
                  Elastic IP address.Update requires: No interruption
* @property {String} Domain Required: Conditional. Set to vpc to allocate the address to your Virtual Private Cloud
                  (VPC). No other values are supported.NoteIf you define an Elastic IP address and associate it with a VPC that is
                     defined in the same template, you must declare a dependency on the VPC-gateway
                     attachment by using the DependsOn attribute on this resource. For
                     more information, see DependsOn Attribute.For more information, see AllocateAddress in the Amazon EC2 API Reference. For more
                  information about Elastic IP Addresses in VPC, go to IP Addressing in Your VPC in the Amazon VPC User
                     Guide.Update requires: Replacement
*/
class EIP extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIP'
    let properties = {
      InstanceId: new ResourceAttribute('InstanceId', String, 'No', null),
      Domain: new ResourceAttribute('Domain', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} AllocationId Required: Conditional. Allocation ID for the VPC Elastic IP address you want to associate with an
                  Amazon EC2 instance in your VPC.Update requires: Replacement if you also change the InstanceId or
                     NetworkInterfaceId property. If not, update requires No interruption.
* @property {String} EIP Required: Conditional. Elastic IP address that you want to associate with the Amazon EC2 instance specified
                  by the InstanceId property. You can specify an existing Elastic IP
                  address or a reference to an Elastic IP address allocated with a AWS::EC2::EIP resource.Update requires: Replacement if you also change the InstanceId or
                     NetworkInterfaceId property. If not, update requires No interruption.
* @property {String} InstanceId Required: No. Instance ID of the Amazon EC2 instance that you want to associate with the Elastic
                  IP address specified by the EIP property.Update requires: Replacement if you also change the AllocationId or
                     EIP property. If not, update requires No interruption.
* @property {String} NetworkInterfaceId Required: No. The ID of the network interface to associate with the Elastic IP address (VPC
                  only).Update requires: Replacement if you also change the AllocationId or
                     EIP property. If not, update requires No interruption.
* @property {String} PrivateIpAddress Required: No. The private IP address that you want to associate with the Elastic IP address.
                  The private IP address is restricted to the primary and secondary private IP
                  addresses that are associated with the network interface. By default, the private
                  IP address that is associated with the EIP is the primary private IP address of
                  the network interface.Update requires: No interruption
*/
class EIPAssociation extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::EIPAssociation'
    let properties = {
      AllocationId: new ResourceAttribute('AllocationId', String, 'Conditional', null),
      EIP: new ResourceAttribute('EIP', String, 'Conditional', null),
      InstanceId: new ResourceAttribute('InstanceId', String, 'No', null),
      NetworkInterfaceId: new ResourceAttribute('NetworkInterfaceId', String, 'No', null),
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} DeliverLogsPermissionArn Required: Yes. The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.Update requires: Replacement
* @property {String} LogGroupName Required: Yes. The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.Update requires: Replacement
* @property {String} ResourceId Required: Yes. The ID of the subnet, network interface, or VPC for which you want to create a flow log.Update requires: Replacement
* @property {String} ResourceType Required: Yes. The type of resource that you specified in the ResourceId property. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property. For valid values, see the ResourceType parameter for the CreateFlowLogs action in the Amazon EC2 API Reference.Update requires: Replacement
* @property {String} TrafficType Required: Yes. The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. For valid values, see the TrafficType parameter for the CreateFlowLogs action in the Amazon EC2 API Reference.Update requires: Replacement
*/
class FlowLog extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::FlowLog'
    let properties = {
      DeliverLogsPermissionArn: new ResourceAttribute('DeliverLogsPermissionArn', String, 'Yes', null),
      LogGroupName: new ResourceAttribute('LogGroupName', String, 'Yes', null),
      ResourceId: new ResourceAttribute('ResourceId', String, 'Yes', null),
      ResourceType: new ResourceAttribute('ResourceType', String, 'Yes', null),
      TrafficType: new ResourceAttribute('TrafficType', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} AutoPlacement Required: No. Indicates if the host accepts EC2 instances with only matching configurations or if
            instances must also specify the host ID. Instances that don't specify a host ID can't
            launch onto a host with AutoPlacement set to off. By default,
            AWS CloudFormation sets this property to on. For more information, see Understanding Instance
              Placement and Host Affinity in the
            Amazon EC2 User Guide for Linux Instances.Update requires: No interruption
* @property {String} AvailabilityZone Required: Yes. The Availability Zone (AZ) in which to launch the dedicated host.Update requires: Replacement
* @property {String} InstanceType Required: Yes. The instance type that the dedicated host accepts. Only instances of this type can be launched onto the host. For more information, see Supported Instance Types in the Amazon EC2 User Guide for Linux Instances.Update requires: Replacement
*/
class Host extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Host'
    let properties = {
      AutoPlacement: new ResourceAttribute('AutoPlacement', String, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'Yes', null),
      InstanceType: new ResourceAttribute('InstanceType', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} Affinity Required: No. Indicates whether Amazon Elastic Compute Cloud (Amazon EC2) always associates the instance with a dedicated host. If you want Amazon EC2 to always restart the instance (if it was stopped) onto the same host on which it was launched, specify host. If you want Amazon EC2 to restart the instance on any available host, but to try to launch the instance onto the last host it ran on (on a best-effort basis), specify default.Update requires: No interruption
* @property {String} AvailabilityZone Required: Conditional. Specifies the name of the Availability Zone in which the instance is
                  located.For more information about AWS regions and Availability Zones, see Regions and Availability Zones in the Amazon EC2 User
                     Guide.Update requires: Replacement
* @property {AmazonEC2BlockDeviceMappingProperty} BlockDeviceMappings Required: No. Defines a set of Amazon Elastic Block Store block device mappings, ephemeral instance store
                  block device mappings, or both. For more information, see Amazon Elastic Block Store or Amazon EC2 Instance Store in the
                  Amazon EC2 User Guide for Linux Instances.Update requires: Replacement. If you change only the DeleteOnTermination
                  property for one or more block devices, update requires No interruption.
* @property {Boolean} DisableApiTermination Required: No. Specifies whether the instance can be terminated through the API.Update requires: No interruption
* @property {Boolean} EbsOptimized Required: Conditional. Specifies whether the instance is optimized for Amazon Elastic Block Store I/O. This
                  optimization provides dedicated throughput to Amazon EBS and an optimized configuration
                  stack to provide optimal EBS I/O performance.For more information about the instance types that can be launched as Amazon EBS
                  optimized instances, see Amazon
                     EBS-Optimized Instances in the Amazon Elastic Compute Cloud
                     User Guide. Additional fees are incurred when using Amazon EBS-optimized
                  instances.Update requires:Update requires: Some interruptions for Amazon EBS-backed instancesUpdate requires: Replacement for instance store-backed instances
* @property {String} HostId Required: No. If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account. This type of launch is called an untargeted launch. Note that for untargeted launches, you must have a compatible, dedicated host available to successfully launch instances.Update requires: No interruption
* @property {String} IamInstanceProfile Required: No. The physical ID (resource name) of an instance profile or a reference to an
                     AWS::IAM::InstanceProfile resource.For more information about IAM roles, see Working with Roles in the
   AWS Identity and Access Management User Guide.Update requires: Replacement
* @property {String} ImageId Required: Yes. Provides the unique ID of the Amazon Machine Image (AMI) that was assigned
                  during registration.Update requires: Replacement
* @property {String} InstanceInitiatedShutdownBehavior Required: No. Indicates whether an instance stops or terminates when you shut down the
                  instance from the instance's operating system shutdown command. You can specify
                     stop or terminate. For more information, see the
                  RunInstances command in the
                     Amazon EC2 API Reference.Update requires: No interruption
* @property {String} InstanceType Required: No. The instance type, such as t2.micro. The default type is
                     "m1.small". For a list of instance types, see Instance Families and
                  Types.Update requires:Update requires: Some interruptions for Amazon EBS-backed instancesUpdate requires: Replacement for instance store-backed instances
* @property {String} KernelId Required: No. The kernel ID.Update requires:Update requires: Some interruptions for Amazon EBS-backed instancesUpdate requires: Replacement for instance store-backed instances
* @property {String} KeyName Required: No. Provides the name of the Amazon EC2 key pair.Update requires: Replacement
* @property {Boolean} Monitoring Required: No. Specifies whether monitoring is enabled for the instance.Update requires: No interruption
* @property {EC2NetworkInterfaceEmbeddedPropertyType} NetworkInterfaces Required: No. A list of embedded objects that describe the network interfaces to associate
                  with this instance.NoteIf this resource has a public IP address and is also in a VPC that is defined in the same template, you must use the
DependsOn attribute to declare a dependency on the VPC-gateway attachment. For more information,
see DependsOn Attribute.Update requires: Replacement
* @property {String} PlacementGroupName Required: No. The name of an existing placement group that you want to launch the instance
                  into (for cluster instances).Update requires: Replacement
* @property {String} PrivateIpAddress Required: No. The private IP address for this instance.ImportantIf you make an update to an instance that requires replacement, you must
                        assign a new private IP address. During a replacement, AWS CloudFormation creates a new
                        instance but doesn't delete the old instance until the stack has
                        successfully updated. If the stack update fails, AWS CloudFormation uses the old instance
                        in order to roll back the stack to the previous working state. The old and
                        new instances cannot have the same private IP address.(Optional) If you're using Amazon VPC, you can use this parameter to assign the
                  instance a specific available IP address from the subnet (for example, 10.0.0.25).
                  By default, Amazon VPC selects an IP address from the subnet for the instance.Update requires: Replacement
* @property {String} RamdiskId Required: No. The ID of the RAM disk to select. Some kernels require additional drivers at
                  launch. Check the kernel requirements for information about whether you need to
                  specify a RAM disk. To find kernel requirements, go to the AWS Resource Center and
                  search for the kernel ID.Update requires:Update requires: Some interruptions for Amazon EBS-backed instancesUpdate requires: Replacement for instance store-backed instances
* @property {String} SecurityGroupIds Required: Conditional. A list that contains the security group IDs for VPC security groups to assign
                  to the Amazon EC2 instance. If you specified the NetworkInterfaces
                  property, do not specify this property.Update requires:Update requires: No interruption for instances that are in a VPC.Update requires: Replacement for instances that are not in a VPC.
* @property {String} SecurityGroups Required: No. Valid only for Amazon EC2 security groups. A list that contains the Amazon EC2 security
                  groups to assign to the Amazon EC2 instance. The list can contain both the name of
                  existing Amazon EC2 security groups or references to AWS::EC2::SecurityGroup resources
                  created in the template.Update requires: Replacement.
* @property {Boolean} SourceDestCheck Required: No. Controls whether source/destination checking is enabled on the instance. Also
                  determines if an instance in a VPC will perform network address translation
                  (NAT).A value of "true" means that source/destination checking is
                  enabled, and a value of "false" means that checking is disabled. For
                  the instance to perform NAT, the value must be
                     "false". For more information, see NAT
                     Instances in the Amazon Virtual Private Cloud User
                     Guide.Update requires: No interruption
* @property {AmazonEC2InstanceSsmAssociations} SsmAssociations Required: No. The Amazon EC2 Simple Systems Manager (SSM) document
                  and parameter values to associate with this instance. To use this property, you
                  must specify an IAM role for the instance. For more information, see Prerequisites for Remotely
                     Running Commands on EC2 Instances in the
                     Amazon EC2 User Guide for Microsoft Windows Instances.NoteYou can currently associate only one document with an instance.Update requires: No interruption
* @property {String} SubnetId Required: No. If you're using Amazon VPC, this property specifies the ID of the subnet that
                  you want to launch the instance into. If you specified the
                     NetworkInterfaces property, do not specify this property.Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this instance.Update requires: No interruption.
* @property {String} Tenancy Required: No. The tenancy of the instance that you want to launch, such as default, dedicated, or host. If you specify a tenancy value of dedicated or host, you must launch the instance in a VPC. For more information, see Dedicated Instances in the Amazon VPC User Guide.Update requires:Update requires: No interruption if this property was set to dedicated and you change it to host or vice versa.Update requires: Replacement for all other changes.
* @property {String} UserData Required: No. Base64-encoded MIME user data that is made available to the instances.Update requires:Update requires: Some interruptions for Amazon EBS-backed instances.NoteFor EBS-backed instances, changing the UserData stops
                              and then starts the instance; however, Amazon EC2 doesn't automatically run
                              the updated UserData. To update configurations on your
                              instance, use the cfn-hup helper
                              script.Update requires: Replacement for instance store-backed instances.
* @property {EC2MountPoints} Volumes Required: No. The Amazon EBS volumes to attach to the instance.NoteBefore detaching a volume, unmount any file systems on the device within
                        your operating system. If you don't unmount the file system, a volume might
                        get stuck in a busy state while detaching.Update requires: No interruption
* @property {String} AdditionalInfo Required: No. Reserved.Update requires:
    Update requires: Some interruptions for Amazon EBS-backed instancesUpdate requires: Replacement for instance store-backed instances
*/
class Instance extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Instance'
    let properties = {
      Affinity: new ResourceAttribute('Affinity', String, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'Conditional', null),
      BlockDeviceMappings: new ResourceAttributeArray('BlockDeviceMappings', types.AmazonEC2BlockDeviceMappingProperty, 'No', null),
      DisableApiTermination: new ResourceAttribute('DisableApiTermination', Boolean, 'No', null),
      EbsOptimized: new ResourceAttribute('EbsOptimized', Boolean, 'Conditional', null),
      HostId: new ResourceAttribute('HostId', String, 'No', null),
      IamInstanceProfile: new ResourceAttribute('IamInstanceProfile', String, 'No', null),
      ImageId: new ResourceAttribute('ImageId', String, 'Yes', null),
      InstanceInitiatedShutdownBehavior: new ResourceAttribute('InstanceInitiatedShutdownBehavior', String, 'No', null),
      InstanceType: new ResourceAttribute('InstanceType', String, 'No', null),
      KernelId: new ResourceAttribute('KernelId', String, 'No', null),
      KeyName: new ResourceAttribute('KeyName', String, 'No', null),
      Monitoring: new ResourceAttribute('Monitoring', Boolean, 'No', null),
      NetworkInterfaces: new ResourceAttributeArray('NetworkInterfaces', types.EC2NetworkInterfaceEmbeddedPropertyType, 'No', null),
      PlacementGroupName: new ResourceAttribute('PlacementGroupName', String, 'No', null),
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'No', null),
      RamdiskId: new ResourceAttribute('RamdiskId', String, 'No', null),
      SecurityGroupIds: new ResourceAttributeArray('SecurityGroupIds', String, 'Conditional', null),
      SecurityGroups: new ResourceAttributeArray('SecurityGroups', String, 'No', null),
      SourceDestCheck: new ResourceAttribute('SourceDestCheck', Boolean, 'No', null),
      SsmAssociations: new ResourceAttributeArray('SsmAssociations', types.AmazonEC2InstanceSsmAssociations, 'No', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'No', null),
      Tags: new tag.TagSet(),
      Tenancy: new ResourceAttribute('Tenancy', String, 'No', null),
      UserData: new ResourceAttribute('UserData', String, 'No', null),
      Volumes: new ResourceAttributeArray('Volumes', types.EC2MountPoints, 'No', null),
      AdditionalInfo: new ResourceAttribute('AdditionalInfo', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this resource.Update requires: No interruption.
*/
class InternetGateway extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::InternetGateway'
    let properties = {
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} AllocationId Required: Yes. The allocation ID of an Elastic IP address to associate with the NAT gateway. If the
            Elastic IP address is associated with another resource, you must first disassociate
            it.Update requires: Replacement
* @property {String} SubnetId Required: Yes. The public subnet in which to create the NAT gateway.Update requires: Replacement
*/
class NatGateway extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NatGateway'
    let properties = {
      AllocationId: new ResourceAttribute('AllocationId', String, 'Yes', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this ACL.Update requires: No interruption.
* @property {String} VpcId Required: Yes. The ID of the VPC where the network ACL will be created.Update requires: Replacement
*/
class NetworkAcl extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkAcl'
    let properties = {
      Tags: new tag.TagSet(),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} CidrBlock Required: Yes. The CIDR range to allow or deny, in CIDR notation (e.g., 172.16.0.0/24).Update requires: No interruption
* @property {Boolean} Egress Required: No. Whether this rule applies to egress traffic from the subnet (true)
                  or ingress traffic to the subnet (false). By default, AWS CloudFormation specifies
                     false.Update requires: Replacement.
* @property {EC2ICMPPropertyType} Icmp Required: Conditional. The Internet Control Message Protocol (ICMP) code and type.Update requires: No interruption
* @property {String} NetworkAclId Required: Yes. ID of the ACL where the entry will be created.Update requires: Replacement.
* @property {EC2PortRangePropertyType} PortRange Required: Conditional. The range of port numbers for the UDP/TCP protocol.Update requires: No interruption
* @property {Number} Protocol Required: Yes. The IP protocol that the rule applies to. You must specify -1 or a
                  protocol number (go to Protocol Numbers at iana.org). You can specify -1 for all
                  protocols.NoteIf you specify -1, all ports are opened and the
                        PortRange property is ignored.Update requires: No interruption
* @property {String} RuleAction Required: Yes. Whether to allow or deny traffic that matches the rule; valid values are "allow" or "deny".Update requires: No interruption
* @property {Number} RuleNumber Required: Yes. Rule number to assign to the entry (e.g., 100). This must be a positive integer
                  from 1 to 32766.Update requires: Replacement.
*/
class NetworkAclEntry extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkAclEntry'
    let properties = {
      CidrBlock: new ResourceAttribute('CidrBlock', String, 'Yes', null),
      Egress: new ResourceAttribute('Egress', Boolean, 'No', null),
      Icmp: new ResourceAttribute('Icmp', types.EC2ICMPPropertyType, 'Conditional', null),
      NetworkAclId: new ResourceAttribute('NetworkAclId', String, 'Yes', null),
      PortRange: new ResourceAttribute('PortRange', types.EC2PortRangePropertyType, 'Conditional', null),
      Protocol: new ResourceAttribute('Protocol', Number, 'Yes', null),
      RuleAction: new ResourceAttribute('RuleAction', String, 'Yes', null),
      RuleNumber: new ResourceAttribute('RuleNumber', Number, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} Description Required: No. The description of this network interface.Update requires: No interruption.
* @property {String} GroupSet Required: No. A list of security group IDs associated with this network interface.Update requires: No interruption
* @property {String} PrivateIpAddress Required: No. Assigns a single private IP address to the network interface, which is used as
                  the primary private IP address. If you want to specify multiple private IP
                  address, use the PrivateIpAddresses property.Update requires: Replacement.
* @property {EC2NetworkInterfacePrivateIPSpecification} PrivateIpAddresses Required: No. Assigns a list of private IP addresses to the network interface. You can
                  specify a primary private IP address by setting the value of the
                     Primary property to true in the
                     PrivateIpAddressSpecification property. If you want Amazon EC2 to
                  automatically assign private IP addresses, use the
                     SecondaryPrivateIpAddressCount property and do not specify this
                  property.For information about the maximum number of private IP addresses, see Private IP Addresses Per
                     ENI Per Instance Type in the
                  Amazon EC2 User Guide for Linux Instances.Update requires: Replacement if you change the primary private IP address. If not,
                  update requires No interruption.
* @property {Number} SecondaryPrivateIpAddressCount Required: No. The number of secondary private IP addresses that Amazon EC2 automatically assigns
                  to the network interface. Amazon EC2 uses the value of the
                     PrivateIpAddress property as the primary private IP address. If
                  you don't specify that property, Amazon EC2 automatically assigns both the primary and
                  secondary private IP addresses.If you want to specify your own list of private IP addresses, use the
                     PrivateIpAddresses property and do not specify this
                  property.For information about the maximum number of private IP addresses, see Private IP Addresses
                     Per ENI Per Instance Type in the
                     Amazon EC2 User Guide for Linux Instances.Update requires: No interruption.
* @property {Boolean} SourceDestCheck Required: No. Flag indicating whether traffic to or from the instance is validated.Update requires: No interruption.
* @property {String} SubnetId Required: Yes. The ID of the subnet to associate with the network interface.Update requires: Replacement.
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this network
                  interface.Update requires: No interruption.
*/
class NetworkInterface extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkInterface'
    let properties = {
      Description: new ResourceAttribute('Description', String, 'No', null),
      GroupSet: new ResourceAttributeArray('GroupSet', String, 'No', null),
      PrivateIpAddress: new ResourceAttribute('PrivateIpAddress', String, 'No', null),
      PrivateIpAddresses: new ResourceAttributeArray('PrivateIpAddresses', types.EC2NetworkInterfacePrivateIPSpecification, 'No', null),
      SecondaryPrivateIpAddressCount: new ResourceAttribute('SecondaryPrivateIpAddressCount', Number, 'No', null),
      SourceDestCheck: new ResourceAttribute('SourceDestCheck', Boolean, 'No', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {Boolean} DeleteOnTermination Required: No. Whether to delete the network interface when the instance terminates. By
                  default, this value is set to True.Update requires: No interruption
* @property {String} DeviceIndex Required: Conditional. The network interface's position in the attachment order. For example, the
                  first attached network interface has a DeviceIndex of
                  0.Update requires: No interruption
* @property {String} InstanceId Required: Conditional. The ID of the instance to which you will attach the ENI.Update requires: No interruption
* @property {String} NetworkInterfaceId Required: Conditional. The ID of the ENI that you want to attach.Update requires: No interruption
*/
class NetworkInterfaceAttachment extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::NetworkInterfaceAttachment'
    let properties = {
      DeleteOnTermination: new ResourceAttribute('DeleteOnTermination', Boolean, 'No', null),
      DeviceIndex: new ResourceAttribute('DeviceIndex', String, 'Conditional', null),
      InstanceId: new ResourceAttribute('InstanceId', String, 'Conditional', null),
      NetworkInterfaceId: new ResourceAttribute('NetworkInterfaceId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} Strategy Required: No. The placement strategy, which relates to the instance types that can be added
            to the placement group. For example, for the cluster strategy, you can
            cluster C4 instance types but not T2 instance types. For valid values, see CreatePlacementGroup in the
              Amazon EC2 API Reference. By default, AWS CloudFormation sets the value of this
            property to cluster.Update requires: Replacement
*/
class PlacementGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::PlacementGroup'
    let properties = {
      Strategy: new ResourceAttribute('Strategy', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} DestinationCidrBlock Required: Yes. The CIDR address block used for the destination match. For example,
                     0.0.0.0/0. Routing decisions are based on the most specific
                  match.Update requires: Replacement
* @property {String} GatewayId Required: Conditional. The ID of an Internet gateway or virtual private gateway that is attached to
                  your VPC. For example: igw-eaad4883.For route entries that specify a gateway, you must specify a dependency on the
                  gateway attachment resource.  For more information, see DependsOn Attribute.Update requires: No interruption
* @property {String} InstanceId Required: Conditional. The ID of a NAT instance in your VPC. For example,
                  i-1a2b3c4d.Update requires: No interruption
* @property {String} NatGatewayId Required: Conditional. The ID of a NAT gateway. For example,
                  nat-0a12bc456789de0fg.Update requires: No interruption
* @property {String} NetworkInterfaceId Required: Conditional. Allows the routing of network interface IDs.Update requires: No interruption
* @property {String} RouteTableId Required: Yes. The ID of the route table where the route will
                  be added.Update requires: Replacement
* @property {String} VpcPeeringConnectionId Required: Conditional. The ID of a VPC peering connection.Update requires: No interruption
*/
class Route extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Route'
    let properties = {
      DestinationCidrBlock: new ResourceAttribute('DestinationCidrBlock', String, 'Yes', null),
      GatewayId: new ResourceAttribute('GatewayId', String, 'Conditional', null),
      InstanceId: new ResourceAttribute('InstanceId', String, 'Conditional', null),
      NatGatewayId: new ResourceAttribute('NatGatewayId', String, 'Conditional', null),
      NetworkInterfaceId: new ResourceAttribute('NetworkInterfaceId', String, 'Conditional', null),
      RouteTableId: new ResourceAttribute('RouteTableId', String, 'Yes', null),
      VpcPeeringConnectionId: new ResourceAttribute('VpcPeeringConnectionId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} VpcId Required: Yes. The ID of the VPC where the route table will be created.Example: vpc-11ad4878Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this route table.Update requires: No interruption.
*/
class RouteTable extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::RouteTable'
    let properties = {
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} GroupDescription Required: Yes. Description of the security group.Update requires: Replacement
* @property {EC2SecurityGroupRulePropertyType} SecurityGroupEgress Required: No. A list of Amazon EC2 security group egress rules.Update requires: No interruption
* @property {EC2SecurityGroupRulePropertyType} SecurityGroupIngress Required: No. A list of Amazon EC2 security group ingress rules.Update requires: No interruption
* @property {AWSCloudFormationResourceTags} Tags Required: No. The tags that you want to attach to the resource.Update requires: No interruption.
* @property {String} VpcId Required: Conditional. The physical ID of the VPC. Can be obtained by using a reference to an AWS::EC2::VPC, such as: { "Ref" : "myVPC" }.For more information about using the Ref function, see Ref.Update requires: ReplacementNoteFor more information about VPC security groups, go to Security Groups in the Amazon VPC User Guide.
*/
class SecurityGroup extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroup'
    let properties = {
      GroupDescription: new ResourceAttribute('GroupDescription', String, 'Yes', null),
      SecurityGroupEgress: new ResourceAttributeArray('SecurityGroupEgress', types.EC2SecurityGroupRulePropertyType, 'No', null),
      SecurityGroupIngress: new ResourceAttributeArray('SecurityGroupIngress', types.EC2SecurityGroupRulePropertyType, 'No', null),
      Tags: new tag.TagSet(),
      VpcId: new ResourceAttribute('VpcId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} CidrIp Required: Conditional. CIDR range.Update requires: Replacement
* @property {String} DestinationSecurityGroupId Required: Conditional. Specifies the group ID of the destination Amazon VPC security group.Update requires: Replacement
* @property {Number} FromPort Required: Yes. Start of port range for the TCP and UDP protocols, or an ICMP type number. If
                  you specify icmp for the IpProtocol property, you can
                  specify -1 as a wildcard (i.e., any ICMP type number).Update requires: Replacement
* @property {String} GroupId Required: Yes. ID of the Amazon VPC security group to modify. This value can be a reference to an AWS::EC2::SecurityGroup resource that has a
                  valid VpcId property or the ID of an existing Amazon VPC security group.Update requires: Replacement
* @property {String} IpProtocol Required: Yes. IP protocol name or number. For valid values, see the IpProtocol parameter in AuthorizeSecurityGroupIngressUpdate requires: Replacement
* @property {Number} ToPort Required: Yes. End of port range for the TCP and UDP protocols, or an ICMP code. If you
                  specify icmp for the IpProtocol property, you can
                  specify -1 as a wildcard (i.e., any ICMP code).Update requires: Replacement
*/
class SecurityGroupEgress extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroupEgress'
    let properties = {
      CidrIp: new ResourceAttribute('CidrIp', String, 'Conditional', null),
      DestinationSecurityGroupId: new ResourceAttribute('DestinationSecurityGroupId', String, 'Conditional', null),
      FromPort: new ResourceAttribute('FromPort', Number, 'Yes', null),
      GroupId: new ResourceAttribute('GroupId', String, 'Yes', null),
      IpProtocol: new ResourceAttribute('IpProtocol', String, 'Yes', null),
      ToPort: new ResourceAttribute('ToPort', Number, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} CidrIp Required: Conditional. Specifies a CIDR range.For an overview of CIDR ranges, go to the Wikipedia
                     Tutorial.Update requires: Replacement
* @property {Number} FromPort Required: Conditional. Start of port range for the TCP and UDP protocols, or an ICMP type number.
                  If you specify icmp for the IpProtocol property, you can
                  specify -1 as a wildcard (i.e., any ICMP type number).Update requires: Replacement
* @property {String} GroupId Required: Conditional. ID of the Amazon EC2 or VPC security group to modify. The group must belong to your
                  account.Update requires: Replacement
* @property {String} GroupName Required: Conditional. Name of the Amazon EC2 security group (non-VPC security group) to modify. This value
                  can be a reference to an AWS::EC2::SecurityGroup resource or the name of an existing Amazon EC2
                  security group.Update requires: Replacement
* @property {String} IpProtocol Required: Yes. IP protocol name or number. For valid values, see the IpProtocol parameter
                  in AuthorizeSecurityGroupIngressUpdate requires: Replacement
* @property {String} SourceSecurityGroupId Required: Conditional. Specifies the ID of the source security group or uses the Ref
                  intrinsic function to refer to the logical ID of a security group defined in the
                  same template.Update requires: Replacement
* @property {String} SourceSecurityGroupName Required: Conditional. Specifies the name of the Amazon EC2 security group (non-VPC security group) to
                  allow access or uses the Ref intrinsic function to refer to the
                  logical name of a security group defined in the same template. For instances in a
                  VPC, specify the SourceSecurityGroupId property.Update requires: Replacement
* @property {String} SourceSecurityGroupOwnerId Required: Conditional. Specifies the AWS Account ID of the owner of the Amazon EC2 security group
                  specified in the SourceSecurityGroupName property.Update requires: Replacement
* @property {Number} ToPort Required: Conditional. End of port range for the TCP and UDP protocols, or an ICMP code. If you
                  specify icmp for the IpProtocol property, you can
                  specify -1 as a wildcard (i.e., any ICMP code).Update requires: Replacement
*/
class SecurityGroupIngress extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SecurityGroupIngress'
    let properties = {
      CidrIp: new ResourceAttribute('CidrIp', String, 'Conditional', null),
      FromPort: new ResourceAttribute('FromPort', Number, 'Conditional', null),
      GroupId: new ResourceAttribute('GroupId', String, 'Conditional', null),
      GroupName: new ResourceAttribute('GroupName', String, 'Conditional', null),
      IpProtocol: new ResourceAttribute('IpProtocol', String, 'Yes', null),
      SourceSecurityGroupId: new ResourceAttribute('SourceSecurityGroupId', String, 'Conditional', null),
      SourceSecurityGroupName: new ResourceAttribute('SourceSecurityGroupName', String, 'Conditional', null),
      SourceSecurityGroupOwnerId: new ResourceAttribute('SourceSecurityGroupOwnerId', String, 'Conditional', null),
      ToPort: new ResourceAttribute('ToPort', Number, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {AmazonEC2SpotFleetSpotFleetRequestConfigData} SpotFleetRequestConfigData Required: Yes. The configuration for a Spot fleet request.Update requires: Replacement
*/
class SpotFleet extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SpotFleet'
    let properties = {
      SpotFleetRequestConfigData: new ResourceAttribute('SpotFleetRequestConfigData', types.AmazonEC2SpotFleetSpotFleetRequestConfigData, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} AvailabilityZone Required: No. The availability zone in which you want the subnet. Default: AWS selects a zone
                  for you (recommended).
                  Update requires: Replacement
                  NoteIf you update this property, you must also update the
                           CidrBlock property.
               
* @property {String} CidrBlock Required: Yes. The CIDR block that you want the subnet to cover (for example,
                     "10.0.0.0/24").
                  Update requires: Replacement
                  NoteIf you update this property, you must also update the
                           AvailabilityZone property.
               
* @property {Boolean} MapPublicIpOnLaunch Required: No. Indicates whether instances that are launched in this subnet receive a public
                  IP address. By default, the value is false.Update requires: No interruption.
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this subnet.Update requires: No interruption.
* @property {RefID} VpcId Required: Yes. A Ref structure that contains the ID of the VPC on which you want to create the
                  subnet. The VPC ID is provided as the value of the "Ref" property, as: {
                     "Ref": "VPCID" }.
                  Update requires: Replacement
                  NoteIf you update this property, you must also update the
                           CidrBlock property.
               
*/
class Subnet extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Subnet'
    let properties = {
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'No', null),
      CidrBlock: new ResourceAttribute('CidrBlock', String, 'Yes', null),
      MapPublicIpOnLaunch: new ResourceAttribute('MapPublicIpOnLaunch', Boolean, 'No', null),
      Tags: new tag.TagSet(),
      VpcId: new ResourceAttribute('VpcId', types.RefID, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} SubnetId Required: Yes. The ID representing the current association between the original network ACL and the subnet.Update requires: Replacement
* @property {String} NetworkAclId Required: Yes. The ID of the new ACL to associate with the subnet.Update requires: Replacement
*/
class SubnetNetworkAclAssociation extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetNetworkAclAssociation'
    let properties = {
      SubnetId: new ResourceAttribute('SubnetId', String, 'Yes', null),
      NetworkAclId: new ResourceAttribute('NetworkAclId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} RouteTableId Required: Yes. The ID of the route table. This is commonly written as a reference to a route table declared
                  elsewhere in the template. For example:Update requires: No interruption. However, the physical ID changes when the route table ID is changed.
* @property {String} SubnetId Required: Yes. The ID of the subnet. This is commonly written as a reference to a subnet declared elsewhere in the
                  template. For example:Update requires: Replacement
*/
class SubnetRouteTableAssociation extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::SubnetRouteTableAssociation'
    let properties = {
      RouteTableId: new ResourceAttribute('RouteTableId', String, 'Yes', null),
      SubnetId: new ResourceAttribute('SubnetId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {Boolean} AutoEnableIO Required: No. Indicates whether the volume is auto-enabled for I/O operations. By default,
                  Amazon EBS disables I/O to the volume from attached EC2 instances when it determines
                  that a volume's data is potentially inconsistent. If the consistency of the volume
                  is not a concern, and you prefer that the volume be made available immediately if
                  it's impaired, you can configure the volume to automatically enable I/O. For more
                  information, see Working with the AutoEnableIO Volume Attribute in the
                     Amazon EC2 User Guide for Linux Instances.Update requires: No interruption
* @property {String} AvailabilityZone Required: Yes. The Availability Zone in which to create the new volume.Update requires: Updates are not supported.
* @property {Boolean} Encrypted Required: Conditional. Indicates whether the volume is encrypted. Encrypted Amazon EBS volumes can only be
                  attached to instance types that support Amazon EBS encryption. Volumes that are created
                  from encrypted snapshots are automatically encrypted. You cannot create an
                  encrypted volume from an unencrypted snapshot or vice versa. If your AMI uses
                  encrypted volumes, you can only launch the AMI on supported instance types. For
                  more information, see Amazon EBS
                     encryption in the Amazon EC2 User Guide for Linux Instances.Update requires: Updates are not supported.
* @property {Number} Iops Required: Conditional. The number of I/O operations per second (IOPS) that the volume supports. For more information about the valid sizes for each volume type, see the Iops parameter for the CreateVolume action in the Amazon EC2 API Reference.Update requires: Updates are not supported.
* @property {String} KmsKeyId Required: No. The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to
                  create the encrypted volume, such as
                     arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.
                  If you create an encrypted volume and don't specify this property, the default
                  master key is used.Update requires: Updates are not supported.
* @property {String} Size Required: Conditional. The size of the volume, in gibibytes (GiBs). For more information about the valid sizes for each volume type, see the Size parameter for the CreateVolume action in the Amazon EC2 API Reference.If you specify the SnapshotId property, specify a size that is
                  equal to or greater than the snapshot size. If you don't specify a size, Amazon EC2
                  will use the size of the snapshot as the volume size.Update requires: Updates are not supported.
* @property {String} SnapshotId Required: No. The snapshot from which to create the new volume.Update requires: Updates are not supported.
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this volume.Update requires: No interruption
* @property {String} VolumeType Required: No. The volume type. You can specify standard, io1, or gp2. If you set the type to io1, you must also set the Iops property. For more information about these values and the default value, see the VolumeType parameter for the CreateVolume action in the Amazon EC2 API Reference.Update requires: Updates are not supported.
*/
class Volume extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::Volume'
    let properties = {
      AutoEnableIO: new ResourceAttribute('AutoEnableIO', Boolean, 'No', null),
      AvailabilityZone: new ResourceAttribute('AvailabilityZone', String, 'Yes', null),
      Encrypted: new ResourceAttribute('Encrypted', Boolean, 'Conditional', null),
      Iops: new ResourceAttribute('Iops', Number, 'Conditional', null),
      KmsKeyId: new ResourceAttribute('KmsKeyId', String, 'No', null),
      Size: new ResourceAttribute('Size', String, 'Conditional', null),
      SnapshotId: new ResourceAttribute('SnapshotId', String, 'No', null),
      Tags: new tag.TagSet(),
      VolumeType: new ResourceAttribute('VolumeType', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} Device Required: Yes. How the device is exposed to the instance (e.g., /dev/sdh, or xvdh).Update requires: Updates are not supported.
* @property {String} InstanceId Required: Yes. The ID of the instance to which the volume attaches. This value can be a reference to an
                  AWS::EC2::Instance resource, or it can be
                  the physical ID of an existing EC2 instance.Update requires: Updates are not supported.
* @property {String} VolumeId Required: Yes. The ID of the Amazon EBS volume. The volume and instance must be within the same
                  Availability Zone. This value can be a reference to an AWS::EC2::Volume resource, or it can be the
                  volume ID of an existing Amazon EBS volume.Update requires: Updates are not supported.
*/
class VolumeAttachment extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VolumeAttachment'
    let properties = {
      Device: new ResourceAttribute('Device', String, 'Yes', null),
      InstanceId: new ResourceAttribute('InstanceId', String, 'Yes', null),
      VolumeId: new ResourceAttribute('VolumeId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} CidrBlock Required: Yes. The CIDR block you want the VPC to cover. For example: "10.0.0.0/16".Update requires: Replacement
* @property {Boolean} EnableDnsSupport Required: No. Specifies whether DNS resolution is supported for the VPC. If this attribute is
                     true, the Amazon DNS server resolves DNS hostnames for your
                  instances to their corresponding IP addresses; otherwise, it does not. By default
                  the value is set to true.Update requires: No interruption
* @property {Boolean} EnableDnsHostnames Required: No. Specifies whether the instances launched in the VPC get DNS hostnames. If this
                  attribute is true, instances in the VPC get DNS hostnames; otherwise,
                  they do not. You can only set EnableDnsHostnames to true
                  if you also set the EnableDnsSupport attribute to true.
                  By default, the value is set to false.Update requires: No interruption
* @property {String} InstanceTenancy Required: No. The allowed tenancy of instances launched into the VPC. "default": Instances can be launched with any
                        tenancy."dedicated": Any instance launched into the VPC automatically has dedicated tenancy, unless you launch it with the default
                        tenancy.Valid values: "default" or
                     "dedicated"Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this VPC. To name a VPC resource, specify a value for the Name key.Update requires: No interruption.
*/
class VPC extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPC'
    let properties = {
      CidrBlock: new ResourceAttribute('CidrBlock', String, 'Yes', null),
      EnableDnsSupport: new ResourceAttribute('EnableDnsSupport', Boolean, 'No', null),
      EnableDnsHostnames: new ResourceAttribute('EnableDnsHostnames', Boolean, 'No', null),
      InstanceTenancy: new ResourceAttribute('InstanceTenancy', String, 'No', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} DhcpOptionsId Required: Yes. The ID of the DHCP options you want to associate with the VPC. Specify
                     default if you want the VPC to use no DHCP options.Update requires: No interruption
* @property {String} VpcId Required: Yes. The ID of the VPC to associate with this DHCP options set.Update requires: Replacement
*/
class VPCDHCPOptionsAssociation extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCDHCPOptionsAssociation'
    let properties = {
      DhcpOptionsId: new ResourceAttribute('DhcpOptionsId', String, 'Yes', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {Object} PolicyDocument Required: No. A policy to attach to the endpoint that controls access to the service. The
            policy must be valid JSON. The default policy allows full access to the AWS service. For
            more information, see Controlling Access to Services in the
            Amazon VPC User Guide.Update requires: No interruption
* @property {String} RouteTableIds Required: No. One or more route table IDs that are used by the VPC to reach the
                  endpoint.Update requires: No interruption
* @property {String} ServiceName Required: Yes. The AWS service to which you want to establish a connection. Specify the
                  service name in the form of
                        com.amazonaws.region.service.Update requires: Replacement
* @property {String} VpcId Required: Yes. The ID of the VPC in which the endpoint is used.Update requires: Replacement
*/
class VPCEndpoint extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCEndpoint'
    let properties = {
      PolicyDocument: new ResourceAttribute('PolicyDocument', Object, 'No', null),
      RouteTableIds: new ResourceAttributeArray('RouteTableIds', String, 'No', null),
      ServiceName: new ResourceAttribute('ServiceName', String, 'Yes', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} InternetGatewayId Required: Conditional. The ID of the Internet gateway.Update requires: No interruption
* @property {String} VpcId Required: Yes. The ID of the VPC to associate with this gateway.Update requires: No interruption
* @property {String} VpnGatewayId Required: Conditional. The ID of the virtual private network (VPN) gateway to attach to the VPC.Update requires: No interruption
*/
class VPCGatewayAttachment extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCGatewayAttachment'
    let properties = {
      InternetGatewayId: new ResourceAttribute('InternetGatewayId', String, 'Conditional', null),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null),
      VpnGatewayId: new ResourceAttribute('VpnGatewayId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} PeerVpcId Required: Yes. The ID of the VPC with which you are creating the peering connection.Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this
                        resource.Update requires: No interruption.
* @property {String} VpcId Required: Yes. The ID of the VPC that is requesting a peering connection.Update requires: Replacement
*/
class VPCPeeringConnection extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPCPeeringConnection'
    let properties = {
      PeerVpcId: new ResourceAttribute('PeerVpcId', String, 'Yes', null),
      Tags: new tag.TagSet(),
      VpcId: new ResourceAttribute('VpcId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} Type Required: Yes. The type of VPN connection this virtual private gateway supports.Example: "ipsec.1"Update requires: Replacement
* @property {String} CustomerGatewayId Required: Yes. The ID of the customer gateway. This can either be an embedded JSON object or a
                  reference to a Gateway ID.
* @property {Boolean} StaticRoutesOnly Required: Conditional. Indicates whether the VPN connection requires static routes.Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. The tags that you want to attach to the resource.Update requires: No interruption.
* @property {String} VpnGatewayId Required: Yes. The ID of the virtual private gateway. This can either be an embedded JSON
                  object or a reference to a Gateway ID.
*/
class VPNConnection extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNConnection'
    let properties = {
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      CustomerGatewayId: new ResourceAttribute('CustomerGatewayId', String, 'Yes', null),
      StaticRoutesOnly: new ResourceAttribute('StaticRoutesOnly', Boolean, 'Conditional', null),
      Tags: new tag.TagSet(),
      VpnGatewayId: new ResourceAttribute('VpnGatewayId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} DestinationCidrBlock Required: Conditional. The CIDR block that is associated with the local subnet of the customer
                  network.Update requires: Replacement
* @property {String} VpnConnectionId Required: Conditional. The ID of the VPN connection.Update requires: Replacement
*/
class VPNConnectionRoute extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNConnectionRoute'
    let properties = {
      DestinationCidrBlock: new ResourceAttribute('DestinationCidrBlock', String, 'Conditional', null),
      VpnConnectionId: new ResourceAttribute('VpnConnectionId', String, 'Conditional', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {String} Type Required: Yes. The type of VPN connection this virtual private gateway supports. The only valid value is
               "ipsec.1".Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) for this resource.Update requires: No interruption.
*/
class VPNGateway extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGateway'
    let properties = {
      Type: new ResourceAttribute('Type', String, 'Yes', null),
      Tags: new tag.TagSet()
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EC2
*   @extends WKResource
* @property {routetableIDs} RouteTableIds Required: Yes. A list of routing table IDs that are associated with a VPC. The routing
                  tables must be associated with the same VPC that the virtual private gateway is
                  attached to.Update requires: No interruption
* @property {String} VpnGatewayId Required: Yes. The ID of the virtual private gateway that is attached to a VPC. The virtual
                  private gateway must be attached to the same VPC that the routing tables are
                  associated with.Update requires: No interruption
*/
class VPNGatewayRoutePropagation extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EC2::VPNGatewayRoutePropagation'
    let properties = {
      RouteTableIds: new ResourceAttributeArray('RouteTableIds', types.routetableIDs, 'Yes', null),
      VpnGatewayId: new ResourceAttribute('VpnGatewayId', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  CustomerGateway: CustomerGateway,
  DHCPOptions: DHCPOptions,
  EIP: EIP,
  EIPAssociation: EIPAssociation,
  FlowLog: FlowLog,
  Host: Host,
  Instance: Instance,
  InternetGateway: InternetGateway,
  NatGateway: NatGateway,
  NetworkAcl: NetworkAcl,
  NetworkAclEntry: NetworkAclEntry,
  NetworkInterface: NetworkInterface,
  NetworkInterfaceAttachment: NetworkInterfaceAttachment,
  PlacementGroup: PlacementGroup,
  Route: Route,
  RouteTable: RouteTable,
  SecurityGroup: SecurityGroup,
  SecurityGroupEgress: SecurityGroupEgress,
  SecurityGroupIngress: SecurityGroupIngress,
  SpotFleet: SpotFleet,
  Subnet: Subnet,
  SubnetNetworkAclAssociation: SubnetNetworkAclAssociation,
  SubnetRouteTableAssociation: SubnetRouteTableAssociation,
  Volume: Volume,
  VolumeAttachment: VolumeAttachment,
  VPC: VPC,
  VPCDHCPOptionsAssociation: VPCDHCPOptionsAssociation,
  VPCEndpoint: VPCEndpoint,
  VPCGatewayAttachment: VPCGatewayAttachment,
  VPCPeeringConnection: VPCPeeringConnection,
  VPNConnection: VPNConnection,
  VPNConnectionRoute: VPNConnectionRoute,
  VPNGateway: VPNGateway,
  VPNGatewayRoutePropagation: VPNGatewayRoutePropagation
}
