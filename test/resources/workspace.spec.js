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

describe('WorkSpaces', () => {
  let t = new wk.Template()

  let workspace = new wk.WorkSpaces.Workspace('workspace')
  workspace.BundleId = 'bundleID'
  workspace.DirectoryId = 'directoryID'
  workspace.UserName = 'testUser'
  t.addResource(workspace)

  it('should be able to add a new workspace to the template', () => {
    t.Resources['workspace'].WKResourceType.should.equal('AWS::WorkSpaces::Workspace')
  })

  it('should generate the expected JSON template', () => {
    let jsonString = JSON.parse(t.toJson())
    jsonString.should.deep.equal({
      "Resources": {
        "workspace": {
          "Type": "AWS::WorkSpaces::Workspace",
          "Properties": {
            "BundleId": "bundleID",
            "DirectoryId": "directoryID",
            "UserName": "testUser"
          }
        }
      },
      "AWSTemplateFormatVersion": "2010-09-09"
    })
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
