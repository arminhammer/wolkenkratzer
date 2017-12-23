import { Service } from '../service';
import { IResource, TransformFunctionType } from '../types';
import { EC2 as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 */
const CustomerGateway: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: { BgpAsn?; IpAddress?; Tags?; Type? } = {};
    const result = await client
      .describeCustomerGateways({
        CustomerGatewayIds: [name],
      })
      .promise();
    resource.BgpAsn = parseInt(result.CustomerGateways[0].BgpAsn, 10);
    resource.IpAddress = result.CustomerGateways[0].IpAddress;
    resource.Tags = result.CustomerGateways[0].Tags
      ? result.CustomerGateways[0].Tags
      : [];
    resource.Type = result.CustomerGateways[0].Type;
    return resolve(service.CustomerGateway(logical, resource));
  });
};

/**
 * @hidden
 */
const DHCPOptions: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: {
      DomainName?;
      DomainNameServers?;
      NetbiosNameServers?;
      NetbiosNodeType?;
      NtpServers?;
      Tags?;
    } = {};
    const result = await client
      .describeDhcpOptions({
        DhcpOptionsIds: [name],
      })
      .promise();
    result.DhcpOptions[0].DhcpConfigurations.forEach(d => {
      switch (d.Key) {
        case 'domain-name-servers':
          resource.DomainNameServers = d.Values.map(x => x.Value);
          break;
        case 'domain-name':
          resource.DomainName = d.Values[0].Value;
          break;
        case 'ntp-servers':
          resource.NetbiosNameServers = d.Values.map(x => x.Value);
          break;
        case 'netbios-name-servers':
          resource.NtpServers = d.Values.map(x => x.Value);
          break;
        case 'netbios-node-type':
          resource.NetbiosNodeType = d.Values[0].Value;
          break;
      }
    });
    resource.Tags = result.DhcpOptions[0].Tags
      ? result.DhcpOptions[0].Tags
      : [];
    return resolve(service.DHCPOptions(logical, resource));
  });
};

/**
 * @hidden
 */
const EgressOnlyInternetGateway: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: { VpcId? } = {};
    const { EgressOnlyInternetGateways } = await client
      .describeEgressOnlyInternetGateways({
        EgressOnlyInternetGatewayIds: [name],
      })
      .promise();
    resource.VpcId = EgressOnlyInternetGateways[0].Attachments[0].VpcId;
    return resolve(service.EgressOnlyInternetGateway(logical, resource));
  });
};

/**
 * @hidden
 */
const EIP: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: { Domain?; InstanceId? } = {};
    const result = await client
      .describeAddresses({
        Filters: [
          {
            Name: 'domain',
            Values: ['vpc'],
          },
        ],
        PublicIps: [name],
      })
      .promise();
    resource.Domain = result.Addresses[0].Domain;
    resource.InstanceId = result.Addresses[0].InstanceId;
    return resolve(service.EIP(logical, resource));
  });
};

/**
 * @hidden
 */
/*
const EIPAssociation: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.EIPAssociation(logical, resource));
  });
};*/

/**
 * @hidden
 */
const FlowLog: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: {
      DeliverLogsPermissionArn?;
      LogGroupName?;
      ResourceId?;
      ResourceType?;
      TrafficType?;
    } = {};
    const result = await client
      .describeFlowLogs({ FlowLogIds: [name] })
      .promise();
    resource.DeliverLogsPermissionArn =
      result.FlowLogs[0].DeliverLogsPermissionArn;
    resource.LogGroupName = result.FlowLogs[0].LogGroupName;
    resource.ResourceId = result.FlowLogs[0].ResourceId;
    resource.ResourceType = result.FlowLogs[0].ResourceType;
    resource.TrafficType = result.FlowLogs[0].TrafficType;
    return resolve(service.FlowLog(logical, resource));
  });
};

/**
 * @hidden
 */
const Host: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: { AvailabilityZone?; AutoPlacement?; InstanceType? } = {};
    const result = await client.describeHosts({ HostIds: [name] }).promise();
    resource.AvailabilityZone = result.Hosts[0].AvailabilityZone;
    resource.AutoPlacement = result.Hosts[0].AutoPlacement;
    resource.InstanceType = result.Hosts[0].InstanceType;
    return resolve(service.Host(logical, resource));
  });
};

/**
 * @hidden
 */
