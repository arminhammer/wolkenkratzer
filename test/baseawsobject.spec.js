/**
 * Created by arming on 6/5/16.
 */
'use strict'

const path = require('path')
const chai = require('chai')

chai.should()

const wolkenkratzer = require(path.join(__dirname, '..', 'index'))
const ec2 = require(path.join(__dirname, '..', 'resources/ec2'))

describe ('BaseAWSObject', () => {

  describe ('Test conditional logic', () => {

    let t = new wolkenkratzer.Template()

    let vpcCiderParam = new wolkenkratzer.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
    t.addParameter(vpcCiderParam)

    let vpc = new ec2.VPC('VPC')
    vpc.CidrBlock.ref(vpcCiderParam)
    vpc.InstanceTenancy = 'default'
    vpc.EnableDnsSupport = true
    vpc.EnableDnsHostnames = true
    t.addResource(vpc)

    let vpnGateway = new ec2.VPNGateway('VPNGateway')
    vpnGateway.Type = 'ipsec.1'
    t.addResource(vpnGateway)

    let igwGateway = new ec2.InternetGateway('InternetGateway')
    t.addResource(igwGateway)

    let vpcGatewayAttachment = new ec2.VPCGatewayAttachment('VPCGatewayAttachment')
    vpcGatewayAttachment.InternetGatewayId.ref(igwGateway)
    vpcGatewayAttachment.VpcId.ref(vpc)
    vpcGatewayAttachment.VpnGatewayId.ref(vpnGateway)
    t.addResource(vpcGatewayAttachment)
    
    it ('Conditional should be tested, You must specify either InternetGatewayId or VpnGatewayId, but not both.', () => {
      try {
        t.toJson()
      } catch(e) {
        e.message.should.equal('VPCGatewayAttachment has a condition that was not met: You must specify either InternetGatewayId or VpnGatewayId, but not both.')
        }
    })

    /* it ('Should generate the expected JSON template', () => {
      vpnGateway.Type = 'ipsec.1'
      console.log(t.toJson())
      let jsonString = JSON.parse(t.toJson())
      jsonString.should.deep.equal({
        'Description': '',
        'Metadata': {},
        'Conditions': {},
        'Mappings': {},
        'Outputs': {},
        'Parameters': {},
        'Resources': {
          'VPNGateway': {
            'Type': 'AWS::EC2::VPNGateway',
            'Properties': {
              'Type': 'ipsec.1'
            }
          }
        },
        'AWSTemplateFormatVersion': '2010-09-09'
      })
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
    })*/

  })

})
