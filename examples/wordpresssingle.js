/**
 * Created by arming on 6/22/16.
 */
'use strict'

const wk = require('../index')

let t = new wk.Template()

t.addDescription('AWS CloudFormation Sample Template WordPress_Single_Instance: WordPress is web software you can use to create a beautiful website or blog. This template installs WordPress with a local MySQL database for storage. It demonstrates using the AWS CloudFormation bootstrap scripts to deploy WordPress. **WARNING** This template creates an Amazon EC2 instance. You will be billed for the AWS resources used if you create a stack from this template.')

let keyNameParam = new wk.Parameter('KeyName', {
  'Type': 'AWS::EC2::KeyPair::KeyName',
  'ConstraintDescription': 'must be the name of an existing EC2 KeyPair.',
  'Description': 'Name of an existing EC2 KeyPair to enable SSH access to the instances'
})
t.add(keyNameParam)

let instanceTypeParam = new wk.Parameter('InstanceType', {
  'Description': 'WebServer EC2 instance type',
  'Type': 'String',
  'Default': 't2.small',
  'AllowedValues': [ 't1.micro', 't2.nano', 't2.micro', 't2.small', 't2.medium', 't2.large', 'm1.small', 'm1.medium', 'm1.large', 'm1.xlarge', 'm2.xlarge', 'm2.2xlarge', 'm2.4xlarge', 'm3.medium', 'm3.large', 'm3.xlarge', 'm3.2xlarge', 'm4.large', 'm4.xlarge', 'm4.2xlarge', 'm4.4xlarge', 'm4.10xlarge', 'c1.medium', 'c1.xlarge', 'c3.large', 'c3.xlarge', 'c3.2xlarge', 'c3.4xlarge', 'c3.8xlarge', 'c4.large', 'c4.xlarge', 'c4.2xlarge', 'c4.4xlarge', 'c4.8xlarge', 'g2.2xlarge', 'g2.8xlarge', 'r3.large', 'r3.xlarge', 'r3.2xlarge', 'r3.4xlarge', 'r3.8xlarge', 'i2.xlarge', 'i2.2xlarge', 'i2.4xlarge', 'i2.8xlarge', 'd2.xlarge', 'd2.2xlarge', 'd2.4xlarge', 'd2.8xlarge', 'hi1.4xlarge', 'hs1.8xlarge', 'cr1.8xlarge', 'cc2.8xlarge', 'cg1.4xlarge' ],
  'ConstraintDescription': 'must be a valid EC2 instance type.'
})
t.add(instanceTypeParam)

let sshLocationParam = new wk.Parameter('SSHLocation', {
  'Description': 'The IP address range that can be used to SSH to the EC2 instances',
  'Type': 'String',
  'MinLength': '9',
  'MaxLength': '18',
  'Default': '0.0.0.0/0',
  'AllowedPattern': '(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})/(\\d{1,2})',
  'ConstraintDescription': 'must be a valid IP CIDR range of the form x.x.x.x/x.'
})
t.add(sshLocationParam)

let dbNameParam = new wk.Parameter('DBName', {
  'Default': 'wordpressdb',
  'Description': 'The WordPress database name',
  'Type': 'String',
  'MinLength': '1',
  'MaxLength': '64',
  'AllowedPattern': '[a-zA-Z][a-zA-Z0-9]*',
  'ConstraintDescription': 'must begin with a letter and contain only alphanumeric characters.'
})
t.add(dbNameParam)

let dbUserParam = new wk.Parameter('DBUser', {
  'NoEcho': 'true',
  'Description': 'The WordPress database admin account username',
  'Type': 'String',
  'MinLength': '1',
  'MaxLength': '16',
  'AllowedPattern': '[a-zA-Z][a-zA-Z0-9]*',
  'ConstraintDescription': 'must begin with a letter and contain only alphanumeric characters.'
})
t.add(dbUserParam)

let dbPasswordParam = new wk.Parameter('DBPassword', {
  'NoEcho': 'true',
  'Description': 'The WordPress database admin account password',
  'Type': 'String',
  'MinLength': '8',
  'MaxLength': '41',
  'AllowedPattern': '[a-zA-Z0-9]*',
  'ConstraintDescription': 'must contain only alphanumeric characters.'
})
t.add(dbPasswordParam)

let dbRootPasswordParam = new wk.Parameter('DBRootPassword', {
  'NoEcho': 'true',
  'Description': 'MySQL root password',
  'Type': 'String',
  'MinLength': '8',
  'MaxLength': '41',
  'AllowedPattern': '[a-zA-Z0-9]*',
  'ConstraintDescription': 'must contain only alphanumeric characters.'
})
t.add(dbRootPasswordParam)

