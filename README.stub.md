[![npm version](https://badge.fury.io/js/wolkenkratzer.svg)](https://badge.fury.io/js/wolkenkratzer)
[![Build Status](https://travis-ci.org/arminhammer/wolkenkratzer.svg?branch=master)](https://travis-ci.org/arminhammer/wolkenkratzer)
[![Coverage Status](https://coveralls.io/repos/github/arminhammer/wolkenkratzer/badge.svg?branch=master)](https://coveralls.io/github/arminhammer/wolkenkratzer?branch=master)
[![Issue Count](https://codeclimate.com/github/arminhammer/wolkenkratzer/badges/issue_count.svg)](https://codeclimate.com/github/arminhammer/wolkenkratzer)
[![DeepScan Grade](https://deepscan.io/api/projects/1062/branches/2159/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=1062&bid=2159)

# Welcome to Wolkenkratzer!

Wolkenkratzer is a Javascript library that allows you to programmatically generate AWS CloudFormation templates. It can import and modify existing templates, create
templates based off of existing resources in AWS, and output templates in JSON and Yaml.

## CloudFormation Resource support

The library uses the CloudFormation Resource Specification to achieve 100% feature parity with CloudFormation. The specification is parsed by Wolkenkratzer at runtime, so adding support for new Cloudformation resources only requires updating the spec file.

In Wolkenkratzer, Templates are always immutable objects. When you call one of the methods in the Template API, it will return a new and immutable Template object. This allows you to chain multiple API calls together in a row. The following code shows how this works in practice:

```javascript
const { Template, Output, S3, Ref } = require('wolkenkratzer');

const t = Template()
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

Calling `javascript Template()` returns an empty Template object. The line `javascript .add(S3.Bucket('Bucket'))` returns a new Template object with an S3 Bucket, and the `javascript .add(Output('BucketName', { Value: Ref('Bucket') }));`adds an output block.

When adding resources to the template, you can optionally have an Output block and (string) Parameters created automatically in one call:

```javascript
const { Template, S3 } = require('wolkenkratzer');

let t = Template().add(S3.Bucket('Bucket'), {
  Output: true,
  Parameters: ['BucketName'],
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
