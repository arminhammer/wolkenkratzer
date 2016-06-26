'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Table extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::DynamoDB::Table'
    let properties = {
      AttributeDefinitions: new wolkenkratzer.ResourceArray(propertyTypes.DynamoDBAttributeDefinitions, 'Yes', null),
      GlobalSecondaryIndexes: new wolkenkratzer.ResourceArray(propertyTypes.DynamoDBGlobalSecondaryIndexes, 'No', null),
      KeySchema: new wolkenkratzer.ResourceArray(propertyTypes.DynamoDBKeySchema, 'Yes', null),
      LocalSecondaryIndexes: new wolkenkratzer.ResourceArray(propertyTypes.DynamoDBLocalSecondaryIndexes, 'No', null),
      ProvisionedThroughput: new wolkenkratzer.ResourceProperty(propertyTypes.DynamoDBProvisionedThroughput, 'Yes', null),
      StreamSpecification: new wolkenkratzer.ResourceProperty(propertyTypes.DynamoDBTableStreamSpecification, 'No', null),
      TableName: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Table: Table
}