let webServerSecurityGroup = new wk.EC2.SecurityGroup('WebServerSecurityGroup')
t.add(webServerSecurityGroup)
webServerSecurityGroup.GroupDescription = 'Enable HTTP access via port 80 locked down to the load balancer + SSH access'

let rule1 = new wk.Types.EC2SecurityGroupRulePropertyType({'IpProtocol': 'tcp', 'FromPort': 80, 'ToPort': 80, 'CidrIp': '0.0.0.0/0'})
webServerSecurityGroup.SecurityGroupIngress.push(rule1)

let rule2 = new wk.Types.EC2SecurityGroupRulePropertyType()
rule2.IpProtocol = 'tcp'
rule2.FromPort = 22
rule2.ToPort = 22
rule2.CidrIp.ref(sshLocationParam)
webServerSecurityGroup.SecurityGroupIngress.push(rule2)

t.addMapping('AWSInstanceType2Arch', {
  't1.micro': { 'Arch': 'PV64' },
  't2.nano': { 'Arch': 'HVM64' },
  't2.micro': { 'Arch': 'HVM64' },
  't2.small': { 'Arch': 'HVM64' },
  't2.medium': { 'Arch': 'HVM64' },
  't2.large': { 'Arch': 'HVM64' },
  'm1.small': { 'Arch': 'PV64' },
  'm1.medium': { 'Arch': 'PV64' },
  'm1.large': { 'Arch': 'PV64' },
  'm1.xlarge': { 'Arch': 'PV64' },
  'm2.xlarge': { 'Arch': 'PV64' },
  'm2.2xlarge': { 'Arch': 'PV64' },
  'm2.4xlarge': { 'Arch': 'PV64' },
  'm3.medium': { 'Arch': 'HVM64' },
  'm3.large': { 'Arch': 'HVM64' },
  'm3.xlarge': { 'Arch': 'HVM64' },
  'm3.2xlarge': { 'Arch': 'HVM64' },
  'm4.large': { 'Arch': 'HVM64' },
  'm4.xlarge': { 'Arch': 'HVM64' },
  'm4.2xlarge': { 'Arch': 'HVM64' },
  'm4.4xlarge': { 'Arch': 'HVM64' },
  'm4.10xlarge': { 'Arch': 'HVM64' },
  'c1.medium': { 'Arch': 'PV64' },
  'c1.xlarge': { 'Arch': 'PV64' },
  'c3.large': { 'Arch': 'HVM64' },
  'c3.xlarge': { 'Arch': 'HVM64' },
  'c3.2xlarge': { 'Arch': 'HVM64' },
  'c3.4xlarge': { 'Arch': 'HVM64' },
  'c3.8xlarge': { 'Arch': 'HVM64' },
  'c4.large': { 'Arch': 'HVM64' },
  'c4.xlarge': { 'Arch': 'HVM64' },
  'c4.2xlarge': { 'Arch': 'HVM64' },
  'c4.4xlarge': { 'Arch': 'HVM64' },
  'c4.8xlarge': { 'Arch': 'HVM64' },
  'g2.2xlarge': { 'Arch': 'HVMG2' },
  'g2.8xlarge': { 'Arch': 'HVMG2' },
  'r3.large': { 'Arch': 'HVM64' },
  'r3.xlarge': { 'Arch': 'HVM64' },
  'r3.2xlarge': { 'Arch': 'HVM64' },
  'r3.4xlarge': { 'Arch': 'HVM64' },
  'r3.8xlarge': { 'Arch': 'HVM64' },
  'i2.xlarge': { 'Arch': 'HVM64' },
  'i2.2xlarge': { 'Arch': 'HVM64' },
  'i2.4xlarge': { 'Arch': 'HVM64' },
  'i2.8xlarge': { 'Arch': 'HVM64' },
  'd2.xlarge': { 'Arch': 'HVM64' },
  'd2.2xlarge': { 'Arch': 'HVM64' },
  'd2.4xlarge': { 'Arch': 'HVM64' },
  'd2.8xlarge': { 'Arch': 'HVM64' },
  'hi1.4xlarge': { 'Arch': 'HVM64' },
  'hs1.8xlarge': { 'Arch': 'HVM64' },
  'cr1.8xlarge': { 'Arch': 'HVM64' },
  'cc2.8xlarge': { 'Arch': 'HVM64' }
})

