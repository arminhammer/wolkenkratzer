'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Table extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::DynamoDB::Table'
    let properties = {
      AttributeDefinitions: new resource.ResourceArray(types.DynamoDBAttributeDefinitions, 'Yes', null),
      GlobalSecondaryIndexes: new resource.ResourceArray(types.DynamoDBGlobalSecondaryIndexes, 'No', null),
      KeySchema: new resource.ResourceArray(types.DynamoDBKeySchema, 'Yes', null),
      LocalSecondaryIndexes: new resource.ResourceArray(types.DynamoDBLocalSecondaryIndexes, 'No', null),
      ProvisionedThroughput: new resource.ResourceProperty(types.DynamoDBProvisionedThroughput, 'Yes', null),
      StreamSpecification: new resource.ResourceProperty(types.DynamoDBTableStreamSpecification, 'No', null),
      TableName: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Table: Table
}