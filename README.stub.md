[![npm version](https://badge.fury.io/js/wolkenkratzer.svg)](https://badge.fury.io/js/wolkenkratzer)
[![Build Status](https://travis-ci.org/arminhammer/wolkenkratzer.svg?branch=master)](https://travis-ci.org/arminhammer/wolkenkratzer)
[![Coverage Status](https://coveralls.io/repos/github/arminhammer/wolkenkratzer/badge.svg?branch=master)](https://coveralls.io/github/arminhammer/wolkenkratzer?branch=master)
[![Issue Count](https://codeclimate.com/github/arminhammer/wolkenkratzer/badges/issue_count.svg)](https://codeclimate.com/github/arminhammer/wolkenkratzer)
[![DeepScan Grade](https://deepscan.io/api/projects/1062/branches/2159/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=1062&bid=2159)

# Welcome to Wolkenkratzer!

Wolkenkratzer is a Javascript library that allows you to programmatically generate AWS CloudFormation templates. It can import and modify existing templates, create
templates based off of existing resources in AWS, and output templates in JSON and Yaml.

## Who this is for

TODO

# Features

## CloudFormation Resource support

The library uses the CloudFormation Resource Specification to achieve 100% feature parity with CloudFormation. The specification is parsed by Wolkenkratzer at runtime, so adding support for new Cloudformation resources only requires updating the spec file.

## Validation

Wolkenkratzer Template methods perform validation to ensure that valid templates are generated, and syntax errors are caught early in development. The following validation checks are supported:

### Resource validation

TODO

### Template validation

TODO

## Template manipulation

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

## Import existing templates

Existing templates can be imported as Wolkenkratzer Template objects and manipulated. The following example reads in an existing JSON-formatted template and outputs it as a YAML file:

```javascript
const { Template } = require('wolkenkratzer');
const { readFile } = require('fs');

readFile('./s3.json', (err, data) => {
  const t = Template().import(data.toString());
  console.log(t.yaml());
});
```

At this time only JSON templates are supported with the import() function.

## Generate CloudFormation templates based off of existing AWS resources

TODO

# Template API

## add

The `add()` method adds a new element to the template, and returns a new Template object. You can use the add method to add Resources, Parameters, Outputs, Conditions, the template Description, and Mappings.

You can also use `add()` to add a CreationPolicy, UpdatePolicy, DeletionPolicy, Metadata block to a Resource element.

### Add a Resource

Wolkenkratzer exports all of the AWS services as objects which you can import. Each resource for that service has a corresponding method. The method has two arguments: 1) the logical name of the resource, and 2) the properties of the resource. In the following example, an EC2 instance is created with a logical name Instance, and ImageId and InstanceType property values:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template().add(
  EC2.Instance('Instance', {
    ImageId: 'ami-12345678',
    InstanceType: 't2-micro',
  })
);

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "Instance": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "ImageId": "ami-12345678",
        "InstanceType": "t2-micro"
      }
    }
  }
}
```

The `add()` method also supports arrays of Resources:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const instances = [
  { ImageId: 'ami-12345678', suffix: 'Web' },
  { ImageId: 'ami-23456789', suffix: 'Cache' },
  { ImageId: 'ami-34567890', suffix: 'App' },
];

const t = Template().add(
  instances.map(i =>
    EC2.Instance(`Instance${i.suffix}`, {
      ImageId: i.ImageId,
      InstanceType: 't2-micro',
    })
  )
);

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "InstanceWeb": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "ImageId": "ami-12345678",
        "InstanceType": "t2-micro"
      }
    },
    "InstanceCache": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "ImageId": "ami-23456789",
        "InstanceType": "t2-micro"
      }
    },
    "InstanceApp": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "ImageId": "ami-34567890",
        "InstanceType": "t2-micro"
      }
    }
  }
}
```

#### Resource validation

When you create a resource, Wolkenkratzer will validate whether the resource is valid. If it is invalid, an Error will be thrown. For example, if you try to create an EC2 instance without an ImageId (which is required), the method will fail:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template().add(EC2.Instance('Instance'));

console.log(JSON.stringify(t.build(), null, 2));
```

```bash
SyntaxError: ImageId is required but is not present in Instance
```

### Add a Parameter

TODO

### Add an Output

TODO

### Add a Mapping

TODO

### Add a Condition

TODO

### Add a CreationPolicy

TODO

### Add a UpdatePolicy

TODO

### Add a DeletionPolicy

TODO

### Add a DependsOn

TODO

### Add a Metadata to a Resource

TODO

## remove

TODO

## removeDescription

TODO

## build

TODO

## merge

TODO

## import

TODO

## has

TODO

## parameterize

TODO

## putOut

TODO

## set

TODO

## json

TODO

## yaml

TODO

# Transform API

TODO

# Examples

Please see the examples/ folder for real and tested examples on how to use the library.

# API Documentation