const Instance: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: {
      AvailabilityZone?;
      Affinity?;
      EbsOptimized?;
      HostId?;
      KernelId?;
      KeyName?;
      IamInstanceProfile?;
      ImageId?;
      InstanceType?;
      Ipv6AddressCount?;
      Ipv6Addresses?;
      SubnetId?;
      Tags?;
      Tenancy?;
      Monitoring?;
      NetworkInterfaces?;
      PlacementGroupName?;
      PrivateIpAddress?;
      RamdiskId?;
      SecurityGroupIds?;
      SecurityGroups?;
      SourceDestCheck?;
    } = {};
    const describeInstancesPromise = client
      .describeInstances({ InstanceIds: [name] })
      .promise();
    const [instancesResults]: any = await Promise.all([
      describeInstancesPromise,
    ]);
    resource.Affinity =
      instancesResults.Reservations[0].Instances[0].Placement.Affinity;
    resource.AvailabilityZone =
      instancesResults.Reservations[0].Instances[0].Placement.AvailabilityZone;
    resource.EbsOptimized =
      instancesResults.Reservations[0].Instances[0].EbsOptimized;
    resource.HostId =
      instancesResults.Reservations[0].Instances[0].Placement.HostId;
    resource.KernelId = instancesResults.Reservations[0].Instances[0].KernelId;
    resource.KeyName = instancesResults.Reservations[0].Instances[0].KeyName;
    resource.IamInstanceProfile =
      instancesResults.Reservations[0].Instances[0].IamInstanceProfile.Arn;
    resource.ImageId = instancesResults.Reservations[0].Instances[0].ImageId;
    resource.InstanceType =
      instancesResults.Reservations[0].Instances[0].InstanceType;
    resource.SubnetId = instancesResults.Reservations[0].Instances[0].SubnetId;
    resource.Tags = instancesResults.Reservations[0].Instances[0].Tags
      ? instancesResults.Reservations[0].Instances[0].Tags
      : [];
    resource.Tenancy =
      instancesResults.Reservations[0].Instances[0].Placement.Tenancy;
    resource.Monitoring =
      instancesResults.Reservations[0].Instances[0].Monitoring.State ===
      'enabled';
    /*resource.NetworkInterfaces =
      instancesResults.Reservations[0].Instances[0].NetworkInterfaces;*/
    resource.PlacementGroupName =
      instancesResults.Reservations[0].Instances[0].Placement.GroupName;
    resource.PrivateIpAddress =
      instancesResults.Reservations[0].Instances[0].PrivateIpAddress;
    resource.RamdiskId =
      instancesResults.Reservations[0].Instances[0].RamdiskId;
    /*resource.SecurityGroupIds =
      instancesResults.Reservations[0].Instances[0].SecurityGroupIds;
    resource.SecurityGroups =
      instancesResults.Reservations[0].Instances[0].SecurityGroups;
    */
    resource.SourceDestCheck =
      instancesResults.Reservations[0].Instances[0].SourceDestCheck;
    resource.Ipv6AddressCount = instancesResults.Reservations[0].Instances[0].NetworkInterfaces.reduce(
      (acc, current) => acc + current.Ipv6Addresses.length,
      0
    );
    resource.Ipv6Addresses = instancesResults.Reservations[0].Instances[0].NetworkInterfaces.reduce(
      (acc, current) => {
        current.Ipv6Addresses.forEach(i => acc.push(i.Ipv6Address));
        return acc;
      },
      []
    );
    resource.SecurityGroupIds = instancesResults.Reservations[0].Instances[0].NetworkInterfaces.reduce(
      (acc, current) => {
        current.Groups.forEach(i => acc.push(i.GroupId));
        return acc;
      },
      []
    );
    resource.NetworkInterfaces = instancesResults.Reservations[0].Instances[0].NetworkInterfaces.map(
      i => {
        return {
          AssociatePublicIpAddress: i.Association.PublicIp,
          DeleteOnTermination: i.Attachment.DeleteOnTermination,
          Description: i.Description,
          DeviceIndex: i.Attachment.DeviceIndex,
          GroupSet: i.Groups.map(x => x.GroupId),
          Ipv6AddressCount: i.Ipv6Addresses.length,
          Ipv6Addresses: i.Ipv6Addresses.map(x => x.Ipv6Address),
          NetworkInterfaceId: i.NetworkInterfaceId,
          PrivateIpAddress: i.PrivateIpAddress,
          PrivateIpAddresses: i.PrivateIpAddresses.map(x => {
            return { Primary: x.Primary, PrivateIpAddress: x.PrivateIpAddress };
          }),
          // SecondaryPrivateIpAddressCount: 0,
          SubnetId: i.SubnetId,
        };
      }
    );
    return resolve(service.Instance(logical, resource));
  });
};

