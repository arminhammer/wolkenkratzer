const { Template, Mapping, Parameter } = require('../src/index');

describe('Template', () => {
  test('Can use Template.add() with an array of Mappings', () => {
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
    const t = Template()
      .add(regions.map(r =>
        (Mapping('Region2S3WebsiteSuffix', r, {
          Suffix: `.s3-website-${r}.amazonaws.com`
        })
      )))
      .add(
        Parameter('HostedZone', {
          Type: 'String',
          Description:
            'The DNS name of an existing Amazon Route 53 hosted zone',
          AllowedPattern: '(?!-)[a-zA-Z0-9-.]{1,63}(?<!-)',
          ConstraintDescription: 'must be a valid DNS zone name.'
        })
      );
    expect(t.build()).toEqual({
      Resources: {},
      Parameters: {
        HostedZone: {
          Type: 'String',
          Description:
            'The DNS name of an existing Amazon Route 53 hosted zone',
          AllowedPattern: '(?!-)[a-zA-Z0-9-.]{1,63}(?<!-)',
          ConstraintDescription: 'must be a valid DNS zone name.'
        }
      },
      Mappings: {
        Region2S3WebsiteSuffix: {
          'us-east-1': {
            Suffix: '.s3-website-us-east-1.amazonaws.com'
          },
          'us-west-1': {
            Suffix: '.s3-website-us-west-1.amazonaws.com'
          },
          'us-west-2': {
            Suffix: '.s3-website-us-west-2.amazonaws.com'
          },
          'eu-west-1': {
            Suffix: '.s3-website-eu-west-1.amazonaws.com'
          },
          'ap-northeast-1': {
            Suffix: '.s3-website-ap-northeast-1.amazonaws.com'
          },
          'ap-northeast-2': {
            Suffix: '.s3-website-ap-northeast-2.amazonaws.com'
          },
          'ap-southeast-1': {
            Suffix: '.s3-website-ap-southeast-1.amazonaws.com'
          },
          'ap-southeast-2': {
            Suffix: '.s3-website-ap-southeast-2.amazonaws.com'
          },
          'sa-east-1': {
            Suffix: '.s3-website-sa-east-1.amazonaws.com'
          },
          'eu-central-1': {
            Suffix: '.s3-website-eu-central-1.amazonaws.com'
          }
        }
      },
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
