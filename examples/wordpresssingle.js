/**
 * Created by arming on 6/22/16.
 */
'use strict';

const wk = require('../index');

let t = new wk.Template();

t.setDescription(
  'AWS CloudFormation Sample Template WordPress_Single_Instance: WordPress is web software you can use to create a beautiful website or blog. This template installs WordPress with a local MySQL database for storage. It demonstrates using the AWS CloudFormation bootstrap scripts to deploy WordPress. **WARNING** This template creates an Amazon EC2 instance. You will be billed for the AWS resources used if you create a stack from this template.'
);

let keyNameParam = new wk.Parameter('KeyName', {
  Type: 'AWS::EC2::KeyPair::KeyName',
  ConstraintDescription: 'must be the name of an existing EC2 KeyPair.',
  Description: 'Name of an existing EC2 KeyPair to enable SSH access to the instances'
});
t.add(keyNameParam);

let instanceTypeParam = new wk.Parameter('InstanceType', {
  Description: 'WebServer EC2 instance type',
  Type: 'String',
  Default: 't2.small',
  AllowedValues: wk.Macro.EC2Meta.getInstanceTypeNameList(),
  ConstraintDescription: 'must be a valid EC2 instance type.'
});
t.add(instanceTypeParam);

let sshLocationParam = new wk.Parameter('SSHLocation', {
  Description: 'The IP address range that can be used to SSH to the EC2 instances',
  Type: 'String',
  MinLength: '9',
  MaxLength: '18',
  Default: '0.0.0.0/0',
  AllowedPattern: '(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})/(\\d{1,2})',
  ConstraintDescription: 'must be a valid IP CIDR range of the form x.x.x.x/x.'
});
t.add(sshLocationParam);

let dbNameParam = new wk.Parameter('DBName', {
  Default: 'wordpressdb',
  Description: 'The WordPress database name',
  Type: 'String',
  MinLength: '1',
  MaxLength: '64',
  AllowedPattern: '[a-zA-Z][a-zA-Z0-9]*',
  ConstraintDescription: 'must begin with a letter and contain only alphanumeric characters.'
});
t.add(dbNameParam);

let dbUserParam = new wk.Parameter('DBUser', {
  NoEcho: 'true',
  Description: 'The WordPress database admin account username',
  Type: 'String',
  MinLength: '1',
  MaxLength: '16',
  AllowedPattern: '[a-zA-Z][a-zA-Z0-9]*',
  ConstraintDescription: 'must begin with a letter and contain only alphanumeric characters.'
});
t.add(dbUserParam);

let dbPasswordParam = new wk.Parameter('DBPassword', {
  NoEcho: 'true',
  Description: 'The WordPress database admin account password',
  Type: 'String',
  MinLength: '8',
  MaxLength: '41',
  AllowedPattern: '[a-zA-Z0-9]*',
  ConstraintDescription: 'must contain only alphanumeric characters.'
});
t.add(dbPasswordParam);

let dbRootPasswordParam = new wk.Parameter('DBRootPassword', {
  NoEcho: 'true',
  Description: 'MySQL root password',
  Type: 'String',
  MinLength: '8',
  MaxLength: '41',
  AllowedPattern: '[a-zA-Z0-9]*',
  ConstraintDescription: 'must contain only alphanumeric characters.'
});
t.add(dbRootPasswordParam);

let webServerSecurityGroup = new wk.EC2.SecurityGroup('WebServerSecurityGroup');
t.add(webServerSecurityGroup);
webServerSecurityGroup.GroupDescription = 'Enable HTTP access via port 80 locked down to the load balancer + SSH access';

// let rule1 = new wk.Types.EC2SecurityGroupRulePropertyType({'IpProtocol': 'tcp', 'FromPort': 80, 'ToPort': 80, 'CidrIp': '0.0.0.0/0'})
// webServerSecurityGroup.SecurityGroupIngress.push(rule1)

let rule1 = new wk.Types.EC2SecurityGroupRulePropertyType();
rule1.IpProtocol = 'tcp';
rule1.FromPort = 80;
rule1.ToPort = 80;
rule1.CidrIp = '0.0.0.0/0';
webServerSecurityGroup.SecurityGroupIngress.push(rule1);

let rule2 = new wk.Types.EC2SecurityGroupRulePropertyType();
rule2.IpProtocol = 'tcp';
rule2.FromPort = 22;
rule2.ToPort = 22;
rule2.CidrIp.ref(sshLocationParam);
webServerSecurityGroup.SecurityGroupIngress.push(rule2);

let AWSInstanceType2ArchMap = new wk.Mapping(
  'AWSInstanceType2Arch',
  wk.Macro.EC2Meta.getInstanceTypeList().reduce((result, instanceType) => {
    let ending = '64';
    if (
      instanceType.linux_virtualization_types[0] &&
      instanceType.arch.includes('x86_64')
    ) {
      if (instanceType.instance_type.includes('g2')) {
        ending = 'G2';
      }
      result[instanceType.instance_type] = {
        Arch: instanceType.linux_virtualization_types[0] + ending
      };
    }
    return result;
  }, {})
);
t.add(AWSInstanceType2ArchMap);

