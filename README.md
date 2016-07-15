# wolkenkratzer

Wolkenkratzer is a Javascript library that helps you programmatically generate CloudFormation templates. The scope of the project is similar 
to the Python library https://github.com/cloudtools/troposphere.

## Installation

  ```$ npm install wolkenkratzer```
  
  It can then be used in any nodejs script with
  
  ```javascript const wk = require('wolkenkratzer') ```

## Usage

Full documentation for the project can be found at https://arminhammer.github.io/wolkenkratzer/.

### General
The core class is Template, which is instantiated with ```new wolkenkratzer.Template()```. Parameters can be added with the ```addParameter()``` method,
and Resources can be added with ```addParameter```. The final template can be retrieved with Template.toJson().

The following script adds a VPNGateway to the template:

```javascript
const wk = require('wolkenkratzer')

let t = new wk.Template()

let vpcCiderParam = new wk.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.addParameter(vpcCiderParam)

let vpnGateway = new wk.EC2.VPNGateway('VPNGateway')
vpnGateway.Type = 'ipsec.1'
t.addResource(vpnGateway)

console.log(t.toJson())
```

This results in the template:

```json
{
  "Parameters": {
    "VPCCIDR": {
      "Type": "String",
      "Default": "10.0.0.0/16"
    }
  },
  "Resources": {
    "VPNGateway": {
      "Type": "AWS::EC2::VPNGateway",
      "Properties": {
        "Type": "ipsec.1"
      }
    }
  },
  "AWSTemplateFormatVersion": "2010-09-09"
}
```

### Resources

#### constructor (name, properties)
 
Resources must be created with a string name parameter, which will be the CloudFormation logical id for the resource:
    
```javascript 
let ec2One = new wk.EC2.Instance('ec2One')
```

Once you create the resource, you can set the attributes using setters. Although you can use the = operator to set new values, wolkenkratzer
 overrides the setters and does typechecking for you.

```javascript 
ec2One.ImageId = 'ami-2a69aa47'
```

You can use the second parameter in case you want to create the resource with a JSON block, instead of setting the attributes one at a time.

An example of creating a resource with one argument (ec2One), and another (ec2Two) with a JSON object:

```javascript
'use strict';

const aws = require('aws-sdk')
const EC2 = new aws.EC2({ region: 'us-east-1' })
const wk = require('wolkenkratzer')

let t = new wk.Template()

let ec2One = new wk.EC2.Instance('ec2One')
ec2One.ImageId = 'ami-2a69aa47'

t.addResource(ec2One)

EC2.describeInstances({}, (err, data) => {
  if(err) {
    console.log(err)
  } else {
    let instance = data.Reservations[0].Instances[0]
    let ec2Two = new wk.EC2.Instance('ec2Two', instance)
    t.addResource(ec2Two)
    console.log(t.toJson())
  }
})
```

Output:

```json
{
  "Resources": {
    "ec2One": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "ImageId": "ami-2a69aa47"
      }
    },
    "ec2Two": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "EbsOptimized": false,
        "ImageId": "ami-466da12b",
        "InstanceType": "t2.micro",
        "KeyName": "arminkeypair",
        "PrivateIpAddress": "172.31.0.119",
        "SecurityGroups": [
          {
            "GroupName": "awseb-e-qyaht32vin-stack-AWSEBSecurityGroup-1LXS554OCJIS3",
            "GroupId": "sg-aba882d0"
          }
        ],
        "SourceDestCheck": true,
        "SubnetId": "subnet-bc1d57cb"
      }
    }
  },
  "AWSTemplateFormatVersion": "2010-09-09"
}
```


#### Resource support
Wolkenkratzer supports all CloudFormation resources. This is made possible by scripts that scrape the CloudFormation documentation pages 
and generate the resource code files. The scrapers can be found in the /scripts folder.


### Intrinsic Functions

Intrinsic functions such as Ref and Fn::GetAtt are supported. Any resource can associate with other elements by using the corresponding 
intrinsic function:

```javascript
const wk = require('wolkenkratzer')
const Ref = wk.Intrinsic.Ref

let t = new wk.Template()

let bucketName = new wk.Parameter('BucketName', {
  'Type': 'String'
})

let bucket = new wk.S3.Bucket('s3Bucket')
bucket.BucketName = new Ref(bucketName)
t.addResource(bucket)

console.log(t.toJson())
```

Intrinsic functions are available from wk.Instrinsic.*.

Convenience methods are available for Resources. For example, you can call .ref():

```javascript
const wk = require('wolkenkratzer')

let t = new wk.Template()

let bucketName = new wk.Parameter('BucketName', {
  'Type': 'String'
})

let bucket = new wk.S3.Bucket('s3Bucket')
bucket.BucketName.ref(bucketName)
t.addResource(bucket)

console.log(t.toJson())
```

### Parameters

Parameters are available at wk.Parameters.

#### constructor

Parameters take two parameters: the first parameter is the logical id of the Parameter, and the other is the object that represents
the attributes of the Paramter:

```javascript
let t = new wk.Template()

let hostedZoneParam = new wk.Parameter('HostedZone', {
  'Type': 'String',
  'Description': 'The DNS name of an existing Amazon Route 53 hosted zone',
  'AllowedPattern': '(?!-)[a-zA-Z0-9-.]{1,63}(?<!-)',
  'ConstraintDescription': 'must be a valid DNS zone name.'
})

t.addParameter(hostedZoneParam)

```

### Mappings

Mappings are available at wk.Mapping.

#### constructor

Mappings take two parameters: the first parameter is the logical id of the Mapping, and the other is the object that represents
the attributes of the Mapping:

```javascript
let region2S3WebsiteSuffixMap = new wk.Mapping('Region2S3WebsiteSuffix', {
  'us-east-1': { 'Suffix': '.s3-website-us-east-1.amazonaws.com' },
  'us-west-1': { 'Suffix': '.s3-website-us-west-1.amazonaws.com' },
  'us-west-2': { 'Suffix': '.s3-website-us-west-2.amazonaws.com' },
  'eu-west-1': { 'Suffix': '.s3-website-eu-west-1.amazonaws.com' },
  'ap-northeast-1': { 'Suffix': '.s3-website-ap-northeast-1.amazonaws.com' },
  'ap-northeast-2': { 'Suffix': '.s3-website-ap-northeast-2.amazonaws.com' },
  'ap-southeast-1': { 'Suffix': '.s3-website-ap-southeast-1.amazonaws.com' },
  'ap-southeast-2': { 'Suffix': '.s3-website-ap-southeast-2.amazonaws.com' },
  'sa-east-1': { 'Suffix': '.s3-website-sa-east-1.amazonaws.com' },
  'cn-north-1': { 'Suffix': '.s3-website.cn-north-1.amazonaws.com.cn' },
  'eu-central-1': { 'Suffix': '.s3-website-eu-central-1.amazonaws.com' }
  }
)

t.addMapping(region2S3WebsiteSuffixMap)
```

### Output

Outputs are available at wk.Output.

#### constructor

Output take two parameters: the first parameter is the logical id of the Output, and the other is the object that represents
the attributes of the Mapping:

```javascript
t.addOutput(new wk.Output('WebsiteURL', {
  'Value': new wk.Intrinsic.FnJoin('', ['http://', new Ref(websiteDNSName)]),
  'Description': 'The URL of the newly created website'
}))
```

### Examples

More examples can be found in the /examples folder.

#### S3 CloudFront template example

