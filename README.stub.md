[![npm version](https://badge.fury.io/js/wolkenkratzer.svg)](https://badge.fury.io/js/wolkenkratzer)
[![Build Status](https://travis-ci.org/arminhammer/wolkenkratzer.svg?branch=master)](https://travis-ci.org/arminhammer/wolkenkratzer)
[![Coverage Status](https://coveralls.io/repos/github/arminhammer/wolkenkratzer/badge.svg?branch=master)](https://coveralls.io/github/arminhammer/wolkenkratzer?branch=master)
[![Issue Count](https://codeclimate.com/github/arminhammer/wolkenkratzer/badges/issue_count.svg)](https://codeclimate.com/github/arminhammer/wolkenkratzer)
[![DeepScan Grade](https://deepscan.io/api/projects/1062/branches/2159/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=1062&bid=2159)

# Welcome to Wolkenkratzer!

Wolkenkratzer is a Javascript library that allows you to programmatically generate AWS CloudFormation templates. It can import and modify existing templates, create
templates based off of existing resources in AWS, and output templates in JSON and Yaml.

## Who this is for

AWS CloudFormation is a great tool for defining your cloud infrastructure in a declarative manner. This is sufficient for one-off projects, but using a generator library like Wolkenkratzer can be very useful if you need dynamically generated templates and have lots of custom logic.

Relying on Wolkenkratzer's internal validation can also help catch bugs early in development, which can cut down the number of times you need to launch a stack in CloudFormation during testing.

## CloudFormation Resource support

The library uses the CloudFormation Resource Specification to achieve 100% feature parity with CloudFormation. The specification is parsed by Wolkenkratzer at runtime, so adding support for new Cloudformation resources only requires updating the spec file.

## Validation

Wolkenkratzer Template methods perform validation to ensure that valid templates are generated, and syntax errors are caught early in development. The following validation checks are supported:

### Resource validation

When you create a resource, Wolkenkratzer will validate whether the resource is valid. If it is invalid, an Error will be thrown. For example, if you try to create an EC2 instance without an ImageId (which is required), the method will fail:

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template().add(EC2.Instance('Instance'));

console.log(JSON.stringify(t.build(), null, 2));
```

```bash
SyntaxError: ImageId is required but is not present in Instance
```

### Template validation

Template validations that ensure that the template is logically correct and valid are also done. For example, creating a Ref to a Parameter that does not exist in the template throws an error:

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
      InstanceType: Ref('YType')
    })
  );

console.log(JSON.stringify(t.build(), null, 2));
```

```bash
SyntaxError: Could not find {"kind":"Ref","Ref":"YType"}
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

The `Transform` API makes AWS SDK calls to your account to read the state of a given resource, and returns a Wolkenkratzer resource that can be added to a Template. The first parameter is the name of the resource in your account. The second parameter is the SDK service object that will make the API calls (provided by the user so that it can be configured as needed to set proxy, region, etc). The third parameter is the logical name of the resulting resource, but this is optional.

Please note that this API is not yet complete, and not all resources are supported at this time.

```javascript
const { Template, Transform } = require('wolkenkratzer');
const AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
const S3 = new AWS.S3();
const EC2 = new AWS.EC2();

async function buildTemplate() {
  const policy = await Transform.S3.BucketPolicy(
    'arminhammer-bucket',
    S3,
    'Policy'
  );
  const bucket = await Transform.S3.Bucket(
    'arminhammer-test-bucket',
    S3,
    'Bucket'
  );
  const egress = await Transform.EC2.EgressOnlyInternetGateway(
    'eigw-11114ea8cb7e777c5',
    AWS,
    'EgressInternetGateway'
  );
  const t = Template()
    .add(policy)
    .add(bucket)
    .add(egress);
  console.log(JSON.stringify(t.build(), null, 2));
}

buildTemplate();
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "Policy": {
      "Type": "AWS::S3::BucketPolicy",
      "Properties": {
        "Bucket": "arminhammer-cloudtrail",
        "PolicyDocument":
          "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"AWSCloudTrailAclCheck20150319\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":\"cloudtrail.amazonaws.com\"},\"Action\":\"s3:GetBucketAcl\",\"Resource\":\"arn:aws:s3:::arminhammer-bucket\"},{\"Sid\":\"AWSCloudTrailWrite20150319\",\"Effect\":\"Allow\",\"Principal\":{\"Service\":\"cloudtrail.amazonaws.com\"},\"Action\":\"s3:PutObject\",\"Resource\":\"arn:aws:s3:::arminhammer-bucket/AWSLogs/01234567890/*\",\"Condition\":{\"StringEquals\":{\"s3:x-amz-acl\":\"bucket-owner-full-control\"}}}]}"
      }
    },
    "Bucket": {
      "Type": "AWS::S3::Bucket",
      "Properties": {
        "BucketName": "arminhammer-test-bucket",
        "VersioningConfiguration": {
          "Status": "Enabled"
        },
        "CorsConfiguration": {
          "CORSRules": [
            {
              "MaxAge": 3000
            },
            {
              "MaxAge": 3000
            }
          ]
        },
        "LoggingConfiguration": {
          "DestinationBucketName": "logging.bucket.com",
          "LogFilePrefix": "wk/"
        },
        "Tags": [
          {
            "Key": "Key1",
            "Value": "Key1"
          },
          {
            "Key": "Key0",
            "Value": "Value0"
          }
        ],
        "WebsiteConfiguration": {
          "RedirectAllRequestsTo": {
            "HostName": "cache.bucket.com",
            "Protocol": "https"
          },
          "RoutingRules": []
        },
        "AccessControl": {
          "Owner": {
            "DisplayName": "arminhammer",
            "ID":
              "892781d54cee55f628a83c3c111162b42d6183f987d97ccbbc6cbe43095aa0ce"
          },
          "Grants": [
            {
              "Grantee": {
                "DisplayName": "arminhammer",
                "ID":
                  "892781d54cee55f628a83c3c111162b42d6183f987d97ccbbc6cbe43095aa0ce",
                "Type": "CanonicalUser"
              },
              "Permission": "FULL_CONTROL"
            },
            {
              "Grantee": {
                "Type": "Group",
                "URI":
                  "http://acs.amazonaws.com/groups/global/AuthenticatedUsers"
              },
              "Permission": "READ"
            },
            {
              "Grantee": {
                "Type": "Group",
                "URI":
                  "http://acs.amazonaws.com/groups/global/AuthenticatedUsers"
              },
              "Permission": "READ_ACP"
            }
          ]
        }
      }
    },
    "EgressInternetGateway": {
      "Type": "AWS::EC2::EgressOnlyInternetGateway",
      "Properties": {
        "VpcId": "vpc-de45c711"
      }
    }
  }
}
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

CreationPolicies are supported with `add()`. The first parameter is the name of the resource in the template that the CreationPolicy is for, and the second is the body of the policy.

```javascript
const {
  AutoScaling,
  CreationPolicy,
  FnBase64,
  FnGetAZs,
  FnJoin,
  Pseudo,
  Ref,
  Template
} = require('wolkenkratzer');

const t = Template()
  .add(
    AutoScaling.LaunchConfiguration('LaunchConfig', {
      ImageId: 'ami-16d18a7e',
      InstanceType: 't2.micro',
      UserData: FnBase64(
        FnJoin('', [
          '#!/bin/bash -xe\n',
          'yum install -y aws-cfn-bootstrap\n',
          '/opt/aws/bin/cfn-signal -e 0 --stack ',
          Ref(Pseudo.AWS_STACK_NAME),
          ' --resource AutoScalingGroup ',
          ' --region ',
          Ref(Pseudo.AWS_REGION),
          '\n'
        ])
      )
    })
  )
  .add(
    AutoScaling.AutoScalingGroup('AutoScalingGroup', {
      AvailabilityZones: FnGetAZs(),
      DesiredCapacity: '3',
      LaunchConfigurationName: Ref('LaunchConfig'),
      MaxSize: '4',
      MinSize: '1'
    })
  )
  .add(
    CreationPolicy('AutoScalingGroup', {
      ResourceSignal: {
        Count: '3',
        Timeout: 'PT15M'
      }
    })
  );

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "LaunchConfig": {
      "Type": "AWS::AutoScaling::LaunchConfiguration",
      "Properties": {
        "ImageId": "ami-16d18a7e",
        "InstanceType": "t2.micro",
        "UserData": {
          "Fn::Base64": {
            "Fn::Join": [
              "",
              [
                "#!/bin/bash -xe\n",
                "yum install -y aws-cfn-bootstrap\n",
                "/opt/aws/bin/cfn-signal -e 0 --stack ",
                {
                  "Ref": "AWS::StackName"
                },
                " --resource AutoScalingGroup ",
                " --region ",
                {
                  "Ref": "AWS::Region"
                },
                "\n"
              ]
            ]
          }
        }
      }
    },
    "AutoScalingGroup": {
      "Type": "AWS::AutoScaling::AutoScalingGroup",
      "Properties": {
        "AvailabilityZones": {
          "Fn::GetAZs": {
            "Ref": "AWS::Region"
          }
        },
        "DesiredCapacity": "3",
        "LaunchConfigurationName": {
          "Ref": "LaunchConfig"
        },
        "MaxSize": "4",
        "MinSize": "1"
      },
      "CreationPolicy": {
        "ResourceSignal": {
          "Count": "3",
          "Timeout": "PT15M"
        }
      }
    }
  }
}
```

### Add a UpdatePolicy

Similar to CreationPolicies, UpdatePolicy blocks are also supported with `add()`. The first parameter is the name of the resource in the template that the UpdatePolicy is for, and the second is the body of the policy.

```javascript
const {
  AutoScaling,
  FnBase64,
  FnGetAZs,
  FnJoin,
  Pseudo,
  Ref,
  Template,
  UpdatePolicy
} = require('wolkenkratzer');

const t = Template()
  .add(
    AutoScaling.LaunchConfiguration('LaunchConfig', {
      ImageId: 'ami-16d18a7e',
      InstanceType: 't2.micro',
      UserData: FnBase64(
        FnJoin('', [
          '#!/bin/bash -xe\n',
          'yum install -y aws-cfn-bootstrap\n',
          '/opt/aws/bin/cfn-signal -e 0 --stack ',
          Ref(Pseudo.AWS_STACK_NAME),
          ' --resource AutoScalingGroup ',
          ' --region ',
          Ref(Pseudo.AWS_REGION),
          '\n'
        ])
      )
    })
  )
  .add(
    AutoScaling.AutoScalingGroup('AutoScalingGroup', {
      AvailabilityZones: FnGetAZs(),
      DesiredCapacity: '3',
      LaunchConfigurationName: Ref('LaunchConfig'),
      MaxSize: '4',
      MinSize: '1'
    })
  )
  .add(
    UpdatePolicy('AutoScalingGroup', {
      AutoScalingScheduledAction: {
        IgnoreUnmodifiedGroupSizeProperties: 'true'
      },
      AutoScalingRollingUpdate: {
        MinInstancesInService: '1',
        MaxBatchSize: '2',
        PauseTime: 'PT1M',
        WaitOnResourceSignals: 'true'
      }
    })
  );

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "LaunchConfig": {
      "Type": "AWS::AutoScaling::LaunchConfiguration",
      "Properties": {
        "ImageId": "ami-16d18a7e",
        "InstanceType": "t2.micro",
        "UserData": {
          "Fn::Base64": {
            "Fn::Join": [
              "",
              [
                "#!/bin/bash -xe\n",
                "yum install -y aws-cfn-bootstrap\n",
                "/opt/aws/bin/cfn-signal -e 0 --stack ",
                {
                  "Ref": "AWS::StackName"
                },
                " --resource AutoScalingGroup ",
                " --region ",
                {
                  "Ref": "AWS::Region"
                },
                "\n"
              ]
            ]
          }
        }
      }
    },
    "AutoScalingGroup": {
      "Type": "AWS::AutoScaling::AutoScalingGroup",
      "Properties": {
        "AvailabilityZones": {
          "Fn::GetAZs": {
            "Ref": "AWS::Region"
          }
        },
        "DesiredCapacity": "3",
        "LaunchConfigurationName": {
          "Ref": "LaunchConfig"
        },
        "MaxSize": "4",
        "MinSize": "1"
      },
      "UpdatePolicy": {
        "AutoScalingScheduledAction": {
          "IgnoreUnmodifiedGroupSizeProperties": "true"
        },
        "AutoScalingRollingUpdate": {
          "MinInstancesInService": "1",
          "MaxBatchSize": "2",
          "PauseTime": "PT1M",
          "WaitOnResourceSignals": "true"
        }
      }
    }
  }
}
```

### Add a DeletionPolicy

DeletionPolicy blocks are supported with `add()`:

```javascript
const { DeletionPolicy, S3, Template } = require('wolkenkratzer');

const t = Template()
  .add(S3.Bucket('myS3Bucket'))
  .add(DeletionPolicy('myS3Bucket', 'Retain'));

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "myS3Bucket": {
      "Type": "AWS::S3::Bucket",
      "DeletionPolicy": "Retain"
    }
  }
}
```

### Add a DependsOn

DependsOn blocks can be added to any resource with `add()`:

```javascript
const { DependsOn, S3, Template } = require('wolkenkratzer');

const t = Template()
  .add(S3.Bucket('firstBucket'))
  .add(S3.Bucket('secondBucket'))
  .add(DependsOn('secondBucket', 'firstBucket'));

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "firstBucket": {
      "Type": "AWS::S3::Bucket"
    },
    "secondBucket": {
      "Type": "AWS::S3::Bucket",
      "DependsOn": "firstBucket"
    }
  }
}
```

### Add a Metadata to a Resource

Metadata blocks can be added to any Resource with the `add()` method. Please not that the in Wolkenkratzer, the type for a Metadata of a Resource is `ResourceMetadata`, to avoid conflicting with the Template `Metadata` block.

```javascript
const { ResourceMetadata, S3, Template } = require('wolkenkratzer');

const t = Template()
  .add(S3.Bucket('firstBucket'))
  .add(
    ResourceMetadata('firstBucket', {
      Object1: 'Location1',
      Object2: 'Location2'
    })
  );

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "firstBucket": {
      "Type": "AWS::S3::Bucket",
      "Metadata": {
        "Object1": "Location1",
        "Object2": "Location2"
      }
    }
  }
}
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

Template Output blocks are supported and can be added to the Template object with the `add` method. The first parameter is the logical name of the Output block, and the second parameter is an object consisting of the attributes of the Output. Description, Value, Export & Export.Name, and Condition are supported as attribute keys.

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

Template Condition blocks can be added to a Template with the `add()` method. They can then be referenced in Resources:

```javascript
const {
  Condition,
  FnEquals,
  Pseudo,
  Ref,
  S3,
  Template
} = require('wolkenkratzer');

const t = Template()
  .add(Condition('isProd', FnEquals(Ref(Pseudo.AWS_REGION), 'us-east-1')))
  .add(S3.Bucket('Bucket', null, { Condition: 'isProd' }));

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "Bucket": {
      "Type": "AWS::S3::Bucket",
      "Condition": "isProd"
    }
  },
  "Conditions": {
    "isProd": {
      "Fn::Equals": [
        {
          "Ref": "AWS::Region"
        },
        "us-east-1"
      ]
    }
  }
}
```

## Mapping

Template Mapping blocks can be added to a Template with `add()`. The `Mapping()` function takes three arguments. The first one is the top-level mapping group, the second one is the next level, and the third one is the third level with the contents of the map. When putting together a complex Mapping block, you can call `Mapping()` multiple times with the same first and second level keys. The function will continue to add the new blocks to the existing Mapping block.

```javascript
const { Mapping, Template } = require('wolkenkratzer');

const t = Template()
  .add(
    Mapping('RegionMap', 'us-east-1', {
      S3hostedzoneID: 'Z3AQBSTGFYJSTF',
      websiteendpoint: 's3-website-us-east-1.amazonaws.com'
    })
  )
  .add(
    Mapping('RegionMap', 'us-west-1', {
      S3hostedzoneID: 'Z2F56UZL2M1ACD',
      websiteendpoint: 's3-website-us-west-1.amazonaws.com'
    })
  );

console.log(JSON.stringify(t.build(), null, 2));
```

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {},
  "Mappings": {
    "RegionMap": {
      "us-east-1": {
        "S3hostedzoneID": "Z3AQBSTGFYJSTF",
        "websiteendpoint": "s3-website-us-east-1.amazonaws.com"
      },
      "us-west-1": {
        "S3hostedzoneID": "Z2F56UZL2M1ACD",
        "websiteendpoint": "s3-website-us-west-1.amazonaws.com"
      }
    }
  }
}
```

## Description

Template Descriptions are supported. Add one with `add()`, and remove it with `removeDescription()`.

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

The `set()` method allows you to set a new value to an attribute in an element in the Template (Resource, Parameter, etc). The first parameter is a string with the name of the element and the attribute name, separated by a period. The second parameter is the new value of the attribute. The method returns a new Template object.

```javascript
const { EC2, Template } = require('wolkenkratzer');

const t = Template()
  .add(
    EC2.Instance('Instance', {
      ImageId: 'ami-12345678',
      InstanceType: 't2-micro'
    })
  )
  .set('Instance.InstanceType', 't2-nano');

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
        "InstanceType": "t2-nano"
      }
    }
  }
}
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

# Examples

Please see the examples/ folder for real examples on how to use the library. All of the examples are unit tested and verified to run, although not all of them have been tested against AWS CloudFormation recently. If you run into a problem with an example, please open up an issue.

# API Documentation
