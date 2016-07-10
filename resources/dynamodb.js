'use strict'

const baseawsobject = require('./../baseawsobject')
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class Table extends baseawsobject.BaseAWSObject {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::DynamoDB::Table'
    let properties = {
      AttributeDefinitions: new ResourceAttributeArray('AttributeDefinitions', types.DynamoDBAttributeDefinitions, 'Yes', null),
      GlobalSecondaryIndexes: new ResourceAttributeArray('GlobalSecondaryIndexes', types.DynamoDBGlobalSecondaryIndexes, 'No', null),
      KeySchema: new ResourceAttributeArray('KeySchema', types.DynamoDBKeySchema, 'Yes', null),
      LocalSecondaryIndexes: new ResourceAttributeArray('LocalSecondaryIndexes', types.DynamoDBLocalSecondaryIndexes, 'No', null),
      ProvisionedThroughput: new ResourceAttribute('ProvisionedThroughput', types.DynamoDBProvisionedThroughput, 'Yes', null),
      StreamSpecification: new ResourceAttribute('StreamSpecification', types.DynamoDBTableStreamSpecification, 'No', null),
      TableName: new ResourceAttribute('TableName', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Table: Table
}