```javascript
/**
 * Created by arming on 7/6/16.
 */
'use strict'

const wk = require('wolkenkratzer')
const Ref = wk.Intrinsic.Ref

let t = new wk.Template()

t.addDescription('AWS CloudFormation Sample Template S3_Website_With_CloudFront_Distribution: Sample template showing how to create a website with a custom DNS name, hosted on Amazon S3 and served via Amazone CloudFront. It assumes you already have a Hosted Zone registered with Amazon Route 53. **WARNING** This template creates an Amazon Route 53 DNS record, an S3 bucket and a CloudFront distribution. You will be billed for the AWS resources used if you create a stack from this template.')

let hostedZoneParam = new wk.Parameter('HostedZone', {
  'Type': 'String',
  'Description': 'The DNS name of an existing Amazon Route 53 hosted zone',
  'AllowedPattern': '(?!-)[a-zA-Z0-9-.]{1,63}(?<!-)',
  'ConstraintDescription': 'must be a valid DNS zone name.'
})

t.addParameter(hostedZoneParam)

let region2S3WebsiteSuffixMap = new wk.Mapping('Region2S3WebsiteSuffix', {
  'us-east-1': { 'Suffix': '.s3-website-us-east-1.amazonaws.com' },
  'us-west-1': { 'Suffix': '.s3-website-us-west-1.amazonaws.com' },
  'us-west-2': { 'Suffix': '.s3-website-us-west-2.amazonaws.com' },
  'eu-west-1': { 'Suffix': '.s3-website-eu-west-1.amazonaws.com' },
  'ap-northeast-1': { 'Suffix': '.s3-website-ap-northeast-1.amazonaws.com' },
  'ap-northeast-2': { 'Suffix': '.s3-website-ap-northeast-2.amazonaws.com' },
  'ap-southeast-1': { 'Suffix': '.s3-website-ap-southeast-1.amazonaws.com' },
  'ap-southeast-2': { 'Suffix': '.s3-website-ap-southeast-2.amazonaws.com' },
  'sa-east-1': { 'Suffix': '.s3-website-sa-east-1.amazonaws.com' },
  'cn-north-1': { 'Suffix': '.s3-website.cn-north-1.amazonaws.com.cn' },
  'eu-central-1': { 'Suffix': '.s3-website-eu-central-1.amazonaws.com' }
}
)

t.addMapping(region2S3WebsiteSuffixMap)

let s3BucketForWebsiteContent = new wk.S3.Bucket('S3BucketForWebsiteContent')
s3BucketForWebsiteContent.AccessControl = 'PublicRead'
let webConfig = new wk.Types.AmazonS3WebsiteConfigurationProperty()
webConfig.IndexDocument = 'index.html'
webConfig.ErrorDocument = 'error.html'
s3BucketForWebsiteContent.WebsiteConfiguration = webConfig

t.addResource(s3BucketForWebsiteContent)

let websiteDNSName = new wk.Route53.RecordSet('WebsiteDNSName')
websiteDNSName.Type = 'CNAME'
websiteDNSName.TTL = '900'
websiteDNSName.Comment = 'CNAME redirect custom name to CloudFront distribution'
websiteDNSName.Name.join('', [ new Ref(wk.Pseudo.AWS_STACK_NAME), new Ref(wk.Pseudo.AWS_ACCOUNT_ID), '.', new Ref(wk.Pseudo.AWS_REGION), '.', new Ref(hostedZoneParam) ])
websiteDNSName.ResourceRecords.join('', [ 'http://', new wk.Intrinsic.FnGetAtt('WebsiteCDN', 'DomainName') ])
websiteDNSName.HostedZoneName.join('', [ new Ref(hostedZoneParam), '.' ])
t.addResource(websiteDNSName)

let websiteCDN = new wk.CloudFront.Distribution('WebsiteCDN')

let distConfigOrigin = new wk.Types.CloudFrontDistributionConfigOrigin()
distConfigOrigin.DomainName.join('', [ new Ref(s3BucketForWebsiteContent),
  new wk.Intrinsic.FnFindInMap('Region2S3WebsiteSuffix', new Ref(wk.Pseudo.AWS_REGION), 'Suffix') ])
distConfigOrigin.Id = 'only-origin'
let customOriginConfig = new wk.Types.CloudFrontDistributionConfigOriginCustomOrigin()
customOriginConfig.HTTPPort = '80'
customOriginConfig.HTTPSPort = '443'
customOriginConfig.OriginProtocolPolicy = 'http-only'
distConfigOrigin.CustomOriginConfig = customOriginConfig

let forwardedValues = new wk.Types.CloudFrontForwardedValues()
forwardedValues.QueryString = true

let defaultCacheBehavior = new wk.Types.CloudFrontDefaultCacheBehavior()
defaultCacheBehavior.ForwardedValues = forwardedValues
defaultCacheBehavior.TargetOriginId = 'only-origin'
defaultCacheBehavior.ViewerProtocolPolicy = 'allow-all'

let distConfig = new wk.Types.CloudFrontDistributionConfig()
distConfig.Comment = 'CDN for S3-backed website'
distConfig.Aliases.join('', [ new Ref(wk.Pseudo.AWS_STACK_NAME), new Ref(wk.Pseudo.AWS_ACCOUNT_ID), '.', new Ref(wk.Pseudo.AWS_REGION), '.', new Ref(hostedZoneParam) ])

distConfig.Origins.push(distConfigOrigin)
distConfig.Enabled = true
distConfig.DefaultRootObject = 'index.html'
distConfig.DefaultCacheBehavior = defaultCacheBehavior

websiteCDN.DistributionConfig = distConfig

t.addResource(websiteCDN)

t.addOutput(new wk.Output('WebsiteURL', {
  'Value': new wk.Intrinsic.FnJoin('', ['http://', new Ref(websiteDNSName)]),
  'Description': 'The URL of the newly created website'
}))

t.addOutput(new wk.Output('BucketName', {
  'Value': new Ref(s3BucketForWebsiteContent),
  'Description': 'Name of S3 bucket to hold website content'
}))

console.log(t.toJson())
```

Output:

