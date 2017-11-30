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
    public describeAddresses(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              Addresses: [
                {
                  AllocationId: 'eipalloc-12345678',
                  AssociationId: 'eipassoc-12345678',
                  Domain: 'vpc',
                  InstanceId: 'i-1234567890abcdef0',
                  NetworkInterfaceId: 'eni-12345678',
                  NetworkInterfaceOwnerId: '123456789012',
                  PrivateIpAddress: '10.0.1.241',
                  PublicIp: '203.0.113.0'
                }
              ]
            });
          })
      };
    }
    public describeNatGateways(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              NatGateways: [
                {
                  CreateTime: new Date(),
                  NatGatewayAddresses: [
                    {
                      AllocationId: 'eipalloc-89c620ec',
                      NetworkInterfaceId: 'eni-9dec76cd',
                      PrivateIp: '10.0.0.149',
                      PublicIp: '198.11.222.333'
                    }
                  ],
                  NatGatewayId: 'nat-05dba92075d71c408',
                  State: 'available',
                  SubnetId: 'subnet-847e4dc2',
                  Tags: [{ Key: 'Test', Value: 'Value' }],
                  VpcId: 'vpc-1a2b3c4d'
                }
              ]
            });
          })
      };
    }
    public describeHosts(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              Hosts: [
                {
                  AutoPlacement: 'on',
                  AvailabilityZone: 'us-east-1a',
                  InstanceType: 't2-micro'
                }
              ]
            });
          })
      };
    }
    public describeInstances(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              Reservations: [
                {
                  Instances: [
                    {
                      ImageId: 'ami-12345678',
                      InstanceType: 't2-micro',
                      AmiLaunchIndex: 0,
                      KernelId: 'kernel-id',
                      KeyName: 'key-name',
                      LaunchTime: '1234567890',
                      Monitoring: { State: 'enabled' },
                      Placement: {
                        AvailabilityZone: 'us-east-1a',
                        Affinity: 'affinity',
                        GroupName: 'placement-name',
                        HostId: 'host-id',
                        Tenancy: 'default',
                        SpreadDomain: 'spread-domain'
                      },
                      Platform: 'Windows',
                      PrivateDnsName: 'dns.10.0.0.1',
                      PrivateIpAddress: '10.0.0.1',
                      ProductCodes: [
                        {
                          ProductCodeId: 'product-id',
                          ProductCodeType: 'devpay'
                        }
                      ],
                      PublicDnsName: 'i.example.com',
                      PublicIpAddress: '52.0.0.1',
                      RamdiskId: 'ramdisk-id',
                      State: {
                        Code: 16,
                        Name: 'running'
                      },
                      StateTransitionReason: 'reason',
                      Architecture: 'x86_64',
                      BlockDeviceMappings: [
                        {
                          DeviceName: '/dev/sdh',
                          Ebs: {
                            AttachTime: new Date(),
                            DeleteOnTermination: true,
                            Status: 'attached',
                            VolumeId: 'volume-id'
                          }
                        }
                      ],
                      ClientToken: 'client-token',
                      EbsOptimized: true,
                      EnaSupport: false,
                      Hypervisor: 'xen',
                      IamInstanceProfile: {
                        Arn: 'arn-arn',
                        Id: 'iam-id'
                      },
                      InstanceLifecycle: 'scheduled',
                      ElasticGpuAssociations: [
                        {
                          ElasticGpuId: 'elastic-gpu-id',
                          ElasticGpuAssociationId: 'elastic-id',
                          ElasticGpuAssociationState: 'enabled',
                          ElasticGpuAssociationTime: '0123456789'
                        }
                      ],
                      NetworkInterfaces: [
                        {
                          Association: {
                            IpOwnerId: 'owner-id',
                            PublicDnsName: 'i.example.com',
                            PublicIp: '52.0.0.1'
                          },
                          Attachment: {
                            AttachTime: new Date(),
                            AttachmentId: 'attachment-id',
                            DeleteOnTermination: true,
                            DeviceIndex: 0,
                            Status: 'attached'
                          },
                          Description: 'description',
                          Groups: [
                            {
                              GroupName: 'subnet-name',
                              GroupId: 'group-id'
                            },
                            {
                              GroupName: 'subnet-name2',
                              GroupId: 'group-id2'
                            }
                          ],
                          Ipv6Addresses: [
                            {
                              Ipv6Address: 'ip-address'
                            },
                            {
                              Ipv6Address: 'ip-address2'
                            }
                          ],
                          MacAddress: 'mac-address',
                          NetworkInterfaceId: 'network-interface-id',
                          OwnerId: 'owner-id',
                          PrivateDnsName: 'private.dns',
                          PrivateIpAddress: '10.0.0.1',
                          PrivateIpAddresses: [
                            {
                              Association: {
                                IpOwnerId: 'ip-owner-id',
                                PublicDnsName: 'public-dns-name',
                                PublicIp: '52.0.0.1'
                              },
                              Primary: true,
                              PrivateDnsName: 'private-dns-name',
                              PrivateIpAddress: '10.0.0.1'
                            }
                          ],
                          SubnetId: 'subnet-id',
                          VpcId: 'vpc-12345678'
                        }
                      ],
                      SourceDestCheck: false,
                      Status: 'available',
                      SubnetId: 'subnet-id',
                      Tags: [{ Key: 'Test', Value: 'Value' }],
                      VirtualizationType: 'hvm',
                      VpcId: 'vpc-12345678'
                    }
                  ]
                }
              ]
            });
          })
      };
    }
    public describeDhcpOptions(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              DhcpOptions: [
                {
                  DhcpConfigurations: [
                    {
                      Key: 'domain-name-servers',
                      Values: [
                        {
                          Value: '10.2.5.1'
                        },
                        {
                          Value: '10.2.5.2'
                        }
                      ]
                    },
                    {
                      Key: 'ntp-servers',
                      Values: [
                        {
                          Value: '10.2.5.3'
                        },
                        {
                          Value: '10.2.5.4'
                        }
                      ]
                    },
                    {
                      Key: 'netbios-name-servers',
                      Values: [
                        {
                          Value: '10.2.5.5'
                        },
                        {
                          Value: '10.2.5.6'
                        }
                      ]
                    },
                    { Key: 'netbios-node-type', Values: [{ Value: 1 }] },
                    { Key: 'domain-name', Values: [{ Value: 'example.com' }] }
                  ],
                  DhcpOptionsId: 'dopt-d9070ebb',
                  Tags: [{ Key: 'Test', Value: 'Value' }]
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
        Main: {
          Properties: {
            DomainName: 'example.com',
            DomainNameServers: ['10.2.5.1', '10.2.5.2'],
            NetbiosNameServers: ['10.2.5.3', '10.2.5.4'],
            NetbiosNodeType: 1,
            NtpServers: ['10.2.5.5', '10.2.5.6'],
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

  test('Can transform an EC2 EIP correctly', async () => {
    const resource = await Transform.EC2.EIP('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            Domain: 'vpc',
            InstanceId: 'i-1234567890abcdef0'
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

  test('Can transform an EC2 Host correctly', async () => {
    const resource = await Transform.EC2.Host('transform-test', AWS, 'Main');
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            AutoPlacement: 'on',
            AvailabilityZone: 'us-east-1a',
            InstanceType: 't2-micro'
          },
          Type: 'AWS::EC2::Host'
        }
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
        Main: {
          Properties: {
            // AdditionalInfo: String,
            Affinity: 'affinity',
            AvailabilityZone: 'us-east-1a',
            /*BlockDeviceMappings: [{
              "DeviceName" : "/dev/sdh",
              "Ebs" : {
                "DeleteOnTermination" : true,
                "Encrypted" : Boolean,
                "Iops" : Number,
                "SnapshotId" : String,
                "VolumeSize" : String,
                "VolumeType" : String
             }
           }],*/
            // DisableApiTermination: true,
            EbsOptimized: true,
            HostId: 'host-id',
            IamInstanceProfile: 'arn-arn',
            ImageId: 'ami-12345678',
            // InstanceInitiatedShutdownBehavior: String,
            InstanceType: 't2-micro',
            Ipv6AddressCount: 2,
            Ipv6Addresses: ['ip-address', 'ip-address2'],
            KernelId: 'kernel-id',
            KeyName: 'key-name',
            Monitoring: true,
            NetworkInterfaces: [
              {
                AssociatePublicIpAddress: '52.0.0.1',
                DeleteOnTermination: true,
                Description: 'description',
                DeviceIndex: 0,
                GroupSet: ['group-id', 'group-id2'],
                NetworkInterfaceId: 'network-interface-id',
                Ipv6AddressCount: 2,
                Ipv6Addresses: ['ip-address', 'ip-address2'],
                PrivateIpAddress: '10.0.0.1',
                PrivateIpAddresses: [
                  { Primary: true, PrivateIpAddress: '10.0.0.1' }
                ],
                // SecondaryPrivateIpAddressCount: 0,
                SubnetId: 'subnet-id'
              }
            ],
            PlacementGroupName: 'placement-name',
            PrivateIpAddress: '10.0.0.1',
            RamdiskId: 'ramdisk-id',
            SecurityGroupIds: ['group-id', 'group-id2'],
            // SecurityGroups: [],
            SourceDestCheck: false,
            // "SsmAssociations" : [ SSMAssociation, ... ],
            SubnetId: 'subnet-id',
            Tags: [{ Key: 'Test', Value: 'Value' }],
            Tenancy: 'default'
            // UserData: String
            // Volumes: []
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
        Main: {
          Properties: {
            AllocationId: 'eipalloc-89c620ec',
            SubnetId: 'subnet-847e4dc2',
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
