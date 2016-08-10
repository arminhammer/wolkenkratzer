/**
 * Created by arming on 6/5/16.
 */

/* global describe it */
'use strict'

const path = require('path')
const chai = require('chai')
chai.config.truncateThreshold = 0
chai.should()
var should = require('chai').should()

const wk = require(path.join(__dirname, '..', '..', 'index'))
const AWS = require('aws-sdk')
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

describe('IAM', () => {
  let t = new wk.Template()

  let accesskey = new wk.IAM.AccessKey('accesskey')

  let ManagedPolicy = new wk.IAM.ManagedPolicy('ManagedPolicy')

  accesskey.UserName = 'testUser'
  t.addResource(accesskey)

  let group = new wk.IAM.Group('group')
  t.addResource(group)

  let role = new wk.IAM.Role('role')
  role.AssumeRolePolicyDocument = {
    Version: '2012-10-17',
    Statement: [ {
      Effect: 'Allow',
      Principal: {
        Service: [ 'ec2.amazonaws.com' ]
      },
      Action: [ 'sts:AssumeRole' ]
    } ]
  }
  t.addResource(role)

  let instanceProfile = new wk.IAM.InstanceProfile('instanceProfile')
  instanceProfile.Path = '/'
  instanceProfile.Roles.push(new wk.Intrinsic.Ref(role))
  t.addResource(instanceProfile)

  let policy = new wk.IAM.Policy('policy')
  policy.PolicyName = 'CFNUsers'
  policy.PolicyDocument = {
    Version: '2012-10-17',
    Statement: [{
      Effect: 'Allow',
      Action: [
        'cloudformation:Describe*',
        'cloudformation:List*',
        'cloudformation:Get*'
      ],
      Resource: '*'
    } ]
  }
  t.addResource(policy)

  let user = new wk.IAM.User('user')
  t.addResource(user)

  let userToGroupAddition = new wk.IAM.UserToGroupAddition('userToGroupAddition')
  userToGroupAddition.GroupName = 'group'
  userToGroupAddition.Users.push('user')
  t.addResource(userToGroupAddition)

  it('should be able to add a new repository to the template', () => {
    t.Resources['accesskey'].WKResourceType.should.equal('AWS::IAM::AccessKey')
  })

  it('should generate the expected JSON template', () => {
    let jsonString = JSON.parse(t.toJson().Template)
    jsonString.should.deep.equal({
      'Resources': {
        'accesskey': {
          'Type': 'AWS::IAM::AccessKey',
          'Properties': {
            'UserName': 'testUser'
          }
        },
        'group': {
          'Type': 'AWS::IAM::Group',
          'Properties': {}
        },
        'role': {
          'Type': 'AWS::IAM::Role',
          'Properties': {
            'AssumeRolePolicyDocument': {
              'Version': '2012-10-17',
              'Statement': [
                {
                  'Effect': 'Allow',
                  'Principal': {
                    'Service': [
                      'ec2.amazonaws.com'
                    ]
                  },
                  'Action': [
                    'sts:AssumeRole'
                  ]
                }
              ]
            }
          }
        },
        'instanceProfile': {
          'Type': 'AWS::IAM::InstanceProfile',
          'Properties': {
            'Path': '/',
            'Roles': [
              {
                'Ref': 'role'
              }
            ]
          }
        },
        'policy': {
          'Type': 'AWS::IAM::Policy',
          'Properties': {
            'PolicyDocument': {
              'Version': '2012-10-17',
              'Statement': [
                {
                  'Effect': 'Allow',
                  'Action': [
                    'cloudformation:Describe*',
                    'cloudformation:List*',
                    'cloudformation:Get*'
                  ],
                  'Resource': '*'
                }
              ]
            },
            'PolicyName': 'CFNUsers'
          }
        },
        'user': {
          'Type': 'AWS::IAM::User',
          'Properties': {}
        },
        'userToGroupAddition': {
          'Type': 'AWS::IAM::UserToGroupAddition',
          'Properties': {
            'GroupName': 'group',
            'Users': [
              'user'
            ]
          }
        }
      },
      'AWSTemplateFormatVersion': '2010-09-09'
    })
  })

  it('CloudFormation should validate the template', () => {
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
