/**
 * Created by arming on 6/5/16.
 */
/* global describe it */
'use strict'

const path = require('path')
const chai = require('chai')

chai.should()

const wk = require(path.join(__dirname, '..', 'index'))

describe('Tags', () => {
  it('should add tags with add()', () => {
    let t = new wk.Template()

    let vpc = new wk.EC2.VPC('vpc')
    vpc.CidrBlock = '10.0.0.0/16'
    vpc.Tags.add({ Key: 'Key0', Value: 'Value0' })
    let tag = new wk.Tag('Key1', 'Value1')
    vpc.Tags.add(tag)
    vpc.Tags.add({ Key: 'Key2', Value: 'Value2' })
    t.addResource(vpc)

    let jsonString = JSON.parse(t.toJson())
    jsonString.should.deep.equal({
      'Resources': {
      'vpc': {
        'Type': 'AWS::EC2::VPC',
          'Properties': {
          'CidrBlock': '10.0.0.0/16',
            'Tags': [
            {
              'Key': 'Key0',
              'Value': 'Value0'
            },
            {
              'Key': 'Key1',
              'Value': 'Value1'
            },
            {
              'Key': 'Key2',
              'Value': 'Value2'
            }
          ]
        }
      }
    },
    'AWSTemplateFormatVersion': '2010-09-09'
  })
  })
})
