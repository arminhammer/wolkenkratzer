# wolkenkratzer

Wolkenkratzer is a Javascript library that helps you programmatically generate CloudFormation templates.

Table of Contents
=================

  * [wolkenkratzer](#wolkenkratzer)
    * [Installation](#installation)
    * [Usage](#usage)
      * [General](#general)
      * [Resources](#resources)
        * [constructor (name, properties)](#constructor-name-properties)
        * [Resource support](#resource-support)
      * [Macros](#macros)
      * [Intrinsic Functions](#intrinsic-functions)
      * [Parameters](#parameters)
        * [constructor](#constructor)
      * [Mappings](#mappings)
        * [constructor](#constructor-1)
      * [Output](#output)
        * [constructor](#constructor-2)
      * [Examples](#examples)
        * [S3 CloudFront template example](#s3-cloudfront-template-example)
        * [Wordpress single instance site](#wordpress-single-instance-site)
    * [Contributing](#contributing)
    * [License](#license)

## Installation

  ```$ npm install wolkenkratzer```
  
  It can then be used in any nodejs script with
  
  ```javascript const wk = require('wolkenkratzer') ```

## Usage

Full documentation for the project can be found at https://arminhammer.github.io/wolkenkratzer/.

### General
The core class is Template, which is instantiated with ```new wolkenkratzer.Template()```. Parameters can be added with the ```add()``` method,
and Resources can be added with ```add```. The final template can be retrieved with Template.toJson().

Template.toJson() returns an object ```json { Errors: [], Template: {} }```. Any validation errors found in the Template will be added to the Errors array. If there are no validation errors, Errors will be ```null```. ```Template``` is the JSON template.

The following script adds a VPNGateway to the template:

```javascript
const wk = require('wolkenkratzer')

let t = new wk.Template()

let vpcCiderParam = new wk.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.add(vpcCiderParam)

let vpnGateway = new wk.EC2.VPNGateway('VPNGateway')
vpnGateway.Type = 'ipsec.1'
t.add(vpnGateway)

console.log(t.toJson().Template)
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

YAML output is also supported:

```javascript
let yamlResult = t.toYaml()

if (yamlResult.Errors) {
  console.log(yamlResult.Errors)
}
console.log(yamlResult.Template)
```

Output:

```yaml
Parameters:
  VPCCIDR:
    Type: String
    Default: 10.0.0.0/16
Resources:
  VPNGateway:
    Type: 'AWS::EC2::VPNGateway'
    Properties:
      Type: ipsec.1
AWSTemplateFormatVersion: '2010-09-09'
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

t.add(ec2One)

EC2.describeInstances({}, (err, data) => {
  if(err) {
    console.log(err)
  } else {
    let instance = data.Reservations[0].Instances[0]
    let ec2Two = new wk.EC2.Instance('ec2Two', instance)
    t.add(ec2Two)
    console.log(t.toJson().Template)
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
        "ImageId": "ami-5679aa47"
      }
    },
    "ec2Two": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "EbsOptimized": false,
        "ImageId": "ami-466da12b",
        "InstanceType": "t2.micro",
        "KeyName": "keypair",
        "PrivateIpAddress": "172.31.0.119",
        "SecurityGroups": [
          {
            "GroupName": "awseb-e-qyaht32vin-stack-AWSEBSecurityGroup-12345678",
            "GroupId": "sg-aba882d0"
          }
        ],
        "SourceDestCheck": true,
        "SubnetId": "subnet-bc1d1234"
      }
    }
  },
  "AWSTemplateFormatVersion": "2010-09-09"
}
```


#### Resource support
Wolkenkratzer supports all CloudFormation resources. This is made possible by scripts that scrape the CloudFormation documentation pages 
and generate the resource code files. The scrapers can be found in the /scripts folder.

### Macros
Wolkenkratzer includes macros that take advantage of the aws-sdk npm library. The macros are intended to make certain common uses of CloudFormation easier. 

#### S3 Macros

##### S3 Bucket Macro
Currently the S3 Bucket is the only macro for Resources, which can be used like this:

```javascript
'use strict'

let region = 'us-east-1'
const wk = require('wolkenkratzer')
const aws = require('aws-sdk')
const s3 = new aws.S3({ region: region })

s3.listBuckets().promise()
.then((data) => {
  let bucketName = data.Buckets[0].Name
  return wk.Macro.S3.Bucket(bucketName, 'mybucket', region)
})
.then((bucket) => {
  let t = new wk.Template()
  t.add(bucket)
  let result = t.toJson()
  console.log(result.Template)
})
.catch((e) => {
  console.error(e)
})
```

Output: 

```json
{
  "Resources": {
    "mybucket": {
      "Type": "AWS::S3::Bucket",
      "Properties": {
        "BucketName": "mybucket",
        "LifecycleConfiguration": {
          "Rules": [
            {
              "ID": "rule0",
              "Prefix": "",
              "Status": "Enabled",
              "Transitions": [
                {
                  "Days": 180,
                  "StorageClass": "STANDARD_IA"
                }
              ],
              "NoncurrentVersionTransitions": []
            }
          ]
        },
        "LoggingConfiguration": {
          "LoggingEnabled": {
            "TargetBucket": "my-logging-bucket",
            "TargetGrants": [],
            "TargetPrefix": "logs/"
          }
        },
        "NotificationConfiguration": {
          "CloudFunctionConfiguration": {
            "Id": "Lambda",
            "Event": "s3:ObjectCreated:*",
            "Events": [
              "s3:ObjectCreated:*"
            ],
            "CloudFunction": "arn:aws:lambda:us-east-1:2123456789:function:myFunc"
          }
        },
        "ReplicationConfiguration": {
          "ReplicationConfiguration": {
            "Role": "arn:aws:iam::2123456789:role/my-role-s3-repl-role",
            "Rules": [
              {
                "ID": "mybucket",
                "Prefix": "",
                "Status": "Enabled",
                "Destination": {
                  "Bucket": "arn:aws:s3:::replbucket"
                }
              }
            ]
          }
        },
        "Tags": [
          {
            "Key": "testkey",
            "Value": "testvalue"
          }
        ],
        "VersioningConfiguration": {
          "Status": "Enabled"
        },
        "WebsiteConfiguration": {
          "ErrorDocument": {
            "Key": "error.html"
          },
          "IndexDocument": {
            "Suffix": "index.html"
          },
          "RoutingRules": []
        }
      }
    }
  },
  "AWSTemplateFormatVersion": "2010-09-09"
}
```

#### EC2 Meta Macros

The EC2 Meta macros take advantage of the scraped data from the excellent https://github.com/powdahound/ec2instances.info project. A cached version of https://github.com/powdahound/ec2instances.info/blob/master/www/instances.json is stored in scripts/ec2info.json.

##### getInstanceTypeList
Returns an array of instance types and details.

```javascript
const instanceList = wk.Macro.EC2Meta.getInstanceTypeList()
```
##### getInstanceTypeNameList
Returns an array of just the names of instance types.
```javascript
const instanceTypes = wk.Macro.EC2Meta.getInstanceTypeNameList()
```
##### getInstanceTypeMap
Same as getInstanceTypeList, but returns as an object instead of an array.
```javascript
const instanceTypeMap = wk.Macro.EC2Meta.getInstanceTypeMap()
```
##### getRegions
Returns an array of all the names of regions available in AWS.
```javascript
let regions = wk.Macro.EC2Meta.getRegions().filter((region) => {
  if (!region.includes('us-gov') && !region.includes('cn-north-1')) {
    return region
  }
})
console.log(regions)
```
##### getAMIMap
Makes a series of aws-sdk EC2.describeImages calls in order to structure a map of AMIs based off of search criteria across one or more regions. Useful when trying to maintain complicated ```Mappings``` of AMIs across multiple regions. Returns a ```javascript Promise``` so make sure you handle the result with a then() call:
```javascript
let filterParams = [
  { Name: 'HVM64', Filters: [ { Name: 'name', Values: ['amzn-ami-hvm-2016.03.3.x86_64-gp2'] } ] },
  { Name: 'PV64', Filters: [ { Name: 'name', Values: ['amzn-ami-pv-2016.03.3.x86_64-ebs'] } ] },
  { Name: 'HVMG2', Filters: [ { Name: 'name', Values: ['amzn-ami-graphics-hvm-2016.03.3.x86_64*'] } ] }
]

let regions = wk.Macro.EC2Meta.getRegions().filter((region) => {
  if (!region.includes('us-gov') && !region.includes('cn-north-1')) {
    return region
  }
})

wk.Macro.EC2Meta.getAMIMap(filterParams, regions)
.then((amiMap) => {
  t.add(new wk.Mapping('AWSRegionArch2AMI', amiMap))
})
.catch((e) => {
  console.error(e)
})
```

Outputs:
```json
"AWSRegionArch2AMI": {
      "us-east-1": {
        "HVM64": "ami-6869aa05",
        "PV64": "ami-2a69aa47",
        "HVMG2": "ami-2e5e9c43"
      },
      "us-west-2": {
        "HVM64": "ami-7172b611",
        "PV64": "ami-7f77b31f",
        "HVMG2": "ami-83b770e3"
      },
      "us-west-1": {
        "HVM64": "ami-31490d51",
        "PV64": "ami-a2490dc2",
        "HVMG2": "ami-fd76329d"
      },
      "eu-west-1": {
        "HVM64": "ami-f9dd458a",
        "PV64": "ami-4cdd453f",
        "HVMG2": "ami-b9bd25ca"
      },
      "eu-central-1": {
        "HVM64": "ami-ea26ce85",
        "PV64": "ami-6527cf0a",
        "HVMG2": "ami-7f04ec10"
      },
      "ap-southeast-1": {
        "HVM64": "ami-a59b49c6",
        "PV64": "ami-df9e4cbc",
        "HVMG2": "ami-0cb5676f"
      },
      "ap-northeast-1": {
        "HVM64": "ami-374db956",
        "PV64": "ami-3e42b65f",
        "HVMG2": "ami-e0ee1981"
      },
      "ap-northeast-2": {
        "HVM64": "ami-2b408b45",
        "PV64": "NOT_SUPPORTED",
        "HVMG2": "NOT_SUPPORTED"
      },
      "ap-southeast-2": {
        "HVM64": "ami-dc361ebf",
        "PV64": "ami-63351d00",
        "HVMG2": "ami-a71c34c4"
      },
      "sa-east-1": {
        "HVM64": "ami-6dd04501",
        "PV64": "ami-1ad34676",
        "HVMG2": "NOT_SUPPORTED"
      }
    }
```
Macros for other resources, as well as Mappings and other parameter blocks are planned for the future.

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
t.add(bucket)

console.log(t.toJson().Template)
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
t.add(bucket)

console.log(t.toJson().Template)
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

t.add(hostedZoneParam)

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
t.add(new wk.Output('WebsiteURL', {
  'Value': new wk.Intrinsic.FnJoin('', ['http://', new Ref(websiteDNSName)]),
  'Description': 'The URL of the newly created website'
}))
```

### Examples

More examples can be found in the /examples folder.

#### S3 CloudFront template example

```javascript
'use strict'

const wk = require('wolkenkratzer')
const Ref = wk.Intrinsic.Ref

let t = new wk.Template()

t.setDescription('AWS CloudFormation Sample Template S3_Website_With_CloudFront_Distribution: Sample template showing how to create a website with a custom DNS name, hosted on Amazon S3 and served via Amazone CloudFront. It assumes you already have a Hosted Zone registered with Amazon Route 53. **WARNING** This template creates an Amazon Route 53 DNS record, an S3 bucket and a CloudFront distribution. You will be billed for the AWS resources used if you create a stack from this template.')

let hostedZoneParam = new wk.Parameter('HostedZone', {
  'Type': 'String',
  'Description': 'The DNS name of an existing Amazon Route 53 hosted zone',
  'AllowedPattern': '(?!-)[a-zA-Z0-9-.]{1,63}(?<!-)',
  'ConstraintDescription': 'must be a valid DNS zone name.'
})

t.add(hostedZoneParam)

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

t.add(region2S3WebsiteSuffixMap)

let s3BucketForWebsiteContent = new wk.S3.Bucket('S3BucketForWebsiteContent')
s3BucketForWebsiteContent.AccessControl = 'PublicRead'
let webConfig = new wk.Types.AmazonS3WebsiteConfigurationProperty()
webConfig.IndexDocument = 'index.html'
webConfig.ErrorDocument = 'error.html'
s3BucketForWebsiteContent.WebsiteConfiguration = webConfig

t.add(s3BucketForWebsiteContent)

let websiteDNSName = new wk.Route53.RecordSet('WebsiteDNSName')
websiteDNSName.Type = 'CNAME'
websiteDNSName.TTL = '900'
websiteDNSName.Comment = 'CNAME redirect custom name to CloudFront distribution'
websiteDNSName.Name.join('', [ new Ref(wk.Pseudo.AWS_STACK_NAME), new Ref(wk.Pseudo.AWS_ACCOUNT_ID), '.', new Ref(wk.Pseudo.AWS_REGION), '.', new Ref(hostedZoneParam) ])
websiteDNSName.ResourceRecords.push(new wk.Intrinsic.FnJoin('', [ 'http://', new wk.Intrinsic.FnGetAtt('WebsiteCDN', 'DomainName') ]))
websiteDNSName.HostedZoneName.join('', [ new Ref(hostedZoneParam), '.' ])
t.add(websiteDNSName)

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
distConfig.Aliases.push(new wk.Intrinsic.FnJoin('', [ new Ref(wk.Pseudo.AWS_STACK_NAME), new Ref(wk.Pseudo.AWS_ACCOUNT_ID), '.', new Ref(wk.Pseudo.AWS_REGION), '.', new Ref(hostedZoneParam) ]))
distConfig.Origins.push(distConfigOrigin)
distConfig.Enabled = true
distConfig.DefaultRootObject = 'index.html'
distConfig.DefaultCacheBehavior = defaultCacheBehavior

websiteCDN.DistributionConfig = distConfig

t.add(websiteCDN)

t.add(new wk.Output('WebsiteURL', {
  'Value': new wk.Intrinsic.FnJoin('', ['http://', new Ref(websiteDNSName)]),
  'Description': 'The URL of the newly created website'
}))

t.add(new wk.Output('BucketName', {
  'Value': new Ref(s3BucketForWebsiteContent),
  'Description': 'Name of S3 bucket to hold website content'
}))

console.log(t.toJson().Template)
```

#### Wordpress single instance site

```javascript
'use strict'

const wk = require('wolkenkratzer')

let t = new wk.Template()

t.setDescription('AWS CloudFormation Sample Template WordPress_Single_Instance: WordPress is web software you can use to create a beautiful website or blog. This template installs WordPress with a local MySQL database for storage. It demonstrates using the AWS CloudFormation bootstrap scripts to deploy WordPress. **WARNING** This template creates an Amazon EC2 instance. You will be billed for the AWS resources used if you create a stack from this template.')

let keyNameParam = new wk.Parameter('KeyName', {
  'Type': 'AWS::EC2::KeyPair::KeyName',
  'ConstraintDescription': 'must be the name of an existing EC2 KeyPair.',
  'Description': 'Name of an existing EC2 KeyPair to enable SSH access to the instances'
})
t.add(keyNameParam)

let instanceTypeParam = new wk.Parameter('InstanceType', {
  'Description': 'WebServer EC2 instance type',
  'Type': 'String',
  'Default': 't2.small',
  'AllowedValues': wk.Macro.EC2Meta.getInstanceTypeNameList(),
  'ConstraintDescription': 'must be a valid EC2 instance type.'
})
t.add(instanceTypeParam)

let sshLocationParam = new wk.Parameter('SSHLocation', {
  'Description': 'The IP address range that can be used to SSH to the EC2 instances',
  'Type': 'String',
  'MinLength': '9',
  'MaxLength': '18',
  'Default': '0.0.0.0/0',
  'AllowedPattern': '(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})/(\\d{1,2})',
  'ConstraintDescription': 'must be a valid IP CIDR range of the form x.x.x.x/x.'
})
t.add(sshLocationParam)

let dbNameParam = new wk.Parameter('DBName', {
  'Default': 'wordpressdb',
  'Description': 'The WordPress database name',
  'Type': 'String',
  'MinLength': '1',
  'MaxLength': '64',
  'AllowedPattern': '[a-zA-Z][a-zA-Z0-9]*',
  'ConstraintDescription': 'must begin with a letter and contain only alphanumeric characters.'
})
t.add(dbNameParam)

let dbUserParam = new wk.Parameter('DBUser', {
  'NoEcho': 'true',
  'Description': 'The WordPress database admin account username',
  'Type': 'String',
  'MinLength': '1',
  'MaxLength': '16',
  'AllowedPattern': '[a-zA-Z][a-zA-Z0-9]*',
  'ConstraintDescription': 'must begin with a letter and contain only alphanumeric characters.'
})
t.add(dbUserParam)

let dbPasswordParam = new wk.Parameter('DBPassword', {
  'NoEcho': 'true',
  'Description': 'The WordPress database admin account password',
  'Type': 'String',
  'MinLength': '8',
  'MaxLength': '41',
  'AllowedPattern': '[a-zA-Z0-9]*',
  'ConstraintDescription': 'must contain only alphanumeric characters.'
})
t.add(dbPasswordParam)

let dbRootPasswordParam = new wk.Parameter('DBRootPassword', {
  'NoEcho': 'true',
  'Description': 'MySQL root password',
  'Type': 'String',
  'MinLength': '8',
  'MaxLength': '41',
  'AllowedPattern': '[a-zA-Z0-9]*',
  'ConstraintDescription': 'must contain only alphanumeric characters.'
})
t.add(dbRootPasswordParam)

let webServerSecurityGroup = new wk.EC2.SecurityGroup('WebServerSecurityGroup')
t.add(webServerSecurityGroup)
webServerSecurityGroup.GroupDescription = 'Enable HTTP access via port 80 locked down to the load balancer + SSH access'

let rule1 = new wk.Types.EC2SecurityGroupRulePropertyType({'IpProtocol': 'tcp', 'FromPort': 80, 'ToPort': 80, 'CidrIp': '0.0.0.0/0'})
webServerSecurityGroup.SecurityGroupIngress.push(rule1)

let rule2 = new wk.Types.EC2SecurityGroupRulePropertyType()
rule2.IpProtocol = 'tcp'
rule2.FromPort = 22
rule2.ToPort = 22
rule2.CidrIp.ref(sshLocationParam)
webServerSecurityGroup.SecurityGroupIngress.push(rule2)

let AWSInstanceType2ArchMap = new wk.Mapping('AWSInstanceType2Arch', wk.Macro.EC2Meta.getInstanceTypeList().reduce((result, instanceType) => {
  let ending = '64'
  if (instanceType.linux_virtualization_types[0] && instanceType.arch.includes('x86_64')) {
    if(instanceType.instance_type.includes('g2')) {
      ending = 'G2'
    }
    result[instanceType.instance_type] = {
      Arch: instanceType.linux_virtualization_types[0] + ending
    }
  }
  return result
}, {}))
t.add(AWSInstanceType2ArchMap)

let AWSInstanceType2NATArchMap = new wk.Mapping('AWSInstanceType2NATArch', wk.Macro.EC2Meta.getInstanceTypeList().reduce((result, instanceType) => {
  let ending = '64'
  if (instanceType.linux_virtualization_types[0] && instanceType.arch.includes('x86_64')) {
    if(instanceType.instance_type.includes('g2')) {
      ending = 'G2'
    }
    result[instanceType.instance_type] = {
      Arch: 'NAT' + instanceType.linux_virtualization_types[0] + ending
    }
  }
  return result
}, {}))
t.add(AWSInstanceType2NATArchMap)

let webServer = new wk.EC2.Instance('WebServer')
webServer.ImageId.findInMap('AWSRegionArch2AMI', { 'Ref': 'AWS::Region' }, { 'Fn::FindInMap': [ 'AWSInstanceType2Arch', { 'Ref': 'InstanceType' }, 'Arch' ] })
t.add(webServer)

webServer.InstanceType.ref(instanceTypeParam)
webServer.SecurityGroups.push(new wk.Intrinsic.Ref(webServerSecurityGroup))
webServer.KeyName.ref(keyNameParam)
webServer.UserData.base64({ 'Fn::Join': ['', [
  '#!/bin/bash -xe\n',
  'yum update -y aws-cfn-bootstrap\n',

  '/opt/aws/bin/cfn-init -v ',
  '         --stack ', { 'Ref': 'AWS::StackName' },
  '         --resource WebServer ',
  '         --configsets wordpressInstall ',
  '         --region ', { 'Ref': 'AWS::Region' }, '\n',

  '/opt/aws/bin/cfn-signal -e $? ',
  '         --stack ', { 'Ref': 'AWS::StackName' },
  '         --resource WebServer ',
  '         --region ', { 'Ref': 'AWS::Region' }, '\n'
]]})

let webSiteUrlOutput = new wk.Output('WebsiteURL', {
  'Value': { 'Fn::Join': [ '', [ 'http://', { 'Fn::GetAtt': [ 'WebServer', 'PublicDnsName' ] }, '/wordpress' ] ] },
  'Description': 'WordPress Website'
})

let setMysqlRootPassword = new wk.Init.Command('01_setMysqlRootPassword')
setMysqlRootPassword.command = { 'Fn::Join': [ '', [ 'mysqladmin -u root password \'', { 'Ref': 'DBRootPassword' }, '\'' ] ] }
setMysqlRootPassword.test = { 'Fn::Join': [ '', [ '$(mysql ', { 'Ref': 'DBName' }, ' -u root --password=\'', { 'Ref': 'DBRootPassword' }, '\' >/dev/null 2>&1 </dev/null); (( $? != 0 ))' ] ] }

let createDatabase = new wk.Init.Command('02_createDatabase')
createDatabase.command = { 'Fn::Join': [ '', [ 'mysql -u root --password=\'', { 'Ref': 'DBRootPassword' }, '\' < /tmp/setup.mysql' ] ] }
createDatabase.test = { 'Fn::Join': [ '', [ '$(mysql ', { 'Ref': 'DBName' }, ' -u root --password=\'', { 'Ref': 'DBRootPassword' }, '\' >/dev/null 2>&1 </dev/null); (( $? != 0 ))' ] ] }

let configureWordpressCMD = new wk.Init.Command('03_configureWordpress')
configureWordpressCMD.command = '/tmp/create-wp-config'
configureWordpressCMD.cwd = '/var/www/html/wordpress'

let configureWordpress = new wk.Init.Config('configureWordpress')
configureWordpress.add(setMysqlRootPassword)
configureWordpress.add(createDatabase)
configureWordpress.add(configureWordpressCMD)

webServer.addConfig(configureWordpress)

let cfnHup = new wk.Init.File('/etc/cfn/cfn-hup.conf')
cfnHup.content = { 'Fn::Join': ['', [ '[main]\n', 'stack=', { 'Ref': 'AWS::StackId' }, '\n', 'region=', { 'Ref': 'AWS::Region' }, '\n' ]] }
cfnHup.mode = '000400'
cfnHup.owner = 'root'
cfnHup.group = 'root'

let cfnAutoReloader = new wk.Init.File('/etc/cfn/hooks.d/cfn-auto-reloader.conf')
cfnAutoReloader.content = { 'Fn::Join': [ '', [ '[cfn-auto-reloader-hook]\n', 'triggers=post.update\n', 'path=Resources.WebServer.Metadata.AWS::CloudFormation::Init\n', 'action=/opt/aws/bin/cfn-init -v ', '         --stack ', { 'Ref': 'AWS::StackName' }, '         --resource WebServer ', '         --configsets wordpressInstall ', '         --region ', { 'Ref': 'AWS::Region' }, '\n' ] ] }
cfnAutoReloader.mode = '000400'
cfnAutoReloader.owner = 'root'
cfnAutoReloader.group = 'root'

let cfnHupService = new wk.Init.Service('cfn-hup')
cfnHupService.enabled = 'true'
cfnHupService.ensureRunning = 'true'
cfnHupService.files = ['/etc/cfn/cfn-hup.conf', '/etc/cfn/hooks.d/cfn-auto-reloader.conf']

let installCfn = new wk.Init.Config('installCfn')
installCfn.add(cfnHup)
installCfn.add(cfnAutoReloader)
installCfn.add(cfnHupService)
webServer.addConfig(installCfn)

let createWPConfig = new wk.Init.File('/tmp/create-wp-config')
createWPConfig.content = { 'Fn::Join': [ '', [ '#!/bin/bash -xe\n', 'cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php\n', 'sed -i "s/\'database_name_here\'/\'', { 'Ref': 'DBName' }, '\'/g" wp-config.php\n', 'sed -i "s/\'username_here\'/\'', { 'Ref': 'DBUser' }, '\'/g" wp-config.php\n', 'sed -i "s/\'password_here\'/\'', { 'Ref': 'DBPassword' }, '\'/g" wp-config.php\n' ] ] }
createWPConfig.mode = '000500'
createWPConfig.owner = 'root'
createWPConfig.group = 'root'

let setupMysql = new wk.Init.File('/tmp/setup.mysql')
setupMysql.content = { 'Fn::Join': ['', [ 'CREATE DATABASE ', { 'Ref': 'DBName' }, ';\n', 'CREATE USER \'', { 'Ref': 'DBUser' }, '\'@\'localhost\' IDENTIFIED BY \'', { 'Ref': 'DBPassword' }, '\';\n', 'GRANT ALL ON ', { 'Ref': 'DBName' }, '.* TO \'', { 'Ref': 'DBUser' }, '\'@\'localhost\';\n', 'FLUSH PRIVILEGES;\n' ]] }
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

let htmlSource = new wk.Init.Source('/var/www/html', 'http://wordpress.org/latest.tar.gz')

let installWordpress = new wk.Init.Config('installWordpress')
installWordpress.add(createWPConfig)
installWordpress.add(setupMysql)
installWordpress.add(wpPackages)
installWordpress.add(httpd)
installWordpress.add(mysqld)
installWordpress.add(htmlSource)
webServer.addConfig(installWordpress)

let wordpressInstall = new wk.Init.ConfigSet('wordpressInstall')
wordpressInstall.add(installCfn)
wordpressInstall.add(installWordpress)
wordpressInstall.add(configureWordpress)
webServer.addConfigSet(wordpressInstall)

let cPolicy = new wk.Policy.CreationPolicy({
  'ResourceSignal': {
    'Timeout': 'PT15M'
  }
})
webServer.addPolicy(cPolicy)
t.add(webSiteUrlOutput)

let filterParams = [
  { Name: 'HVM64', Filters: [ { Name: 'name', Values: ['amzn-ami-hvm-2016.03.3.x86_64-gp2'] } ] },
  { Name: 'PV64', Filters: [ { Name: 'name', Values: ['amzn-ami-pv-2016.03.3.x86_64-ebs'] } ] },
  { Name: 'HVMG2', Filters: [ { Name: 'name', Values: ['amzn-ami-graphics-hvm-2016.03.3.x86_64*'] } ] }
]

let regions = wk.Macro.EC2Meta.getRegions().filter((region) => {
  if (!region.includes('us-gov') && !region.includes('cn-north-1')) {
    return region
  }
})

wk.Macro.EC2Meta.getAMIMap(filterParams, regions)
.then((amiMap) => {
  t.add(new wk.Mapping('AWSRegionArch2AMI', amiMap))
  let result = t.toJson()
  if (result.Errors) {
    // console.error(result.Errors)
  }
  console.log(result.Template)
})
.catch((e) => {
  console.error(e)
})
```

## Contributing
Wolkenkratzer is still a new library and needs lots of testing. If you run into any problems please open an issue or create a PR. All 
contributions are welcome!

## License
Wolkenkratzer uses the Apache 2.0 open source license.
