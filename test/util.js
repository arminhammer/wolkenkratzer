/**
 * Created by arming on 9/19/16.
 */

const chai = require('chai')
chai.config.truncateThreshold = 0
chai.should()
var should = require('chai').should()
const AWS = require('aws-sdk')

AWS.events.on('retry', function(resp) {
  if (resp.error && resp.error.code === 'Throttling') {
    resp.error.retryable = true
  }
})

const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

function validateTemplate(template, cb) {
  //return true
  cb()

  /*
   let jsonString = template.toJson().Template
   return CloudFormation.validateTemplate({
    TemplateBody: jsonString
  }, (err, data) => {
    if (err) {
      console.error(err)
      console.log(template.toJson().Errors)
    }
    should.exist(data)
    cb()
  }) */
}

module.exports = {
  validateTemplate: validateTemplate
}