t.addMapping('AWSInstanceType2NATArch', {
  't1.micro': { 'Arch': 'NATPV64' },
  't2.nano': { 'Arch': 'NATHVM64' },
  't2.micro': { 'Arch': 'NATHVM64' },
  't2.small': { 'Arch': 'NATHVM64' },
  't2.medium': { 'Arch': 'NATHVM64' },
  't2.large': { 'Arch': 'NATHVM64' },
  'm1.small': { 'Arch': 'NATPV64' },
  'm1.medium': { 'Arch': 'NATPV64' },
  'm1.large': { 'Arch': 'NATPV64' },
  'm1.xlarge': { 'Arch': 'NATPV64' },
  'm2.xlarge': { 'Arch': 'NATPV64' },
  'm2.2xlarge': { 'Arch': 'NATPV64' },
  'm2.4xlarge': { 'Arch': 'NATPV64' },
  'm3.medium': { 'Arch': 'NATHVM64' },
  'm3.large': { 'Arch': 'NATHVM64' },
  'm3.xlarge': { 'Arch': 'NATHVM64' },
  'm3.2xlarge': { 'Arch': 'NATHVM64' },
  'm4.large': { 'Arch': 'NATHVM64' },
  'm4.xlarge': { 'Arch': 'NATHVM64' },
  'm4.2xlarge': { 'Arch': 'NATHVM64' },
  'm4.4xlarge': { 'Arch': 'NATHVM64' },
  'm4.10xlarge': { 'Arch': 'NATHVM64' },
  'c1.medium': { 'Arch': 'NATPV64' },
  'c1.xlarge': { 'Arch': 'NATPV64' },
  'c3.large': { 'Arch': 'NATHVM64' },
  'c3.xlarge': { 'Arch': 'NATHVM64' },
  'c3.2xlarge': { 'Arch': 'NATHVM64' },
  'c3.4xlarge': { 'Arch': 'NATHVM64' },
  'c3.8xlarge': { 'Arch': 'NATHVM64' },
  'c4.large': { 'Arch': 'NATHVM64' },
  'c4.xlarge': { 'Arch': 'NATHVM64' },
  'c4.2xlarge': { 'Arch': 'NATHVM64' },
  'c4.4xlarge': { 'Arch': 'NATHVM64' },
  'c4.8xlarge': { 'Arch': 'NATHVM64' },
  'g2.2xlarge': { 'Arch': 'NATHVMG2' },
  'g2.8xlarge': { 'Arch': 'NATHVMG2' },
  'r3.large': { 'Arch': 'NATHVM64' },
  'r3.xlarge': { 'Arch': 'NATHVM64' },
  'r3.2xlarge': { 'Arch': 'NATHVM64' },
  'r3.4xlarge': { 'Arch': 'NATHVM64' },
  'r3.8xlarge': { 'Arch': 'NATHVM64' },
  'i2.xlarge': { 'Arch': 'NATHVM64' },
  'i2.2xlarge': { 'Arch': 'NATHVM64' },
  'i2.4xlarge': { 'Arch': 'NATHVM64' },
  'i2.8xlarge': { 'Arch': 'NATHVM64' },
  'd2.xlarge': { 'Arch': 'NATHVM64' },
  'd2.2xlarge': { 'Arch': 'NATHVM64' },
  'd2.4xlarge': { 'Arch': 'NATHVM64' },
  'd2.8xlarge': { 'Arch': 'NATHVM64' },
  'hi1.4xlarge': { 'Arch': 'NATHVM64' },
  'hs1.8xlarge': { 'Arch': 'NATHVM64' },
  'cr1.8xlarge': { 'Arch': 'NATHVM64' },
  'cc2.8xlarge': { 'Arch': 'NATHVM64' }
})

