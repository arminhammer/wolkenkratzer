const {
  Template,
  S3,
  Lambda,
  IAM,
  Ref,
  Parameter,
  FnGetAtt,
  Mapping,
  EC2,
  CustomResource,
  Output,
  FnJoin
} = require('../dist/index');

let t = Template()
  .add(
    Parameter('ExistingSecurityGroups', {
      Type: 'List<AWS::EC2::SecurityGroup::Id>'
    })
  )
  .add(
    Parameter('ExistingVPC', {
      Type: 'AWS::EC2::VPC::Id',
      Description: 'The VPC ID that includes the security groups in the ExistingSecurityGroups parameter.'
    })
  )
  .add(
    Parameter('InstanceType', {
      Type: 'String',
      Default: 't2.micro',
      AllowedValues: ['t2.micro', 'm1.small']
    })
  )
  .add(Mapping('AWSInstanceType2Arch', 't2.micro', { Arch: 'HVM64' }))
  .add(Mapping('AWSInstanceType2Arch', 'm1.small', { Arch: 'PV64' }))
  .add(
    Mapping('AWSRegionArch2AMI', 'us-east-1', {
      PV64: 'ami-1ccae774',
      HVM64: 'ami-1ecae776'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'us-west-2', {
      PV64: 'ami-ff527ecf',
      HVM64: 'ami-e7527ed7'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'us-west-1', {
      PV64: 'ami-d514f291',
      HVM64: 'ami-d114f295'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'eu-west-1', {
      PV64: 'ami-bf0897c8',
      HVM64: 'ami-a10897d6'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'eu-central-1', {
      PV64: 'ami-ac221fb1',
      HVM64: 'ami-a8221fb5'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'ap-northeast-1', {
      PV64: 'ami-27f90e27',
      HVM64: 'ami-cbf90ecb'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'ap-southeast-1', {
      PV64: 'ami-acd9e8fe',
      HVM64: 'ami-68d8e93a'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'ap-southeast-2', {
      PV64: 'ami-ff9cecc5',
      HVM64: 'ami-fd9cecc7'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'sa-east-1', {
      PV64: 'ami-bb2890a6',
      HVM64: 'ami-b52890a8'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'cn-north-1', {
      PV64: 'ami-fa39abc3',
      HVM64: 'ami-f239abcb'
    })
  )
  .add(
    EC2.SecurityGroup('SecurityGroup', {
      GroupDescription: 'Allow HTTP traffic to the host',
      VpcId: { Ref: 'ExistingVPC' },
      SecurityGroupIngress: [
        {
          IpProtocol: 'tcp',
          FromPort: '80',
          ToPort: '80',
          CidrIp: '0.0.0.0/0'
        }
      ],
      SecurityGroupEgress: [
        {
          IpProtocol: 'tcp',
          FromPort: '80',
          ToPort: '80',
          CidrIp: '0.0.0.0/0'
        }
      ]
    })
  )
  .add(
    CustomResource('AllSecurityGroups', {
      ServiceToken: { 'Fn::GetAtt': ['AppendItemToListFunction', 'Arn'] },
      List: { Ref: 'ExistingSecurityGroups' },
      AppendedItem: { Ref: 'SecurityGroup' }
    })
  )
  .add(
    Lambda.Function('AppendItemToListFunction', {
      Handler: 'index.handler',
      Role: { 'Fn::GetAtt': ['LambdaExecutionRole', 'Arn'] },
      Code: {
        ZipFile: {
          'Fn::Join': [
            '',
            [
              "var response = require('cfn-response');",
              'exports.handler = function(event, context) {',
              '   var responseData = {Value: event.ResourceProperties.List};',
              '   responseData.Value.push(event.ResourceProperties.AppendedItem);',
              '   response.send(event, context, response.SUCCESS, responseData);',
              '};'
            ]
          ]
        }
      },
      Runtime: 'nodejs'
    })
  )
  .add(
    EC2.Instance('MyEC2Instance', {
      ImageId: {
        'Fn::FindInMap': [
          'AWSRegionArch2AMI',
          { Ref: 'AWS::Region' },
          {
            'Fn::FindInMap': [
              'AWSInstanceType2Arch',
              { Ref: 'InstanceType' },
              'Arch'
            ]
          }
        ]
      },
      SecurityGroupIds: { 'Fn::GetAtt': ['AllSecurityGroups', 'Value'] },
      InstanceType: { Ref: 'InstanceType' }
    })
  )
  .add(
    IAM.Role('LambdaExecutionRole', {
      AssumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Principal: { Service: ['lambda.amazonaws.com'] },
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
                Action: ['logs:*'],
                Resource: 'arn:aws:logs:*:*:*'
              }
            ]
          }
        }
      ]
    })
  )
  .add(
    Output('AllSecurityGroups', {
      Description: 'Security Groups that are associated with the EC2 instance',
      Value: FnJoin(', ', FnGetAtt('AllSecurityGroups', 'Value'))
    })
  );

console.log(JSON.stringify(t.build(), null, 2));
