const {
  Template,
  Description,
  Parameter,
  getInstanceTypeList,
  getInstanceTypeNameList,
  EC2,
  Output,
  FnJoin,
  Mapping,
  CreationPolicy,
  ResourceMetadata
} = require('../dist/index');

let t = Template()
  .add(
    Description(
      'AWS CloudFormation Sample Template WordPress_Single_Instance: WordPress is web software you can use to create a beautiful website or blog. This template installs WordPress with a local MySQL database for storage. It demonstrates using the AWS CloudFormation bootstrap scripts to deploy WordPress. **WARNING** This template creates an Amazon EC2 instance. You will be billed for the AWS resources used if you create a stack from this template.'
    )
  )
  .add(
    Parameter('KeyName', {
      Description: 'Name of an existing EC2 KeyPair to enable SSH access to the instances',
      Type: 'AWS::EC2::KeyPair::KeyName',
      ConstraintDescription: 'must be the name of an existing EC2 KeyPair.'
    })
  )
  .add(
    Parameter('InstanceType', {
      Description: 'WebServer EC2 instance type',
      Type: 'String',
      Default: 't2.small',
      AllowedValues: getInstanceTypeNameList(),
      ConstraintDescription: 'must be a valid EC2 instance type.'
    })
  )
  .add(
    Parameter('SSHLocation', {
      Description: 'The IP address range that can be used to SSH to the EC2 instances',
      Type: 'String',
      MinLength: '9',
      MaxLength: '18',
      Default: '0.0.0.0/0',
      AllowedPattern: '(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})/(\\d{1,2})',
      ConstraintDescription: 'must be a valid IP CIDR range of the form x.x.x.x/x.'
    })
  )
  .add(
    Parameter('DBName', {
      Default: 'wordpressdb',
      Description: 'The WordPress database name',
      Type: 'String',
      MinLength: '1',
      MaxLength: '64',
      AllowedPattern: '[a-zA-Z][a-zA-Z0-9]*',
      ConstraintDescription: 'must begin with a letter and contain only alphanumeric characters.'
    })
  )
  .add(
    Parameter('DBUser', {
      NoEcho: 'true',
      Description: 'The WordPress database admin account username',
      Type: 'String',
      MinLength: '1',
      MaxLength: '16',
      AllowedPattern: '[a-zA-Z][a-zA-Z0-9]*',
      ConstraintDescription: 'must begin with a letter and contain only alphanumeric characters.'
    })
  )
  .add(
    Parameter('DBPassword', {
      NoEcho: 'true',
      Description: 'The WordPress database admin account password',
      Type: 'String',
      MinLength: '8',
      MaxLength: '41',
      AllowedPattern: '[a-zA-Z0-9]*',
      ConstraintDescription: 'must contain only alphanumeric characters.'
    })
  )
  .add(
    Parameter('DBRootPassword', {
      NoEcho: 'true',
      Description: 'MySQL root password',
      Type: 'String',
      MinLength: '8',
      MaxLength: '41',
      AllowedPattern: '[a-zA-Z0-9]*',
      ConstraintDescription: 'must contain only alphanumeric characters.'
    })
  )
  .add(
    EC2.SecurityGroup('WebServerSecurityGroup', {
      GroupDescription: 'Enable HTTP access via port 80 locked down to the load balancer + SSH access',
      SecurityGroupIngress: [
        {
          IpProtocol: 'tcp',
          FromPort: '80',
          ToPort: '80',
          CidrIp: '0.0.0.0/0'
        },
        {
          IpProtocol: 'tcp',
          FromPort: '22',
          ToPort: '22',
          CidrIp: {
            Ref: 'SSHLocation'
          }
        }
      ]
    })
  )
  .add(
    EC2.Instance('WebServer', {
      ImageId: {
        'Fn::FindInMap': [
          'AWSRegionArch2AMI',
          {
            Ref: 'AWS::Region'
          },
          {
            'Fn::FindInMap': [
              'AWSInstanceType2Arch',
              {
                Ref: 'InstanceType'
              },
              'Arch'
            ]
          }
        ]
      },
      InstanceType: {
        Ref: 'InstanceType'
      },
      SecurityGroups: [
        {
          Ref: 'WebServerSecurityGroup'
        }
      ],
      KeyName: {
        Ref: 'KeyName'
      },
      UserData: {
        'Fn::Base64': {
          'Fn::Join': [
            '',
            [
              '#!/bin/bash -xe\n',
              'yum update -y aws-cfn-bootstrap\n',
              '/opt/aws/bin/cfn-init -v ',
              '         --stack ',
              {
                Ref: 'AWS::StackName'
              },
              '         --resource WebServer ',
              '         --configsets wordpress_install ',
              '         --region ',
              {
                Ref: 'AWS::Region'
              },
              '\n',
              '/opt/aws/bin/cfn-signal -e $? ',
              '         --stack ',
              {
                Ref: 'AWS::StackName'
              },
              '         --resource WebServer ',
              '         --region ',
              {
                Ref: 'AWS::Region'
              },
              '\n'
            ]
          ]
        }
      }
      /*"Metadata": {
        "AWS::CloudFormation::Init": {
          "configSets": {
            "wordpress_install": [
              "install_cfn",
              "install_wordpress",
              "configure_wordpress"
            ]
          },
          "install_cfn": {
            "files": {
              "/etc/cfn/cfn-hup.conf": {
                "content": {
                  "Fn::Join": [
                    "",
                    [
                      "[main]\n",
                      "stack=",
                      {
                        "Ref": "AWS::StackId"
                      },
                      "\n",
                      "region=",
                      {
                        "Ref": "AWS::Region"
                      },
                      "\n"
                    ]
                  ]
                },
                "mode": "000400",
                "owner": "root",
                "group": "root"
              },
              "/etc/cfn/hooks.d/cfn-auto-reloader.conf": {
                "content": {
                  "Fn::Join": [
                    "",
                    [
                      "[cfn-auto-reloader-hook]\n",
                      "triggers=post.update\n",
                      "path=Resources.WebServer.Metadata.AWS::CloudFormation::Init\n",
                      "action=/opt/aws/bin/cfn-init -v ",
                      "         --stack ",
                      {
                        "Ref": "AWS::StackName"
                      },
                      "         --resource WebServer ",
                      "         --configsets wordpress_install ",
                      "         --region ",
                      {
                        "Ref": "AWS::Region"
                      },
                      "\n"
                    ]
                  ]
                },
                "mode": "000400",
                "owner": "root",
                "group": "root"
              }
            },
            "services": {
              "sysvinit": {
                "cfn-hup": {
                  "enabled": "true",
                  "ensureRunning": "true",
                  "files": [
                    "/etc/cfn/cfn-hup.conf",
                    "/etc/cfn/hooks.d/cfn-auto-reloader.conf"
                  ]
                }
              }
            }
          },
          "install_wordpress": {
            "packages": {
              "yum": {
                "php": [],
                "php-mysql": [],
                "mysql": [],
                "mysql-server": [],
                "mysql-devel": [],
                "mysql-libs": [],
                "httpd": []
              }
            },
            "sources": {
              "/var/www/html": "http://wordpress.org/latest.tar.gz"
            },
            "files": {
              "/tmp/setup.mysql": {
                "content": {
                  "Fn::Join": [
                    "",
                    [
                      "CREATE DATABASE ",
                      {
                        "Ref": "DBName"
                      },
                      ";\n",
                      "CREATE USER '",
                      {
                        "Ref": "DBUser"
                      },
                      "'@'localhost' IDENTIFIED BY '",
                      {
                        "Ref": "DBPassword"
                      },
                      "';\n",
                      "GRANT ALL ON ",
                      {
                        "Ref": "DBName"
                      },
                      ".* TO '",
                      {
                        "Ref": "DBUser"
                      },
                      "'@'localhost';\n",
                      "FLUSH PRIVILEGES;\n"
                    ]
                  ]
                },
                "mode": "000400",
                "owner": "root",
                "group": "root"
              },
              "/tmp/create-wp-config": {
                "content": {
                  "Fn::Join": [
                    "",
                    [
                      "#!/bin/bash -xe\n",
                      "cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php\n",
                      "sed -i \"s/'database_name_here'/'",
                      {
                        "Ref": "DBName"
                      },
                      "'/g\" wp-config.php\n",
                      "sed -i \"s/'username_here'/'",
                      {
                        "Ref": "DBUser"
                      },
                      "'/g\" wp-config.php\n",
                      "sed -i \"s/'password_here'/'",
                      {
                        "Ref": "DBPassword"
                      },
                      "'/g\" wp-config.php\n"
                    ]
                  ]
                },
                "mode": "000500",
                "owner": "root",
                "group": "root"
              }
            },
            "services": {
              "sysvinit": {
                "httpd": {
                  "enabled": "true",
                  "ensureRunning": "true"
                },
                "mysqld": {
                  "enabled": "true",
                  "ensureRunning": "true"
                }
              }
            }
          },
          "configure_wordpress": {
            "commands": {
              "01_set_mysql_root_password": {
                "command": {
                  "Fn::Join": [
                    "",
                    [
                      "mysqladmin -u root password '",
                      {
                        "Ref": "DBRootPassword"
                      },
                      "'"
                    ]
                  ]
                },
                "test": {
                  "Fn::Join": [
                    "",
                    [
                      "$(mysql ",
                      {
                        "Ref": "DBName"
                      },
                      " -u root --password='",
                      {
                        "Ref": "DBRootPassword"
                      },
                      "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"
                    ]
                  ]
                }
              },
              "02_create_database": {
                "command": {
                  "Fn::Join": [
                    "",
                    [
                      "mysql -u root --password='",
                      {
                        "Ref": "DBRootPassword"
                      },
                      "' < /tmp/setup.mysql"
                    ]
                  ]
                },
                "test": {
                  "Fn::Join": [
                    "",
                    [
                      "$(mysql ",
                      {
                        "Ref": "DBName"
                      },
                      " -u root --password='",
                      {
                        "Ref": "DBRootPassword"
                      },
                      "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"
                    ]
                  ]
                }
              },
              "03_configure_wordpress": {
                "command": "/tmp/create-wp-config",
                "cwd": "/var/www/html/wordpress"
              }
            }
          }
        }
      },*/
      /*"CreationPolicy": {
        "ResourceSignal": {
          "Timeout": "PT15M"
        }
      }*/
    })
  )
  .add(
    Output('WebsiteURL', {
      Value: FnJoin('', [
        'http://',
        {
          'Fn::GetAtt': ['WebServer', 'PublicDnsName']
        },
        '/wordpress'
      ]),
      Description: 'WordPress Website'
    })
  )
  .add(
    CreationPolicy('WebServer', {
      ResourceSignal: {
        Timeout: 'PT15M'
      }
    })
  )
  .add(
    ResourceMetadata('WebServer', {
      'AWS::CloudFormation::Init': {
        configSets: {
          wordpress_install: [
            'install_cfn',
            'install_wordpress',
            'configure_wordpress'
          ]
        },
        install_cfn: {
          files: {
            '/etc/cfn/cfn-hup.conf': {
              content: {
                'Fn::Join': [
                  '',
                  [
                    '[main]\n',
                    'stack=',
                    {
                      Ref: 'AWS::StackId'
                    },
                    '\n',
                    'region=',
                    {
                      Ref: 'AWS::Region'
                    },
                    '\n'
                  ]
                ]
              },
              mode: '000400',
              owner: 'root',
              group: 'root'
            },
            '/etc/cfn/hooks.d/cfn-auto-reloader.conf': {
              content: {
                'Fn::Join': [
                  '',
                  [
                    '[cfn-auto-reloader-hook]\n',
                    'triggers=post.update\n',
                    'path=Resources.WebServer.Metadata.AWS::CloudFormation::Init\n',
                    'action=/opt/aws/bin/cfn-init -v ',
                    '         --stack ',
                    {
                      Ref: 'AWS::StackName'
                    },
                    '         --resource WebServer ',
                    '         --configsets wordpress_install ',
                    '         --region ',
                    {
                      Ref: 'AWS::Region'
                    },
                    '\n'
                  ]
                ]
              },
              mode: '000400',
              owner: 'root',
              group: 'root'
            }
          },
          services: {
            sysvinit: {
              'cfn-hup': {
                enabled: 'true',
                ensureRunning: 'true',
                files: [
                  '/etc/cfn/cfn-hup.conf',
                  '/etc/cfn/hooks.d/cfn-auto-reloader.conf'
                ]
              }
            }
          }
        },
        install_wordpress: {
          packages: {
            yum: {
              php: [],
              'php-mysql': [],
              mysql: [],
              'mysql-server': [],
              'mysql-devel': [],
              'mysql-libs': [],
              httpd: []
            }
          },
          sources: {
            '/var/www/html': 'http://wordpress.org/latest.tar.gz'
          },
          files: {
            '/tmp/setup.mysql': {
              content: {
                'Fn::Join': [
                  '',
                  [
                    'CREATE DATABASE ',
                    {
                      Ref: 'DBName'
                    },
                    ';\n',
                    "CREATE USER '",
                    {
                      Ref: 'DBUser'
                    },
                    "'@'localhost' IDENTIFIED BY '",
                    {
                      Ref: 'DBPassword'
                    },
                    "';\n",
                    'GRANT ALL ON ',
                    {
                      Ref: 'DBName'
                    },
                    ".* TO '",
                    {
                      Ref: 'DBUser'
                    },
                    "'@'localhost';\n",
                    'FLUSH PRIVILEGES;\n'
                  ]
                ]
              },
              mode: '000400',
              owner: 'root',
              group: 'root'
            },
            '/tmp/create-wp-config': {
              content: {
                'Fn::Join': [
                  '',
                  [
                    '#!/bin/bash -xe\n',
                    'cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php\n',
                    "sed -i \"s/'database_name_here'/'",
                    {
                      Ref: 'DBName'
                    },
                    '\'/g" wp-config.php\n',
                    "sed -i \"s/'username_here'/'",
                    {
                      Ref: 'DBUser'
                    },
                    '\'/g" wp-config.php\n',
                    "sed -i \"s/'password_here'/'",
                    {
                      Ref: 'DBPassword'
                    },
                    '\'/g" wp-config.php\n'
                  ]
                ]
              },
              mode: '000500',
              owner: 'root',
              group: 'root'
            }
          },
          services: {
            sysvinit: {
              httpd: {
                enabled: 'true',
                ensureRunning: 'true'
              },
              mysqld: {
                enabled: 'true',
                ensureRunning: 'true'
              }
            }
          }
        },
        configure_wordpress: {
          commands: {
            '01_set_mysql_root_password': {
              command: {
                'Fn::Join': [
                  '',
                  [
                    "mysqladmin -u root password '",
                    {
                      Ref: 'DBRootPassword'
                    },
                    "'"
                  ]
                ]
              },
              test: {
                'Fn::Join': [
                  '',
                  [
                    '$(mysql ',
                    {
                      Ref: 'DBName'
                    },
                    " -u root --password='",
                    {
                      Ref: 'DBRootPassword'
                    },
                    "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"
                  ]
                ]
              }
            },
            '02_create_database': {
              command: {
                'Fn::Join': [
                  '',
                  [
                    "mysql -u root --password='",
                    {
                      Ref: 'DBRootPassword'
                    },
                    "' < /tmp/setup.mysql"
                  ]
                ]
              },
              test: {
                'Fn::Join': [
                  '',
                  [
                    '$(mysql ',
                    {
                      Ref: 'DBName'
                    },
                    " -u root --password='",
                    {
                      Ref: 'DBRootPassword'
                    },
                    "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"
                  ]
                ]
              }
            },
            '03_configure_wordpress': {
              command: '/tmp/create-wp-config',
              cwd: '/var/www/html/wordpress'
            }
          }
        }
      }
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'us-east-1', {
      PV64: 'ami-2a69aa47',
      HVM64: 'ami-6869aa05',
      HVMG2: 'ami-61e27177'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'us-west-2', {
      PV64: 'ami-7f77b31f',
      HVM64: 'ami-7172b611',
      HVMG2: 'ami-60aa3700'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'us-west-1', {
      PV64: 'ami-a2490dc2',
      HVM64: 'ami-31490d51',
      HVMG2: 'ami-4b694d2b'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'eu-west-1', {
      PV64: 'ami-4cdd453f',
      HVM64: 'ami-f9dd458a',
      HVMG2: 'ami-2955524f'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'eu-west-2', {
      PV64: 'NOT_SUPPORTED',
      HVM64: 'ami-886369ec',
      HVMG2: 'NOT_SUPPORTED'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'eu-central-1', {
      PV64: 'ami-6527cf0a',
      HVM64: 'ami-ea26ce85',
      HVMG2: 'ami-81ac71ee'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'ap-northeast-1', {
      PV64: 'ami-3e42b65f',
      HVM64: 'ami-374db956',
      HVMG2: 'ami-46220c21'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'ap-northeast-2', {
      PV64: 'NOT_SUPPORTED',
      HVM64: 'ami-2b408b45',
      HVMG2: 'NOT_SUPPORTED'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'ap-southeast-1', {
      PV64: 'ami-df9e4cbc',
      HVM64: 'ami-a59b49c6',
      HVMG2: 'ami-c212aba1'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'ap-southeast-2', {
      PV64: 'ami-63351d00',
      HVM64: 'ami-dc361ebf',
      HVMG2: 'ami-0ad2db69'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'ap-south-1', {
      PV64: 'NOT_SUPPORTED',
      HVM64: 'ami-ffbdd790',
      HVMG2: 'ami-ca3042a5'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'us-east-2', {
      PV64: 'NOT_SUPPORTED',
      HVM64: 'ami-f6035893',
      HVMG2: 'NOT_SUPPORTED'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'ca-central-1', {
      PV64: 'NOT_SUPPORTED',
      HVM64: 'ami-730ebd17',
      HVMG2: 'NOT_SUPPORTED'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'sa-east-1', {
      PV64: 'ami-1ad34676',
      HVM64: 'ami-6dd04501',
      HVMG2: 'NOT_SUPPORTED'
    })
  )
  .add(
    Mapping('AWSRegionArch2AMI', 'cn-north-1', {
      PV64: 'ami-77559f1a',
      HVM64: 'ami-8e6aa0e3',
      HVMG2: 'NOT_SUPPORTED'
    })
  );

getInstanceTypeList().map(instanceType => {
  let ending = '64';
  if (
    instanceType.linux_virtualization_types[0] &&
    instanceType.arch.includes('x86_64')
  ) {
    if (instanceType.instance_type.includes('g2')) {
      ending = 'G2';
    }
    t = t
      .add(
        Mapping('AWSInstanceType2Arch', instanceType.instance_type, {
          Arch: instanceType.linux_virtualization_types[0] + ending
        })
      )
      .add(
        Mapping('AWSInstanceType2NATArch', instanceType.instance_type, {
          Arch: 'NAT' + instanceType.linux_virtualization_types[0] + ending
        })
      );
  }
});

console.log(JSON.stringify(t.build(), null, 2));
//console.log(JSON.stringify(t, null, 2));