t.addMapping('AWSRegionArch2AMI', {
  'us-east-1': {'PV64': 'ami-2a69aa47', 'HVM64': 'ami-6869aa05', 'HVMG2': 'ami-2e5e9c43'},
  'us-west-2': {'PV64': 'ami-7f77b31f', 'HVM64': 'ami-7172b611', 'HVMG2': 'ami-83b770e3'},
  'us-west-1': {'PV64': 'ami-a2490dc2', 'HVM64': 'ami-31490d51', 'HVMG2': 'ami-fd76329d'},
  'eu-west-1': {'PV64': 'ami-4cdd453f', 'HVM64': 'ami-f9dd458a', 'HVMG2': 'ami-b9bd25ca'},
  'eu-central-1': {'PV64': 'ami-6527cf0a', 'HVM64': 'ami-ea26ce85', 'HVMG2': 'ami-7f04ec10'},
  'ap-northeast-1': {'PV64': 'ami-3e42b65f', 'HVM64': 'ami-374db956', 'HVMG2': 'ami-e0ee1981'},
  'ap-northeast-2': {'PV64': 'NOT_SUPPORTED', 'HVM64': 'ami-2b408b45', 'HVMG2': 'NOT_SUPPORTED'},
  'ap-southeast-1': {'PV64': 'ami-df9e4cbc', 'HVM64': 'ami-a59b49c6', 'HVMG2': 'ami-0cb5676f'},
  'ap-southeast-2': {'PV64': 'ami-63351d00', 'HVM64': 'ami-dc361ebf', 'HVMG2': 'ami-a71c34c4'},
  'sa-east-1': {'PV64': 'ami-1ad34676', 'HVM64': 'ami-6dd04501', 'HVMG2': 'NOT_SUPPORTED'},
  'cn-north-1': {'PV64': 'ami-77559f1a', 'HVM64': 'ami-8e6aa0e3', 'HVMG2': 'NOT_SUPPORTED'}
})

let webServer = new wk.EC2.Instance('WebServer')
webServer.ImageId.findInMap('AWSRegionArch2AMI', { 'Ref': 'AWS::Region' }, { 'Fn::FindInMap': [ 'AWSInstanceType2Arch', { 'Ref': 'InstanceType' }, 'Arch' ] })
t.add(webServer)

webServer.InstanceType.ref(instanceTypeParam)
webServer.SecurityGroups.push(new wk.Intrinsic.Ref(webServerSecurityGroup))
webServer.KeyName.ref(keyNameParam)
webServer.UserData.base64({ 'Fn::Join': ['', [
  '#!/bin/bash -xe\n',
  'yum update -y aws-cfn-bootstrap\n',

  '/opt/aws/bin/cfn-init -v ',
  '         --stack ', { 'Ref': 'AWS::StackName' },
  '         --resource WebServer ',
  '         --configsets wordpress_install ',
  '         --region ', { 'Ref': 'AWS::Region' }, '\n',

  '/opt/aws/bin/cfn-signal -e $? ',
  '         --stack ', { 'Ref': 'AWS::StackName' },
  '         --resource WebServer ',
  '         --region ', { 'Ref': 'AWS::Region' }, '\n'
]]})

let webSiteUrlOutput = new wk.Output('WebsiteURL', {
  'Value': { 'Fn::Join': ['', [ 'http://', { 'Fn::GetAtt': [ 'WebServer', 'PublicDnsName' ] }, '/wordpress' ] ] },
  'Description': 'WordPress Website'
})

let set_mysql_root_password = new wk.Init.Command('01_set_mysql_root_password')
set_mysql_root_password.command = { 'Fn::Join': [ '', [ 'mysqladmin -u root password \'', { 'Ref': 'DBRootPassword' }, '\'' ] ] }
set_mysql_root_password.test = { 'Fn::Join': [ '', [ '$(mysql ', { 'Ref': 'DBName' }, ' -u root --password=\'', { 'Ref': 'DBRootPassword' }, '\' >/dev/null 2>&1 </dev/null); (( $? != 0 ))' ] ] }

let create_database = new wk.Init.Command('02_create_database')
create_database.command = { 'Fn::Join': [ '', [ 'mysql -u root --password=\'', { 'Ref': 'DBRootPassword' }, '\' < /tmp/setup.mysql' ] ] }
create_database.test = { 'Fn::Join': [ '', [ '$(mysql ', { 'Ref': 'DBName' }, ' -u root --password=\'', { 'Ref': 'DBRootPassword' }, '\' >/dev/null 2>&1 </dev/null); (( $? != 0 ))' ] ] }

let configure_wordpressCMD = new wk.Init.Command('03_configure_wordpress')
configure_wordpressCMD.command = '/tmp/create-wp-config'
configure_wordpressCMD.cwd = '/var/www/html/wordpress'

let configure_wordpress = new wk.Init.Config('configure_wordpress')
configure_wordpress.add(set_mysql_root_password)
configure_wordpress.add(create_database)
configure_wordpress.add(configure_wordpressCMD)

webServer.addConfig(configure_wordpress)

