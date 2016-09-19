/**
 * Created by arming on 6/5/16.
 */
/* global describe it */
'use strict'

const path = require('path')
const chai = require('chai')

chai.should()

const wk = require(path.join(__dirname, '..', 'index'))

const AWS = require('aws-sdk')
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

describe ('Intrinsics', () => {
  it ('FnGetAtt should generate JSON correctly', () => {

    let t = new wk.Template()

    let bucket = new wk.S3.Bucket('bucket')
    t.add(bucket)

    let domainAtt = new wk.Intrinsic.FnGetAtt(bucket.getName(), 'DomainName')

    let output = new wk.Output('domain', {
      Description: 'Domain',
      Value: domainAtt
    })

    t.add(output)

    let jsonString = JSON.parse(t.toJson().Template)
    jsonString.should.deep.equal({
      'Outputs': {
        'domain': {
          'Description': 'Domain',
          'Value': {
            'Fn::GetAtt': [
              'bucket',
              'DomainName'
            ]
          }
        }
      },
      'Resources': {
        'bucket': {
          'Type': 'AWS::S3::Bucket',
          'Properties': {}
        }
      },
      'AWSTemplateFormatVersion': '2010-09-09'
    })

  })

  describe('FnGetAtt within a Resource', () => {

    let t = new wk.Template()

    let ElasticLoadBalancer = new wk.ElasticLoadBalancing.LoadBalancer('ElasticLoadBalancer')

    let cookieStickinessPolicy = new wk.Types.ElasticLoadBalancingLBCookieStickinessPolicyType()
    cookieStickinessPolicy.PolicyName = 'CookieBasedPolicy'
    cookieStickinessPolicy.CookieExpirationPeriod = '30'
    ElasticLoadBalancer.LBCookieStickinessPolicy.push(cookieStickinessPolicy)

    let listener = new wk.Types.ElasticLoadBalancingListenerPropertyType()
    listener.LoadBalancerPort = '80'
    listener.InstancePort = '80'
    listener.Protocol = 'HTTP'
    listener.PolicyNames.push('CookieBasedPolicy')
    ElasticLoadBalancer.Listeners.push(listener)

    let elbHealthCheck = new wk.Types.ElasticLoadBalancingHealthCheckType()
    elbHealthCheck.Target = 'HTTP:80/',
    elbHealthCheck.HealthyThreshold = '2',
    elbHealthCheck.UnhealthyThreshold = '5',
    elbHealthCheck.Interval = '10',
    elbHealthCheck.Timeout = '5'
    ElasticLoadBalancer.HealthCheck = elbHealthCheck

    t.add(ElasticLoadBalancer)

    let InstanceSecurityGroup = new wk.EC2.SecurityGroup('InstanceSecurityGroup')
    InstanceSecurityGroup.GroupDescription = 'Enable HTTP access via port 80 locked down to the load balancer + SSH access'

    let rule1 = new wk.Types.EC2SecurityGroupRulePropertyType()
    rule1.IpProtocol = 'tcp'
    rule1.FromPort = 80
    rule1.ToPort = 80
    rule1.SourceSecurityGroupOwnerId = new wk.Intrinsic.FnGetAtt(ElasticLoadBalancer.getName(), 'SourceSecurityGroup.OwnerAlias')
    rule1.SourceSecurityGroupName = new wk.Intrinsic.FnGetAtt(ElasticLoadBalancer.getName(), 'SourceSecurityGroup.GroupName')
    InstanceSecurityGroup.SecurityGroupIngress.push(rule1)

    let rule2 = new wk.Types.EC2SecurityGroupRulePropertyType()
    rule2.IpProtocol = 'tcp'
    rule2.FromPort = 8004
    rule2.ToPort = 8004
    rule2.SourceSecurityGroupOwnerId = new wk.Intrinsic.FnGetAtt(ElasticLoadBalancer.getName(), 'SourceSecurityGroup.OwnerAlias')
    rule2.SourceSecurityGroupName = new wk.Intrinsic.FnGetAtt(ElasticLoadBalancer.getName(), 'SourceSecurityGroup.GroupName')
    InstanceSecurityGroup.SecurityGroupIngress.push(rule2)

    let rule3 = new wk.Types.EC2SecurityGroupRulePropertyType()
    rule3.IpProtocol = 'tcp'
    rule3.FromPort = 443
    rule3.ToPort = 443
    rule3.SourceSecurityGroupOwnerId = new wk.Intrinsic.FnGetAtt(ElasticLoadBalancer.getName(), 'SourceSecurityGroup.OwnerAlias')
    rule3.SourceSecurityGroupName = new wk.Intrinsic.FnGetAtt(ElasticLoadBalancer.getName(), 'SourceSecurityGroup.GroupName')
    InstanceSecurityGroup.SecurityGroupIngress.push(rule3)

    let rule4 = new wk.Types.EC2SecurityGroupRulePropertyType()
    rule4.IpProtocol = 'tcp'
    rule4.FromPort = 22
    rule4.ToPort = 22
    rule4.CidrIp.ref('SSHLocation')
    InstanceSecurityGroup.SecurityGroupIngress.push(rule4)

    t.add(InstanceSecurityGroup)

    it ('FnGetAtt should generate JSON correctly when part of a resource', () => {

      let jsonString = JSON.parse(t.toJson().Template)
      jsonString.should.deep.equal({
        'Resources': {
          'ElasticLoadBalancer': {
            'Type': 'AWS::ElasticLoadBalancing::LoadBalancer',
            'Properties': {
              'HealthCheck': {
                'HealthyThreshold': '2',
                'Interval': '10',
                'Target': 'HTTP:80/',
                'Timeout': '5',
                'UnhealthyThreshold': '5'
              },
              'LBCookieStickinessPolicy': [
                {
                  'CookieExpirationPeriod': '30',
                  'PolicyName': 'CookieBasedPolicy'
                }
              ],
              'Listeners': [
                {
                  'InstancePort': '80',
                  'LoadBalancerPort': '80',
                  'PolicyNames': [
                    'CookieBasedPolicy'
                  ],
                  'Protocol': 'HTTP'
                }
              ]
            }
          },
          'InstanceSecurityGroup': {
            'Type': 'AWS::EC2::SecurityGroup',
            'Properties': {
              'GroupDescription': 'Enable HTTP access via port 80 locked down to the load balancer + SSH access',
              'SecurityGroupIngress': [
                {
                  'FromPort': 80,
                  'IpProtocol': 'tcp',
                  'SourceSecurityGroupName': {
                    'Fn::GetAtt': [
                      'ElasticLoadBalancer',
                      'SourceSecurityGroup.GroupName'
                    ]
                  },
                  'SourceSecurityGroupOwnerId': {
                    'Fn::GetAtt': [
                      'ElasticLoadBalancer',
                      'SourceSecurityGroup.OwnerAlias'
                    ]
                  },
                  'ToPort': 80
                },
                {
                  'FromPort': 8004,
                  'IpProtocol': 'tcp',
                  'SourceSecurityGroupName': {
                    'Fn::GetAtt': [
                      'ElasticLoadBalancer',
                      'SourceSecurityGroup.GroupName'
                    ]
                  },
                  'SourceSecurityGroupOwnerId': {
                    'Fn::GetAtt': [
                      'ElasticLoadBalancer',
                      'SourceSecurityGroup.OwnerAlias'
                    ]
                  },
                  'ToPort': 8004
                },
                {
                  'FromPort': 443,
                  'IpProtocol': 'tcp',
                  'SourceSecurityGroupName': {
                    'Fn::GetAtt': [
                      'ElasticLoadBalancer',
                      'SourceSecurityGroup.GroupName'
                    ]
                  },
                  'SourceSecurityGroupOwnerId': {
                    'Fn::GetAtt': [
                      'ElasticLoadBalancer',
                      'SourceSecurityGroup.OwnerAlias'
                    ]
                  },
                  'ToPort': 443
                },
                {
                  'CidrIp': { 'Ref': 'SSHLocation' },
                  'FromPort': 22,
                  'IpProtocol': 'tcp',
                  'ToPort': 22
                }
              ]
            }
          }
        },
        'AWSTemplateFormatVersion': '2010-09-09'
      })
    })

    it ('CloudFormation should validate the template', () => {
      let jsonString = t.toJson().Template
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
