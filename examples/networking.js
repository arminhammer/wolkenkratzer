/**
 * Created by arming on 6/21/16.
 */
'use strict'

const wolkenkratzer = require('../index')

let t = new wolkenkratzer.Template()
let vpcCiderParam = new wolkenkratzer.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.addParameter(vpcCiderParam)
let publicSubnetPubACIDRParam = new wolkenkratzer.Parameter('PublicSubnetPubACIDR', { Type: 'String', Default: '10.0.0.0/24' })
t.addParameter(publicSubnetPubACIDRParam)
let publicSubnetPubBCIDRParam = new wolkenkratzer.Parameter('PublicSubnetPubBCIDR', { Type: 'String', Default: '10.0.1.0/24' })
t.addParameter(publicSubnetPubBCIDRParam)
let privateSubnetPrivCCIDRParam = new wolkenkratzer.Parameter('PrivateSubnetPrivCCIDR', { Type: 'String', Default: '10.0.2.0/24' })
t.addParameter(privateSubnetPrivCCIDRParam)
let privateSubnetPrivDCIDRParam = new wolkenkratzer.Parameter('PrivateSubnetPrivDCIDR', { Type: 'String', Default: '10.0.3.0/24' })
t.addParameter(privateSubnetPrivDCIDRParam)
let vPCTagParam = new wolkenkratzer.Parameter('VPCTag', { Type: 'String', Default: 'BaseVPC' })
t.addParameter(vPCTagParam)

let vpc = new wolkenkratzer.EC2.VPC('VPC')
vpc.CidrBlock.ref(vpcCiderParam)
vpc.InstanceTenancy = 'default'
vpc.EnableDnsSupport = true
vpc.EnableDnsHostnames = true
vpc.Tags.add({ Key: 'Name', Value: 'BaseVPC' })
vpc.Tags.add({ Key: 'Group', Value: new wolkenkratzer.Ref(vPCTagParam) })
t.addResource(vpc)

let igw = new wolkenkratzer.EC2.InternetGateway('InternetGateway')
igw.Tags.add({ Key: 'Name', Value: 'InternetGateway' })
igw.Tags.add({ Key: 'Group', Value: new wolkenkratzer.Ref(vPCTagParam) })
t.addResource(igw)

let vpcgatewayatt = new wolkenkratzer.EC2.VPCGatewayAttachment('AttachInternetGateway')
vpcgatewayatt.VpcId.ref(vpc)
vpcgatewayatt.InternetGatewayId.ref(igw)

t.addResource(vpcgatewayatt)

let publicSubnetPubA = new wolkenkratzer.EC2.Subnet('PublicSubnetPubA')
publicSubnetPubA.CidrBlock.ref(publicSubnetPubACIDRParam)
publicSubnetPubA.VpcId.ref(vpc)
publicSubnetPubA.MapPublicIpOnLaunch = true
publicSubnetPubA.Tags.add({ Key: 'Name', Value: 'PublicSubnetPubA' })
publicSubnetPubA.Tags.add({ Key: 'Group', Value: new wolkenkratzer.Ref(vPCTagParam) })
t.addResource(publicSubnetPubA)

let publicSubnetPubB = new wolkenkratzer.EC2.Subnet('PublicSubnetPubB')
publicSubnetPubB.CidrBlock.ref(publicSubnetPubBCIDRParam)
publicSubnetPubB.VpcId.ref(vpc)
publicSubnetPubB.MapPublicIpOnLaunch = true
publicSubnetPubB.Tags.add({ Key: 'Name', Value: 'PublicSubnetPubB' })
publicSubnetPubB.Tags.add({ Key: 'Group', Value: new wolkenkratzer.Ref(vPCTagParam) })
t.addResource(publicSubnetPubB)

let eipPubA = new wolkenkratzer.EC2.EIP('EIPPubA')
eipPubA.Domain = 'vpc'
t.addResource(eipPubA)

let natPubA = new wolkenkratzer.EC2.NatGateway('NATPubA')
natPubA.SubnetId.ref(publicSubnetPubA)
natPubA.AllocationId.getAtt(eipPubA, 'AllocationId')
natPubA.dependsOn(igw)
t.addResource(natPubA)

let eipPubB = new wolkenkratzer.EC2.EIP('EIPPubB')
eipPubB.Domain = 'vpc'
t.addResource(eipPubB)

let natPubB = new wolkenkratzer.EC2.NatGateway('NATPubB')
natPubB.SubnetId.ref(publicSubnetPubB)
natPubB.AllocationId.getAtt(eipPubB, 'AllocationId')
natPubB.dependsOn(igw)
t.addResource(natPubB)

let privateSubnetPrivC = new wolkenkratzer.EC2.Subnet('PrivateSubnetPrivC')
privateSubnetPrivC.CidrBlock.ref(privateSubnetPrivCCIDRParam)
privateSubnetPrivC.VpcId.ref(vpc)
privateSubnetPrivC.MapPublicIpOnLaunch = false
privateSubnetPrivC.Tags.add({ Key: 'Name', Value: 'PrivateSubnetPrivC' })
privateSubnetPrivC.Tags.add({ Key: 'Group', Value: new wolkenkratzer.Ref(vPCTagParam) })
t.addResource(privateSubnetPrivC)

