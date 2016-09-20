/**
 * Created by arming on 9/19/16.
 */

const chai = require('chai')
chai.config.truncateThreshold = 0
chai.should()
var should = require('chai').should()
const AWS = require('aws-sdk')
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

function validateTemplate(template, cb) {
  console.log('validating...')
  let jsonString = template.toJson().Template
  return CloudFormation.validateTemplate({
    TemplateBody: jsonString
  }, (err, data) => {
    if (err) {
      console.error(err)
      console.log(template.toJson().Errors)
    }
    should.exist(data)
    console.log('validated!')
    cb()
  })
}

module.exports = {
  validateTemplate: validateTemplate
}