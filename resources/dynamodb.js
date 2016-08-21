'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module DynamoDB */

/** @memberof module:DynamoDB
*   @extends WKResource
* @property {DynamoDBAttributeDefinitions} AttributeDefinitions Required: Yes. A list of AttributeName and AttributeType objects
            that describe the key schema for the table and indexes.Update requires: Replacement
* @property {DynamoDBGlobalSecondaryIndexes} GlobalSecondaryIndexes Required: No. Global secondary indexes to be created on the table. You can create up to 5 global
            secondary indexes.
            ImportantIf you update a table to include a new global secondary index, AWS CloudFormation initiates
                the index creation and then proceeds with the stack update. AWS CloudFormation doesn't wait for
                the index to complete creation because the backfilling phase can take a long time,
                depending on the size of the table. You cannot use the index or update the table
                until the index's status is ACTIVE. You can track its status by using
                the DynamoDB DescribeTable command.If you add or delete an index during an update, we recommend that you don't
                update any other resources. If your stack fails to update and is rolled back while
                adding a new index, you must manually delete the index.
          Update requires: Updates are not supported. with the following exceptions:If you update only the provisioned throughput values of global secondary
                  indexes, you can update the table without
                    interruption.You can delete or add one global secondary index without interruption. If you do both in the
                  same update (for example, by changing the index's logical ID), the update
                  fails.
* @property {DynamoDBKeySchema} KeySchema Required: Yes. Specifies the attributes that make up the primary key for the table. The
            attributes in the KeySchema property must also be defined in the
              AttributeDefinitions property.Update requires: Replacement
* @property {DynamoDBLocalSecondaryIndexes} LocalSecondaryIndexes Required: No. Local secondary indexes to be created on the table. You can create up to 5 local
            secondary indexes. Each index is scoped to a given hash key value. The size of each hash
            key can be up to 10 gigabytes.Update requires: Replacement
* @property {DynamoDBProvisionedThroughput} ProvisionedThroughput Required: Yes. Throughput for the specified table, consisting of values for ReadCapacityUnits and
            WriteCapacityUnits. For more information about the contents of a provisioned throughput
            structure, see DynamoDB Provisioned
      Throughput.Update requires: No interruption
* @property {DynamoDBTableStreamSpecification} StreamSpecification Required: No. The settings for the DynamoDB table stream, which capture changes to items stored in
            the table.Update requires: No interruption to the table; however, the stream is replaced.
* @property {String} TableName Required: No. A name for the table. If you don't specify a name, AWS CloudFormation generates a unique
            physical ID and uses that ID for the table name. For more information, see Name Type.ImportantIf you specify a name, you cannot do updates that require this resource to be replaced.
You can still do updates that require no or some interruption. If you must replace the resource, specify a new name.Update requires: Replacement
*/
function Table (name, propertiesObject) {
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
    WKResource.call(this, name, resourceType, properties, propertiesObject)
}
Table.prototype = Object.create(WKResource.prototype)

module.exports = {  Table: Table
}