let privateSubnetPrivD = new wolkenkratzer.EC2.Subnet('PrivateSubnetPrivD')
privateSubnetPrivD.CidrBlock.ref(privateSubnetPrivDCIDRParam)
privateSubnetPrivD.VpcId.ref(vpc)
privateSubnetPrivD.MapPublicIpOnLaunch = false
privateSubnetPrivD.Tags.add({ Key: 'Name', Value: 'PrivateSubnetPrivD' })
privateSubnetPrivD.Tags.add({ Key: 'Group', Value: new wolkenkratzer.Ref(vPCTagParam) })
t.addResource(privateSubnetPrivD)

let publicRouteTable = new wolkenkratzer.EC2.RouteTable('PublicRouteTable')
publicRouteTable.VpcId.ref(vpc)
publicRouteTable.Tags.add({ Key: 'Name', Value: 'PublicRouteTable' })
publicRouteTable.Tags.add({ Key: 'Group', Value: new wolkenkratzer.Ref(vPCTagParam) })
t.addResource(publicRouteTable)

let routeTablePrivC = new wolkenkratzer.EC2.RouteTable('RouteTablePrivC')
routeTablePrivC.VpcId.ref(vpc)
routeTablePrivC.Tags.add({ Key: 'Name', Value: 'RouteTablePrivC' })
routeTablePrivC.Tags.add({ Key: 'Group', Value: new wolkenkratzer.Ref(vPCTagParam) })
t.addResource(routeTablePrivC)

let routeTablePrivD = new wolkenkratzer.EC2.RouteTable('RouteTablePrivD')
routeTablePrivD.VpcId.ref(vpc)
routeTablePrivD.Tags.add({ Key: 'Name', Value: 'RouteTablePrivD' })
routeTablePrivD.Tags.add({ Key: 'Group', Value: new wolkenkratzer.Ref(vPCTagParam) })
t.addResource(routeTablePrivD)

let publicIGWRoute = new wolkenkratzer.EC2.Route('PublicIGWRoute')
publicIGWRoute.RouteTableId.ref(publicRouteTable)
publicIGWRoute.DestinationCidrBlock = '0.0.0.0/0'
publicIGWRoute.GatewayId.ref(igw)
t.addResource(publicIGWRoute)

let nATRoutePrivC = new wolkenkratzer.EC2.Route('NATRoutePrivC')
nATRoutePrivC.RouteTableId.ref(routeTablePrivC)
nATRoutePrivC.DestinationCidrBlock = '0.0.0.0/0'
nATRoutePrivC.NatGatewayId.ref(natPubA)
t.addResource(nATRoutePrivC)

let nATRoutePrivD = new wolkenkratzer.EC2.Route('NATRoutePrivD')
nATRoutePrivD.RouteTableId.ref(routeTablePrivD)
nATRoutePrivD.DestinationCidrBlock = '0.0.0.0/0'
nATRoutePrivD.NatGatewayId.ref(natPubB)
t.addResource(nATRoutePrivD)

let publicSubnetRouteTableAssociationA = new wolkenkratzer.EC2.SubnetRouteTableAssociation('PublicSubnetRouteTableAssociationA')
publicSubnetRouteTableAssociationA.SubnetId.ref(publicSubnetPubA)
publicSubnetRouteTableAssociationA.RouteTableId.ref(publicRouteTable)
t.addResource(publicSubnetRouteTableAssociationA)

let publicSubnetRouteTableAssociationB = new wolkenkratzer.EC2.SubnetRouteTableAssociation('PublicSubnetRouteTableAssociationB')
publicSubnetRouteTableAssociationB.SubnetId.ref(publicSubnetPubB)
publicSubnetRouteTableAssociationB.RouteTableId.ref(publicRouteTable)
t.addResource(publicSubnetRouteTableAssociationB)

let privateSubnetRouteTableAssociationPrivC = new wolkenkratzer.EC2.SubnetRouteTableAssociation('PrivateSubnetRouteTableAssociationPrivC')
privateSubnetRouteTableAssociationPrivC.SubnetId.ref(privateSubnetPrivC)
privateSubnetRouteTableAssociationPrivC.RouteTableId.ref(routeTablePrivC)
t.addResource(privateSubnetRouteTableAssociationPrivC)

let privateSubnetRouteTableAssociationPrivD = new wolkenkratzer.EC2.SubnetRouteTableAssociation('PrivateSubnetRouteTableAssociationPrivD')
privateSubnetRouteTableAssociationPrivD.SubnetId.ref(privateSubnetPrivD)
privateSubnetRouteTableAssociationPrivD.RouteTableId.ref(routeTablePrivD)
t.addResource(privateSubnetRouteTableAssociationPrivD)

console.log(t.toJson())