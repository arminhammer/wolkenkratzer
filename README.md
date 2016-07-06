# wolkenkratzer

Wolkenkratzer is a Javascript library that helps you programmatically generate CloudFormation templates. The scope of the project is similar to the Python library https://github.com/cloudtools/troposphere.

## Installation

  ```$ npm install wolkenkratzer```

## Usage

### General
The core class is Template, which is instantiated with ```new wolkenkratzer.Template()```. Parameters can be added with the ```addParameter()``` method,
and Resources can be added with ```addParameter```. The final template can be retrieved with Template.toJson().

The following script adds a VPNGateway to the template:

```javascript
const wk = require('wolkenkratzer')

let t = new wk.Template()

let vpcCiderParam = new wk.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.addParameter(vpcCiderParam)

let vpnGateway = new wk.EC2.VPNGateway('VPNGateway')
vpnGateway.Type = 'ipsec.1'
t.addResource(vpnGateway)

console.log(t.toJson())
```

This results in the template:

```json
{
  "Parameters": {
    "VPCCIDR": {
      "Type": "String",
      "Default": "10.0.0.0/16"
    }
  },
  "Resources": {
    "VPNGateway": {
      "Type": "AWS::EC2::VPNGateway",
      "Properties": {
        "Type": "ipsec.1"
      }
    }
  },
  "AWSTemplateFormatVersion": "2010-09-09"
}
```

### Template class

#### constructor

Template has a no-argument constructor:

```javascript let t = new wolkenkratzer.Template()```

#### addDescription (description)

Add a description to the template.

#### addMetadata (metadata)

Add a Metadata block to the template.

#### addCondition (name, condition)

Add a condition with a name to the template.

#### addOutput (output)

Add an output to the template.

#### addMapping (name, mapping)

Add a mapping with a name to the template.

#### addParameter (parameter)

Add a parameter to the template.

#### addResource (resource)

Add a resource to the template.

#### toJson()

Returns a JSON CloudFormation template.

### Resources

#### constructor (name, properties)
 
Resources must be created with a name parameter, which will be the CloudFormation logical id for the resource:
    
```javascript 
let ec2One = new wk.EC2.Instance('ec2One')
```

Once you create the resource, you can set the attributes using setters. Although you can use the = operator to set new values, wolkenkratzer overrides
the setters and does typechecking for you.

```javascript 
ec2One.ImageId = 'ami-2a69aa47'
```

You can use the second parameter in case you want to create the resource with a JSON block, instead of setting the attributes one at a time.

An example of creating a resource with one argument (ec2One), and another (ec2Two) with a JSON object:

```javascript
'use strict';

const aws = require('aws-sdk')
const EC2 = new aws.EC2({ region: 'us-east-1' })
const wk = require('wolkenkratzer')

let t = new wk.Template()

let ec2One = new wk.EC2.Instance('ec2One')
ec2One.ImageId = 'ami-2a69aa47'

t.addResource(ec2One)

EC2.describeInstances({}, (err, data) => {
  if(err) {
    console.log(err)
  } else {
    let instance = data.Reservations[0].Instances[0]
    let ec2Two = new wk.EC2.Instance('ec2Two', instance)
    t.addResource(ec2Two)
    console.log(t.toJson())
  }
})
```

#### dependsOn (resource) 

#### addConfig (config)

#### addConfigSet (configSet)

####  addPolicy (policy) 

####  toJson ()

### Intrinsic Functions

Intrinsic functions such as Ref and Fn::GetAtt are supported. Any resource can associate with other elements by using the corresponding intrinsic function:

```javascript
natPubA.SubnetId.ref(publicSubnetPubA)
natPubA.AllocationId.getAtt(eipPubA, 'AllocationId')
```

A more complete example is

