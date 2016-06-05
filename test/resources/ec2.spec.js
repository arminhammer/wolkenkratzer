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
  let t = new cloudpotato.Template()

  let instance = new ec2.Instance("myinstance")
  instance.ImageId = 'ami-951945d0'
  instance.InstanceType = 't2.micro'
  t.add_resource(instance)
  //console.log(JSON.stringify(t.Resources['myinstance'], null, 2))

  it('Should be able to add an instance to the template', () => {
    t.Resources['myinstance'].resource_type.should.equal("AWS::EC2::Instance")
  })

  it('Should generate the expected JSON template', () => {
    let jsonString = t.to_json()
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
    let jsonString = t.to_json()
    console.log(jsonString)
    CloudFormation.validateTemplate({
      TemplateBody: jsonString
    }, (err, data) => {
      if(err) {
        console.error(err)
      }
      should.exist(data)
    })
  })
})