```json
{
  "Description": "AWS CloudFormation Sample Template S3_Website_With_CloudFront_Distribution: Sample template showing how to create a website with a custom DNS name, hosted on Amazon S3 and served via Amazone CloudFront. It assumes you already have a Hosted Zone registered with Amazon Route 53. **WARNING** This template creates an Amazon Route 53 DNS record, an S3 bucket and a CloudFront distribution. You will be billed for the AWS resources used if you create a stack from this template.",
  "Mappings": {
    "Region2S3WebsiteSuffix": {
      "us-east-1": {
        "Suffix": ".s3-website-us-east-1.amazonaws.com"
      },
      "us-west-1": {
        "Suffix": ".s3-website-us-west-1.amazonaws.com"
      },
      "us-west-2": {
        "Suffix": ".s3-website-us-west-2.amazonaws.com"
      },
      "eu-west-1": {
        "Suffix": ".s3-website-eu-west-1.amazonaws.com"
      },
      "ap-northeast-1": {
        "Suffix": ".s3-website-ap-northeast-1.amazonaws.com"
      },
      "ap-northeast-2": {
        "Suffix": ".s3-website-ap-northeast-2.amazonaws.com"
      },
      "ap-southeast-1": {
        "Suffix": ".s3-website-ap-southeast-1.amazonaws.com"
      },
      "ap-southeast-2": {
        "Suffix": ".s3-website-ap-southeast-2.amazonaws.com"
      },
      "sa-east-1": {
        "Suffix": ".s3-website-sa-east-1.amazonaws.com"
      },
      "cn-north-1": {
        "Suffix": ".s3-website.cn-north-1.amazonaws.com.cn"
      },
      "eu-central-1": {
        "Suffix": ".s3-website-eu-central-1.amazonaws.com"
      }
    }
  },
  "Outputs": {
    "WebsiteURL": {
      "Description": "The URL of the newly created website",
      "Value": {
        "Fn::Join": [
          "",
          [
            "http://",
            {
              "Ref": "WebsiteDNSName"
            }
          ]
        ]
      }
    },
    "BucketName": {
      "Description": "Name of S3 bucket to hold website content",
      "Value": {
        "Ref": "S3BucketForWebsiteContent"
      }
    }
  },
  "Parameters": {
    "HostedZone": {
      "Type": "String",
      "AllowedPattern": "(?!-)[a-zA-Z0-9-.]{1,63}(?<!-)",
      "ConstraintDescription": "must be a valid DNS zone name.",
      "Description": "The DNS name of an existing Amazon Route 53 hosted zone"
    }
  },
  "Resources": {
    "S3BucketForWebsiteContent": {
      "Type": "AWS::S3::Bucket",
      "Properties": {
        "AccessControl": "PublicRead",
        "WebsiteConfiguration": {
          "ErrorDocument": "error.html",
          "IndexDocument": "index.html"
        }
      }
    },
    "WebsiteDNSName": {
      "Type": "AWS::Route53::RecordSet",
      "Properties": {
        "Comment": "CNAME redirect custom name to CloudFront distribution",
        "HostedZoneName": {
          "Fn::Join": [
            "",
            [
              {
                "Ref": "HostedZone"
              },
              "."
            ]
          ]
        },
        "Name": {
          "Fn::Join": [
            "",
            [
              {
                "Ref": "AWS::StackName"
              },
              {
                "Ref": "AWS::AccountId"
              },
              ".",
              {
                "Ref": "AWS::Region"
              },
              ".",
              {
                "Ref": "HostedZone"
              }
            ]
          ]
        },
        "ResourceRecords": [
          {
            "Fn::Join": [
              "",
              [
                "http://",
                {
                  "Fn::GetAtt": [
                    "WebsiteCDN",
                    "DomainName"
                  ]
                }
              ]
            ]
          }
        ],
        "TTL": "900",
        "Type": "CNAME"
      }
    },
    "WebsiteCDN": {
      "Type": "AWS::CloudFront::Distribution",
      "Properties": {
        "DistributionConfig": {
          "Aliases": [
            {
              "Fn::Join": [
                "",
                [
                  {
                    "Ref": "AWS::StackName"
                  },
                  {
                    "Ref": "AWS::AccountId"
                  },
                  ".",
                  {
                    "Ref": "AWS::Region"
                  },
                  ".",
                  {
                    "Ref": "HostedZone"
                  }
                ]
              ]
            }
          ],
          "Comment": "CDN for S3-backed website",
          "DefaultCacheBehavior": {
            "ForwardedValues": {
              "QueryString": true
            },
            "TargetOriginId": "only-origin",
            "ViewerProtocolPolicy": "allow-all"
          },
          "DefaultRootObject": "index.html",
          "Enabled": true,
          "Origins": [
            {
              "CustomOriginConfig": {
                "HTTPPort": "80",
                "HTTPSPort": "443",
                "OriginProtocolPolicy": "http-only"
              },
              "DomainName": {
                "Fn::Join": [
                  "",
                  [
                    {
                      "Ref": "S3BucketForWebsiteContent"
                    },
                    {
                      "Fn::FindInMap": [
                        "Region2S3WebsiteSuffix",
                        {
                          "Ref": "AWS::Region"
                        },
                        "Suffix"
                      ]
                    }
                  ]
                ]
              },
              "Id": "only-origin"
            }
          ]
        }
      }
    }
  },
  "AWSTemplateFormatVersion": "2010-09-09"
}
```

#### Wordpress single instance site

