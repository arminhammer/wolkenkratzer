import { Service } from '../service';
import { IResource, IService, TransformFunctionType } from '../types';
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
    const resource: object = {};
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
    const resource: object = {};
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
    const resource: object = {};
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
    const resource: object = {};
    return resolve(service.EIP(logical, resource));
  });
};

/**
 * @hidden
 */
const EIPAssociation: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.EIPAssociation(logical, resource));
  });
};

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
    const resource: object = {};
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
    const resource: object = {};
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
    const resource: object = {};
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
    const resource: object = {};
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
    const resource: object = {};
    return resolve(service.NatGateway(logical, resource));
  });
};

/**
 * @hidden
 */
const NetworkAcl: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.NetworkAcl(logical, resource));
  });
};

/**
 * @hidden
 */
const NetworkAclEntry: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.NetworkAclEntry(logical, resource));
  });
};

/**
 * @hidden
 */
const NetworkInterface: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.NetworkInterface(logical, resource));
  });
};

/**
 * @hidden
 */
const NetworkInterfaceAttachment: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.NetworkInterfaceAttachment(logical, resource));
  });
};

/**
 * @hidden
 */
const NetworkInterfacePermission: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.NetworkInterfacePermission(logical, resource));
  });
};

/**
 * @hidden
 */
const PlacementGroup: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.PlacementGroup(logical, resource));
  });
};

/**
 * @hidden
 */
const Route: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.Route(logical, resource));
  });
};

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
    const resource: object = {};
    return resolve(service.RouteTable(logical, resource));
  });
};

/**
 * @hidden
 */
const SecurityGroup: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SecurityGroup(logical, resource));
  });
};

/**
 * @hidden
 */
const SecurityGroupEgress: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SecurityGroupEgress(logical, resource));
  });
};

/**
 * @hidden
 */
const SecurityGroupIngress: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SecurityGroupIngress(logical, resource));
  });
};

/**
 * @hidden
 */
const SpotFleet: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SpotFleet(logical, resource));
  });
};

/**
 * @hidden
 */
const Subnet: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.Subnet(logical, resource));
  });
};

/**
 * @hidden
 */
const SubnetCidrBlock: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SubnetCidrBlock(logical, resource));
  });
};

/**
 * @hidden
 */
const SubnetNetworkAclAssociation: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SubnetNetworkAclAssociation(logical, resource));
  });
};

/**
 * @hidden
 */
const SubnetRouteTableAssociation: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.SubnetRouteTableAssociation(logical, resource));
  });
};

/**
 * @hidden
 */
const Volume: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.Volume(logical, resource));
  });
};

/**
 * @hidden
 */
const VolumeAttachment: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VolumeAttachment(logical, resource));
  });
};

/**
 * @hidden
 */
const VPC: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPC(logical, resource));
  });
};

/**
 * @hidden
 */
const VPCCidrBlock: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPCCidrBlock(logical, resource));
  });
};

/**
 * @hidden
 */
const VPCDHCPOptionsAssociation: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPCDHCPOptionsAssociation(logical, resource));
  });
};

/**
 * @hidden
 */
const VPCEndpoint: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPCEndpoint(logical, resource));
  });
};

/**
 * @hidden
 */
const VPCGatewayAttachment: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPCGatewayAttachment(logical, resource));
  });
};

/**
 * @hidden
 */
const VPCPeeringConnection: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPCPeeringConnection(logical, resource));
  });
};

/**
 * @hidden
 */
const VPNConnection: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPNConnection(logical, resource));
  });
};

/**
 * @hidden
 */
const VPNConnectionRoute: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPNConnectionRoute(logical, resource));
  });
};

/**
 * @hidden
 */
const VPNGateway: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPNGateway(logical, resource));
  });
};

/**
 * @hidden
 */
const VPNGatewayRoutePropagation: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.EC2();
    const resource: object = {};
    return resolve(service.VPNGatewayRoutePropagation(logical, resource));
  });
};

/**
 * @hidden
 */
export const EC2 = {
  CustomerGateway,
  DHCPOptions,
  EIP,
  EIPAssociation,
  EgressOnlyInternetGateway,
  FlowLog,
  Host,
  Instance,
  InternetGateway,
  NatGateway,
  NetworkAcl,
  NetworkAclEntry,
  NetworkInterface,
  NetworkInterfaceAttachment,
  NetworkInterfacePermission,
  PlacementGroup,
  Route,
  RouteTable,
  SecurityGroup,
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
  VolumeAttachment
};