/**
 * @hidden
 */
const InternetGateway: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: { Tags? } = {};
    const result = await client
      .describeInternetGateways({
        InternetGatewayIds: [name],
      })
      .promise();
    resource.Tags = result.InternetGateways[0].Tags;
    return resolve(service.InternetGateway(logical, resource));
  });
};

/**
 * @hidden
 */
const NatGateway: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: { AllocationId?; SubnetId?; Tags? } = {};
    const result = await client
      .describeNatGateways({
        NatGatewayIds: [name],
      })
      .promise();
    resource.AllocationId =
      result.NatGateways[0].NatGatewayAddresses[0].AllocationId;
    resource.SubnetId = result.NatGateways[0].SubnetId;
    resource.Tags = result.NatGateways[0].Tags
      ? result.NatGateways[0].Tags
      : [];
    return resolve(service.NatGateway(logical, resource));
  });
};

/**
 * @hidden
 */
/*
const NetworkAcl: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.NetworkAcl(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const NetworkAclEntry: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.NetworkAclEntry(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const NetworkInterface: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.NetworkInterface(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const NetworkInterfaceAttachment: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.NetworkInterfaceAttachment(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const NetworkInterfacePermission: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.NetworkInterfacePermission(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const PlacementGroup: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.PlacementGroup(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const Route: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.Route(logical, resource));
  });
};*/

/**
 * @hidden
 */
const RouteTable: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: { VpcId?; Tags? } = {};
    const result = await client
      .describeRouteTables({ RouteTableIds: [name] })
      .promise();
    resource.VpcId = result.RouteTables[0].VpcId;
    resource.Tags = result.RouteTables[0].Tags;
    return resolve(service.RouteTable(logical, resource));
  });
};

/**
 * @hidden
 */
/*
const SecurityGroup: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SecurityGroup(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const SecurityGroupEgress: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SecurityGroupEgress(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const SecurityGroupIngress: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SecurityGroupIngress(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const SpotFleet: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SpotFleet(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const Subnet: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.Subnet(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const SubnetCidrBlock: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SubnetCidrBlock(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const SubnetNetworkAclAssociation: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SubnetNetworkAclAssociation(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const SubnetRouteTableAssociation: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SubnetRouteTableAssociation(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const Volume: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.Volume(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VolumeAttachment: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VolumeAttachment(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VPC: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPC(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VPCCidrBlock: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPCCidrBlock(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VPCDHCPOptionsAssociation: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPCDHCPOptionsAssociation(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VPCEndpoint: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPCEndpoint(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VPCGatewayAttachment: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPCGatewayAttachment(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VPCPeeringConnection: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPCPeeringConnection(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VPNConnection: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPNConnection(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VPNConnectionRoute: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPNConnectionRoute(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VPNGateway: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPNGateway(logical, resource));
  });
};*/

/**
 * @hidden
 */
/*
const VPNGatewayRoutePropagation: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    // const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPNGatewayRoutePropagation(logical, resource));
  });
};*/

/**
 * @hidden
 */
export const EC2 = {
  CustomerGateway,
  DHCPOptions,
  EIP,
  // EIPAssociation,
  EgressOnlyInternetGateway,
  FlowLog,
  Host,
  Instance,
  InternetGateway,
  NatGateway,
  /* NetworkAcl,
  NetworkAclEntry,
  NetworkInterface,
  NetworkInterfaceAttachment,
  NetworkInterfacePermission,
  PlacementGroup,
  Route, */
  RouteTable,
  /*SecurityGroup,
  SecurityGroupEgress,
  SecurityGroupIngress,
  SpotFleet,
  Subnet,
  SubnetCidrBlock,
  SubnetNetworkAclAssociation,
  SubnetRouteTableAssociation,
  VPC,
  VPCCidrBlock,
  VPCDHCPOptionsAssociation,
  VPCEndpoint,
  VPCGatewayAttachment,
  VPCPeeringConnection,
  VPNConnection,
  VPNConnectionRoute,
  VPNGateway,
  VPNGatewayRoutePropagation,
  Volume,
  VolumeAttachment,*/
};