```javascript
'use strict'

const wk = require('wolkenkratzer')

let t = new wk.Template()

t.addDescription('AWS CloudFormation Sample Template WordPress_Single_Instance: WordPress is web software you can use to create a beautiful website or blog. This template installs WordPress with a local MySQL database for storage. It demonstrates using the AWS CloudFormation bootstrap scripts to deploy WordPress. **WARNING** This template creates an Amazon EC2 instance. You will be billed for the AWS resources used if you create a stack from this template.')

let keyNameParam = new wk.Parameter('KeyName', {
  'Type': 'AWS::EC2::KeyPair::KeyName',
  'ConstraintDescription': 'must be the name of an existing EC2 KeyPair.',
  'Description': 'Name of an existing EC2 KeyPair to enable SSH access to the instances'
})
t.addParameter(keyNameParam)

let instanceTypeParam = new wk.Parameter('InstanceType', {
  'Description': 'WebServer EC2 instance type',
  'Type': 'String',
  'Default': 't2.small',
  'AllowedValues': [ 't1.micro', 't2.nano', 't2.micro', 't2.small', 't2.medium', 't2.large', 'm1.small', 'm1.medium', 'm1.large', 'm1.xlarge', 'm2.xlarge', 'm2.2xlarge', 'm2.4xlarge', 'm3.medium', 'm3.large', 'm3.xlarge', 'm3.2xlarge', 'm4.large', 'm4.xlarge', 'm4.2xlarge', 'm4.4xlarge', 'm4.10xlarge', 'c1.medium', 'c1.xlarge', 'c3.large', 'c3.xlarge', 'c3.2xlarge', 'c3.4xlarge', 'c3.8xlarge', 'c4.large', 'c4.xlarge', 'c4.2xlarge', 'c4.4xlarge', 'c4.8xlarge', 'g2.2xlarge', 'g2.8xlarge', 'r3.large', 'r3.xlarge', 'r3.2xlarge', 'r3.4xlarge', 'r3.8xlarge', 'i2.xlarge', 'i2.2xlarge', 'i2.4xlarge', 'i2.8xlarge', 'd2.xlarge', 'd2.2xlarge', 'd2.4xlarge', 'd2.8xlarge', 'hi1.4xlarge', 'hs1.8xlarge', 'cr1.8xlarge', 'cc2.8xlarge', 'cg1.4xlarge' ],
  'ConstraintDescription': 'must be a valid EC2 instance type.'
})
t.addParameter(instanceTypeParam)

let sshLocationParam = new wk.Parameter('SSHLocation', {
  'Description': 'The IP address range that can be used to SSH to the EC2 instances',
  'Type': 'String',
  'MinLength': '9',
  'MaxLength': '18',
  'Default': '0.0.0.0/0',
  'AllowedPattern': '(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})/(\\d{1,2})',
  'ConstraintDescription': 'must be a valid IP CIDR range of the form x.x.x.x/x.'
})
t.addParameter(sshLocationParam)

let dbNameParam = new wk.Parameter('DBName', {
  'Default': 'wordpressdb',
  'Description': 'The WordPress database name',
  'Type': 'String',
  'MinLength': '1',
  'MaxLength': '64',
  'AllowedPattern': '[a-zA-Z][a-zA-Z0-9]*',
  'ConstraintDescription': 'must begin with a letter and contain only alphanumeric characters.'
})
t.addParameter(dbNameParam)

let dbUserParam = new wk.Parameter('DBUser', {
  'NoEcho': 'true',
  'Description': 'The WordPress database admin account username',
  'Type': 'String',
  'MinLength': '1',
  'MaxLength': '16',
  'AllowedPattern': '[a-zA-Z][a-zA-Z0-9]*',
  'ConstraintDescription': 'must begin with a letter and contain only alphanumeric characters.'
})
t.addParameter(dbUserParam)

let dbPasswordParam = new wk.Parameter('DBPassword', {
  'NoEcho': 'true',
  'Description': 'The WordPress database admin account password',
  'Type': 'String',
  'MinLength': '8',
  'MaxLength': '41',
  'AllowedPattern': '[a-zA-Z0-9]*',
  'ConstraintDescription': 'must contain only alphanumeric characters.'
})
t.addParameter(dbPasswordParam)

let dbRootPasswordParam = new wk.Parameter('DBRootPassword', {
  'NoEcho': 'true',
  'Description': 'MySQL root password',
  'Type': 'String',
  'MinLength': '8',
  'MaxLength': '41',
  'AllowedPattern': '[a-zA-Z0-9]*',
  'ConstraintDescription': 'must contain only alphanumeric characters.'
})
t.addParameter(dbRootPasswordParam)

let webServerSecurityGroup = new wk.EC2.SecurityGroup('WebServerSecurityGroup')
t.addResource(webServerSecurityGroup)
webServerSecurityGroup.GroupDescription = 'Enable HTTP access via port 80 locked down to the load balancer + SSH access'

let rule1 = new wk.Types.EC2SecurityGroupRulePropertyType({'IpProtocol': 'tcp', 'FromPort': 80, 'ToPort': 80, 'CidrIp': '0.0.0.0/0'})
webServerSecurityGroup.SecurityGroupIngress.push(rule1)

let rule2 = new wk.Types.EC2SecurityGroupRulePropertyType()
rule2.IpProtocol = 'tcp'
rule2.FromPort = 22
rule2.ToPort = 22
rule2.CidrIp.ref(sshLocationParam)
webServerSecurityGroup.SecurityGroupIngress.push(rule2)

t.addMapping('AWSInstanceType2Arch', {
  't1.micro': { 'Arch': 'PV64' },
  't2.nano': { 'Arch': 'HVM64' },
  't2.micro': { 'Arch': 'HVM64' },
  't2.small': { 'Arch': 'HVM64' },
  't2.medium': { 'Arch': 'HVM64' },
  't2.large': { 'Arch': 'HVM64' },
  'm1.small': { 'Arch': 'PV64' },
  'm1.medium': { 'Arch': 'PV64' },
  'm1.large': { 'Arch': 'PV64' },
  'm1.xlarge': { 'Arch': 'PV64' },
  'm2.xlarge': { 'Arch': 'PV64' },
  'm2.2xlarge': { 'Arch': 'PV64' },
  'm2.4xlarge': { 'Arch': 'PV64' },
  'm3.medium': { 'Arch': 'HVM64' },
  'm3.large': { 'Arch': 'HVM64' },
  'm3.xlarge': { 'Arch': 'HVM64' },
  'm3.2xlarge': { 'Arch': 'HVM64' },
  'm4.large': { 'Arch': 'HVM64' },
  'm4.xlarge': { 'Arch': 'HVM64' },
  'm4.2xlarge': { 'Arch': 'HVM64' },
  'm4.4xlarge': { 'Arch': 'HVM64' },
  'm4.10xlarge': { 'Arch': 'HVM64' },
  'c1.medium': { 'Arch': 'PV64' },
  'c1.xlarge': { 'Arch': 'PV64' },
  'c3.large': { 'Arch': 'HVM64' },
  'c3.xlarge': { 'Arch': 'HVM64' },
  'c3.2xlarge': { 'Arch': 'HVM64' },
  'c3.4xlarge': { 'Arch': 'HVM64' },
  'c3.8xlarge': { 'Arch': 'HVM64' },
  'c4.large': { 'Arch': 'HVM64' },
  'c4.xlarge': { 'Arch': 'HVM64' },
  'c4.2xlarge': { 'Arch': 'HVM64' },
  'c4.4xlarge': { 'Arch': 'HVM64' },
  'c4.8xlarge': { 'Arch': 'HVM64' },
  'g2.2xlarge': { 'Arch': 'HVMG2' },
  'g2.8xlarge': { 'Arch': 'HVMG2' },
  'r3.large': { 'Arch': 'HVM64' },
  'r3.xlarge': { 'Arch': 'HVM64' },
  'r3.2xlarge': { 'Arch': 'HVM64' },
  'r3.4xlarge': { 'Arch': 'HVM64' },
  'r3.8xlarge': { 'Arch': 'HVM64' },
  'i2.xlarge': { 'Arch': 'HVM64' },
  'i2.2xlarge': { 'Arch': 'HVM64' },
  'i2.4xlarge': { 'Arch': 'HVM64' },
  'i2.8xlarge': { 'Arch': 'HVM64' },
  'd2.xlarge': { 'Arch': 'HVM64' },
  'd2.2xlarge': { 'Arch': 'HVM64' },
  'd2.4xlarge': { 'Arch': 'HVM64' },
  'd2.8xlarge': { 'Arch': 'HVM64' },
  'hi1.4xlarge': { 'Arch': 'HVM64' },
  'hs1.8xlarge': { 'Arch': 'HVM64' },
  'cr1.8xlarge': { 'Arch': 'HVM64' },
  'cc2.8xlarge': { 'Arch': 'HVM64' }
})

t.addMapping('AWSInstanceType2NATArch', {
  't1.micro': { 'Arch': 'NATPV64' },
  't2.nano': { 'Arch': 'NATHVM64' },
  't2.micro': { 'Arch': 'NATHVM64' },
  't2.small': { 'Arch': 'NATHVM64' },
  't2.medium': { 'Arch': 'NATHVM64' },
  't2.large': { 'Arch': 'NATHVM64' },
  'm1.small': { 'Arch': 'NATPV64' },
  'm1.medium': { 'Arch': 'NATPV64' },
  'm1.large': { 'Arch': 'NATPV64' },
  'm1.xlarge': { 'Arch': 'NATPV64' },
  'm2.xlarge': { 'Arch': 'NATPV64' },
  'm2.2xlarge': { 'Arch': 'NATPV64' },
  'm2.4xlarge': { 'Arch': 'NATPV64' },
  'm3.medium': { 'Arch': 'NATHVM64' },
  'm3.large': { 'Arch': 'NATHVM64' },
  'm3.xlarge': { 'Arch': 'NATHVM64' },
  'm3.2xlarge': { 'Arch': 'NATHVM64' },
  'm4.large': { 'Arch': 'NATHVM64' },
  'm4.xlarge': { 'Arch': 'NATHVM64' },
  'm4.2xlarge': { 'Arch': 'NATHVM64' },
  'm4.4xlarge': { 'Arch': 'NATHVM64' },
  'm4.10xlarge': { 'Arch': 'NATHVM64' },
  'c1.medium': { 'Arch': 'NATPV64' },
  'c1.xlarge': { 'Arch': 'NATPV64' },
  'c3.large': { 'Arch': 'NATHVM64' },
  'c3.xlarge': { 'Arch': 'NATHVM64' },
  'c3.2xlarge': { 'Arch': 'NATHVM64' },
  'c3.4xlarge': { 'Arch': 'NATHVM64' },
  'c3.8xlarge': { 'Arch': 'NATHVM64' },
  'c4.large': { 'Arch': 'NATHVM64' },
  'c4.xlarge': { 'Arch': 'NATHVM64' },
  'c4.2xlarge': { 'Arch': 'NATHVM64' },
  'c4.4xlarge': { 'Arch': 'NATHVM64' },
  'c4.8xlarge': { 'Arch': 'NATHVM64' },
  'g2.2xlarge': { 'Arch': 'NATHVMG2' },
  'g2.8xlarge': { 'Arch': 'NATHVMG2' },
  'r3.large': { 'Arch': 'NATHVM64' },
  'r3.xlarge': { 'Arch': 'NATHVM64' },
  'r3.2xlarge': { 'Arch': 'NATHVM64' },
  'r3.4xlarge': { 'Arch': 'NATHVM64' },
  'r3.8xlarge': { 'Arch': 'NATHVM64' },
  'i2.xlarge': { 'Arch': 'NATHVM64' },
  'i2.2xlarge': { 'Arch': 'NATHVM64' },
  'i2.4xlarge': { 'Arch': 'NATHVM64' },
  'i2.8xlarge': { 'Arch': 'NATHVM64' },
  'd2.xlarge': { 'Arch': 'NATHVM64' },
  'd2.2xlarge': { 'Arch': 'NATHVM64' },
  'd2.4xlarge': { 'Arch': 'NATHVM64' },
  'd2.8xlarge': { 'Arch': 'NATHVM64' },
  'hi1.4xlarge': { 'Arch': 'NATHVM64' },
  'hs1.8xlarge': { 'Arch': 'NATHVM64' },
  'cr1.8xlarge': { 'Arch': 'NATHVM64' },
  'cc2.8xlarge': { 'Arch': 'NATHVM64' }
})

t.addMapping('AWSRegionArch2AMI', {
  'us-east-1': {'PV64': 'ami-2a69aa47', 'HVM64': 'ami-6869aa05', 'HVMG2': 'ami-2e5e9c43'},
  'us-west-2': {'PV64': 'ami-7f77b31f', 'HVM64': 'ami-7172b611', 'HVMG2': 'ami-83b770e3'},
  'us-west-1': {'PV64': 'ami-a2490dc2', 'HVM64': 'ami-31490d51', 'HVMG2': 'ami-fd76329d'},
  'eu-west-1': {'PV64': 'ami-4cdd453f', 'HVM64': 'ami-f9dd458a', 'HVMG2': 'ami-b9bd25ca'},
  'eu-central-1': {'PV64': 'ami-6527cf0a', 'HVM64': 'ami-ea26ce85', 'HVMG2': 'ami-7f04ec10'},
  'ap-northeast-1': {'PV64': 'ami-3e42b65f', 'HVM64': 'ami-374db956', 'HVMG2': 'ami-e0ee1981'},
  'ap-northeast-2': {'PV64': 'NOT_SUPPORTED', 'HVM64': 'ami-2b408b45', 'HVMG2': 'NOT_SUPPORTED'},
  'ap-southeast-1': {'PV64': 'ami-df9e4cbc', 'HVM64': 'ami-a59b49c6', 'HVMG2': 'ami-0cb5676f'},
  'ap-southeast-2': {'PV64': 'ami-63351d00', 'HVM64': 'ami-dc361ebf', 'HVMG2': 'ami-a71c34c4'},
  'sa-east-1': {'PV64': 'ami-1ad34676', 'HVM64': 'ami-6dd04501', 'HVMG2': 'NOT_SUPPORTED'},
  'cn-north-1': {'PV64': 'ami-77559f1a', 'HVM64': 'ami-8e6aa0e3', 'HVMG2': 'NOT_SUPPORTED'}
})

let webServer = new wk.EC2.Instance('WebServer')
webServer.ImageId.findInMap('AWSRegionArch2AMI', { 'Ref': 'AWS::Region' }, { 'Fn::FindInMap': [ 'AWSInstanceType2Arch', { 'Ref': 'InstanceType' }, 'Arch' ] })
t.addResource(webServer)

webServer.InstanceType.ref(instanceTypeParam)
webServer.SecurityGroups.push(new wk.Intrinsic.Ref(webServerSecurityGroup))
webServer.KeyName.ref(keyNameParam)
webServer.UserData.base64({ 'Fn::Join': ['', [
  '#!/bin/bash -xe\n',
  'yum update -y aws-cfn-bootstrap\n',

  '/opt/aws/bin/cfn-init -v ',
  '         --stack ', { 'Ref': 'AWS::StackName' },
  '         --resource WebServer ',
  '         --configsets wordpress_install ',
  '         --region ', { 'Ref': 'AWS::Region' }, '\n',

  '/opt/aws/bin/cfn-signal -e $? ',
  '         --stack ', { 'Ref': 'AWS::StackName' },
  '         --resource WebServer ',
  '         --region ', { 'Ref': 'AWS::Region' }, '\n'
]]})

let webSiteUrlOutput = new wk.Output('WebsiteURL', {
  'Value': { 'Fn::Join': ['', [ 'http://', { 'Fn::GetAtt': [ 'WebServer', 'PublicDnsName' ] }, '/wordpress' ] ] },
  'Description': 'WordPress Website'
})

let set_mysql_root_password = new wk.Init.Command('01_set_mysql_root_password')
set_mysql_root_password.command = { 'Fn::Join': [ '', [ 'mysqladmin -u root password \'', { 'Ref': 'DBRootPassword' }, '\'' ] ] }
set_mysql_root_password.test = { 'Fn::Join': [ '', [ '$(mysql ', { 'Ref': 'DBName' }, ' -u root --password=\'', { 'Ref': 'DBRootPassword' }, '\' >/dev/null 2>&1 </dev/null); (( $? != 0 ))' ] ] }

let create_database = new wk.Init.Command('02_create_database')
create_database.command = { 'Fn::Join': [ '', [ 'mysql -u root --password=\'', { 'Ref': 'DBRootPassword' }, '\' < /tmp/setup.mysql' ] ] }
create_database.test = { 'Fn::Join': [ '', [ '$(mysql ', { 'Ref': 'DBName' }, ' -u root --password=\'', { 'Ref': 'DBRootPassword' }, '\' >/dev/null 2>&1 </dev/null); (( $? != 0 ))' ] ] }

let configure_wordpressCMD = new wk.Init.Command('03_configure_wordpress')
configure_wordpressCMD.command = '/tmp/create-wp-config'
configure_wordpressCMD.cwd = '/var/www/html/wordpress'

let configure_wordpress = new wk.Init.Config('configure_wordpress')
configure_wordpress.add(set_mysql_root_password)
configure_wordpress.add(create_database)
configure_wordpress.add(configure_wordpressCMD)

webServer.addConfig(configure_wordpress)

let cfnHup = new wk.Init.File('/etc/cfn/cfn-hup.conf')
cfnHup.content = { 'Fn::Join': ['', [ '[main]\n', 'stack=', { 'Ref': 'AWS::StackId' }, '\n', 'region=', { 'Ref': 'AWS::Region' }, '\n' ]] }
cfnHup.mode = '000400'
cfnHup.owner = 'root'
cfnHup.group = 'root'

let cfnAutoReloader = new wk.Init.File('/etc/cfn/hooks.d/cfn-auto-reloader.conf')
cfnAutoReloader.content = { 'Fn::Join': [ '', [ '[cfn-auto-reloader-hook]\n', 'triggers=post.update\n', 'path=Resources.WebServer.Metadata.AWS::CloudFormation::Init\n', 'action=/opt/aws/bin/cfn-init -v ', '         --stack ', { 'Ref': 'AWS::StackName' }, '         --resource WebServer ', '         --configsets wordpress_install ', '         --region ', { 'Ref': 'AWS::Region' }, '\n' ] ] }
cfnAutoReloader.mode = '000400'
cfnAutoReloader.owner = 'root'
cfnAutoReloader.group = 'root'

let cfnHupService = new wk.Init.Service('cfn-hup')
cfnHupService.enabled = 'true'
cfnHupService.ensureRunning = 'true'
cfnHupService.files = ['/etc/cfn/cfn-hup.conf', '/etc/cfn/hooks.d/cfn-auto-reloader.conf']

let install_cfn = new wk.Init.Config('install_cfn')
install_cfn.add(cfnHup)
install_cfn.add(cfnAutoReloader)
install_cfn.add(cfnHupService)
webServer.addConfig(install_cfn)

let createWPConfig = new wk.Init.File('/tmp/create-wp-config')
createWPConfig.content = { 'Fn::Join': [ '', [ '#!/bin/bash -xe\n', 'cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php\n', 'sed -i "s/\'database_name_here\'/\'',{ 'Ref': 'DBName' }, '\'/g\" wp-config.php\n', 'sed -i \"s/\'username_here\'/\'',{ 'Ref': 'DBUser' }, '\'/g\" wp-config.php\n', 'sed -i \"s/\'password_here\'/\'',{ 'Ref': 'DBPassword' }, '\'/g\" wp-config.php\n' ]]}
createWPConfig.mode = '000500'
createWPConfig.owner = 'root'
createWPConfig.group = 'root'

let setupMysql = new wk.Init.File('/tmp/setup.mysql')
setupMysql.content = { 'Fn::Join': ['', [ 'CREATE DATABASE ', { 'Ref': 'DBName' }, ';\n',   'CREATE USER \'', { 'Ref': 'DBUser' }, '\'@\'localhost\' IDENTIFIED BY \'', { 'Ref': 'DBPassword' }, '\';\n',   'GRANT ALL ON ', { 'Ref': 'DBName' }, '.* TO \'', { 'Ref': 'DBUser' }, '\'@\'localhost\';\n', 'FLUSH PRIVILEGES;\n' ]]}
setupMysql.mode = '000400'
setupMysql.owner = 'root'
setupMysql.group = 'root'

let wpPackages = new wk.Init.Packages('yum', {
  'php': [],
  'php-mysql': [],
  'mysql': [],
  'mysql-server': [],
  'mysql-devel': [],
  'mysql-libs': [],
  'httpd': []
})

let httpd = new wk.Init.Service('httpd')
httpd.enabled = 'true'
httpd.ensureRunning = 'true'

let mysqld = new wk.Init.Service('mysqld')
mysqld.enabled = 'true'
mysqld.ensureRunning = 'true'

let htmlSource = new wk.Init.Source('/var/www/html', "http://wordpress.org/latest.tar.gz")

let install_wordpress = new wk.Init.Config('install_wordpress')
install_wordpress.add(createWPConfig)
install_wordpress.add(setupMysql)
install_wordpress.add(wpPackages)
install_wordpress.add(httpd)
install_wordpress.add(mysqld)
install_wordpress.add(htmlSource)
webServer.addConfig(install_wordpress)

let wordpress_install = new wk.Init.ConfigSet('wordpress_install')
wordpress_install.add(install_cfn)
wordpress_install.add(install_wordpress)
wordpress_install.add(configure_wordpress)
webServer.addConfigSet(wordpress_install)

let cPolicy = new wk.Policy.CreationPolicy({
  'ResourceSignal': {
    'Timeout': 'PT15M'
  }
})
webServer.addPolicy(cPolicy)

t.addOutput(webSiteUrlOutput)
console.log(t.toJson())
```