let AWSInstanceType2NATArchMap = new wk.Mapping(
  'AWSInstanceType2NATArch',
  wk.Macro.EC2Meta.getInstanceTypeList().reduce((result, instanceType) => {
    let ending = '64';
    if (
      instanceType.linux_virtualization_types[0] &&
      instanceType.arch.includes('x86_64')
    ) {
      if (instanceType.instance_type.includes('g2')) {
        ending = 'G2';
      }
      result[instanceType.instance_type] = {
        Arch: 'NAT' + instanceType.linux_virtualization_types[0] + ending
      };
    }
    return result;
  }, {})
);
t.add(AWSInstanceType2NATArchMap);

let webServer = new wk.EC2.Instance('WebServer');
webServer.ImageId.findInMap('AWSRegionArch2AMI', { Ref: 'AWS::Region' }, {
  'Fn::FindInMap': ['AWSInstanceType2Arch', { Ref: 'InstanceType' }, 'Arch']
});
t.add(webServer);

webServer.InstanceType.ref(instanceTypeParam);
webServer.SecurityGroups.push(new wk.Intrinsic.Ref(webServerSecurityGroup));
webServer.KeyName.ref(keyNameParam);
webServer.UserData.base64({
  'Fn::Join': [
    '',
    [
      '#!/bin/bash -xe\n',
      'yum update -y aws-cfn-bootstrap\n',
      '/opt/aws/bin/cfn-init -v ',
      '         --stack ',
      { Ref: 'AWS::StackName' },
      '         --resource WebServer ',
      '         --configsets wordpressInstall ',
      '         --region ',
      { Ref: 'AWS::Region' },
      '\n',
      '/opt/aws/bin/cfn-signal -e $? ',
      '         --stack ',
      { Ref: 'AWS::StackName' },
      '         --resource WebServer ',
      '         --region ',
      { Ref: 'AWS::Region' },
      '\n'
    ]
  ]
});

let webSiteUrlOutput = new wk.Output('WebsiteURL', {
  Value: {
    'Fn::Join': [
      '',
      [
        'http://',
        { 'Fn::GetAtt': ['WebServer', 'PublicDnsName'] },
        '/wordpress'
      ]
    ]
  },
  Description: 'WordPress Website'
});

let setMysqlRootPassword = new wk.Init.Command('01_setMysqlRootPassword');
setMysqlRootPassword.command = {
  'Fn::Join': [
    '',
    ["mysqladmin -u root password '", { Ref: 'DBRootPassword' }, "'"]
  ]
};
setMysqlRootPassword.test = {
  'Fn::Join': [
    '',
    [
      '$(mysql ',
      { Ref: 'DBName' },
      " -u root --password='",
      { Ref: 'DBRootPassword' },
      "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"
    ]
  ]
};

let createDatabase = new wk.Init.Command('02_createDatabase');
createDatabase.command = {
  'Fn::Join': [
    '',
    [
      "mysql -u root --password='",
      { Ref: 'DBRootPassword' },
      "' < /tmp/setup.mysql"
    ]
  ]
};
createDatabase.test = {
  'Fn::Join': [
    '',
    [
      '$(mysql ',
      { Ref: 'DBName' },
      " -u root --password='",
      { Ref: 'DBRootPassword' },
      "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"
    ]
  ]
};

let configureWordpressCMD = new wk.Init.Command('03_configureWordpress');
configureWordpressCMD.command = '/tmp/create-wp-config';
configureWordpressCMD.cwd = '/var/www/html/wordpress';

let configureWordpress = new wk.Init.Config('configureWordpress');
configureWordpress.add(setMysqlRootPassword);
configureWordpress.add(createDatabase);
configureWordpress.add(configureWordpressCMD);

webServer.addConfig(configureWordpress);

let cfnHup = new wk.Init.File('/etc/cfn/cfn-hup.conf');
cfnHup.content = {
  'Fn::Join': [
    '',
    [
      '[main]\n',
      'stack=',
      { Ref: 'AWS::StackId' },
      '\n',
      'region=',
      { Ref: 'AWS::Region' },
      '\n'
    ]
  ]
};
cfnHup.mode = '000400';
cfnHup.owner = 'root';
cfnHup.group = 'root';

let cfnAutoReloader = new wk.Init.File(
  '/etc/cfn/hooks.d/cfn-auto-reloader.conf'
);
cfnAutoReloader.content = {
  'Fn::Join': [
    '',
    [
      '[cfn-auto-reloader-hook]\n',
      'triggers=post.update\n',
      'path=Resources.WebServer.Metadata.AWS::CloudFormation::Init\n',
      'action=/opt/aws/bin/cfn-init -v ',
      '         --stack ',
      { Ref: 'AWS::StackName' },
      '         --resource WebServer ',
      '         --configsets wordpressInstall ',
      '         --region ',
      { Ref: 'AWS::Region' },
      '\n'
    ]
  ]
};
cfnAutoReloader.mode = '000400';
cfnAutoReloader.owner = 'root';
cfnAutoReloader.group = 'root';

