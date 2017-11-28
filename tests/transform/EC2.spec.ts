const { Template, Transform } = require('../../src/index');

const AWS = {
  EC2: class EC2 {
    public getBucketPolicy(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              Policy: {
                Statement: [
                  {
                    Action: 's3:GetBucketAcl',
                    Effect: 'Allow',
                    Principal: { Service: 'cloudtrail.amazonaws.com' },
                    Resource: 'arn:aws:s3:::transform-test',
                    Sid: 'AWSCloudTrailAclCheck20150319'
                  },
                  {
                    Action: 's3:PutObject',
                    Condition: {
                      StringEquals: {
                        's3:x-amz-acl': 'bucket-owner-full-control'
                      }
                    },
                    Effect: 'Allow',
                    Principal: { Service: 'cloudtrail.amazonaws.com' },
                    Resource:
                      'arn:aws:s3:::transform-test/AWSLogs/1234567890/*',
                    Sid: 'AWSCloudTrailWrite20150319'
                  }
                ],
                Version: '2012-10-17'
              }
            });
          })
      };
    }
  }
};

describe('EC2 Transform', () => {
  test('Can transform an EC2 CustomerGateway correctly', async () => {
    const resource = await Transform.EC2.CustomerGateway(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 DHCPOptions correctly', async () => {
    const resource = await Transform.EC2.DHCPOptions(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 EgressOnlyInternetGateway correctly', async () => {
    const resource = await Transform.EC2.EgressOnlyInternetGateway(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 EIP correctly', async () => {
    const resource = await Transform.EC2.EIP('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 EIPAssociation correctly', async () => {
    const resource = await Transform.EC2.EIPAssociation(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 FlowLog correctly', async () => {
    const resource = await Transform.EC2.FlowLog('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 Host correctly', async () => {
    const resource = await Transform.EC2.Host('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 Instance correctly', async () => {
    const resource = await Transform.EC2.Instance(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 InternetGateway correctly', async () => {
    const resource = await Transform.EC2.InternetGateway(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 NatGateway correctly', async () => {
    const resource = await Transform.EC2.NatGateway(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 NetworkAcl correctly', async () => {
    const resource = await Transform.EC2.NetworkAcl(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 NetworkAclEntry correctly', async () => {
    const resource = await Transform.EC2.NetworkAclEntry(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 NetworkInterface correctly', async () => {
    const resource = await Transform.EC2.NetworkInterface(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 NetworkInterfaceAttachment correctly', async () => {
    const resource = await Transform.EC2.NetworkInterfaceAttachment(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 NetworkInterfacePermission correctly', async () => {
    const resource = await Transform.EC2.NetworkInterfacePermission(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 PlacementGroup correctly', async () => {
    const resource = await Transform.EC2.PlacementGroup(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 Route correctly', async () => {
    const resource = await Transform.EC2.Route('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 RouteTable correctly', async () => {
    const resource = await Transform.EC2.RouteTable(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 SecurityGroup correctly', async () => {
    const resource = await Transform.EC2.SecurityGroup(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 SecurityGroupEgress correctly', async () => {
    const resource = await Transform.EC2.SecurityGroupEgress(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 SecurityGroupIngress correctly', async () => {
    const resource = await Transform.EC2.SecurityGroupIngress(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 SpotFleet correctly', async () => {
    const resource = await Transform.EC2.SpotFleet(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 Subnet correctly', async () => {
    const resource = await Transform.EC2.Subnet('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 SubnetCidrBlockcorrectly', async () => {
    const resource = await Transform.EC2.SubnetCidrBlock(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 SubnetNetworkAclAssociation correctly', async () => {
    const resource = await Transform.EC2.SubnetNetworkAclAssociation(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 SubnetRouteTableAssociation correctly', async () => {
    const resource = await Transform.EC2.SubnetRouteTableAssociation(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 Volume correctly', async () => {
    const resource = await Transform.EC2.Volume('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VolumeAttachment correctly', async () => {
    const resource = await Transform.EC2.VolumeAttachment(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VPC correctly', async () => {
    const resource = await Transform.EC2.VPC('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VPCCidrBlock correctly', async () => {
    const resource = await Transform.EC2.VPCCidrBlock(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VPCDHCPOptionsAssociation correctly', async () => {
    const resource = await Transform.EC2.VPCDHCPOptionsAssociation(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VPCEndpoint correctly', async () => {
    const resource = await Transform.EC2.VPCEndpoint(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VPCGatewayAttachment correctly', async () => {
    const resource = await Transform.EC2.VPCGatewayAttachment(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VPCPeeringConnection correctly', async () => {
    const resource = await Transform.EC2.VPCPeeringConnection(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VPNConnection correctly', async () => {
    const resource = await Transform.EC2.VPNConnection(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VPNConnectionRoutecorrectly', async () => {
    const resource = await Transform.EC2.VPNConnectionRoute(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VPNGateway correctly', async () => {
    const resource = await Transform.EC2.VPNGateway(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  test('Can transform an EC2 VPNGatewayRoutePropagation correctly', async () => {
    const resource = await Transform.EC2.VPNGatewayRoutePropagation(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });

  /*
  test('Can transform an EC2 correctly', async () => {
    const resource = await Transform.EC2.(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {}
      }
    });
  });
  */
});
