'use strict';

const {
  Template,
  Output,
  Condition,
  CustomResource,
  IAM,
  Lambda,
  EC2,
  Ref,
  FnGetAtt,
  FnEquals,
  Description,
  Parameter
} = require('../dist/index');

const osTypes = [
  'Amazon',
  'Ubuntu',
  'RedHat',
  'Windows',
  'CentOS',
  'Debian',
  'Fedora'
];
let t = Template()
  .add(
    Description('Base template that always uses the newest Amazon Linux AMI')
  )
  .add(
    Parameter('InstanceType', {
      Description: 'EC2 instance type',
      Type: 'String',
      Default: 't2.micro',
      AllowedValues: [
        't1.micro',
        't2.nano',
        't2.micro',
        't2.small',
        't2.medium',
        'm1.small',
        'm1.medium',
        'm1.large',
        'm1.xlarge',
        'm2.xlarge',
        'm2.2xlarge',
        'm2.4xlarge',
        'm3.medium',
        'm3.large',
        'm3.xlarge',
        'm3.2xlarge',
        'c1.medium',
        'c1.xlarge',
        'c3.large',
        'c3.xlarge',
        'c3.2xlarge',
        'c3.4xlarge',
        'c3.8xlarge',
        'c4.large',
        'c4.xlarge',
        'c4.2xlarge',
        'c4.4xlarge',
        'c4.8xlarge',
        'g2.2xlarge',
        'r3.large',
        'r3.xlarge',
        'r3.2xlarge',
        'r3.4xlarge',
        'r3.8xlarge',
        'i2.xlarge',
        'i2.2xlarge',
        'i2.4xlarge',
        'i2.8xlarge',
        'd2.xlarge',
        'd2.2xlarge',
        'd2.4xlarge',
        'd2.8xlarge',
        'hi1.4xlarge',
        'hs1.8xlarge',
        'cr1.8xlarge',
        'cc2.8xlarge',
        'cg1.4xlarge'
      ],
      ConstraintDescription: 'Must be a valid EC2 instance type.'
    })
  )
  .add(
    Parameter('AMI', {
      Description: 'Instance AMI',
      Type: 'String',
      Default: 'Amazon',
      AllowedValues: osTypes
    })
  );
osTypes.map(os => {
  t = t.add(Condition(`${os}AMI`, FnEquals(Ref('AMI'), os)));
});
t = t
  .add(
    CustomResource('AMIInfo', {
      ServiceToken: {
        'Fn::GetAtt': ['AMIInfoFunction', 'Arn']
      },
      Region: {
        Ref: 'AWS::Region'
      },
      Filters: [
        {
          'Fn::If': [
            'AmazonAMI',
            {
              Name: 'name',
              Values: ['amzn-ami-hvm*.x86_64-gp2']
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'AmazonAMI',
            {
              Name: 'owner-alias',
              Values: ['amazon']
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'UbuntuAMI',
            {
              Name: 'name',
              Values: ['ubuntu*amd64-server*']
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'UbuntuAMI',
            {
              Values: ['099720109477'],
              Name: 'owner-id'
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'RedHatAMI',
            {
              Name: 'name',
              Values: ['RHEL-*_HVM_GA-*-x86_64*Hourly2-GP2']
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'RedHatAMI',
            {
              Values: ['309956199498'],
              Name: 'owner-id'
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'WindowsAMI',
            {
              Name: 'name',
              Values: ['Windows_Server-*-English-64Bit-Base-*']
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'WindowsAMI',
            {
              Name: 'owner-alias',
              Values: ['amazon']
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'CentOSAMI',
            {
              Name: 'name',
              Values: ['CentOS Linux*x86_64 HVM EBS*']
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'CentOSAMI',
            {
              Values: ['aws-marketplace'],
              Name: 'owner-alias'
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'DebianAMI',
            {
              Name: 'name',
              Values: ['debian-*-amd64-hvm-2015*-ebs*']
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          'Fn::If': [
            'DebianAMI',
            {
              Values: ['aws-marketplace'],
              Name: 'owner-alias'
            },
            {
              Ref: 'AWS::NoValue'
            }
          ]
        },
        {
          Name: 'virtualization-type',
          Values: ['hvm']
        },
        {
          Name: 'architecture',
          Values: ['x86_64']
        }
      ]
    })
  )
  .add(
    EC2.Instance('CFInstance', {
      InstanceType: Ref('InstanceType'),
      ImageId: FnGetAtt('AMIInfo', 'Id')
    })
  )
  .add(
    IAM.Role('LambdaExecutionRole', {
      AssumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Principal: {
              Service: ['lambda.amazonaws.com']
            },
            Action: ['sts:AssumeRole']
          }
        ]
      },
      Path: '/',
      Policies: [
        {
          PolicyName: 'root',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: [
                  'logs:CreateLogGroup',
                  'logs:CreateLogStream',
                  'logs:PutLogEvents'
                ],
                Resource: 'arn:aws:logs:*:*:*'
              },
              {
                Effect: 'Allow',
                Action: ['ec2:DescribeImages'],
                Resource: '*'
              }
            ]
          }
        }
      ]
    })
  )
  .add(
    Lambda.Function('AMIInfoFunction', {
      Code: {
        ZipFile: {
          'Fn::Join': [
            '',
            [
              "  var response = require('cfn-response');",
              "  var aws = require('aws-sdk');",
              '',
              '  exports.handler = function(event, context) {',
              "      if (event.RequestType == 'Delete') {",
              "          response.send(event, context, 'SUCCESS');",
              '          return;',
              '      }',
              "      var responseStatus = 'FAILED';",
              '      var responseData = {};',
              '',
              '      var ec2 = new aws.EC2({region: event.ResourceProperties.Region});',
              '      var describeImagesParams = {',
              '          Filters: event.ResourceProperties.Filters',
              '      };',
              '',
              '      ec2.describeImages(describeImagesParams, function(err, describeImagesResult) {',
              '          if (err) {',
              '              console.log(err);',
              '          }',
              '          else {',
              '              var images = describeImagesResult.Images;',
              '              images.sort(function(x, y) { return y.Name.localeCompare(x.Name); });',
              '              for (var j = 0; j < images.length; j++) {',
              '                  if (isBeta(images[j].Name)) continue;',
              "                  responseStatus = 'SUCCESS';",
              '                  responseData.Id = images[j].ImageId;',
              '                  break;',
              '              }',
              '          }',
              '          response.send(event, context, responseStatus, responseData);',
              '      });',
              '  };',
              '',
              '  function isBeta(imageName) {',
              "      return imageName.toLowerCase().indexOf('beta') > -1 || imageName.toLowerCase().indexOf('.rc') > -1;",
              '}',
              ''
            ]
          ]
        }
      },
      Handler: 'index.handler',
      Role: {
        'Fn::GetAtt': ['LambdaExecutionRole', 'Arn']
      },
      Runtime: 'nodejs',
      Timeout: '60'
    })
  )
  .add(
    Output('AMIID', {
      Description: 'The Amazon EC2 instance AMI ID.',
      Value: FnGetAtt('AMIInfo', 'Id')
    })
  );

console.log(JSON.stringify(t.build(), null, 2));
