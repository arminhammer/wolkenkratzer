/**
 * Created by arming on 9/19/16.
 */

const wk = require('./../index')

let t = new wk.Template()

let distro = new wk.CloudFront.Distribution('distro')
distro.DistributionConfig = {
  Origins: [ {
    Id: 'myS3Origin',
    DomainName: 'mybucket.s3.amazonaws.com',
    S3OriginConfig: {
      OriginAccessIdentity: 'origin-access-identity/cloudfront/E127EXAMPLE51Z'
    }
  },
  {
    Id: 'myCustomOrigin',
    DomainName: 'www.example.com',
    CustomOriginConfig: {
      HTTPPort: '80',
      HTTPSPort: '443',
      OriginProtocolPolicy: 'http-only'
    }
  }
  ],
  Enabled: 'true',
  Comment: 'Some comment',
  DefaultRootObject: 'index.html',
  Logging: {
    IncludeCookies: 'true',
    Bucket: 'mylogs.s3.amazonaws.com',
    Prefix: 'myprefix'
  },
  Aliases: [ 'mysite.example.com', 'yoursite.example.com' ],
  DefaultCacheBehavior: {
    TargetOriginId: 'myS3Origin',
    ForwardedValues: {
      QueryString: 'false',
      Cookies: { Forward: 'all' }
    },
    TrustedSigners: [ '1234567890EX', '1234567891EX' ],
    ViewerProtocolPolicy: 'allow-all',
    MinTTL: '100',
    SmoothStreaming: 'true'
  },
  CacheBehaviors: [ {
    AllowedMethods: [ 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT' ],
    TargetOriginId: 'myS3Origin',
    ForwardedValues: {
      QueryString: 'true',
      Cookies: { 'Forward': 'none' }
    },
    TrustedSigners: [ '1234567890EX', '1234567891EX' ],
    ViewerProtocolPolicy: 'allow-all',
    MinTTL: '50',
    PathPattern: 'images1/*.jpg'
  },
  {
    AllowedMethods: [ 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT' ],
    TargetOriginId: 'myCustomOrigin',
    ForwardedValues: {
      QueryString: 'true',
      Cookies: { 'Forward': 'none' }
    },
    TrustedSigners: [ '1234567890EX', '1234567891EX' ],
    ViewerProtocolPolicy: 'allow-all',
    MinTTL: '50',
    PathPattern: 'images2/*.jpg'
  }
  ],
  CustomErrorResponses: [ {
    ErrorCode: '404',
    ResponsePagePath: '/error-pages/404.html',
    ResponseCode: '200',
    ErrorCachingMinTTL: '30'
  } ],
  PriceClass: 'PriceClass_All',
  ViewerCertificate: { CloudFrontDefaultCertificate: 'true' }
}
t.add(distro)

console.log(t.toJson().Template)
