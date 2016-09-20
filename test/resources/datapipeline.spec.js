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
const util = require('../util')

describe('DataPipeline', () => {
  let t = new wk.Template()

  let AWSDataPipelineDataPipelineObjectFields = new wk.Types.AWSDataPipelineDataPipelineObjectFields()
  AWSDataPipelineDataPipelineObjectFields.Key = 'key'

  let AWSDataPipelinePipelineObjects = new wk.Types.AWSDataPipelinePipelineObjects()
  AWSDataPipelinePipelineObjects.Fields = AWSDataPipelineDataPipelineObjectFields
  AWSDataPipelinePipelineObjects.Id = 'id'
  AWSDataPipelinePipelineObjects.Name = 'name'

  let Pipeline = new wk.DataPipeline.Pipeline('Pipeline')
  Pipeline.Name = 'name'
  Pipeline.PipelineObjects.push(AWSDataPipelinePipelineObjects)
  t.add(Pipeline)

  it('should be able to add a DataPipeline to the template', () => {
    t.Resources['Pipeline'].WKResourceType.should.equal('AWS::DataPipeline::Pipeline')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
