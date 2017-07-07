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
  FnJoin,
  Description,
  Route53,
  CloudFront
} = require('../dist/index');

const regions = [
  'us-east-1',
  'us-west-1',
  'us-west-2',
  'eu-west-1',
  'ap-northeast-1',
  'ap-northeast-2',
  'ap-southeast-1',
  'ap-southeast-2',
  'sa-east-1',
  'eu-central-1'
];

let t = Template()
  .add(
    Description(
      'AWS CloudFormation Sample Template S3_Website_With_CloudFront_Distribution: Sample template showing how to create a website with a custom DNS name, hosted on Amazon S3 and served via Amazone CloudFront. It assumes you already have a Hosted Zone registered with Amazon Route 53. **WARNING** This template creates an Amazon Route 53 DNS record, an S3 bucket and a CloudFront distribution. You will be billed for the AWS resources used if you create a stack from this template.'
    )
  )
  .add(
    Parameter('HostedZone', {
      Type: 'String',
      Description: 'The DNS name of an existing Amazon Route 53 hosted zone',
      AllowedPattern: '(?!-)[a-zA-Z0-9-.]{1,63}(?<!-)',
      ConstraintDescription: 'must be a valid DNS zone name.'
    })
  )
  .map(regions, r =>
    Mapping('Region2S3WebsiteSuffix', r, {
      Suffix: `.s3-website-${r}.amazonaws.com`
    })
  )
  .add(
    S3.Bucket('S3BucketForWebsiteContent', {
      AccessControl: 'PublicRead',
      WebsiteConfiguration: {
        IndexDocument: 'index.html',
        ErrorDocument: 'error.html'
      }
    })
  )
  .add(
    CloudFront.Distribution('WebsiteCDN', {
      DistributionConfig: {
        Comment: 'CDN for S3-backed website',
        Aliases: [
          {
            'Fn::Join': [
              '',
              [
                { Ref: 'AWS::StackName' },
                { Ref: 'AWS::AccountId' },
                '.',
                { Ref: 'AWS::Region' },
                '.',
                { Ref: 'HostedZone' }
              ]
            ]
          }
        ],
        Enabled: true,
        DefaultCacheBehavior: {
          ForwardedValues: { QueryString: true },
          TargetOriginId: 'only-origin',
          ViewerProtocolPolicy: 'allow-all'
        },
        DefaultRootObject: 'index.html',
        Origins: [
          {
            CustomOriginConfig: {
              HTTPPort: 80,
              HTTPSPort: 443,
              OriginProtocolPolicy: 'http-only'
            },
            DomainName: {
              'Fn::Join': [
                '',
                [
                  { Ref: 'S3BucketForWebsiteContent' },
                  {
                    'Fn::FindInMap': [
                      'Region2S3WebsiteSuffix',
                      { Ref: 'AWS::Region' },
                      'Suffix'
                    ]
                  }
                ]
              ]
            },
            Id: 'only-origin'
          }
        ]
      }
    })
  )
  .add(
    Route53.RecordSet('WebsiteDNSName', {
      HostedZoneName: { 'Fn::Join': ['', [{ Ref: 'HostedZone' }, '.']] },
      Comment: 'CNAME redirect custom name to CloudFront distribution',
      Name: {
        'Fn::Join': [
          '',
          [
            { Ref: 'AWS::StackName' },
            { Ref: 'AWS::AccountId' },
            '.',
            { Ref: 'AWS::Region' },
            '.',
            { Ref: 'HostedZone' }
          ]
        ]
      },
      Type: 'CNAME',
      TTL: '900',
      ResourceRecords: [
        {
          'Fn::Join': [
            '',
            ['http://', { 'Fn::GetAtt': ['WebsiteCDN', 'DomainName'] }]
          ]
        }
      ]
    })
  )
  .add(
    Output('WebsiteURL', {
      Value: FnJoin('', ['http://', { Ref: 'WebsiteDNSName' }]),
      Description: 'The URL of the newly created website'
    })
  )
  .add(
    Output('BucketName', {
      Value: Ref('S3BucketForWebsiteContent'),
      Description: 'Name of S3 bucket to hold website content'
    })
  );

console.log(JSON.stringify(t.build(), null, 2));
