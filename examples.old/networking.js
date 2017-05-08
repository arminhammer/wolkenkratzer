'use strict';

// replace with const wk = require('wolkenkratzer')
const wk = require('../dist/index');

let t = new wk.Template();
let vpcCiderParam = new wk.Parameter('VPCCIDR', {
  Type: 'String',
  Default: '10.0.0.0/16'
});
t.add(vpcCiderParam);
let publicSubnetPubACIDRParam = new wk.Parameter('PublicSubnetPubACIDR', {
  Type: 'String',
  Default: '10.0.0.0/24'
});
t.add(publicSubnetPubACIDRParam);
let publicSubnetPubBCIDRParam = new wk.Parameter('PublicSubnetPubBCIDR', {
  Type: 'String',
  Default: '10.0.1.0/24'
});
t.add(publicSubnetPubBCIDRParam);
let privateSubnetPrivCCIDRParam = new wk.Parameter('PrivateSubnetPrivCCIDR', {
  Type: 'String',
  Default: '10.0.2.0/24'
});
t.add(privateSubnetPrivCCIDRParam);
let privateSubnetPrivDCIDRParam = new wk.Parameter('PrivateSubnetPrivDCIDR', {
  Type: 'String',
  Default: '10.0.3.0/24'
});
t.add(privateSubnetPrivDCIDRParam);
let vPCTagParam = new wk.Parameter('VPCTag', {
  Type: 'String',
  Default: 'BaseVPC'
});
t.add(vPCTagParam);

let vpc = new wk.EC2.VPC('VPC');
vpc.CidrBlock.ref(vpcCiderParam);
vpc.InstanceTenancy = 'default';
vpc.EnableDnsSupport = true;
vpc.EnableDnsHostnames = true;
vpc.Tags.add({ Key: 'Name', Value: 'BaseVPC' });
vpc.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) });
t.add(vpc);

let igw = new wk.EC2.InternetGateway('InternetGateway');
igw.Tags.add({ Key: 'Name', Value: 'InternetGateway' });
igw.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) });
t.add(igw);

let vpcgatewayatt = new wk.EC2.VPCGatewayAttachment('AttachInternetGateway');
vpcgatewayatt.VpcId.ref(vpc);
vpcgatewayatt.InternetGatewayId.ref(igw);

t.add(vpcgatewayatt);

let publicSubnetPubA = new wk.EC2.Subnet('PublicSubnetPubA');
publicSubnetPubA.CidrBlock.ref(publicSubnetPubACIDRParam);
publicSubnetPubA.VpcId.ref(vpc);
publicSubnetPubA.MapPublicIpOnLaunch = true;
publicSubnetPubA.Tags.add({ Key: 'Name', Value: 'PublicSubnetPubA' });
publicSubnetPubA.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) });
t.add(publicSubnetPubA);

let publicSubnetPubB = new wk.EC2.Subnet('PublicSubnetPubB');
publicSubnetPubB.CidrBlock.ref(publicSubnetPubBCIDRParam);
publicSubnetPubB.VpcId.ref(vpc);
publicSubnetPubB.MapPublicIpOnLaunch = true;
publicSubnetPubB.Tags.add({ Key: 'Name', Value: 'PublicSubnetPubB' });
publicSubnetPubB.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) });
t.add(publicSubnetPubB);

let eipPubA = new wk.EC2.EIP('EIPPubA');
eipPubA.Domain = 'vpc';
t.add(eipPubA);

let natPubA = new wk.EC2.NatGateway('NATPubA');
natPubA.SubnetId.ref(publicSubnetPubA);
natPubA.AllocationId.getAtt(eipPubA, 'AllocationId');
natPubA.dependsOn(igw);
t.add(natPubA);

let eipPubB = new wk.EC2.EIP('EIPPubB');
eipPubB.Domain = 'vpc';
t.add(eipPubB);

let natPubB = new wk.EC2.NatGateway('NATPubB');
natPubB.SubnetId.ref(publicSubnetPubB);
natPubB.AllocationId.getAtt(eipPubB, 'AllocationId');
natPubB.dependsOn(igw);
t.add(natPubB);

let privateSubnetPrivC = new wk.EC2.Subnet('PrivateSubnetPrivC');
privateSubnetPrivC.CidrBlock.ref(privateSubnetPrivCCIDRParam);
privateSubnetPrivC.VpcId.ref(vpc);
privateSubnetPrivC.MapPublicIpOnLaunch = false;
privateSubnetPrivC.Tags.add({ Key: 'Name', Value: 'PrivateSubnetPrivC' });
privateSubnetPrivC.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) });
t.add(privateSubnetPrivC);