```javascript
'use strict'

const wk = require('wolkenkratzer')

let t = new wk.Template()
let vpcCiderParam = new wk.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.addParameter(vpcCiderParam)
let publicSubnetPubACIDRParam = new wk.Parameter('PublicSubnetPubACIDR', { Type: 'String', Default: '10.0.0.0/24' })
t.addParameter(publicSubnetPubACIDRParam)
let publicSubnetPubBCIDRParam = new wk.Parameter('PublicSubnetPubBCIDR', { Type: 'String', Default: '10.0.1.0/24' })
t.addParameter(publicSubnetPubBCIDRParam)
let privateSubnetPrivCCIDRParam = new wk.Parameter('PrivateSubnetPrivCCIDR', { Type: 'String', Default: '10.0.2.0/24' })
t.addParameter(privateSubnetPrivCCIDRParam)
let privateSubnetPrivDCIDRParam = new wk.Parameter('PrivateSubnetPrivDCIDR', { Type: 'String', Default: '10.0.3.0/24' })
t.addParameter(privateSubnetPrivDCIDRParam)
let vPCTagParam = new wk.Parameter('VPCTag', { Type: 'String', Default: 'BaseVPC' })
t.addParameter(vPCTagParam)

let vpc = new wk.EC2.VPC('VPC')
vpc.CidrBlock.ref(vpcCiderParam)
vpc.InstanceTenancy = 'default'
vpc.EnableDnsSupport = true
vpc.EnableDnsHostnames = true
vpc.Tags.add({ Key: 'Name', Value: 'BaseVPC' })
vpc.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) })
t.addResource(vpc)

let igw = new wk.EC2.InternetGateway('InternetGateway')
igw.Tags.add({ Key: 'Name', Value: 'InternetGateway' })
igw.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) })
t.addResource(igw)

let vpcgatewayatt = new wk.EC2.VPCGatewayAttachment('AttachInternetGateway')
vpcgatewayatt.VpcId.ref(vpc)
vpcgatewayatt.InternetGatewayId.ref(igw)

t.addResource(vpcgatewayatt)

let publicSubnetPubA = new wk.EC2.Subnet('PublicSubnetPubA')
publicSubnetPubA.CidrBlock.ref(publicSubnetPubACIDRParam)
publicSubnetPubA.VpcId.ref(vpc)
publicSubnetPubA.MapPublicIpOnLaunch = true
publicSubnetPubA.Tags.add({ Key: 'Name', Value: 'PublicSubnetPubA' })
publicSubnetPubA.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) })
t.addResource(publicSubnetPubA)

let publicSubnetPubB = new wk.EC2.Subnet('PublicSubnetPubB')
publicSubnetPubB.CidrBlock.ref(publicSubnetPubBCIDRParam)
publicSubnetPubB.VpcId.ref(vpc)
publicSubnetPubB.MapPublicIpOnLaunch = true
publicSubnetPubB.Tags.add({ Key: 'Name', Value: 'PublicSubnetPubB' })
publicSubnetPubB.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) })
t.addResource(publicSubnetPubB)

let eipPubA = new wk.EC2.EIP('EIPPubA')
eipPubA.Domain = 'vpc'
t.addResource(eipPubA)

let natPubA = new wk.EC2.NatGateway('NATPubA')
natPubA.SubnetId.ref(publicSubnetPubA)
natPubA.AllocationId.getAtt(eipPubA, 'AllocationId')
natPubA.dependsOn(igw)
t.addResource(natPubA)

let eipPubB = new wk.EC2.EIP('EIPPubB')
eipPubB.Domain = 'vpc'
t.addResource(eipPubB)

let natPubB = new wk.EC2.NatGateway('NATPubB')
natPubB.SubnetId.ref(publicSubnetPubB)
natPubB.AllocationId.getAtt(eipPubB, 'AllocationId')
natPubB.dependsOn(igw)
t.addResource(natPubB)

let privateSubnetPrivC = new wk.EC2.Subnet('PrivateSubnetPrivC')
privateSubnetPrivC.CidrBlock.ref(privateSubnetPrivCCIDRParam)
privateSubnetPrivC.VpcId.ref(vpc)
privateSubnetPrivC.MapPublicIpOnLaunch = false
privateSubnetPrivC.Tags.add({ Key: 'Name', Value: 'PrivateSubnetPrivC' })
privateSubnetPrivC.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) })
t.addResource(privateSubnetPrivC)

let privateSubnetPrivD = new wk.EC2.Subnet('PrivateSubnetPrivD')
privateSubnetPrivD.CidrBlock.ref(privateSubnetPrivDCIDRParam)
privateSubnetPrivD.VpcId.ref(vpc)
privateSubnetPrivD.MapPublicIpOnLaunch = false
privateSubnetPrivD.Tags.add({ Key: 'Name', Value: 'PrivateSubnetPrivD' })
privateSubnetPrivD.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) })
t.addResource(privateSubnetPrivD)

let publicRouteTable = new wk.EC2.RouteTable('PublicRouteTable')
publicRouteTable.VpcId.ref(vpc)
publicRouteTable.Tags.add({ Key: 'Name', Value: 'PublicRouteTable' })
publicRouteTable.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) })
t.addResource(publicRouteTable)

let routeTablePrivC = new wk.EC2.RouteTable('RouteTablePrivC')
routeTablePrivC.VpcId.ref(vpc)
routeTablePrivC.Tags.add({ Key: 'Name', Value: 'RouteTablePrivC' })
routeTablePrivC.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) })
t.addResource(routeTablePrivC)

let routeTablePrivD = new wk.EC2.RouteTable('RouteTablePrivD')
routeTablePrivD.VpcId.ref(vpc)
routeTablePrivD.Tags.add({ Key: 'Name', Value: 'RouteTablePrivD' })
routeTablePrivD.Tags.add({ Key: 'Group', Value: new wk.Ref(vPCTagParam) })
t.addResource(routeTablePrivD)

let publicIGWRoute = new wk.EC2.Route('PublicIGWRoute')
publicIGWRoute.RouteTableId.ref(publicRouteTable)
publicIGWRoute.DestinationCidrBlock = '0.0.0.0/0'
publicIGWRoute.GatewayId.ref(igw)
t.addResource(publicIGWRoute)

let nATRoutePrivC = new wk.EC2.Route('NATRoutePrivC')
nATRoutePrivC.RouteTableId.ref(routeTablePrivC)
nATRoutePrivC.DestinationCidrBlock = '0.0.0.0/0'
nATRoutePrivC.NatGatewayId.ref(natPubA)
t.addResource(nATRoutePrivC)

let nATRoutePrivD = new wk.EC2.Route('NATRoutePrivD')
nATRoutePrivD.RouteTableId.ref(routeTablePrivD)
nATRoutePrivD.DestinationCidrBlock = '0.0.0.0/0'
nATRoutePrivD.NatGatewayId.ref(natPubB)
t.addResource(nATRoutePrivD)

let publicSubnetRouteTableAssociationA = new wk.EC2.SubnetRouteTableAssociation('PublicSubnetRouteTableAssociationA')
publicSubnetRouteTableAssociationA.SubnetId.ref(publicSubnetPubA)
publicSubnetRouteTableAssociationA.RouteTableId.ref(publicRouteTable)
t.addResource(publicSubnetRouteTableAssociationA)

let publicSubnetRouteTableAssociationB = new wk.EC2.SubnetRouteTableAssociation('PublicSubnetRouteTableAssociationB')
publicSubnetRouteTableAssociationB.SubnetId.ref(publicSubnetPubB)
publicSubnetRouteTableAssociationB.RouteTableId.ref(publicRouteTable)
t.addResource(publicSubnetRouteTableAssociationB)

let privateSubnetRouteTableAssociationPrivC = new wk.EC2.SubnetRouteTableAssociation('PrivateSubnetRouteTableAssociationPrivC')
privateSubnetRouteTableAssociationPrivC.SubnetId.ref(privateSubnetPrivC)
privateSubnetRouteTableAssociationPrivC.RouteTableId.ref(routeTablePrivC)
t.addResource(privateSubnetRouteTableAssociationPrivC)

let privateSubnetRouteTableAssociationPrivD = new wk.EC2.SubnetRouteTableAssociation('PrivateSubnetRouteTableAssociationPrivD')
privateSubnetRouteTableAssociationPrivD.SubnetId.ref(privateSubnetPrivD)
privateSubnetRouteTableAssociationPrivD.RouteTableId.ref(routeTablePrivD)
t.addResource(privateSubnetRouteTableAssociationPrivD)

console.log(t.toJson())
```

More examples can be found in the /examples folder.

## Resource support
Wolkenkratzer supports all CloudFormation resources. This is made possible by scripts that scrape the CloudFormation documentation pages and generate the resource code files. The scrapers can be found in the /scripts folder.

## Contributing
Wolkenkratzer is still a new library and needs lots of testing. If you run into any problems please open an issue or create a PR. All contributions are welcome!

## License
Wolkenkratzer uses the MIT open source license.