let cfnHup = new wk.Init.File('/etc/cfn/cfn-hup.conf')
cfnHup.content = { 'Fn::Join': ['', [ '[main]\n', 'stack=', { 'Ref': 'AWS::StackId' }, '\n', 'region=', { 'Ref': 'AWS::Region' }, '\n' ]] }
cfnHup.mode = '000400'
cfnHup.owner = 'root'
cfnHup.group = 'root'

let cfnAutoReloader = new wk.Init.File('/etc/cfn/hooks.d/cfn-auto-reloader.conf')
cfnAutoReloader.content = { 'Fn::Join': [ '', [ '[cfn-auto-reloader-hook]\n', 'triggers=post.update\n', 'path=Resources.WebServer.Metadata.AWS::CloudFormation::Init\n', 'action=/opt/aws/bin/cfn-init -v ', '         --stack ', { 'Ref': 'AWS::StackName' }, '         --resource WebServer ', '         --configsets wordpress_install ', '         --region ', { 'Ref': 'AWS::Region' }, '\n' ] ] }
cfnAutoReloader.mode = '000400'
cfnAutoReloader.owner = 'root'
cfnAutoReloader.group = 'root'

let cfnHupService = new wk.Init.Service('cfn-hup')
cfnHupService.enabled = 'true'
cfnHupService.ensureRunning = 'true'
cfnHupService.files = ['/etc/cfn/cfn-hup.conf', '/etc/cfn/hooks.d/cfn-auto-reloader.conf']

let install_cfn = new wk.Init.Config('install_cfn')
install_cfn.add(cfnHup)
install_cfn.add(cfnAutoReloader)
install_cfn.add(cfnHupService)
webServer.addConfig(install_cfn)

let createWPConfig = new wk.Init.File('/tmp/create-wp-config')
createWPConfig.content = { 'Fn::Join': [ '', [ '#!/bin/bash -xe\n', 'cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php\n', 'sed -i "s/\'database_name_here\'/\'',{ 'Ref': 'DBName' }, '\'/g\" wp-config.php\n', 'sed -i \"s/\'username_here\'/\'',{ 'Ref': 'DBUser' }, '\'/g\" wp-config.php\n', 'sed -i \"s/\'password_here\'/\'',{ 'Ref': 'DBPassword' }, '\'/g\" wp-config.php\n' ]]}
createWPConfig.mode = '000500'
createWPConfig.owner = 'root'
createWPConfig.group = 'root'

let setupMysql = new wk.Init.File('/tmp/setup.mysql')
setupMysql.content = { 'Fn::Join': ['', [ 'CREATE DATABASE ', { 'Ref': 'DBName' }, ';\n',   'CREATE USER \'', { 'Ref': 'DBUser' }, '\'@\'localhost\' IDENTIFIED BY \'', { 'Ref': 'DBPassword' }, '\';\n',   'GRANT ALL ON ', { 'Ref': 'DBName' }, '.* TO \'', { 'Ref': 'DBUser' }, '\'@\'localhost\';\n', 'FLUSH PRIVILEGES;\n' ]]}
setupMysql.mode = '000400'
setupMysql.owner = 'root'
setupMysql.group = 'root'

let wpPackages = new wk.Init.Packages('yum', {
  'php': [],
  'php-mysql': [],
  'mysql': [],
  'mysql-server': [],
  'mysql-devel': [],
  'mysql-libs': [],
  'httpd': []
})

let httpd = new wk.Init.Service('httpd')
httpd.enabled = 'true'
httpd.ensureRunning = 'true'

let mysqld = new wk.Init.Service('mysqld')
mysqld.enabled = 'true'
mysqld.ensureRunning = 'true'

let htmlSource = new wk.Init.Source('/var/www/html', "http://wordpress.org/latest.tar.gz")

let install_wordpress = new wk.Init.Config('install_wordpress')
install_wordpress.add(createWPConfig)
install_wordpress.add(setupMysql)
install_wordpress.add(wpPackages)
install_wordpress.add(httpd)
install_wordpress.add(mysqld)
install_wordpress.add(htmlSource)
webServer.addConfig(install_wordpress)

let wordpress_install = new wk.Init.ConfigSet('wordpress_install')
wordpress_install.add(install_cfn)
wordpress_install.add(install_wordpress)
wordpress_install.add(configure_wordpress)
webServer.addConfigSet(wordpress_install)

let cPolicy = new wk.Policy.CreationPolicy({
  'ResourceSignal': {
    'Timeout': 'PT15M'
  }
})
webServer.addPolicy(cPolicy)

t.add(webSiteUrlOutput)
console.log(t.toJson().Template)