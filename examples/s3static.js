const {
  Template,
  Output,
  S3,
  Ref,
  FnGetAtt,
  Parameter
} = require('../dist/index');

//let t = Template().addResource(S3.Bucket('Bucket'));
//t.addOutput(Output('BucketName', { Value: Ref(t, 'Bucket') }));

let t = Template()
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