Output:

```json
{
  "Description": "AWS CloudFormation Sample Template WordPress_Single_Instance: WordPress is web software you can use to create a beautiful website or blog. This template installs WordPress with a local MySQL database for storage. It demonstrates using the AWS CloudFormation bootstrap scripts to deploy WordPress. **WARNING** This template creates an Amazon EC2 instance. You will be billed for the AWS resources used if you create a stack from this template.",
  "Mappings": {
    "AWSInstanceType2Arch": {
      "t1.micro": {
        "Arch": "PV64"
      },
      "t2.nano": {
        "Arch": "HVM64"
      },
      "t2.micro": {
        "Arch": "HVM64"
      },
      "t2.small": {
        "Arch": "HVM64"
      },
      "t2.medium": {
        "Arch": "HVM64"
      },
      "t2.large": {
        "Arch": "HVM64"
      },
      "m1.small": {
        "Arch": "PV64"
      },
      "m1.medium": {
        "Arch": "PV64"
      },
      "m1.large": {
        "Arch": "PV64"
      },
      "m1.xlarge": {
        "Arch": "PV64"
      },
      "m2.xlarge": {
        "Arch": "PV64"
      },
      "m2.2xlarge": {
        "Arch": "PV64"
      },
      "m2.4xlarge": {
        "Arch": "PV64"
      },
      "m3.medium": {
        "Arch": "HVM64"
      },
      "m3.large": {
        "Arch": "HVM64"
      },
      "m3.xlarge": {
        "Arch": "HVM64"
      },
      "m3.2xlarge": {
        "Arch": "HVM64"
      },
      "m4.large": {
        "Arch": "HVM64"
      },
      "m4.xlarge": {
        "Arch": "HVM64"
      },
      "m4.2xlarge": {
        "Arch": "HVM64"
      },
      "m4.4xlarge": {
        "Arch": "HVM64"
      },
      "m4.10xlarge": {
        "Arch": "HVM64"
      },
      "c1.medium": {
        "Arch": "PV64"
      },
      "c1.xlarge": {
        "Arch": "PV64"
      },
      "c3.large": {
        "Arch": "HVM64"
      },
      "c3.xlarge": {
        "Arch": "HVM64"
      },
      "c3.2xlarge": {
        "Arch": "HVM64"
      },
      "c3.4xlarge": {
        "Arch": "HVM64"
      },
      "c3.8xlarge": {
        "Arch": "HVM64"
      },
      "c4.large": {
        "Arch": "HVM64"
      },
      "c4.xlarge": {
        "Arch": "HVM64"
      },
      "c4.2xlarge": {
        "Arch": "HVM64"
      },
      "c4.4xlarge": {
        "Arch": "HVM64"
      },
      "c4.8xlarge": {
        "Arch": "HVM64"
      },
      "g2.2xlarge": {
        "Arch": "HVMG2"
      },
      "g2.8xlarge": {
        "Arch": "HVMG2"
      },
      "r3.large": {
        "Arch": "HVM64"
      },
      "r3.xlarge": {
        "Arch": "HVM64"
      },
      "r3.2xlarge": {
        "Arch": "HVM64"
      },
      "r3.4xlarge": {
        "Arch": "HVM64"
      },
      "r3.8xlarge": {
        "Arch": "HVM64"
      },
      "i2.xlarge": {
        "Arch": "HVM64"
      },
      "i2.2xlarge": {
        "Arch": "HVM64"
      },
      "i2.4xlarge": {
        "Arch": "HVM64"
      },
      "i2.8xlarge": {
        "Arch": "HVM64"
      },
      "d2.xlarge": {
        "Arch": "HVM64"
      },
      "d2.2xlarge": {
        "Arch": "HVM64"
      },
      "d2.4xlarge": {
        "Arch": "HVM64"
      },
      "d2.8xlarge": {
        "Arch": "HVM64"
      },
      "hi1.4xlarge": {
        "Arch": "HVM64"
      },
      "hs1.8xlarge": {
        "Arch": "HVM64"
      },
      "cr1.8xlarge": {
        "Arch": "HVM64"
      },
      "cc2.8xlarge": {
        "Arch": "HVM64"
      }
    },
    "AWSInstanceType2NATArch": {
      "t1.micro": {
        "Arch": "NATPV64"
      },
      "t2.nano": {
        "Arch": "NATHVM64"
      },
      "t2.micro": {
        "Arch": "NATHVM64"
      },
      "t2.small": {
        "Arch": "NATHVM64"
      },
      "t2.medium": {
        "Arch": "NATHVM64"
      },
      "t2.large": {
        "Arch": "NATHVM64"
      },
      "m1.small": {
        "Arch": "NATPV64"
      },
      "m1.medium": {
        "Arch": "NATPV64"
      },
      "m1.large": {
        "Arch": "NATPV64"
      },
      "m1.xlarge": {
        "Arch": "NATPV64"
      },
      "m2.xlarge": {
        "Arch": "NATPV64"
      },
      "m2.2xlarge": {
        "Arch": "NATPV64"
      },
      "m2.4xlarge": {
        "Arch": "NATPV64"
      },
      "m3.medium": {
        "Arch": "NATHVM64"
      },
      "m3.large": {
        "Arch": "NATHVM64"
      },
      "m3.xlarge": {
        "Arch": "NATHVM64"
      },
      "m3.2xlarge": {
        "Arch": "NATHVM64"
      },
      "m4.large": {
        "Arch": "NATHVM64"
      },
      "m4.xlarge": {
        "Arch": "NATHVM64"
      },
      "m4.2xlarge": {
        "Arch": "NATHVM64"
      },
      "m4.4xlarge": {
        "Arch": "NATHVM64"
      },
      "m4.10xlarge": {
        "Arch": "NATHVM64"
      },
      "c1.medium": {
        "Arch": "NATPV64"
      },
      "c1.xlarge": {
        "Arch": "NATPV64"
      },
      "c3.large": {
        "Arch": "NATHVM64"
      },
      "c3.xlarge": {
        "Arch": "NATHVM64"
      },
      "c3.2xlarge": {
        "Arch": "NATHVM64"
      },
      "c3.4xlarge": {
        "Arch": "NATHVM64"
      },
      "c3.8xlarge": {
        "Arch": "NATHVM64"
      },
      "c4.large": {
        "Arch": "NATHVM64"
      },
      "c4.xlarge": {
        "Arch": "NATHVM64"
      },
      "c4.2xlarge": {
        "Arch": "NATHVM64"
      },
      "c4.4xlarge": {
        "Arch": "NATHVM64"
      },
      "c4.8xlarge": {
        "Arch": "NATHVM64"
      },
      "g2.2xlarge": {
        "Arch": "NATHVMG2"
      },
      "g2.8xlarge": {
        "Arch": "NATHVMG2"
      },
      "r3.large": {
        "Arch": "NATHVM64"
      },
      "r3.xlarge": {
        "Arch": "NATHVM64"
      },
      "r3.2xlarge": {
        "Arch": "NATHVM64"
      },
      "r3.4xlarge": {
        "Arch": "NATHVM64"
      },
      "r3.8xlarge": {
        "Arch": "NATHVM64"
      },
      "i2.xlarge": {
        "Arch": "NATHVM64"
      },
      "i2.2xlarge": {
        "Arch": "NATHVM64"
      },
      "i2.4xlarge": {
        "Arch": "NATHVM64"
      },
      "i2.8xlarge": {
        "Arch": "NATHVM64"
      },
      "d2.xlarge": {
        "Arch": "NATHVM64"
      },
      "d2.2xlarge": {
        "Arch": "NATHVM64"
      },
      "d2.4xlarge": {
        "Arch": "NATHVM64"
      },
      "d2.8xlarge": {
        "Arch": "NATHVM64"
      },
      "hi1.4xlarge": {
        "Arch": "NATHVM64"
      },
      "hs1.8xlarge": {
        "Arch": "NATHVM64"
      },
      "cr1.8xlarge": {
        "Arch": "NATHVM64"
      },
      "cc2.8xlarge": {
        "Arch": "NATHVM64"
      }
    },
    "AWSRegionArch2AMI": {
      "us-east-1": {
        "PV64": "ami-2a69aa47",
        "HVM64": "ami-6869aa05",
        "HVMG2": "ami-2e5e9c43"
      },
      "us-west-2": {
        "PV64": "ami-7f77b31f",
        "HVM64": "ami-7172b611",
        "HVMG2": "ami-83b770e3"
      },
      "us-west-1": {
        "PV64": "ami-a2490dc2",
        "HVM64": "ami-31490d51",
        "HVMG2": "ami-fd76329d"
      },
      "eu-west-1": {
        "PV64": "ami-4cdd453f",
        "HVM64": "ami-f9dd458a",
        "HVMG2": "ami-b9bd25ca"
      },
      "eu-central-1": {
        "PV64": "ami-6527cf0a",
        "HVM64": "ami-ea26ce85",
        "HVMG2": "ami-7f04ec10"
      },
      "ap-northeast-1": {
        "PV64": "ami-3e42b65f",
        "HVM64": "ami-374db956",
        "HVMG2": "ami-e0ee1981"
      },
      "ap-northeast-2": {
        "PV64": "NOT_SUPPORTED",
        "HVM64": "ami-2b408b45",
        "HVMG2": "NOT_SUPPORTED"
      },
      "ap-southeast-1": {
        "PV64": "ami-df9e4cbc",
        "HVM64": "ami-a59b49c6",
        "HVMG2": "ami-0cb5676f"
      },
      "ap-southeast-2": {
        "PV64": "ami-63351d00",
        "HVM64": "ami-dc361ebf",
        "HVMG2": "ami-a71c34c4"
      },
      "sa-east-1": {
        "PV64": "ami-1ad34676",
        "HVM64": "ami-6dd04501",
        "HVMG2": "NOT_SUPPORTED"
      },
      "cn-north-1": {
        "PV64": "ami-77559f1a",
        "HVM64": "ami-8e6aa0e3",
        "HVMG2": "NOT_SUPPORTED"
      }
    }
  },
  "Outputs": {
    "WebsiteURL": {
      "Description": "WordPress Website",
      "Value": {
        "Fn::Join": [
          "",
          [
            "http://",
            {
              "Fn::GetAtt": [
                "WebServer",
                "PublicDnsName"
              ]
            },
            "/wordpress"
          ]
        ]
      }
    }
  },
  "Parameters": {
    "KeyName": {
      "Type": "AWS::EC2::KeyPair::KeyName",
      "ConstraintDescription": "must be the name of an existing EC2 KeyPair.",
      "Description": "Name of an existing EC2 KeyPair to enable SSH access to the instances"
    },
    "InstanceType": {
      "Type": "String",
      "AllowedValues": [
        "t1.micro",
        "t2.nano",
        "t2.micro",
        "t2.small",
        "t2.medium",
        "t2.large",
        "m1.small",
        "m1.medium",
        "m1.large",
        "m1.xlarge",
        "m2.xlarge",
        "m2.2xlarge",
        "m2.4xlarge",
        "m3.medium",
        "m3.large",
        "m3.xlarge",
        "m3.2xlarge",
        "m4.large",
        "m4.xlarge",
        "m4.2xlarge",
        "m4.4xlarge",
        "m4.10xlarge",
        "c1.medium",
        "c1.xlarge",
        "c3.large",
        "c3.xlarge",
        "c3.2xlarge",
        "c3.4xlarge",
        "c3.8xlarge",
        "c4.large",
        "c4.xlarge",
        "c4.2xlarge",
        "c4.4xlarge",
        "c4.8xlarge",
        "g2.2xlarge",
        "g2.8xlarge",
        "r3.large",
        "r3.xlarge",
        "r3.2xlarge",
        "r3.4xlarge",
        "r3.8xlarge",
        "i2.xlarge",
        "i2.2xlarge",
        "i2.4xlarge",
        "i2.8xlarge",
        "d2.xlarge",
        "d2.2xlarge",
        "d2.4xlarge",
        "d2.8xlarge",
        "hi1.4xlarge",
        "hs1.8xlarge",
        "cr1.8xlarge",
        "cc2.8xlarge",
        "cg1.4xlarge"
      ],
      "ConstraintDescription": "must be a valid EC2 instance type.",
      "Default": "t2.small",
      "Description": "WebServer EC2 instance type"
    },
    "SSHLocation": {
      "Type": "String",
      "AllowedPattern": "(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})/(\\d{1,2})",
      "ConstraintDescription": "must be a valid IP CIDR range of the form x.x.x.x/x.",
      "Default": "0.0.0.0/0",
      "Description": "The IP address range that can be used to SSH to the EC2 instances",
      "MaxLength": "18",
      "MinLength": "9"
    },
    "DBName": {
      "Type": "String",
      "AllowedPattern": "[a-zA-Z][a-zA-Z0-9]*",
      "ConstraintDescription": "must begin with a letter and contain only alphanumeric characters.",
      "Default": "wordpressdb",
      "Description": "The WordPress database name",
      "MaxLength": "64",
      "MinLength": "1"
    },
    "DBUser": {
      "Type": "String",
      "AllowedPattern": "[a-zA-Z][a-zA-Z0-9]*",
      "ConstraintDescription": "must begin with a letter and contain only alphanumeric characters.",
      "Description": "The WordPress database admin account username",
      "MaxLength": "16",
      "MinLength": "1",
      "NoEcho": "true"
    },
    "DBPassword": {
      "Type": "String",
      "AllowedPattern": "[a-zA-Z0-9]*",
      "ConstraintDescription": "must contain only alphanumeric characters.",
      "Description": "The WordPress database admin account password",
      "MaxLength": "41",
      "MinLength": "8",
      "NoEcho": "true"
    },
    "DBRootPassword": {
      "Type": "String",
      "AllowedPattern": "[a-zA-Z0-9]*",
      "ConstraintDescription": "must contain only alphanumeric characters.",
      "Description": "MySQL root password",
      "MaxLength": "41",
      "MinLength": "8",
      "NoEcho": "true"
    }
  },
  "Resources": {
    "WebServerSecurityGroup": {
      "Type": "AWS::EC2::SecurityGroup",
      "Properties": {
        "GroupDescription": "Enable HTTP access via port 80 locked down to the load balancer + SSH access",
        "SecurityGroupIngress": [
          {
            "CidrIp": "0.0.0.0/0",
            "FromPort": 80,
            "IpProtocol": "tcp",
            "ToPort": 80
          },
          {
            "CidrIp": {
              "Ref": "SSHLocation"
            },
            "FromPort": 22,
            "IpProtocol": "tcp",
            "ToPort": 22
          }
        ]
      }
    },
    "WebServer": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "ImageId": {
          "Fn::FindInMap": [
            "AWSRegionArch2AMI",
            {
              "Ref": "AWS::Region"
            },
            {
              "Fn::FindInMap": [
                "AWSInstanceType2Arch",
                {
                  "Ref": "InstanceType"
                },
                "Arch"
              ]
            }
          ]
        },
        "InstanceType": {
          "Ref": "InstanceType"
        },
        "KeyName": {
          "Ref": "KeyName"
        },
        "SecurityGroups": [
          {
            "Ref": "WebServerSecurityGroup"
          }
        ],
        "UserData": {
          "Fn::Base64": {
            "Fn::Join": [
              "",
              [
                "#!/bin/bash -xe\n",
                "yum update -y aws-cfn-bootstrap\n",
                "/opt/aws/bin/cfn-init -v ",
                "         --stack ",
                {
                  "Ref": "AWS::StackName"
                },
                "         --resource WebServer ",
                "         --configsets wordpress_install ",
                "         --region ",
                {
                  "Ref": "AWS::Region"
                },
                "\n",
                "/opt/aws/bin/cfn-signal -e $? ",
                "         --stack ",
                {
                  "Ref": "AWS::StackName"
                },
                "         --resource WebServer ",
                "         --region ",
                {
                  "Ref": "AWS::Region"
                },
                "\n"
              ]
            ]
          }
        }
      },
      "Metadata": {
        "AWS::CloudFormation::Init": {
          "configSets": {
            "wordpress_install": [
              "install_cfn",
              "install_wordpress",
              "configure_wordpress"
            ]
          },
          "configure_wordpress": {
            "commands": {
              "01_set_mysql_root_password": {
                "command": {
                  "Fn::Join": [
                    "",
                    [
                      "mysqladmin -u root password '",
                      {
                        "Ref": "DBRootPassword"
                      },
                      "'"
                    ]
                  ]
                },
                "test": {
                  "Fn::Join": [
                    "",
                    [
                      "$(mysql ",
                      {
                        "Ref": "DBName"
                      },
                      " -u root --password='",
                      {
                        "Ref": "DBRootPassword"
                      },
                      "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"
                    ]
                  ]
                }
              },
              "02_create_database": {
                "command": {
                  "Fn::Join": [
                    "",
                    [
                      "mysql -u root --password='",
                      {
                        "Ref": "DBRootPassword"
                      },
                      "' < /tmp/setup.mysql"
                    ]
                  ]
                },
                "test": {
                  "Fn::Join": [
                    "",
                    [
                      "$(mysql ",
                      {
                        "Ref": "DBName"
                      },
                      " -u root --password='",
                      {
                        "Ref": "DBRootPassword"
                      },
                      "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"
                    ]
                  ]
                }
              },
              "03_configure_wordpress": {
                "command": "/tmp/create-wp-config",
                "cwd": "/var/www/html/wordpress"
              }
            }
          },
          "install_cfn": {
            "files": {
              "/etc/cfn/cfn-hup.conf": {
                "content": {
                  "Fn::Join": [
                    "",
                    [
                      "[main]\n",
                      "stack=",
                      {
                        "Ref": "AWS::StackId"
                      },
                      "\n",
                      "region=",
                      {
                        "Ref": "AWS::Region"
                      },
                      "\n"
                    ]
                  ]
                },
                "mode": "000400",
                "owner": "root",
                "group": "root"
              },
              "/etc/cfn/hooks.d/cfn-auto-reloader.conf": {
                "content": {
                  "Fn::Join": [
                    "",
                    [
                      "[cfn-auto-reloader-hook]\n",
                      "triggers=post.update\n",
                      "path=Resources.WebServer.Metadata.AWS::CloudFormation::Init\n",
                      "action=/opt/aws/bin/cfn-init -v ",
                      "         --stack ",
                      {
                        "Ref": "AWS::StackName"
                      },
                      "         --resource WebServer ",
                      "         --configsets wordpress_install ",
                      "         --region ",
                      {
                        "Ref": "AWS::Region"
                      },
                      "\n"
                    ]
                  ]
                },
                "mode": "000400",
                "owner": "root",
                "group": "root"
              }
            },
            "services": {
              "sysvinit": {
                "cfn-hup": {
                  "enabled": "true",
                  "ensureRunning": "true",
                  "files": [
                    "/etc/cfn/cfn-hup.conf",
                    "/etc/cfn/hooks.d/cfn-auto-reloader.conf"
                  ]
                }
              }
            }
          },
          "install_wordpress": {
            "files": {
              "/tmp/create-wp-config": {
                "content": {
                  "Fn::Join": [
                    "",
                    [
                      "#!/bin/bash -xe\n",
                      "cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php\n",
                      "sed -i \"s/'database_name_here'/'",
                      {
                        "Ref": "DBName"
                      },
                      "'/g\" wp-config.php\n",
                      "sed -i \"s/'username_here'/'",
                      {
                        "Ref": "DBUser"
                      },
                      "'/g\" wp-config.php\n",
                      "sed -i \"s/'password_here'/'",
                      {
                        "Ref": "DBPassword"
                      },
                      "'/g\" wp-config.php\n"
                    ]
                  ]
                },
                "mode": "000500",
                "owner": "root",
                "group": "root"
              },
              "/tmp/setup.mysql": {
                "content": {
                  "Fn::Join": [
                    "",
                    [
                      "CREATE DATABASE ",
                      {
                        "Ref": "DBName"
                      },
                      ";\n",
                      "CREATE USER '",
                      {
                        "Ref": "DBUser"
                      },
                      "'@'localhost' IDENTIFIED BY '",
                      {
                        "Ref": "DBPassword"
                      },
                      "';\n",
                      "GRANT ALL ON ",
                      {
                        "Ref": "DBName"
                      },
                      ".* TO '",
                      {
                        "Ref": "DBUser"
                      },
                      "'@'localhost';\n",
                      "FLUSH PRIVILEGES;\n"
                    ]
                  ]
                },
                "mode": "000400",
                "owner": "root",
                "group": "root"
              }
            },
            "packages": {
              "yum": {
                "php": [],
                "php-mysql": [],
                "mysql": [],
                "mysql-server": [],
                "mysql-devel": [],
                "mysql-libs": [],
                "httpd": []
              }
            },
            "services": {
              "sysvinit": {
                "httpd": {
                  "enabled": "true",
                  "ensureRunning": "true"
                },
                "mysqld": {
                  "enabled": "true",
                  "ensureRunning": "true"
                }
              }
            },
            "sources": {
              "/var/www/html": "http://wordpress.org/latest.tar.gz"
            }
          }
        }
      },
      "CreationPolicy": {
        "ResourceSignal": {
          "Timeout": "PT15M"
        }
      }
    }
  },
  "AWSTemplateFormatVersion": "2010-09-09"
}
```

## Contributing
Wolkenkratzer is still a new library and needs lots of testing. If you run into any problems please open an issue or create a PR. All 
contributions are welcome!

## License
Wolkenkratzer uses the Apache 2.0 open source license.
