/**
 * Created by arming on 6/5/16.
 */
'use strict'

const path = require('path')
const chai = require('chai')

chai.should()

const cloudpotato = require(path.join(__dirname, '..', 'index'))

/* stubs for building code coverage */
const apigateway = require(path.join(__dirname, '..', 'resources/apigateway'))
//const  = require(path.join(__dirname, '..', 'resources/'))
const autoscaling = require(path.join(__dirname, '..', 'resources/autoscaling'))
const cloudformation = require(path.join(__dirname, '..', 'resources/cloudformation'))
const cloudfront = require(path.join(__dirname, '..', 'resources/cloudfront'))
const cloudtrail = require(path.join(__dirname, '..', 'resources/cloudtrail'))
const cloudwatch = require(path.join(__dirname, '..', 'resources/cloudwatch'))
const codedeploy = require(path.join(__dirname, '..', 'resources/codedeploy'))
const codepipeline = require(path.join(__dirname, '..', 'resources/codepipeline'))
const config = require(path.join(__dirname, '..', 'resources/config'))
const datapipeline = require(path.join(__dirname, '..', 'resources/datapipeline'))
const directoryservice = require(path.join(__dirname, '..', 'resources/directoryservice'))
const dynamodb = require(path.join(__dirname, '..', 'resources/dynamodb'))
const ecr = require(path.join(__dirname, '..', 'resources/ecr'))
const ecs = require(path.join(__dirname, '..', 'resources/ecs'))
const efs = require(path.join(__dirname, '..', 'resources/efs'))
const elasticache = require(path.join(__dirname, '..', 'resources/elasticache'))
const elasticbeanstalk = require(path.join(__dirname, '..', 'resources/elasticbeanstalk'))
const elasticloadbalancing = require(path.join(__dirname, '..', 'resources/elasticloadbalancing'))
const elasticsearch = require(path.join(__dirname, '..', 'resources/elasticsearch'))
const emr = require(path.join(__dirname, '..', 'resources/emr'))
const events = require(path.join(__dirname, '..', 'resources/events'))
const gamelift = require(path.join(__dirname, '..', 'resources/gamelift'))
const iam = require(path.join(__dirname, '..', 'resources/iam'))
const kinesis = require(path.join(__dirname, '..', 'resources/kinesis'))
const kms = require(path.join(__dirname, '..', 'resources/kms'))
const lambda = require(path.join(__dirname, '..', 'resources/lambda'))
const logs = require(path.join(__dirname, '..', 'resources/logs'))
const opsworks = require(path.join(__dirname, '..', 'resources/opsworks'))
const rds = require(path.join(__dirname, '..', 'resources/rds'))
const redshift = require(path.join(__dirname, '..', 'resources/redshift'))
const route53 = require(path.join(__dirname, '..', 'resources/route53'))
const sdb = require(path.join(__dirname, '..', 'resources/sdb'))
const sns = require(path.join(__dirname, '..', 'resources/sns'))
const sqs = require(path.join(__dirname, '..', 'resources/sqs'))
const ssm = require(path.join(__dirname, '..', 'resources/ssm'))
const waf = require(path.join(__dirname, '..', 'resources/waf'))
const workspaces = require(path.join(__dirname, '..', 'resources/workspaces'))

describe ('Template', () => {
  let template = new cloudpotato.Template()

  it ('Version should be 2010-09-09', () => {
    template.AWSTemplateFormatVersion.should.equal('2010-09-09')
  })
})
