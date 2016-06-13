/**
 * Created by arming on 6/5/16.
 */
'use strict'

const path = require('path')
const chai = require('chai')
chai.config.truncateThreshold = 0
chai.should()
var should = require('chai').should()

const cloudpotato = require(path.join(__dirname, '..', '..', 'index'))
const ec2 = require(path.join(__dirname, '..', '..', 'resources/ec2'))
const AWS = require('aws-sdk')
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

describe('EC2', () => {

  describe ('Instance', () => {
    let t = new cloudpotato.Template()

    let instance = new ec2.Instance('myinstance')
    instance.ImageId = 'ami-951945d0'
    instance.InstanceType = 't2.micro'
    t.addResource(instance)
    // console.log(JSON.stringify(t.Resources['myinstance'], null, 2))

    it ('Should be able to add an instance to the template', () => {
      t.Resources[ 'myinstance' ].resourceType.should.equal('AWS::EC2::Instance')
    })

    it ('Should generate the expected JSON template', () => {
      let jsonString = t.toJson()
      jsonString.should.equal(JSON.stringify({
          'Description': null,
          'Metadata': {},
          'Conditions': {},
          'Mappings': {},
          'Outputs': {},
          'Parameters': {},
          'Resources': {
            'myinstance': {
              'Type': 'AWS::EC2::Instance',
              'Properties': {
                'ImageId': 'ami-951945d0',
                'InstanceType': 't2.micro'
              }
            }
          },
          'Version': '2010-09-09'
        }, null, 2)
      )
    })

    it ('CloudFormation should validate the template', () => {
      let jsonString = t.toJson()
      CloudFormation.validateTemplate({
        TemplateBody: jsonString
      }, (err, data) => {
        if (err) {
          console.error(err)
        }
        should.exist(data)
      })
    })
  })

  describe('VPC', () => {

    let t = new cloudpotato.Template()

    let vpc = new ec2.VPC('myvpc')
    vpc.CidrBlock = '10.0.0.0/16'
    vpc.InstanceTenancy = 'default'
    vpc.EnableDnsSupport = true
    vpc.EnableDnsHostnames = true

    t.addResource(vpc)

    it ('Should be able to add an instance to the template', () => {
      t.Resources['myvpc'].resourceType.should.equal('AWS::EC2::VPC')
    })

    it ('Should generate the expected JSON template', () => {
      let jsonString = t.toJson()
      jsonString.should.equal(JSON.stringify({
          'Description': null,
          'Metadata': {},
          'Conditions': {},
          'Mappings': {},
          'Outputs': {},
          'Parameters': {},
          'Resources': {
            'myvpc': {
              'Type': 'AWS::EC2::VPC',
              'Properties': {
                'CidrBlock': '10.0.0.0/16',
                'EnableDnsSupport': true,
                'EnableDnsHostnames': true,
                'InstanceTenancy': 'default'
              }
            }
          },
          'Version': '2010-09-09'
        }, null, 2)
      )
    })

    it ('CloudFormation should validate the template', () => {
      let jsonString = t.toJson()
      CloudFormation.validateTemplate({
        TemplateBody: jsonString
      }, (err, data) => {
        if (err) {
          console.error(err)
        }
        should.exist(data)
      })
    })
  })

  describe ('Combined Networking', () => {

    let t = new cloudpotato.Template()
    let vpcCiderParam = new cloudpotato.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
    t.addParameter(vpcCiderParam)
    let publicSubnetPubACIDRParam = new cloudpotato.Parameter('PublicSubnetPubACIDR', { Type: 'String', Default: '10.0.0.0/24' })
    t.addParameter(publicSubnetPubACIDRParam)
    let publicSubnetPubBCIDRParam = new cloudpotato.Parameter('PublicSubnetPubBCIDR', { Type: 'String', Default: '10.0.1.0/24' })
    t.addParameter(publicSubnetPubBCIDRParam)
    let privateSubnetPrivCCIDRParam = new cloudpotato.Parameter('PrivateSubnetPrivCCIDR', { Type: 'String', Default: '10.0.2.0/24' })
    t.addParameter(privateSubnetPrivCCIDRParam)
    let privateSubnetPrivDCIDRParam = new cloudpotato.Parameter('PrivateSubnetPrivDCIDR', { Type: 'String', Default: '10.0.3.0/24' })
    t.addParameter(privateSubnetPrivDCIDRParam)
    let vPCTagParam = new cloudpotato.Parameter('VPCTag', { Type: 'String', Default: 'BaseVPC' })
    t.addParameter(vPCTagParam)

    let vpc = new ec2.VPC('VPC')
    vpc.CidrBlock.ref(vpcCiderParam)
    vpc.InstanceTenancy = 'default'
    vpc.EnableDnsSupport = true
    vpc.EnableDnsHostnames = true
    vpc.Tags.add({ Key: 'Name', Value: 'BaseVPC' })
    vpc.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })
    t.addResource(vpc)

    let igw = new ec2.InternetGateway('InternetGateway')
    igw.Tags.add({ Key: 'Name', Value: 'InternetGateway' })
    igw.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })
    t.addResource(igw)

    console.log(t.toJson())

    let vpcgatewayatt = new ec2.VPCGatewayAttachment('AttachInternetGateway')
    vpcgatewayatt.VpcId.ref(vpc)
    vpcgatewayatt.InternetGatewayId.ref(igw)

    console.log('vpcgatewayatt')
    console.log(vpcgatewayatt)
    t.addResource(vpcgatewayatt)

    let publicSubnetPubA = new ec2.Subnet('PublicSubnetPubA')
    publicSubnetPubA.CidrBlock.ref(publicSubnetPubACIDRParam)
    publicSubnetPubA.VpcId.ref(vpc)
    publicSubnetPubA.MapPublicIpOnLaunch = true
    publicSubnetPubA.Tags.add({ Key: 'Name', Value: 'PublicSubnetPubA' })
    publicSubnetPubA.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })
    t.addResource(publicSubnetPubA)

    let publicSubnetPubB = new ec2.Subnet('PublicSubnetPubB')
    publicSubnetPubB.CidrBlock.ref(publicSubnetPubBCIDRParam)
    publicSubnetPubB.VpcId.ref(vpc)
    publicSubnetPubB.MapPublicIpOnLaunch = true
    publicSubnetPubB.Tags.add({ Key: 'Name', Value: 'PublicSubnetPubB' })
    publicSubnetPubB.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })
    t.addResource(publicSubnetPubB)

    let PrivateSubnetPrivC = new ec2.Subnet('PrivateSubnetPrivC')
    PrivateSubnetPrivC.CidrBlock.ref(privateSubnetPrivCCIDRParam)
    PrivateSubnetPrivC.VpcId.ref(vpc)
    PrivateSubnetPrivC.MapPublicIpOnLaunch = false
    PrivateSubnetPrivC.Tags.add({ Key: 'Name', Value: 'PrivateSubnetPrivC' })
    PrivateSubnetPrivC.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })
    t.addResource(PrivateSubnetPrivC)

    let PrivateSubnetPrivD = new ec2.Subnet('PrivateSubnetPrivD')
    PrivateSubnetPrivD.CidrBlock.ref(privateSubnetPrivDCIDRParam)
    PrivateSubnetPrivD.VpcId.ref(vpc)
    PrivateSubnetPrivD.MapPublicIpOnLaunch = false
    PrivateSubnetPrivD.Tags.add({ Key: 'Name', Value: 'PrivateSubnetPrivD' })
    PrivateSubnetPrivD.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })
    t.addResource(PrivateSubnetPrivD)

    it ('Should generate the expected JSON template', () => {
      t.toJson()
      let jsonString = t.toJson()
      jsonString.should.equal(JSON.stringify({
          'Description': null,
          'Metadata': {},
          'Conditions': {},
          'Mappings': {},
          'Outputs': {},
          'Parameters': {
            'VPCCIDR': {
              'Type': 'String',
              'Default': '10.0.0.0/16'
            },
            'PublicSubnetPubACIDR': {
              'Type': 'String',
              'Default': '10.0.0.0/24'
            },
            'PublicSubnetPubBCIDR': {
              'Type': 'String',
              'Default': '10.0.1.0/24'
            },
            'PrivateSubnetPrivCCIDR': {
              'Type': 'String',
              'Default': '10.0.2.0/24'
            },
            'PrivateSubnetPrivDCIDR': {
              'Type': 'String',
              'Default': '10.0.3.0/24'
            },
            'VPCTag': {
              'Type': 'String',
              'Default': 'BaseVPC'
            }
          },
          'Resources': {
            'VPC': {
              'Type': 'AWS::EC2::VPC',
              'Properties': {
                'CidrBlock': { 'Ref': 'VPCCIDR' },
                'EnableDnsSupport': true,
                'EnableDnsHostnames': true,
                'InstanceTenancy': 'default',
                'Tags': [
                  { 'Key': 'Name', 'Value': 'BaseVPC' },
                  { 'Key': 'Group', 'Value': { 'Ref': 'VPCTag' } }
                ]
              }
            },
            'InternetGateway': {
              'Type': 'AWS::EC2::InternetGateway',
              'Properties': {
                'Tags': [
                  { 'Key': 'Name', 'Value': 'InternetGateway' },
                  { 'Key': 'Group', 'Value': { 'Ref': 'VPCTag' } }
                ]
              }
            },
            'AttachInternetGateway': {
              'Type': 'AWS::EC2::VPCGatewayAttachment',
              'Properties': {
                'InternetGatewayId': { 'Ref': 'InternetGateway' },
                'VpcId': { 'Ref': 'VPC' }
              }
            },
            'PublicSubnetPubA': {
              'Type': 'AWS::EC2::Subnet',
              'Properties': {
                'CidrBlock': { 'Ref': 'PublicSubnetPubACIDR' },
                'MapPublicIpOnLaunch': true,
                'Tags': [
                  { 'Key': 'Name', 'Value': 'PublicSubnetPubA' },
                  { 'Key': 'Group', 'Value': { 'Ref': 'VPCTag' } }
                ],
                'VpcId': { 'Ref': 'VPC' }
              }
            },
            'PublicSubnetPubB': {
              'Type': 'AWS::EC2::Subnet',
              'Properties': {
                'CidrBlock': { 'Ref': 'PublicSubnetPubBCIDR' },
                'MapPublicIpOnLaunch': true,
                'Tags': [
                  { 'Key': 'Name', 'Value': 'PublicSubnetPubB' },
                  { 'Key': 'Group', 'Value': { 'Ref': 'VPCTag' } }
                ],
                'VpcId': { 'Ref': 'VPC' }
              }
            },
            'NATPubA': {
              'DependsOn': 'InternetGateway',
              'Type': 'AWS::EC2::NatGateway',
              'Properties': {
                'AllocationId': { 'Fn::GetAtt': ['EIPPubA', 'AllocationId'] },
                'SubnetId': { 'Ref': 'PublicSubnetPubA' }
              }
            },
            'EIPPubA': {
              'Type': 'AWS::EC2::EIP',
              'Properties': {
                'Domain': 'vpc'
              }
            },
            'PublicRouteTable': {
              'Type': 'AWS::EC2::RouteTable',
              'Properties': {
                'VpcId': { 'Ref': 'VPC' },
                'Tags': [
                  { 'Key': 'Name', 'Value': 'PublicRouteTable' },
                  { 'Key': 'Group', 'Value': { 'Ref': 'VPCTag' } }
                ]
              }
            },
            'PublicIGWRoute': {
              'Type': 'AWS::EC2::Route',
              'Properties': {
                'RouteTableId': { 'Ref': 'PublicRouteTable' },
                'DestinationCidrBlock': '0.0.0.0/0',
                'GatewayId': { 'Ref': 'InternetGateway' }
              }
            },
            'PublicSubnetRouteTableAssociationA': {
              'Type': 'AWS::EC2::SubnetRouteTableAssociation',
              'Properties': {
                'SubnetId': { 'Ref': 'PublicSubnetPubA' },
                'RouteTableId': { 'Ref': 'PublicRouteTable' }
              }
            },
            'PublicSubnetRouteTableAssociationB': {
              'Type': 'AWS::EC2::SubnetRouteTableAssociation',
              'Properties': {
                'SubnetId': { 'Ref': 'PublicSubnetPubB' },
                'RouteTableId': { 'Ref': 'PublicRouteTable' }
              }
            },
            'NATPubB': {
              'DependsOn': 'InternetGateway',
              'Type': 'AWS::EC2::NatGateway',
              'Properties': {
                'AllocationId': { 'Fn::GetAtt': ['EIPPubB', 'AllocationId'] },
                'SubnetId': { 'Ref': 'PublicSubnetPubB' }
              }
            },
            'EIPPubB': {
              'Type': 'AWS::EC2::EIP',
              'Properties': {
                'Domain': 'vpc'
              }
            },
            'PrivateSubnetPrivC': {
              'Type': 'AWS::EC2::Subnet',
              'Properties': {
                'CidrBlock': { 'Ref': 'PrivateSubnetPrivCCIDR' },
                'MapPublicIpOnLaunch': false,
                'Tags': [
                  { 'Key': 'Name', 'Value': 'PrivateSubnetPrivC' },
                  { 'Key': 'Group', 'Value': { 'Ref': 'VPCTag' } }
                ],
                'VpcId': { 'Ref': 'VPC' }
              }
            },
            'PrivateSubnetPrivD': {
              'Type': 'AWS::EC2::Subnet',
              'Properties': {
                'CidrBlock': { 'Ref': 'PrivateSubnetPrivDCIDR' },
                'MapPublicIpOnLaunch': false,
                'Tags': [
                  { 'Key': 'Name', 'Value': 'PrivateSubnetPrivD' },
                  { 'Key': 'Group', 'Value': { 'Ref': 'VPCTag' } }
                ],
                'VpcId': { 'Ref': 'VPC' }
              }
            },
            'RouteTablePrivC': {
              'Type': 'AWS::EC2::RouteTable',
              'Properties': {
                'VpcId': { 'Ref': 'VPC' },
                'Tags': [
                  { 'Key': 'Name', 'Value': 'RouteTablePrivC' },
                  { 'Key': 'Group', 'Value': { 'Ref': 'VPCTag' } }
                ]
              }
            },
            'NATRoutePrivC': {
              'Type': 'AWS::EC2::Route',
              'Properties': {
                'RouteTableId': { 'Ref': 'RouteTablePrivC' },
                'DestinationCidrBlock': '0.0.0.0/0',
                'NatGatewayId': { 'Ref': 'NATPubA' }
              }
            },
            'PrivateSubnetRouteTableAssociationPrivC': {
              'Type': 'AWS::EC2::SubnetRouteTableAssociation',
              'Properties': {
                'SubnetId': { 'Ref': 'PrivateSubnetPrivC' },
                'RouteTableId': { 'Ref': 'RouteTablePrivC' }
              }
            },
            'RouteTablePrivD': {
              'Type': 'AWS::EC2::RouteTable',
              'Properties': {
                'VpcId': { 'Ref': 'VPC' },
                'Tags': [
                  { 'Key': 'Name', 'Value': 'RouteTablePrivD' },
                  { 'Key': 'Group', 'Value': { 'Ref': 'VPCTag' } }
                ]
              }
            },
            'NATRoutePrivD': {
              'Type': 'AWS::EC2::Route',
              'Properties': {
                'RouteTableId': { 'Ref': 'RouteTablePrivD' },
                'DestinationCidrBlock': '0.0.0.0/0',
                'NatGatewayId': { 'Ref': 'NATPubB' }
              }
            },
            'PrivateSubnetRouteTableAssociationPrivD': {
              'Type': 'AWS::EC2::SubnetRouteTableAssociation',
              'Properties': {
                'SubnetId': { 'Ref': 'PrivateSubnetPrivD' },
                'RouteTableId': { 'Ref': 'RouteTablePrivD' }
              }
            }
          },
          'Version': '2010-09-09'
        }, null, 2)
      )
    })

    it ('CloudFormation should validate the template', () => {
      let jsonString = t.toJson()
      CloudFormation.validateTemplate({
        TemplateBody: jsonString
      }, (err, data) => {
        if (err) {
          console.error(err)
        }
        should.exist(data)
      })
    })
  })
})
