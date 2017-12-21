[![npm version](https://badge.fury.io/js/wolkenkratzer.svg)](https://badge.fury.io/js/wolkenkratzer)
[![Build Status](https://travis-ci.org/arminhammer/wolkenkratzer.svg?branch=master)](https://travis-ci.org/arminhammer/wolkenkratzer)
[![Coverage Status](https://coveralls.io/repos/github/arminhammer/wolkenkratzer/badge.svg?branch=master)](https://coveralls.io/github/arminhammer/wolkenkratzer?branch=master)
[![Issue Count](https://codeclimate.com/github/arminhammer/wolkenkratzer/badges/issue_count.svg)](https://codeclimate.com/github/arminhammer/wolkenkratzer)
[![DeepScan Grade](https://deepscan.io/api/projects/1062/branches/2159/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=1062&bid=2159)

# Welcome to Wolkenkratzer!

Wolkenkratzer is a Javascript library that allows you to programmatically generate AWS CloudFormation templates. It can import and modify existing templates, create
templates based off of existing resources in AWS, and output templates in JSON and Yaml.

The library targets 100% feature parity with CloudFormation. This is accomplished by using the CloudFormation Resource Specification.

## Warning

The API for wolkenkratzer is not stable! There were many changes between the 0.6.0 and 0.7.0 releases. The API will continue to unstable until the 1.0 release. If you want to use wolkenkratzer make sure you lock the version you are using in your package.json so that your code doesn't break. The API documentation is currently lacking, but will be improved in the future.

The library targets 100% feature parity with CloudFormation. This is accomplished by scraping the public documentation and using that to build the data model. The scraper and json data model are in the cfn-doc-json-stubs project. Markdown documentation for the data model is available at doc.md.

Wolkenkratzer's API is designed around immutable Template objects, and action functions that take an existing Template object and return a new one, without mutating the existing one. This allows for techniques such as method chaining:

```javascript
const { Template, Output, S3, Ref } = require('wolkenkratzer');

let t = Template()
  .add(S3.Bucket('Bucket'))
  .add(Output('BucketName', { Value: Ref('Bucket') }));

console.log(JSON.stringify(t.build(), null, 2));
```

Results in:

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "Bucket": {
      "Type": "AWS::S3::Bucket",
      "Properties": {}
    }
  },
  "Outputs": {
    "BucketName": {
      "Value": {
        "Ref": "Bucket"
      }
    }
  }
}
```

When adding resources to the template, you can optionally have an Output block and (string) Parameters created automatically in one call:

```javascript
const { Template, S3 } = require('wolkenkratzer');

let t = Template().add(S3.Bucket('Bucket'), {
  Output: true,
  Parameters: ['BucketName']
});

console.log(JSON.stringify(t.build(), null, 2));
```

Result:

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "Bucket": {
      "Type": "AWS::S3::Bucket",
      "Properties": {
        "BucketName": { "Ref": "BucketS3BucketParam" }
      }
    }
  },
  "Parameters": {
    "BucketS3BucketParam": {
      "Type": "String"
    }
  },
  "Outputs": {
    "BucketS3BucketOutput": {
      "Value": {
        "Ref": "Bucket"
      },
      "Export": {
        "Name": {
          "Fn::Sub": "${AWS::StackName}-S3-Bucket-Bucket"
        }
      }
    }
  }
}
```

Wolkenkratzer will also do (rudimentary) template type validation, throwing an error if an incorrect value is provided.

# Examples

Please see the examples/ folder for real and tested examples on how to use the library.

# API
