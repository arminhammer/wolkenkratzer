/**
 * Created by arming on 6/5/16.
 */
'use strict';

const path = require('path')
const chai = require('chai')
chai.config.truncateThreshold = 0;
chai.should()
var should = require('chai').should();

//const _ = require('lodash')
const cloudpotato = require(path.join(__dirname,'..','..','index'))
const ec2 = require(path.join(__dirname,'..','..','resources/ec2'))
const AWS = require('aws-sdk')
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

describe('EC2', () => {

  describe('Instance', () => {
    let t = new cloudpotato.Template()

    let instance = new ec2.Instance("myinstance")
    instance.ImageId = 'ami-951945d0'
    instance.InstanceType = 't2.micro'
    t.addResource(instance)
    //console.log(JSON.stringify(t.Resources['myinstance'], null, 2))

    it('Should be able to add an instance to the template', () => {
      t.Resources[ 'myinstance' ].resource_type.should.equal("AWS::EC2::Instance")
    })

    it('Should generate the expected JSON template', () => {
      let jsonString = t.toJson()
      jsonString.should.equal(JSON.stringify({
          "Description": null,
          "Metadata": {},
          "Conditions": {},
          "Mappings": {},
          "Outputs": {},
          "Parameters": {},
          "Resources": {
            "myinstance": {
              "Type": "AWS::EC2::Instance",
              "Properties": {
                "InstanceType": "t2.micro",
                "ImageId": "ami-951945d0"
              }
            }
          },
          "Version": "2010-09-09"
        }, null, 2)
      )
    })

    it('CloudFormation should validate the template', () => {
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

    let vpc = new ec2.VPC("myvpc")
    vpc.CidrBlock = '10.0.0.0/16'
    vpc.InstanceTenancy = 'Default'
    vpc.EnableDnsSupport = true
    vpc.EnableDnsHostnames = true

    t.addResource(vpc)

    it('Should be able to add an instance to the template', () => {
      console.log(t.toJson())
      t.Resources['myvpc'].resource_type.should.equal("AWS::EC2::VPC")
    })

    it('Should generate the expected JSON template', () => {
      let jsonString = t.toJson()
      jsonString.should.equal(JSON.stringify({
          "Description": null,
          "Metadata": {},
          "Conditions": {},
          "Mappings": {},
          "Outputs": {},
          "Parameters": {},
          "Resources": {
            "myvpc": {
              "Type": "AWS::EC2::VPC",
              "Properties": {
                "CidrBlock": "10.0.0.0/16",
                "EnableDnsSupport": true,
                "EnableDnsHostnames": true,
                "InstanceTenancy": "Default"
              }
            }
          },
          "Version": "2010-09-09"
        }, null, 2)
      )
    })

    it('CloudFormation should validate the template', () => {
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