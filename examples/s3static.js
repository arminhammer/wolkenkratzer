const {
  Template,
  Output,
  S3,
  Ref,
  FnGetAtt,
  Parameter,
  Mapping
} = require('../dist/index');

//let t = Template().addResource(S3.Bucket('Bucket'));
//t.addOutput(Output('BucketName', { Value: Ref(t, 'Bucket') }));

let t = Template()
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
  )
  .add(
    Mapping('RegionMap', 'us-west-2', {
      S3hostedzoneID: 'Z3BJ6K6RIION7M',
      websiteendpoint: 's3-website-us-west-2.amazonaws.com'
    })
  )
  .add(
    Mapping('RegionMap', 'eu-west-1', {
      S3hostedzoneID: 'Z1BKCTXD74EZPE',
      websiteendpoint: 's3-website-eu-west-1.amazonaws.com'
    })
  )
  .add(
    Mapping('RegionMap', 'ap-southeast-1', {
      S3hostedzoneID: 'Z3O0J2DXBE1FTB',
      websiteendpoint: 's3-website-ap-southeast-1.amazonaws.com'
    })
  )
  .add(
    Mapping('RegionMap', 'ap-southeast-2', {
      S3hostedzoneID: 'Z1WCIGYICN2BYD',
      websiteendpoint: 's3-website-ap-southeast-2.amazonaws.com'
    })
  )
  .add(
    Mapping('RegionMap', 'ap-northeast-1', {
      S3hostedzoneID: 'Z2M4EHUR26P7ZW',
      websiteendpoint: 's3-website-ap-northeast-1.amazonaws.com'
    })
  )
  .add(
    Mapping('RegionMap', 'sa-east-1', {
      S3hostedzoneID: 'Z31GFT0UA1I2HV',
      websiteendpoint: 's3-website-sa-east-1.amazonaws.com'
    })
  )
  .add(
    Parameter('RootDomainName', {
      Type: 'String',
      Description: 'Domain name for your website (example.com)'
    })
  )
  .add(
    S3.Bucket('RootBucket', {
      BucketName: Ref('RootDomainName'),
      AccessControl: 'PublicRead',
      WebsiteConfiguration: {
        IndexDocument: 'index.html',
        ErrorDocument: '404.html'
      }
    })
  )
  .add(
    S3.Bucket('WWWBucket', {
      BucketName: {
        'Fn::Join': ['', ['www.', Ref('RootDomainName')]]
      },
      AccessControl: 'BucketOwnerFullControl',
      WebsiteConfiguration: {
        RedirectAllRequestsTo: {
          HostName: Ref('RootBucket')
        }
      }
    })
  )
  .add(
    Output('WebsiteURL', {
      Value: FnGetAtt('RootBucket', 'WebsiteURL'),
      Description: 'URL for website hosted on S3'
    })
  );
//.add(Output('BucketName', { Value: Ref('Bucket') }));

console.log(JSON.stringify(t.build(), null, 2));