let cfnHupService = new wk.Init.Service('cfn-hup');
cfnHupService.enabled = 'true';
cfnHupService.ensureRunning = 'true';
cfnHupService.files = [
  '/etc/cfn/cfn-hup.conf',
  '/etc/cfn/hooks.d/cfn-auto-reloader.conf'
];

let installCfn = new wk.Init.Config('installCfn');
installCfn.add(cfnHup);
installCfn.add(cfnAutoReloader);
installCfn.add(cfnHupService);
webServer.addConfig(installCfn);

let createWPConfig = new wk.Init.File('/tmp/create-wp-config');
createWPConfig.content = {
  'Fn::Join': [
    '',
    [
      '#!/bin/bash -xe\n',
      'cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php\n',
      "sed -i \"s/'database_name_here'/'",
      { Ref: 'DBName' },
      '\'/g" wp-config.php\n',
      "sed -i \"s/'username_here'/'",
      { Ref: 'DBUser' },
      '\'/g" wp-config.php\n',
      "sed -i \"s/'password_here'/'",
      { Ref: 'DBPassword' },
      '\'/g" wp-config.php\n'
    ]
  ]
};
createWPConfig.mode = '000500';
createWPConfig.owner = 'root';
createWPConfig.group = 'root';

let setupMysql = new wk.Init.File('/tmp/setup.mysql');
setupMysql.content = {
  'Fn::Join': [
    '',
    [
      'CREATE DATABASE ',
      { Ref: 'DBName' },
      ';\n',
      "CREATE USER '",
      { Ref: 'DBUser' },
      "'@'localhost' IDENTIFIED BY '",
      { Ref: 'DBPassword' },
      "';\n",
      'GRANT ALL ON ',
      { Ref: 'DBName' },
      ".* TO '",
      { Ref: 'DBUser' },
      "'@'localhost';\n",
      'FLUSH PRIVILEGES;\n'
    ]
  ]
};
setupMysql.mode = '000400';
setupMysql.owner = 'root';
setupMysql.group = 'root';

let wpPackages = new wk.Init.Packages('yum', {
  php: [],
  'php-mysql': [],
  mysql: [],
  'mysql-server': [],
  'mysql-devel': [],
  'mysql-libs': [],
  httpd: []
});

let httpd = new wk.Init.Service('httpd');
httpd.enabled = 'true';
httpd.ensureRunning = 'true';

let mysqld = new wk.Init.Service('mysqld');
mysqld.enabled = 'true';
mysqld.ensureRunning = 'true';

let htmlSource = new wk.Init.Source(
  '/var/www/html',
  'http://wordpress.org/latest.tar.gz'
);

let installWordpress = new wk.Init.Config('installWordpress');
installWordpress.add(createWPConfig);
installWordpress.add(setupMysql);
installWordpress.add(wpPackages);
installWordpress.add(httpd);
installWordpress.add(mysqld);
installWordpress.add(htmlSource);
webServer.addConfig(installWordpress);

let wordpressInstall = new wk.Init.ConfigSet('wordpressInstall');
wordpressInstall.add(installCfn);
wordpressInstall.add(installWordpress);
wordpressInstall.add(configureWordpress);
webServer.addConfigSet(wordpressInstall);

let cPolicy = new wk.Policy.CreationPolicy({
  ResourceSignal: {
    Timeout: 'PT15M'
  }
});
webServer.addPolicy(cPolicy);
t.add(webSiteUrlOutput);

let filterParams = [
  {
    Name: 'HVM64',
    Filters: [{ Name: 'name', Values: ['amzn-ami-hvm-2016.03.3.x86_64-gp2'] }]
  },
  {
    Name: 'PV64',
    Filters: [{ Name: 'name', Values: ['amzn-ami-pv-2016.03.3.x86_64-ebs'] }]
  },
  {
    Name: 'HVMG2',
    Filters: [
      { Name: 'name', Values: ['amzn-ami-graphics-hvm-2016.03.3.x86_64*'] }
    ]
  }
];

let regions = wk.Macro.EC2Meta.getRegions().filter(region => {
  if (!region.includes('us-gov') && !region.includes('cn-north-1')) {
    return region;
  }
});

wk.Macro.EC2Meta
  .getAMIMap(filterParams, regions)
  .then(amiMap => {
    t.add(new wk.Mapping('AWSRegionArch2AMI', amiMap));
    let result = t.toJson();
    if (result.Errors) {
      // console.error(result.Errors)
    }
    console.log(result.Template);
  })
  .catch(e => {
    console.error(e);
  });
