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

```javascript
```

```json

```

# Features

## CloudFormation Resource support

The library uses the CloudFormation Resource Specification to achieve 100% feature parity with CloudFormation. The specification is parsed by Wolkenkratzer at runtime, so adding support for new Cloudformation resources only requires updating the spec file.

## Validation

Wolkenkratzer Template methods perform validation to ensure that valid templates are generated, and syntax errors are caught early in development. The following validation checks are supported:

### Resource validation

TODO

```javascript
```

```json

```

### Template validation

TODO

```javascript
```

```json

```

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

```javascript
```

```json

```

# Template elements

## Resource

Wolkenkratzer exports all of the AWS services as objects which you can import. Each resource for that service has a corresponding method. The method has two arguments: 1) the logical name of the resource, and 2) the properties of the resource. In the following example, an EC2 instance is created with a logical name Instance, and ImageId and InstanceType property values:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template().add(
  EC2.Instance('Instance', {
    ImageId: 'ami-12345678',
    InstanceType: 't2-micro'
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

### Resource Attributes

### Add a CreationPolicy

TODO

```javascript
```

```json

```

### Add a UpdatePolicy

TODO

```javascript
```

```json

```

### Add a DeletionPolicy

TODO

```javascript
```

```json

```

### Add a DependsOn

TODO

```javascript
```

```json

```

### Add a Metadata to a Resource

TODO

```javascript
```

```json

```

## Parameter

Template Parameters are supported. The first parameter of the Parameter function is the logical name of the Parameter, and the second is an object that defines the attributes of the Parameter (i.e Type, Default):

```javascript
const { EC2, Parameter, Ref, Template } = require('wolkenkratzer');

const t = Template()
  .add(
    Parameter('IType', {
      Type: 'String'
    })
  )
  .add(
    EC2.Instance('Instance', {
      ImageId: 'ami-12345678',
      InstanceType: Ref('IType')
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
        "InstanceType": {
          "Ref": "IType"
        }
      }
    }
  },
  "Parameters": {
    "IType": {
      "Type": "String"
    }
  }
}
```

## Output

TODO

```javascript
const { EC2, Output, Ref, Template } = require('wolkenkratzer');

const t = Template()
  .add(
    EC2.Instance('Instance', {
      ImageId: 'ami-12345678',
      InstanceType: 't2-micro'
    })
  )
  .add(
    Output('InstanceOutput', {
      Name: 'InstanceOutput',
      Value: Ref('Instance')
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
  },
  "Outputs": {
    "InstanceOutput": {
      "Name": "InstanceOutput",
      "Value": {
        "Ref": "Instance"
      }
    }
  }
}
```

## Condition

TODO

```javascript
```

```json

```

## Mapping

TODO

```javascript
```

```json

```

## Description

TODO

```javascript
const { EC2, Description, Template } = require('wolkenkratzer');

const t = Template()
  .add(
    EC2.Instance('Instance', {
      ImageId: 'ami-12345678',
      InstanceType: 't2-micro'
    })
  )
  .add(Description('This is a sample description'));

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
  },
  "Description": "This is a sample description"
}
```

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
    InstanceType: 't2-micro'
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
  { ImageId: 'ami-34567890', suffix: 'App' }
];

const t = Template().add(
  instances.map(i =>
    EC2.Instance(`Instance${i.suffix}`, {
      ImageId: i.ImageId,
      InstanceType: 't2-micro'
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

## remove

The `remove()` method will remove any element in the template and returns a new Template object. The method takes a single parameter, which is the logical name of the element in the template as a string:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template()
  .add(
    EC2.Instance('Instance', {
      ImageId: 'ami-12345678',
      InstanceType: 't2-micro'
    })
  )
  .remove('Instance');

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {}
}
```

The method alternatively accepts an element object (Resource, Parameter, Output, etc) as the argument:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const instance = EC2.Instance('Instance', {
  ImageId: 'ami-12345678',
  InstanceType: 't2-micro'
});

const t = Template()
  .add(instance)
  .remove('Instance');

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {}
}
```

## removeDescription

You can call the `removeDescription()` method to remove a template description that was previously added. The method takes no arguments:

```javascript
const { Description, EC2, Template } = require('wolkenkratzer');

const t = Template()
  .add(
    EC2.Instance('Instance', {
      ImageId: 'ami-12345678',
      InstanceType: 't2-micro'
    })
  )
  .add(Description('This is a sample template'))
  .removeDescription();

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

## build

A Wolkenkratzer Template object contains some metadata to make certain internal things possible, but are not valid CloudFormation. Use the `build()` method to return a Javascript object that is a valid CloudFormation template when stringified:

```javascript
const { Description, EC2, Template } = require('wolkenkratzer');

const t = Template()
  .add(
    EC2.Instance('Instance', {
      ImageId: 'ami-12345678',
      InstanceType: 't2-micro'
    })
  )
  .add(Description('This is a sample template'))
  .removeDescription();

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

## merge

The `merge()` method takes a Template object as a parameter and adds the contents to the existing template object:

```javascript
const { EC2, S3, Template } = require('wolkenkratzer');

const t0 = Template().add(
  EC2.Instance('Instance', {
    ImageId: 'ami-12345678',
    InstanceType: 't2-micro'
  })
);

const t1 = Template()
  .add(S3.Bucket('Bucket'))
  .merge(t0);

console.log(JSON.stringify(t1.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "Bucket": {
      "Type": "AWS::S3::Bucket"
    },
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

## import

The `import()` method takes an existing template in as a parameter and adds its contents to the Template object:

```javascript
const { Template } = require('wolkenkratzer');
const { readFile } = require('fs');

readFile('./s3.json', (err, data) => {
  const templ = JSON.parse(data.toString());
  const t = Template().import(templ);
  console.log(JSON.stringify(t.build(), null, 2));
});
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "Bucket": {
      "Type": "AWS::S3::Bucket"
    }
  },
  "Outputs": {
    "Bucket": {
      "Description": "The Bucket S3 Bucket",
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

Any cloudformation template should be importable, but if you run into any issues please open up an issue and report the problem.

## has

The `has()` method checks whether something exists in a Template. The method returns a boolean value, true if the Template contains the item, false if it does not. This is one of the few Template API methods that does not return a Template object.

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template().add(
  EC2.Instance('Instance', {
    ImageId: 'ami-12345678',
    InstanceType: 't2-micro'
  })
);

console.log(t.has('Instance'));
```

```json
true
```

## parameterize

The `parameterize()` method is a convenience method that converts a Resource attribute into a Parameter, and sets the attribute to a Ref of the parameter:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template()
  .add(
    EC2.Instance('MyInstance', {
      ImageId: 'ami-12345678',
      InstanceType: 't2-micro'
    })
  )
  .parameterize('MyInstance.InstanceType');

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "MyInstance": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "ImageId": "ami-12345678",
        "InstanceType": {
          "Ref": "MyInstanceInstanceType"
        }
      }
    }
  },
  "Parameters": {
    "MyInstanceInstanceType": {
      "Type": "String"
    }
  }
}
```

## putOut

Similar to `parameterize()`, the `putOut()` method takes a Resource attribute as a parameter and turns it into an Output:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template()
  .add(
    EC2.Instance('MyInstance', {
      ImageId: 'ami-12345678',
      InstanceType: 't2-micro'
    })
  )
  .putOut('MyInstance.InstanceType');

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "MyInstance": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "ImageId": "ami-12345678",
        "InstanceType": "t2-micro"
      }
    }
  },
  "Outputs": {
    "MyInstanceInstanceType": {
      "Description": "The InstanceType of the MyInstance EC2 Instance",
      "Export": {
        "Name": {
          "Fn::Sub": "${AWS::StackName}-EC2-Instance-MyInstance-InstanceType"
        }
      },
      "Value": {
        "Ref": "MyInstance"
      }
    }
  }
}
```

## set

TODO

```javascript
```

```json

```

## json

The `json()` method returns the template as a CloudFormation-compatible JSON-formatted string:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template().add(
  EC2.Instance('Instance', {
    ImageId: 'ami-12345678',
    InstanceType: 't2-micro'
  })
);
console.log(t.json());
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

## yaml

The `yaml()` method returns the template as a CloudFormation-compatible YAML-formatted string:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template().add(
  EC2.Instance('Instance', {
    ImageId: 'ami-12345678',
    InstanceType: 't2-micro'
  })
);

console.log(t.yaml());
```

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  Instance:
    Type: 'AWS::EC2::Instance'
    Properties:
      ImageId: ami-12345678
      InstanceType: t2-micro
```

# Transform API

TODO

```javascript
```

```json

```

# Examples

Please see the examples/ folder for real and tested examples on how to use the library.

# API Documentation
