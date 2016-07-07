/**
 * Created by arming on 7/6/16.
 */
'use strict'

const wk = require('../../index')

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
    'us-east-1'      : { 'Suffix': '.s3-website-us-east-1.amazonaws.com' },
    'us-west-1'      : { 'Suffix': '.s3-website-us-west-1.amazonaws.com' },
    'us-west-2'      : { 'Suffix': '.s3-website-us-west-2.amazonaws.com' },
    'eu-west-1'      : { 'Suffix': '.s3-website-eu-west-1.amazonaws.com' },
    'ap-northeast-1' : { 'Suffix': '.s3-website-ap-northeast-1.amazonaws.com' },
    'ap-northeast-2' : { 'Suffix': '.s3-website-ap-northeast-2.amazonaws.com' },
    'ap-southeast-1' : { 'Suffix': '.s3-website-ap-southeast-1.amazonaws.com' },
    'ap-southeast-2' : { 'Suffix': '.s3-website-ap-southeast-2.amazonaws.com' },
    'sa-east-1'      : { 'Suffix': '.s3-website-sa-east-1.amazonaws.com' },
    'cn-north-1'     : { 'Suffix': '.s3-website.cn-north-1.amazonaws.com.cn' },
    'eu-central-1'   : { 'Suffix': '.s3-website-eu-central-1.amazonaws.com' }
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
websiteDNSName.Name.join('', [{'Ref' : 'AWS::StackName'}, {'Ref' : 'AWS::AccountId'}, '.', {'Ref' : 'AWS::Region'}, '.', { 'Ref' : 'HostedZone' }])
websiteDNSName.ResourceRecords.join('', ['http://', {'Fn::GetAtt' : ['WebsiteCDN', 'DomainName'] } ])
websiteDNSName.HostedZoneName.join('', [ { 'Ref' : 'HostedZone' }, '.'] )
t.addResource(websiteDNSName)

/*let websiteCDN = new wk.CloudFront.Distribution('WebsiteCDN')
let distConfigOrigin = new wk.Types.CloudFrontDistributionConfigOrigin()
let defaultCacheBehavior = new wk.Types.CloudFrontDefaultCacheBehavior()
let forwardedValues = new wk.Types.CloudFrontForwardedValues()
forwardedValues.QueryString = true
defaultCacheBehavior.ForwardedValues = forwardedValues
defaultCacheBehavior.TargetOriginId = 'only-origin'
defaultCacheBehavior.ViewerProtocolPolicy = 'allow-all'
let distConfig = new wk.Types.CloudFrontDistributionConfig()
distConfig.Comment = 'CDN for S3-backed website'
distConfig.Origin = distConfigOrigin
websiteCDN.DistributionConfig = distConfig
websiteCDN.DefaultCacheBehavior = defaultCacheBehavior
t.addResource(websiteCDN)*/
/*
'WebsiteCDN' : {
  'Type' : 'AWS::CloudFront::Distribution',
    'Properties' : {
    'DistributionConfig' : {
      'Comment' : 'CDN for S3-backed website',
        'Aliases' : [{ 'Fn::Join' : [ '', [{'Ref' : 'AWS::StackName'}, {'Ref' : 'AWS::AccountId'}, '.', {'Ref' : 'AWS::Region'}, '.', { 'Ref' : 'HostedZone' }]]}],
        'Enabled' : 'true',
        'DefaultCacheBehavior' : {
        'ForwardedValues' : { 'QueryString' : 'true' },
        'TargetOriginId' : 'only-origin',
          'ViewerProtocolPolicy' : 'allow-all'
      },
      'DefaultRootObject' : 'index.html',
        'Origins' : [
        { 'CustomOriginConfig' :
        {
          'HTTPPort' : '80',
          'HTTPSPort' : '443',
          'OriginProtocolPolicy' : 'http-only'
        },
          'DomainName' : { 'Fn::Join' : ['', [{'Ref' : 'S3BucketForWebsiteContent'},
            {'Fn::FindInMap' : [ 'Region2S3WebsiteSuffix', {'Ref' : 'AWS::Region'}, 'Suffix' ]}]]},
          'Id' : 'only-origin'
        }]
    }
  }
},
*/
/*
t.addOutput(new wk.Output('WebsiteURL', {
  'Value' : {'Fn::Join' : [ '', ['http://', {'Ref' : 'WebsiteDNSName'} ]] },
  'Description' : 'The URL of the newly created website'
}))

t.addOutput(new wk.Output('BucketName', {
  'Value' : { 'Ref' : 'S3BucketForWebsiteContent' },
  'Description' : 'Name of S3 bucket to hold website content'
}))
*/
console.log(t.toJson())