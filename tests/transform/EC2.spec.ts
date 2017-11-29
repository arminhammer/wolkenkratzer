const { Template, Transform } = require('../../src/index');

const AWS = {
  EC2: class EC2 {
    public describeEgressOnlyInternetGateways(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              EgressOnlyInternetGateways: [
                {
                  Attachments: [
                    {
                      State: 'attached',
                      VpcId: 'vpc-12345678'
                    }
                  ],
                  EgressOnlyInternetGatewayId: 'eigw-1234567890abcdefg'
                }
              ]
            });
          })
      };
    }
    public describeRouteTables(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              RouteTables: [
                {
                  Associations: [
                    {
                      Main: true,
                      RouteTableAssociationId: 'rtbassoc-d8ccddba',
                      RouteTableId: 'rtb-1f382e7d'
                    }
                  ],
                  PropagatingVgws: [],
                  RouteTableId: 'rtb-1f382e7d',
                  Routes: [
                    {
                      DestinationCidrBlock: '10.0.0.0/16',
                      GatewayId: 'local',
                      State: 'active'
                    }
                  ],
                  Tags: [{ Key: 'Test', Value: 'Value' }],
                  VpcId: 'vpc-12345678'
                }
              ]
            });
          })
      };
    }
    public describeInternetGateways(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              InternetGateways: [
                {
                  Attachments: [
                    {
                      State: 'available',
                      VpcId: 'vpc-a01106c2'
                    }
                  ],
                  InternetGatewayId: 'igw-c0a643a9',
                  Tags: [{ Key: 'Test', Value: 'Value' }]
                }
              ]
            });
          })
      };
    }
    public describeCustomerGateways(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              CustomerGateways: [
                {
                  BgpAsn: '65534',
                  CustomerGatewayId: 'cgw-0e11f167',
                  IpAddress: '12.1.2.3',
                  State: 'available',
                  Tags: [{ Key: 'Test', Value: 'Value' }],
                  Type: 'ipsec.1'
                }
              ]
            });
          })
      };
    }
    public describeFlowLogs(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              FlowLogs: [
                {
                  DeliverLogsPermissionArn: 'test-arn',
                  LogGroupName: 'group-name',
                  ResourceId: 'resource-id',
                  ResourceType: 'VPC',
                  TrafficType: 'ACCEPT'
                }
              ]
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
        Main: {
          Properties: {
            BgpAsn: 65534,
            IpAddress: '12.1.2.3',
            Tags: [{ Key: 'Test', Value: 'Value' }],
            Type: 'ipsec.1'
          },
          Type: 'AWS::EC2::CustomerGateway'
        }
      }
    });
  });

  test.skip('Can transform an EC2 DHCPOptions correctly', async () => {
    const resource = await Transform.EC2.DHCPOptions(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            DomainName: 'example.com',
            DomainNameServers: ['10.0.0.1', '10.0.0.2'],
            NetbiosNameServers: ['10.0.0.1', '10.0.0.2'],
            NetbiosNodeType: 1,
            NtpServers: ['10.0.0.1'],
            Tags: [{ Key: 'Test', Value: 'Value' }]
          },
          Type: 'AWS::EC2::DHCPOptions'
        }
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
        Main: {
          Properties: {
            VpcId: 'vpc-12345678'
          },
          Type: 'AWS::EC2::EgressOnlyInternetGateway'
        }
      }
    });
  });

  test.skip('Can transform an EC2 EIP correctly', async () => {
    const resource = await Transform.EC2.EIP('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            Domain: 'vpc-1234578',
            InstanceId: 'i-12345678'
          },
          Type: 'AWS::EC2::EIP'
        }
      }
    });
  });

  test.skip('Can transform an EC2 EIPAssociation correctly', async () => {
    const resource = await Transform.EC2.EIPAssociation(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            AllocationId: String,
            EIP: '52.0.0.1',
            InstanceId: 'i-12345678',
            NetworkInterfaceId: String,
            PrivateIpAddress: '10.0.0.1'
          },
          Type: 'AWS::EC2::EIPAssociation'
        }
      }
    });
  });

  test('Can transform an EC2 FlowLog correctly', async () => {
    const resource = await Transform.EC2.FlowLog('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            DeliverLogsPermissionArn: 'test-arn',
            LogGroupName: 'group-name',
            ResourceId: 'resource-id',
            ResourceType: 'VPC',
            TrafficType: 'ACCEPT'
          },
          Type: 'AWS::EC2::FlowLog'
        }
      }
    });
  });

  test.skip('Can transform an EC2 Host correctly', async () => {
    const resource = await Transform.EC2.Host('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            AutoPlacement: String,
            AvailabilityZone: String,
            InstanceType: String
          },
          Type: 'AWS::EC2::Host'
        }
      }
    });
  });

  test.skip('Can transform an EC2 Instance correctly', async () => {
    const resource = await Transform.EC2.Instance(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            AdditionalInfo: String,
            Affinity: String,
            AvailabilityZone: String,
            // "BlockDeviceMappings" : [ EC2 Block Device Mapping, ... ],
            DisableApiTermination: Boolean,
            EbsOptimized: Boolean,
            HostId: String,
            IamInstanceProfile: String,
            ImageId: String,
            InstanceInitiatedShutdownBehavior: String,
            InstanceType: String,
            Ipv6AddressCount: 1,
            // "Ipv6Addresses" : [ IPv6 Address Type, ... ],
            KernelId: String,
            KeyName: String,
            Monitoring: Boolean,
            // "NetworkInterfaces" : [ EC2 Network Interface, ... ],
            PlacementGroupName: String,
            PrivateIpAddress: String,
            RamdiskId: String,
            // "SecurityGroupIds" : [ String, ... ],
            // "SecurityGroups" : [ String, ... ],
            SourceDestCheck: Boolean,
            // "SsmAssociations" : [ SSMAssociation, ... ],
            SubnetId: String,
            // "Tags" : [ Resource Tag, ... ],
            Tenancy: String,
            UserData: String
            // "Volumes" : [ EC2 MountPoint, ... ]
          },
          Type: 'AWS::EC2::Instance'
        }
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
        Main: {
          Properties: {
            Tags: [{ Key: 'Test', Value: 'Value' }]
          },
          Type: 'AWS::EC2::InternetGateway'
        }
      }
    });
  });

  test.skip('Can transform an EC2 NatGateway correctly', async () => {
    const resource = await Transform.EC2.NatGateway(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            AllocationId: String,
            SubnetId: String,
            Tags: [{ Key: 'Test', Value: 'Value' }]
          },
          Type: 'AWS::EC2::NatGateway'
        }
      }
    });
  });

  test.skip('Can transform an EC2 NetworkAcl correctly', async () => {
    const resource = await Transform.EC2.NetworkAcl(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            Tags: [{ Key: 'Test', Value: 'Value' }],
            VpcId: String
          },
          Type: 'AWS::EC2::NetworkAcl'
        }
      }
    });
  });

  test.skip('Can transform an EC2 NetworkAclEntry correctly', async () => {
    const resource = await Transform.EC2.NetworkAclEntry(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            CidrBlock: String,
            Egress: Boolean,
            // "Icmp" : EC2 ICMP,
            Ipv6CidrBlock: String,
            NetworkAclId: String,
            //  "PortRange" : EC2 PortRange,
            // "Protocol" : Integer,
            RuleAction: String
            // "RuleNumber" : Integer
          },
          Type: 'AWS::EC2::NetworkAclEntry'
        }
      }
    });
  });

  test.skip('Can transform an EC2 NetworkInterface correctly', async () => {
    const resource = await Transform.EC2.NetworkInterface(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            Description: String,
            // "GroupSet" : [ String, ... ],
            // "Ipv6AddressCount" : Integer,
            // "Ipv6Addresses" : [ Ipv6Address, ... ],
            PrivateIpAddress: String,
            // "PrivateIpAddresses" : [ PrivateIpAddressSpecification, ... ],
            // "SecondaryPrivateIpAddressCount" : Integer,
            SourceDestCheck: Boolean,
            SubnetId: String
            // "Tags" : [ Resource Tag, ... ]
          },
          Type: 'AWS::EC2::NetworkInterface'
        }
      }
    });
  });

  test.skip('Can transform an EC2 NetworkInterfaceAttachment correctly', async () => {
    const resource = await Transform.EC2.NetworkInterfaceAttachment(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            DeleteOnTermination: Boolean,
            DeviceIndex: String,
            InstanceId: String,
            NetworkInterfaceId: String
          },
          Type: 'AWS::EC2::NetworkInterfaceAttachment'
        }
      }
    });
  });

  test.skip('Can transform an EC2 NetworkInterfacePermission correctly', async () => {
    const resource = await Transform.EC2.NetworkInterfacePermission(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            AwsAccountId: String,
            NetworkInterfaceId: String,
            Permission: String
          },
          Type: 'AWS::EC2::NetworkInterfacePermission'
        }
      }
    });
  });

  test.skip('Can transform an EC2 PlacementGroup correctly', async () => {
    const resource = await Transform.EC2.PlacementGroup(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            Strategy: String
          },
          Type: 'AWS::EC2::PlacementGroup'
        }
      }
    });
  });

  test.skip('Can transform an EC2 Route correctly', async () => {
    const resource = await Transform.EC2.Route('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            DestinationCidrBlock: String,
            DestinationIpv6CidrBlock: String,
            EgressOnlyInternetGatewayId: String,
            GatewayId: String,
            InstanceId: String,
            NatGatewayId: String,
            NetworkInterfaceId: String,
            RouteTableId: String,
            VpcPeeringConnectionId: String
          },
          Type: 'AWS::EC2::Route'
        }
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
        Main: {
          Properties: {
            Tags: [{ Key: 'Test', Value: 'Value' }],
            VpcId: 'vpc-12345678'
          },
          Type: 'AWS::EC2::RouteTable'
        }
      }
    });
  });

  test.skip('Can transform an EC2 SecurityGroup correctly', async () => {
    const resource = await Transform.EC2.SecurityGroup(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            GroupDescription: String,
            GroupName: String,
            //  "SecurityGroupEgress" : [ Security Group Rule, ... ],
            // "SecurityGroupIngress" : [ Security Group Rule, ... ],
            // "Tags" :  [ Resource Tag, ... ],
            VpcId: String
          },
          Type: 'AWS::EC2::SecurityGroup'
        }
      }
    });
  });

  test.skip('Can transform an EC2 SecurityGroupEgress correctly', async () => {
    const resource = await Transform.EC2.SecurityGroupEgress(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            CidrIp: String,
            CidrIpv6: String,
            Description: String,
            DestinationPrefixListId: String,
            DestinationSecurityGroupId: String,
            FromPort: 80,
            GroupId: String,
            IpProtocol: String,
            ToPort: 80
          },
          Type: 'AWS::EC2::SecurityGroupEgress'
        }
      }
    });
  });

  test.skip('Can transform an EC2 SecurityGroupIngress correctly', async () => {
    const resource = await Transform.EC2.SecurityGroupIngress(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            CidrIp: String,
            CidrIpv6: String,
            Description: String,
            FromPort: 80,
            GroupId: String,
            GroupName: String,
            IpProtocol: String,
            SourceSecurityGroupId: String,
            SourceSecurityGroupName: String,
            SourceSecurityGroupOwnerId: String,
            ToPort: 80
          },
          Type: 'AWS::EC2::SecurityGroupIngress'
        }
      }
    });
  });

  test.skip('Can transform an EC2 SpotFleet correctly', async () => {
    const resource = await Transform.EC2.SpotFleet(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            // "SpotFleetRequestConfigData" : SpotFleetRequestConfigData
          },
          Type: 'AWS::EC2::SpotFleet'
        }
      }
    });
  });

  test.skip('Can transform an EC2 Subnet correctly', async () => {
    const resource = await Transform.EC2.Subnet('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            AssignIpv6AddressOnCreation: Boolean,
            AvailabilityZone: String,
            CidrBlock: String,
            Ipv6CidrBlock: String,
            MapPublicIpOnLaunch: Boolean,
            // "Tags" : [ Resource Tag, ... ],
            VpcId: String
          },
          Type: 'AWS::EC2::Subnet'
        }
      }
    });
  });

  test.skip('Can transform an EC2 SubnetCidrBlockcorrectly', async () => {
    const resource = await Transform.EC2.SubnetCidrBlock(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            Ipv6CidrBlock: String,
            SubnetId: String
          },
          Type: 'AWS::EC2::SubnetCidrBlock'
        }
      }
    });
  });

  test.skip('Can transform an EC2 SubnetNetworkAclAssociation correctly', async () => {
    const resource = await Transform.EC2.SubnetNetworkAclAssociation(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            NetworkAclId: String,
            SubnetId: String
          },
          Type: 'AWS::EC2::SubnetNetworkAclAssociation'
        }
      }
    });
  });

  test.skip('Can transform an EC2 SubnetRouteTableAssociation correctly', async () => {
    const resource = await Transform.EC2.SubnetRouteTableAssociation(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            RouteTableId: String,
            SubnetId: String
          },
          Type: 'AWS::EC2::SubnetRouteTableAssociation'
        }
      }
    });
  });

  test.skip('Can transform an EC2 Volume correctly', async () => {
    const resource = await Transform.EC2.Volume('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            AutoEnableIO: Boolean,
            AvailabilityZone: String,
            Encrypted: Boolean,
            Iops: Number,
            KmsKeyId: String,
            Size: 100000,
            SnapshotId: String,
            // "Tags" : [ Resource Tag, ... ],
            VolumeType: String
          },
          Type: 'AWS::EC2::Volume'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VolumeAttachment correctly', async () => {
    const resource = await Transform.EC2.VolumeAttachment(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            Device: String,
            InstanceId: String,
            VolumeId: String
          },
          Type: 'AWS::EC2::VolumeAttachment'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VPC correctly', async () => {
    const resource = await Transform.EC2.VPC('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            CidrBlock: String,
            EnableDnsHostnames: Boolean,
            EnableDnsSupport: Boolean,
            InstanceTenancy: String
            // "Tags" : [ Resource Tag, ... ]
          },
          Type: 'AWS::EC2::VPC'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VPCCidrBlock correctly', async () => {
    const resource = await Transform.EC2.VPCCidrBlock(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            AmazonProvidedIpv6CidrBlock: Boolean,
            CidrBlock: String,
            VpcId: String
          },
          Type: 'AWS::EC2::VPCCidrBlock'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VPCDHCPOptionsAssociation correctly', async () => {
    const resource = await Transform.EC2.VPCDHCPOptionsAssociation(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            DhcpOptionsId: String,
            VpcId: String
          },
          Type: 'AWS::EC2::VPCDHCPOptionsAssociation'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VPCEndpoint correctly', async () => {
    const resource = await Transform.EC2.VPCEndpoint(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            // "PolicyDocument" : JSON object,
            // "RouteTableIds" : [ String, ... ],
            ServiceName: String,
            VpcId: String
          },
          Type: 'AWS::EC2::VPCEndpoint'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VPCGatewayAttachment correctly', async () => {
    const resource = await Transform.EC2.VPCGatewayAttachment(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            InternetGatewayId: String,
            VpcId: String,
            VpnGatewayId: String
          },
          Type: 'AWS::EC2::VPCGatewayAttachment'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VPCPeeringConnection correctly', async () => {
    const resource = await Transform.EC2.VPCPeeringConnection(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            // "Tags" : [ Resource Tag, ... ],
            PeerOwnerId: String,
            PeerRoleArn: String,
            PeerVpcId: String,
            VpcId: String
          },
          Type: 'AWS::EC2::VPCPeeringConnection'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VPNConnection correctly', async () => {
    const resource = await Transform.EC2.VPNConnection(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            // "CustomerGatewayId" : GatewayID,
            StaticRoutesOnly: Boolean,
            Type: String
            // "Tags" :  [ Resource Tag, ... ],
            // "VpnGatewayId" : GatewayID,
            // "VpnTunnelOptionsSpecifications" : [ VpnTunnelOptionsSpecification, ... ]
          },
          Type: 'AWS::EC2::VPNConnection'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VPNConnectionRoutecorrectly', async () => {
    const resource = await Transform.EC2.VPNConnectionRoute(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            DestinationCidrBlock: String,
            VpnConnectionId: String
          },
          Type: 'AWS::EC2::VPNConnectionRoute'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VPNGateway correctly', async () => {
    const resource = await Transform.EC2.VPNGateway(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            // "AmazonSideAsn" : Long,
            Type: String
            // "Tags" : [ Resource Tag, ... ]
          },
          Type: 'AWS::EC2::VPNGateway'
        }
      }
    });
  });

  test.skip('Can transform an EC2 VPNGatewayRoutePropagation correctly', async () => {
    const resource = await Transform.EC2.VPNGatewayRoutePropagation(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            // "RouteTableIds" : [ String, ... ],
            VpnGatewayId: String
          },
          Type: 'AWS::EC2::VPNGatewayRoutePropagation'
        }
      }
    });
  });
});