let privateSubnetPrivD = new wk.EC2.Subnet('PrivateSubnetPrivD');
privateSubnetPrivD.CidrBlock.ref(privateSubnetPrivDCIDRParam);
privateSubnetPrivD.VpcId.ref(vpc);
privateSubnetPrivD.MapPublicIpOnLaunch = false;
privateSubnetPrivD.Tags.add({ Key: 'Name', Value: 'PrivateSubnetPrivD' });
privateSubnetPrivD.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) });
t.add(privateSubnetPrivD);

let publicRouteTable = new wk.EC2.RouteTable('PublicRouteTable');
publicRouteTable.VpcId.ref(vpc);
publicRouteTable.Tags.add({ Key: 'Name', Value: 'PublicRouteTable' });
publicRouteTable.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) });
t.add(publicRouteTable);

let routeTablePrivC = new wk.EC2.RouteTable('RouteTablePrivC');
routeTablePrivC.VpcId.ref(vpc);
routeTablePrivC.Tags.add({ Key: 'Name', Value: 'RouteTablePrivC' });
routeTablePrivC.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) });
t.add(routeTablePrivC);

let routeTablePrivD = new wk.EC2.RouteTable('RouteTablePrivD');
routeTablePrivD.VpcId.ref(vpc);
routeTablePrivD.Tags.add({ Key: 'Name', Value: 'RouteTablePrivD' });
routeTablePrivD.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) });
t.add(routeTablePrivD);

let publicIGWRoute = new wk.EC2.Route('PublicIGWRoute');
publicIGWRoute.RouteTableId.ref(publicRouteTable);
publicIGWRoute.DestinationCidrBlock = '0.0.0.0/0';
publicIGWRoute.GatewayId.ref(igw);
t.add(publicIGWRoute);

let nATRoutePrivC = new wk.EC2.Route('NATRoutePrivC');
nATRoutePrivC.RouteTableId.ref(routeTablePrivC);
nATRoutePrivC.DestinationCidrBlock = '0.0.0.0/0';
nATRoutePrivC.NatGatewayId.ref(natPubA);
t.add(nATRoutePrivC);

let nATRoutePrivD = new wk.EC2.Route('NATRoutePrivD');
nATRoutePrivD.RouteTableId.ref(routeTablePrivD);
nATRoutePrivD.DestinationCidrBlock = '0.0.0.0/0';
nATRoutePrivD.NatGatewayId.ref(natPubB);
t.add(nATRoutePrivD);

let publicSubnetRouteTableAssociationA = new wk.EC2.SubnetRouteTableAssociation(
  'PublicSubnetRouteTableAssociationA'
);
publicSubnetRouteTableAssociationA.SubnetId.ref(publicSubnetPubA);
publicSubnetRouteTableAssociationA.RouteTableId.ref(publicRouteTable);
t.add(publicSubnetRouteTableAssociationA);

let publicSubnetRouteTableAssociationB = new wk.EC2.SubnetRouteTableAssociation(
  'PublicSubnetRouteTableAssociationB'
);
publicSubnetRouteTableAssociationB.SubnetId.ref(publicSubnetPubB);
publicSubnetRouteTableAssociationB.RouteTableId.ref(publicRouteTable);
t.add(publicSubnetRouteTableAssociationB);

let privateSubnetRouteTableAssociationPrivC = new wk.EC2.SubnetRouteTableAssociation(
  'PrivateSubnetRouteTableAssociationPrivC'
);
privateSubnetRouteTableAssociationPrivC.SubnetId.ref(privateSubnetPrivC);
privateSubnetRouteTableAssociationPrivC.RouteTableId.ref(routeTablePrivC);
t.add(privateSubnetRouteTableAssociationPrivC);

let privateSubnetRouteTableAssociationPrivD = new wk.EC2.SubnetRouteTableAssociation(
  'PrivateSubnetRouteTableAssociationPrivD'
);
privateSubnetRouteTableAssociationPrivD.SubnetId.ref(privateSubnetPrivD);
privateSubnetRouteTableAssociationPrivD.RouteTableId.ref(routeTablePrivD);
t.add(privateSubnetRouteTableAssociationPrivD);

console.log(t.toJson().Template);
