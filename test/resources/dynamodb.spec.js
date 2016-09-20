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

describe('DynamoDB', () => {
  let t = new wk.Template()

  let DynamoDBAttributeDefinitions = new wk.Types.DynamoDBAttributeDefinitions()
  DynamoDBAttributeDefinitions.AttributeName = 'name'
  DynamoDBAttributeDefinitions.AttributeType = 'S'

  let DynamoDBKeySchema = new wk.Types.DynamoDBKeySchema()
  DynamoDBKeySchema.AttributeName = 'name'
  DynamoDBKeySchema.KeyType = 'HASH'

  let DynamoDBProvisionedThroughput = new wk.Types.DynamoDBProvisionedThroughput()
  DynamoDBProvisionedThroughput.ReadCapacityUnits = 5
  DynamoDBProvisionedThroughput.WriteCapacityUnits = 5

  let Table = new wk.DynamoDB.Table('Table')
  Table.AttributeDefinitions.push(DynamoDBAttributeDefinitions)
  Table.KeySchema.push(DynamoDBKeySchema)
  Table.ProvisionedThroughput = DynamoDBProvisionedThroughput
  t.add(Table)

  it('should be able to add a DynamoDB Table to the template', () => {
    t.Resources['Table'].WKResourceType.should.equal('AWS::DynamoDB::Table')
  })

  it ('CloudFormation should validate the template NetworkTest', (done) => {
    util.validateTemplate(t, done)
  })
})
