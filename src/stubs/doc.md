- [Resources](#resources)
  * [ApiGateway](#apigateway)
    + [AWS::ApiGateway::Account](#awsapigatewayaccount)
      - [Properties](#properties)
        * [CloudWatchRoleArn](#cloudwatchrolearn)
    + [AWS::ApiGateway::Authorizer](#awsapigatewayauthorizer)
      - [Properties](#properties-1)
        * [AuthorizerCredentials](#authorizercredentials)
        * [AuthorizerResultTtlInSeconds](#authorizerresultttlinseconds)
        * [AuthorizerUri](#authorizeruri)
        * [IdentitySource](#identitysource)
        * [IdentityValidationExpression](#identityvalidationexpression)
        * [Name](#name)
        * [ProviderARNs](#providerarns)
        * [RestApiId](#restapiid)
        * [Type](#type)
    + [AWS::ApiGateway::BasePathMapping](#awsapigatewaybasepathmapping)
      - [Properties](#properties-2)
        * [BasePath](#basepath)
        * [DomainName](#domainname)
        * [RestApiId](#restapiid-1)
        * [Stage](#stage)
    + [AWS::ApiGateway::ClientCertificate](#awsapigatewayclientcertificate)
      - [Properties](#properties-3)
        * [Description](#description)
    + [AWS::ApiGateway::ApiKey](#awsapigatewayapikey)
      - [Properties](#properties-4)
        * [Description](#description-1)
        * [Enabled](#enabled)
        * [Name](#name-1)
        * [StageKeys](#stagekeys)
    + [AWS::ApiGateway::Resource](#awsapigatewayresource)
      - [Properties](#properties-5)
        * [ParentId](#parentid)
        * [PathPart](#pathpart)
        * [RestApiId](#restapiid-2)
    + [AWS::ApiGateway::Deployment](#awsapigatewaydeployment)
      - [Properties](#properties-6)
        * [Description](#description-2)
        * [RestApiId](#restapiid-3)
        * [StageDescription](#stagedescription)
        * [StageName](#stagename)
    + [AWS::ApiGateway::Model](#awsapigatewaymodel)
      - [Properties](#properties-7)
        * [ContentType](#contenttype)
        * [Description](#description-3)
        * [Name](#name-2)
        * [RestApiId](#restapiid-4)
        * [Schema](#schema)
    + [AWS::ApiGateway::Method](#awsapigatewaymethod)
      - [Properties](#properties-8)
        * [ApiKeyRequired](#apikeyrequired)
        * [AuthorizationType](#authorizationtype)
        * [AuthorizerId](#authorizerid)
        * [HttpMethod](#httpmethod)
        * [Integration](#integration)
        * [MethodResponses](#methodresponses)
        * [RequestModels](#requestmodels)
        * [RequestParameters](#requestparameters)
        * [ResourceId](#resourceid)
        * [RestApiId](#restapiid-5)
    + [AWS::ApiGateway::RestApi](#awsapigatewayrestapi)
      - [Properties](#properties-9)
        * [Body](#body)
        * [BodyS3Location](#bodys3location)
        * [CloneFrom](#clonefrom)
        * [Description](#description-4)
        * [FailOnWarnings](#failonwarnings)
        * [Name](#name-3)
        * [Parameters](#parameters)
    + [AWS::ApiGateway::Stage](#awsapigatewaystage)
      - [Properties](#properties-10)
        * [CacheClusterEnabled](#cacheclusterenabled)
        * [CacheClusterSize](#cacheclustersize)
        * [ClientCertificateId](#clientcertificateid)
        * [DeploymentId](#deploymentid)
        * [Description](#description-5)
        * [MethodSettings](#methodsettings)
        * [RestApiId](#restapiid-6)
        * [StageName](#stagename-1)
        * [Variables](#variables)
    + [AWS::ApiGateway::UsagePlan](#awsapigatewayusageplan)
      - [Properties](#properties-11)
        * [ApiStages](#apistages)
        * [Description](#description-6)
        * [Quota](#quota)
        * [Throttle](#throttle)
        * [UsagePlanName](#usageplanname)
  * [ApplicationAutoScaling](#applicationautoscaling)
    + [AWS::ApplicationAutoScaling::ScalableTarget](#awsapplicationautoscalingscalabletarget)
      - [Properties](#properties-12)
        * [MaxCapacity](#maxcapacity)
        * [MinCapacity](#mincapacity)
        * [ResourceId](#resourceid-1)
        * [RoleARN](#rolearn)
        * [ScalableDimension](#scalabledimension)
        * [ServiceNamespace](#servicenamespace)
    + [AWS::ApplicationAutoScaling::ScalingPolicy](#awsapplicationautoscalingscalingpolicy)
      - [Properties](#properties-13)
        * [PolicyName](#policyname)
        * [PolicyType](#policytype)
        * [ResourceId](#resourceid-2)
        * [ScalableDimension](#scalabledimension-1)
        * [ServiceNamespace](#servicenamespace-1)
        * [ScalingTargetId](#scalingtargetid)
        * [StepScalingPolicyConfiguration](#stepscalingpolicyconfiguration)
  * [AutoScaling](#autoscaling)
    + [AWS::AutoScaling::AutoScalingGroup](#awsautoscalingautoscalinggroup)
      - [Properties](#properties-14)
        * [AvailabilityZones](#availabilityzones)
        * [Cooldown](#cooldown)
        * [DesiredCapacity](#desiredcapacity)
        * [HealthCheckGracePeriod](#healthcheckgraceperiod)
        * [HealthCheckType](#healthchecktype)
        * [InstanceId](#instanceid)
        * [LaunchConfigurationName](#launchconfigurationname)
        * [LoadBalancerNames](#loadbalancernames)
        * [MaxSize](#maxsize)
        * [MetricsCollection](#metricscollection)
        * [MinSize](#minsize)
        * [NotificationConfigurations](#notificationconfigurations)
        * [PlacementGroup](#placementgroup)
        * [Tags](#tags)
        * [TargetGroupARNs](#targetgrouparns)
        * [TerminationPolicies](#terminationpolicies)
        * [VPCZoneIdentifier](#vpczoneidentifier)
    + [AWS::AutoScaling::LaunchConfiguration](#awsautoscalinglaunchconfiguration)
      - [Properties](#properties-15)
        * [AssociatePublicIpAddress](#associatepublicipaddress)
        * [BlockDeviceMappings](#blockdevicemappings)
        * [ClassicLinkVPCId](#classiclinkvpcid)
        * [ClassicLinkVPCSecurityGroups](#classiclinkvpcsecuritygroups)
        * [EbsOptimized](#ebsoptimized)
        * [IamInstanceProfile](#iaminstanceprofile)
        * [ImageId](#imageid)
        * [InstanceId](#instanceid-1)
        * [InstanceMonitoring](#instancemonitoring)
        * [InstanceType](#instancetype)
        * [KernelId](#kernelid)
        * [KeyName](#keyname)
        * [PlacementTenancy](#placementtenancy)
        * [RamDiskId](#ramdiskid)
        * [SecurityGroups](#securitygroups)
        * [SpotPrice](#spotprice)
        * [UserData](#userdata)
    + [AWS::AutoScaling::ScalingPolicy](#awsautoscalingscalingpolicy)
      - [Properties](#properties-16)
        * [AdjustmentType](#adjustmenttype)
        * [AutoScalingGroupName](#autoscalinggroupname)
        * [Cooldown](#cooldown-1)
        * [EstimatedInstanceWarmup](#estimatedinstancewarmup)
        * [MetricAggregationType](#metricaggregationtype)
        * [MinAdjustmentMagnitude](#minadjustmentmagnitude)
        * [PolicyType](#policytype-1)
        * [ScalingAdjustment](#scalingadjustment)
        * [StepAdjustments](#stepadjustments)
    + [AWS::AutoScaling::LifecycleHook](#awsautoscalinglifecyclehook)
      - [Properties](#properties-17)
        * [AutoScalingGroupName](#autoscalinggroupname-1)
        * [DefaultResult](#defaultresult)
        * [HeartbeatTimeout](#heartbeattimeout)
        * [LifecycleTransition](#lifecycletransition)
        * [NotificationMetadata](#notificationmetadata)
        * [NotificationTargetARN](#notificationtargetarn)
        * [RoleARN](#rolearn-1)
    + [AWS::AutoScaling::ScheduledAction](#awsautoscalingscheduledaction)
      - [Properties](#properties-18)
        * [AutoScalingGroupName](#autoscalinggroupname-2)
        * [DesiredCapacity](#desiredcapacity-1)
        * [EndTime](#endtime)
        * [MaxSize](#maxsize-1)
        * [MinSize](#minsize-1)
        * [Recurrence](#recurrence)
        * [StartTime](#starttime)
  * [CertificateManager](#certificatemanager)
    + [AWS::CertificateManager::Certificate](#awscertificatemanagercertificate)
      - [Properties](#properties-19)
        * [DomainName](#domainname-1)
        * [DomainValidationOptions](#domainvalidationoptions)
        * [SubjectAlternativeNames](#subjectalternativenames)
        * [Tags](#tags-1)
  * [CloudFormation](#cloudformation)
    + [AWS::CloudFormation::Stack](#awscloudformationstack)
      - [Properties](#properties-20)
        * [NotificationARNs](#notificationarns)
        * [Parameters](#parameters-1)
        * [Tags](#tags-2)
        * [TemplateURL](#templateurl)
        * [TimeoutInMinutes](#timeoutinminutes)
    + [AWS::CloudFormation::WaitCondition](#awscloudformationwaitcondition)
      - [Properties](#properties-21)
        * [Count](#count)
        * [Handle](#handle)
        * [Timeout](#timeout)
    + [AWS::CloudFormation::WaitConditionHandle](#awscloudformationwaitconditionhandle)
      - [Properties](#properties-22)
    + [AWS::CloudFormation::Authentication](#awscloudformationauthentication)
      - [Properties](#properties-23)
        * [accessKeyId](#accesskeyid)
        * [buckets](#buckets)
        * [password](#password)
        * [secretKey](#secretkey)
        * [type](#type)
        * [uris](#uris)
        * [username](#username)
        * [roleName](#rolename)
    + [AWS::CloudFormation::CustomResource](#awscloudformationcustomresource)
      - [Properties](#properties-24)
        * [ServiceToken](#servicetoken)
    + [AWS::CloudFormation::Interface](#awscloudformationinterface)
      - [Properties](#properties-25)
        * [ParameterGroups](#parametergroups)
        * [ParameterLabels](#parameterlabels)
    + [AWS::CloudFormation::Init](#awscloudformationinit)
      - [Properties](#properties-26)
  * [CloudFront](#cloudfront)
    + [AWS::CloudFront::Distribution](#awscloudfrontdistribution)
      - [Properties](#properties-27)
        * [DistributionConfig](#distributionconfig)
  * [CloudTrail](#cloudtrail)
    + [AWS::CloudTrail::Trail](#awscloudtrailtrail)
      - [Properties](#properties-28)
        * [CloudWatchLogsLogGroupArn](#cloudwatchlogsloggrouparn)
        * [CloudWatchLogsRoleArn](#cloudwatchlogsrolearn)
        * [EnableLogFileValidation](#enablelogfilevalidation)
        * [IncludeGlobalServiceEvents](#includeglobalserviceevents)
        * [IsLogging](#islogging)
        * [IsMultiRegionTrail](#ismultiregiontrail)
        * [KMSKeyId](#kmskeyid)
        * [S3BucketName](#s3bucketname)
        * [S3KeyPrefix](#s3keyprefix)
        * [SnsTopicName](#snstopicname)
        * [Tags](#tags-3)
  * [CloudWatch](#cloudwatch)
    + [AWS::CloudWatch::Alarm](#awscloudwatchalarm)
      - [Properties](#properties-29)
        * [ActionsEnabled](#actionsenabled)
        * [AlarmActions](#alarmactions)
        * [AlarmDescription](#alarmdescription)
        * [AlarmName](#alarmname)
        * [ComparisonOperator](#comparisonoperator)
        * [Dimensions](#dimensions)
        * [EvaluationPeriods](#evaluationperiods)
        * [InsufficientDataActions](#insufficientdataactions)
        * [MetricName](#metricname)
        * [Namespace](#namespace)
        * [OKActions](#okactions)
        * [Period](#period)
        * [Statistic](#statistic)
        * [Threshold](#threshold)
        * [Unit](#unit)
  * [CodeBuild](#codebuild)
    + [AWS::CodeBuild::Project](#awscodebuildproject)
      - [Properties](#properties-30)
        * [Artifacts](#artifacts)
        * [Description](#description-7)
        * [EncryptionKey](#encryptionkey)
        * [Environment](#environment)
        * [Name](#name-4)
        * [ServiceRole](#servicerole)
        * [Source](#source)
        * [Tags](#tags-4)
        * [TimeoutInMinutes](#timeoutinminutes-1)
  * [CodeCommit](#codecommit)
    + [AWS::CodeCommit::Repository](#awscodecommitrepository)
      - [Properties](#properties-31)
        * [RepositoryDescription](#repositorydescription)
        * [RepositoryName](#repositoryname)
        * [Triggers](#triggers)
  * [CodeDeploy](#codedeploy)
    + [AWS::CodeDeploy::Application](#awscodedeployapplication)
      - [Properties](#properties-32)
        * [ApplicationName](#applicationname)
    + [AWS::CodeDeploy::DeploymentConfig](#awscodedeploydeploymentconfig)
      - [Properties](#properties-33)
        * [DeploymentConfigName](#deploymentconfigname)
        * [MinimumHealthyHosts](#minimumhealthyhosts)
    + [AWS::CodeDeploy::DeploymentGroup](#awscodedeploydeploymentgroup)
      - [Properties](#properties-34)
        * [ApplicationName](#applicationname-1)
        * [AutoScalingGroups](#autoscalinggroups)
        * [Deployment](#deployment)
        * [DeploymentConfigName](#deploymentconfigname-1)
        * [DeploymentGroupName](#deploymentgroupname)
        * [Ec2TagFilters](#ec2tagfilters)
        * [OnPremisesInstanceTagFilters](#onpremisesinstancetagfilters)
        * [ServiceRoleArn](#servicerolearn)
  * [CodePipeline](#codepipeline)
    + [AWS::CodePipeline::Pipeline](#awscodepipelinepipeline)
      - [Properties](#properties-35)
        * [ArtifactStore](#artifactstore)
        * [DisableInboundStageTransitions](#disableinboundstagetransitions)
        * [Name](#name-5)
        * [RestartExecutionOnUpdate](#restartexecutiononupdate)
        * [RoleArn](#rolearn)
        * [Stages](#stages)
    + [AWS::CodePipeline::CustomActionType](#awscodepipelinecustomactiontype)
      - [Properties](#properties-36)
        * [Category](#category)
        * [ConfigurationProperties](#configurationproperties)
        * [InputArtifactDetails](#inputartifactdetails)
        * [OutputArtifactDetails](#outputartifactdetails)
        * [Provider](#provider)
        * [Settings](#settings)
        * [Version](#version)
  * [Config](#config)
    + [AWS::Config::ConfigRule](#awsconfigconfigrule)
      - [Properties](#properties-37)
        * [ConfigRuleName](#configrulename)
        * [Description](#description-8)
        * [InputParameters](#inputparameters)
        * [MaximumExecutionFrequency](#maximumexecutionfrequency)
        * [Scope](#scope)
        * [Source](#source-1)
    + [AWS::Config::ConfigurationRecorder](#awsconfigconfigurationrecorder)
      - [Properties](#properties-38)
        * [Name](#name-6)
        * [RecordingGroup](#recordinggroup)
        * [RoleARN](#rolearn-2)
    + [AWS::Config::DeliveryChannel](#awsconfigdeliverychannel)
      - [Properties](#properties-39)
        * [ConfigSnapshotDeliveryProperties](#configsnapshotdeliveryproperties)
        * [Name](#name-7)
        * [S3BucketName](#s3bucketname-1)
        * [S3KeyPrefix](#s3keyprefix-1)
        * [SnsTopicARN](#snstopicarn)
  * [DataPipeline](#datapipeline)
    + [AWS::DataPipeline::Pipeline](#awsdatapipelinepipeline)
      - [Properties](#properties-40)
        * [Activate](#activate)
        * [Description](#description-9)
        * [Name](#name-8)
        * [ParameterObjects](#parameterobjects)
        * [ParameterValues](#parametervalues)
        * [PipelineObjects](#pipelineobjects)
        * [PipelineTags](#pipelinetags)
  * [DirectoryService](#directoryservice)
    + [AWS::DirectoryService::MicrosoftAD](#awsdirectoryservicemicrosoftad)
      - [Properties](#properties-41)
        * [CreateAlias](#createalias)
        * [EnableSso](#enablesso)
        * [Name](#name-9)
        * [Password](#password)
        * [ShortName](#shortname)
        * [VpcSettings](#vpcsettings)
    + [AWS::DirectoryService::SimpleAD](#awsdirectoryservicesimplead)
      - [Properties](#properties-42)
        * [CreateAlias](#createalias-1)
        * [Description](#description-10)
        * [EnableSso](#enablesso-1)
        * [Name](#name-10)
        * [Password](#password-1)
        * [ShortName](#shortname-1)
        * [Size](#size)
        * [VpcSettings](#vpcsettings-1)
  * [DynamoDB](#dynamodb)
    + [AWS::DynamoDB::Table](#awsdynamodbtable)
      - [Properties](#properties-43)
        * [AttributeDefinitions](#attributedefinitions)
        * [GlobalSecondaryIndexes](#globalsecondaryindexes)
        * [KeySchema](#keyschema)
        * [LocalSecondaryIndexes](#localsecondaryindexes)
        * [ProvisionedThroughput](#provisionedthroughput)
        * [StreamSpecification](#streamspecification)
        * [TableName](#tablename)
  * [EC2](#ec2)
    + [AWS::EC2::Volume](#awsec2volume)
      - [Properties](#properties-44)
        * [AutoEnableIO](#autoenableio)
        * [AvailabilityZone](#availabilityzone)
        * [Encrypted](#encrypted)
        * [Iops](#iops)
        * [KmsKeyId](#kmskeyid)
        * [Size](#size-1)
        * [SnapshotId](#snapshotid)
        * [Tags](#tags-5)
        * [VolumeType](#volumetype)
    + [AWS::EC2::EIP](#awsec2eip)
      - [Properties](#properties-45)
        * [InstanceId](#instanceid-2)
        * [Domain](#domain)
    + [AWS::EC2::VolumeAttachment](#awsec2volumeattachment)
      - [Properties](#properties-46)
        * [Device](#device)
        * [InstanceId](#instanceid-3)
        * [VolumeId](#volumeid)
    + [AWS::EC2::Instance](#awsec2instance)
      - [Properties](#properties-47)
        * [Affinity](#affinity)
        * [AvailabilityZone](#availabilityzone-1)
        * [BlockDeviceMappings](#blockdevicemappings-1)
        * [DisableApiTermination](#disableapitermination)
        * [EbsOptimized](#ebsoptimized-1)
        * [HostId](#hostid)
        * [IamInstanceProfile](#iaminstanceprofile-1)
        * [ImageId](#imageid-1)
        * [InstanceInitiatedShutdownBehavior](#instanceinitiatedshutdownbehavior)
        * [InstanceType](#instancetype-1)
        * [Ipv6AddressCount](#ipv6addresscount)
        * [Ipv6Addresses](#ipv6addresses)
        * [KernelId](#kernelid-1)
        * [KeyName](#keyname-1)
        * [Monitoring](#monitoring)
        * [NetworkInterfaces](#networkinterfaces)
        * [PlacementGroupName](#placementgroupname)
        * [PrivateIpAddress](#privateipaddress)
        * [RamdiskId](#ramdiskid)
        * [SecurityGroupIds](#securitygroupids)
        * [SecurityGroups](#securitygroups-1)
        * [SourceDestCheck](#sourcedestcheck)
        * [SsmAssociations](#ssmassociations)
        * [SubnetId](#subnetid)
        * [Tags](#tags-6)
        * [Tenancy](#tenancy)
        * [UserData](#userdata-1)
        * [Volumes](#volumes)
        * [AdditionalInfo](#additionalinfo)
    + [AWS::EC2::EIPAssociation](#awsec2eipassociation)
      - [Properties](#properties-48)
        * [AllocationId](#allocationid)
        * [EIP](#eip)
        * [InstanceId](#instanceid-4)
        * [NetworkInterfaceId](#networkinterfaceid)
        * [PrivateIpAddress](#privateipaddress-1)
    + [AWS::EC2::SecurityGroupIngress](#awsec2securitygroupingress)
      - [Properties](#properties-49)
        * [CidrIp](#cidrip)
        * [CidrIpv6](#cidripv6)
        * [FromPort](#fromport)
        * [GroupId](#groupid)
        * [GroupName](#groupname)
        * [IpProtocol](#ipprotocol)
        * [SourceSecurityGroupId](#sourcesecuritygroupid)
        * [SourceSecurityGroupName](#sourcesecuritygroupname)
        * [SourceSecurityGroupOwnerId](#sourcesecuritygroupownerid)
        * [ToPort](#toport)
    + [AWS::EC2::SecurityGroup](#awsec2securitygroup)
      - [Properties](#properties-50)
        * [GroupDescription](#groupdescription)
        * [SecurityGroupEgress](#securitygroupegress)
        * [SecurityGroupIngress](#securitygroupingress)
        * [Tags](#tags-7)
        * [VpcId](#vpcid)
    + [AWS::EC2::CustomerGateway](#awsec2customergateway)
      - [Properties](#properties-51)
        * [BgpAsn](#bgpasn)
        * [IpAddress](#ipaddress)
        * [Tags](#tags-8)
        * [Type](#type-1)
    + [AWS::EC2::Host](#awsec2host)
      - [Properties](#properties-52)
        * [AutoPlacement](#autoplacement)
        * [AvailabilityZone](#availabilityzone-2)
        * [InstanceType](#instancetype-2)
    + [AWS::EC2::InternetGateway](#awsec2internetgateway)
      - [Properties](#properties-53)
        * [Tags](#tags-9)
    + [AWS::EC2::DHCPOptions](#awsec2dhcpoptions)
      - [Properties](#properties-54)
        * [DomainName](#domainname-2)
        * [DomainNameServers](#domainnameservers)
        * [NetbiosNameServers](#netbiosnameservers)
        * [NetbiosNodeType](#netbiosnodetype)
        * [NtpServers](#ntpservers)
        * [Tags](#tags-10)
    + [AWS::EC2::FlowLog](#awsec2flowlog)
      - [Properties](#properties-55)
        * [DeliverLogsPermissionArn](#deliverlogspermissionarn)
        * [LogGroupName](#loggroupname)
        * [ResourceId](#resourceid-3)
        * [ResourceType](#resourcetype)
        * [TrafficType](#traffictype)
    + [AWS::EC2::NatGateway](#awsec2natgateway)
      - [Properties](#properties-56)
        * [AllocationId](#allocationid-1)
        * [SubnetId](#subnetid-1)
    + [AWS::EC2::NetworkAclEntry](#awsec2networkaclentry)
      - [Properties](#properties-57)
        * [CidrBlock](#cidrblock)
        * [Egress](#egress)
        * [Icmp](#icmp)
        * [Ipv6CidrBlock](#ipv6cidrblock)
        * [NetworkAclId](#networkaclid)
        * [PortRange](#portrange)
        * [Protocol](#protocol)
        * [RuleAction](#ruleaction)
        * [RuleNumber](#rulenumber)
    + [AWS::EC2::NetworkAcl](#awsec2networkacl)
      - [Properties](#properties-58)
        * [Tags](#tags-11)
        * [VpcId](#vpcid-1)
    + [AWS::EC2::NetworkInterface](#awsec2networkinterface)
      - [Properties](#properties-59)
        * [Description](#description-11)
        * [GroupSet](#groupset)
        * [Ipv6AddressCount](#ipv6addresscount-1)
        * [Ipv6Addresses](#ipv6addresses-1)
        * [PrivateIpAddress](#privateipaddress-2)
        * [PrivateIpAddresses](#privateipaddresses)
        * [SecondaryPrivateIpAddressCount](#secondaryprivateipaddresscount)
        * [SourceDestCheck](#sourcedestcheck-1)
        * [SubnetId](#subnetid-2)
        * [Tags](#tags-12)
    + [AWS::EC2::NetworkInterfaceAttachment](#awsec2networkinterfaceattachment)
      - [Properties](#properties-60)
        * [DeleteOnTermination](#deleteontermination)
        * [DeviceIndex](#deviceindex)
        * [InstanceId](#instanceid-5)
        * [NetworkInterfaceId](#networkinterfaceid-1)
    + [AWS::EC2::RouteTable](#awsec2routetable)
      - [Properties](#properties-61)
        * [VpcId](#vpcid-2)
        * [Tags](#tags-13)
    + [AWS::EC2::SecurityGroupEgress](#awsec2securitygroupegress)
      - [Properties](#properties-62)
        * [CidrIp](#cidrip-1)
        * [CidrIpv6](#cidripv6-1)
        * [DestinationPrefixListId](#destinationprefixlistid)
        * [DestinationSecurityGroupId](#destinationsecuritygroupid)
        * [FromPort](#fromport-1)
        * [GroupId](#groupid-1)
        * [IpProtocol](#ipprotocol-1)
        * [ToPort](#toport-1)
    + [AWS::EC2::PlacementGroup](#awsec2placementgroup)
      - [Properties](#properties-63)
        * [Strategy](#strategy)
    + [AWS::EC2::Route](#awsec2route)
      - [Properties](#properties-64)
        * [DestinationCidrBlock](#destinationcidrblock)
        * [DestinationIpv6CidrBlock](#destinationipv6cidrblock)
        * [GatewayId](#gatewayid)
        * [InstanceId](#instanceid-6)
        * [NatGatewayId](#natgatewayid)
        * [NetworkInterfaceId](#networkinterfaceid-2)
        * [RouteTableId](#routetableid)
        * [VpcPeeringConnectionId](#vpcpeeringconnectionid)
    + [AWS::EC2::SpotFleet](#awsec2spotfleet)
      - [Properties](#properties-65)
        * [SpotFleetRequestConfigData](#spotfleetrequestconfigdata)
    + [AWS::EC2::SubnetRouteTableAssociation](#awsec2subnetroutetableassociation)
      - [Properties](#properties-66)
        * [RouteTableId](#routetableid-1)
        * [SubnetId](#subnetid-3)
    + [AWS::EC2::Subnet](#awsec2subnet)
      - [Properties](#properties-67)
        * [AvailabilityZone](#availabilityzone-3)
        * [CidrBlock](#cidrblock-1)
        * [MapPublicIpOnLaunch](#mappubliciponlaunch)
        * [Tags](#tags-14)
        * [VpcId](#vpcid-3)
    + [AWS::EC2::SubnetNetworkAclAssociation](#awsec2subnetnetworkaclassociation)
      - [Properties](#properties-68)
        * [SubnetId](#subnetid-4)
        * [NetworkAclId](#networkaclid-1)
    + [AWS::EC2::SubnetCidrBlock](#awsec2subnetcidrblock)
      - [Properties](#properties-69)
        * [Ipv6CidrBlock](#ipv6cidrblock-1)
        * [SubnetId](#subnetid-5)
    + [AWS::EC2::VPCDHCPOptionsAssociation](#awsec2vpcdhcpoptionsassociation)
      - [Properties](#properties-70)
        * [DhcpOptionsId](#dhcpoptionsid)
        * [VpcId](#vpcid-4)
    + [AWS::EC2::VPCCidrBlock](#awsec2vpccidrblock)
      - [Properties](#properties-71)
        * [AmazonProvidedIpv6CidrBlock](#amazonprovidedipv6cidrblock)
        * [VpcId](#vpcid-5)
    + [AWS::EC2::VPCGatewayAttachment](#awsec2vpcgatewayattachment)
      - [Properties](#properties-72)
        * [InternetGatewayId](#internetgatewayid)
        * [VpcId](#vpcid-6)
        * [VpnGatewayId](#vpngatewayid)
    + [AWS::EC2::VPC](#awsec2vpc)
      - [Properties](#properties-73)
        * [CidrBlock](#cidrblock-2)
        * [EnableDnsSupport](#enablednssupport)
        * [EnableDnsHostnames](#enablednshostnames)
        * [InstanceTenancy](#instancetenancy)
        * [Tags](#tags-15)
    + [AWS::EC2::VPCEndpoint](#awsec2vpcendpoint)
      - [Properties](#properties-74)
        * [PolicyDocument](#policydocument)
        * [RouteTableIds](#routetableids)
        * [ServiceName](#servicename)
        * [VpcId](#vpcid-7)
    + [AWS::EC2::VPNConnectionRoute](#awsec2vpnconnectionroute)
      - [Properties](#properties-75)
        * [DestinationCidrBlock](#destinationcidrblock-1)
        * [VpnConnectionId](#vpnconnectionid)
    + [AWS::EC2::VPCPeeringConnection](#awsec2vpcpeeringconnection)
      - [Properties](#properties-76)
        * [PeerVpcId](#peervpcid)
        * [Tags](#tags-16)
        * [VpcId](#vpcid-8)
    + [AWS::EC2::VPNConnection](#awsec2vpnconnection)
      - [Properties](#properties-77)
        * [Type](#type-2)
        * [CustomerGatewayId](#customergatewayid)
        * [StaticRoutesOnly](#staticroutesonly)
        * [Tags](#tags-17)
        * [VpnGatewayId](#vpngatewayid-1)
    + [AWS::EC2::VPNGateway](#awsec2vpngateway)
      - [Properties](#properties-78)
        * [Type](#type-3)
        * [Tags](#tags-18)
    + [AWS::EC2::VPNGatewayRoutePropagation](#awsec2vpngatewayroutepropagation)
      - [Properties](#properties-79)
        * [RouteTableIds](#routetableids-1)
        * [VpnGatewayId](#vpngatewayid-2)
  * [ECR](#ecr)
    + [AWS::ECR::Repository](#awsecrrepository)
      - [Properties](#properties-80)
        * [RepositoryName](#repositoryname-1)
        * [RepositoryPolicyText](#repositorypolicytext)
  * [ECS](#ecs)
    + [AWS::ECS::Cluster](#awsecscluster)
      - [Properties](#properties-81)
        * [ClusterName](#clustername)
    + [AWS::ECS::Service](#awsecsservice)
      - [Properties](#properties-82)
        * [Cluster](#cluster)
        * [DeploymentConfiguration](#deploymentconfiguration)
        * [DesiredCount](#desiredcount)
        * [LoadBalancers](#loadbalancers)
        * [Role](#role)
        * [TaskDefinition](#taskdefinition)
    + [AWS::ECS::TaskDefinition](#awsecstaskdefinition)
      - [Properties](#properties-83)
        * [ContainerDefinitions](#containerdefinitions)
        * [Family](#family)
        * [NetworkMode](#networkmode)
        * [TaskRoleArn](#taskrolearn)
        * [Volumes](#volumes-1)
  * [EFS](#efs)
    + [AWS::EFS::MountTarget](#awsefsmounttarget)
      - [Properties](#properties-84)
        * [FileSystemId](#filesystemid)
        * [IpAddress](#ipaddress-1)
        * [SecurityGroups](#securitygroups-2)
        * [SubnetId](#subnetid-6)
    + [AWS::EFS::FileSystem](#awsefsfilesystem)
      - [Properties](#properties-85)
        * [FileSystemTags](#filesystemtags)
        * [PerformanceMode](#performancemode)
  * [EMR](#emr)
    + [AWS::EMR::Cluster](#awsemrcluster)
      - [Properties](#properties-86)
        * [AdditionalInfo](#additionalinfo-1)
        * [Applications](#applications)
        * [BootstrapActions](#bootstrapactions)
        * [Configurations](#configurations)
        * [Instances](#instances)
        * [JobFlowRole](#jobflowrole)
        * [LogUri](#loguri)
        * [Name](#name-11)
        * [ReleaseLabel](#releaselabel)
        * [ServiceRole](#servicerole-1)
        * [Tags](#tags-19)
        * [VisibleToAllUsers](#visibletoallusers)
    + [AWS::EMR::InstanceGroupConfig](#awsemrinstancegroupconfig)
      - [Properties](#properties-87)
        * [BidPrice](#bidprice)
        * [Configurations](#configurations-1)
        * [EbsConfiguration](#ebsconfiguration)
        * [InstanceCount](#instancecount)
        * [InstanceRole](#instancerole)
        * [InstanceType](#instancetype-3)
        * [JobFlowId](#jobflowid)
        * [Market](#market)
        * [Name](#name-12)
    + [AWS::EMR::Step](#awsemrstep)
      - [Properties](#properties-88)
        * [ActionOnFailure](#actiononfailure)
        * [HadoopJarStep](#hadoopjarstep)
        * [JobFlowId](#jobflowid-1)
        * [Name](#name-13)
  * [ElastiCache](#elasticache)
    + [AWS::ElastiCache::SecurityGroup](#awselasticachesecuritygroup)
      - [Properties](#properties-89)
        * [Description](#description-12)
    + [AWS::ElastiCache::ParameterGroup](#awselasticacheparametergroup)
      - [Properties](#properties-90)
        * [CacheParameterGroupFamily](#cacheparametergroupfamily)
        * [Description](#description-13)
        * [Properties](#properties-91)
    + [AWS::ElastiCache::CacheCluster](#awselasticachecachecluster)
      - [Properties](#properties-92)
        * [AutoMinorVersionUpgrade](#autominorversionupgrade)
        * [AZMode](#azmode)
        * [CacheNodeType](#cachenodetype)
        * [CacheParameterGroupName](#cacheparametergroupname)
        * [CacheSecurityGroupNames](#cachesecuritygroupnames)
        * [CacheSubnetGroupName](#cachesubnetgroupname)
        * [ClusterName](#clustername-1)
        * [Engine](#engine)
        * [EngineVersion](#engineversion)
        * [NotificationTopicArn](#notificationtopicarn)
        * [NumCacheNodes](#numcachenodes)
        * [Port](#port)
        * [PreferredAvailabilityZone](#preferredavailabilityzone)
        * [PreferredAvailabilityZones](#preferredavailabilityzones)
        * [PreferredMaintenanceWindow](#preferredmaintenancewindow)
        * [SnapshotArns](#snapshotarns)
        * [SnapshotName](#snapshotname)
        * [SnapshotRetentionLimit](#snapshotretentionlimit)
        * [SnapshotWindow](#snapshotwindow)
        * [Tags](#tags-20)
        * [VpcSecurityGroupIds](#vpcsecuritygroupids)
    + [AWS::ElastiCache::SecurityGroupIngress](#awselasticachesecuritygroupingress)
      - [Properties](#properties-93)
        * [CacheSecurityGroupName](#cachesecuritygroupname)
        * [EC2SecurityGroupName](#ec2securitygroupname)
        * [EC2SecurityGroupOwnerId](#ec2securitygroupownerid)
    + [AWS::ElastiCache::SubnetGroup](#awselasticachesubnetgroup)
      - [Properties](#properties-94)
        * [CacheSubnetGroupName](#cachesubnetgroupname-1)
        * [Description](#description-14)
        * [SubnetIds](#subnetids)
    + [AWS::ElastiCache::ReplicationGroup](#awselasticachereplicationgroup)
      - [Properties](#properties-95)
        * [AutomaticFailoverEnabled](#automaticfailoverenabled)
        * [AutoMinorVersionUpgrade](#autominorversionupgrade-1)
        * [CacheNodeType](#cachenodetype-1)
        * [CacheParameterGroupName](#cacheparametergroupname-1)
        * [CacheSecurityGroupNames](#cachesecuritygroupnames-1)
        * [CacheSubnetGroupName](#cachesubnetgroupname-2)
        * [Engine](#engine-1)
        * [EngineVersion](#engineversion-1)
        * [NodeGroupConfiguration](#nodegroupconfiguration)
        * [NotificationTopicArn](#notificationtopicarn-1)
        * [NumCacheClusters](#numcacheclusters)
        * [NumNodeGroups](#numnodegroups)
        * [Port](#port-1)
        * [PreferredCacheClusterAZs](#preferredcacheclusterazs)
        * [PreferredMaintenanceWindow](#preferredmaintenancewindow-1)
        * [PrimaryClusterId](#primaryclusterid)
        * [ReplicasPerNodeGroup](#replicaspernodegroup)
        * [ReplicationGroupDescription](#replicationgroupdescription)
        * [ReplicationGroupId](#replicationgroupid)
        * [SecurityGroupIds](#securitygroupids-1)
        * [SnapshotArns](#snapshotarns-1)
        * [SnapshotName](#snapshotname-1)
        * [SnapshotRetentionLimit](#snapshotretentionlimit-1)
        * [SnapshottingClusterId](#snapshottingclusterid)
        * [SnapshotWindow](#snapshotwindow-1)
        * [Tags](#tags-21)
  * [ElasticBeanstalk](#elasticbeanstalk)
    + [AWS::ElasticBeanstalk::Environment](#awselasticbeanstalkenvironment)
      - [Properties](#properties-96)
        * [ApplicationName](#applicationname-2)
        * [CNAMEPrefix](#cnameprefix)
        * [Description](#description-15)
        * [EnvironmentName](#environmentname)
        * [OptionSettings](#optionsettings)
        * [SolutionStackName](#solutionstackname)
        * [Tags](#tags-22)
        * [TemplateName](#templatename)
        * [Tier](#tier)
        * [VersionLabel](#versionlabel)
    + [AWS::ElasticBeanstalk::Application](#awselasticbeanstalkapplication)
      - [Properties](#properties-97)
        * [ApplicationName](#applicationname-3)
        * [Description](#description-16)
    + [AWS::ElasticBeanstalk::ApplicationVersion](#awselasticbeanstalkapplicationversion)
      - [Properties](#properties-98)
        * [ApplicationName](#applicationname-4)
        * [Description](#description-17)
        * [SourceBundle](#sourcebundle)
    + [AWS::ElasticBeanstalk::ConfigurationTemplate](#awselasticbeanstalkconfigurationtemplate)
      - [Properties](#properties-99)
        * [ApplicationName](#applicationname-5)
        * [Description](#description-18)
        * [EnvironmentId](#environmentid)
        * [OptionSettings](#optionsettings-1)
        * [SolutionStackName](#solutionstackname-1)
        * [SourceConfiguration](#sourceconfiguration)
  * [ElasticLoadBalancing](#elasticloadbalancing)
    + [AWS::ElasticLoadBalancing::LoadBalancer](#awselasticloadbalancingloadbalancer)
      - [Properties](#properties-100)
        * [AccessLoggingPolicy](#accessloggingpolicy)
        * [AppCookieStickinessPolicy](#appcookiestickinesspolicy)
        * [AvailabilityZones](#availabilityzones-1)
        * [ConnectionDrainingPolicy](#connectiondrainingpolicy)
        * [ConnectionSettings](#connectionsettings)
        * [CrossZone](#crosszone)
        * [HealthCheck](#healthcheck)
        * [Instances](#instances-1)
        * [LBCookieStickinessPolicy](#lbcookiestickinesspolicy)
        * [LoadBalancerName](#loadbalancername)
        * [Listeners](#listeners)
        * [Policies](#policies)
        * [Scheme](#scheme)
        * [SecurityGroups](#securitygroups-3)
        * [Subnets](#subnets)
        * [Tags](#tags-23)
  * [ElasticLoadBalancingV2](#elasticloadbalancingv2)
    + [AWS::ElasticLoadBalancingV2::ListenerRule](#awselasticloadbalancingv2listenerrule)
      - [Properties](#properties-101)
        * [Actions](#actions)
        * [Conditions](#conditions)
        * [ListenerArn](#listenerarn)
        * [Priority](#priority)
    + [AWS::ElasticLoadBalancingV2::Listener](#awselasticloadbalancingv2listener)
      - [Properties](#properties-102)
        * [Certificates](#certificates)
        * [DefaultActions](#defaultactions)
        * [LoadBalancerArn](#loadbalancerarn)
        * [Port](#port-2)
        * [Protocol](#protocol-1)
        * [SslPolicy](#sslpolicy)
    + [AWS::ElasticLoadBalancingV2::LoadBalancer](#awselasticloadbalancingv2loadbalancer)
      - [Properties](#properties-103)
        * [LoadBalancerAttributes](#loadbalancerattributes)
        * [Name](#name-14)
        * [Scheme](#scheme-1)
        * [SecurityGroups](#securitygroups-4)
        * [Subnets](#subnets-1)
        * [Tags](#tags-24)
    + [AWS::ElasticLoadBalancingV2::TargetGroup](#awselasticloadbalancingv2targetgroup)
      - [Properties](#properties-104)
        * [HealthCheckIntervalSeconds](#healthcheckintervalseconds)
        * [HealthCheckPath](#healthcheckpath)
        * [HealthCheckPort](#healthcheckport)
        * [HealthCheckProtocol](#healthcheckprotocol)
        * [HealthCheckTimeoutSeconds](#healthchecktimeoutseconds)
        * [HealthyThresholdCount](#healthythresholdcount)
        * [Matcher](#matcher)
        * [Name](#name-15)
        * [Port](#port-3)
        * [Protocol](#protocol-2)
        * [Tags](#tags-25)
        * [TargetGroupAttributes](#targetgroupattributes)
        * [TargetGroupFullName](#targetgroupfullname)
        * [Targets](#targets)
        * [UnhealthyThresholdCount](#unhealthythresholdcount)
        * [VpcId](#vpcid-9)
  * [Elasticsearch](#elasticsearch)
    + [AWS::Elasticsearch::Domain](#awselasticsearchdomain)
      - [Properties](#properties-105)
        * [AccessPolicies](#accesspolicies)
        * [AdvancedOptions](#advancedoptions)
        * [DomainName](#domainname-3)
        * [EBSOptions](#ebsoptions)
        * [ElasticsearchClusterConfig](#elasticsearchclusterconfig)
        * [ElasticsearchVersion](#elasticsearchversion)
        * [SnapshotOptions](#snapshotoptions)
        * [Tags](#tags-26)
  * [Events](#events)
    + [AWS::Events::Rule](#awseventsrule)
      - [Properties](#properties-106)
        * [Description](#description-19)
        * [EventPattern](#eventpattern)
        * [Name](#name-16)
        * [RoleArn](#rolearn-1)
        * [ScheduleExpression](#scheduleexpression)
        * [State](#state)
        * [Targets](#targets-1)
  * [GameLift](#gamelift)
    + [AWS::GameLift::Alias](#awsgameliftalias)
      - [Properties](#properties-107)
        * [Description](#description-20)
        * [Name](#name-17)
        * [RoutingStrategy](#routingstrategy)
    + [AWS::GameLift::Build](#awsgameliftbuild)
      - [Properties](#properties-108)
        * [Name](#name-18)
        * [StorageLocation](#storagelocation)
        * [Version](#version-1)
    + [AWS::GameLift::Fleet](#awsgameliftfleet)
      - [Properties](#properties-109)
        * [BuildId](#buildid)
        * [Description](#description-21)
        * [DesiredEC2Instances](#desiredec2instances)
        * [EC2InboundPermissions](#ec2inboundpermissions)
        * [EC2InstanceType](#ec2instancetype)
        * [LogPaths](#logpaths)
        * [MaxSize](#maxsize-2)
        * [MinSize](#minsize-2)
        * [Name](#name-19)
        * [ServerLaunchParameters](#serverlaunchparameters)
        * [ServerLaunchPath](#serverlaunchpath)
  * [IAM](#iam)
    + [AWS::IAM::AccessKey](#awsiamaccesskey)
      - [Properties](#properties-110)
        * [Serial](#serial)
        * [Status](#status)
        * [UserName](#username)
    + [AWS::IAM::UserToGroupAddition](#awsiamusertogroupaddition)
      - [Properties](#properties-111)
        * [GroupName](#groupname-1)
        * [Users](#users)
    + [AWS::IAM::Group](#awsiamgroup)
      - [Properties](#properties-112)
        * [GroupName](#groupname-2)
        * [ManagedPolicyArns](#managedpolicyarns)
        * [Path](#path)
        * [Policies](#policies-1)
    + [AWS::IAM::User](#awsiamuser)
      - [Properties](#properties-113)
        * [Groups](#groups)
        * [LoginProfile](#loginprofile)
        * [ManagedPolicyArns](#managedpolicyarns-1)
        * [Path](#path-1)
        * [Policies](#policies-2)
        * [UserName](#username-1)
    + [AWS::IAM::InstanceProfile](#awsiaminstanceprofile)
      - [Properties](#properties-114)
        * [Path](#path-2)
        * [Roles](#roles)
    + [AWS::IAM::Policy](#awsiampolicy)
      - [Properties](#properties-115)
        * [Groups](#groups-1)
        * [PolicyDocument](#policydocument-1)
        * [PolicyName](#policyname-1)
        * [Roles](#roles-1)
        * [Users](#users-1)
    + [AWS::IAM::ManagedPolicy](#awsiammanagedpolicy)
      - [Properties](#properties-116)
        * [Description](#description-22)
        * [Groups](#groups-2)
        * [Path](#path-3)
        * [PolicyDocument](#policydocument-2)
        * [Roles](#roles-2)
        * [Users](#users-2)
    + [AWS::IAM::Role](#awsiamrole)
      - [Properties](#properties-117)
        * [AssumeRolePolicyDocument](#assumerolepolicydocument)
        * [ManagedPolicyArns](#managedpolicyarns-2)
        * [Path](#path-4)
        * [Policies](#policies-3)
        * [RoleName](#rolename)
  * [IoT](#iot)
    + [AWS::IoT::Certificate](#awsiotcertificate)
      - [Properties](#properties-118)
        * [CertificateSigningRequest](#certificatesigningrequest)
        * [Status](#status-1)
    + [AWS::IoT::Policy](#awsiotpolicy)
      - [Properties](#properties-119)
        * [PolicyDocument](#policydocument-3)
        * [PolicyName](#policyname-2)
    + [AWS::IoT::TopicRule](#awsiottopicrule)
      - [Properties](#properties-120)
        * [RuleName](#rulename)
        * [TopicRulePayload](#topicrulepayload)
    + [AWS::IoT::PolicyPrincipalAttachment](#awsiotpolicyprincipalattachment)
      - [Properties](#properties-121)
        * [PolicyName](#policyname-3)
        * [Principal](#principal)
    + [AWS::IoT::ThingPrincipalAttachment](#awsiotthingprincipalattachment)
      - [Properties](#properties-122)
        * [Principal](#principal-1)
        * [ThingName](#thingname)
    + [AWS::IoT::Thing](#awsiotthing)
      - [Properties](#properties-123)
        * [AttributePayload](#attributepayload)
        * [ThingName](#thingname-1)
  * [KMS](#kms)
    + [AWS::KMS::Alias](#awskmsalias)
      - [Properties](#properties-124)
        * [AliasName](#aliasname)
        * [TargetKeyId](#targetkeyid)
    + [AWS::KMS::Key](#awskmskey)
      - [Properties](#properties-125)
        * [Description](#description-23)
        * [Enabled](#enabled-1)
        * [EnableKeyRotation](#enablekeyrotation)
        * [KeyPolicy](#keypolicy)
  * [Kinesis](#kinesis)
    + [AWS::Kinesis::Stream](#awskinesisstream)
      - [Properties](#properties-126)
        * [Name](#name-20)
        * [ShardCount](#shardcount)
        * [Tags](#tags-27)
  * [KinesisFirehose](#kinesisfirehose)
    + [AWS::KinesisFirehose::DeliveryStream](#awskinesisfirehosedeliverystream)
      - [Properties](#properties-127)
        * [DeliveryStreamName](#deliverystreamname)
        * [ElasticsearchDestinationConfiguration](#elasticsearchdestinationconfiguration)
        * [RedshiftDestinationConfiguration](#redshiftdestinationconfiguration)
        * [S3DestinationConfiguration](#s3destinationconfiguration)
  * [Lambda](#lambda)
    + [AWS::Lambda::Alias](#awslambdaalias)
      - [Properties](#properties-128)
        * [Description](#description-24)
        * [FunctionName](#functionname)
        * [FunctionVersion](#functionversion)
        * [Name](#name-21)
    + [AWS::Lambda::EventSourceMapping](#awslambdaeventsourcemapping)
      - [Properties](#properties-129)
        * [BatchSize](#batchsize)
        * [Enabled](#enabled-2)
        * [EventSourceArn](#eventsourcearn)
        * [FunctionName](#functionname-1)
        * [StartingPosition](#startingposition)
    + [AWS::Lambda::Function](#awslambdafunction)
      - [Properties](#properties-130)
        * [Code](#code)
        * [Description](#description-25)
        * [Environment](#environment-1)
        * [FunctionName](#functionname-2)
        * [Handler](#handler)
        * [KmsKeyArn](#kmskeyarn)
        * [MemorySize](#memorysize)
        * [Role](#role-1)
        * [Runtime](#runtime)
        * [Timeout](#timeout-1)
        * [VpcConfig](#vpcconfig)
    + [AWS::Lambda::Permission](#awslambdapermission)
      - [Properties](#properties-131)
        * [Action](#action)
        * [FunctionName](#functionname-3)
        * [Principal](#principal-2)
        * [SourceAccount](#sourceaccount)
        * [SourceArn](#sourcearn)
    + [AWS::Lambda::Version](#awslambdaversion)
      - [Properties](#properties-132)
        * [CodeSha256](#codesha256)
        * [Description](#description-26)
        * [FunctionName](#functionname-4)
  * [Logs](#logs)
    + [AWS::Logs::LogGroup](#awslogsloggroup)
      - [Properties](#properties-133)
        * [LogGroupName](#loggroupname-1)
        * [RetentionInDays](#retentionindays)
    + [AWS::Logs::Destination](#awslogsdestination)
      - [Properties](#properties-134)
        * [DestinationName](#destinationname)
        * [DestinationPolicy](#destinationpolicy)
        * [RoleArn](#rolearn-2)
        * [TargetArn](#targetarn)
    + [AWS::Logs::LogStream](#awslogslogstream)
      - [Properties](#properties-135)
        * [LogGroupName](#loggroupname-2)
        * [LogStreamName](#logstreamname)
    + [AWS::Logs::MetricFilter](#awslogsmetricfilter)
      - [Properties](#properties-136)
        * [FilterPattern](#filterpattern)
        * [LogGroupName](#loggroupname-3)
        * [MetricTransformations](#metrictransformations)
    + [AWS::Logs::SubscriptionFilter](#awslogssubscriptionfilter)
      - [Properties](#properties-137)
        * [DestinationArn](#destinationarn)
        * [FilterPattern](#filterpattern-1)
        * [LogGroupName](#loggroupname-4)
        * [RoleArn](#rolearn-3)
  * [OpsWorks](#opsworks)
    + [AWS::OpsWorks::App](#awsopsworksapp)
      - [Properties](#properties-138)
        * [AppSource](#appsource)
        * [Attributes](#attributes)
        * [Description](#description-27)
        * [DataSources](#datasources)
        * [Domains](#domains)
        * [EnableSsl](#enablessl)
        * [Environment](#environment-2)
        * [Name](#name-22)
        * [Shortname](#shortname)
        * [SslConfiguration](#sslconfiguration)
        * [StackId](#stackid)
        * [Type](#type-4)
    + [AWS::OpsWorks::ElasticLoadBalancerAttachment](#awsopsworkselasticloadbalancerattachment)
      - [Properties](#properties-139)
        * [ElasticLoadBalancerName](#elasticloadbalancername)
        * [LayerId](#layerid)
    + [AWS::OpsWorks::Stack](#awsopsworksstack)
      - [Properties](#properties-140)
        * [AgentVersion](#agentversion)
        * [Attributes](#attributes-1)
        * [ChefConfiguration](#chefconfiguration)
        * [CloneAppIds](#cloneappids)
        * [ClonePermissions](#clonepermissions)
        * [ConfigurationManager](#configurationmanager)
        * [CustomCookbooksSource](#customcookbookssource)
        * [CustomJson](#customjson)
        * [DefaultAvailabilityZone](#defaultavailabilityzone)
        * [DefaultInstanceProfileArn](#defaultinstanceprofilearn)
        * [DefaultOs](#defaultos)
        * [DefaultRootDeviceType](#defaultrootdevicetype)
        * [DefaultSshKeyName](#defaultsshkeyname)
        * [DefaultSubnetId](#defaultsubnetid)
        * [EcsClusterArn](#ecsclusterarn)
        * [ElasticIps](#elasticips)
        * [HostnameTheme](#hostnametheme)
        * [Name](#name-23)
        * [RdsDbInstances](#rdsdbinstances)
        * [ServiceRoleArn](#servicerolearn-1)
        * [SourceStackId](#sourcestackid)
        * [UseCustomCookbooks](#usecustomcookbooks)
        * [UseOpsworksSecurityGroups](#useopsworkssecuritygroups)
        * [VpcId](#vpcid-10)
    + [AWS::OpsWorks::UserProfile](#awsopsworksuserprofile)
      - [Properties](#properties-141)
        * [AllowSelfManagement](#allowselfmanagement)
        * [IamUserArn](#iamuserarn)
        * [SshPublicKey](#sshpublickey)
    + [AWS::OpsWorks::Instance](#awsopsworksinstance)
      - [Properties](#properties-142)
        * [AgentVersion](#agentversion-1)
        * [AmiId](#amiid)
        * [Architecture](#architecture)
        * [AutoScalingType](#autoscalingtype)
        * [AvailabilityZone](#availabilityzone-4)
        * [BlockDeviceMappings](#blockdevicemappings-2)
        * [EbsOptimized](#ebsoptimized-2)
        * [ElasticIps](#elasticips-1)
        * [Hostname](#hostname)
        * [InstallUpdatesOnBoot](#installupdatesonboot)
        * [InstanceType](#instancetype-4)
        * [LayerIds](#layerids)
        * [Os](#os)
        * [RootDeviceType](#rootdevicetype)
        * [SshKeyName](#sshkeyname)
        * [StackId](#stackid-1)
        * [SubnetId](#subnetid-7)
        * [Tenancy](#tenancy-1)
        * [TimeBasedAutoScaling](#timebasedautoscaling)
        * [VirtualizationType](#virtualizationtype)
        * [Volumes](#volumes-2)
    + [AWS::OpsWorks::Layer](#awsopsworkslayer)
      - [Properties](#properties-143)
        * [Attributes](#attributes-2)
        * [AutoAssignElasticIps](#autoassignelasticips)
        * [AutoAssignPublicIps](#autoassignpublicips)
        * [CustomInstanceProfileArn](#custominstanceprofilearn)
        * [CustomJson](#customjson-1)
        * [CustomRecipes](#customrecipes)
        * [CustomSecurityGroupIds](#customsecuritygroupids)
        * [EnableAutoHealing](#enableautohealing)
        * [InstallUpdatesOnBoot](#installupdatesonboot-1)
        * [LifecycleEventConfiguration](#lifecycleeventconfiguration)
        * [LoadBasedAutoScaling](#loadbasedautoscaling)
        * [Name](#name-24)
        * [Packages](#packages)
        * [Shortname](#shortname-1)
        * [StackId](#stackid-2)
        * [Type](#type-5)
        * [VolumeConfigurations](#volumeconfigurations)
    + [AWS::OpsWorks::Volume](#awsopsworksvolume)
      - [Properties](#properties-144)
        * [Ec2VolumeId](#ec2volumeid)
        * [MountPoint](#mountpoint)
        * [Name](#name-25)
        * [StackId](#stackid-3)
  * [RDS](#rds)
    + [AWS::RDS::DBParameterGroup](#awsrdsdbparametergroup)
      - [Properties](#properties-145)
        * [Description](#description-28)
        * [Family](#family-1)
        * [Parameters](#parameters-2)
        * [Tags](#tags-28)
    + [AWS::RDS::DBInstance](#awsrdsdbinstance)
      - [Properties](#properties-146)
        * [AllocatedStorage](#allocatedstorage)
        * [AllowMajorVersionUpgrade](#allowmajorversionupgrade)
        * [AutoMinorVersionUpgrade](#autominorversionupgrade-2)
        * [AvailabilityZone](#availabilityzone-5)
        * [BackupRetentionPeriod](#backupretentionperiod)
        * [CharacterSetName](#charactersetname)
        * [CopyTagsToSnapshot](#copytagstosnapshot)
        * [DBClusterIdentifier](#dbclusteridentifier)
        * [DBInstanceClass](#dbinstanceclass)
        * [DBInstanceIdentifier](#dbinstanceidentifier)
        * [DBName](#dbname)
        * [DBParameterGroupName](#dbparametergroupname)
        * [DBSecurityGroups](#dbsecuritygroups)
        * [DBSnapshotIdentifier](#dbsnapshotidentifier)
        * [DBSubnetGroupName](#dbsubnetgroupname)
        * [Domain](#domain-1)
        * [DomainIAMRoleName](#domainiamrolename)
        * [Engine](#engine-2)
        * [EngineVersion](#engineversion-2)
        * [Iops](#iops-1)
        * [KmsKeyId](#kmskeyid-1)
        * [LicenseModel](#licensemodel)
        * [MasterUsername](#masterusername)
        * [MasterUserPassword](#masteruserpassword)
        * [MonitoringInterval](#monitoringinterval)
        * [MonitoringRoleArn](#monitoringrolearn)
        * [MultiAZ](#multiaz)
        * [OptionGroupName](#optiongroupname)
        * [Port](#port-4)
        * [PreferredBackupWindow](#preferredbackupwindow)
        * [PreferredMaintenanceWindow](#preferredmaintenancewindow-2)
        * [PubliclyAccessible](#publiclyaccessible)
        * [SourceDBInstanceIdentifier](#sourcedbinstanceidentifier)
        * [StorageEncrypted](#storageencrypted)
        * [StorageType](#storagetype)
        * [Tags](#tags-29)
        * [Timezone](#timezone)
        * [VPCSecurityGroups](#vpcsecuritygroups)
    + [AWS::RDS::DBSecurityGroup](#awsrdsdbsecuritygroup)
      - [Properties](#properties-147)
        * [EC2VpcId](#ec2vpcid)
        * [DBSecurityGroupIngress](#dbsecuritygroupingress)
        * [GroupDescription](#groupdescription-1)
        * [Tags](#tags-30)
    + [AWS::RDS::DBCluster](#awsrdsdbcluster)
      - [Properties](#properties-148)
        * [AvailabilityZones](#availabilityzones-2)
        * [BackupRetentionPeriod](#backupretentionperiod-1)
        * [DatabaseName](#databasename)
        * [DBClusterParameterGroupName](#dbclusterparametergroupname)
        * [DBSubnetGroupName](#dbsubnetgroupname-1)
        * [Engine](#engine-3)
        * [EngineVersion](#engineversion-3)
        * [KmsKeyId](#kmskeyid-2)
        * [MasterUsername](#masterusername-1)
        * [MasterUserPassword](#masteruserpassword-1)
        * [Port](#port-5)
        * [PreferredBackupWindow](#preferredbackupwindow-1)
        * [PreferredMaintenanceWindow](#preferredmaintenancewindow-3)
        * [SnapshotIdentifier](#snapshotidentifier)
        * [StorageEncrypted](#storageencrypted-1)
        * [Tags](#tags-31)
        * [VpcSecurityGroupIds](#vpcsecuritygroupids-1)
    + [AWS::RDS::DBSubnetGroup](#awsrdsdbsubnetgroup)
      - [Properties](#properties-149)
        * [DBSubnetGroupDescription](#dbsubnetgroupdescription)
        * [SubnetIds](#subnetids-1)
        * [Tags](#tags-32)
    + [AWS::RDS::DBClusterParameterGroup](#awsrdsdbclusterparametergroup)
      - [Properties](#properties-150)
        * [Description](#description-29)
        * [Family](#family-2)
        * [Parameters](#parameters-3)
        * [Tags](#tags-33)
    + [AWS::RDS::EventSubscription](#awsrdseventsubscription)
      - [Properties](#properties-151)
        * [Enabled](#enabled-3)
        * [EventCategories](#eventcategories)
        * [SnsTopicArn](#snstopicarn)
        * [SourceIds](#sourceids)
        * [SourceType](#sourcetype)
    + [AWS::RDS::OptionGroup](#awsrdsoptiongroup)
      - [Properties](#properties-152)
        * [EngineName](#enginename)
        * [MajorEngineVersion](#majorengineversion)
        * [OptionGroupDescription](#optiongroupdescription)
        * [OptionConfigurations](#optionconfigurations)
        * [Tags](#tags-34)
    + [AWS::RDS::DBSecurityGroupIngress](#awsrdsdbsecuritygroupingress)
      - [Properties](#properties-153)
        * [DBSecurityGroupName](#dbsecuritygroupname)
        * [EC2SecurityGroupId](#ec2securitygroupid)
        * [EC2SecurityGroupName](#ec2securitygroupname-1)
        * [EC2SecurityGroupOwnerId](#ec2securitygroupownerid-1)
  * [Redshift](#redshift)
    + [AWS::Redshift::Cluster](#awsredshiftcluster)
      - [Properties](#properties-154)
        * [AllowVersionUpgrade](#allowversionupgrade)
        * [AutomatedSnapshotRetentionPeriod](#automatedsnapshotretentionperiod)
        * [AvailabilityZone](#availabilityzone-6)
        * [ClusterParameterGroupName](#clusterparametergroupname)
        * [ClusterSecurityGroups](#clustersecuritygroups)
        * [ClusterSubnetGroupName](#clustersubnetgroupname)
        * [ClusterType](#clustertype)
        * [ClusterVersion](#clusterversion)
        * [DBName](#dbname-1)
        * [ElasticIp](#elasticip)
        * [Encrypted](#encrypted-1)
        * [HsmClientCertificateIdentifier](#hsmclientcertificateidentifier)
        * [HsmConfigurationIdentifier](#hsmconfigurationidentifier)
        * [KmsKeyId](#kmskeyid-3)
        * [MasterUsername](#masterusername-2)
        * [MasterUserPassword](#masteruserpassword-2)
        * [NodeType](#nodetype)
        * [NumberOfNodes](#numberofnodes)
        * [OwnerAccount](#owneraccount)
        * [Port](#port-6)
        * [PreferredMaintenanceWindow](#preferredmaintenancewindow-4)
        * [PubliclyAccessible](#publiclyaccessible-1)
        * [SnapshotClusterIdentifier](#snapshotclusteridentifier)
        * [SnapshotIdentifier](#snapshotidentifier-1)
        * [VpcSecurityGroupIds](#vpcsecuritygroupids-2)
    + [AWS::Redshift::ClusterParameterGroup](#awsredshiftclusterparametergroup)
      - [Properties](#properties-155)
        * [Description](#description-30)
        * [ParameterGroupFamily](#parametergroupfamily)
        * [Parameters](#parameters-4)
    + [AWS::Redshift::ClusterSecurityGroupIngress](#awsredshiftclustersecuritygroupingress)
      - [Properties](#properties-156)
        * [ClusterSecurityGroupName](#clustersecuritygroupname)
        * [CIDRIP](#cidrip)
        * [EC2SecurityGroupName](#ec2securitygroupname-2)
        * [EC2SecurityGroupOwnerId](#ec2securitygroupownerid-2)
    + [AWS::Redshift::ClusterSubnetGroup](#awsredshiftclustersubnetgroup)
      - [Properties](#properties-157)
        * [Description](#description-31)
        * [SubnetIds](#subnetids-2)
    + [AWS::Redshift::ClusterSecurityGroup](#awsredshiftclustersecuritygroup)
      - [Properties](#properties-158)
        * [Description](#description-32)
  * [Route53](#route53)
    + [AWS::Route53::RecordSet](#awsroute53recordset)
      - [Properties](#properties-159)
        * [AliasTarget](#aliastarget)
        * [Comment](#comment)
        * [Failover](#failover)
        * [GeoLocation](#geolocation)
        * [HealthCheckId](#healthcheckid)
        * [HostedZoneId](#hostedzoneid)
        * [HostedZoneName](#hostedzonename)
        * [Name](#name-26)
        * [ResourceRecords](#resourcerecords)
        * [SetIdentifier](#setidentifier)
        * [TTL](#ttl)
        * [Type](#type-6)
        * [Weight](#weight)
    + [AWS::Route53::RecordSetGroup](#awsroute53recordsetgroup)
      - [Properties](#properties-160)
        * [Comment](#comment-1)
        * [HostedZoneId](#hostedzoneid-1)
        * [HostedZoneName](#hostedzonename-1)
        * [RecordSets](#recordsets)
    + [AWS::Route53::HostedZone](#awsroute53hostedzone)
      - [Properties](#properties-161)
        * [HostedZoneConfig](#hostedzoneconfig)
        * [HostedZoneTags](#hostedzonetags)
        * [Name](#name-27)
        * [VPCs](#vpcs)
    + [AWS::Route53::HealthCheck](#awsroute53healthcheck)
      - [Properties](#properties-162)
        * [HealthCheckConfig](#healthcheckconfig)
        * [HealthCheckTags](#healthchecktags)
  * [S3](#s3)
    + [AWS::S3::BucketPolicy](#awss3bucketpolicy)
      - [Properties](#properties-163)
        * [Bucket](#bucket)
        * [PolicyDocument](#policydocument-4)
    + [AWS::S3::Bucket](#awss3bucket)
      - [Properties](#properties-164)
        * [AccessControl](#accesscontrol)
        * [BucketName](#bucketname)
        * [CorsConfiguration](#corsconfiguration)
        * [LifecycleConfiguration](#lifecycleconfiguration)
        * [LoggingConfiguration](#loggingconfiguration)
        * [NotificationConfiguration](#notificationconfiguration)
        * [ReplicationConfiguration](#replicationconfiguration)
        * [Tags](#tags-35)
        * [VersioningConfiguration](#versioningconfiguration)
        * [WebsiteConfiguration](#websiteconfiguration)
  * [SDB](#sdb)
    + [AWS::SDB::Domain](#awssdbdomain)
      - [Properties](#properties-165)
        * [Description](#description-33)
  * [SNS](#sns)
    + [AWS::SNS::TopicPolicy](#awssnstopicpolicy)
      - [Properties](#properties-166)
        * [PolicyDocument](#policydocument-5)
        * [Topics](#topics)
    + [AWS::SNS::Topic](#awssnstopic)
      - [Properties](#properties-167)
        * [DisplayName](#displayname)
        * [Subscription](#subscription)
        * [TopicName](#topicname)
    + [AWS::SNS::Subscription](#awssnssubscription)
      - [Properties](#properties-168)
        * [Endpoint](#endpoint)
        * [Protocol](#protocol-3)
        * [TopicArn](#topicarn)
  * [SQS](#sqs)
    + [AWS::SQS::QueuePolicy](#awssqsqueuepolicy)
      - [Properties](#properties-169)
        * [PolicyDocument](#policydocument-6)
        * [Queues](#queues)
    + [AWS::SQS::Queue](#awssqsqueue)
      - [Properties](#properties-170)
        * [DelaySeconds](#delayseconds)
        * [MaximumMessageSize](#maximummessagesize)
        * [MessageRetentionPeriod](#messageretentionperiod)
        * [QueueName](#queuename)
        * [ReceiveMessageWaitTimeSeconds](#receivemessagewaittimeseconds)
        * [RedrivePolicy](#redrivepolicy)
        * [VisibilityTimeout](#visibilitytimeout)
  * [SSM](#ssm)
    + [AWS::SSM::Association](#awsssmassociation)
      - [Properties](#properties-171)
        * [DocumentVersion](#documentversion)
        * [InstanceId](#instanceid-7)
        * [Name](#name-28)
        * [Parameters](#parameters-5)
        * [ScheduleExpression](#scheduleexpression-1)
        * [Targets](#targets-2)
    + [AWS::SSM::Document](#awsssmdocument)
      - [Properties](#properties-172)
        * [Content](#content)
        * [DocumentType](#documenttype)
  * [StepFunctions](#stepfunctions)
    + [AWS::StepFunctions::StateMachine](#awsstepfunctionsstatemachine)
      - [Properties](#properties-173)
        * [DefinitionString](#definitionstring)
        * [RoleArn](#rolearn-4)
    + [AWS::StepFunctions::Activity](#awsstepfunctionsactivity)
      - [Properties](#properties-174)
        * [Name](#name-29)
  * [WAF](#waf)
    + [AWS::WAF::ByteMatchSet](#awswafbytematchset)
      - [Properties](#properties-175)
        * [ByteMatchTuples](#bytematchtuples)
        * [Name](#name-30)
    + [AWS::WAF::IPSet](#awswafipset)
      - [Properties](#properties-176)
        * [IPSetDescriptors](#ipsetdescriptors)
        * [Name](#name-31)
    + [AWS::WAF::SqlInjectionMatchSet](#awswafsqlinjectionmatchset)
      - [Properties](#properties-177)
        * [Name](#name-32)
        * [SqlInjectionMatchTuples](#sqlinjectionmatchtuples)
    + [AWS::WAF::SizeConstraintSet](#awswafsizeconstraintset)
      - [Properties](#properties-178)
        * [Name](#name-33)
        * [SizeConstraints](#sizeconstraints)
    + [AWS::WAF::Rule](#awswafrule)
      - [Properties](#properties-179)
        * [MetricName](#metricname-1)
        * [Name](#name-34)
        * [Predicates](#predicates)
    + [AWS::WAF::XssMatchSet](#awswafxssmatchset)
      - [Properties](#properties-180)
        * [Name](#name-35)
        * [XssMatchTuples](#xssmatchtuples)
    + [AWS::WAF::WebACL](#awswafwebacl)
      - [Properties](#properties-181)
        * [DefaultAction](#defaultaction)
        * [MetricName](#metricname-2)
        * [Name](#name-36)
        * [Rules](#rules)
  * [WorkSpaces](#workspaces)
    + [AWS::WorkSpaces::Workspace](#awsworkspacesworkspace)
      - [Properties](#properties-182)
        * [BundleId](#bundleid)
        * [DirectoryId](#directoryid)
        * [UserName](#username-2)
        * [RootVolumeEncryptionEnabled](#rootvolumeencryptionenabled)
        * [UserVolumeEncryptionEnabled](#uservolumeencryptionenabled)
        * [VolumeEncryptionKey](#volumeencryptionkey)
- [Resource Attribute Properties](#resource-attribute-properties)
    + [AmazonAPIGatewayUsagePlanApiStage](#amazonapigatewayusageplanapistage)
      - [Properties](#properties-183)
        * [ApiId](#apiid)
        * [Stage](#stage-1)
    + [AmazonAPIGatewayUsagePlanQuotaSettings](#amazonapigatewayusageplanquotasettings)
      - [Properties](#properties-184)
        * [Limit](#limit)
        * [Offset](#offset)
        * [Period](#period-1)
    + [AmazonAPIGatewayApiKeyStageKey](#amazonapigatewayapikeystagekey)
      - [Properties](#properties-185)
        * [RestApiId](#restapiid-7)
        * [StageName](#stagename-2)
    + [AmazonAPIGatewayUsagePlanThrottleSettings](#amazonapigatewayusageplanthrottlesettings)
      - [Properties](#properties-186)
        * [BurstLimit](#burstlimit)
        * [RateLimit](#ratelimit)
    + [AmazonAPIGatewayDeploymentStageDescription](#amazonapigatewaydeploymentstagedescription)
      - [Properties](#properties-187)
        * [CacheClusterEnabled](#cacheclusterenabled-1)
        * [CacheClusterSize](#cacheclustersize-1)
        * [CacheDataEncrypted](#cachedataencrypted)
        * [CacheTtlInSeconds](#cachettlinseconds)
        * [CachingEnabled](#cachingenabled)
        * [ClientCertificateId](#clientcertificateid-1)
        * [DataTraceEnabled](#datatraceenabled)
        * [Description](#description-34)
        * [LoggingLevel](#logginglevel)
        * [MethodSettings](#methodsettings-1)
        * [MetricsEnabled](#metricsenabled)
        * [StageName](#stagename-3)
        * [ThrottlingBurstLimit](#throttlingburstlimit)
        * [ThrottlingRateLimit](#throttlingratelimit)
        * [Variables](#variables-1)
    + [AmazonAPIGatewayDeploymentStageDescriptionMethodSetting](#amazonapigatewaydeploymentstagedescriptionmethodsetting)
      - [Properties](#properties-188)
        * [CacheDataEncrypted](#cachedataencrypted-1)
        * [CacheTtlInSeconds](#cachettlinseconds-1)
        * [CachingEnabled](#cachingenabled-1)
        * [DataTraceEnabled](#datatraceenabled-1)
        * [HttpMethod](#httpmethod-1)
        * [LoggingLevel](#logginglevel-1)
        * [MetricsEnabled](#metricsenabled-1)
        * [ResourcePath](#resourcepath)
        * [ThrottlingBurstLimit](#throttlingburstlimit-1)
        * [ThrottlingRateLimit](#throttlingratelimit-1)
    + [AmazonAPIGatewayMethodIntegrationIntegrationResponse](#amazonapigatewaymethodintegrationintegrationresponse)
      - [Properties](#properties-189)
        * [ResponseParameters](#responseparameters)
        * [ResponseTemplates](#responsetemplates)
        * [SelectionPattern](#selectionpattern)
        * [StatusCode](#statuscode)
    + [AmazonAPIGatewayMethodIntegration](#amazonapigatewaymethodintegration)
      - [Properties](#properties-190)
        * [CacheKeyParameters](#cachekeyparameters)
        * [CacheNamespace](#cachenamespace)
        * [Credentials](#credentials)
        * [IntegrationHttpMethod](#integrationhttpmethod)
        * [IntegrationResponses](#integrationresponses)
        * [PassthroughBehavior](#passthroughbehavior)
        * [RequestParameters](#requestparameters-1)
        * [RequestTemplates](#requesttemplates)
        * [Type](#type-7)
        * [Uri](#uri)
    + [AmazonAPIGatewayStageMethodSetting](#amazonapigatewaystagemethodsetting)
      - [Properties](#properties-191)
        * [CacheDataEncrypted](#cachedataencrypted-2)
        * [CacheTtlInSeconds](#cachettlinseconds-2)
        * [CachingEnabled](#cachingenabled-2)
        * [DataTraceEnabled](#datatraceenabled-2)
        * [HttpMethod](#httpmethod-2)
        * [LoggingLevel](#logginglevel-2)
        * [MetricsEnabled](#metricsenabled-2)
        * [ResourcePath](#resourcepath-1)
        * [ThrottlingBurstLimit](#throttlingburstlimit-2)
        * [ThrottlingRateLimit](#throttlingratelimit-2)
    + [AmazonAPIGatewayMethodMethodResponse](#amazonapigatewaymethodmethodresponse)
      - [Properties](#properties-192)
        * [ResponseModels](#responsemodels)
        * [ResponseParameters](#responseparameters-1)
        * [StatusCode](#statuscode-1)
    + [AmazonAPIGatewayRestApiS3Location](#amazonapigatewayrestapis3location)
      - [Properties](#properties-193)
        * [Bucket](#bucket-1)
        * [ETag](#etag)
        * [Key](#key)
        * [Version](#version-2)
    + [ApplicationAutoScalingScalingPolicyStepScalingPolicyConfigurationStepAdjustment](#applicationautoscalingscalingpolicystepscalingpolicyconfigurationstepadjustment)
      - [Properties](#properties-194)
        * [MetricIntervalLowerBound](#metricintervallowerbound)
        * [MetricIntervalUpperBound](#metricintervalupperbound)
        * [ScalingAdjustment](#scalingadjustment-1)
    + [ApplicationAutoScalingScalingPolicyStepScalingPolicyConfiguration](#applicationautoscalingscalingpolicystepscalingpolicyconfiguration)
      - [Properties](#properties-195)
        * [AdjustmentType](#adjustmenttype-1)
        * [Cooldown](#cooldown-2)
        * [MetricAggregationType](#metricaggregationtype-1)
        * [MinAdjustmentMagnitude](#minadjustmentmagnitude-1)
        * [StepAdjustments](#stepadjustments-1)
    + [AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType](#awscloudformationautoscalingblockdevicemappingpropertytype)
      - [Properties](#properties-196)
        * [DeviceName](#devicename)
        * [Ebs](#ebs)
        * [NoDevice](#nodevice)
        * [VirtualName](#virtualname)
    + [AutoScalingMetricsCollection](#autoscalingmetricscollection)
      - [Properties](#properties-197)
        * [Granularity](#granularity)
        * [Metrics](#metrics)
    + [AWSCloudFormationAutoScalingEBSBlockDevicePropertyType](#awscloudformationautoscalingebsblockdevicepropertytype)
      - [Properties](#properties-198)
        * [DeleteOnTermination](#deleteontermination-1)
        * [Encrypted](#encrypted-2)
        * [Iops](#iops-2)
        * [SnapshotId](#snapshotid-1)
        * [VolumeSize](#volumesize)
        * [VolumeType](#volumetype-1)
    + [AutoScalingTagsPropertyType](#autoscalingtagspropertytype)
      - [Properties](#properties-199)
        * [Key](#key-1)
        * [Value](#value)
        * [PropagateAtLaunch](#propagateatlaunch)
    + [AutoScalingNotificationConfigurations](#autoscalingnotificationconfigurations)
      - [Properties](#properties-200)
        * [NotificationTypes](#notificationtypes)
        * [TopicARN](#topicarn)
    + [ElasticBeanstalkSourceConfigurationPropertyType](#elasticbeanstalksourceconfigurationpropertytype)
      - [Properties](#properties-201)
        * [ApplicationName](#applicationname-6)
        * [TemplateName](#templatename-1)
    + [AutoScalingScalingPolicyStepAdjustments](#autoscalingscalingpolicystepadjustments)
      - [Properties](#properties-202)
        * [MetricIntervalLowerBound](#metricintervallowerbound-1)
        * [MetricIntervalUpperBound](#metricintervalupperbound-1)
        * [ScalingAdjustment](#scalingadjustment-2)
    + [ElasticBeanstalkOptionSettingsPropertyType](#elasticbeanstalkoptionsettingspropertytype)
      - [Properties](#properties-203)
        * [Namespace](#namespace-1)
        * [OptionName](#optionname)
        * [Value](#value-1)
    + [ElasticBeanstalkEnvironmentTierPropertyType](#elasticbeanstalkenvironmenttierpropertytype)
      - [Properties](#properties-204)
        * [Name](#name-37)
        * [Type](#type-8)
        * [Version](#version-3)
    + [ElasticBeanstalkSourceBundlePropertyType](#elasticbeanstalksourcebundlepropertytype)
      - [Properties](#properties-205)
        * [S3Bucket](#s3bucket)
        * [S3Key](#s3key)
    + [AWSCertificateManagerCertificateDomainValidationOption](#awscertificatemanagercertificatedomainvalidationoption)
      - [Properties](#properties-206)
        * [DomainName](#domainname-4)
        * [ValidationDomain](#validationdomain)
    + [AWSCloudFormationInterfaceLabel](#awscloudformationinterfacelabel)
      - [Properties](#properties-207)
        * [default](#default)
    + [AWSCloudFormationInterfaceParameterGroup](#awscloudformationinterfaceparametergroup)
      - [Properties](#properties-208)
        * [Label](#label)
        * [Parameters](#parameters-6)
    + [CloudFrontDistributionConfigOriginCustomOrigin](#cloudfrontdistributionconfigorigincustomorigin)
      - [Properties](#properties-209)
        * [HTTPPort](#httpport)
        * [HTTPSPort](#httpsport)
        * [OriginProtocolPolicy](#originprotocolpolicy)
        * [OriginSSLProtocols](#originsslprotocols)
    + [AWSCloudFormationInterfaceParameterLabel](#awscloudformationinterfaceparameterlabel)
      - [Properties](#properties-210)
        * [ParameterLogicalID](#parameterlogicalid)
    + [CloudFrontDistributionConfigCacheBehavior](#cloudfrontdistributionconfigcachebehavior)
      - [Properties](#properties-211)
        * [AllowedMethods](#allowedmethods)
        * [CachedMethods](#cachedmethods)
        * [Compress](#compress)
        * [DefaultTTL](#defaultttl)
        * [ForwardedValues](#forwardedvalues)
        * [MaxTTL](#maxttl)
        * [MinTTL](#minttl)
        * [PathPattern](#pathpattern)
        * [SmoothStreaming](#smoothstreaming)
        * [TargetOriginId](#targetoriginid)
        * [TrustedSigners](#trustedsigners)
        * [ViewerProtocolPolicy](#viewerprotocolpolicy)
    + [CloudFrontDefaultCacheBehavior](#cloudfrontdefaultcachebehavior)
      - [Properties](#properties-212)
        * [AllowedMethods](#allowedmethods-1)
        * [CachedMethods](#cachedmethods-1)
        * [Compress](#compress-1)
        * [DefaultTTL](#defaultttl-1)
        * [ForwardedValues](#forwardedvalues-1)
        * [MaxTTL](#maxttl-1)
        * [MinTTL](#minttl-1)
        * [SmoothStreaming](#smoothstreaming-1)
        * [TargetOriginId](#targetoriginid-1)
        * [TrustedSigners](#trustedsigners-1)
        * [ViewerProtocolPolicy](#viewerprotocolpolicy-1)
    + [CloudFrontDistributionConfigCustomErrorResponse](#cloudfrontdistributionconfigcustomerrorresponse)
      - [Properties](#properties-213)
        * [ErrorCachingMinTTL](#errorcachingminttl)
        * [ErrorCode](#errorcode)
        * [ResponseCode](#responsecode)
        * [ResponsePagePath](#responsepagepath)
    + [CloudFrontDistributionConfigurationRestrictions](#cloudfrontdistributionconfigurationrestrictions)
      - [Properties](#properties-214)
        * [GeoRestriction](#georestriction)
    + [CloudFrontDistributionConfigRestrictionsGeoRestriction](#cloudfrontdistributionconfigrestrictionsgeorestriction)
      - [Properties](#properties-215)
        * [Locations](#locations)
        * [RestrictionType](#restrictiontype)
    + [CloudFrontDistributionConfig](#cloudfrontdistributionconfig)
      - [Properties](#properties-216)
        * [Aliases](#aliases)
        * [CacheBehaviors](#cachebehaviors)
        * [Comment](#comment-2)
        * [CustomErrorResponses](#customerrorresponses)
        * [DefaultCacheBehavior](#defaultcachebehavior)
        * [DefaultRootObject](#defaultrootobject)
        * [Enabled](#enabled-4)
        * [HttpVersion](#httpversion)
        * [Logging](#logging)
        * [Origins](#origins)
        * [PriceClass](#priceclass)
        * [Restrictions](#restrictions)
        * [ViewerCertificate](#viewercertificate)
        * [WebACLId](#webaclid)
    + [CloudFrontDistributionConfigurationViewerCertificate](#cloudfrontdistributionconfigurationviewercertificate)
      - [Properties](#properties-217)
        * [AcmCertificateArn](#acmcertificatearn)
        * [CloudFrontDefaultCertificate](#cloudfrontdefaultcertificate)
        * [IamCertificateId](#iamcertificateid)
        * [MinimumProtocolVersion](#minimumprotocolversion)
        * [SslSupportMethod](#sslsupportmethod)
    + [CloudFrontLogging](#cloudfrontlogging)
      - [Properties](#properties-218)
        * [Bucket](#bucket-2)
        * [IncludeCookies](#includecookies)
        * [Prefix](#prefix)
    + [CloudFrontForwardedValuesCookies](#cloudfrontforwardedvaluescookies)
      - [Properties](#properties-219)
        * [Forward](#forward)
        * [WhitelistedNames](#whitelistednames)
    + [CloudFrontForwardedValues](#cloudfrontforwardedvalues)
      - [Properties](#properties-220)
        * [Cookies](#cookies)
        * [Headers](#headers)
        * [QueryString](#querystring)
        * [QueryStringCacheKeys](#querystringcachekeys)
    + [CloudFrontDistributionConfigOriginOriginCustomHeader](#cloudfrontdistributionconfigoriginorigincustomheader)
      - [Properties](#properties-221)
        * [HeaderName](#headername)
        * [HeaderValue](#headervalue)
    + [CloudFrontDistributionConfigOrigin](#cloudfrontdistributionconfigorigin)
      - [Properties](#properties-222)
        * [CustomOriginConfig](#customoriginconfig)
        * [DomainName](#domainname-5)
        * [Id](#id)
        * [OriginCustomHeaders](#origincustomheaders)
        * [OriginPath](#originpath)
        * [S3OriginConfig](#s3originconfig)
    + [CloudFrontDistributionConfigOriginS3Origin](#cloudfrontdistributionconfigorigins3origin)
      - [Properties](#properties-223)
        * [OriginAccessIdentity](#originaccessidentity)
    + [AWSCodeBuildProjectArtifacts](#awscodebuildprojectartifacts)
      - [Properties](#properties-224)
        * [Location](#location)
        * [Name](#name-38)
        * [NamespaceType](#namespacetype)
        * [Packaging](#packaging)
        * [Path](#path-5)
        * [Type](#type-9)
    + [AWSCodeBuildProjectEnvironmentEnvironmentVariables](#awscodebuildprojectenvironmentenvironmentvariables)
      - [Properties](#properties-225)
        * [Name](#name-39)
        * [Value](#value-2)
    + [AWSCodeCommitRepositoryTrigger](#awscodecommitrepositorytrigger)
      - [Properties](#properties-226)
        * [Branches](#branches)
        * [CustomData](#customdata)
        * [DestinationArn](#destinationarn-1)
        * [Events](#events-1)
        * [Name](#name-40)
    + [AWSCodeBuildProjectEnvironment](#awscodebuildprojectenvironment)
      - [Properties](#properties-227)
        * [ComputeType](#computetype)
        * [EnvironmentVariables](#environmentvariables)
        * [Image](#image)
        * [Type](#type-10)
    + [AWSCodeDeployDeploymentConfigMinimumHealthyHosts](#awscodedeploydeploymentconfigminimumhealthyhosts)
      - [Properties](#properties-228)
        * [Type](#type-11)
        * [Value](#value-3)
    + [AWSCodeBuildProjectSource](#awscodebuildprojectsource)
      - [Properties](#properties-229)
        * [BuildSpec](#buildspec)
        * [Location](#location-1)
        * [Type](#type-12)
    + [AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location](#awscodedeploydeploymentgroupdeploymentrevisions3location)
      - [Properties](#properties-230)
        * [Bucket](#bucket-3)
        * [BundleType](#bundletype)
        * [ETag](#etag-1)
        * [Key](#key-2)
        * [Version](#version-4)
    + [AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation](#awscodedeploydeploymentgroupdeploymentrevisiongithublocation)
      - [Properties](#properties-231)
        * [CommitId](#commitid)
        * [Repository](#repository)
    + [AWSCodeDeployDeploymentGroupDeploymentRevision](#awscodedeploydeploymentgroupdeploymentrevision)
      - [Properties](#properties-232)
        * [GitHubLocation](#githublocation)
        * [RevisionType](#revisiontype)
        * [S3Location](#s3location)
    + [AWSCodeDeployDeploymentGroupDeployment](#awscodedeploydeploymentgroupdeployment)
      - [Properties](#properties-233)
        * [Description](#description-35)
        * [IgnoreApplicationStopFailures](#ignoreapplicationstopfailures)
        * [Revision](#revision)
    + [AWSCodeDeployDeploymentGroupEc2TagFilters](#awscodedeploydeploymentgroupec2tagfilters)
      - [Properties](#properties-234)
        * [Key](#key-3)
        * [Type](#type-13)
        * [Value](#value-4)
    + [AWSCodePipelinePipelineArtifactStore](#awscodepipelinepipelineartifactstore)
      - [Properties](#properties-235)
        * [EncryptionKey](#encryptionkey-1)
        * [Location](#location-2)
        * [Type](#type-14)
    + [AWSCodePipelinePipelineDisableInboundStageTransitions](#awscodepipelinepipelinedisableinboundstagetransitions)
      - [Properties](#properties-236)
        * [Reason](#reason)
        * [StageName](#stagename-4)
    + [AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters](#awscodedeploydeploymentgrouponpremisesinstancetagfilters)
      - [Properties](#properties-237)
        * [Key](#key-4)
        * [Type](#type-15)
        * [Value](#value-5)
    + [AWSCodePipelinePipelineArtifactStoreEncryptionKey](#awscodepipelinepipelineartifactstoreencryptionkey)
      - [Properties](#properties-238)
        * [Id](#id-1)
        * [Type](#type-16)
    + [AWSCodePipelinePipelineStagesActionsActionTypeId](#awscodepipelinepipelinestagesactionsactiontypeid)
      - [Properties](#properties-239)
        * [Category](#category-1)
        * [Owner](#owner)
        * [Provider](#provider-1)
        * [Version](#version-5)
    + [AWSCodePipelinePipelineStagesActionsInputArtifacts](#awscodepipelinepipelinestagesactionsinputartifacts)
      - [Properties](#properties-240)
        * [Name](#name-41)
    + [AWSCodePipelinePipelineStagesActionsOutputArtifacts](#awscodepipelinepipelinestagesactionsoutputartifacts)
      - [Properties](#properties-241)
        * [Name](#name-42)
    + [AWSCodePipelinePipelineStagesActions](#awscodepipelinepipelinestagesactions)
      - [Properties](#properties-242)
        * [ActionTypeId](#actiontypeid)
        * [Configuration](#configuration)
        * [InputArtifacts](#inputartifacts)
        * [Name](#name-43)
        * [OutputArtifacts](#outputartifacts)
        * [RoleArn](#rolearn-5)
        * [RunOrder](#runorder)
    + [AWSCodePipelinePipelineStages](#awscodepipelinepipelinestages)
      - [Properties](#properties-243)
        * [Actions](#actions-1)
        * [Blockers](#blockers)
        * [Name](#name-44)
    + [AWSCodePipelinePipelineStagesBlockers](#awscodepipelinepipelinestagesblockers)
      - [Properties](#properties-244)
        * [Name](#name-45)
        * [Type](#type-17)
    + [AWSConfigConfigRuleScope](#awsconfigconfigrulescope)
      - [Properties](#properties-245)
        * [ComplianceResourceId](#complianceresourceid)
        * [ComplianceResourceTypes](#complianceresourcetypes)
        * [TagKey](#tagkey)
        * [TagValue](#tagvalue)
    + [AWSConfigConfigRuleSourceSourceDetails](#awsconfigconfigrulesourcesourcedetails)
      - [Properties](#properties-246)
        * [EventSource](#eventsource)
        * [MessageType](#messagetype)
    + [AWSConfigConfigRuleSource](#awsconfigconfigrulesource)
      - [Properties](#properties-247)
        * [Owner](#owner-1)
        * [SourceDetails](#sourcedetails)
        * [SourceIdentifier](#sourceidentifier)
    + [AWSConfigConfigurationRecorderRecordingGroup](#awsconfigconfigurationrecorderrecordinggroup)
      - [Properties](#properties-248)
        * [AllSupported](#allsupported)
        * [IncludeGlobalResourceTypes](#includeglobalresourcetypes)
        * [ResourceTypes](#resourcetypes)
    + [AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties](#awsconfigdeliverychannelconfigsnapshotdeliveryproperties)
      - [Properties](#properties-249)
        * [DeliveryFrequency](#deliveryfrequency)
    + [CloudWatchMetricDimensionPropertyType](#cloudwatchmetricdimensionpropertytype)
      - [Properties](#properties-250)
        * [Name](#name-46)
        * [Value](#value-6)
    + [AWSDataPipelineParameterObjectsAttributes](#awsdatapipelineparameterobjectsattributes)
      - [Properties](#properties-251)
        * [Key](#key-5)
        * [StringValue](#stringvalue)
    + [AWSDataPipelinePipelineParameterObjects](#awsdatapipelinepipelineparameterobjects)
      - [Properties](#properties-252)
        * [Attributes](#attributes-3)
        * [Id](#id-2)
    + [AWSDataPipelinePipelineParameterValues](#awsdatapipelinepipelineparametervalues)
      - [Properties](#properties-253)
        * [Id](#id-3)
        * [StringValue](#stringvalue-1)
    + [AWSDataPipelineDataPipelineObjectFields](#awsdatapipelinedatapipelineobjectfields)
      - [Properties](#properties-254)
        * [Key](#key-6)
        * [RefValue](#refvalue)
        * [StringValue](#stringvalue-2)
    + [AWSDataPipelinePipelineObjects](#awsdatapipelinepipelineobjects)
      - [Properties](#properties-255)
        * [Fields](#fields)
        * [Id](#id-4)
        * [Name](#name-47)
    + [AWSDataPipelinePipelinePipelineTags](#awsdatapipelinepipelinepipelinetags)
      - [Properties](#properties-256)
        * [Key](#key-7)
        * [Value](#value-7)
    + [AWSDirectoryServiceMicrosoftADVpcSettings](#awsdirectoryservicemicrosoftadvpcsettings)
      - [Properties](#properties-257)
        * [SubnetIds](#subnetids-3)
        * [VpcId](#vpcid-11)
    + [DynamoDBAttributeDefinitions](#dynamodbattributedefinitions)
      - [Properties](#properties-258)
        * [AttributeName](#attributename)
        * [AttributeType](#attributetype)
    + [AWSDirectoryServiceSimpleADVpcSettings](#awsdirectoryservicesimpleadvpcsettings)
      - [Properties](#properties-259)
        * [SubnetIds](#subnetids-4)
        * [VpcId](#vpcid-12)
    + [DynamoDBGlobalSecondaryIndexes](#dynamodbglobalsecondaryindexes)
      - [Properties](#properties-260)
        * [IndexName](#indexname)
        * [KeySchema](#keyschema-1)
        * [Projection](#projection)
        * [ProvisionedThroughput](#provisionedthroughput-1)
    + [DynamoDBProvisionedThroughput](#dynamodbprovisionedthroughput)
      - [Properties](#properties-261)
        * [ReadCapacityUnits](#readcapacityunits)
        * [WriteCapacityUnits](#writecapacityunits)
    + [DynamoDBLocalSecondaryIndexes](#dynamodblocalsecondaryindexes)
      - [Properties](#properties-262)
        * [IndexName](#indexname-1)
        * [KeySchema](#keyschema-2)
        * [Projection](#projection-1)
    + [DynamoDBKeySchema](#dynamodbkeyschema)
      - [Properties](#properties-263)
        * [AttributeName](#attributename-1)
        * [KeyType](#keytype)
    + [DynamoDBProjectionObject](#dynamodbprojectionobject)
      - [Properties](#properties-264)
        * [NonKeyAttributes](#nonkeyattributes)
        * [ProjectionType](#projectiontype)
    + [DynamoDBTableStreamSpecification](#dynamodbtablestreamspecification)
      - [Properties](#properties-265)
        * [StreamViewType](#streamviewtype)
    + [AmazonEC2BlockDeviceMappingProperty](#amazonec2blockdevicemappingproperty)
      - [Properties](#properties-266)
        * [DeviceName](#devicename-1)
        * [Ebs](#ebs-1)
        * [NoDevice](#nodevice-1)
        * [VirtualName](#virtualname-1)
    + [AmazonElasticBlockStoreBlockDeviceProperty](#amazonelasticblockstoreblockdeviceproperty)
      - [Properties](#properties-267)
        * [DeleteOnTermination](#deleteontermination-2)
        * [Encrypted](#encrypted-3)
        * [Iops](#iops-3)
        * [SnapshotId](#snapshotid-2)
        * [VolumeSize](#volumesize-1)
        * [VolumeType](#volumetype-2)
    + [ElasticLoadBalancingAppCookieStickinessPolicyType](#elasticloadbalancingappcookiestickinesspolicytype)
      - [Properties](#properties-268)
        * [CookieName](#cookiename)
        * [PolicyName](#policyname-4)
    + [ElasticLoadBalancingAccessLoggingPolicy](#elasticloadbalancingaccessloggingpolicy)
      - [Properties](#properties-269)
        * [EmitInterval](#emitinterval)
        * [Enabled](#enabled-5)
        * [S3BucketName](#s3bucketname-2)
        * [S3BucketPrefix](#s3bucketprefix)
    + [ElasticLoadBalancingLBCookieStickinessPolicyType](#elasticloadbalancinglbcookiestickinesspolicytype)
      - [Properties](#properties-270)
        * [CookieExpirationPeriod](#cookieexpirationperiod)
        * [PolicyName](#policyname-5)
    + [ElasticLoadBalancingConnectionDrainingPolicy](#elasticloadbalancingconnectiondrainingpolicy)
      - [Properties](#properties-271)
        * [Enabled](#enabled-6)
        * [Timeout](#timeout-2)
    + [ElasticLoadBalancingHealthCheckType](#elasticloadbalancinghealthchecktype)
      - [Properties](#properties-272)
        * [HealthyThreshold](#healthythreshold)
        * [Interval](#interval)
        * [Target](#target)
        * [Timeout](#timeout-3)
        * [UnhealthyThreshold](#unhealthythreshold)
    + [ElasticLoadBalancingConnectionSettings](#elasticloadbalancingconnectionsettings)
      - [Properties](#properties-273)
        * [IdleTimeout](#idletimeout)
    + [ElasticLoadBalancingListenerPropertyType](#elasticloadbalancinglistenerpropertytype)
      - [Properties](#properties-274)
        * [InstancePort](#instanceport)
        * [InstanceProtocol](#instanceprotocol)
        * [LoadBalancerPort](#loadbalancerport)
        * [PolicyNames](#policynames)
        * [Protocol](#protocol-4)
        * [SSLCertificateId](#sslcertificateid)
    + [ElasticLoadBalancingPolicyType](#elasticloadbalancingpolicytype)
      - [Properties](#properties-275)
        * [Attributes](#attributes-4)
        * [InstancePorts](#instanceports)
        * [LoadBalancerPorts](#loadbalancerports)
        * [PolicyName](#policyname-6)
        * [PolicyType](#policytype-2)
    + [AmazonEC2InstanceSsmAssociationsAssociationParameters](#amazonec2instancessmassociationsassociationparameters)
      - [Properties](#properties-276)
        * [Key](#key-8)
        * [Value](#value-8)
    + [EC2MountPointPropertyType](#ec2mountpointpropertytype)
      - [Properties](#properties-277)
        * [Device](#device-1)
        * [VolumeId](#volumeid-1)
    + [EC2NetworkAclEntryIcmp](#ec2networkaclentryicmp)
      - [Properties](#properties-278)
        * [Code](#code-1)
        * [Type](#type-18)
    + [EC2NetworkInterfaceEmbeddedPropertyType](#ec2networkinterfaceembeddedpropertytype)
      - [Properties](#properties-279)
        * [AssociatePublicIpAddress](#associatepublicipaddress-1)
        * [DeleteOnTermination](#deleteontermination-3)
        * [Description](#description-36)
        * [DeviceIndex](#deviceindex-1)
        * [GroupSet](#groupset-1)
        * [NetworkInterfaceId](#networkinterfaceid-3)
        * [Ipv6AddressCount](#ipv6addresscount-2)
        * [Ipv6Addresses](#ipv6addresses-2)
        * [PrivateIpAddress](#privateipaddress-3)
        * [PrivateIpAddresses](#privateipaddresses-1)
        * [SecondaryPrivateIpAddressCount](#secondaryprivateipaddresscount-1)
        * [SubnetId](#subnetid-8)
    + [AmazonEC2InstanceSsmAssociations](#amazonec2instancessmassociations)
      - [Properties](#properties-280)
        * [AssociationParameters](#associationparameters)
        * [DocumentName](#documentname)
    + [EC2SecurityGroupRulePropertyType](#ec2securitygrouprulepropertytype)
      - [Properties](#properties-281)
        * [CidrIp](#cidrip-2)
        * [DestinationPrefixListId](#destinationprefixlistid-1)
        * [DestinationSecurityGroupId](#destinationsecuritygroupid-1)
        * [FromPort](#fromport-2)
        * [IpProtocol](#ipprotocol-2)
        * [SourceSecurityGroupId](#sourcesecuritygroupid-1)
        * [SourceSecurityGroupName](#sourcesecuritygroupname-1)
        * [SourceSecurityGroupOwnerId](#sourcesecuritygroupownerid-1)
        * [ToPort](#toport-2)
    + [EC2NetworkInterfacePrivateIPSpecification](#ec2networkinterfaceprivateipspecification)
      - [Properties](#properties-282)
        * [PrivateIpAddress](#privateipaddress-4)
        * [Primary](#primary)
    + [EC2NetworkInterfaceIpv6Addresses](#ec2networkinterfaceipv6addresses)
      - [Properties](#properties-283)
        * [Ipv6Address](#ipv6address)
    + [EC2NetworkAclEntryPortRange](#ec2networkaclentryportrange)
      - [Properties](#properties-284)
        * [From](#from)
        * [To](#to)
    + [AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsiaminstanceprofile)
      - [Properties](#properties-285)
        * [Arn](#arn)
    + [AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsblockdevicemappingsebs)
      - [Properties](#properties-286)
        * [DeleteOnTermination](#deleteontermination-4)
        * [Encrypted](#encrypted-4)
        * [Iops](#iops-4)
        * [SnapshotId](#snapshotid-3)
        * [VolumeSize](#volumesize-2)
        * [VolumeType](#volumetype-3)
    + [AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsblockdevicemappings)
      - [Properties](#properties-287)
        * [DeviceName](#devicename-2)
        * [Ebs](#ebs-2)
        * [NoDevice](#nodevice-2)
        * [VirtualName](#virtualname-2)
    + [AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring](#amazonec2spotfleetspotfleetrequestconfigdatalaunchspecificationsmonitoring)
      - [Properties](#properties-288)
        * [Enabled](#enabled-7)
    + [AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsnetworkinterfaces)
      - [Properties](#properties-289)
        * [AssociatePublicIpAddress](#associatepublicipaddress-2)
        * [DeleteOnTermination](#deleteontermination-5)
        * [Description](#description-37)
        * [DeviceIndex](#deviceindex-2)
        * [Groups](#groups-3)
        * [Ipv6AddressCount](#ipv6addresscount-3)
        * [Ipv6Addresses](#ipv6addresses-3)
        * [NetworkInterfaceId](#networkinterfaceid-4)
        * [PrivateIpAddresses](#privateipaddresses-2)
        * [SecondaryPrivateIpAddressCount](#secondaryprivateipaddresscount-2)
        * [SubnetId](#subnetid-9)
    + [AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsnetworkinterfacesprivateipaddresses)
      - [Properties](#properties-290)
        * [Primary](#primary-1)
        * [PrivateIpAddress](#privateipaddress-5)
    + [AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsplacement)
      - [Properties](#properties-291)
        * [AvailabilityZone](#availabilityzone-7)
        * [GroupName](#groupname-3)
    + [AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationssecuritygroups)
      - [Properties](#properties-292)
        * [GroupId](#groupid-2)
    + [AmazonEC2ContainerServiceServiceDeploymentConfiguration](#amazonec2containerserviceservicedeploymentconfiguration)
      - [Properties](#properties-293)
        * [MaximumPercent](#maximumpercent)
        * [MinimumHealthyPercent](#minimumhealthypercent)
    + [AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecifications)
      - [Properties](#properties-294)
        * [BlockDeviceMappings](#blockdevicemappings-3)
        * [EbsOptimized](#ebsoptimized-3)
        * [IamInstanceProfile](#iaminstanceprofile-2)
        * [ImageId](#imageid-2)
        * [InstanceType](#instancetype-5)
        * [KernelId](#kernelid-2)
        * [KeyName](#keyname-2)
        * [Monitoring](#monitoring-1)
        * [NetworkInterfaces](#networkinterfaces-1)
        * [Placement](#placement)
        * [RamdiskId](#ramdiskid-1)
        * [SecurityGroups](#securitygroups-5)
        * [SpotPrice](#spotprice-1)
        * [SubnetId](#subnetid-10)
        * [UserData](#userdata-2)
        * [WeightedCapacity](#weightedcapacity)
    + [AmazonEC2SpotFleetSpotFleetRequestConfigData](#amazonec2spotfleetspotfleetrequestconfigdata)
      - [Properties](#properties-295)
        * [AllocationStrategy](#allocationstrategy)
        * [ExcessCapacityTerminationPolicy](#excesscapacityterminationpolicy)
        * [IamFleetRole](#iamfleetrole)
        * [LaunchSpecifications](#launchspecifications)
        * [SpotPrice](#spotprice-2)
        * [TargetCapacity](#targetcapacity)
        * [TerminateInstancesWithExpiration](#terminateinstanceswithexpiration)
        * [ValidFrom](#validfrom)
        * [ValidUntil](#validuntil)
    + [AmazonEC2ContainerServiceServiceLoadBalancers](#amazonec2containerserviceserviceloadbalancers)
      - [Properties](#properties-296)
        * [ContainerName](#containername)
        * [ContainerPort](#containerport)
        * [LoadBalancerName](#loadbalancername-1)
        * [TargetGroupArn](#targetgrouparn)
    + [AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment](#amazonec2containerservicetaskdefinitioncontainerdefinitionsenvironment)
      - [Properties](#properties-297)
        * [Name](#name-48)
        * [Value](#value-9)
    + [AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration](#amazonec2containerservicetaskdefinitioncontainerdefinitionslogconfiguration)
      - [Properties](#properties-298)
        * [LogDriver](#logdriver)
        * [Options](#options)
    + [AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints](#amazonec2containerservicetaskdefinitioncontainerdefinitionsmountpoints)
      - [Properties](#properties-299)
        * [ContainerPath](#containerpath)
        * [SourceVolume](#sourcevolume)
        * [ReadOnly](#readonly)
    + [AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry](#amazonec2containerservicetaskdefinitioncontainerdefinitionshostentry)
      - [Properties](#properties-300)
        * [Hostname](#hostname-1)
        * [IpAddress](#ipaddress-2)
    + [AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom](#amazonec2containerservicetaskdefinitioncontainerdefinitionsvolumesfrom)
      - [Properties](#properties-301)
        * [SourceContainer](#sourcecontainer)
        * [ReadOnly](#readonly-1)
    + [AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit](#amazonec2containerservicetaskdefinitioncontainerdefinitionsulimit)
      - [Properties](#properties-302)
        * [HardLimit](#hardlimit)
        * [Name](#name-49)
        * [SoftLimit](#softlimit)
    + [AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings](#amazonec2containerservicetaskdefinitioncontainerdefinitionsportmappings)
      - [Properties](#properties-303)
        * [ContainerPort](#containerport-1)
        * [HostPort](#hostport)
        * [Protocol](#protocol-5)
    + [AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions](#amazonec2containerservicetaskdefinitioncontainerdefinitions)
      - [Properties](#properties-304)
        * [Command](#command)
        * [Cpu](#cpu)
        * [DisableNetworking](#disablenetworking)
        * [DnsSearchDomains](#dnssearchdomains)
        * [DnsServers](#dnsservers)
        * [DockerLabels](#dockerlabels)
        * [DockerSecurityOptions](#dockersecurityoptions)
        * [EntryPoint](#entrypoint)
        * [Environment](#environment-3)
        * [Essential](#essential)
        * [ExtraHosts](#extrahosts)
        * [Hostname](#hostname-2)
        * [Image](#image-1)
        * [Links](#links)
        * [LogConfiguration](#logconfiguration)
        * [Memory](#memory)
        * [MemoryReservation](#memoryreservation)
        * [MountPoints](#mountpoints)
        * [Name](#name-50)
        * [PortMappings](#portmappings)
        * [Privileged](#privileged)
        * [ReadonlyRootFilesystem](#readonlyrootfilesystem)
        * [Ulimits](#ulimits)
        * [User](#user)
        * [VolumesFrom](#volumesfrom)
        * [WorkingDirectory](#workingdirectory)
    + [AmazonEC2ContainerServiceTaskDefinitionVolumesHost](#amazonec2containerservicetaskdefinitionvolumeshost)
      - [Properties](#properties-305)
        * [SourcePath](#sourcepath)
    + [AmazonEC2ContainerServiceTaskDefinitionVolumes](#amazonec2containerservicetaskdefinitionvolumes)
      - [Properties](#properties-306)
        * [Name](#name-51)
        * [Host](#host)
    + [AmazonElasticFileSystemFileSystemFileSystemTags](#amazonelasticfilesystemfilesystemfilesystemtags)
      - [Properties](#properties-307)
        * [Key](#key-9)
        * [Value](#value-10)
    + [AmazonElastiCacheReplicationGroupNodeGroupConfiguration](#amazonelasticachereplicationgroupnodegroupconfiguration)
      - [Properties](#properties-308)
        * [PrimaryAvailabilityZone](#primaryavailabilityzone)
        * [ReplicaAvailabilityZones](#replicaavailabilityzones)
        * [ReplicaCount](#replicacount)
        * [Slots](#slots)
    + [ElasticLoadBalancingListenerRuleConditions](#elasticloadbalancinglistenerruleconditions)
      - [Properties](#properties-309)
        * [Field](#field)
        * [Values](#values)
    + [ElasticLoadBalancingListenerCertificates](#elasticloadbalancinglistenercertificates)
      - [Properties](#properties-310)
        * [CertificateArn](#certificatearn)
    + [ElasticLoadBalancingListenerDefaultActions](#elasticloadbalancinglistenerdefaultactions)
      - [Properties](#properties-311)
        * [TargetGroupArn](#targetgrouparn-1)
        * [Type](#type-19)
    + [ElasticLoadBalancingListenerRuleActions](#elasticloadbalancinglistenerruleactions)
      - [Properties](#properties-312)
        * [TargetGroupArn](#targetgrouparn-2)
        * [Type](#type-20)
    + [ElasticLoadBalancingLoadBalancerLoadBalancerAttributes](#elasticloadbalancingloadbalancerloadbalancerattributes)
      - [Properties](#properties-313)
        * [Key](#key-10)
        * [Value](#value-11)
    + [ElasticLoadBalancingTargetGroupTargetGroupAttributes](#elasticloadbalancingtargetgrouptargetgroupattributes)
      - [Properties](#properties-314)
        * [Key](#key-11)
        * [Value](#value-12)
    + [ElasticLoadBalancingTargetGroupTargetDescription](#elasticloadbalancingtargetgrouptargetdescription)
      - [Properties](#properties-315)
        * [Id](#id-5)
        * [Port](#port-7)
    + [ElasticLoadBalancingTargetGroupMatcher](#elasticloadbalancingtargetgroupmatcher)
      - [Properties](#properties-316)
        * [HttpCode](#httpcode)
    + [AmazonElasticsearchServiceDomainEBSOptions](#amazonelasticsearchservicedomainebsoptions)
      - [Properties](#properties-317)
        * [EBSEnabled](#ebsenabled)
        * [Iops](#iops-5)
        * [VolumeSize](#volumesize-3)
        * [VolumeType](#volumetype-4)
    + [AmazonElasticsearchServiceDomainElasticsearchClusterConfig](#amazonelasticsearchservicedomainelasticsearchclusterconfig)
      - [Properties](#properties-318)
        * [DedicatedMasterCount](#dedicatedmastercount)
        * [DedicatedMasterEnabled](#dedicatedmasterenabled)
        * [DedicatedMasterType](#dedicatedmastertype)
        * [InstanceCount](#instancecount-1)
        * [InstanceType](#instancetype-6)
        * [ZoneAwarenessEnabled](#zoneawarenessenabled)
    + [AmazonElasticsearchServiceDomainSnapshotOptions](#amazonelasticsearchservicedomainsnapshotoptions)
      - [Properties](#properties-319)
        * [AutomatedSnapshotStartHour](#automatedsnapshotstarthour)
    + [AmazonEMRClusterApplication](#amazonemrclusterapplication)
      - [Properties](#properties-320)
        * [AdditionalInfo](#additionalinfo-2)
        * [Args](#args)
        * [Name](#name-52)
        * [Version](#version-6)
    + [AmazonEMRClusterBootstrapActionConfigScriptBootstrapActionConfig](#amazonemrclusterbootstrapactionconfigscriptbootstrapactionconfig)
      - [Properties](#properties-321)
        * [Args](#args-1)
        * [Path](#path-6)
    + [AmazonEMRClusterJobFlowInstancesConfigInstanceGroupConfig](#amazonemrclusterjobflowinstancesconfiginstancegroupconfig)
      - [Properties](#properties-322)
        * [BidPrice](#bidprice-1)
        * [Configurations](#configurations-2)
        * [EbsConfiguration](#ebsconfiguration-1)
        * [InstanceCount](#instancecount-2)
        * [InstanceType](#instancetype-7)
        * [Market](#market-1)
        * [Name](#name-53)
    + [AmazonEMRClusterConfiguration](#amazonemrclusterconfiguration)
      - [Properties](#properties-323)
        * [Classification](#classification)
        * [ConfigurationProperties](#configurationproperties-1)
        * [Configurations](#configurations-3)
    + [AmazonEMRClusterBootstrapActionConfig](#amazonemrclusterbootstrapactionconfig)
      - [Properties](#properties-324)
        * [Name](#name-54)
        * [ScriptBootstrapAction](#scriptbootstrapaction)
    + [AmazonEMRClusterJobFlowInstancesConfigPlacementType](#amazonemrclusterjobflowinstancesconfigplacementtype)
      - [Properties](#properties-325)
        * [AvailabilityZone](#availabilityzone-8)
    + [AmazonEMREbsConfigurationEbsBlockDeviceConfigVolumeSpecification](#amazonemrebsconfigurationebsblockdeviceconfigvolumespecification)
      - [Properties](#properties-326)
        * [Iops](#iops-6)
        * [SizeInGB](#sizeingb)
        * [VolumeType](#volumetype-5)
    + [AmazonEMRClusterJobFlowInstancesConfig](#amazonemrclusterjobflowinstancesconfig)
      - [Properties](#properties-327)
        * [AdditionalMasterSecurityGroups](#additionalmastersecuritygroups)
        * [AdditionalSlaveSecurityGroups](#additionalslavesecuritygroups)
        * [CoreInstanceGroup](#coreinstancegroup)
        * [Ec2KeyName](#ec2keyname)
        * [Ec2SubnetId](#ec2subnetid)
        * [EmrManagedMasterSecurityGroup](#emrmanagedmastersecuritygroup)
        * [EmrManagedSlaveSecurityGroup](#emrmanagedslavesecuritygroup)
        * [HadoopVersion](#hadoopversion)
        * [MasterInstanceGroup](#masterinstancegroup)
        * [Placement](#placement-1)
        * [ServiceAccessSecurityGroup](#serviceaccesssecuritygroup)
        * [TerminationProtected](#terminationprotected)
    + [AmazonEMREbsConfigurationEbsBlockDeviceConfigs](#amazonemrebsconfigurationebsblockdeviceconfigs)
      - [Properties](#properties-328)
        * [VolumeSpecification](#volumespecification)
        * [VolumesPerInstance](#volumesperinstance)
    + [AmazonEMREbsConfiguration](#amazonemrebsconfiguration)
      - [Properties](#properties-329)
        * [EbsBlockDeviceConfigs](#ebsblockdeviceconfigs)
        * [EbsOptimized](#ebsoptimized-4)
    + [AmazonEMRStepHadoopJarStepConfig](#amazonemrstephadoopjarstepconfig)
      - [Properties](#properties-330)
        * [Args](#args-2)
        * [Jar](#jar)
        * [MainClass](#mainclass)
        * [StepProperties](#stepproperties)
    + [AmazonEMRStepHadoopJarStepConfigKeyValue](#amazonemrstephadoopjarstepconfigkeyvalue)
      - [Properties](#properties-331)
        * [Key](#key-12)
        * [Value](#value-13)
    + [AmazonCloudWatchEventsRuleTarget](#amazoncloudwatcheventsruletarget)
      - [Properties](#properties-332)
        * [Arn](#arn-1)
        * [Id](#id-6)
        * [Input](#input)
        * [InputPath](#inputpath)
    + [AmazonGameLiftAliasRoutingStrategy](#amazongameliftaliasroutingstrategy)
      - [Properties](#properties-333)
        * [FleetId](#fleetid)
        * [Message](#message)
        * [Type](#type-21)
    + [AmazonGameLiftBuildStorageLocation](#amazongameliftbuildstoragelocation)
      - [Properties](#properties-334)
        * [Bucket](#bucket-4)
        * [Key](#key-13)
        * [RoleArn](#rolearn-6)
    + [IAMPolicies](#iampolicies)
      - [Properties](#properties-335)
        * [PolicyDocument](#policydocument-7)
        * [PolicyName](#policyname-7)
    + [IAMUserLoginProfile](#iamuserloginprofile)
      - [Properties](#properties-336)
        * [Password](#password-2)
        * [PasswordResetRequired](#passwordresetrequired)
    + [AmazonGameLiftFleetEC2InboundPermission](#amazongameliftfleetec2inboundpermission)
      - [Properties](#properties-337)
        * [FromPort](#fromport-3)
        * [IpRange](#iprange)
        * [Protocol](#protocol-6)
        * [ToPort](#toport-3)
    + [AWSIoTActions](#awsiotactions)
      - [Properties](#properties-338)
        * [CloudwatchAlarm](#cloudwatchalarm)
        * [CloudwatchMetric](#cloudwatchmetric)
        * [DynamoDB](#dynamodb-1)
        * [Elasticsearch](#elasticsearch-1)
        * [Firehose](#firehose)
        * [Kinesis](#kinesis-1)
        * [Lambda](#lambda-1)
        * [Republish](#republish)
        * [S3](#s3-1)
        * [Sns](#sns)
        * [Sqs](#sqs)
    + [AWSIoTCloudwatchAlarmAction](#awsiotcloudwatchalarmaction)
      - [Properties](#properties-339)
        * [AlarmName](#alarmname-1)
        * [RoleArn](#rolearn-7)
        * [StateReason](#statereason)
        * [StateValue](#statevalue)
    + [AWSIoTDynamoDBAction](#awsiotdynamodbaction)
      - [Properties](#properties-340)
        * [HashKeyField](#hashkeyfield)
        * [HashKeyValue](#hashkeyvalue)
        * [PayloadField](#payloadfield)
        * [RangeKeyField](#rangekeyfield)
        * [RangeKeyValue](#rangekeyvalue)
        * [RoleArn](#rolearn-8)
        * [TableName](#tablename-1)
    + [AWSIoTCloudwatchMetricAction](#awsiotcloudwatchmetricaction)
      - [Properties](#properties-341)
        * [MetricName](#metricname-3)
        * [MetricNamespace](#metricnamespace)
        * [MetricTimestamp](#metrictimestamp)
        * [MetricUnit](#metricunit)
        * [MetricValue](#metricvalue)
        * [RoleArn](#rolearn-9)
    + [AWSIoTElasticsearchAction](#awsiotelasticsearchaction)
      - [Properties](#properties-342)
        * [Endpoint](#endpoint-1)
        * [Id](#id-7)
        * [Index](#index)
        * [RoleArn](#rolearn-10)
        * [Type](#type-22)
    + [AWSIoTLambdaAction](#awsiotlambdaaction)
      - [Properties](#properties-343)
        * [FunctionArn](#functionarn)
    + [AWSIoTFirehoseAction](#awsiotfirehoseaction)
      - [Properties](#properties-344)
        * [DeliveryStreamName](#deliverystreamname-1)
        * [RoleArn](#rolearn-11)
        * [Separator](#separator)
    + [AWSIoTRepublishAction](#awsiotrepublishaction)
      - [Properties](#properties-345)
        * [RoleArn](#rolearn-12)
        * [Topic](#topic)
    + [AWSIoTKinesisAction](#awsiotkinesisaction)
      - [Properties](#properties-346)
        * [PartitionKey](#partitionkey)
        * [RoleArn](#rolearn-13)
        * [StreamName](#streamname)
    + [AWSIoTS3Action](#awsiots3action)
      - [Properties](#properties-347)
        * [BucketName](#bucketname-1)
        * [Key](#key-14)
        * [RoleArn](#rolearn-14)
    + [AWSIoTSnsAction](#awsiotsnsaction)
      - [Properties](#properties-348)
        * [MessageFormat](#messageformat)
        * [RoleArn](#rolearn-15)
        * [TargetArn](#targetarn-1)
    + [AWSIoTTopicRulePayload](#awsiottopicrulepayload)
      - [Properties](#properties-349)
        * [Actions](#actions-2)
        * [AwsIotSqlVersion](#awsiotsqlversion)
        * [Description](#description-38)
        * [RuleDisabled](#ruledisabled)
        * [Sql](#sql)
    + [AWSIoTSqsAction](#awsiotsqsaction)
      - [Properties](#properties-350)
        * [QueueUrl](#queueurl)
        * [RoleArn](#rolearn-16)
        * [UseBase64](#usebase64)
    + [AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints](#amazonkinesisfirehosedeliverystreamelasticsearchdestinationconfigurationbufferinghints)
      - [Properties](#properties-351)
        * [IntervalInSeconds](#intervalinseconds)
        * [SizeInMBs](#sizeinmbs)
    + [AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions](#amazonkinesisfirehosedeliverystreamelasticsearchdestinationconfigurationretryoptions)
      - [Properties](#properties-352)
        * [DurationInSeconds](#durationinseconds)
    + [AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration](#amazonkinesisfirehosedeliverystreamelasticsearchdestinationconfiguration)
      - [Properties](#properties-353)
        * [BufferingHints](#bufferinghints)
        * [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
        * [DomainARN](#domainarn)
        * [IndexName](#indexname-2)
        * [IndexRotationPeriod](#indexrotationperiod)
        * [RoleARN](#rolearn-3)
        * [S3BackupMode](#s3backupmode)
        * [TypeName](#typename)
    + [AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions](#amazonkinesisfirehosedeliverystreamdestinationcloudwatchloggingoptions)
      - [Properties](#properties-354)
        * [Enabled](#enabled-8)
        * [LogGroupName](#loggroupname-5)
        * [LogStreamName](#logstreamname-1)
    + [AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand](#amazonkinesisfirehosedeliverystreamredshiftdestinationconfigurationcopycommand)
      - [Properties](#properties-355)
        * [CopyOptions](#copyoptions)
        * [DataTableColumns](#datatablecolumns)
        * [DataTableName](#datatablename)
    + [AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints](#amazonkinesisfirehosedeliverystreams3destinationconfigurationbufferinghints)
      - [Properties](#properties-356)
        * [IntervalInSeconds](#intervalinseconds-1)
        * [SizeInMBs](#sizeinmbs-1)
    + [AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig](#amazonkinesisfirehosedeliverystreams3destinationconfigurationencryptionconfigurationkmsencryptionconfig)
      - [Properties](#properties-357)
        * [AWSKMSKeyARN](#awskmskeyarn)
    + [AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration](#amazonkinesisfirehosedeliverystreams3destinationconfiguration)
      - [Properties](#properties-358)
        * [BucketARN](#bucketarn)
        * [BufferingHints](#bufferinghints-1)
        * [CloudWatchLoggingOptions](#cloudwatchloggingoptions-1)
        * [CompressionFormat](#compressionformat)
        * [EncryptionConfiguration](#encryptionconfiguration)
        * [Prefix](#prefix-1)
        * [RoleARN](#rolearn-4)
    + [AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration](#amazonkinesisfirehosedeliverystreamredshiftdestinationconfiguration)
      - [Properties](#properties-359)
        * [CloudWatchLoggingOptions](#cloudwatchloggingoptions-2)
        * [ClusterJDBCURL](#clusterjdbcurl)
        * [CopyCommand](#copycommand)
        * [Password](#password-3)
        * [RoleARN](#rolearn-5)
        * [S3Configuration](#s3configuration)
        * [Username](#username)
    + [AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration](#amazonkinesisfirehosedeliverystreams3destinationconfigurationencryptionconfiguration)
      - [Properties](#properties-360)
        * [KMSEncryptionConfig](#kmsencryptionconfig)
        * [NoEncryptionConfig](#noencryptionconfig)
    + [AWSLambdaFunctionCode](#awslambdafunctioncode)
      - [Properties](#properties-361)
        * [S3Bucket](#s3bucket-1)
        * [S3Key](#s3key-1)
        * [S3ObjectVersion](#s3objectversion)
        * [ZipFile](#zipfile)
    + [NameType](#nametype)
      - [Properties](#properties-362)
    + [AWSLambdaFunctionEnvironment](#awslambdafunctionenvironment)
      - [Properties](#properties-363)
        * [Variables](#variables-2)
    + [AWSLambdaFunctionVPCConfig](#awslambdafunctionvpcconfig)
      - [Properties](#properties-364)
        * [SecurityGroupIds](#securitygroupids-2)
        * [SubnetIds](#subnetids-5)
    + [CloudWatchLogsMetricFilterMetricTransformationProperty](#cloudwatchlogsmetricfiltermetrictransformationproperty)
      - [Properties](#properties-365)
        * [MetricName](#metricname-4)
        * [MetricNamespace](#metricnamespace-1)
        * [MetricValue](#metricvalue-1)
    + [AWSOpsWorksSslConfigurationType](#awsopsworkssslconfigurationtype)
      - [Properties](#properties-366)
        * [Certificate](#certificate)
        * [Chain](#chain)
        * [PrivateKey](#privatekey)
    + [DataSource](#datasource)
      - [Properties](#properties-367)
        * [Arn](#arn-2)
        * [DatabaseName](#databasename-1)
        * [Type](#type-23)
    + [AWSOpsWorksInstanceBlockDeviceMappingEbsBlockDevice](#awsopsworksinstanceblockdevicemappingebsblockdevice)
      - [Properties](#properties-368)
        * [DeleteOnTermination](#deleteontermination-6)
        * [Iops](#iops-7)
        * [SnapshotId](#snapshotid-4)
        * [VolumeSize](#volumesize-4)
        * [VolumeType](#volumetype-6)
    + [AWSOpsWorksAppEnvironment](#awsopsworksappenvironment)
      - [Properties](#properties-369)
        * [Key](#key-15)
        * [Secure](#secure)
        * [Value](#value-14)
    + [AWSOpsWorksLayerLifeCycleConfiguration](#awsopsworkslayerlifecycleconfiguration)
      - [Properties](#properties-370)
        * [ShutdownEventConfiguration](#shutdowneventconfiguration)
    + [AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration](#awsopsworkslayerlifecycleconfigurationshutdowneventconfiguration)
      - [Properties](#properties-371)
        * [DelayUntilElbConnectionsDrained](#delayuntilelbconnectionsdrained)
        * [ExecutionTimeout](#executiontimeout)
    + [AWSOpsWorksInstanceBlockDeviceMapping](#awsopsworksinstanceblockdevicemapping)
      - [Properties](#properties-372)
        * [DeviceName](#devicename-3)
        * [Ebs](#ebs-3)
        * [NoDevice](#nodevice-3)
        * [VirtualName](#virtualname-3)
    + [AWSOpsWorksTimeBasedAutoScalingType](#awsopsworkstimebasedautoscalingtype)
      - [Properties](#properties-373)
        * [Friday](#friday)
        * [Monday](#monday)
        * [Saturday](#saturday)
        * [Sunday](#sunday)
        * [Thursday](#thursday)
        * [Tuesday](#tuesday)
        * [Wednesday](#wednesday)
    + [AWSOpsWorksRecipesType](#awsopsworksrecipestype)
      - [Properties](#properties-374)
        * [Configure](#configure)
        * [Deploy](#deploy)
        * [Setup](#setup)
        * [Shutdown](#shutdown)
        * [Undeploy](#undeploy)
    + [AWSOpsWorksAutoScalingThresholdsType](#awsopsworksautoscalingthresholdstype)
      - [Properties](#properties-375)
        * [CpuThreshold](#cputhreshold)
        * [IgnoreMetricsTime](#ignoremetricstime)
        * [InstanceCount](#instancecount-3)
        * [LoadThreshold](#loadthreshold)
        * [MemoryThreshold](#memorythreshold)
        * [ThresholdsWaitTime](#thresholdswaittime)
    + [AWSOpsWorksLoadBasedAutoScalingType](#awsopsworksloadbasedautoscalingtype)
      - [Properties](#properties-376)
        * [DownScaling](#downscaling)
        * [Enable](#enable)
        * [UpScaling](#upscaling)
    + [AWSOpsWorksVolumeConfigurationType](#awsopsworksvolumeconfigurationtype)
      - [Properties](#properties-377)
        * [Iops](#iops-8)
        * [MountPoint](#mountpoint-1)
        * [NumberOfDisks](#numberofdisks)
        * [RaidLevel](#raidlevel)
        * [Size](#size-2)
        * [VolumeType](#volumetype-7)
    + [AWSOpsWorksChefConfigurationType](#awsopsworkschefconfigurationtype)
      - [Properties](#properties-378)
        * [BerkshelfVersion](#berkshelfversion)
        * [ManageBerkshelf](#manageberkshelf)
    + [AWSOpsWorksStackElasticIp](#awsopsworksstackelasticip)
      - [Properties](#properties-379)
        * [Ip](#ip)
        * [Name](#name-55)
    + [AWSOpsWorksStackRdsDbInstance](#awsopsworksstackrdsdbinstance)
      - [Properties](#properties-380)
        * [DbPassword](#dbpassword)
        * [DbUser](#dbuser)
        * [RdsDbInstanceArn](#rdsdbinstancearn)
    + [AWSOpsWorksSourceType](#awsopsworkssourcetype)
      - [Properties](#properties-381)
        * [Password](#password-4)
        * [Revision](#revision-1)
        * [SshKey](#sshkey)
        * [Type](#type-24)
        * [Url](#url)
        * [Username](#username-1)
    + [AWSOpsWorksStackConfigurationManagerType](#awsopsworksstackconfigurationmanagertype)
      - [Properties](#properties-382)
        * [Name](#name-56)
        * [Version](#version-7)
    + [AmazonRDSOptionGroupOptionConfigurationsOptionSettings](#amazonrdsoptiongroupoptionconfigurationsoptionsettings)
      - [Properties](#properties-383)
        * [Name](#name-57)
        * [Value](#value-15)
    + [AWSCloudFormationResourceTagsType](#awscloudformationresourcetagstype)
      - [Properties](#properties-384)
        * [Key](#key-16)
        * [Value](#value-16)
    + [AmazonRDSOptionGroupOptionConfigurations](#amazonrdsoptiongroupoptionconfigurations)
      - [Properties](#properties-385)
        * [DBSecurityGroupMemberships](#dbsecuritygroupmemberships)
        * [OptionName](#optionname-1)
        * [OptionSettings](#optionsettings-2)
        * [Port](#port-8)
        * [VpcSecurityGroupMemberships](#vpcsecuritygroupmemberships)
    + [AmazonRDSSecurityGroupRule](#amazonrdssecuritygrouprule)
      - [Properties](#properties-386)
        * [CIDRIP](#cidrip-1)
        * [EC2SecurityGroupId](#ec2securitygroupid-1)
        * [EC2SecurityGroupName](#ec2securitygroupname-3)
        * [EC2SecurityGroupOwnerId](#ec2securitygroupownerid-3)
    + [Route53AliasTargetProperty](#route53aliastargetproperty)
      - [Properties](#properties-387)
        * [DNSName](#dnsname)
        * [EvaluateTargetHealth](#evaluatetargethealth)
        * [HostedZoneId](#hostedzoneid-2)
    + [AmazonRoute53HealthCheckConfig](#amazonroute53healthcheckconfig)
      - [Properties](#properties-388)
        * [FailureThreshold](#failurethreshold)
        * [FullyQualifiedDomainName](#fullyqualifieddomainname)
        * [IPAddress](#ipaddress)
        * [Port](#port-9)
        * [RequestInterval](#requestinterval)
        * [ResourcePath](#resourcepath-2)
        * [SearchString](#searchstring)
        * [Type](#type-25)
    + [AmazonRoute53HostedZoneTags](#amazonroute53hostedzonetags)
      - [Properties](#properties-389)
        * [Key](#key-17)
        * [Value](#value-17)
    + [AmazonRoute53HostedZoneConfigProperty](#amazonroute53hostedzoneconfigproperty)
      - [Properties](#properties-390)
        * [Comment](#comment-3)
    + [AmazonRoute53HealthCheckTags](#amazonroute53healthchecktags)
      - [Properties](#properties-391)
        * [Key](#key-18)
        * [Value](#value-18)
    + [AmazonS3CorsConfigurationRule](#amazons3corsconfigurationrule)
      - [Properties](#properties-392)
        * [AllowedHeaders](#allowedheaders)
        * [AllowedMethods](#allowedmethods-2)
        * [AllowedOrigins](#allowedorigins)
        * [ExposedHeaders](#exposedheaders)
        * [Id](#id-8)
        * [MaxAge](#maxage)
    + [AmazonS3CorsConfiguration](#amazons3corsconfiguration)
      - [Properties](#properties-393)
        * [CorsRules](#corsrules)
    + [AmazonS3LifecycleRuleNoncurrentVersionTransition](#amazons3lifecyclerulenoncurrentversiontransition)
      - [Properties](#properties-394)
        * [StorageClass](#storageclass)
        * [TransitionInDays](#transitionindays)
    + [AmazonS3LifecycleRuleTransition](#amazons3lifecycleruletransition)
      - [Properties](#properties-395)
        * [StorageClass](#storageclass-1)
        * [TransitionDate](#transitiondate)
        * [TransitionInDays](#transitionindays-1)
    + [AmazonRoute53RecordSetGeoLocationProperty](#amazonroute53recordsetgeolocationproperty)
      - [Properties](#properties-396)
        * [ContinentCode](#continentcode)
        * [CountryCode](#countrycode)
        * [SubdivisionCode](#subdivisioncode)
    + [AmazonS3LoggingConfiguration](#amazons3loggingconfiguration)
      - [Properties](#properties-397)
        * [DestinationBucketName](#destinationbucketname)
        * [LogFilePrefix](#logfileprefix)
    + [AmazonS3LifecycleRule](#amazons3lifecyclerule)
      - [Properties](#properties-398)
        * [ExpirationDate](#expirationdate)
        * [ExpirationInDays](#expirationindays)
        * [Id](#id-9)
        * [NoncurrentVersionExpirationInDays](#noncurrentversionexpirationindays)
        * [NoncurrentVersionTransition](#noncurrentversiontransition)
        * [NoncurrentVersionTransitions](#noncurrentversiontransitions)
        * [Prefix](#prefix-2)
        * [Status](#status-2)
        * [Transition](#transition)
        * [Transitions](#transitions)
    + [AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations](#amazonsimplestorageservicenotificationconfigurationlambdaconfigurations)
      - [Properties](#properties-399)
        * [Event](#event)
        * [Filter](#filter)
        * [Function](#function)
    + [AmazonS3LifecycleConfiguration](#amazons3lifecycleconfiguration)
      - [Properties](#properties-400)
        * [Rules](#rules-1)
    + [AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations](#amazonsimplestorageservicenotificationconfigurationqueueconfigurations)
      - [Properties](#properties-401)
        * [Event](#event-1)
        * [Filter](#filter-1)
        * [Queue](#queue)
    + [AmazonS3NotificationConfigurationTopicConfigurations](#amazons3notificationconfigurationtopicconfigurations)
      - [Properties](#properties-402)
        * [Event](#event-2)
        * [Filter](#filter-2)
        * [Topic](#topic-1)
    + [AmazonS3NotificationConfiguration](#amazons3notificationconfiguration)
      - [Properties](#properties-403)
        * [LambdaConfigurations](#lambdaconfigurations)
        * [QueueConfigurations](#queueconfigurations)
        * [TopicConfigurations](#topicconfigurations)
    + [AmazonS3NotificationConfigurationConfigFilterS3KeyRules](#amazons3notificationconfigurationconfigfilters3keyrules)
      - [Properties](#properties-404)
        * [Name](#name-58)
        * [Value](#value-19)
    + [AmazonS3ReplicationConfigurationRulesDestination](#amazons3replicationconfigurationrulesdestination)
      - [Properties](#properties-405)
        * [Bucket](#bucket-5)
        * [StorageClass](#storageclass-2)
    + [AmazonS3NotificationConfigurationConfigFilterS3Key](#amazons3notificationconfigurationconfigfilters3key)
      - [Properties](#properties-406)
        * [Rules](#rules-2)
    + [AmazonS3NotificationConfigurationConfigFilter](#amazons3notificationconfigurationconfigfilter)
      - [Properties](#properties-407)
        * [S3Key](#s3key-2)
    + [AmazonS3ReplicationConfigurationRules](#amazons3replicationconfigurationrules)
      - [Properties](#properties-408)
        * [Destination](#destination)
        * [Id](#id-10)
        * [Prefix](#prefix-3)
        * [Status](#status-3)
    + [AmazonS3VersioningConfiguration](#amazons3versioningconfiguration)
      - [Properties](#properties-409)
        * [Status](#status-4)
    + [AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty](#amazons3websiteconfigurationroutingrulesroutingruleconditionproperty)
      - [Properties](#properties-410)
        * [HttpErrorCodeReturnedEquals](#httperrorcodereturnedequals)
        * [KeyPrefixEquals](#keyprefixequals)
    + [AmazonS3ReplicationConfiguration](#amazons3replicationconfiguration)
      - [Properties](#properties-411)
        * [Role](#role-2)
        * [Rules](#rules-3)
    + [AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty](#amazons3websiteconfigurationredirectallrequeststoproperty)
      - [Properties](#properties-412)
        * [HostName](#hostname)
        * [Protocol](#protocol-7)
    + [AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty](#amazons3websiteconfigurationroutingrulesredirectruleproperty)
      - [Properties](#properties-413)
        * [HostName](#hostname-1)
        * [HttpRedirectCode](#httpredirectcode)
        * [Protocol](#protocol-8)
        * [ReplaceKeyPrefixWith](#replacekeyprefixwith)
        * [ReplaceKeyWith](#replacekeywith)
    + [AmazonS3WebsiteConfigurationRoutingRulesProperty](#amazons3websiteconfigurationroutingrulesproperty)
      - [Properties](#properties-414)
        * [RedirectRule](#redirectrule)
        * [RoutingRuleCondition](#routingrulecondition)
    + [CloudFormationStackParametersPropertyType](#cloudformationstackparameterspropertytype)
      - [Properties](#properties-415)
    + [AmazonSQSRedrivePolicy](#amazonsqsredrivepolicy)
      - [Properties](#properties-416)
        * [deadLetterTargetArn](#deadlettertargetarn)
        * [maxReceiveCount](#maxreceivecount)
    + [AmazonSNSSubscriptionPropertyType](#amazonsnssubscriptionpropertytype)
      - [Properties](#properties-417)
        * [Endpoint](#endpoint-2)
        * [Protocol](#protocol-9)
    + [AmazonS3WebsiteConfigurationProperty](#amazons3websiteconfigurationproperty)
      - [Properties](#properties-418)
        * [ErrorDocument](#errordocument)
        * [IndexDocument](#indexdocument)
        * [RedirectAllRequestsTo](#redirectallrequeststo)
        * [RoutingRules](#routingrules)
    + [AmazonEC2SystemsManagerAssociationTargets](#amazonec2systemsmanagerassociationtargets)
      - [Properties](#properties-419)
        * [Key](#key-19)
        * [Values](#values-1)
    + [AWSWAFByteMatchSetByteMatchTuples](#awswafbytematchsetbytematchtuples)
      - [Properties](#properties-420)
        * [FieldToMatch](#fieldtomatch)
        * [PositionalConstraint](#positionalconstraint)
        * [TargetString](#targetstring)
        * [TargetStringBase64](#targetstringbase64)
        * [TextTransformation](#texttransformation)
    + [AWSWAFIPSetIPSetDescriptors](#awswafipsetipsetdescriptors)
      - [Properties](#properties-421)
        * [Type](#type-26)
        * [Value](#value-20)
    + [AWSWAFByteMatchSetByteMatchTuplesFieldToMatch](#awswafbytematchsetbytematchtuplesfieldtomatch)
      - [Properties](#properties-422)
        * [Data](#data)
        * [Type](#type-27)
    + [AWSWAFRulePredicates](#awswafrulepredicates)
      - [Properties](#properties-423)
        * [DataId](#dataid)
        * [Negated](#negated)
        * [Type](#type-28)
    + [AWSWAFSizeConstraintSetSizeConstraint](#awswafsizeconstraintsetsizeconstraint)
      - [Properties](#properties-424)
        * [ComparisonOperator](#comparisonoperator-1)
        * [FieldToMatch](#fieldtomatch-1)
        * [Size](#size-3)
        * [TextTransformation](#texttransformation-1)
    + [AWSWAFSizeConstraintSetSizeConstraintFieldToMatch](#awswafsizeconstraintsetsizeconstraintfieldtomatch)
      - [Properties](#properties-425)
        * [Data](#data-1)
        * [Type](#type-29)
    + [AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch](#awswafsqlinjectionmatchsetsqlinjectionmatchtuplesfieldtomatch)
      - [Properties](#properties-426)
        * [Data](#data-2)
        * [Type](#type-30)
    + [AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples](#awswafsqlinjectionmatchsetsqlinjectionmatchtuples)
      - [Properties](#properties-427)
        * [FieldToMatch](#fieldtomatch-2)
        * [TextTransformation](#texttransformation-2)
    + [AWSWAFWebACLAction](#awswafwebaclaction)
      - [Properties](#properties-428)
        * [Type](#type-31)
    + [AWSWAFXssMatchSetXssMatchTuple](#awswafxssmatchsetxssmatchtuple)
      - [Properties](#properties-429)
        * [FieldToMatch](#fieldtomatch-3)
        * [TextTransformation](#texttransformation-3)
    + [AWSWAFWebACLRules](#awswafwebaclrules)
      - [Properties](#properties-430)
        * [Action](#action-1)
        * [Priority](#priority-1)
        * [RuleId](#ruleid)
    + [AWSWAFXssMatchSetXssMatchTupleFieldToMatch](#awswafxssmatchsetxssmatchtuplefieldtomatch)
      - [Properties](#properties-431)
        * [Data](#data-3)
        * [Type](#type-32)
    + [AmazonRedshiftParameterType](#amazonredshiftparametertype)
      - [Properties](#properties-432)
        * [ParameterName](#parametername)
        * [ParameterValue](#parametervalue)
    + [AWSCodePipelineCustomActionTypeSettings](#awscodepipelinecustomactiontypesettings)
      - [Properties](#properties-433)
        * [EntityUrlTemplate](#entityurltemplate)
        * [ExecutionUrlTemplate](#executionurltemplate)
        * [RevisionUrlTemplate](#revisionurltemplate)
        * [ThirdPartyConfigurationUrl](#thirdpartyconfigurationurl)
    + [AWSCodePipelineCustomActionTypeArtifactDetails](#awscodepipelinecustomactiontypeartifactdetails)
      - [Properties](#properties-434)
        * [MaximumCount](#maximumcount)
        * [MinimumCount](#minimumcount)
    + [AmazonRoute53HostedZoneVPCs](#amazonroute53hostedzonevpcs)
      - [Properties](#properties-435)
        * [VPCId](#vpcid)
        * [VPCRegion](#vpcregion)
    + [AWSCodePipelineCustomActionTypeConfigurationProperties](#awscodepipelinecustomactiontypeconfigurationproperties)
      - [Properties](#properties-436)
        * [Description](#description-39)
        * [Key](#key-20)
        * [Name](#name-59)
        * [Queryable](#queryable)
        * [Required](#required)
        * [Secret](#secret)
        * [Type](#type-33)

# Resources
## ApiGateway
### AWS::ApiGateway::Account
#### Properties
##### CloudWatchRoleArn
The Amazon Resource Name (ARN) of an IAM role that has write access to CloudWatch Logs in your account.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::ApiGateway::Authorizer
#### Properties
##### AuthorizerCredentials
The credentials required for the authorizer. To specify an AWS Identity and Access Management (IAM) role that API Gateway assumes, specify the role's Amazon Resource Name (ARN). To use resource-based permissions on the AWS Lambda (Lambda) function, specify null.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### AuthorizerResultTtlInSeconds
The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches authorizer results. If you specify a value greater than 0, API Gateway caches the authorizer responses. By default, API Gateway sets this property to 300. The maximum value is 3600, or 1 hour.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### AuthorizerUri
The authorizer's Uniform Resource Identifier (URI). If you specify TOKEN for the authorizer's Type property, specify a Lambda function URI, which has the form arn:aws:apigateway:region:lambda:path/path. The path usually has the form /2015-03-31/functions/LambdaFunctionARN/invocations.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. Specify this property for Lambda functions only.|

##### IdentitySource
The source of the identity in an incoming request. If you specify TOKEN for the authorizer's Type property, specify a mapping expression. The custom header mapping expression has the form method.request.header.name, where name is the name of a custom authorization header that clients submit as part of their requests.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### IdentityValidationExpression
A validation expression for the incoming identity. If you specify TOKEN for the authorizer's Type property, specify a regular expression. API Gateway uses the expression to attempt to match the incoming client token, and proceeds if the token matches. If the token doesn't match, API Gateway responds with a 401 (unauthorized request) error code.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Name
The name of the authorizer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ProviderARNs
A list of the Amazon Cognito user pool Amazon Resource Names (ARNs) to associate with this authorizer. For more information, see Use Amazon Cognito Your User Pool in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### RestApiId
The ID of the RestApi resource in which API Gateway creates the authorizer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Type
The type of authorizer:For a custom authorizer that uses a Lambda function, use                TOKEN.For an authorizer that uses Amazon Cognito user pools, use COGNITO_USER_POOLS.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::ApiGateway::BasePathMapping
#### Properties
##### BasePath
The base path name that callers of the API must provide in the URL after the domain name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DomainName
The name of a DomainName resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RestApiId
The name of the API.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Stage
The name of the API's stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::ApiGateway::ClientCertificate
#### Properties
##### Description
A description of the client certificate.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::ApiGateway::ApiKey
#### Properties
##### Description
A description of the purpose of the API key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Enabled
Indicates whether the API key can be used by clients.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Name
A name for the API key. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the API key name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### StageKeys
A list of stages to associated with this API key.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonAPIGatewayApiKeyStageKey](#amazonapigatewayapikeystagekey)|No|


### AWS::ApiGateway::Resource
#### Properties
##### ParentId
If you want to create a child resource, the ID of the parent resource. For resources without a parent, specify the RestApi root resource ID, such as { "Fn::GetAtt": ["MyRestApi", "RootResourceId"] }.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PathPart
A path name for the resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RestApiId
The ID of the RestApi resource in which you want to create this resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::ApiGateway::Deployment
#### Properties
##### Description
A description of the purpose of the API Gateway deployment.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RestApiId
The ID of the RestApi resource to deploy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StageDescription
Configures the stage that API Gateway creates with this deployment.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonAPIGatewayDeploymentStageDescription](#amazonapigatewaydeploymentstagedescription)|No|

##### StageName
A name for the stage that API Gateway creates with this deployment. Use only alphanumeric characters.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::ApiGateway::Model
#### Properties
##### ContentType
The content type for the model.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Description
A description that identifies this model.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Name
A name for the mode. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the model name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RestApiId
The ID of a REST API with which to associate this model.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Schema
The schema to use to transform data to one or more output formats. Specify null              ({}) if you don't want to specify a schema.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|


### AWS::ApiGateway::Method
#### Properties
##### ApiKeyRequired
Indicates whether the method requires clients to submit a valid API key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### AuthorizationType
The method's authorization type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes. If you specify the AuthorizerId property, specify CUSTOM for this property.|

##### AuthorizerId
The identifier of the authorizer to use on this method. If you specify this property, specify CUSTOM for the AuthorizationType property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HttpMethod
The HTTP method that clients will use to call this method.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Integration
The back-end system that the method calls when it receives a request.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonAPIGatewayMethodIntegration](#amazonapigatewaymethodintegration)|No|

##### MethodResponses
The responses that can be sent to the client who calls the method.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonAPIGatewayMethodMethodResponse](#amazonapigatewaymethodmethodresponse)|No|

##### RequestModels
The resources used for the response's content type. Specify response models as key-value pairs (string-to-string map), with a content type as the key and a Model resource name as the value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### RequestParameters
Request parameters that API Gateway accepts. Specify request parameters as key-value pairs (string-to-Boolean map), with a source as the key and a Boolean as the value. The Boolean specifies whether a parameter is required. A source must match the following format method.request.location.name, where the location is querystring, path, or header, and              name is a valid, unique parameter name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### ResourceId
The ID of an API Gateway resource. For root resource methods, specify the RestApi root resource ID, such as { "Fn::GetAtt": ["MyRestApi", "RootResourceId"] }.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RestApiId
The ID of the RestApi resource in which API Gateway creates the method.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::ApiGateway::RestApi
#### Properties
##### Body
An OpenAPI specification that defines a set of RESTful APIs in the JSON format.            For YAML templates, you can also specify the specification in the YAML format.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|No|

##### BodyS3Location
The Amazon Simple Storage Service (Amazon S3) location that points to a OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonAPIGatewayRestApiS3Location](#amazonapigatewayrestapis3location)|No|

##### CloneFrom
The ID of the API Gateway RestApi resource that you want to clone.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Description
A description of the purpose of this API Gateway RestApi resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### FailOnWarnings
If a warning occurs while API Gateway is creating the RestApi resource, indicates whether to roll back the resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Name
A name for the API Gateway RestApi resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. Required if you don't specify a OpenAPI definition.|

##### Parameters
Custom header parameters for the request.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AWS::ApiGateway::Stage
#### Properties
##### CacheClusterEnabled
Indicates whether cache clustering is enabled for the stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### CacheClusterSize
The stage's cache cluster size.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ClientCertificateId
The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DeploymentId
The ID of the deployment that the stage points to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Description
A description of the stage's purpose.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MethodSettings
Settings for all methods in the stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonAPIGatewayStageMethodSetting](#amazonapigatewaystagemethodsetting)|No|

##### RestApiId
The ID of the RestApi resource that you're deploying with this stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StageName
The name of the stage, which API Gateway uses as the first path segment in the invoke Uniform Resource Identifier (URI).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Variables
A map (string to string map) that defines the stage variables, where the variable name is the key and the variable value is the value. Variable names are limited to alphanumeric characters. Values must match the following regular expression: [A-Za-z0-9-._~:/?#&amp;=,]+.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|


### AWS::ApiGateway::UsagePlan
#### Properties
##### ApiStages
The APIs and API stages to associate with this usage plan.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonAPIGatewayUsagePlanApiStage](#amazonapigatewayusageplanapistage)|No|

##### Description
The purpose of this usage plan.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Quota
Configures the number of requests that users can make within a given interval.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonAPIGatewayUsagePlanQuotaSettings](#amazonapigatewayusageplanquotasettings)|No|

##### Throttle
Configures the overall request rate (average requests per second) and burst capacity.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonAPIGatewayUsagePlanThrottleSettings](#amazonapigatewayusageplanthrottlesettings)|No|

##### UsagePlanName
A name for this usage plan.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## ApplicationAutoScaling
### AWS::ApplicationAutoScaling::ScalableTarget
#### Properties
##### MaxCapacity
The maximum value that Application Auto Scaling can use to scale a target during a scaling activity.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### MinCapacity
The minimum value that Application Auto Scaling can use to scale a target during a scaling activity.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### ResourceId
The unique resource identifier to associate with this scalable target. For more information, see the ResourceId parameter for the RegisterScalableTarget action in the Application Auto Scaling API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleARN
The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that allows Application Auto Scaling to modify your scalable target.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ScalableDimension
The scalable dimension associated with the scalable target. Specify the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon EC2 Container Service service. For valid values, see the ScalableDimension content for the ScalingPolicy data type in the Application Auto Scaling API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ServiceNamespace
The AWS service namespace of the scalable target. For a list of service namespaces, see AWS Service Namespaces in the AWS General Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::ApplicationAutoScaling::ScalingPolicy
#### Properties
##### PolicyName
A name for the scaling policy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PolicyType
An Application Auto Scaling policy type. For valid values, see the PolicyType parameter for the PutScalingPolicy action in the Application Auto Scaling API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ResourceId
The unique resource identifier for the scalable target that this scaling policy applies to. For more information, see the ResourceId parameter for the PutScalingPolicy action in the Application Auto Scaling API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify either the ScalingTargetId property or the ResourceId, ScalableDimension, and ServiceNamespace properties. If you specify the ResourceId, ScalableDimension, and ServiceNamespace properties, don't specify the ScalingTargetId property.|

##### ScalableDimension
The scalable dimension of the scalable target that this scaling policy applies to. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify either the ScalingTargetId property or the ResourceId, ScalableDimension, and ServiceNamespace properties. If you specify the ResourceId, ScalableDimension, and ServiceNamespace properties, don't specify the ScalingTargetId property.|

##### ServiceNamespace
The AWS service namespace of the scalable target that this scaling policy applies to. For a list of service namespaces, see AWS Service Namespaces in the AWS General Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify either the ScalingTargetId property or the ResourceId, ScalableDimension, and ServiceNamespace properties. If you specify the ResourceId, ScalableDimension, and ServiceNamespace properties, don't specify the ScalingTargetId property.|

##### ScalingTargetId
The AWS CloudFormation-generated ID of an Application Auto Scaling scalable target. For more information about            the ID, see the Return Value section of the AWS::ApplicationAutoScaling::ScalableTarget resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify either the ScalingTargetId property or the ResourceId, ScalableDimension, and ServiceNamespace properties. If you specify this property, don't specify the ResourceId, ScalableDimension, and ServiceNamespace properties.|

##### StepScalingPolicyConfiguration
A step policy that configures when Application Auto Scaling scales resources up or down, and by how much.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[ApplicationAutoScalingScalingPolicyStepScalingPolicyConfiguration](#applicationautoscalingscalingpolicystepscalingpolicyconfiguration)|No|


## AutoScaling
### AWS::AutoScaling::AutoScalingGroup
#### Properties
##### AvailabilityZones
Contains a list of availability zones for the group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. If you don't specify the VPCZoneIdentifier                  property, you must specify this property.|

##### Cooldown
The number of seconds after a scaling activity is completed before any further                  scaling activities can start.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DesiredCapacity
Specifies the desired capacity for the Auto Scaling group.If SpotPrice is not set in the AWS::AutoScaling::LaunchConfiguration for this Auto Scaling group, then Auto Scaling                  will begin to bring instances online based on                     DesiredCapacity. CloudFormation will not mark the Auto Scaling                  group as successful (by setting its status to CREATE_COMPLETE) until the desired                  capacity is reached.If SpotPrice                  is set, then DesiredCapacity will not                  be used as a criteria for success, since instances will only be started when the                  spot price has been matched. After the spot price has been matched, however, Auto Scaling                  uses DesiredCapacity as the target capacity for the                  group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HealthCheckGracePeriod
The length of time in seconds after a new EC2 instance comes into service that                  Auto Scaling starts checking its health.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### HealthCheckType
The service you want the health status from, Amazon EC2 or Elastic Load                  Balancer. Valid values are EC2 or ELB.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### InstanceId
The ID of the Amazon EC2 instance you want to use to create the Auto Scaling group. Use this                  property if you want to create an Auto Scaling group that uses an existing Amazon EC2 instance                  instead of a launch configuration.When you use an Amazon EC2 instance to create an Auto Scaling group, a new launch                  configuration is first created and then associated with the Auto Scaling group. The new                  launch configuration derives all its properties from the instance, with the                  exception of BlockDeviceMapping and                     AssociatePublicIpAddress.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify this property if you don't specify the                     LaunchConfigurationName property.|

##### LaunchConfigurationName
Specifies the name of the associated AWS::AutoScaling::LaunchConfiguration.NoteIf this resource has a public IP address and is also in a VPC that is defined in the same template, you must use theDependsOn attribute to declare a dependency on the VPC-gateway attachment. For more information,see DependsOn Attribute.ImportantWhen you update the LaunchConfigurationName, existing Amazon EC2                     instances continue to run with the configuration that they were originally                     launched with. To update existing instances, specify an update policy attribute                     for this Auto Scaling group. For more information, see UpdatePolicy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional; you must specify this property if                  you don't specify the InstanceId property.|

##### LoadBalancerNames
A list of Classic load balancers associated with this Auto Scaling group. To specify Application load balancers, use TargetGroupARNs.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### MaxSize
The maximum size of the Auto Scaling group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MetricsCollection
Enables the monitoring of group metrics of an Auto Scaling group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AutoScalingMetricsCollection](#autoscalingmetricscollection)|No|

##### MinSize
The minimum size of the Auto Scaling group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### NotificationConfigurations
An embedded property that configures an Auto Scaling group to send notifications when                  specified events take place.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AutoScalingNotificationConfigurations](#autoscalingnotificationconfigurations)|No|

##### PlacementGroup
The name of an existing cluster placement group into which you want to launch                  your instances. A placement group is a logical grouping of instances within a                  single Availability Zone. You cannot specify multiple Availability Zones and a                  placement group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tags
The tags you want to attach to this resource.For more information about tags, go to  Tagging                     Auto Scaling Groups and Amazon EC2 Instances in the                  Auto Scaling User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AutoScalingTags](#autoscalingtags)|No|

##### TargetGroupARNs
A list of Amazon Resource Names (ARN) of target groups to associate with the Auto Scaling group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### TerminationPolicies
A policy or a list of policies that are used to select the instances to                  terminate. The policies are executed in the order that you list them.For more information on configuring a termination policy for your Auto Scaling group, see Instance Termination Policy for Your Auto Scaling Group in the Auto Scaling User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### VPCZoneIdentifier
A list of subnet identifiers of Amazon Virtual Private Cloud (Amazon VPCs).If you specify the AvailabilityZones property, the                  subnets that you specify for this property must reside in those Availability                  Zones.For more information, go to Using EC2 Dedicated Instances Within Your VPC in the                     Auto Scaling User Guide.NoteWhen you update VPCZoneIdentifier, the instances are replaced, but not the                     Auto Scaling group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. If you don't specify the                     AvailabilityZones property, you must specify this                  property.|


### AWS::AutoScaling::LaunchConfiguration
#### Properties
##### AssociatePublicIpAddress
For Amazon EC2 instances in a VPC, indicates whether instances in the Auto Scaling group                  receive public IP addresses. If you specify true, each instance in                  the Auto Scaling receives a unique public IP address.NoteIf this resource has a public IP address and is also in a VPC that is defined in the same template, you must use theDependsOn attribute to declare a dependency on the VPC-gateway attachment. For more information,see DependsOn Attribute.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### BlockDeviceMappings
Specifies how block devices are exposed to the instance. You can specify                  virtual devices and EBS volumes.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType](#awscloudformationautoscalingblockdevicemappingpropertytype)|No|

##### ClassicLinkVPCId
The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. You                  can specify this property only for EC2-Classic instances. For more information,                  see ClassicLink in the                     Amazon Elastic Compute Cloud User                  Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ClassicLinkVPCSecurityGroups
The IDs of one or more security groups for the VPC that you specified in the                     ClassicLinkVPCId property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. If you specified the ClassicLinkVPCId                  property, you must specify this property.|

##### EbsOptimized
Specifies whether the launch configuration is optimized for EBS I/O. This                  optimization provides dedicated throughput to Amazon EBS and an optimized                  configuration stack to provide optimal EBS I/O performance.Additional fees are incurred when using EBS-optimized instances. For more information about fees and supported instance types, see EBS-Optimized Instances in the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No If this property is not specified, "false" is used.|

##### IamInstanceProfile
Provides the name or the Amazon Resource Name (ARN) of the instance profile                  associated with the IAM role for the instance. The instance profile contains the                  IAM role.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ImageId
Provides the unique ID of the Amazon Machine Image (AMI) that was assigned                  during registration.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### InstanceId
The ID of the Amazon EC2 instance you want to use to create the launch                  configuration. Use this property if you want the launch configuration to use                  settings from an existing Amazon EC2 instance.When you use an instance to create a launch configuration, all properties are                  derived from the instance with the exception of BlockDeviceMapping                  and AssociatePublicIpAddress. You can override any properties from                  the instance by specifying them in the launch configuration.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### InstanceMonitoring
Indicates whether detailed instance monitoring is enabled for the Auto Scaling group.                  By default, this property is set to true (enabled).When detailed monitoring is enabled, Amazon CloudWatch (CloudWatch) generates metrics every                  minute and your account is charged a fee. When you disable detailed monitoring,                  CloudWatch generates metrics every 5 minutes. For more information, see Monitor Your Auto Scaling                     Instances in the Auto Scaling Developer                  Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### InstanceType
Specifies the instance type of the EC2 instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### KernelId
Provides the ID of the kernel associated with the EC2 AMI.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### KeyName
Provides the name of the EC2 key pair.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PlacementTenancy
The tenancy of the instance. An instance with a tenancy of                     dedicated runs on single-tenant hardware and can only be launched                  in a VPC. You must set the value of this parameter to dedicated if                  want to launch dedicated instances in a shared tenancy VPC (a VPC with the                  instance placement tenancy attribute set to default). For more information, see                     CreateLaunchConfiguration in the                  Auto Scaling API Reference.If you specify this property, you must specify at least one subnet in the                  VPCZoneIdentifier property of the AWS::AutoScaling::AutoScalingGroup resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RamDiskId
The ID of the RAM disk to select. Some kernels require additional drivers at                  launch. Check the kernel requirements for information about whether you need to                  specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center                  and search for the kernel ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SecurityGroups
A list that contains the EC2 security groups to assign to the Amazon EC2                  instances in the Auto Scaling group. The list can contain the name of existing EC2                  security groups or references to AWS::EC2::SecurityGroup resources                  created in the template. If your instances are launched within VPC, specify Amazon VPC                  security group IDs.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### SpotPrice
The spot price for this autoscaling group. If a spot price is set, then the                  autoscaling group will launch when the current spot price is less than the amount                  specified in the template.When you have specified a spot price for an auto scaling group, the group will                  only launch when the spot price has been met, regardless of the setting in the                  autoscaling group's DesiredCapacity.For more information about configuring a spot price for an autoscaling group,                  see Using Auto Scaling to Launch Spot Instances in the                     AutoScaling Developer Guide.NoteWhen you change your bid price by creating a new launch configuration,                     running instances will continue to run as long as the bid price for those                     running instances is higher than the current Spot price.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### UserData
The user data available to the launched EC2 instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::AutoScaling::ScalingPolicy
#### Properties
##### AdjustmentType
Specifies whether the ScalingAdjustment is an                  absolute number or a percentage of the current capacity. Valid values are                     ChangeInCapacity, ExactCapacity,                  and PercentChangeInCapacity.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### AutoScalingGroupName
The name or Amazon Resource Name (ARN) of the Auto Scaling Group that you                  want to attach the policy to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Cooldown
The amount of time, in seconds, after a scaling activity completes before                  any further trigger-related scaling activities can start.Do not specify this property if you are using the StepScaling                  policy type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EstimatedInstanceWarmup
The estimated time, in seconds, until a newly launched instance can send                  metrics to CloudWatch. By default, Auto Scaling uses the cooldown period, as specified in the                     Cooldown property.Do not specify this property if you are using the SimpleScaling                  policy type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### MetricAggregationType
The aggregation type for the CloudWatch metrics. You can specify                  Minimum, Maximum, or Average. By default,                  AWS CloudFormation specifies Average.Do not specify this property if you are using the SimpleScaling                  policy type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MinAdjustmentMagnitude
For the PercentChangeInCapacity adjustment type, the minimum                  number of instances to scale. The scaling policy changes the desired capacity of                  the Auto Scaling group by a minimum of this many instances. This property replaces the                     MinAdjustmentStep property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### PolicyType
An Auto Scaling policy type. You can specify SimpleScaling or                     StepScaling. By default, AWS CloudFormation specifies                     SimpleScaling. For more information, see Scaling Policy                     Types in the Auto Scaling User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ScalingAdjustment
The number of instances by which to scale. The AdjustmentType property determines if AWS CloudFormation interprets this number as an absolute number (when the ExactCapacity value is specified), increase or decrease capacity by a specified number (when the ChangeInCapacity value is specified), or increase or decrease capacity as a percentage of the existing Auto Scaling group size (when the PercentChangeInCapacity value is                  specified). A positive value adds to the current capacity and a negative value subtracts from the current capacity. For exact capacity, you must specify a positive value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. This property is required if the policy type                     is SimpleScaling. This property is not supported with any other                  policy type.|

##### StepAdjustments
A set of adjustments that enable you to scale based on the size of the alarm                  breach.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AutoScalingScalingPolicyStepAdjustments](#autoscalingscalingpolicystepadjustments)|Conditional. This property is required if the policy type                     is StepScaling. This property is not supported with any other                  policy type.|


### AWS::AutoScaling::LifecycleHook
#### Properties
##### AutoScalingGroupName
The name of the Auto Scaling group for the lifecycle hook.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### DefaultResult
The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if                  an unexpected failure occurs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HeartbeatTimeout
The amount of time that can elapse before the lifecycle hook times out. When                  the lifecycle hook times out, Auto Scaling performs the action that you specified in the                  DefaultResult property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### LifecycleTransition
The state of the Amazon EC2 instance to which you want to attach the lifecycle hook.                  For valid values, see the LifecycleTransition content for the LifecycleHook data type in the                     Auto Scaling API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### NotificationMetadata
Additional information that you want to include when Auto Scaling sends a message to                  the notification target.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### NotificationTargetARN
The Amazon resource name (ARN) of the notification target that Auto Scaling uses to                  notify you when an instance is in the transition state for the lifecycle hook. You                  can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes                  the following information: lifecycle action token, user account ID, Auto Scaling group                  name, lifecycle hook name, instance ID, lifecycle transition, and notification                  metadata.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleARN
The ARN of the IAM role that allows the Auto Scaling group to publish to the                  specified notification target. The role requires permissions to Amazon SNS and                  Amazon SQS.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::AutoScaling::ScheduledAction
#### Properties
##### AutoScalingGroupName
The name or ARN of the Auto Scaling group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### DesiredCapacity
The number of Amazon EC2 instances that should be running in the Auto Scaling group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### EndTime
The time in UTC for this schedule to end. For example,                     2010-06-01T00:00:00Z.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Date|No|

##### MaxSize
The maximum number of Amazon EC2 instances in the Auto Scaling group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### MinSize
The minimum number of Amazon EC2 instances in the Auto Scaling group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Recurrence
The time in UTC when recurring future actions will start. You specify the start                  time by following the Unix cron syntax format. For more information about cron                  syntax, go to http://en.wikipedia.org/wiki/Cron.Specifying the StartTime and EndTime properties with                     Recurrence property forms the start and stop boundaries of the                  recurring action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### StartTime
The time in UTC for this schedule to start. For example,                     2010-06-01T00:00:00Z.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Date|No|


## CertificateManager
### AWS::CertificateManager::Certificate
#### Properties
##### DomainName
Fully qualified domain name (FQDN), such as www.example.com, of the site that you want to secure with the ACM certificate. To protect several sites in the same domain, use an asterisk (*) to specify a wildcard. For example, *.example.com protects www.example.com, site.example.com, and images.example.com.For constraints, see the DomainName parameter for the RequestCertificate action in the AWS Certificate Manager API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### DomainValidationOptions
Domain information that domain name registrars use to verify your identity. For more information and the default values, see Configure Email for Your Domain and Validate Domain Ownership in the AWS Certificate Manager User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSCertificateManagerCertificateDomainValidationOption](#awscertificatemanagercertificatedomainvalidationoption)|No|

##### SubjectAlternativeNames
FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, you can add www.example.net to a certificate for the www.example.com domain name so that users can reach your site by using either name.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Tags
An arbitrary set of tags (key–value pairs) for this ACM certificate.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


## CloudFormation
### AWS::CloudFormation::Stack
#### Properties
##### NotificationARNs
A list of existing Amazon SNS topics where notifications about stack events are                  sent.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Parameters
The set of parameters passed to AWS CloudFormation when this nested stack is created.NoteIf you use the ref function to pass a parameter value to a                     nested stack, comma-delimited list parameters must be of type                        String. In other words, you cannot pass values that are of type                        CommaDelimitedList to nested stacks.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFormationStackParametersPropertyType](#cloudformationstackparameterspropertytype)|Conditional (required if the nested stack                  requires input parameters).|

##### Tags
An arbitrary set of tags (key–value pairs) to describe this                  stack.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### TemplateURL
The URL of a template that specifies the stack that you want to create as a                  resource. The template must be stored on an Amazon S3 bucket, so the URL must have the                  form:                     https://s3.amazonaws.com/.../TemplateName.template

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TimeoutInMinutes
The length of time, in minutes, that AWS CloudFormation waits for the nested stack to reach                  the CREATE_COMPLETE state. The default is no timeout. When AWS CloudFormation detects that the                  nested stack has reached the CREATE_COMPLETE state, it marks the nested stack                  resource as CREATE_COMPLETE in the parent stack and resumes creating the parent                  stack. If the timeout period expires before the nested stack reaches                  CREATE_COMPLETE, AWS CloudFormation marks the nested stack as failed and rolls back both the                  nested stack and parent stack.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AWS::CloudFormation::WaitCondition
#### Properties
##### Count
The number of success signals that AWS CloudFormation must receive before it continues                        the stack creation process. When the wait condition receives the requisite                        number of success signals, AWS CloudFormation resumes the creation of the stack. If the                        wait condition does not receive the specified number of success signals                        before the Timeout period expires, AWS CloudFormation assumes that the wait condition has                        failed and rolls the stack back.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Handle
A reference to the wait condition handle used to signal this wait                        condition. Use the Ref intrinsic function to specify an                            AWS::CloudFormation::WaitConditionHandle resource.Anytime you add a WaitCondition resource during a stack update, you must                        associate the wait condition with a new WaitConditionHandle resource. Do not                        reuse an old wait condition handle that has already been defined in the                        template. If you reuse a wait condition handle, the wait condition might                        evaluate old signals from a previous create or update stack command.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Timeout
The length of time (in seconds) to wait for the number of signals that the                            Count property specifies. Timeout is a                        minimum-bound property, meaning the timeout occurs no sooner than the time                        you specify, but can occur shortly thereafter. The maximum time that can be                        specified for this property is 12 hours (43200 seconds).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::CloudFormation::WaitConditionHandle
#### Properties

### AWS::CloudFormation::Authentication
#### Properties
##### accessKeyId
Specifies the access key ID for S3 authentication.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional Can be specified only if the type                  property is set to "S3".|

##### buckets
A comma-delimited list of Amazon S3 buckets to be associated with the S3                  authentication credentials.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional Can be specified only if the type                  property is set to "S3".|

##### password
Specifies the password for basic authentication.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional Can be specified only if the type property is set to                     "basic".|

##### secretKey
Specifies the secret key for S3 authentication.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional Can be specified only if the type                  property is set to "S3".|

##### type
Specifies whether the authentication scheme uses a user name and password                  ("basic") or an access key ID and secret key ("S3").If you specify "basic", specify the username, password, and uris properties.If you specify "S3", specify the accessKeyId, secretKey, and buckets (optional) properties.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### uris
A comma-delimited list of URIs to be associated with the basic authentication                  credentials. The authorization applies to the specified URIs and any more specific                  URI. For example, if you specify http://www.example.com, the                  authorization will also apply to http://www.example.com/test.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional Can be specified only if the type                  property is set to "basic".|

##### username
Specifies the user name for basic authentication.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional Can be specified only if the type property is set to                     "basic".|

##### roleName
Describes the role for role-based authentication.ImportantThe EC2 instance must be able to access this role using an instance                        profile.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional Can be specified only if the type                  property is set to "S3".|


### AWS::CloudFormation::CustomResource
#### Properties
##### ServiceToken
The service token that was given to the template developer by the service provider                  to access the service, such as an Amazon SNS topic ARN or Lambda function ARN. The                  service token must be from the same region in which you are creating the                  stack.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::CloudFormation::Interface
#### Properties
##### ParameterGroups
A list of parameter group types, where you specify group names, the parameters            in each group, and the order in which the parameters are shown.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationInterfaceParameterGroup](#awscloudformationinterfaceparametergroup)|No|

##### ParameterLabels
A mapping of parameters and their friendly names that the AWS CloudFormation console shows            when a stack is created or updated.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationInterfaceParameterLabel](#awscloudformationinterfaceparameterlabel)|No|


### AWS::CloudFormation::Init
#### Properties

## CloudFront
### AWS::CloudFront::Distribution
#### Properties
##### DistributionConfig
The distribution's configuration information.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontDistributionConfig](#cloudfrontdistributionconfig)|Yes|


## CloudTrail
### AWS::CloudTrail::Trail
#### Properties
##### CloudWatchLogsLogGroupArn
The Amazon Resource Name (ARN) of a log group to which CloudTrail logs will be            delivered.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. This property is required if you specify the              CloudWatchLogsRoleArn property.|

##### CloudWatchLogsRoleArn
The role ARN that Amazon CloudWatch Logs (CloudWatch Logs) assumes to write logs to a log group. For more information,            see Role              Policy Document for CloudTrail to Use CloudWatch Logs for Monitoring in the              AWS CloudTrail User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EnableLogFileValidation
Indicates whether CloudTrail validates the integrity of log files. By default, AWS CloudFormation sets            this value to false. When you disable log file integrity validation, CloudTrail            stops creating digest files. For more information, see CreateTrail in the              AWS CloudTrail API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### IncludeGlobalServiceEvents
Indicates whether the trail is publishing events from global services, such as            IAM, to the log files. By default, AWS CloudFormation sets this value to false.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### IsLogging
Indicates whether the CloudTrail trail is currently logging AWS API calls.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### IsMultiRegionTrail
Indicates whether the CloudTrail trail is created in the region in which you create the            stack (false) or in all regions (true). By default, AWS CloudFormation sets            this value to false. For more information, see How Does CloudTrail Behave Regionally and Globally? in the              AWS CloudTrail User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### KMSKeyId
The AWS Key Management Service (AWS KMS) key ID that you want to use to encrypt CloudTrail logs. You can            specify an alias name (prefixed with alias/), an alias ARN, a key ARN, or a            globally unique identifier.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### S3BucketName
The name of the Amazon S3 bucket where CloudTrail publishes log files.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### S3KeyPrefix
An Amazon S3 object key prefix that precedes the name of all log files.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SnsTopicName
The name of an Amazon SNS topic that is notified when new log files are                  published.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tags
An arbitrary set of tags (key–value pairs) for this trail.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


## CloudWatch
### AWS::CloudWatch::Alarm
#### Properties
##### ActionsEnabled
Indicates whether or not actions should be executed during any changes to the                  alarm's state.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### AlarmActions
The list of actions to execute when this alarm transitions into an ALARM state                  from any other state. Each action is specified as an Amazon Resource Number (ARN).                  For more information about creating alarms and the actions you can specify, see                     Creating Amazon CloudWatch                     Alarms in the Amazon CloudWatch User Guide.NoteFor Auto Scaling scaling polices, you can specify only one policy. If you associate more than one policy, CloudWatch executes only the first scaling policy.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### AlarmDescription
The description for the alarm.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### AlarmName
A name for the alarm. If you don't specify a name, AWS CloudFormation generates a unique                  physical ID and uses that ID for the alarm name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ComparisonOperator
The arithmetic operation to use when comparing the specified Statistic and                  Threshold. The specified Statistic value is used as the first operand.You can specify the following values:                     GreaterThanOrEqualToThreshold |                     GreaterThanThreshold |                     LessThanThreshold |                     LessThanOrEqualToThreshold

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Dimensions
The dimensions for the alarm's associated metric.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[CloudWatchMetricDimensionPropertyType](#cloudwatchmetricdimensionpropertytype)|No|

##### EvaluationPeriods
The number of periods over which data is compared to the specified                  threshold.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### InsufficientDataActions
The list of actions to execute when this alarm transitions into an                  INSUFFICIENT_DATA state from any other state. Each action is specified as an                  Amazon Resource Number (ARN). Currently the only action supported is publishing to                  an Amazon SNS topic or an Amazon Auto Scaling policy.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### MetricName
The name for the alarm's associated metric. For more information about the                  metrics that you can specify, see Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference in the                     Amazon CloudWatch User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Namespace
The namespace for the alarm's associated metric.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### OKActions
The list of actions to execute when this alarm transitions into an OK state                  from any other state. Each action is specified as an Amazon Resource Number (ARN).                  Currently the only action supported is publishing to an Amazon SNS topic or an                  Amazon Auto Scaling policy.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Period
The time over which the specified statistic is applied. You must specify a time                  in seconds that is also a multiple of 60.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### Statistic
The statistic to apply to the alarm's associated metric.You can specify the following values: SampleCount |                     Average | Sum | Minimum |                     Maximum

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Threshold
The value against which the specified statistic is compared.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### Unit
The unit for the alarm's associated metric.You can specify the following values: Seconds | Microseconds | Milliseconds |                  Bytes | Kilobytes | Megabytes | Gigabytes | Terabytes | Bits | Kilobits | Megabits                  | Gigabits | Terabits | Percent | Count | Bytes/Second | Kilobytes/Second |                  Megabytes/Second | Gigabytes/Second | Terabytes/Second | Bits/Second |                  Kilobits/Second | Megabits/Second | Gigabits/Second | Terabits/Second |                  Count/Second | None

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## CodeBuild
### AWS::CodeBuild::Project
#### Properties
##### Artifacts
The output settings for artifacts that the project generates during a build.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodeBuildProjectArtifacts](#awscodebuildprojectartifacts)|Yes|

##### Description
A description of the project. Use the description to identify the purpose of the            project.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EncryptionKey
The alias or Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) customer master key            (CMK) that AWS CodeBuild uses to encrypt the build output. If you don't specify a value, AWS CodeBuild            uses the AWS-managed CMK for Amazon Simple Storage Service.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Environment
The build environment settings for the project, such as the environment type or the            environment variables to use for the build environment.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodeBuildProjectEnvironment](#awscodebuildprojectenvironment)|Yes|

##### Name
A name for the project. The name must be unique across all of the projects in your            AWS account.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ServiceRole
The ARN of the service role that AWS CodeBuild uses to interact with services on your            behalf.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Source
The source code settings for the project, such as the source code's repository type            and location.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodeBuildProjectSource](#awscodebuildprojectsource)|Yes|

##### Tags
An arbitrary set of tags (key-value pairs) for the AWS CodeBuild project.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### TimeoutInMinutes
The number of minutes after which AWS CodeBuild stops the build if it's not complete. For            valid values, see the timeoutInMinutes field in the              AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


## CodeCommit
### AWS::CodeCommit::Repository
#### Properties
##### RepositoryDescription
A description about the AWS CodeCommit repository. For constraints, see the CreateRepository action in                  the AWS CodeCommit API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RepositoryName
A name for the AWS CodeCommit repository.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Triggers
Defines the actions to take in response to events that occur in the repository.                  For example, you can send email notifications when someone pushes to the                  repository.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSCodeCommitRepositoryTrigger](#awscodecommitrepositorytrigger)|No|


## CodeDeploy
### AWS::CodeDeploy::Application
#### Properties
##### ApplicationName
A name for the application. If you don't specify a name, AWS CloudFormation generates a unique            physical ID and uses that ID for the application name. For more information, see Name Type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::CodeDeploy::DeploymentConfig
#### Properties
##### DeploymentConfigName
A name for the deployment configuration. If you don't specify a name, AWS CloudFormation                  generates a unique physical ID and uses that ID for the deployment configuration                  name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MinimumHealthyHosts
The minimum number of healthy instances that must be available at any time                  during an AWS CodeDeploy deployment. For example, for a fleet of nine instances, if you                  specify a minimum of six healthy instances, AWS CodeDeploy deploys your application up to                  three instances at a time so that you always have six healthy instances. The                  deployment succeeds if your application successfully deploys to six or more                  instances; otherwise, the deployment fails.For more information about instance health, see AWS CodeDeploy Instance Health in the                     AWS CodeDeploy User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodeDeployDeploymentConfigMinimumHealthyHosts](#awscodedeploydeploymentconfigminimumhealthyhosts)|No|


### AWS::CodeDeploy::DeploymentGroup
#### Properties
##### ApplicationName
The name of an AWS CodeDeploy application for this deployment group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### AutoScalingGroups
A list of associated Auto Scaling groups that AWS CodeDeploy automatically deploys revisions to                  when new instances are created.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Deployment
The application revision that will be deployed to this deployment group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodeDeployDeploymentGroupDeployment](#awscodedeploydeploymentgroupdeployment)|No|

##### DeploymentConfigName
A deployment configuration name or a predefined configuration name. With                  predefined configurations, you can deploy application revisions to one instance at                  a time, half of the instances at a time, or all the instances at once. For more                  information and valid values, see the DeploymentConfigName parameter                  for the CreateDeploymentGroup action in the                     AWS CodeDeploy API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DeploymentGroupName
A name for the deployment group. If you don't specify a name, AWS CloudFormation generates a                  unique physical ID and uses that ID for the deployment group name. For more                  information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Ec2TagFilters
The Amazon EC2 tags to filter on. AWS CodeDeploy includes all instances that match the tag                  filter with this deployment group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodeDeployDeploymentGroupEc2TagFilters](#awscodedeploydeploymentgroupec2tagfilters)|No|

##### OnPremisesInstanceTagFilters
The on-premises instance tags to filter on. AWS CodeDeploy includes all on-premises                  instances that match the tag filter with this deployment group. To register                  on-premises instances with AWS CodeDeploy, see Configure Existing                     On-Premises Instances by Using AWS CodeDeploy in the                     AWS CodeDeploy User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters](#awscodedeploydeploymentgrouponpremisesinstancetagfilters)|No|

##### ServiceRoleArn
A service role Amazon Resource Name (ARN) that grants AWS CodeDeploy permission to make                  calls to AWS services on your behalf. For more information, see Create a Service Role for                     AWS CodeDeploy in the AWS CodeDeploy User Guide.NoteIn some cases, you might need to add a dependency on the service role's                     policy. For more information, see IAM role policy in DependsOn Attribute.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


## CodePipeline
### AWS::CodePipeline::Pipeline
#### Properties
##### ArtifactStore
The Amazon Simple Storage Service (Amazon S3) location where AWS CodePipeline stores pipeline artifacts. For more            information, see Create an Amazon S3 Bucket              for Your Application in the AWS CodePipeline User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodePipelinePipelineArtifactStore](#awscodepipelinepipelineartifactstore)|Yes|

##### DisableInboundStageTransitions
Prevents artifacts in a pipeline from transitioning to the stage that you            specified. This enables you to manually control transitions.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSCodePipelinePipelineDisableInboundStageTransitions](#awscodepipelinepipelinedisableinboundstagetransitions)|No|

##### Name
The name of your AWS CodePipeline pipeline.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RestartExecutionOnUpdate
Indicates whether to rerun the AWS CodePipeline pipeline after you update it.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### RoleArn
A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to                  make calls to AWS services on your behalf. For more information, see AWS CodePipeline Access Permissions                     Reference in the AWS CodePipeline User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Stages
Defines the AWS CodePipeline pipeline stages.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodePipelinePipelineStages](#awscodepipelinepipelinestages)|Yes|


### AWS::CodePipeline::CustomActionType
#### Properties
##### Category
The category of the custom action, such as a source action or a build action.                  For valid values, see CreateCustomActionType in the                  AWS CodePipeline API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ConfigurationProperties
The configuration properties for the custom action.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSCodePipelineCustomActionTypeConfigurationProperties](#awscodepipelinecustomactiontypeconfigurationproperties)|No|

##### InputArtifactDetails
The input artifact details for this custom action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodePipelineCustomActionTypeArtifactDetails](#awscodepipelinecustomactiontypeartifactdetails)|Yes|

##### OutputArtifactDetails
The output artifact details for this custom action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodePipelineCustomActionTypeArtifactDetails](#awscodepipelinecustomactiontypeartifactdetails)|Yes|

##### Provider
The name of the service provider that AWS CodePipeline uses for this custom action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Settings
URLs that provide users information about this custom action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodePipelineCustomActionTypeSettings](#awscodepipelinecustomactiontypesettings)|No|

##### Version
The version number of this custom action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## Config
### AWS::Config::ConfigRule
#### Properties
##### ConfigRuleName
A name for the AWS Config rule. If you don't specify a name, AWS CloudFormation generates a unique            physical ID and uses that ID for the rule name. For more information, see Name Type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Description
A description about this AWS Config rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### InputParameters
Input parameter values that are passed to the AWS Config rule (Lambda function).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|No|

##### MaximumExecutionFrequency
The maximum frequency at which the AWS Config rule runs evaluations. For valid values, see            the ConfigRule data type in the              AWS Config API Reference.If the rule runs an evaluation when AWS Config delivers a configuration snapshot, the rule            cannot run more frequently than the snapshot delivery frequency. Set an execution            frequency value that is equal to or greater than the value of the snapshot delivery            frequency, which is a property the AWS::Config::DeliveryChannel resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Scope
Defines which AWS resources will trigger an evaluation when their configurations            change. The scope can include one or more resource types, a combination of a tag key and            value, or a combination of one resource type and one resource ID. Specify a scope to            constrain the resources that are evaluated. If you don't specify a scope, the rule            evaluates all resources in the recording group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSConfigConfigRuleScope](#awsconfigconfigrulescope)|No|

##### Source
Specifies the rule owner, the rule identifier, and the events that cause the            function to evaluate your AWS resources.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSConfigConfigRuleSource](#awsconfigconfigrulesource)|Yes|


### AWS::Config::ConfigurationRecorder
#### Properties
##### Name
A name for the configuration recorder. If you don't specify a name, AWS CloudFormation generates            a unique physical ID and uses that ID for the configuration recorder name. For more            information, see Name Type.NoteAfter you create a configuration recorder, you cannot rename it. If you don't want              a AWS CloudFormation-generated name, specify a value for this property.If you specify the name of an existing configuration recorder, AWS CloudFormation uses that            recorder.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RecordingGroup
Indicates whether to record configurations for all supported resources or for a list            of resource types. The resource types that you list must be supported by AWS Config.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSConfigConfigurationRecorderRecordingGroup](#awsconfigconfigurationrecorderrecordinggroup)|No|

##### RoleARN
The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to make            read or write requests to the delivery channel that you specify and to get configuration            details for supported AWS resources. For more information, see Permissions for the AWS Config IAM              Role in the AWS Config Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::Config::DeliveryChannel
#### Properties
##### ConfigSnapshotDeliveryProperties
Provides options for how AWS Config delivers configuration snapshots to the S3 bucket in            your delivery channel.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties](#awsconfigdeliverychannelconfigsnapshotdeliveryproperties)|No|

##### Name
A name for the delivery channel. If you don't specify a name, AWS CloudFormation generates a            unique physical ID and uses that ID for the delivery channel name. For more information,            see Name Type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### S3BucketName
The name of an S3 bucket where you want to store configuration history for the            delivery channel.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### S3KeyPrefix
A key prefix (folder) for the specified S3 bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SnsTopicARN
The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic that AWS Config delivers            notifications to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## DataPipeline
### AWS::DataPipeline::Pipeline
#### Properties
##### Activate
Indicates whether to validate and start the pipeline or stop an active pipeline. By            default, the value is set to true.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Description
A description for the pipeline.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Name
A name for the pipeline. Because AWS CloudFormation assigns each new pipeline a unique                        identifier, you can use the same name for multiple pipelines that are                        associated with your AWS account.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ParameterObjects
Defines the variables that are in the pipeline definition. For more                        information, see Creating                            a Pipeline Using Parameterized Templates in the                            AWS Data Pipeline Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSDataPipelinePipelineParameterObjects](#awsdatapipelinepipelineparameterobjects)|No|

##### ParameterValues
Defines the values for the parameters that are defined in the              ParameterObjects property. For more information, see Creating a Pipeline Using Parameterized              Templates in the AWS Data Pipeline Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSDataPipelinePipelineParameterValues](#awsdatapipelinepipelineparametervalues)|No|

##### PipelineObjects
A list of pipeline objects that make up the pipeline. For more information about            pipeline objects and a description of each object, see Pipeline Object Reference in the              AWS Data Pipeline Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSDataPipelinePipelineObjects](#awsdatapipelinepipelineobjects)|Yes|

##### PipelineTags
A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you                        can use to control permissions. For more information, see Controlling Access to                            Pipelines and Resources in the                            AWS Data Pipeline Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSDataPipelinePipelinePipelineTags](#awsdatapipelinepipelinepipelinetags)|No|


## DirectoryService
### AWS::DirectoryService::MicrosoftAD
#### Properties
##### CreateAlias
A unique alias to assign to the Microsoft Active Directory in AWS. AWS Directory Service uses                  the alias to construct the access URL for the directory, such as                        http://alias.awsapps.com. By                  default, AWS CloudFormation does not create an alias.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### EnableSso
Whether to enable single sign-on for a Microsoft Active Directory in AWS.                  Single sign-on allows users in your directory to access certain AWS services from                  a computer joined to the directory without having to enter their credentials                  separately. If you don't specify a value, AWS CloudFormation disables single sign-on by                  default.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Name
The fully qualified name for the Microsoft Active Directory in AWS, such as                     corp.example.com. The name doesn't need to be publicly resolvable;                  it will resolve inside your VPC only.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Password
The password for the default administrative user, Admin.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ShortName
The NetBIOS name for your domain, such as CORP. If you don't                  specify a value, AWS Directory Service uses the first part of your directory DNS server name. For                  example, if your directory DNS server name is corp.example.com, AWS Directory Service                  specifies CORP for the NetBIOS name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### VpcSettings
Specifies the VPC settings of the Microsoft Active Directory server in                  AWS.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSDirectoryServiceMicrosoftADVpcSettings](#awsdirectoryservicemicrosoftadvpcsettings)|Yes|


### AWS::DirectoryService::SimpleAD
#### Properties
##### CreateAlias
A unique alias to assign to the directory. AWS Directory Service uses the alias to construct                  the access URL for the directory, such as                        http://alias.awsapps.com. By                  default, AWS CloudFormation does not create an alias.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Description
A description of the directory.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EnableSso
Whether to enable single sign-on for a directory. If you don't specify a value,                  AWS CloudFormation disables single sign-on by default.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Name
The fully qualified name for the directory, such as                     corp.example.com.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Password
The password for the directory administrator. AWS Directory Service creates a directory                  administrator account with the user name Administrator and this                  password.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ShortName
The NetBIOS name of the on-premises directory, such as                  CORP.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Size
The size of the directory. For valid values, see CreateDirectory in the                     AWS Directory Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### VpcSettings
Specifies the VPC settings of the directory server.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSDirectoryServiceSimpleADVpcSettings](#awsdirectoryservicesimpleadvpcsettings)|Yes|


## DynamoDB
### AWS::DynamoDB::Table
#### Properties
##### AttributeDefinitions
A list of AttributeName and AttributeType objects            that describe the key schema for the table and indexes.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[DynamoDBAttributeDefinitions](#dynamodbattributedefinitions)|Yes|

##### GlobalSecondaryIndexes
Global secondary indexes to be created on the table. You can create up to 5 global            secondary indexes.ImportantIf you update a table to include a new global secondary index, AWS CloudFormation initiates                the index creation and then proceeds with the stack update. AWS CloudFormation doesn't wait for                the index to complete creation because the backfilling phase can take a long time,                depending on the size of the table. You cannot use the index or update the table                until the index's status is ACTIVE. You can track its status by using                the DynamoDB DescribeTable command.If you add or delete an index during an update, we recommend that you don't                update any other resources. If your stack fails to update and is rolled back while                adding a new index, you must manually delete the index.If you update only the provisioned throughput values of global secondary                  indexes, you can update the table without                    interruption.You can delete or add one global secondary index without interruption. If you do both in the                  same update (for example, by changing the index's logical ID), the update                  fails.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[DynamoDBGlobalSecondaryIndexes](#dynamodbglobalsecondaryindexes)|No|

##### KeySchema
Specifies the attributes that make up the primary key for the table. The            attributes in the KeySchema property must also be defined in the              AttributeDefinitions property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[DynamoDBKeySchema](#dynamodbkeyschema)|Yes|

##### LocalSecondaryIndexes
Local secondary indexes to be created on the table. You can create up to 5 local            secondary indexes. Each index is scoped to a given hash key value. The size of each hash            key can be up to 10 gigabytes.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[DynamoDBLocalSecondaryIndexes](#dynamodblocalsecondaryindexes)|No|

##### ProvisionedThroughput
Throughput for the specified table, consisting of values for ReadCapacityUnits and            WriteCapacityUnits. For more information about the contents of a provisioned throughput            structure, see DynamoDB Provisioned      Throughput.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[DynamoDBProvisionedThroughput](#dynamodbprovisionedthroughput)|Yes|

##### StreamSpecification
The settings for the DynamoDB table stream, which capture changes to items stored in            the table.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[DynamoDBTableStreamSpecification](#dynamodbtablestreamspecification)|No|

##### TableName
A name for the table. If you don't specify a name, AWS CloudFormation generates a unique            physical ID and uses that ID for the table name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## EC2
### AWS::EC2::Volume
#### Properties
##### AutoEnableIO
Indicates whether the volume is auto-enabled for I/O operations. By default,                  Amazon EBS disables I/O to the volume from attached EC2 instances when it determines                  that a volume's data is potentially inconsistent. If the consistency of the volume                  is not a concern, and you prefer that the volume be made available immediately if                  it's impaired, you can configure the volume to automatically enable I/O. For more                  information, see Working with the AutoEnableIO Volume Attribute in the                     Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### AvailabilityZone
The Availability Zone in which to create the new volume.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Encrypted
Indicates whether the volume is encrypted. You can attach encrypted Amazon EBS                  volumes only to instance types that support Amazon EBS encryption. Volumes that are                  created from encrypted snapshots are automatically encrypted. You can't create an                  encrypted volume from an unencrypted snapshot, or vice versa. If your AMI uses                  encrypted volumes, you can launch the AMI only on supported instance types. For                  more information, see Amazon EBS                     encryption in the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Conditional. If you specify the KmsKeyId property, you                  must enable encryption.|

##### Iops
The number of I/O operations per second (IOPS) that the volume supports. For more information about the valid sizes for each volume type, see the Iops parameter for the CreateVolume action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. Required when the volume type is                     io1; not used with other volume types.|

##### KmsKeyId
The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to                  create the encrypted volume, such as                     arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.                  If you create an encrypted volume and don't specify this property, AWS CloudFormation uses the                  default master key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Size
The size of the volume, in gibibytes (GiBs). For more information about the valid sizes for each volume type, see the Size parameter for the CreateVolume action in the Amazon EC2 API Reference.If you specify the SnapshotId property, specify a size that is                  equal to or greater than the size of the snapshot. If you don't specify a size,                  Amazon EC2 uses the size of the snapshot as the volume size.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. If you don't specify a value for the                     SnapshotId property, you must specify this property.|

##### SnapshotId
The snapshot from which to create the new volume.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tags
An arbitrary set of tags (key–value pairs) for this volume.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### VolumeType
The volume type. If you set the type to io1, you must also set the Iops property. For valid values, see the VolumeType parameter for the CreateVolume action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::EC2::EIP
#### Properties
##### InstanceId
The Instance ID of the Amazon EC2 instance that you want to associate with this                  Elastic IP address.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Domain
Set to vpc to allocate the address to your Virtual Private Cloud                  (VPC). No other values are supported.NoteIf you define an Elastic IP address and associate it with a VPC that is                     defined in the same template, you must declare a dependency on the VPC-gateway                     attachment by using the DependsOn attribute on this resource. For                     more information, see DependsOn Attribute.For more information, see AllocateAddress in the Amazon EC2 API Reference. For more                  information about Elastic IP Addresses in VPC, go to IP Addressing in Your VPC in the Amazon VPC User                     Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. Required when allocating an address to a VPC|


### AWS::EC2::VolumeAttachment
#### Properties
##### Device
How the device is exposed to the instance (e.g., /dev/sdh, or xvdh).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### InstanceId
The ID of the instance to which the volume attaches. This value can be a reference to an                  AWS::EC2::Instance resource, or it can be                  the physical ID of an existing EC2 instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### VolumeId
The ID of the Amazon EBS volume. The volume and instance must be within the same                  Availability Zone. This value can be a reference to an AWS::EC2::Volume resource, or it can be the                  volume ID of an existing Amazon EBS volume.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::Instance
#### Properties
##### Affinity
Indicates whether Amazon Elastic Compute Cloud (Amazon EC2) always associates the instance with a dedicated host. If you want Amazon EC2 to always restart the instance (if it was stopped) onto the same host on which it was launched, specify host. If you want Amazon EC2 to restart the instance on any available host, but to try to launch the instance onto the last host it ran on (on a best-effort basis), specify default.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### AvailabilityZone
Specifies the name of the Availability Zone in which the instance is                  located.For more information about AWS regions and Availability Zones, see Regions and Availability Zones in the Amazon EC2 User                     Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No. If not specified, an Availability Zone will be automatically                  chosen for you based on the load balancing criteria for the region.|

##### BlockDeviceMappings
Defines a set of Amazon Elastic Block Store block device mappings, ephemeral instance store                  block device mappings, or both. For more information, see Amazon Elastic Block Store or Amazon EC2 Instance Store in the                  Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2BlockDeviceMappingProperty](#amazonec2blockdevicemappingproperty)|No|

##### DisableApiTermination
Specifies whether the instance can be terminated through the API.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### EbsOptimized
Specifies whether the instance is optimized for Amazon Elastic Block Store I/O. This                  optimization provides dedicated throughput to Amazon EBS and an optimized configuration                  stack to provide optimal EBS I/O performance.For more information about the instance types that can be launched as Amazon EBS                  optimized instances, see Amazon                     EBS-Optimized Instances in the Amazon Elastic Compute Cloud                     User Guide. Additional fees are incurred when using Amazon EBS-optimized                  instances.Update requires:

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No. By default, AWS CloudFormation specifies false.|

##### HostId
If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account. This type of launch is called an untargeted launch. Note that for untargeted launches, you must have a compatible, dedicated host available to successfully launch instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### IamInstanceProfile
The physical ID of an instance profile or a reference to an AWS::IAM::InstanceProfile                  resource.For more information about IAM roles, see Working with Roles in the   AWS Identity and Access Management User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ImageId
Provides the unique ID of the Amazon Machine Image (AMI) that was assigned                  during registration.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### InstanceInitiatedShutdownBehavior
Indicates whether an instance stops or terminates when you shut down the                  instance from the instance's operating system shutdown command. You can specify                     stop or terminate. For more information, see the                  RunInstances command in the                     Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### InstanceType
The instance type, such as t2.micro. The default type is                     "m3.medium". For a list of instance types, see Instance Families and                  Types.Update requires:

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Ipv6AddressCount
The number of IPv6 addresses to associate with the instance's primary network                  interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range.                  To specify specific IPv6 addresses, use the Ipv6Addresses property                  and don't specify this property.For restrictions on which instance types support IPv6 addresses, see the RunInstances                  action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Ipv6Addresses
One or more specific IPv6 addresses from the IPv6 CIDR block range of your                  subnet to associate with the instance's primary network interface. To specify a                  number of IPv6 addresses, use the Ipv6AddressCount property and don't                  specify this property.For information about restrictions on which instance types support IPv6                  addresses, see the RunInstances action in the                  Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[EC2NetworkInterfaceIpv6Addresses](#ec2networkinterfaceipv6addresses)|No|

##### KernelId
The kernel ID.Update requires:

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### KeyName
Provides the name of the Amazon EC2 key pair.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Monitoring
Specifies whether detailed monitoring is enabled for the instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### NetworkInterfaces
A list of embedded objects that describes the network interfaces to associate                  with this instance.NoteIf you use this property to point to a network interface, you must terminate                     the original interface before attaching a new one to allow the update of the                     instance to succeed.If this resource has a public IP address and is also in a VPC that is defined in the same template, you must use theDependsOn attribute to declare a dependency on the VPC-gateway attachment. For more information,see DependsOn Attribute.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[EC2NetworkInterfaceEmbeddedPropertyType](#ec2networkinterfaceembeddedpropertytype)|No|

##### PlacementGroupName
The name of an existing placement group that you want to launch the instance                  into (for cluster instances).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PrivateIpAddress
The private IP address for this instance.ImportantIf you make an update to an instance that requires replacement, you must                        assign a new private IP address. During a replacement, AWS CloudFormation creates a new                        instance but doesn't delete the old instance until the stack has                        successfully updated. If the stack update fails, AWS CloudFormation uses the old instance                        in order to roll back the stack to the previous working state. The old and                        new instances cannot have the same private IP address.(Optional) If you're using Amazon VPC, you can use this parameter to assign the                  instance a specific available IP address from the subnet (for example, 10.0.0.25).                  By default, Amazon VPC selects an IP address from the subnet for the instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RamdiskId
The ID of the RAM disk to select. Some kernels require additional drivers at                  launch. Check the kernel requirements for information about whether you need to                  specify a RAM disk. To find kernel requirements, go to the AWS Resource Center and                  search for the kernel ID.Update requires:

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SecurityGroupIds
A list that contains the security group IDs for VPC security groups to assign                  to the Amazon EC2 instance. If you specified the NetworkInterfaces                  property, do not specify this property.Update requires:

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. Required for VPC security                  groups.|

##### SecurityGroups
Valid only for Amazon EC2 security groups. A list that contains the Amazon EC2 security                  groups to assign to the Amazon EC2 instance. The list can contain both the name of                  existing Amazon EC2 security groups or references to AWS::EC2::SecurityGroup resources                  created in the template.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### SourceDestCheck
Controls whether source/destination checking is enabled on the instance. Also                  determines if an instance in a VPC will perform network address translation                  (NAT).A value of "true" means that source/destination checking is                  enabled, and a value of "false" means that checking is disabled. For                  the instance to perform NAT, the value must be                     "false". For more information, see NAT                     Instances in the Amazon Virtual Private Cloud User                     Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### SsmAssociations
The Amazon EC2 Systems Manager (SSM) document                  and parameter values to associate with this instance. To use this property, you                  must specify an IAM role for the instance. For more information, see Prerequisites for Remotely                     Running Commands on EC2 Instances in the                     Amazon EC2 User Guide for Windows Instances.NoteYou can currently associate only one document with an instance.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2InstanceSsmAssociations](#amazonec2instancessmassociations)|No|

##### SubnetId
If you're using Amazon VPC, this property specifies the ID of the subnet that                  you want to launch the instance into. If you specified the                     NetworkInterfaces property, do not specify this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tags
An arbitrary set of tags (key–value pairs) for this instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### Tenancy
The tenancy of the instance that you want to launch, such as default, dedicated, or host. If you specify a tenancy value of dedicated or host, you must launch the instance in a VPC. For more information, see Dedicated Instances in the Amazon VPC User Guide.Update requires:

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### UserData
Base64-encoded MIME user data that is made available to the instances.Update requires:NoteFor EBS-backed instances, changing the UserData stops                              and then starts the instance; however, Amazon EC2 doesn't automatically run                              the updated UserData. To update configurations on your                              instance, use the cfn-hup helper                              script.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Volumes
The Amazon EBS volumes to attach to the instance.NoteBefore detaching a volume, unmount any file systems on the device within                        your operating system. If you don't unmount the file system, a volume might                        get stuck in a busy state while detaching.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[EC2MountPointPropertyType](#ec2mountpointpropertytype)|No|

##### AdditionalInfo
Reserved.Update requires:

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::EC2::EIPAssociation
#### Properties
##### AllocationId
[EC2-VPC] Allocation ID for the VPC Elastic IP address you want to associate                  with an Amazon EC2 instance in your VPC.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. Required for  EC2-VPC.|

##### EIP
Elastic IP address that you want to associate with the Amazon EC2 instance specified                  by the InstanceId property. You can specify an existing Elastic IP                  address or a reference to an Elastic IP address allocated with a AWS::EC2::EIP resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. Required for EC2-Classic.|

##### InstanceId
Instance ID of the Amazon EC2 instance that you want to associate with the Elastic            IP address specified by the EIP property. If the instance has more than one network            interface, you must specify a network interface ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify the EIP            property, you must specify this property. If you specify the AllocationId            property, you must specify this property or the NetworkInterfaceId            property.|

##### NetworkInterfaceId
[EC2-VPC] The ID of the network interface to associate with the Elastic IP                  address. If the instance has more than one network interface, you must specify a                  network interface ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify the              AllocationId property, you must specify this property or the              InstanceId property.|

##### PrivateIpAddress
[EC2-VPC] The private IP address that you want to associate with the Elastic IP                  address. The private IP address is restricted to the primary and secondary private                  IP addresses that are associated with the network interface. By default, the                  private IP address that is associated with the EIP is the primary private IP                  address of the network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::EC2::SecurityGroupIngress
#### Properties
##### CidrIp
An IPv4 CIDR range.For an overview of CIDR ranges, go to the Wikipedia                     Tutorial.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify a source security group              (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR            range (CidrIp or CidrIpv6).|

##### CidrIpv6
An IPv6 CIDR range.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify a source security group              (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR            range (CidrIp or CidrIpv6).|

##### FromPort
Start of port range for the TCP and UDP protocols, or an ICMP type number.                  If you specify icmp for the IpProtocol property, you can                  specify -1 as a wildcard (i.e., any ICMP type number).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes, for ICMP and any protocol that uses ports.|

##### GroupId
ID of the Amazon EC2 or VPC security group to modify. The group must belong to your                  account.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify the GroupName                  property or the GroupId property. For security groups that                  are in a VPC, you must use the GroupId property. For example,                     EC2-VPC                  accounts must use the GroupId property.|

##### GroupName
Name of the Amazon EC2 security group (non-VPC security group) to modify. This value                  can be a reference to an AWS::EC2::SecurityGroup resource or the name of an existing Amazon EC2                  security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify the GroupName                  property or the GroupId property. For security groups that                  are in a VPC, you must use the GroupId property. For example,                     EC2-VPC                  accounts must use the GroupId property.|

##### IpProtocol
IP protocol name or number. For valid values, see the IpProtocol parameter                  in AuthorizeSecurityGroupIngress

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SourceSecurityGroupId
Specifies the ID of the source security group or uses the Ref                  intrinsic function to refer to the logical ID of a security group defined in the                  same template.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify a source security group              (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR            range (CidrIp or CidrIpv6).|

##### SourceSecurityGroupName
Specifies the name of the Amazon EC2 security group (non-VPC security group) to                  allow access or uses the Ref intrinsic function to refer to the                  logical name of a security group defined in the same template. For instances in a                  VPC, specify the SourceSecurityGroupId property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify a source security group              (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR            range (CidrIp or CidrIpv6).|

##### SourceSecurityGroupOwnerId
Specifies the AWS Account ID of the owner of the Amazon EC2 security group                  specified in the SourceSecurityGroupName property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify                     SourceSecurityGroupName and that security group is owned                  by a different account than the account creating the stack, you must specify the                     SourceSecurityGroupOwnerId; otherwise, this property is                  optional.|

##### ToPort
End of port range for the TCP and UDP protocols, or an ICMP code. If you                  specify icmp for the IpProtocol property, you can                  specify -1 as a wildcard (i.e., any ICMP code).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes, for ICMP and any protocol that uses ports.|


### AWS::EC2::SecurityGroup
#### Properties
##### GroupDescription
Description of the security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SecurityGroupEgress
A list of Amazon EC2 security group egress rules.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[EC2SecurityGroupRulePropertyType](#ec2securitygrouprulepropertytype)|No|

##### SecurityGroupIngress
A list of Amazon EC2 security group ingress rules.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[EC2SecurityGroupRulePropertyType](#ec2securitygrouprulepropertytype)|No|

##### Tags
The tags that you want to attach to the resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### VpcId
The physical ID of the VPC. Can be obtained by using a reference to an AWS::EC2::VPC, such as: { "Ref" : "myVPC" }.For more information about using the Ref function, see Ref.NoteFor more information about VPC security groups, go to Security Groups in the Amazon VPC User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes, for VPC security groups without a default                  VPC|


### AWS::EC2::CustomerGateway
#### Properties
##### BgpAsn
The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### IpAddress
The internet-routable IP address for the customer gateway's outside interface. The address must be               static.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Tags
The tags that you want to attach to the resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### Type
The type of VPN connection that this customer gateway supports.Example: ipsec.1

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::Host
#### Properties
##### AutoPlacement
Indicates if the host accepts EC2 instances with only matching configurations or if            instances must also specify the host ID. Instances that don't specify a host ID can't            launch onto a host with AutoPlacement set to off. By default,            AWS CloudFormation sets this property to on. For more information, see Understanding Instance              Placement and Host Affinity in the            Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### AvailabilityZone
The Availability Zone (AZ) in which to launch the dedicated host.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### InstanceType
The instance type that the dedicated host accepts. Only instances of this type can be launched onto the host. For more information, see Supported Instance Types in the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::InternetGateway
#### Properties
##### Tags
An arbitrary set of tags (key–value pairs) for this resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


### AWS::EC2::DHCPOptions
#### Properties
##### DomainName
A domain name of your choice.Example: "example.com"

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional; see note.|

##### DomainNameServers
The IP (IPv4) address of a domain name server. You can specify up to four addresses.Example: "DomainNameServers" : [ "10.0.0.1", "10.0.0.2"                  ]Example: To preserve the order of IP addresses, specify a comma delimited list as a single string: "DomainNameServers" : [ "10.0.0.1, 10.0.0.2" ]

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional; see note.|

##### NetbiosNameServers
The IP address (IPv4) of a NetBIOS name server. You can specify up to four addresses.Example: "NetbiosNameServers" : [ "10.0.0.1", "10.0.0.2" ]Example: To preserve the order of IP addresses, specify a comma delimited list as a single string: "NetbiosNameServers" : [ "10.0.0.1, 10.0.0.2" ]

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional; see note.|

##### NetbiosNodeType
An integer value indicating the NetBIOS node type:1: Broadcast ("B")2: Point-to-point ("P")4: Mixed mode ("M")8: Hybrid ("H")For more information about these values and about NetBIOS node types, see                     RFC 2132, RFC 1001, and RFC 1002. We recommend that                  you use only the value 2 at this time (broadcast and multicast are                  not currently supported).Example: "NetbiosNodeType" : 2

| Array    | Type     | Required |
|----------|----------|----------|
|true|Number|Required if NetBiosNameServers is specified;                  optional otherwise.|

##### NtpServers
The IP address (IPv4) of a Network Time Protocol (NTP) server. You can specify up to four                  addresses.Example: "NtpServers" : [ "10.0.0.1" ]Example: To preserve the order of IP addresses, specify a comma delimited list as a single string: "NtpServers" : [ "10.0.0.1, 10.0.0.2" ]

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional; see note.|

##### Tags
An arbitrary set of tags (key–value pairs) for this resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


### AWS::EC2::FlowLog
#### Properties
##### DeliverLogsPermissionArn
The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### LogGroupName
The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ResourceId
The ID of the subnet, network interface, or VPC for which you want to create a flow log.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ResourceType
The type of resource that you specified in the ResourceId property. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property. For valid values, see the ResourceType parameter for the CreateFlowLogs action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TrafficType
The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. For valid values, see the TrafficType parameter for the CreateFlowLogs action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::NatGateway
#### Properties
##### AllocationId
The allocation ID of an Elastic IP address to associate with the NAT gateway. If the            Elastic IP address is associated with another resource, you must first disassociate            it.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SubnetId
The public subnet in which to create the NAT gateway.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::NetworkAclEntry
#### Properties
##### CidrBlock
The IPv4 CIDR range to allow or deny, in CIDR notation (e.g., 172.16.0.0/24).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify the CidrBlock or Ipv6CidrBlock property.|

##### Egress
Whether this rule applies to egress traffic from the subnet (true)                  or ingress traffic to the subnet (false). By default, AWS CloudFormation specifies                     false.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Icmp
The Internet Control Message Protocol (ICMP) code and type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[EC2NetworkAclEntryIcmp](#ec2networkaclentryicmp)|Conditional required if specifying 1 (ICMP) for the protocol                  parameter.|

##### Ipv6CidrBlock
The IPv6 CIDR range to allow or deny, in CIDR notation.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify the CidrBlock or Ipv6CidrBlock property.|

##### NetworkAclId
ID of the ACL where the entry will be created.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PortRange
The range of port numbers for the UDP/TCP protocol.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[EC2NetworkAclEntryPortRange](#ec2networkaclentryportrange)|Conditional Required if specifying 6 (TCP) or 17 (UDP) for the protocol               parameter.|

##### Protocol
The IP protocol that the rule applies to. You must specify -1 or a                  protocol number (go to Protocol Numbers at iana.org). You can specify -1 for all                  protocols.NoteIf you specify -1, all ports are opened and the                        PortRange property is ignored.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### RuleAction
Whether to allow or deny traffic that matches the rule; valid values are "allow" or "deny".

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RuleNumber
Rule number to assign to the entry, such as 100. ACL entries are                  processed in ascending order by rule number. Entries can't use the same rule                  number unless one is an egress rule and the other is an ingress rule. For valid                  values, see the CreateNetworkAclEntry action in the                     Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AWS::EC2::NetworkAcl
#### Properties
##### Tags
An arbitrary set of tags (key–value pairs) for this ACL.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### VpcId
The ID of the VPC where the network ACL will be created.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::NetworkInterface
#### Properties
##### Description
The description of this network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### GroupSet
A list of security group IDs associated with this network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Ipv6AddressCount
The number of IPv6 addresses to associate with the network interface. Amazon EC2                  automatically selects the IPv6 addresses from the subnet range. To specify                  specific IPv6 addresses, use the Ipv6Addresses property and don't                  specify this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Ipv6Addresses
One or more specific IPv6 addresses from the IPv6 CIDR block range of your                  subnet to associate with the network interface. If you're specifying a number of                  IPv6 addresses, use the Ipv6AddressCount property and don't specify                  this property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[EC2NetworkInterfaceIpv6Addresses](#ec2networkinterfaceipv6addresses)|No|

##### PrivateIpAddress
Assigns a single private IP address to the network interface, which is used as                  the primary private IP address. If you want to specify multiple private IP                  address, use the PrivateIpAddresses property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PrivateIpAddresses
Assigns a list of private IP addresses to the network interface. You can                  specify a primary private IP address by setting the value of the                     Primary property to true in the                     PrivateIpAddressSpecification property. If you want Amazon EC2 to                  automatically assign private IP addresses, use the                     SecondaryPrivateIpAddressCount property and do not specify this                  property.For information about the maximum number of private IP addresses, see Private IP Addresses Per                     ENI Per Instance Type in the                  Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[EC2NetworkInterfacePrivateIPSpecification](#ec2networkinterfaceprivateipspecification)|No|

##### SecondaryPrivateIpAddressCount
The number of secondary private IP addresses that Amazon EC2 automatically assigns                  to the network interface. Amazon EC2 uses the value of the                     PrivateIpAddress property as the primary private IP address. If                  you don't specify that property, Amazon EC2 automatically assigns both the primary and                  secondary private IP addresses.If you want to specify your own list of private IP addresses, use the                     PrivateIpAddresses property and do not specify this                  property.For information about the maximum number of private IP addresses, see Private IP Addresses                     Per ENI Per Instance Type in the                     Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### SourceDestCheck
Flag indicating whether traffic to or from the instance is validated.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### SubnetId
The ID of the subnet to associate with the network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Tags
An arbitrary set of tags (key–value pairs) for this network                  interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


### AWS::EC2::NetworkInterfaceAttachment
#### Properties
##### DeleteOnTermination
Whether to delete the network interface when the instance terminates. By                  default, this value is set to True.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### DeviceIndex
The network interface's position in the attachment order. For example, the                  first attached network interface has a DeviceIndex of                  0.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes.|

##### InstanceId
The ID of the instance to which you will attach the ENI.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes.|

##### NetworkInterfaceId
The ID of the ENI that you want to attach.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes.|


### AWS::EC2::RouteTable
#### Properties
##### VpcId
The ID of the VPC where the route table will be created.Example: vpc-11ad4878

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Tags
An arbitrary set of tags (key–value pairs) for this route table.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


### AWS::EC2::SecurityGroupEgress
#### Properties
##### CidrIp
An IPv4 CIDR range.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify a destination security group              (DestinationPrefixListId or DestinationSecurityGroupId) or a            CIDR range (CidrIp or CidrIpv6).|

##### CidrIpv6
An IPv6 CIDR range.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify a destination security group              (DestinationPrefixListId or DestinationSecurityGroupId) or a            CIDR range (CidrIp or CidrIpv6).|

##### DestinationPrefixListId
The AWS service prefix of an Amazon VPC endpoint. For more information, see VPC Endpoints in the              Amazon VPC User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify a destination security group              (DestinationPrefixListId or DestinationSecurityGroupId) or a            CIDR range (CidrIp or CidrIpv6).|

##### DestinationSecurityGroupId
Specifies the group ID of the destination Amazon VPC security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify a destination security group              (DestinationPrefixListId or DestinationSecurityGroupId) or a            CIDR range (CidrIp or CidrIpv6).|

##### FromPort
Start of port range for the TCP and UDP protocols, or an ICMP type number. If                  you specify icmp for the IpProtocol property, you can                  specify -1 as a wildcard (i.e., any ICMP type number).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### GroupId
ID of the Amazon VPC security group to modify. This value can be a reference to an AWS::EC2::SecurityGroup resource that has a                  valid VpcId property or the ID of an existing Amazon VPC security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### IpProtocol
IP protocol name or number. For valid values, see the IpProtocol parameter in AuthorizeSecurityGroupIngress

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ToPort
End of port range for the TCP and UDP protocols, or an ICMP code. If you                  specify icmp for the IpProtocol property, you can                  specify -1 as a wildcard (i.e., any ICMP code).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AWS::EC2::PlacementGroup
#### Properties
##### Strategy
The placement strategy, which relates to the instance types that can be added            to the placement group. For example, for the cluster strategy, you can            cluster C4 instance types but not T2 instance types. For valid values, see CreatePlacementGroup in the              Amazon EC2 API Reference. By default, AWS CloudFormation sets the value of this            property to cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::EC2::Route
#### Properties
##### DestinationCidrBlock
The IPv4 CIDR address block used for the destination match. For example,                     0.0.0.0/0. Routing decisions are based on the most specific                  match.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify the DestinationCidrBlock or DestinationIpv6CidrBlock property.|

##### DestinationIpv6CidrBlock
The IPv6 CIDR address block used for the destination match. For example,                     ::/0. Routing decisions are based on the most specific                  match.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify the DestinationCidrBlock or DestinationIpv6CidrBlock property.|

##### GatewayId
The ID of an Internet gateway or virtual private gateway that is attached to                  your VPC. For example: igw-eaad4883.For route entries that specify a gateway, you must specify a dependency on the                  gateway attachment resource.  For more information, see DependsOn Attribute.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify only one of the following properties:                     GatewayId, InstanceId, NatGatewayId,                     NetworkInterfaceId, or VpcPeeringConnectionId.|

##### InstanceId
The ID of a NAT instance in your VPC. For example,                  i-1a2b3c4d.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify only one of the following properties:                     GatewayId, InstanceId, NatGatewayId,                     NetworkInterfaceId, or VpcPeeringConnectionId.|

##### NatGatewayId
The ID of a NAT gateway. For example,                  nat-0a12bc456789de0fg.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify only one of the following properties:                     GatewayId, InstanceId, NatGatewayId,                     NetworkInterfaceId, or VpcPeeringConnectionId.|

##### NetworkInterfaceId
Allows the routing of network interface IDs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify only one of the following properties:                     GatewayId, InstanceId, NatGatewayId,                     NetworkInterfaceId, or VpcPeeringConnectionId.|

##### RouteTableId
The ID of the route table where the route will                  be added.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### VpcPeeringConnectionId
The ID of a VPC peering connection.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify only one of the following properties:                     GatewayId, InstanceId, NatGatewayId,                     NetworkInterfaceId, or VpcPeeringConnectionId.|


### AWS::EC2::SpotFleet
#### Properties
##### SpotFleetRequestConfigData
The configuration for a Spot fleet request.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEC2SpotFleetSpotFleetRequestConfigData](#amazonec2spotfleetspotfleetrequestconfigdata)|Yes|


### AWS::EC2::SubnetRouteTableAssociation
#### Properties
##### RouteTableId
The ID of the route table. This is commonly written as a reference to a route table declared                  elsewhere in the template. For example:

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SubnetId
The ID of the subnet. This is commonly written as a reference to a subnet declared elsewhere in the                  template. For example:

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::Subnet
#### Properties
##### AvailabilityZone
The availability zone in which you want the subnet. Default: AWS selects a zone                  for you (recommended).NoteIf you update this property, you must also update the                           CidrBlock property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### CidrBlock
The CIDR block that you want the subnet to cover (for example,                     "10.0.0.0/24").NoteIf you update this property, you must also update the                           AvailabilityZone property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MapPublicIpOnLaunch
Indicates whether instances that are launched in this subnet receive a public                  IP address. By default, the value is false.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Tags
An arbitrary set of tags (key–value pairs) for this subnet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### VpcId
A Ref structure that contains the ID of the VPC on which you want to create the                  subnet. The VPC ID is provided as the value of the "Ref" property, as: {                     "Ref": "VPCID" }.NoteIf you update this property, you must also update the                           CidrBlock property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::SubnetNetworkAclAssociation
#### Properties
##### SubnetId
The ID representing the current association between the original network ACL and the subnet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### NetworkAclId
The ID of the new ACL to associate with the subnet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::SubnetCidrBlock
#### Properties
##### Ipv6CidrBlock
The IPv6 CIDR block for the subnet. The CIDR block must have a prefix length of                  /64.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SubnetId
The ID of the subnet to associate the IPv6 CIDR block with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::VPCDHCPOptionsAssociation
#### Properties
##### DhcpOptionsId
The ID of the DHCP options you want to associate with the VPC. Specify                     default if you want the VPC to use no DHCP options.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### VpcId
The ID of the VPC to associate with this DHCP options set.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::VPCCidrBlock
#### Properties
##### AmazonProvidedIpv6CidrBlock
Whether to request an Amazon-provided IPv6 CIDR block with a /56 prefix length                  for the VPC. You can't specify the range of IPv6 addresses or the size of the CIDR                  block.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### VpcId
The ID of the VPC to associate the Amazon-provided IPv6 CIDR block with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::VPCGatewayAttachment
#### Properties
##### InternetGatewayId
The ID of the Internet gateway.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional You must specify either InternetGatewayId or               VpnGatewayId, but not both.|

##### VpcId
The ID of the VPC to associate with this gateway.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### VpnGatewayId
The ID of the virtual private network (VPN) gateway to attach to the VPC.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional You must specify either                     InternetGatewayId or VpnGatewayId, but not both.|


### AWS::EC2::VPC
#### Properties
##### CidrBlock
The CIDR block you want the VPC to cover. For example: "10.0.0.0/16".

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### EnableDnsSupport
Specifies whether DNS resolution is supported for the VPC. If this attribute is                     true, the Amazon DNS server resolves DNS hostnames for your                  instances to their corresponding IP addresses; otherwise, it does not. By default                  the value is set to true.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### EnableDnsHostnames
Specifies whether the instances launched in the VPC get DNS hostnames. If this                  attribute is true, instances in the VPC get DNS hostnames; otherwise,                  they do not. You can only set EnableDnsHostnames to true                  if you also set the EnableDnsSupport attribute to true.                  By default, the value is set to false.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### InstanceTenancy
The allowed tenancy of instances launched into the VPC."default": Instances can be launched with any                        tenancy."dedicated": Any instance launched into the VPC automatically has dedicated tenancy, unless you launch it with the default                        tenancy.Valid values: "default" or                     "dedicated"

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tags
An arbitrary set of tags (key–value pairs) for this VPC. To name a VPC resource, specify a value for the Name key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


### AWS::EC2::VPCEndpoint
#### Properties
##### PolicyDocument
A policy to attach to the endpoint that controls access to the service. The            policy must be valid JSON. The default policy allows full access to the AWS service. For            more information, see Controlling Access to Services in the            Amazon VPC User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|No|

##### RouteTableIds
One or more route table IDs that are used by the VPC to reach the                  endpoint.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### ServiceName
The AWS service to which you want to establish a connection. Specify the                  service name in the form of                        com.amazonaws.region.service.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### VpcId
The ID of the VPC in which the endpoint is used.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::VPNConnectionRoute
#### Properties
##### DestinationCidrBlock
The CIDR block that is associated with the local subnet of the customer                  network.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes.|

##### VpnConnectionId
The ID of the VPN connection.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes.|


### AWS::EC2::VPCPeeringConnection
#### Properties
##### PeerVpcId
The ID of the VPC with which you are creating the peering connection.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Tags
An arbitrary set of tags (key–value pairs) for this                        resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### VpcId
The ID of the VPC that is requesting a peering connection.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::VPNConnection
#### Properties
##### Type
The type of VPN connection this virtual private gateway supports.Example: "ipsec.1"

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### CustomerGatewayId
The ID of the customer gateway. This can either be an embedded JSON object or a                  reference to a Gateway ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StaticRoutesOnly
Indicates whether the VPN connection requires static routes.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Conditional: If you are creating a VPN                  connection for a device that does not support Border Gateway Protocol (BGP), you                  must specify true.|

##### Tags
The tags that you want to attach to the resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### VpnGatewayId
The ID of the virtual private gateway. This can either be an embedded JSON                  object or a reference to a Gateway ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EC2::VPNGateway
#### Properties
##### Type
The type of VPN connection this virtual private gateway supports. The only valid value is               "ipsec.1".

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Tags
An arbitrary set of tags (key–value pairs) for this resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


### AWS::EC2::VPNGatewayRoutePropagation
#### Properties
##### RouteTableIds
A list of routing table IDs that are associated with a VPC. The routing                  tables must be associated with the same VPC that the virtual private gateway is                  attached to.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### VpnGatewayId
The ID of the virtual private gateway that is attached to a VPC. The virtual                  private gateway must be attached to the same VPC that the routing tables are                  associated with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


## ECR
### AWS::ECR::Repository
#### Properties
##### RepositoryName
A name for the image repository. If you don't specify a name, AWS CloudFormation generates a            unique physical ID and uses that ID for the repository name. For more information, see              Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RepositoryPolicyText
A policy that controls who has access to the repository and which actions they can            perform on it. For more information, see Amazon ECR Repository Policies in the              Amazon EC2 Container Registry User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|No|


## ECS
### AWS::ECS::Cluster
#### Properties
##### ClusterName
A name for the cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID for the name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::ECS::Service
#### Properties
##### Cluster
The name or Amazon Resource Name (ARN) of the cluster that you want to run your                  service on. If you do not specify a cluster, Amazon ECS uses the default                  cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DeploymentConfiguration
Configures how many tasks run during a deployment.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEC2ContainerServiceServiceDeploymentConfiguration](#amazonec2containerserviceservicedeploymentconfiguration)|No|

##### DesiredCount
The number of simultaneous tasks, which you specify by using the                     TaskDefinition property, that you want to run on the                  cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### LoadBalancers
A list of load balancer objects to associate with the cluster. For information about the number of load balancers you can specify per service, see Service Load Balancing in the Amazon EC2 Container Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2ContainerServiceServiceLoadBalancers](#amazonec2containerserviceserviceloadbalancers)|No|

##### Role
The name or ARN of an AWS Identity and Access Management (IAM) role that allows your Amazon ECS container                  agent to make calls to your load balancer.NoteIn some cases, you might need to add a dependency on the service role's                     policy. For more information, see IAM role policy in DependsOn Attribute.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. This parameter is required only if you specify the                     LoadBalancers property.|

##### TaskDefinition
The ARN of the task definition (including the revision number) that you want to                  run on the cluster, such as                     arn:aws:ecs:us-east-1:123456789012:task-definition/mytask:3.                  You can't use :latest to specify a revision because it's ambiguous.                  For example, if AWS CloudFormation needed to rollback an update, it wouldn't know which                  revision to rollback to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::ECS::TaskDefinition
#### Properties
##### ContainerDefinitions
A list of container definitions in JSON format that describe the containers            that make up your task.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions](#amazonec2containerservicetaskdefinitioncontainerdefinitions)|Yes|

##### Family
The name of a family that this task definition is registered to. A              family groups multiple versions of a task definition. Amazon ECS gives            the first task definition that you registered to a family a revision number of 1. Amazon ECS            gives sequential revision numbers to each task definition that you add.NoteTo use revision numbers when you update a task definition, specify this property.              If you don't specify a value, AWS CloudFormation generates a new task definition each time you              update it.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### NetworkMode
The Docker networking mode to use for the containers in the task, such as              none, bridge, or host. For information about            network modes, see NetworkMode in the Task Definition Parameters            topic in the Amazon EC2 Container Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### TaskRoleArn
The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that grants containers in the task permission to call AWS APIs on your behalf. For more information, see IAM Roles for Tasks in the Amazon EC2 Container Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Volumes
A list of volume definitions in JSON format for volumes that you can use in            your container definitions.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2ContainerServiceTaskDefinitionVolumes](#amazonec2containerservicetaskdefinitionvolumes)|Yes|


## EFS
### AWS::EFS::MountTarget
#### Properties
##### FileSystemId
The ID of the file system for which you want to create the mount target.Before updating this property, stop EC2 instances that are using this mount                  target, and then restart them after the update is complete. This allows the                  instances to unmount the file system before the mount target is replaced. If you                  don't stop and restart them, instances or applications that are using those mounts                  might be disrupted when the mount target is deleted (uncommitted writes might be                  lost).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### IpAddress
An IPv4 address that is within the address range of the subnet that is                  specified in the SubnetId property. If you don't specify an IP                  address, Amazon EFS automatically assigns an address that is within the range of the                  subnet.Before updating this property, stop EC2 instances that are using this mount                  target, and then restart them after the update is complete. This allows the                  instances to unmount the file system before the mount target is replaced. If you                  don't stop and restart them, instances or applications that are using those mounts                  might be disrupted when the mount target is deleted (uncommitted writes might be                  lost).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SecurityGroups
A maximum of five VPC security group IDs that are in the same VPC as the subnet                  that is specified in the SubnetId property. For more information                  about security groups and mount targets, see Security in the                     Amazon Elastic File System User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### SubnetId
The ID of the subnet in which you want to add the mount target.NoteFor each file system, you can create only one mount target per Availability                     Zone (AZ). All EC2 instances in an AZ share a single mount target for a file                     system. If you create multiple mount targets for a single file system, do not                     specify a subnet that is an AZ that already has a mount target associated with                     the same file system.Before updating this property, stop EC2 instances that are using this mount                  target and then restart them after the update is complete. That way the instances                  can unmount the file system before the mount target is replaced. If you don't stop                  and restart them, instances or applications that are using those mounts might be                  disrupted when the mount target is deleted (uncommitted writes might be                  lost).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::EFS::FileSystem
#### Properties
##### FileSystemTags
Tags to associate with the file system.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonElasticFileSystemFileSystemFileSystemTags](#amazonelasticfilesystemfilesystemfilesystemtags)|No|

##### PerformanceMode
The performance mode of the file system. For valid values, see the PerformanceMode parameter for the CreateFileSystem action in the Amazon Elastic File System User Guide.For more information about performance modes, see Amazon EFS Performance in the Amazon Elastic File System User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## EMR
### AWS::EMR::Cluster
#### Properties
##### AdditionalInfo
Additional features that you want to select.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|No|

##### Applications
The software applications to deploy on the cluster, and the arguments that Amazon EMR            passes to those applications.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEMRClusterApplication](#amazonemrclusterapplication)|No|

##### BootstrapActions
A list of bootstrap actions that Amazon EMR runs before starting applications on the            cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEMRClusterBootstrapActionConfig](#amazonemrclusterbootstrapactionconfig)|No|

##### Configurations
The software configuration of the Amazon EMR cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEMRClusterConfiguration](#amazonemrclusterconfiguration)|No|

##### Instances
Configures the EC2 instances that will run jobs in the Amazon EMR cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEMRClusterJobFlowInstancesConfig](#amazonemrclusterjobflowinstancesconfig)|Yes|

##### JobFlowRole
Also called instance profile and EC2 role.             Accepts an instance profile associated with the role that you want to use. All EC2             instances in the cluster assume this role.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### LogUri
An S3 bucket location to which Amazon EMR writes logs files from a job flow. If you don't            specify a value, Amazon EMR doesn't write any log files.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Name
A name for the Amazon EMR cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ReleaseLabel
The Amazon EMR software release label. A release is a set of software applications and            components that you can install and configure on an Amazon EMR cluster. For more information,            see About Amazon EMR Releases in the Amazon EMR Release              Guide.Currently, AWS CloudFormation supports only Amazon EMR 4.0 and later software releases.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify the Applications property, you must specify this property.|

##### ServiceRole
The IAM role that Amazon EMR assumes to access AWS resources on your behalf. For more            information, see Configure IAM Roles for Amazon EMR in the Amazon EMR Management              Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Tags
An arbitrary set of tags (key–value pairs) to help you identify the Amazon EMR            cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### VisibleToAllUsers
Indicates whether the instances in the cluster are visible to all IAM users in the            AWS account. If you specify true, all IAM users can view and (if they            have permissions) manage the instances. If you specify false, only the            IAM user that created the cluster can view and manage it. By default, AWS CloudFormation sets this            property to false.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|


### AWS::EMR::InstanceGroupConfig
#### Properties
##### BidPrice
The bid price in USD for each EC2 instance in the instance group when launching            instances (nodes) as Spot Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Configurations
A list of configurations to apply to this instance group. For more information see,              Configuring Applications in the Amazon EMR Release              Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEMRClusterConfiguration](#amazonemrclusterconfiguration)|No|

##### EbsConfiguration
Configures Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEMREbsConfiguration](#amazonemrebsconfiguration)|No|

##### InstanceCount
The number of instances to launch in the instance group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### InstanceRole
The role of the servers in the Amazon EMR cluster, such as TASK. For more            information, see Instance Groups in the Amazon EMR Management            Guide.NoteCurrently, the only valid value is TASK. You configure the master and              core instance groups as part of the AWS::EMR::Cluster resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### InstanceType
The EC2 instance type for all instances in the instance group. For more information,            see Instance Configurations in the Amazon EMR Management              Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### JobFlowId
The ID of an Amazon EMR cluster that you want to associate this instance group            with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Market
The type of marketplace from which your instances are provisioned into this group,            either ON_DEMAND or SPOT. For more information, see Amazon EC2 Purchasing Options.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Name
A name for the instance group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::EMR::Step
#### Properties
##### ActionOnFailure
The action to take if the job flow step fails. Currently, AWS CloudFormation supports CONTINUE and CANCEL_AND_WAIT. For more information, see Managing Cluster Termination in the Amazon EMR Management Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### HadoopJarStep
The JAR file that includes the main function that Amazon EMR executes.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEMRStepHadoopJarStepConfig](#amazonemrstephadoopjarstepconfig)|Yes|

##### JobFlowId
The ID of a cluster in which you want to run this job flow step.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Name
A name for the job flow step.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


## ElastiCache
### AWS::ElastiCache::SecurityGroup
#### Properties
##### Description
A description for the cache security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::ElastiCache::ParameterGroup
#### Properties
##### CacheParameterGroupFamily
The name of the cache parameter group family that the cache parameter group can be used               with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Description
The description for the Cache Parameter Group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Properties
A comma-delimited list of parameter name/value pairs. For more information, go to ModifyCacheParameterGroup in the Amazon ElastiCache API Reference                     Guide.Example:

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|


### AWS::ElastiCache::CacheCluster
#### Properties
##### AutoMinorVersionUpgrade
Indicates that minor engine upgrades will be applied automatically to the cache                  cluster during the maintenance window.Default: true

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### AZMode
For Memcached cache clusters, indicates whether the nodes are created in a                  single Availability Zone or across multiple Availability Zones in the cluster's                  region. For valid values, see CreateCacheCluster in                  the Amazon ElastiCache API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify multiple Availability Zones in the                     PreferredAvailabilityZones property, you must specify cross                  Availability Zones for this property.|

##### CacheNodeType
The compute and memory capacity of nodes in a cache cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### CacheParameterGroupName
The name of the cache parameter group that is associated with this cache                  cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### CacheSecurityGroupNames
A list of cache security group names that are associated with this cache                  cluster. If your cache cluster is in a VPC, specify the                     VpcSecurityGroupIds property instead.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional: If your cache cluster isn't in a VPC, you must specify                  this property.|

##### CacheSubnetGroupName
The cache subnet group that you associate with a cache cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specified the VpcSecurityGroupIds property, you must specify this property.|

##### ClusterName
A name for the cache cluster. If you don't specify a name, AWS CloudFormation generates a                  unique physical ID and uses that ID for the cache cluster. For more information,                  see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.The name must contain 1 to 20 alphanumeric characters or hyphens. The name must                  start with a letter and cannot end with a hyphen or contain two consecutive                  hyphens.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Engine
The name of the cache engine to be used for this cache cluster, such as                     memcached or redis.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### EngineVersion
The version of the cache engine to be used for this cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### NotificationTopicArn
The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS)                  topic to which notifications will be sent.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### NumCacheNodes
The number of cache nodes that the cache cluster should have.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### Port
The port number on which each of the cache nodes will accept                  connections.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### PreferredAvailabilityZone
The Amazon EC2 Availability Zone in which the cache cluster is created.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PreferredAvailabilityZones
For Memcached cache clusters, the list of Availability Zones in which cache                  nodes are created. The number of Availability Zones listed must equal the number                  of cache nodes. For example, if you want to create three nodes in two different                  Availability Zones, you can specify ["us-east-1a", "us-east-1a",                     "us-east-1b"], which would create two nodes in us-east-1a and one node                  in us-east-1b.If you specify a subnet group and you're creating your cache cluster in a VPC,                  you must specify Availability Zones that are associated with the subnets in the                  subnet group that you've chosen.If you want all the nodes in the same Availability Zone, use the                     PreferredAvailabilityZone property or repeat the Availability Zone                  multiple times in the list.If you specify an Availability Zone that was previously specified in the                  template, such as in the PreferredAvailabilityZone property, the                  update requires some interruptions.                  Also, if the PreferredAvailabilityZones property was already                  specified and you're updating its values (regardless of whether you specify the                  same Availability Zones), the update requires some interruptions.All other updates require replacement.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### PreferredMaintenanceWindow
The weekly time range (in UTC) during which system maintenance can                  occur.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SnapshotArns
The ARN of the snapshot file that you want to use to seed a new Redis cache                  cluster. If you manage a Redis instance outside of Amazon ElastiCache, you can create a new                  cache cluster in ElastiCache by using a snapshot file that is stored in an Amazon S3                  bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### SnapshotName
The name of a snapshot from which to restore data into a new Redis cache                  cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SnapshotRetentionLimit
For Redis cache clusters, the number of days for which ElastiCache retains automatic                  snapshots before deleting them. For example, if you set the value to                     5, a snapshot that was taken today will be retained for 5 days                  before being deleted.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### SnapshotWindow
For Redis cache clusters, the daily time range (in UTC) during which ElastiCache will                  begin taking a daily snapshot of your node group. For example, you can specify                     05:00-09:00.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tags
An arbitrary set of tags (key–value pairs) for this cache                  cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### VpcSecurityGroupIds
A list of VPC security group IDs. If your cache cluster isn't in a VPC, specify                  the CacheSecurityGroupNames property instead.NoteYou must use the AWS::EC2::SecurityGroup resource instead of                        the AWS::ElastiCache::SecurityGroup resource in order to                        specify an ElastiCache security group that is in a VPC. In addition, if you use                        the default VPC for your                        AWS account, you must use the Fn::GetAtt function and the                           GroupId attribute to retrieve security group IDs (instead of                        the Ref function). To see a sample template, see the Template                        Snippet section.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional: If your cache cluster is in a VPC, you must specify                  this property.|


### AWS::ElastiCache::SecurityGroupIngress
#### Properties
##### CacheSecurityGroupName
The name of the Cache Security Group to authorize.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### EC2SecurityGroupName
Name of the EC2 Security Group to include in the authorization.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### EC2SecurityGroupOwnerId
Specifies the AWS Account ID of the owner of the EC2 security group specified                  in the EC2SecurityGroupName property. The AWS access key ID is not an acceptable                  value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::ElastiCache::SubnetGroup
#### Properties
##### CacheSubnetGroupName
A name for the cache subnet group. If you don't specify a name, AWS CloudFormation generates                  a unique physical ID. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Description
The description for the cache subnet group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SubnetIds
The Amazon EC2 subnet IDs for the cache subnet group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::ElastiCache::ReplicationGroup
#### Properties
##### AutomaticFailoverEnabled
Indicates whether Multi-AZ is enabled. When Multi-AZ is enabled, a read-only                  replica is automatically promoted to a read-write primary cluster if the existing                  primary cluster fails. If you specify true, you must specify a value                  greater than 1 for the NumCacheClusters property. By                  default, AWS CloudFormation sets the value to true.For Redis (clustered mode enabled) replication groups, you must enable automatic failover.For information about Multi-AZ constraints, see Replication with Multi-AZ and Automatic                     Failover (Redis) in the Amazon ElastiCache User Guide.NoteYou cannot enable automatic failover for Redis versions earlier than 2.8.6                     or for T1 and T2 cache node types.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### AutoMinorVersionUpgrade
Currently, this property isn't used by ElastiCache.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### CacheNodeType
The compute and memory capacity of nodes in the node group. To see valid                  values, see CreateReplicationGroup in the Amazon ElastiCache API                     Reference Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### CacheParameterGroupName
The name of the parameter group to associate with this replication group. For                  valid and default values, see CreateReplicationGroup in the Amazon ElastiCache API                     Reference Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### CacheSecurityGroupNames
A list of cache security group names to associate with this replication                  group.ImportantIf you specify the CacheSecurityGroupNames property, don't also                     specify the SecurityGroupIds property.The SecurityGroupIds property is only for Amazon Virtual Private Cloud (Amazon VPC)                     security groups. If you specify an Amazon VPC security group, the deployment will                     fail.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### CacheSubnetGroupName
The name of a cache subnet group to use for this replication group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Engine
The name of the cache engine to use for the cache clusters in this replication                  group. Currently, you can specify only redis.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### EngineVersion
The version number of the cache engine to use for the cache clusters in this                  replication group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### NodeGroupConfiguration
Configuration options for the node group (shard).

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonElastiCacheReplicationGroupNodeGroupConfiguration](#amazonelasticachereplicationgroupnodegroupconfiguration)|No|

##### NotificationTopicArn
The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic to which notifications are                  sent.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### NumCacheClusters
The number of cache clusters for this replication group. If automatic failover                  is enabled, you must specify a value greater than 1. For valid                  values, see CreateReplicationGroup in the Amazon ElastiCache API                     Reference Guide.If you specify more than one node group (shard), this property is ignored. Use                  the ReplicasPerNodeGroup property instead.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### NumNodeGroups
The number of node groups (shards) for this Redis (clustered mode enabled) replication group.                  For Redis (clustered mode disabled), omit this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Port
The port number on which each member of the replication group accepts                  connections.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### PreferredCacheClusterAZs
A list of Availability Zones (AZs) in which the cache clusters in this                  replication group are created.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### PreferredMaintenanceWindow
The weekly time range during which system maintenance can occur. Use the                  following format to specify a time range: ddd:hh24:mi-ddd:hh24:mi                  (24H Clock UTC). For example, you can specify sun:22:00-sun:23:30 for                  Sunday from 10 PM to 11:30 PM.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PrimaryClusterId
The cache cluster that ElastiCache uses as the primary cluster for the replication                  group. The cache cluster must have a status of available.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. This property is optional if you specify the                     NumCacheClusters, NumNodeGroups, or the                     ReplicasPerNodeGroup property.|

##### ReplicasPerNodeGroup
The number of replica nodes in each node group (shard). For valid values, see                     CreateReplicationGroup in the Amazon ElastiCache API                     Reference Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### ReplicationGroupDescription
The description of the replication group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ReplicationGroupId
An ID for the replication group. If you don't specify an ID, AWS CloudFormation generates a                  unique physical ID. For more information, see Name Type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SecurityGroupIds
A list of Amazon Virtual Private Cloud (Amazon VPC) security groups to associate with this replication                  group.ImportantIf you specify the SecurityGroupIds property, don't also                     specify the CacheSecurityGroupNames property.The CacheSecurityGroupNames property is only for EC2-Classic                     security groups. If you specify an EC2-Classic security group, the deployment                     will fail.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### SnapshotArns
A single-element string list that specifies an ARN of a Redis                     .rdb snapshot file that is stored in Amazon Simple Storage Service (Amazon S3). The                  snapshot file populates the node group. The Amazon S3 object name in the ARN cannot                  contain commas. For example, you can specify                     arn:aws:s3:::my_bucket/snapshot1.rdb.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### SnapshotName
The name of a snapshot from which to restore data into the replication                  group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SnapshotRetentionLimit
The number of days that ElastiCache retains automatic snapshots before deleting                  them.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### SnapshottingClusterId
The ID of the cache cluster that ElastiCache uses as the daily snapshot source for                  the replication group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SnapshotWindow
The time range (in UTC) when ElastiCache takes a daily snapshot of your node group                  that you specified in the SnapshottingClusterId property. For                  example, you can specify 05:00-09:00.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tags
An arbitrary set of tags (key–value pairs) for this replication                  group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


## ElasticBeanstalk
### AWS::ElasticBeanstalk::Environment
#### Properties
##### ApplicationName
The name of the application that is associated with this environment.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### CNAMEPrefix
A prefix for your Elastic Beanstalk environment URL.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Description
A description that helps you identify this environment.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EnvironmentName
A name for the Elastic Beanstalk environment. If you don't specify a name, AWS CloudFormation generates                  a unique physical ID and uses that ID for the environment name. For more                  information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### OptionSettings
Key-value pairs defining configuration options for this environment, such as                  the instance type. These options override the values that are defined in the                  solution stack or the configuration template. If you remove any options during a stack                  update, the removed options revert to default values.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticBeanstalkOptionSettingsPropertyType](#elasticbeanstalkoptionsettingspropertytype)|No|

##### SolutionStackName
The name of an Elastic Beanstalk solution stack that this configuration will use. For more                  information, see Supported                     Platforms in the AWS Elastic Beanstalk Developer Guide. You must                  specify either this parameter or an Elastic Beanstalk configuration template name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tags
An arbitrary set of tags (key–value pairs) for this environment.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### TemplateName
The name of the Elastic Beanstalk configuration template to use with the environment. You                  must specify either this parameter or a solution stack name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tier
Specifies the tier to use in creating this environment. The environment tier                  that you choose determines whether Elastic Beanstalk provisions resources to support a web                  application that handles HTTP(S) requests or a web application that handles                  background-processing tasks.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[ElasticBeanstalkEnvironmentTierPropertyType](#elasticbeanstalkenvironmenttierpropertytype)|No|

##### VersionLabel
The version to associate with the environment.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::ElasticBeanstalk::Application
#### Properties
##### ApplicationName
A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates                  a unique physical ID and uses that ID for the application name. For more                  information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Description
An optional description of this application.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::ElasticBeanstalk::ApplicationVersion
#### Properties
##### ApplicationName
Name of the Elastic Beanstalk application that is associated with this application                  version.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Description
A description of this application version.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SourceBundle
The location of the source bundle for this version.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[ElasticBeanstalkSourceBundlePropertyType](#elasticbeanstalksourcebundlepropertytype)|Yes|


### AWS::ElasticBeanstalk::ConfigurationTemplate
#### Properties
##### ApplicationName
Name of the Elastic Beanstalk application that is associated with this configuration                  template.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Description
An optional description for this configuration.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EnvironmentId
An environment whose settings you want to use to create the configuration                  template. You must specify this property if you don't specify the                     SolutionStackName or SourceConfiguration                  properties.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### OptionSettings
A list of                      OptionSettings for this Elastic Beanstalk configuration, such as the                  instance type. For a complete list of Elastic Beanstalk configuration options, see                                          Option Values, in the AWS Elastic Beanstalk Developer                     Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticBeanstalkOptionSettingsPropertyType](#elasticbeanstalkoptionsettingspropertytype)|No|

##### SolutionStackName
The name of an Elastic Beanstalk solution stack that this configuration will use. A                  solution stack specifies the operating system, architecture, and application                  server for a configuration template, such as 64bit Amazon Linux 2013.09                     running Tomcat 7 Java 7. For more information, see Supported Platforms in the                     AWS Elastic Beanstalk Developer Guide.You must specify this property if you don't specify the                     EnvironmentId or SourceConfiguration                  properties.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### SourceConfiguration
A configuration template that is associated with another Elastic Beanstalk application. If                  you specify the SolutionStackName property and the                     SourceConfiguration property, the solution stack in the source                  configuration template must match the value that you specified for the                     SolutionStackName property.You must specify this property if you don't specify the                     EnvironmentId or SolutionStackName properties.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[ElasticBeanstalkSourceConfigurationPropertyType](#elasticbeanstalksourceconfigurationpropertytype)|Conditional|


## ElasticLoadBalancing
### AWS::ElasticLoadBalancing::LoadBalancer
#### Properties
##### AccessLoggingPolicy
Captures detailed information for all requests made to your load balancer, such                  as the time a request was received, client’s IP address, latencies, request path,                  and server responses.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[ElasticLoadBalancingAccessLoggingPolicy](#elasticloadbalancingaccessloggingpolicy)|No|

##### AppCookieStickinessPolicy
Generates one or more stickiness policies with sticky session lifetimes that                  follow that of an application-generated cookie. These policies can be associated                  only with HTTP/HTTPS listeners.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingAppCookieStickinessPolicyType](#elasticloadbalancingappcookiestickinesspolicytype)|No|

##### AvailabilityZones
The Availability Zones in which to create the load balancer. You can specify                  the AvailabilityZones or Subnets property, but not                  both.NoteFor load balancers that are in a VPC, specify the Subnets                     property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### ConnectionDrainingPolicy
Whether deregistered or unhealthy instances can complete all in-flight                  requests.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[ElasticLoadBalancingConnectionDrainingPolicy](#elasticloadbalancingconnectiondrainingpolicy)|No|

##### ConnectionSettings
Specifies how long front-end and back-end connections of your load balancer can                  remain idle.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[ElasticLoadBalancingConnectionSettings](#elasticloadbalancingconnectionsettings)|No|

##### CrossZone
Whether cross-zone load balancing is enabled for the load balancer. With                  cross-zone load balancing, your load balancer nodes route traffic to the back-end                  instances across all Availability Zones. By default the CrossZone                  property is false.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### HealthCheck
Application health check for the instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[ElasticLoadBalancingHealthCheckType](#elasticloadbalancinghealthchecktype)|No|

##### Instances
A list of EC2 instance IDs for the load balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### LBCookieStickinessPolicy
Generates a stickiness policy with sticky session lifetimes controlled by the                  lifetime of the browser (user-agent), or by a specified expiration period. This                  policy can be associated only with HTTP/HTTPS listeners.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingLBCookieStickinessPolicyType](#elasticloadbalancinglbcookiestickinesspolicytype)|No|

##### LoadBalancerName
A name for the load balancer. For valid values, see the LoadBalancerName parameter for the CreateLoadBalancer action in the Elastic Load Balancing API Reference version 2012-06-01.If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the load balancer. The name must be unique within your set of load balancers. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Listeners
One or more listeners for this load balancer. Each listener must be registered                  for a specific port, and you cannot have more than one listener for a given                  port.ImportantIf you update the property values for a listener specified by the                        Listeners property, AWS CloudFormation will delete the existing listener and                     create a new one with the updated properties. During the time that AWS CloudFormation is                     performing this action, clients will not be able to connect to the load                     balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingListenerPropertyType](#elasticloadbalancinglistenerpropertytype)|Yes|

##### Policies
A list of elastic load balancing policies to apply to this elastic load balancer. Specify only back-end server policies. For more information, see DescribeLoadBalancerPolicyTypes in the Elastic Load Balancing API Reference version 2012-06-01.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingPolicyType](#elasticloadbalancingpolicytype)|No|

##### Scheme
For load balancers attached to an Amazon VPC, this parameter can be used to                  specify the type of load balancer to use. Specify internal to create                  an internal load balancer with a DNS name that resolves to private IP addresses or                     internet-facing to create a load balancer with a publicly                  resolvable DNS name, which resolves to public IP addresses.NoteIf you specify internal, you must specify subnets to                        associate with the load balancer, not Availability Zones.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SecurityGroups


| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Subnets
A list of subnet IDs in your virtual private cloud (VPC) to attach to your load                  balancer. Do not specify multiple subnets that are in the same Availability Zone.                  You can specify the AvailabilityZones or Subnets                  property, but not both.For more information about using Elastic Load Balancing in a VPC, see How Do I Use Elastic Load Balancing in Amazon VPC in the                     Elastic Load Balancing Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Tags
An arbitrary set of tags (key-value pairs) for this load balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


## ElasticLoadBalancingV2
### AWS::ElasticLoadBalancingV2::ListenerRule
#### Properties
##### Actions
The action that the listener takes when a request meets the specified condition.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingListenerRuleActions](#elasticloadbalancinglistenerruleactions)|Yes|

##### Conditions
The conditions under which a rule takes effect.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingListenerRuleConditions](#elasticloadbalancinglistenerruleconditions)|Yes|

##### ListenerArn
The Amazon Resource Name (ARN) of the listener that the rule applies to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Priority
The priority for the rule. Elastic Load Balancing evaluates rules in priority order, from the lowest value to the highest value. If a request satisfies a rule, Elastic Load Balancing ignores all subsequent rules.NoteA target group can have only one rule with a given priority.For valid values, see the Priority parameter for the CreateRule action in the Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AWS::ElasticLoadBalancingV2::Listener
#### Properties
##### Certificates
The SSL server certificate for the listener. With a certificate, you can encrypt traffic between the load balancer and the clients that initiate HTTPS sessions, and traffic between the load balancer and your targets.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingListenerCertificates](#elasticloadbalancinglistenercertificates)|Conditional. If you specify HTTPS for the Protocol property, specify a certificate.|

##### DefaultActions
The default actions that the listener takes when handling incoming requests.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingListenerDefaultActions](#elasticloadbalancinglistenerdefaultactions)|Yes|

##### LoadBalancerArn
The Amazon Resource Name (ARN) of the load balancer to associate with the listener.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Port
The port on which the listener listens for requests.For valid values, see the Port parameter for the CreateListener action in the Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### Protocol
The protocol that clients must use to send requests to the listener.For valid values, see the Protocol parameter for the CreateListener action in the Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SslPolicy
The security policy that defines the ciphers and protocols that the load balancer supports.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::ElasticLoadBalancingV2::LoadBalancer
#### Properties
##### LoadBalancerAttributes
Specifies the load balancer configuration.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingLoadBalancerLoadBalancerAttributes](#elasticloadbalancingloadbalancerloadbalancerattributes)|No|

##### Name
Specifies a name for the load balancer. This name must be unique within your AWS            account and can have a maximum of 32 alphanumeric characters and hyphens. A name can't            begin or end with a hyphen.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Scheme
Specifies whether the load balancer is internal or Internet-facing. An internal load            balancer routes requests to targets using private IP addresses. An Internet-facing load            balancer routes requests from clients over the Internet to targets in your public            subnets.For valid and default values, see the Scheme parameter for the                CreateLoadBalancer action in the              Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SecurityGroups
Specifies a list of the IDs of the security groups to assign to the load            balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Subnets
Specifies a list of at least two IDs of the subnets to associate with the load            balancer. The subnets must be in different Availability Zones.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### Tags
Specifies an arbitrary set of tags (key–value pairs) to associate with this            load balancer. Use tags to manage your resources.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


### AWS::ElasticLoadBalancingV2::TargetGroup
#### Properties
##### HealthCheckIntervalSeconds
The approximate number of seconds between health checks for an individual target.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### HealthCheckPath
The ping path destination where Elastic Load Balancing sends health check requests.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HealthCheckPort
The port that the load balancer uses when performing health checks on the targets.For valid and default values, see the HealthCheckPort parameter for the CreateTargetGroup action in the Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HealthCheckProtocol
The protocol that the load balancer uses when performing health checks on the targets, such as HTTP or HTTPS.For valid and default values, see the HealthCheckProtocol parameter for the CreateTargetGroup action in the Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HealthCheckTimeoutSeconds
The number of seconds to wait for a response before considering that a health check has failed.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### HealthyThresholdCount
The number of consecutive successful health checks that are required before an unhealthy target is considered healthy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Matcher
The HTTP codes that a healthy target uses when responding to a health check.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[ElasticLoadBalancingTargetGroupMatcher](#elasticloadbalancingtargetgroupmatcher)|No|

##### Name
A name for the target group.ImportantThe target group name should be shorter than 22 characters because AWS CloudFormation uses the target group name to create the name of the load balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Port
The port on which the targets receive traffic.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### Protocol
The protocol to use for routing traffic to the targets.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Tags
An arbitrary set of tags (key–value pairs) for the target group. Use tags to help manage resources.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### TargetGroupAttributes
Target group configurations.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingTargetGroupTargetGroupAttributes](#elasticloadbalancingtargetgrouptargetgroupattributes)|No|

##### TargetGroupFullName
The full name of the target group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Targets
The targets to add to this target group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ElasticLoadBalancingTargetGroupTargetDescription](#elasticloadbalancingtargetgrouptargetdescription)|No|

##### UnhealthyThresholdCount
The number of consecutive failed health checks that are required before a target is considered unhealthy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### VpcId
The ID of the VPC in which your targets are located.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


## Elasticsearch
### AWS::Elasticsearch::Domain
#### Properties
##### AccessPolicies
An AWS Identity and Access Management (IAM) policy document that specifies who can access the Amazon ES            domain and their permissions. For more information, see Configuring Access Policies in the            Amazon Elasticsearch Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|No|

##### AdvancedOptions
Additional options to specify for the Amazon ES domain. For more information, see              Configuring Advanced Options in the            Amazon Elasticsearch Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### DomainName
A name for the Amazon ES domain. For valid values, see the DomainName data type in the Amazon Elasticsearch Service Developer Guide.If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the domain name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EBSOptions
The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in            the Amazon ES domain. For more information, see Configuring EBS-based Storage in the            Amazon Elasticsearch Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonElasticsearchServiceDomainEBSOptions](#amazonelasticsearchservicedomainebsoptions)|No|

##### ElasticsearchClusterConfig
The cluster configuration for the  Amazon ES domain. You can specify options such as            the instance type and the number of instances. For more information, see Configuring Amazon ES Domains in the            Amazon Elasticsearch Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonElasticsearchServiceDomainElasticsearchClusterConfig](#amazonelasticsearchservicedomainelasticsearchclusterconfig)|No|

##### ElasticsearchVersion
The version of Elasticsearch to use, such as 2.3. For information about the versions that Amazon ES supports, see the Elasticsearch-Version parameter for the CreateElasticsearchDomain action in the Amazon Elasticsearch Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SnapshotOptions
The automated snapshot configuration for the Amazon ES domain indices.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonElasticsearchServiceDomainSnapshotOptions](#amazonelasticsearchservicedomainsnapshotoptions)|No|

##### Tags
An arbitrary set of tags (key–value pairs) to associate with the Amazon ES            domain.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


## Events
### AWS::Events::Rule
#### Properties
##### Description
A description of the rule's purpose.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EventPattern
Describes which events CloudWatch Events routes to the specified target. These routed events are matched events. For more information, see Events and Event Patterns in the Amazon CloudWatch User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Conditional. You must specify this property, the ScheduleExpression property, or both.|

##### Name
A name for the rule. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RoleArn
The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants CloudWatch Events permission to make calls to target services, such as AWS Lambda (Lambda) or Amazon Kinesis streams.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ScheduleExpression
The schedule or rate (frequency) that determines when CloudWatch Events runs the rule. For more information, see Schedule Expression Syntax for Rules in the Amazon CloudWatch User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify this property, the EventPattern property, or both.|

##### State
Indicates whether the rule is enabled. For valid values, see the State parameter for the PutRule action in the Amazon CloudWatch Events API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Targets
The resources, such as Lambda functions or Amazon Kinesis streams, that CloudWatch Events routes events to            and invokes when the rule is triggered. For information about valid targets, see the              PutTargets action in the              Amazon CloudWatch Events API Reference.NoteCreating rules with built-in targets is supported only in the AWS Management              Console.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonCloudWatchEventsRuleTarget](#amazoncloudwatcheventsruletarget)|No|


## GameLift
### AWS::GameLift::Alias
#### Properties
##### Description
Information that helps you identify the purpose of this alias.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Name
An identifier to associate with this alias. Alias names don't need to be            unique.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoutingStrategy
A routing configuration that specifies where traffic is directed for this alias,            such as to a fleet or to a message.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonGameLiftAliasRoutingStrategy](#amazongameliftaliasroutingstrategy)|Yes|


### AWS::GameLift::Build
#### Properties
##### Name
An identifier to associate with this build. Build names don't need to be            unique.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### StorageLocation
The Amazon Simple Storage Service (Amazon S3) location where your build package files are located.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonGameLiftBuildStorageLocation](#amazongameliftbuildstoragelocation)|No, but we recommend that you specify a location. If you don't specify            this property, you must manually upload your build package files to GameLift.|

##### Version
A version to associate with this build. Version is useful if you want to track            updates to your build package files. Versions don't need to be unique.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::GameLift::Fleet
#### Properties
##### BuildId
The unique identifier for the build that you want to use with this fleet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Description
Information that helps you identify the purpose of this fleet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DesiredEC2Instances
The number of EC2 instances that you want in this fleet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### EC2InboundPermissions
The incoming traffic, expressed as IP ranges and port numbers, that is permitted to            access the game server. If you don't specify values, no traffic is permitted to your            game servers.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonGameLiftFleetEC2InboundPermission](#amazongameliftfleetec2inboundpermission)|No|

##### EC2InstanceType
The type of EC2 instances that the fleet uses. EC2 instance types define the CPU,            memory, storage, and networking capacity of the fleet's hosts. For more information            about the instance types that are supported by GameLift, see the EC2InstanceType parameter in the            Amazon GameLift API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### LogPaths
The path to game-session log files that are generated by your game server, with the            slashes (\) escaped. After a game session has been terminated, GameLift            captures and stores the logs in an S3 bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### MaxSize
The maximum number of EC2 instances that you want to allow in this fleet. By default, AWS CloudFormation, sets this property to 1.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### MinSize
The minimum number of EC2 instances that you want to allow in this fleet. By default, AWS CloudFormation, sets this property to 0.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Name
An identifier to associate with this fleet. Fleet names don't need to be            unique.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ServerLaunchParameters
The parameters that are required to launch your game server. Specify these            parameters as a string of command-line parameters, such as +sv_port 33435              +start_lobby.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ServerLaunchPath
The location of your game server that GameLift launches. You must escape the slashes              (\) and use the following pattern:                C:\\game\\launchpath. For example,            if your game server files are in the MyGame folder, the path should be              C:\\game\\MyGame\\server.exe.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


## IAM
### AWS::IAM::AccessKey
#### Properties
##### Serial
This value is specific to AWS CloudFormation and can only be incremented. Incrementing this                  value notifies AWS CloudFormation that you want to rotate your access key. When you update your stack, AWS CloudFormation will                  replace the existing access key with a new key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Status
The status of the access key. By default, AWS CloudFormation sets this property value to                     Active.Valid values:                  Active or Inactive

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### UserName
The name of the user that the new key will belong to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::IAM::UserToGroupAddition
#### Properties
##### GroupName
The name of group to add users to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Users


| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|


### AWS::IAM::Group
#### Properties
##### GroupName
A name for the IAM group. For valid values, see the GroupName parameter for the CreateGroup action in the IAM API Reference. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the group name.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.WarningNaming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple regions. To prevent this, we recommend using Fn::Join and AWS::Region to create a region-specific name, as in the following example: {"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ManagedPolicyArns
One or more managed policy ARNs to attach to this group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Path
The path to the group. For more information about paths, see IAM Identifiers in the IAM User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Policies
The policies to associate with this group. For information about policies, see Overview of IAM Policies in the IAM User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[IAMPolicies](#iampolicies)|No|


### AWS::IAM::User
#### Properties
##### Groups
A name of a group to which you want to add the user.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### LoginProfile
Creates a login profile so that the user can access the AWS Management Console.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[IAMUserLoginProfile](#iamuserloginprofile)|No|

##### ManagedPolicyArns
One or more managed policy ARNs to attach to this user.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Path
The path for the user name. For more information about paths, see IAM Identifiers in the IAM User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Policies
The policies to associate with this user. For information about policies, see Overview of IAM Policies in the IAM User Guide.NoteIf you specify multiple polices, specify unique values for the policy name.                     If you don't, updates to the IAM user will fail.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[IAMPolicies](#iampolicies)|No|

##### UserName
A name for the IAM user. For valid values, see the UserName parameter for the CreateUser action in the IAM API Reference. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the user name.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.WarningNaming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple regions. To prevent this, we recommend using Fn::Join and AWS::Region to create a region-specific name, as in the following example: {"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::IAM::InstanceProfile
#### Properties
##### Path
The path associated with this IAM instance profile. For information about IAM paths, see Friendly Names and Paths in the AWS Identity and Access Management User                     Guide.By default, AWS CloudFormation specifies / for the path.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Roles
The name of an existing IAM role to associate with this instance profile.                  Currently, a maximum of one role can be assigned to an instance profile.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|


### AWS::IAM::Policy
#### Properties
##### Groups
The names of groups to which you want to add the policy.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. You must specify at least one of the following                  properties: Groups, Roles, or Users.|

##### PolicyDocument
A policy document that contains permissions to add to the specified users or                  groups.NoteAWS Identity and Access Management (IAM) requires that policies be in JSON format.However, for templates formatted in YAML, you can create an IAM policy in either JSON or YAML format. AWS CloudFormation always converts a policy to JSON format before submitting it to IAM.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|

##### PolicyName
The name of the policy. If you specify multiple policies for an entity, specify                  unique names. For example, if you specify a list of policies for an IAM role,                  each policy must have a unique name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Roles
The names of AWS::IAM::Roles to                  attach to this policy.NoteIf a policy has a Ref to a role and if a resource (such as                        AWS::ECS::Service) also has a Ref to the same                     role, add a DependsOn attribute to the resource so that the                     resource depends on the policy. This dependency ensures that the role's policy                     is available throughout the resource's lifecycle. For example, when you delete                     a stack with an AWS::ECS::Service resource, the                        DependsOn attribute ensures that the                        AWS::ECS::Service resource can complete its deletion before its                     role's policy is deleted.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. You must specify at least one of the following                  properties: Groups, Roles, or Users.|

##### Users
The names of users for whom you want to add the policy.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. You must specify at least one of the following                  properties: Groups, Roles, or Users.|


### AWS::IAM::ManagedPolicy
#### Properties
##### Description
A description of the policy. For example, you can describe the permissions that                  are defined in the policy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Groups
The names of groups to attach to this policy.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Path
The path for the policy. By default, the path is /. For more                  information, see IAM                     Identifiers in the IAM User Guide                  guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PolicyDocument
Policies that define the permissions for this managed policy. For more                  information about policy syntax, see IAM Policy Elements Reference in                     IAM User Guide.NoteAWS Identity and Access Management (IAM) requires that policies be in JSON format.However, for templates formatted in YAML, you can create an IAM policy in either JSON or YAML format. AWS CloudFormation always converts a policy to JSON format before submitting it to IAM.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|

##### Roles
The names of roles to attach to this policy.NoteIf a policy has a Ref to a role and if a resource (such as                        AWS::ECS::Service) also has a Ref to the same                     role, add a DependsOn attribute to the resource so that the                     resource depends on the policy. This dependency ensures that the role's policy                     is available throughout the resource's lifecycle. For example, when you delete                     a stack with an AWS::ECS::Service resource, the                        DependsOn attribute ensures that the                        AWS::ECS::Service resource can complete its deletion before its                     role's policy is deleted.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Users
The names of users to attach to this policy.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AWS::IAM::Role
#### Properties
##### AssumeRolePolicyDocument
The trust policy that is associated with this role.NoteAWS Identity and Access Management (IAM) requires that policies be in JSON format.However, for templates formatted in YAML, you can create an IAM policy in either JSON or YAML format. AWS CloudFormation always converts a policy to JSON format before submitting it to IAM.NoteYou can associate only one assume role policy with a role. For an example of                     an assume role policy, see Template Examples.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|

##### ManagedPolicyArns
One or more managed policy ARNs to attach to this role.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Path
The path associated with this role. For information about IAM paths, see                     Friendly Names and Paths in                  IAM User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Policies
The policies to associate with this role. For sample templates, see Template Examples.ImportantThe name of each policy for a role, user, or group must be unique. If you don't, updates to the IAM role will fail.NoteIf an external policy (such as AWS::IAM::Policy or AWS::IAM::ManagedPolicy) has a Ref to a role and if a resource (such as AWS::ECS::Service) also has a Ref to the same role, add a DependsOn attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a                     stack with an AWS::ECS::Service resource, the DependsOn attribute ensures that AWS CloudFormation deletes the AWS::ECS::Service resource  before deleting its role's policy.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[IAMPolicies](#iampolicies)|No|

##### RoleName
A name for the IAM role. For valid values, see the RoleName parameter for the CreateRole action in the IAM API Reference. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the group name.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to acknowledge your template's capabilities. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.WarningNaming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple regions. To prevent this, we recommend using Fn::Join and AWS::Region to create a region-specific name, as in the following example: {"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## IoT
### AWS::IoT::Certificate
#### Properties
##### CertificateSigningRequest
The certificate signing request (CSR).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Status
The status of the certificate.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::IoT::Policy
#### Properties
##### PolicyDocument
The JSON document that describes the policy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|

##### PolicyName
The name (the physical ID) of the AWS IoT policy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::IoT::TopicRule
#### Properties
##### RuleName
The name (the physical ID) of the AWS IoT rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### TopicRulePayload
The actions associated with the AWS IoT rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTTopicRulePayload](#awsiottopicrulepayload)|Yes|


### AWS::IoT::PolicyPrincipalAttachment
#### Properties
##### PolicyName
The name of the policy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Principal
The principal, which can be a certificate ARN (as returned from the                     CreateCertificate operation) or an Amazon Cognito ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::IoT::ThingPrincipalAttachment
#### Properties
##### Principal
The principal, which can be a certificate ARN (as returned from the                     CreateCertificate operation) or an Amazon Cognito ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ThingName
The name of the AWS IoT thing.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::IoT::Thing
#### Properties
##### AttributePayload
A JSON string that contains up to three key-value pairs, for example: {                     "attributes": { "string1":"string2" } }.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### ThingName
The name (the physical ID) of the AWS IoT thing.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## KMS
### AWS::KMS::Alias
#### Properties
##### AliasName
The name of the alias. The name must start with alias followed by a forward slash, such as alias/. You can't specify aliases that begin with alias/AWS. These aliases are reserved.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TargetKeyId
The ID of the key for which you are creating the alias. Specify the key's globally unique identifier or Amazon Resource Name (ARN). You can't specify another alias.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::KMS::Key
#### Properties
##### Description
A description of the key. Use a description that helps your users decide                  whether the key is appropriate for a particular task.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Enabled
Indicates whether the key is available for use. AWS CloudFormation sets this value to              true by default.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### EnableKeyRotation
Indicates whether AWS KMS rotates the key. AWS CloudFormation sets this value to                     false by default.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### KeyPolicy
An AWS KMS key policy to attach to the key. Use a policy to specify who has permission to use the key and which actions they can perform. For more information, see Key Policies in the AWS Key Management Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|


## Kinesis
### AWS::Kinesis::Stream
#### Properties
##### Name
The name of the Amazon Kinesis stream. If you don't specify a name, AWS CloudFormation generates a unique physical                   ID and uses that ID for the stream name. For more information, see                   Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ShardCount
The number of shards that the stream uses. For greater provisioned throughput,                  increase the number of shards.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### Tags
An arbitrary set of tags (key–value pairs) to associate with the Amazon Kinesis                  stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


## KinesisFirehose
### AWS::KinesisFirehose::DeliveryStream
#### Properties
##### DeliveryStreamName
A name for the delivery stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ElasticsearchDestinationConfiguration
An Amazon ES destination for the delivery stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration](#amazonkinesisfirehosedeliverystreamelasticsearchdestinationconfiguration)|Conditional. You must specify only one destination configuration.|

##### RedshiftDestinationConfiguration
An Amazon Redshift destination for the delivery stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration](#amazonkinesisfirehosedeliverystreamredshiftdestinationconfiguration)|Conditional. You must specify only one destination configuration.|

##### S3DestinationConfiguration
An Amazon S3 destination for the delivery stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration](#amazonkinesisfirehosedeliverystreams3destinationconfiguration)|Conditional. You must specify only one destination configuration.|


## Lambda
### AWS::Lambda::Alias
#### Properties
##### Description
Information about the alias, such as its purpose or the Lambda function that is associated with it.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### FunctionName
The Lambda function that you want to associate with this alias. You can specify the function's name or its Amazon Resource Name (ARN).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### FunctionVersion
The version of the Lambda function that you want to associate with this alias.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Name
A name for the alias.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::Lambda::EventSourceMapping
#### Properties
##### BatchSize
The largest number of records that Lambda retrieves from your event source when                  invoking your function. Your function receives an event with all the retrieved                  records. For the default and valid values, see CreateEventSourceMapping in the                  AWS Lambda Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Enabled
Indicates whether Lambda begins polling the event source.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### EventSourceArn
The Amazon Resource Name (ARN) of the Amazon Kinesis or DynamoDB stream that is the source                  of events. Any record added to this stream can invoke the Lambda function. For more                  information, see CreateEventSourceMapping in the                  AWS Lambda Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### FunctionName
The name or ARN of a Lambda function to invoke when Lambda detects an event on                  the stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StartingPosition
The position in the stream where Lambda starts reading. For valid values, see                     CreateEventSourceMapping in the                  AWS Lambda Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::Lambda::Function
#### Properties
##### Code
The source code of your Lambda function. You can point to a file in an Amazon Simple Storage Service            (Amazon S3) bucket or specify your source code as inline text.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSLambdaFunctionCode](#awslambdafunctioncode)|Yes|

##### Description
A description of the function.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Environment
Key-value pairs that Lambda caches and makes available for your Lambda functions.                  Use environment variables to apply configuration changes, such as test and                  production environment configurations, without changing your Lambda function source                  code.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSLambdaFunctionEnvironment](#awslambdafunctionenvironment)|No|

##### FunctionName
A name for the function. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Handler
The name of the function (within your source code) that Lambda calls to start running                  your code. For more information, see the Handler property                  in the AWS Lambda Developer Guide.NoteIf you specify your source code as inline text by specifying the ZipFile property within the Code property, specify index.function_name as the handler.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### KmsKeyArn
The Amazon Resource Name (ARN) of an AWS Key Management Service (AWS KMS) key that Lambda uses to                  encrypt and decrypt environment variable values.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MemorySize
The amount of memory, in MB, that is allocated to your Lambda function. Lambda                  uses this value to proportionally allocate the amount of CPU power. For more                  information, see Resource                     Model in the AWS Lambda Developer Guide.Your function use case determines your CPU and memory requirements. For                  example, a database operation might need less memory than an image processing                  function. You must specify a value that is greater than or equal to                     128, and it must be a multiple of 64. You cannot specify a size                  larger than 1536. The default value is 128 MB.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Role
The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) execution role that                  Lambda assumes when it runs your code to access AWS services.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Runtime
The runtime environment for the Lambda function that you are uploading. For valid values, see the Runtime property in the AWS Lambda Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Timeout
The function execution time (in seconds) after which Lambda terminates the                  function. Because the execution time affects cost, set this value based on the                  function's expected execution time. By default,  Timeout is set to                     3 seconds.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### VpcConfig
If the Lambda function requires access to resources in a VPC, specify a VPC configuration that Lambda uses to set up an elastic network interface (ENI). The ENI enables your function to connect to other resources in your VPC, but it doesn't provide public Internet access. If your function requires Internet access (for example, to access AWS services that don't have VPC endpoints), configure a Network Address Translation (NAT) instance inside your VPC or use an Amazon Virtual Private Cloud                  (Amazon VPC) NAT gateway. For more information, see NAT Gateways in the Amazon VPC User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSLambdaFunctionVPCConfig](#awslambdafunctionvpcconfig)|No|


### AWS::Lambda::Permission
#### Properties
##### Action
The Lambda actions that you want to allow in this statement. For example, you can specify lambda:CreateFunction to specify a certain action, or use a wildcard (lambda:*) to grant permission to all Lambda actions. For a list of actions, see Actions and Condition Context Keys for AWS Lambda in the IAM User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### FunctionName
The name (physical ID), Amazon Resource Name (ARN), or alias ARN of the Lambda                  function that you want to associate with this statement. Lambda adds this statement                  to the function's access policy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Principal
The entity for which you are granting permission to invoke the Lambda function.                  This entity can be any valid AWS service principal, such as                     s3.amazonaws.com or sns.amazonaws.com, or, if you are                  granting cross-account permission, an AWS account ID. For example, you might want                  to allow a custom application in another AWS account to push events to Lambda by                  invoking your function.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SourceAccount
The AWS account ID (without hyphens) of the source owner. For example, if you                  specify an S3 bucket in the SourceArn property, this value is the                  bucket owner's account ID. You can use this property to ensure that all source                  principals are owned by a specific account.ImportantThis property is not supported by all event sources. For more information, see the SourceAccount parameter for the AddPermission action in the AWS Lambda Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SourceArn
The ARN of a resource that is invoking your function. When granting Amazon Simple Storage Service                  (Amazon S3) permission to invoke your function, specify this property with the bucket                  ARN as its value. This ensures that events generated only from the specified                  bucket, not just any bucket from any AWS account that creates a mapping to your                  function, can invoke the function.ImportantThis property is not supported by all event sources. For more information, see the SourceArn parameter for the AddPermission action in the AWS Lambda Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::Lambda::Version
#### Properties
##### CodeSha256
The SHA-256 hash of the deployment package that you want to publish. This value must match the SHA-256 hash of the $LATEST version of the function. Specify this property to validate that you are publishing the correct package.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Description
A description of the version you are publishing. If you don't specify a value, Lambda copies the description from the $LATEST version of the function.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### FunctionName
The Lambda function for which you want to publish a version. You can specify the function's name or its Amazon Resource Name (ARN).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


## Logs
### AWS::Logs::LogGroup
#### Properties
##### LogGroupName
A name for the log group. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RetentionInDays
The number of days log events are kept in CloudWatch Logs. When a log event expires,                  CloudWatch Logs automatically deletes it. For valid values, see PutRetentionPolicy in                  the Amazon CloudWatch Logs API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AWS::Logs::Destination
#### Properties
##### DestinationName
The name of the CloudWatch Logs destination.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### DestinationPolicy
An AWS Identity and Access Management (IAM) policy that specifies who can write to your                  destination.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
The Amazon Resource Name (ARN) of an IAM role that permits CloudWatch Logs to send data                  to the specified AWS resource (TargetArn).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TargetArn
The ARN of the AWS resource that receives log events. Currently, you can                  specify only an Amazon Kinesis stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::Logs::LogStream
#### Properties
##### LogGroupName
The name of the log group where the log stream is created.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### LogStreamName
The name of the log stream to create. The name must be unique within the log                  group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::Logs::MetricFilter
#### Properties
##### FilterPattern
Describes the pattern that CloudWatch Logs follows to interpret each entry in a log. For                  example, a log entry might contain fields such as timestamps, IP addresses, error                  codes, bytes transferred, and so on. You use the pattern to specify those fields                  and to specify what to look for in the log file. For example, if you're interested                  in error codes that begin with 1234, your filter pattern might be                     [timestamps, ip_addresses, error_codes = 1234*, size, ...].

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### LogGroupName
The name of an existing log group that you want to associate with this metric                  filter.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MetricTransformations
Describes how to transform data from a log into a CloudWatch metric.ImportantCurrently, you can specify only one metric transformation for each metric                        filter. If you want to specify multiple metric transformations, you must                        specify multiple metric filters.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[CloudWatchLogsMetricFilterMetricTransformationProperty](#cloudwatchlogsmetricfiltermetrictransformationproperty)|Yes|


### AWS::Logs::SubscriptionFilter
#### Properties
##### DestinationArn
The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Lambda function that you                  want to use as the subscription feed destination.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### FilterPattern
The filtering expressions that restrict what gets delivered to the destination                  AWS resource. For more information about the filter pattern syntax, see Filter and Pattern                     Syntax in the Amazon CloudWatch User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### LogGroupName
The log group to associate with the subscription filter. All log events that                  are uploaded to this log group are filtered and delivered to the specified AWS                  resource if the filter pattern matches the log events.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
An IAM role that grants CloudWatch Logs permission to put data into the specified Amazon Kinesis stream. For Lambda and CloudWatch Logs destinations, don't specify this property because CloudWatch Logs gets the necessary permissions from the destination resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## OpsWorks
### AWS::OpsWorks::App
#### Properties
##### AppSource
The information required to retrieve an app from a repository.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksSourceType](#awsopsworkssourcetype)|No|

##### Attributes
One or more user-defined key-value pairs to be added to the app attributes                  bag.

| Array    | Type     | Required |
|----------|----------|----------|
|true|Map|No|

##### Description
A description of the app.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DataSources
A list of databases to associate with the AWS OpsWorks app.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[DataSource](#datasource)|No|

##### Domains
The app virtual host settings, with multiple domains separated by commas. For                  example, 'www.example.com, example.com'.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### EnableSsl
Whether to enable SSL for this app.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Environment
The environment variables to associate with the AWS OpsWorks app.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSOpsWorksAppEnvironment](#awsopsworksappenvironment)|No|

##### Name
The name of the AWS OpsWorks app.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Shortname
The app short name, which is used internally by AWS OpsWorks and by Chef                  recipes.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SslConfiguration
The SSL configuration

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksSslConfigurationType](#awsopsworkssslconfigurationtype)|No|

##### StackId
The ID of the AWS OpsWorks stack to associate this app with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Type
The app type. Each supported type is associated with a particular layer. For                  more information, see CreateApp in the AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::OpsWorks::ElasticLoadBalancerAttachment
#### Properties
##### ElasticLoadBalancerName
Elastic Load Balancing load balancer name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### LayerId
The AWS OpsWorks layer ID that the Elastic Load Balancing load balancer will be attached to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::OpsWorks::Stack
#### Properties
##### AgentVersion
The AWS OpsWorks agent version that you want to use. The agent communicates with the                  service and handles tasks such as initiating Chef runs in response to lifecycle                  events. For valid values, see the AgentVersion parameter for the CreateStack action in the                     AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Attributes
One or more user-defined key-value pairs to be added to the stack attributes                  bag.

| Array    | Type     | Required |
|----------|----------|----------|
|true|Map|No|

##### ChefConfiguration
Describes the Chef configuration. For more information, see the CreateStack ChefConfiguration parameter in the                     AWS OpsWorks Stacks API Reference.NoteTo enable Berkshelf, you must select a Chef version in the                        ConfigurationManager property that supports Berkshelf.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksChefConfigurationType](#awsopsworkschefconfigurationtype)|No|

##### CloneAppIds
If you're cloning an AWS OpsWorks stack, a list of AWS OpsWorks application stack IDs from the                  source stack to include in the cloned stack.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### ClonePermissions
If you're cloning an AWS OpsWorks stack, indicates whether to clone the source stack's                  permissions.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### ConfigurationManager
Describes the configuration manager. When you create a stack, you use the                  configuration manager to specify the Chef version. For supported Chef versions,                  see the CreateStack ConfigurationManager parameter in the                     AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksStackConfigurationManagerType](#awsopsworksstackconfigurationmanagertype)|No|

##### CustomCookbooksSource
Contains the information required to retrieve a cookbook from a                  repository.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksSourceType](#awsopsworkssourcetype)|No|

##### CustomJson
A user-defined custom JSON object. The custom JSON is used to override the                  corresponding default stack configuration JSON values. For more information, see                     CreateStack in the                     AWS OpsWorks Stacks API Reference.ImportantAWS CloudFormation submits all JSON attributes as strings, including any Boolean or                     number attributes. If you have recipes that expect booleans or numbers, you                     must modify the recipes to accept strings and to interpret those strings as                     booleans or numbers.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|No|

##### DefaultAvailabilityZone
The stack's default Availability Zone, which must be in the specified                  region.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DefaultInstanceProfileArn
The Amazon Resource Name (ARN) of an IAM instance profile that is the default                  profile for all of the stack's Amazon EC2 instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### DefaultOs
The stack's default operating system. For more information, see CreateStack in the                     AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DefaultRootDeviceType
The default root device type. This value is used by default for all instances                  in the stack, but you can override it when you create an instance. For more                  information, see CreateStack in the AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DefaultSshKeyName
A default SSH key for the stack instances. You can override this value when you                  create or update an instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DefaultSubnetId
The stack's default subnet ID. All instances are launched into this subnet                  unless you specify another subnet ID when you create the instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify the VpcId property, you                  must specify this property.|

##### EcsClusterArn
The Amazon Resource Name (ARN) of the Amazon EC2 Container Service (Amazon ECS) cluster to register                  with the AWS OpsWorks stack.NoteIf you specify a cluster that's registered with another AWS OpsWorks stack, AWS CloudFormation                     deregisters the existing association before registering the cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ElasticIps
A list of Elastic IP addresses to register with the AWS OpsWorks stack.NoteIf you specify an IP address that's registered with another AWS OpsWorks stack,                     AWS CloudFormation deregisters the existing association before registering the IP                     address.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSOpsWorksStackElasticIp](#awsopsworksstackelasticip)|No|

##### HostnameTheme
The stack's host name theme, with spaces replaced by underscores. The theme is                  used to generate host names for the stack's instances. For more information, see                     CreateStack in the                     AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Name
The name of the AWS OpsWorks stack.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RdsDbInstances
The Amazon Relational Database Service (Amazon RDS) DB instance to register with the AWS OpsWorks stack.NoteIf you specify a DB instance that's registered with another AWS OpsWorks stack,                     AWS CloudFormation deregisters the existing association before registering the DB                     instance.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSOpsWorksStackRdsDbInstance](#awsopsworksstackrdsdbinstance)|No|

##### ServiceRoleArn
The AWS Identity and Access Management (IAM) role that AWS OpsWorks uses to work with AWS resources on your                  behalf. You must specify an Amazon Resource Name (ARN) for an existing IAM                  role.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SourceStackId
If you're cloning an AWS OpsWorks stack, the stack ID of the source AWS OpsWorks stack to                  clone.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### UseCustomCookbooks
Whether the stack uses custom cookbooks.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### UseOpsworksSecurityGroups
Whether to associate the AWS OpsWorks built-in security groups with the stack's                  layers.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### VpcId
The ID of the VPC that the stack is to be launched into, which must be in the                  specified region. All instances are launched into this VPC. If you specify this                  property, you must specify the DefaultSubnetId property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::OpsWorks::UserProfile
#### Properties
##### AllowSelfManagement
Indicates whether users can use the AWS OpsWorks My Settings page to                  specify their own SSH public key. For more information, see Setting an IAM User's Public                     SSH Key in the AWS OpsWorks User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### IamUserArn
The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) user to associate with                  this configuration.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SshPublicKey
The public SSH key that is associated with the IAM user. The IAM user must                  have or be given the corresponding private key to access instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::OpsWorks::Instance
#### Properties
##### AgentVersion
The version of the  AWS OpsWorks agent that AWS OpsWorks installs on each instance. AWS OpsWorks                  sends commands to the agent to performs tasks on your instances, such as starting                  Chef runs. For valid values, see the AgentVersion parameter for the                     CreateInstance action                  in the AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### AmiId
The ID of the custom Amazon Machine Image (AMI) to be used to create the                  instance. For more information about custom AMIs, see Using Custom AMIs in the                  AWS OpsWorks User Guide.NoteIf you specify this property, you must set the Os property                        to Custom.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Architecture
The instance architecture.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### AutoScalingType
For scaling instances, the type of scaling. If you specify load-based scaling,                  do not specify a time-based scaling configuration. For valid values, see CreateInstance in the                     AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### AvailabilityZone
The instance Availability Zone.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### BlockDeviceMappings
A list of block devices that are mapped to the AWS OpsWorks instance. For more                  information, see the BlockDeviceMappings parameter for the CreateInstance action in the                     AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSOpsWorksInstanceBlockDeviceMapping](#awsopsworksinstanceblockdevicemapping)|No|

##### EbsOptimized
Whether the instance is optimized for Amazon Elastic Block Store (Amazon EBS) I/O. If you specify an                  Amazon EBS-optimized instance type, AWS OpsWorks enables EBS optimization by default. For more                  information, see Amazon EBS–Optimized                     Instances in the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### ElasticIps
A list of Elastic IP addresses to associate with the instance.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Hostname
The name of the instance host.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### InstallUpdatesOnBoot
Whether to install operating system and package updates when the instance                  boots.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### InstanceType
The instance type, which must be supported by AWS OpsWorks. For more information, see                     CreateInstance in the                     AWS OpsWorks Stacks API Reference.If you specify an Amazon EBS-optimized instance type, AWS OpsWorks enables EBS optimization                  by default. For more information about Amazon EBS-optimized instance types, see Amazon EBS–Optimized Instances in the                     Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### LayerIds
The IDs of the AWS OpsWorks layers to associate with this instance.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### Os
The instance operating system. For more information, see CreateInstance in the                     AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RootDeviceType
The root device type of the instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SshKeyName
The SSH key name of the instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### StackId
The ID of the AWS OpsWorks stack that this instance will be associated with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SubnetId
The ID of the instance's subnet. If the stack is running in a VPC, you can use                  this parameter to override the stack's default subnet ID value and direct AWS OpsWorks to                  launch the instance in a different subnet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tenancy
The tenancy of the instance. For more information, see the Tenancy                  parameter for the CreateInstance action in the                  AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### TimeBasedAutoScaling
The time-based scaling configuration for the instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksTimeBasedAutoScalingType](#awsopsworkstimebasedautoscalingtype)|No|

##### VirtualizationType
The instance's virtualization type, paravirtual or                  hvm.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Volumes
A list of AWS OpsWorks volume IDs to associate with the instance. For more                  information, see AWS::OpsWorks::Volume.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AWS::OpsWorks::Layer
#### Properties
##### Attributes
One or more user-defined key-value pairs to be added to the stack attributes                  bag.

| Array    | Type     | Required |
|----------|----------|----------|
|true|Map|No|

##### AutoAssignElasticIps
Whether to automatically assign an Elastic IP address to Amazon EC2 instances in                  this layer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### AutoAssignPublicIps
For AWS OpsWorks stacks that are running in a VPC, whether to automatically assign a                  public IP address to Amazon EC2 instances in this layer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### CustomInstanceProfileArn
The Amazon Resource Name (ARN) of an IAM instance profile that is to be used                  for the Amazon EC2 instances in this layer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### CustomJson
A custom stack configuration and deployment attributes that AWS OpsWorks installs on                  the layer's instances. For more information, see the CustomJson                  parameter for the CreateLayer action in the                  AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|No|

##### CustomRecipes
Custom event recipes for this layer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksRecipesType](#awsopsworksrecipestype)|No|

##### CustomSecurityGroupIds
Custom security group IDs for this layer.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### EnableAutoHealing
Whether to automatically heal Amazon EC2 instances that have become disconnected or                  timed out.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### InstallUpdatesOnBoot
Whether to install operating system and package updates when the instance                  boots.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### LifecycleEventConfiguration
The lifecycle events for the AWS OpsWorks layer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksLayerLifeCycleConfiguration](#awsopsworkslayerlifecycleconfiguration)|No|

##### LoadBasedAutoScaling
The load-based scaling configuration for the AWS OpsWorks layer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksLoadBasedAutoScalingType](#awsopsworksloadbasedautoscalingtype)|No|

##### Name
The AWS OpsWorks layer name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Packages
The packages for this layer.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Shortname
The layer short name, which is used internally by AWS OpsWorks and by Chef recipes.                  The short name is also used as the name for the directory where your app files are                  installed.The name can have a maximum of 200 characters, which are limited to the                  alphanumeric characters, '-', '_', and '.'.ImportantIf you update a property that requires the layer to be replaced, you must specify a new short name. You cannot have multiple layers with the same short name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StackId
The ID of the AWS OpsWorks stack that this layer will be associated with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Type
The layer type. A stack cannot have more than one layer of the same type,                  except for the custom type. You can have any number of                     custom types. For more information, see CreateLayer in the                     AWS OpsWorks Stacks API Reference.ImportantIf you update a property that requires the layer to be replaced, you must                     specify a new type unless you have a custom type. You can have any                     number of custom types.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### VolumeConfigurations
Describes the Amazon EBS volumes for this layer.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSOpsWorksVolumeConfigurationType](#awsopsworksvolumeconfigurationtype)|No|


### AWS::OpsWorks::Volume
#### Properties
##### Ec2VolumeId
The ID of the Amazon EBS volume to register with the AWS OpsWorks stack.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MountPoint
The mount point for the Amazon EBS volume, such as /mnt/disk1.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Name
A name for the Amazon EBS volume.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### StackId
The ID of the AWS OpsWorks stack that AWS OpsWorks registers the volume to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


## RDS
### AWS::RDS::DBParameterGroup
#### Properties
##### Description
A friendly description of the RDS parameter group. For example, "My Parameter Group".

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Family
The database family of this RDS parameter group. For example, "MySQL5.1".

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Parameters
The parameters to set for this RDS parameter group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### Tags
The tags that you want to attach to the RDS parameter group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[resourcetags](#resourcetags)|No|


### AWS::RDS::DBInstance
#### Properties
##### AllocatedStorage
The allocated storage size, specified in gigabytes (GB).If any value is set in the Iops parameter,                     AllocatedStorage must be at least 100 GB, which                  corresponds to the minimum Iops value of 1,000. If you                  increase the Iops value (in 1,000 IOPS increments), then                  you must also increase the AllocatedStorage value (in 100                  GB increments).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. This property is required unless you specify the                     DBClusterIdentifier property. In that case, do not specify this                  property.|

##### AllowMajorVersionUpgrade
If you update the EngineVersion property to a version that's                  different from the DB instance's current major version, set this property to                     true. For more information, see ModifyDBInstance in the                     Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### AutoMinorVersionUpgrade
Indicates that minor engine upgrades are applied automatically to the DB                  instance during the maintenance window. The default value is                  true.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### AvailabilityZone
The name of the Availability Zone where the DB instance is located. You cannot                  set the AvailabilityZone parameter if the                     MultiAZ parameter is set to true.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### BackupRetentionPeriod
The number of days during which automatic DB snapshots are retained.ImportantIf this DB instance is deleted or replaced during an update, AWS CloudFormation deletes                     all automated snapshots. However, it retains manual DB snapshots.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### CharacterSetName
For supported engines, specifies the character set to associate with the DB                  instance. For more information, see Appendix: Oracle                     Character Sets Supported in Amazon RDS in the                     Amazon Relational Database Service User Guide.If you specify the DBSnapshotIdentifier or                     SourceDBInstanceIdentifier property, do not specify this property.                  The value is inherited from the snapshot or source DB instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### CopyTagsToSnapshot
Indicates whether to copy all of the user-defined tags from the DB instance to                  snapshots of the DB instance. By default, Amazon RDS doesn't copy tags to snapshots.                  Amazon RDS doesn't copy tags with the aws:: prefix unless it's the DB                  instance's final snapshot (the snapshot when you delete the DB instance).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### DBClusterIdentifier
The name of an existing DB cluster that this instance will be associated with.                  If you specify this property, specify aurora for the                     Engine property and do not specify any of the following                  properties: AllocatedStorage, BackupRetentionPeriod,                     CharacterSetName, DBSecurityGroups,                     PreferredBackupWindow, PreferredMaintenanceWindow,                     Port, SourceDBInstanceIdentifier, or                     StorageType.Amazon RDS assigns the first DB instance in the cluster as the primary, and                  additional DB instances as replicas.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DBInstanceClass
The name of the compute and memory capacity classes of the DB instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### DBInstanceIdentifier
A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lower                  case. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses                  that ID for the DB instance. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DBName
The name of the DB instance that was provided at the time of creation, if one                  was specified. This same name is returned for the life of the DB instance.NoteIf you restore DB instances from snapshots, specify this property for the                     MySQL or MariaDB engines.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DBParameterGroupName
The name of an existing DB parameter group or a reference to an AWS::RDS::DBParameterGroup                  resource created in the template.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DBSecurityGroups
A list of the DB security groups to assign to the DB instance. The list can                  include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup                  resources created in the template.If you set DBSecurityGroups, you must not set VPCSecurityGroups, and                  vice-versa.ImportantIf you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS:AllocatedStorageAutoMinorVersionUpgradeAvailabilityZoneBackupRetentionPeriodCharacterSetNameDbInstanceClassDbNameDbParameterGroupNameDbSecurityGroupsDbSubnetGroupNameEngineEngineVersionIopsLicenseModelMasterUsernameMasterUserPasswordMultiAZOptionGroupNamePreferredBackupWindowPreferredMaintenanceWindowAll other properties are ignored. Specify a VPC security group if you want                     to submit other properties, such as StorageType,                        StorageEncrypted, or KmsKeyId. If you're already                     using the DBSecurityGroups property, you can't use these other                     properties by updating your DB instance to use a VPC security group. You must                     recreate the DB instance.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### DBSnapshotIdentifier
The name or ARN of the DB snapshot used to restore the DB instance. If you are                  restoring from a shared manual DB snapshot, you must specify the Amazon Resource                  Name (ARN) of the snapshot.By specifying this property, you can create a DB instance from the specified DB                  snapshot. If the DBSnapshotIdentifier property is an empty string or                  the AWS::RDS::DBInstance declaration has no                     DBSnapshotIdentifier property, AWS CloudFormation creates a new database. If                  the property contains a value (other than an empty string), AWS CloudFormation creates a                  database from the specified snapshot. If a snapshot with the specified name does                  not exist, AWS CloudFormation can't create the database and it rolls the back the stack.Some DB instance properties are not valid when you restore from a snapshot,                  such as the MasterUsername and MasterUserPassword                  properties. For information about the properties that you can specify, see the                     RestoreDBInstanceFromDBSnapshot action in the                     Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DBSubnetGroupName
A DB subnet group to associate with the DB instance.If there is no DB subnet group, then the instance is not a VPC DB                  instance.For more information about using Amazon RDS in a VPC, see Using Amazon RDS                     with Amazon Virtual Private Cloud (VPC) in the                     Amazon Relational Database Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Domain
For an Amazon RDS DB instance that is running Microsoft SQL Server, the Active Directory                  directory ID to create the instance in. Amazon RDS uses Windows Authentication to                  authenticate users that connect to the DB instance. For more information, see                     Using Windows                     Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server                  in the Amazon Relational Database Service User Guide.If you specify this property, you must specify a SQL Server engine for the              Engine property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DomainIAMRoleName
The name of an IAM role that Amazon RDS uses when calling the Directory Service                  APIs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Engine
The database engine that the DB instance uses. This property is optional when                  you specify the DBSnapshotIdentifier property to create DB                  instances.For valid values, see the Engine parameter of the CreateDBInstance action in the                  Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### EngineVersion
The version number of the database engine that the DB instance uses.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Iops
The number of I/O operations per second (IOPS) that the database provisions.                  The value must be equal to or greater than 1000.If you specify this property, you must follow the range of allowed ratios of                  your requested IOPS rate to the amount of storage that you allocate (IOPS to                  allocated storage).  For example, you can provision an Oracle database instance                  with 1000 IOPS and 200 GB of storage (a ratio of 5:1) or                  specify 2000 IOPS with 200 GB of storage (a ratio of 10:1). For more information,                  see Amazon RDS Provisioned IOPS                     Storage to Improve Performance in the                     Amazon Relational Database Service User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. If you specify io1 for the                     StorageType property, you must specify this property.|

##### KmsKeyId
The ARN of the AWS Key Management Service (AWS KMS) master key that is used to encrypt the DB                  instance, such as                     arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.                  If you enable the StorageEncrypted property but don't specify this                  property, AWS CloudFormation uses the default master key. If you specify this property, you                  must set the StorageEncrypted property to true.If you specify the DBSnapshotIdentifier or                     SourceDBInstanceIdentifier property, do not specify this property.                  The value is inherited from the snapshot or source database instance.NoteIf you specify DBSecurityGroups, AWS CloudFormation ignores this property.                     To specify both a security group and this property, you must use a VPC security                     group. For more information about Amazon RDS and VPC, see Using Amazon RDS with Amazon VPC in the                        Amazon Relational Database Service User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### LicenseModel
The license model of the DB instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MasterUsername
The master user name for the DB instance.NoteIf you specify the SourceDBInstanceIdentifier or                        DBSnapshotIdentifier property, do not specify this property.                     The value is inherited from the source DB instance or snapshot.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### MasterUserPassword
The master password for the DB instance.NoteIf you specify the SourceDBInstanceIdentifier or                        DBSnapshotIdentifier property, do not specify this property.                     The value is inherited from the source DB instance or snapshot.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### MonitoringInterval
The interval, in seconds, between points when Amazon RDS collects enhanced                  monitoring metrics for the DB instance. To disable metrics collection, specify                     0.For default and valid values, see the MonitoringInterval parameter                  for the CreateDBInstance action in the                  Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. If you specify the MonitoringRoleArn                  property, specify a value other than 0 for                     MonitoringInterval.|

##### MonitoringRoleArn
The ARN of the AWS Identity and Access Management (IAM) role that permits Amazon RDS to send enhanced            monitoring metrics to Amazon CloudWatch, for example,              arn:aws:iam:123456789012:role/emaccess. For information on creating a            monitoring role, see To create an IAM              role for Amazon RDS Enhanced Monitoring in the              Amazon Relational Database Service User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify a value other than 0 for                  the MonitoringInterval property, specify a value for                  MonitoringRoleArn.|

##### MultiAZ
Specifies if the database instance is a multiple Availability Zone deployment. You cannot set the AvailabilityZone parameter if the MultiAZ parameter is set to true.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### OptionGroupName
The option group that this DB instance is associated with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Port
The port for the instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PreferredBackupWindow
The daily time range during which automated backups are performed if automated                  backups are enabled, as determined by the BackupRetentionPeriod                  property. For valid values, see the PreferredBackupWindow parameter                  for the CreateDBInstance action in the                  Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PreferredMaintenanceWindow
The weekly time range (in UTC) during which system maintenance can occur. For valid values, see the PreferredMaintenanceWindow parameter for the CreateDBInstance action in the Amazon Relational Database Service API Reference.NoteThis property applies when AWS CloudFormation initially creates the DB instance. If                        you use AWS CloudFormation to update the DB instance, those updates are applied                        immediately.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PubliclyAccessible
Indicates whether the DB instance is an Internet-facing instance. If you                  specify true, AWS CloudFormation creates an instance with a publicly resolvable                  DNS name, which resolves to a public IP address. If you specify                  false, AWS CloudFormation creates an internal instance with a DNS name that                  resolves to a private IP address.The default behavior value depends on your VPC setup and the database subnet                  group. For more information, see the PubliclyAccessible parameter in                     CreateDBInstance in the Amazon Relational Database Service API Reference.If this resource has a public IP address and is also in a VPC that is defined in the same template, you must use theDependsOn attribute to declare a dependency on the VPC-gateway attachment. For more information,see DependsOn Attribute.NoteIf you specify DBSecurityGroups, AWS CloudFormation ignores this property.                     To specify a security group and this property, you must use a VPC security                     group. For more information about Amazon RDS and VPC, see Using Amazon RDS with Amazon VPC in the                        Amazon Relational Database Service User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### SourceDBInstanceIdentifier
If you want to create a read replica DB instance, specify the ID of the source                  DB instance. Each DB instance can have a limited number of read replicas. For more                  information, see Working with Read                     Replicas in the Amazon Relational Database Service Developer Guide.The SourceDBInstanceIdentifier property determines whether a DB                  instance is a read replica. If you remove the                     SourceDBInstanceIdentifier property from your template and then                  update your stack, AWS CloudFormation deletes the read replica and creates a new DB instance                  (not a read replica).ImportantRead replicas do not support deletion policies. AWS CloudFormation ignores any                           deletion policy that's associated with a read replica.If you specify SourceDBInstanceIdentifier, do not set the                              MultiAZ property to true and do not specify                           the DBSnapshotIdentifier property. You cannot deploy read                           replicas in multiple Availability Zones, and you cannot create a read                           replica from a snapshot.Do not set the BackupRetentionPeriod,                           DBName, MasterUsername,                              MasterUserPassword, and                              PreferredBackupWindow properties. The database attributes                           are inherited from the source DB instance, and backups are disabled for                           read replicas.If the source DB instance is in a different region than the read                           replica, specify an ARN for a valid DB instance. For more information,                           see Constructing a Amazon RDS Amazon Resource Name (ARN) in the                              Amazon Relational Database Service User Guide.For DB instances in Amazon Aurora clusters, do not specify this                           property. Amazon RDS automatically assigns writer and reader DB                           instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### StorageEncrypted
Indicates whether the DB instance is encrypted.If you specify the DBClusterIdentifier,                     DBSnapshotIdentifier, or SourceDBInstanceIdentifier                  property, do not specify this property. The value is inherited from the cluster,                  snapshot, or source DB instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Conditional. If you specify the KmsKeyId property, you                  must enable encryption.|

##### StorageType
The storage type associated with this DB instance.For the default and valid values, see the StorageType parameter of                  the CreateDBInstance action in the                  Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Tags
An arbitrary set of tags (key–value pairs) for this DB instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### Timezone
The time zone of the DB instance, which you can specify to match the time zone                  of your applications. To see which engines supports time zones, see the                     Timezone parameter for the CreateDBInstance action in the                  Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### VPCSecurityGroups
A list of the VPC security group IDs to assign to the DB instance. The list can                  include both the physical IDs of existing VPC security groups and references to                     AWS::EC2::SecurityGroup resources created in the                  template.If you set VPCSecurityGroups, you must not set DBSecurityGroups, and vice                  versa.ImportantYou              can migrate a              DB              instance in your stack from an RDS DB security group to a VPC security group, but              keep              the              following in mind:You cannot revert to using an RDS security group after you                           establish a VPC security group membership.When you migrate your DB instance to VPC security groups, if your                           stack update rolls back because the DB instance update fails, or because                           an update fails in another AWS CloudFormation resource, the rollback will fail because                           it cannot revert to an RDS security group.To use the properties that are available when you use a VPC security                           group, you must recreate the DB instance. If you don't, AWS CloudFormation submits                           only the property values that are listed in the DBSecurityGroups                           property.To avoid this situation, migrate your DB instance to using VPC security                     groups only when that is the only change in your stack template.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AWS::RDS::DBSecurityGroup
#### Properties
##### EC2VpcId
The Id of VPC. Indicates which VPC this DB Security Group should belong to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. Must be specified to create a DB Security Group for                  a VPC; may not be specified otherwise.|

##### DBSecurityGroupIngress
Network ingress authorization for an Amazon EC2 security group or an IP address range.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonRDSSecurityGroupRule](#amazonrdssecuritygrouprule)|Yes|

##### GroupDescription
Description of the security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Tags
The tags that you want to attach to the Amazon RDS DB security group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[resourcetags](#resourcetags)|No|


### AWS::RDS::DBCluster
#### Properties
##### AvailabilityZones
A list of Availability Zones (AZs) in which DB instances in the cluster can be                  created.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### BackupRetentionPeriod
The number of days for which automatic backups are retained. For more                  information, see CreateDBCluster in the Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### DatabaseName
The name of your database. You can specify a name of up to eight alpha-numeric                  characters. If you do not provide a name, Amazon Relational Database Service (Amazon RDS) won't create a                  database in this DB cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DBClusterParameterGroupName
The name of the DB cluster parameter group to associate with this DB cluster.                  For the default value, see the DBClusterParameterGroupName parameter                  of the CreateDBCluster                  action in the Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DBSubnetGroupName
A DB subnet group that you want to associate with this DB cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Engine
The name of the database engine that you want to use for this DB                  cluster.For valid values, see the Engine parameter of the CreateDBCluster action in the                  Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### EngineVersion
The version number of the database engine that you want to use.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### KmsKeyId
The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to                  encrypt the database instances in the DB cluster, such as                     arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.                  If you enable the StorageEncrypted property but don't specify this                  property, the default master key is used. If you specify this property, you must                  set the StorageEncrypted property to true.If you specify the SnapshotIdentifier, do not specify this                  property. The value is inherited from the snapshot DB cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MasterUsername
The master user name for the DB instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify this property unless you specify the                     SnapshotIdentifier property. In that case, do not specify this                  property.|

##### MasterUserPassword
The password for the master database user.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify this property unless you specify the                     SnapshotIdentifier property. In that case, do not specify this                  property.|

##### Port
The port number on which the DB instances in the cluster can accept                  connections.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### PreferredBackupWindow
if automated backups are enabled (see the BackupRetentionPeriod                  property), the daily time range in UTC during which you want to create automated                  backups.For valid values, see the PreferredBackupWindow parameter of the                     CreateDBInstance action in the                  Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PreferredMaintenanceWindow
The weekly time range (in UTC) during which system maintenance can                  occur.For valid values, see the PreferredMaintenanceWindow parameter of                  the CreateDBInstance action in the                  Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SnapshotIdentifier
The identifier for the DB cluster snapshot from which you want to                  restore.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### StorageEncrypted
Indicates whether the DB instances in the cluster are encrypted.If you specify the SnapshotIdentifier property, do not specify                  this property. The value is inherited from the snapshot DB cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Conditional. If you specify the KmsKeyId property, you                  must enable encryption.|

##### Tags
The tags that you want to attach to this DB cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[resourcetags](#resourcetags)|No|

##### VpcSecurityGroupIds
A list of VPC security groups to associate with this DB cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AWS::RDS::DBSubnetGroup
#### Properties
##### DBSubnetGroupDescription
The description for the DB Subnet Group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SubnetIds
The EC2 Subnet IDs for the DB Subnet Group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### Tags
The tags that you want to attach to the RDS database subnet group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[resourcetagsinkey-valueformat](#resourcetagsinkey-valueformat)|No|


### AWS::RDS::DBClusterParameterGroup
#### Properties
##### Description
A friendly description for this DB cluster parameter group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Family
The database family of this DB cluster parameter group, such as                     aurora5.6.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Parameters
The parameters to set for this DB cluster parameter group. For a list of                  parameter keys, see Appendix: DB Cluster                     and DB Instance Parameters in the                     Amazon Relational Database Service User Guide.Changes to dynamic parameters are applied immediately. Changes to static                  parameters require a reboot without failover to the DB instance that is associated                  with the parameter group before the change can take effect.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|Yes|

##### Tags
The tags that you want to attach to this parameter group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[resourcetags](#resourcetags)|No|


### AWS::RDS::EventSubscription
#### Properties
##### Enabled
Indicates whether to activate the subscription. If you don't specify this                  property, AWS CloudFormation activates the subscription.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### EventCategories
A list of event categories that you want to subscribe to for a given source type. If you don't specify this property, you are notified about all event categories. For more information, see  Using Amazon RDS Event Notification in the Amazon Relational Database Service User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### SnsTopicArn
The Amazon Resource Name (ARN) of an Amazon SNS topic that you want to send event                  notifications to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SourceIds
A list of identifiers for which Amazon RDS provides notification events.If you don't specify a value, notifications are provided for all sources. If                  you specify multiple values, they must be of the same type. For example, if you                  specify a database instance ID, all other values must be database instance                  IDs.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### SourceType
The type of source for which Amazon RDS provides notification events. For example, if you want to be notified of events generated by a database instance, set this parameter to db-instance. If you don't specify a value, notifications are provided for all source types. For valid values, see the SourceType parameter for the CreateEventSubscription action in the                     Amazon Relational Database Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify the SourceIds or EventCategories property, you must specify this property.|


### AWS::RDS::OptionGroup
#### Properties
##### EngineName
The name of the database engine that this option group is associated                  with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MajorEngineVersion
The major version number of the database engine that this option group is                  associated with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### OptionGroupDescription
A description of the option group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### OptionConfigurations
The configurations for this option group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonRDSOptionGroupOptionConfigurations](#amazonrdsoptiongroupoptionconfigurations)|Yes|

##### Tags
An arbitrary set of tags (key–value pairs) for this option group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|


### AWS::RDS::DBSecurityGroupIngress
#### Properties
##### DBSecurityGroupName
The name (ARN) of the AWS::RDS::DBSecurityGroup to which this ingress                  will be added.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### EC2SecurityGroupId
The ID of the VPC or EC2 security group to authorize.For VPC DB security groups, use EC2SecurityGroupId. For EC2 security groups, use                  EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EC2SecurityGroupName
The name of the EC2 security group to authorize.For VPC DB security groups, use EC2SecurityGroupId. For EC2 security groups, use                  EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EC2SecurityGroupOwnerId
The AWS Account Number of the owner of the EC2 security group specified in the EC2SecurityGroupName                  parameter. The AWS Access Key ID is not an acceptable value.For VPC DB security groups, use EC2SecurityGroupId. For EC2 security groups, use                  EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## Redshift
### AWS::Redshift::Cluster
#### Properties
##### AllowVersionUpgrade
When a new version of the Amazon Redshift is released, indicates whether upgrades can be                  applied to the engine that is running on the cluster. The upgrades are applied                  during the maintenance window.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### AutomatedSnapshotRetentionPeriod
The number of days that automated snapshots are retained. If you set the value                  to 0, automated snapshots are disabled.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### AvailabilityZone
The Amazon EC2 Availability Zone in which you want to provision your Amazon Redshift cluster.                  For example, if you have several Amazon EC2 instances running in a specific                  Availability Zone, you might want the cluster to be provisioned in the same zone                  in order to decrease network latency.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ClusterParameterGroupName
The name of the parameter group that you want to associate with this                  cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ClusterSecurityGroups
A list of security groups that you want to associate with this cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### ClusterSubnetGroupName
The name of a cluster subnet group that you want to associate with this                  cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ClusterType
The type of cluster. You can specify single-node or                     multi-node.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ClusterVersion
The Amazon Redshift engine version that you want to deploy on the cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DBName
The name of the first database that is created when the cluster is                  created.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ElasticIp
The Elastic IP (EIP) address for the cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Encrypted
Indicates whether the data in the cluster is encrypted at rest.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### HsmClientCertificateIdentifier
Specifies the name of the HSM client certificate that the Amazon Redshift cluster uses to                  retrieve the data encryption keys stored in an HSM.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HsmConfigurationIdentifier
Specifies the name of the HSM configuration that contains the information that                  the Amazon Redshift cluster can use to retrieve and store keys in an HSM.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### KmsKeyId
The AWS Key Management Service (AWS KMS) key ID that you want to use to encrypt data in the                  cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MasterUsername
The user name that is associated with the master user account for this                  cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MasterUserPassword
The  password associated with the master user account for this cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### NodeType
The node type that is provisioned for this cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### NumberOfNodes
The number of compute nodes in the cluster. If you specify                     multi-node for the ClusterType parameter, you must                  specify a number greater than 1.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional|

##### OwnerAccount
When you restore from a snapshot from another AWS account, the 12-digit AWS                  account ID that contains that snapshot.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Port
The port number on which the cluster accepts incoming connections.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### PreferredMaintenanceWindow
The weekly time range (in UTC) during which automated cluster maintenance can                  occur.  The format of the time range is                  ddd:hh24:mi-ddd:hh24:mi.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PubliclyAccessible
Indicates whether the cluster can be accessed from a public network.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### SnapshotClusterIdentifier
The name of the cluster the source snapshot was created from. For more information about restoring from a snapshot, see the RestoreFromClusterSnapshot action in the Amazon Redshift API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. This property is required if your IAM policy includes                  a restriction on the cluster name, where the resource element specifies anything                  other than the wildcard character (*) for the cluster name.|

##### SnapshotIdentifier
The name of the snapshot from which to create a new cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specified the                     SnapshotClusterIdentifier property, you must specify this                  property.|

##### VpcSecurityGroupIds
A list of VPC security groups that are associated with this cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AWS::Redshift::ClusterParameterGroup
#### Properties
##### Description
A description of the parameter group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ParameterGroupFamily
The Amazon Redshift engine version that applies to this cluster parameter group. The                  cluster engine version determines the set of parameters that you can specify in                  the Parameters property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Parameters
A list of parameter names and values that are allowed by the Amazon Redshift engine                  version that you specified in the ParameterGroupFamily property. For                  more information, see Amazon Redshift Parameter Groups in the                  Amazon Redshift Cluster Management Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonRedshiftParameterType](#amazonredshiftparametertype)|No|


### AWS::Redshift::ClusterSecurityGroupIngress
#### Properties
##### ClusterSecurityGroupName
The name of the Amazon Redshift security group that will be associated with the ingress                  rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### CIDRIP
The IP address range that has inbound access to the Amazon Redshift security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EC2SecurityGroupName
The Amazon EC2 security group that will be added the Amazon Redshift security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EC2SecurityGroupOwnerId
The 12-digit AWS account number of the owner of the Amazon EC2 security group that                  is specified by the EC2SecurityGroupName parameter.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify the EC2SecurityGroupName                  property, you must specify this property.|


### AWS::Redshift::ClusterSubnetGroup
#### Properties
##### Description
A description of the subnet group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SubnetIds
A list of VPC subnet IDs. You can modify a maximum of 20 subnets.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|


### AWS::Redshift::ClusterSecurityGroup
#### Properties
##### Description
A description of the security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


## Route53
### AWS::Route53::RecordSet
#### Properties
##### AliasTarget
Alias resource record sets only: Information about the                  domain to which you are redirecting traffic.If you specify this property, do not specify the TTL property. The                  alias uses a TTL value from the alias target record.For more information about alias resource record sets, see Creating Alias Resource Record Sets in the Amazon Route 53 Developer                     Guide and POST ChangeResourceRecordSets in the Amazon Route 53 API reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[Route53AliasTargetProperty](#route53aliastargetproperty)|Conditional. Required if you are creating an alias resource record                  set.|

##### Comment
Any comments that you want to include about the hosted zone.ImportantIf the record set is part of a record set group, this property isn't valid.                     Don't specify this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Failover
Designates the record set as a PRIMARY or SECONDARY                  failover record set. When you have more than one resource performing the same                  function, you can configure Amazon Route 53 to check the health of your resources and use                  only health resources to respond to DNS queries. You cannot create nonfailover                  resource record sets that have the same Name and Type                  property values as failover resource record sets. For more information, see the                     Failover content in the Amazon Route 53 API Reference.If you specify this property, you must specify the SetIdentifier                  property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### GeoLocation
Describes how Amazon Route 53 responds to DNS queries based on the geographic origin of                  the query.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonRoute53RecordSetGeoLocationProperty](#amazonroute53recordsetgeolocationproperty)|No|

##### HealthCheckId
The health check ID that you want to apply to this record set. Amazon Route 53 returns                  this resource record set in response to a DNS query only while record set is                  healthy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HostedZoneId
The ID of the hosted zone.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify either the                     HostedZoneName or HostedZoneId,                  but you cannot specify both. If this record set is part of a record set group, do                  not specify this property.|

##### HostedZoneName
The name of the domain for the hosted zone where you want to add the record                  set.When you create a stack using an AWS::Route53::RecordSet that                  specifies HostedZoneName, AWS CloudFormation attempts to find a hosted                  zone whose name matches the HostedZoneName. If AWS CloudFormation cannot                  find a hosted zone with a matching domain name, or if there is more than one                  hosted zone with the specified domain name, AWS CloudFormation will not create the                  stack.If you have multiple hosted zones with the same domain name, you must                  explicitly specify the hosted zone using                  HostedZoneId.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify either the                     HostedZoneName or HostedZoneId,                  but you cannot specify both. If this record set is part of a record set group, do                  not specify this property.|

##### Name
The name of the domain. You must specify a fully qualified domain name that                  ends with a period as the last label indication. If you omit the final period,                  Amazon Route 53 adds it.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ResourceRecords
List of resource records to add. Each record should be in the format                  appropriate for the record type specified by the Type                  property. For information about different record types and their record formats,                  see Appendix: Domain Name Format in the Amazon Route 53 Developer                     Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. If you don't specify the AliasTarget                  property, you must specify this property. If you are creating an alias resource                  record set, do not specify this property.|

##### SetIdentifier
A unique identifier that differentiates among multiple resource record sets                  that have the same combination of DNS name and type.For more information, see the SetIdentifier content in the Amazon Route 53 Developer                     Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. Required if you are creating a weighted, latency,                  failover, or geolocation resource record set.|

##### TTL
The resource record cache time to live (TTL), in seconds. If you specify this                  property, do not specify the AliasTarget property. For alias target                  records, the alias uses a TTL value from the target.If you specify this property, you must specify the                     ResourceRecords property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you don't specify the AliasTarget                  property, you must specify this property. If you are creating an alias resource                  record set, do not specify this property.|

##### Type
The type of records to add. For valid values, see the Type content in the Amazon Route 53 API Reference. In AWS CloudFormation,                  you can't create records of type NS or SOA.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Weight
Weighted resource record sets only: Among resource record                  sets that have the same combination of DNS name and type, a value that determines                  what portion of traffic for the current resource record set is routed to the                  associated location.For more information about weighted resource record sets, see Setting Up Weighted Resource Record Sets in the Amazon Route 53                     Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. Required if you are creating a weighted resource record                  set.|


### AWS::Route53::RecordSetGroup
#### Properties
##### Comment
Any comments you want to include about the hosted zone.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HostedZoneId
The ID of the hosted zone.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional: You must specify either the                     HostedZoneName or HostedZoneId, but you cannot                  specify both.|

##### HostedZoneName
The name of the domain for the hosted zone where you want to add the record set.When you create a stack using an AWS::Route53::RecordSet that specifies                     HostedZoneName, AWS CloudFormation attempts to find a hosted zone whose name matches the                     HostedZoneName. If AWS CloudFormation cannot find a hosted zone with a matching domain                  name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create                  the stack.If you have multiple hosted zones with the same domain name, you must explicitly specify the                  hosted zone using HostedZoneId.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify either the                     HostedZoneName or HostedZoneId, but you cannot                  specify both.|

##### RecordSets
List of resource record sets to add.Type:: List of AWS::Route53::RecordSet objects, as shown in the                  following example:

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::Route53::HostedZone
#### Properties
##### HostedZoneConfig
A complex type that contains an optional comment about your hosted zone.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonRoute53HostedZoneConfigProperty](#amazonroute53hostedzoneconfigproperty)|No|

##### HostedZoneTags
An arbitrary set of tags (key–value pairs) for this hosted zone.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonRoute53HostedZoneTags](#amazonroute53hostedzonetags)|No|

##### Name
The name of the domain. For resource record types that include a domain name,                  specify a fully qualified domain name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### VPCs
One or more VPCs that you want to associate with this hosted zone. When you                  specify this property, AWS CloudFormation creates a private hosted zone.If this property was specified previously and you're modifying values, updates                  require no interruption. If this                  property wasn't specified and you add values, updates require replacement. Also, if this property was                  specified and you remove all values, updates require replacement.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonRoute53HostedZoneVPCs](#amazonroute53hostedzonevpcs)|No|


### AWS::Route53::HealthCheck
#### Properties
##### HealthCheckConfig
An Amazon Route 53 health check.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonRoute53HealthCheckConfig](#amazonroute53healthcheckconfig)|Yes|

##### HealthCheckTags
An arbitrary set of tags (key–value pairs) for this health check.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonRoute53HealthCheckTags](#amazonroute53healthchecktags)|No|


## S3
### AWS::S3::BucketPolicy
#### Properties
##### Bucket
The Amazon S3 bucket that the policy applies to.You cannot update this property. If you want to add or remove a bucket from a            bucket policy, you must modify your AWS CloudFormation template by creating a new bucket policy            resource and removing the old one. Then use the modified template to update your AWS CloudFormation            stack.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PolicyDocument
A policy document containing permissions to add to the specified bucket. For            more information, see Access Policy Language Overview in the            Amazon Simple Storage Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|


### AWS::S3::Bucket
#### Properties
##### AccessControl
A canned access control list (ACL) that grants predefined permissions to the                  bucket. For more information about canned ACLs, see Canned ACLs in the                     Amazon S3 documentation.Valid values: AuthenticatedRead |                            AwsExecRead | BucketOwnerRead |                            BucketOwnerFullControl |                            LogDeliveryWrite | Private |                            PublicRead |                        PublicReadWrite

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### BucketName
A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique                  physical ID and uses that ID for the bucket name. For more information, see Name Type. The bucket                  name must contain only lowercase letters, numbers, periods (.), and dashes                  (-).ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### CorsConfiguration
Rules that define cross-origin resource sharing of objects in this bucket.                        For more information, see Enabling                            Cross-Origin Resource Sharing in the                            Amazon Simple Storage Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3CorsConfiguration](#amazons3corsconfiguration)|No|

##### LifecycleConfiguration
Rules that define how Amazon S3 manages objects during their lifetime. For more                        information, see Object                            Lifecycle Management in the                            Amazon Simple Storage Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3LifecycleConfiguration](#amazons3lifecycleconfiguration)|No|

##### LoggingConfiguration
Settings that defines where logs are stored.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3LoggingConfiguration](#amazons3loggingconfiguration)|No|

##### NotificationConfiguration
Configuration that defines how Amazon S3 handles bucket notifications.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3NotificationConfiguration](#amazons3notificationconfiguration)|No|

##### ReplicationConfiguration
Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the VersioningConfiguration property.Amazon S3 can store replicated objects in only one destination (S3 bucket). The destination bucket must already exist and be in a different region than your source bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3ReplicationConfiguration](#amazons3replicationconfiguration)|No|

##### Tags
An arbitrary set of tags (key-value pairs) for this Amazon S3 bucket.ImportantWe don't recommend specifying more than 7 tags because doing so prevents the                AWS CLI and the AWS CloudFormation console and API actions from listing the tags for the Amazon S3                bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationResourceTags](#awscloudformationresourcetags)|No|

##### VersioningConfiguration
Enables multiple variants of all objects in this bucket. You might enable                        versioning to prevent objects from being deleted or overwritten by mistake                        or to archive objects so that you can retrieve previous versions of                        them.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3VersioningConfiguration](#amazons3versioningconfiguration)|No|

##### WebsiteConfiguration
Information used to configure the bucket as a static website. For more information, see Hosting Websites on Amazon                  S3.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3WebsiteConfigurationProperty](#amazons3websiteconfigurationproperty)|No|


## SDB
### AWS::SDB::Domain
#### Properties
##### Description
Information about the Amazon SimpleDB domain.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## SNS
### AWS::SNS::TopicPolicy
#### Properties
##### PolicyDocument
A policy document that contains permissions to add to the specified SNS            topics.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|

##### Topics
The Amazon Resource Names (ARN) of the topics to which you want to add the policy.            You can use the Ref function to            specify an AWS::SNS::Topic            resource.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|


### AWS::SNS::Topic
#### Properties
##### DisplayName
A developer-defined string that can be used to identify this SNS topic.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Subscription
The SNS subscriptions (endpoints) for this topic.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonSNSSubscriptionPropertyType](#amazonsnssubscriptionpropertytype)|No|

##### TopicName
A name for the topic. If you don't specify a name, AWS CloudFormation generates a unique                  physical ID and uses that ID for the topic name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWS::SNS::Subscription
#### Properties
##### Endpoint
The endpoint that receives notifications from the Amazon SNS topic. The endpoint                  value depends on the protocol that you specify. For more information, see the                     Subscribe Endpoint                  parameter in the Amazon Simple Notification Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Protocol
The subscription's protocol. For more information, see the Subscribe Protocol parameter in                  the Amazon Simple Notification Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### TopicArn
The Amazon Resource Name (ARN) of the topic to subscribe to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## SQS
### AWS::SQS::QueuePolicy
#### Properties
##### PolicyDocument
A policy document that contains the permissions for the specified Amazon SQS queues. For            more information about Amazon SQS policies, see Creating Custom Policies Using              the Access Policy Language in the            Amazon Simple Queue Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|

##### Queues
The URLs of the queues to which you want to add the policy. You can use the Ref function to specify an AWS::SQS::Queue resource.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|


### AWS::SQS::Queue
#### Properties
##### DelaySeconds
The time in seconds that the delivery of all messages in the queue will be delayed.            You can specify an integer value of 0 to 900 (15 minutes). The            default value is 0.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### MaximumMessageSize
The limit of how many bytes a message can contain before Amazon SQS rejects it.  You can            specify an integer value from 1024 bytes (1 KiB) to 262144            bytes (256 KiB). The default value is 262144 (256 KiB).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### MessageRetentionPeriod
The number of seconds Amazon SQS retains a message. You can specify an integer value from              60 seconds (1 minute) to 1209600 seconds (14 days). The            default value is 345600 seconds (4 days).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### QueueName
A name for the queue. If you don't specify a name, AWS CloudFormation generates a unique physical            ID and uses that ID for the queue name. For more information, see Name Type.ImportantIf you specify a name, you cannot perform updates that require replacement of this resource.You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ReceiveMessageWaitTimeSeconds
Specifies the duration, in seconds, that the ReceiveMessage action call            waits until a message is in the queue in order to include it in the response, as opposed            to returning an empty response if a message is not yet available. You can specify an            integer from 1 to 20. The short polling is used as the default            or when you specify 0 for this property. For more information, see Amazon SQS Long Poll.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### RedrivePolicy
Specifies an existing dead letter queue to receive messages after the source queue            (this queue) fails to process a message a specified number of times.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonSQSRedrivePolicy](#amazonsqsredrivepolicy)|No|

##### VisibilityTimeout
The length of time during which a message will be unavailable once a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.Values must be from 0 to 43200 seconds (12 hours). If no value is specified, the default value of                  30 seconds will be used.For more information about SQS Queue visibility timeouts, see Visibility Timeout in the Amazon Simple Queue Service Developer                     Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


## SSM
### AWS::SSM::Association
#### Properties
##### DocumentVersion
The version of the SSM document to associate with the target.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### InstanceId
The ID of the instance that the SSM document is associated with.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify the InstanceId or              Targets property.|

##### Name
The name of the SSM document.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Parameters
Parameter values that the SSM document uses at runtime.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### ScheduleExpression
A Cron expression that specifies when the association is applied to the target. For            supported expressions, see the ScheduleExpression parameter for the CreateAssociation action in the              Amazon EC2 Systems Manager API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Targets
The targets that the SSM document sends commands to.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2SystemsManagerAssociationTargets](#amazonec2systemsmanagerassociationtargets)|Conditional. You must specify the InstanceId or              Targets property.|


### AWS::SSM::Document
#### Properties
##### Content
A JSON object that describes an instance configuration. For more information,            see Creating SSM Documents in            the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|

##### DocumentType
The type of document to create that relates to the purpose of your document, such as            running commands, bootstrapping software, or automating tasks. For valid values, see the              CreateDocument action in the              Amazon EC2 Systems Manager API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


## StepFunctions
### AWS::StepFunctions::StateMachine
#### Properties
##### DefinitionString
The Amazon States Language definition of the state machine. For more information, see Amazon States Language in the AWS Step Functions Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
The Amazon Resource Name (ARN) of the IAM role to use for this state                  machine.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::StepFunctions::Activity
#### Properties
##### Name
The name of the activity to create. This name must be unique for your AWS                  account and region.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


## WAF
### AWS::WAF::ByteMatchSet
#### Properties
##### ByteMatchTuples
Settings for the ByteMatchSet, such as the bytes (typically a            string that corresponds with ASCII characters) that you want AWS WAF to search for in web            requests.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSWAFByteMatchSetByteMatchTuples](#awswafbytematchsetbytematchtuples)|No|

##### Name
A friendly name or description of the ByteMatchSet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::WAF::IPSet
#### Properties
##### IPSetDescriptors
The IP address type and IP address range (in CIDR notation) from which web            requests originate. If you associate the IPSet with a web ACL that is associated with a Amazon CloudFront            (CloudFront) distribution, this descriptor is the value of one of the following fields in the            CloudFront access logs:If the viewer did not use an HTTP proxy or a load balancer to send the                    requestIf the viewer did use an HTTP proxy or a load balancer to send the                    request

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSWAFIPSetIPSetDescriptors](#awswafipsetipsetdescriptors)|No|

##### Name
A friendly name or description of the IPSet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWS::WAF::SqlInjectionMatchSet
#### Properties
##### Name
A friendly name or description of the SqlInjectionMatchSet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SqlInjectionMatchTuples
The parts of web requests that you want AWS WAF to inspect for malicious SQL code            and, if you want AWS WAF to inspect a header, the name of the header.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples](#awswafsqlinjectionmatchsetsqlinjectionmatchtuples)|No|


### AWS::WAF::SizeConstraintSet
#### Properties
##### Name
A friendly name or description for the SizeConstraintSet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SizeConstraints
The size constraint and the part of the web request to check.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSWAFSizeConstraintSetSizeConstraint](#awswafsizeconstraintsetsizeconstraint)|Yes|


### AWS::WAF::Rule
#### Properties
##### MetricName
A friendly name or description for the metrics of the rule. For valid values,                  see the MetricName parameter for the CreateRule                  action in the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Name
A friendly name or description of the rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Predicates
The ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects to include in a rule. If you add more than one predicate to a rule, a request must match all conditions in order to be allowed or blocked.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSWAFRulePredicates](#awswafrulepredicates)|No|


### AWS::WAF::XssMatchSet
#### Properties
##### Name
A friendly name or description for the XssMatchSet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### XssMatchTuples
The parts of web requests that you want to inspect for cross-site scripting attacks.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSWAFXssMatchSetXssMatchTuple](#awswafxssmatchsetxssmatchtuple)|No|


### AWS::WAF::WebACL
#### Properties
##### DefaultAction
The action that you want AWS WAF to take when a request doesn't match the                  criteria in any of the rules that are associated with the web ACL.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSWAFWebACLAction](#awswafwebaclaction)|Yes|

##### MetricName
A friendly name or description for the Amazon CloudWatch metric of this web ACL. For valid values, see the MetricName parameter of the CreateWebACL action in the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Name
A friendly name or description of the web ACL.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Rules
The rules to associate with the web ACL and the settings for each rule.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSWAFWebACLRules](#awswafwebaclrules)|No|


## WorkSpaces
### AWS::WorkSpaces::Workspace
#### Properties
##### BundleId
The identifier of the bundle from which you want to create the workspace. A                  bundle specifies the details of the workspace, such as the installed applications                  and the size of CPU, memory, and storage. Use the DescribeWorkspaceBundles action to list the bundles that AWS                  offers.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### DirectoryId
The identifier of the AWS Directory Service directory in which you want to create the                  workspace. The directory must already be registered with Amazon WorkSpaces. Use the DescribeWorkspaceDirectories action to list the directories that are                  available.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### UserName
The name of the user to which the workspace is assigned. This user name must                  exist in the specified AWS Directory Service directory.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RootVolumeEncryptionEnabled
Indicates whether Amazon WorkSpaces encrypts data stored on the root volume                     (C: drive).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### UserVolumeEncryptionEnabled
Indicates whether Amazon WorkSpaces encrypts data stored on the user volume                     (D: drive).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### VolumeEncryptionKey
The AWS Key Management Service (AWS KMS) key ID that Amazon WorkSpaces uses to encrypt data stored on your                  workspace.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


# Resource Attribute Properties
### AmazonAPIGatewayUsagePlanApiStage
#### Properties
##### ApiId
The ID of an API that is in the specified Stage property that you want to associate with the usage plan.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Stage
The name of an API Gateway stage to associate with the usage plan.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonAPIGatewayUsagePlanQuotaSettings
#### Properties
##### Limit
The maximum number of requests that users can make within the specified time period.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Offset
For the initial time period, the number of requests to subtract from the specified limit. When you first implement a usage plan, the plan might start in the middle of the week or month. With this property, you can decrease the limit for this initial time period.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Period
The time period for which the maximum limit of requests applies, such as DAY or WEEK. For valid values, see the period property for the UsagePlan resource in the Amazon API Gateway REST API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonAPIGatewayApiKeyStageKey
#### Properties
##### RestApiId
The ID of a RestApi resource that includes the stage with which you want to associate the API key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### StageName
The name of the stage with which to associate the API key. The stage must be included in the RestApi resource that you specified in the RestApiId property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonAPIGatewayUsagePlanThrottleSettings
#### Properties
##### BurstLimit
The maximum API request rate limit over a time ranging from one to a few seconds. The maximum API request rate limit depends on whether the underlying token bucket is at its full capacity. For more information about request throttling, see Manage API Request Throttling in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### RateLimit
The API request steady-state rate limit (average requests per second over an extended period of time). For more information about request throttling, see Manage API Request Throttling in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AmazonAPIGatewayDeploymentStageDescription
#### Properties
##### CacheClusterEnabled
Indicates whether cache clustering is enabled for the stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### CacheClusterSize
The size of the stage's cache cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### CacheDataEncrypted
Indicates whether the cached responses are encrypted.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### CacheTtlInSeconds
The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### CachingEnabled
Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses. For more information, see Enable API Gateway Caching in a Stage to Enhance API Performance in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### ClientCertificateId
The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DataTraceEnabled
Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Description
A description of the purpose of the stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### LoggingLevel
The logging level for this method. For valid values, see the loggingLevel property of the Stage resource in the Amazon API Gateway API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MethodSettings
Configures settings for all of the stage's methods.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonAPIGatewayDeploymentStageDescriptionMethodSetting](#amazonapigatewaydeploymentstagedescriptionmethodsetting)|No|

##### MetricsEnabled
Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### StageName
The name of the stage, which API Gateway uses as the first path segment in the invoke Uniform Resource Identifier (URI).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ThrottlingBurstLimit
The number of burst requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### ThrottlingRateLimit
The number of steady-state requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Variables
A map that defines the stage variables. Variable names must consist of alphanumeric characters, and the values must match the following regular expression: [A-Za-z0-9-._~:/?#&amp;=,]+.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|


### AmazonAPIGatewayDeploymentStageDescriptionMethodSetting
#### Properties
##### CacheDataEncrypted
Indicates whether the cached responses are encrypted.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### CacheTtlInSeconds
The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### CachingEnabled
Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses. For more information, see Enable API Gateway Caching in a Stage to Enhance API Performance in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### DataTraceEnabled
Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### HttpMethod
The HTTP method.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### LoggingLevel
The logging level for this method. For valid values, see the loggingLevel property of the Stage resource in the Amazon API Gateway API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MetricsEnabled
Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### ResourcePath
The resource path for this method. Forward slashes (/) are encoded as ~1 and the initial slash must include a forward slash. For example, the path value /resource/subresource must be encoded as /~1resource~1subresource. To specify the root path, use only a slash (/).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ThrottlingBurstLimit
The number of burst requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### ThrottlingRateLimit
The number of steady-state requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AmazonAPIGatewayMethodIntegrationIntegrationResponse
#### Properties
##### ResponseParameters
The response parameters from the back-end response that API Gateway sends to the method            response. Specify response parameters as key-value pairs (string-to-string mappings).Use the destination as the key and the source as the value:The destination must be an existing response parameter in the MethodResponse property.The source must be an existing method request parameter or a static value. You                must enclose static values in single quotation marks and pre-encode these values                based on the destination specified in the request.For more information, see API Gateway API Request and Response              Parameter-Mapping Reference in the            API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### ResponseTemplates
The templates used to transform the integration response body. Specify templates as key-value pairs (string-to-string maps), with a content type as the key and a template as the value. For more information, see API Gateway API Request and Response Payload-Mapping Template Reference in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### SelectionPattern
A regular expression that specifies which error strings or status codes from the back end map to the integration response.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### StatusCode
The status code that API Gateway uses to map the integration response to a MethodResponse status code.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonAPIGatewayMethodIntegration
#### Properties
##### CacheKeyParameters
A list of request parameters whose values API Gateway will cache.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### CacheNamespace
An API-specific tag group of related cached parameters.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Credentials
The credentials required for the integration. To specify an AWS Identity and Access Management (IAM) role that API Gateway assumes, specify the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*.To use resource-based permissions on the AWS Lambda (Lambda) function, don't specify this property. Use the AWS::Lambda::Permission resource to permit API Gateway to call the             function. For more information, see Allow Amazon API Gateway to Invoke a Lambda Function in the             AWS Lambda Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### IntegrationHttpMethod
The integration's HTTP method type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. For the Type property, if you specify MOCK, this property is optional. For all other types, you must specify this property.|

##### IntegrationResponses
The response that API Gateway provides after a method's back end completes processing a request. API Gateway intercepts the back end's response so that you can control how API Gateway surfaces back-end responses. For example, you can map the back-end status codes to codes that you define.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonAPIGatewayMethodIntegrationIntegrationResponse](#amazonapigatewaymethodintegrationintegrationresponse)|No|

##### PassthroughBehavior
Indicates when API Gateway passes requests to the targeted back end. This behavior depends on the request's Content-Type header and whether you defined a mapping template for it.For more information and valid values, see the passthroughBehavior field in the API Gateway API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RequestParameters
The request parameters that API Gateway sends with the back-end request. Specify request parameters as key-value pairs (string-to-string maps), with a destination as the key and a source as the value.Specify the destination using the following pattern integration.request.location.name, where location is  querystring, path, or header, and name is a valid, unique parameter name.The source must be an existing method request parameter or a static value. Static values must be enclosed in single quotation marks and pre-encoded based on their destination in the request.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### RequestTemplates
A map of Apache Velocity templates that are applied on the request payload. The template that API Gateway uses is based on the value of the Content-Type header sent by the client. The content type value is the key, and the template is the value (specified as a string), such as the following snippet:For more information about templates, see API Gateway API Request and Response Payload-Mapping Template Reference in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### Type
The type of back end your method is running, such as HTTP or              MOCK. For all of the valid values, see the type property for the Integration resource in the              Amazon API Gateway REST API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Uri
The integration's Uniform Resource Identifier (URI).If you specify HTTP for the Type property, specify the API endpoint URL.If you specify MOCK for the Type property, don't specify this property.If you specify AWS for the Type property, specify an AWS service that follows the form: arn:aws:apigateway:region:subdomain.service|service:path|action/service_api. For example, a Lambda function URI follows the form:                arn:aws:apigateway:region:lambda:path/path. The path is usually in the form /2015-03-31/functions/LambdaFunctionARN/invocations. For more information, see the uri property of the Integration resource in the Amazon API Gateway REST API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specified HTTP or AWS for the Type property, you must specify this property.|


### AmazonAPIGatewayStageMethodSetting
#### Properties
##### CacheDataEncrypted
Indicates whether the cached responses are encrypted.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### CacheTtlInSeconds
The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### CachingEnabled
Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### DataTraceEnabled
Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### HttpMethod
The HTTP method.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### LoggingLevel
The logging level for this method. For valid values, see the loggingLevel property of the Stage resource in the Amazon API Gateway API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MetricsEnabled
Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### ResourcePath
The resource path for this method. Forward slashes (/) are encoded as ~1 and the initial slash must include a forward slash. For example, the path value /resource/subresource must be encoded as /~1resource~1subresource. To specify the root path, use only a slash (/).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ThrottlingBurstLimit
The number of burst requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### ThrottlingRateLimit
The number of steady-state requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AmazonAPIGatewayMethodMethodResponse
#### Properties
##### ResponseModels
The resources used for the response's content type. Specify response models as key-value pairs (string-to-string maps), with a content type as the key and a Model resource name as the value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### ResponseParameters
Response parameters that API Gateway sends to the client that called a method. Specify response parameters as key-value pairs (string-to-Boolean maps), with a destination as the key and a Boolean as the value. Specify the destination using the following pattern: method.response.header.name, where the name is a valid, unique header name. The Boolean specifies whether a parameter is required.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### StatusCode
The method response's status code, which you map to an IntegrationResponse.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonAPIGatewayRestApiS3Location
#### Properties
##### Bucket
The name of the S3 bucket where the OpenAPI file is stored.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ETag
The Amazon S3 ETag (a file checksum) of the OpenAPI file. If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Key
The file name of the OpenAPI file (Amazon S3 object name).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Version
For versioning-enabled buckets, a specific version of the OpenAPI file.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### ApplicationAutoScalingScalingPolicyStepScalingPolicyConfigurationStepAdjustment
#### Properties
##### MetricIntervalLowerBound
The lower bound of the breach size. The lower bound is the difference between the breach threshold and the aggregated CloudWatch metric value. If the metric value is within the lower and upper bounds, Application Auto Scaling triggers this step adjustment.If the metric value is above the breach threshold, the metric must be greater than or equal to the threshold plus the lower bound to trigger this step adjustment (the metric value is inclusive). If the metric value is below the breach threshold, the metric must be greater than the threshold plus the lower bound to trigger this step adjustment (the metric value is exclusive). A null value indicates negative infinity.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. You must specify at least one upper or lower bound.|

##### MetricIntervalUpperBound
The upper bound of the breach size. The upper bound is the difference between the breach threshold and the CloudWatch metric value. If the metric value is within the lower and upper bounds, Application Auto Scaling triggers this step adjustment.If the metric value is above the breach threshold, the metric must be less than the threshold plus the upper bound to trigger this step adjustment (the metric value is exclusive). If the metric value is below the breach threshold, the metric must be less than or equal to the threshold plus the upper bound to trigger this step adjustment (the metric value is inclusive). A null value indicates positive infinity.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. You must specify at least one upper or lower bound.|

##### ScalingAdjustment
The amount by which to scale. The adjustment is based on the value that you specified in the AdjustmentType property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### ApplicationAutoScalingScalingPolicyStepScalingPolicyConfiguration
#### Properties
##### AdjustmentType
Specifies whether the ScalingAdjustment value in the StepAdjustment property is an absolute number or a percentage of the current capacity. For valid values, see the AdjustmentType content for the StepScalingPolicyConfiguration data type in the Application Auto Scaling API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Cooldown
The amount of time, in seconds, after a scaling activity completes before any            further trigger-related scaling activities can start. For more information, see the              Cooldown content for the StepScalingPolicyConfiguration data type in the              Application Auto Scaling API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### MetricAggregationType
The aggregation type for the CloudWatch metrics. You can specify Minimum, Maximum, or Average. By default, AWS CloudFormation specifies Average. For more information, see Aggregation in the Amazon CloudWatch User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MinAdjustmentMagnitude
The minimum number of resources to adjust when a scaling activity is triggered. If you specify PercentChangeInCapacity for the adjustment type, the scaling policy scales the target by this amount.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### StepAdjustments
A set of adjustments that enable you to scale based on the size of the alarm breach.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[ApplicationAutoScalingScalingPolicyStepScalingPolicyConfigurationStepAdjustment](#applicationautoscalingscalingpolicystepscalingpolicyconfigurationstepadjustment)|No|


### AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType
#### Properties
##### DeviceName
The name of the device within Amazon EC2.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Ebs
The Amazon Elastic Block Store volume information.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationAutoScalingEBSBlockDevicePropertyType](#awscloudformationautoscalingebsblockdevicepropertytype)|Conditional You can specify either VirtualName or                     Ebs, but not both.|

##### NoDevice
Suppresses the device mapping. If NoDevice is set to true for the                  root device, the instance might fail the Amazon EC2 health check. Auto Scaling launches a                  replacement instance if the instance fails the health check.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### VirtualName
The name of the virtual device. The name must be in the form                        ephemeralX                   where X is a number starting from zero (0), for                  example, ephemeral0.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional You can specify either VirtualName or                     Ebs, but not both.|


### AutoScalingMetricsCollection
#### Properties
##### Granularity
The frequency at which Auto Scaling sends aggregated data to CloudWatch. For example, you can                  specify 1Minute to send aggregated data to CloudWatch every minute.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Metrics
The list of metrics to collect. If you don't specify any metrics, all metrics                  are enabled.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AWSCloudFormationAutoScalingEBSBlockDevicePropertyType
#### Properties
##### DeleteOnTermination
Indicates whether to delete the volume when the instance is terminated. By                  default, Auto Scaling uses true.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Encrypted
Indicates whether the volume is encrypted. Encrypted EBS volumes must be                  attached to instances that support Amazon EBS encryption. Volumes that you create from                  encrypted snapshots are automatically encrypted. You cannot create an encrypted                  volume from an unencrypted snapshot or an unencrypted volume from an encrypted                  snapshot.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Iops
The number of I/O operations per second (IOPS) that the volume supports. The                  maximum ratio of IOPS to volume size is 30.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### SnapshotId
The snapshot ID of the volume to use.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional If you specify both SnapshotId and                     VolumeSize, VolumeSize must be equal or greater than                  the size of the snapshot.|

##### VolumeSize
The volume size, in Gibibytes (GiB). This can be a number from 1 – 1024.                  If the volume type is EBS optimized, the minimum value is 10. For more information                  about specifying the volume type, see EbsOptimized in AWS::AutoScaling::LaunchConfiguration.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional If you specify both SnapshotId and                     VolumeSize, VolumeSize must be equal or greater than                  the size of the snapshot.|

##### VolumeType
The volume type. By default, Auto Scaling uses the standard volume type.                  For more information, see Ebs in the Auto Scaling API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AutoScalingTagsPropertyType
#### Properties
##### Key
The key name of the tag.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value for the tag.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PropagateAtLaunch
Set to true if you want AWS CloudFormation to copy the tag to EC2 instances that are launched as                  part of the auto scaling group. Set to false if you want the tag attached only to the                  auto scaling group and not copied to any instances launched as part of the auto scaling                  group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|


### AutoScalingNotificationConfigurations
#### Properties
##### NotificationTypes
A list of event types that trigger a notification. Event types can include any                  of the following types: autoscaling:EC2_INSTANCE_LAUNCH,                     autoscaling:EC2_INSTANCE_LAUNCH_ERROR,                     autoscaling:EC2_INSTANCE_TERMINATE,                     autoscaling:EC2_INSTANCE_TERMINATE_ERROR, and                     autoscaling:TEST_NOTIFICATION. For more information about event                  types, see DescribeAutoScalingNotificationTypes in the                     Auto Scaling API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### TopicARN
The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS)                  topic.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### ElasticBeanstalkSourceConfigurationPropertyType
#### Properties
##### ApplicationName
The name of the Elastic Beanstalk application that contains the configuration template that                  you want to use.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TemplateName
The name of the configuration template.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AutoScalingScalingPolicyStepAdjustments
#### Properties
##### MetricIntervalLowerBound
The lower bound of the breach size. The lower bound is the difference between the breach threshold and the aggregated CloudWatch metric value. If the metric value is within the lower and upper bounds, Auto Scaling triggers this step adjustment.If the metric value is above the breach threshold, the metric must be greater than or equal to the threshold plus the lower bound to trigger this step adjustment (the metric value is inclusive). If the metric value is below the breach threshold, the metric must be greater than the threshold plus the lower bound to trigger this step adjustment (the metric value is exclusive). A null value indicates negative infinity.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. You must specify at least one upper or lower bound.|

##### MetricIntervalUpperBound
The upper bound of the breach size. The upper bound is the difference between the breach threshold and the CloudWatch metric value. If the metric value is within the lower and upper bounds, Auto Scaling triggers this step adjustment.If the metric value is above the breach threshold, the metric must be less than the threshold plus the upper bound to trigger this step adjustment (the metric value is exclusive). If the metric value is below the breach threshold, the metric must be less than or equal to the threshold plus the upper bound to trigger this step adjustment (the metric value is inclusive). A null value indicates positive infinity.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. You must specify at least one upper or lower bound.|

##### ScalingAdjustment
The amount by which to scale. The adjustment is based on the value that you specified in the AdjustmentType property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### ElasticBeanstalkOptionSettingsPropertyType
#### Properties
##### Namespace
A unique namespace identifying the option's associated AWS resource. For a list                  of namespaces that you can use, see Configuration Options in the AWS Elastic Beanstalk                     Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### OptionName
The name of the configuration option. For a list of options that you can use,                  see Configuration Options in the AWS Elastic Beanstalk                     Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value of the setting.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### ElasticBeanstalkEnvironmentTierPropertyType
#### Properties
##### Name
The name of the environment tier. You can specify WebServer or                     Worker.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Type
The type of this environment tier. You can specify Standard for                  the WebServer tier or SQS/HTTP for the                     Worker tier.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Version
The version of this environment tier.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### ElasticBeanstalkSourceBundlePropertyType
#### Properties
##### S3Bucket
The Amazon S3 bucket where the data is located.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### S3Key
The Amazon S3 key where the data is located.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCertificateManagerCertificateDomainValidationOption
#### Properties
##### DomainName
Fully Qualified Domain Name (FQDN) of the Certificate that you are requesting.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ValidationDomain
The domain that domain name registrars use to send validation emails. Registrars use this value as the email address suffix when sending emails to verify your identity. This value must be the same as the domain name or a superdomain of the domain name. For more information, see the ValidationDomain content for the DomainValidationOption data type in the AWS Certificate Manager API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCloudFormationInterfaceLabel
#### Properties
##### default
The default label that the AWS CloudFormation console uses to name a parameter group or                  parameter.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSCloudFormationInterfaceParameterGroup
#### Properties
##### Label
A name for the parameter group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationInterfaceLabel](#awscloudformationinterfacelabel)|No|

##### Parameters
A list of case-sensitive parameter logical IDs to include in the group.                  Parameters must already be defined in the Parameters section of the                  template. A parameter can be included in only one parameter group.The console lists the parameters that you don't associate with a parameter                  group  in alphabetical order in the Other parameters group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### CloudFrontDistributionConfigOriginCustomOrigin
#### Properties
##### HTTPPort
The HTTP port the custom origin listens on.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### HTTPSPort
The HTTPS port the custom origin listens on.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### OriginProtocolPolicy
The origin protocol policy to apply to your origin.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### OriginSSLProtocols
The SSL protocols that CloudFront can use when establishing an HTTPS connection with your origin. By default, AWS CloudFormation specifies the TLSv1 and SSLv3 protocols.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AWSCloudFormationInterfaceParameterLabel
#### Properties
##### ParameterLogicalID
A label for a parameter. The label defines a friendly name or description that                  the AWS CloudFormation console shows on the Specify Parameters page when a                  stack is created or updated. The                        ParameterLogicalID key must be the                  case-sensitive logical ID of a valid parameter that has been declared in the                     Parameters section of the template.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCloudFormationInterfaceLabel](#awscloudformationinterfacelabel)|No|


### CloudFrontDistributionConfigCacheBehavior
#### Properties
##### AllowedMethods
HTTP methods that CloudFront processes and forwards to your Amazon S3 bucket or your                  custom origin. You can specify ["HEAD", "GET"], ["GET", "HEAD",                     "OPTIONS"], or ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH",                     "POST", "PUT"]. If you don't specify a value, AWS CloudFormation specifies                     ["HEAD", "GET"].

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### CachedMethods
HTTP methods for which CloudFront caches responses. You can specify ["HEAD",                     "GET"] or ["GET", "HEAD", "OPTIONS"]. If you don't specify                  a value, AWS CloudFormation specifies ["HEAD", "GET"].

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Compress
Indicates whether CloudFront automatically compresses certain files for this cache                  behavior. For more information, see Serving Compressed Files                  in the Amazon CloudFront Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### DefaultTTL
The default time in seconds that objects stay in CloudFront caches before CloudFront                  forwards another request to your custom origin to determine whether the object has                  been updated. This value applies only when your custom origin does not add HTTP                  headers, such as Cache-Control max-age, Cache-Control                     s-maxage, and Expires to objects.By default, AWS CloudFormation specifies 86400 seconds (one day). If the value                  of the MinTTL property is greater than the default value, CloudFront uses                  the minimum Time to Live (TTL) value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### ForwardedValues
Specifies how CloudFront handles query strings or cookies.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontForwardedValues](#cloudfrontforwardedvalues)|Yes|

##### MaxTTL
The maximum time in seconds that objects stay in CloudFront caches before CloudFront forwards                  another request to your custom origin to determine whether the object has been                  updated. This value applies only when your custom origin does not add HTTP                  headers, such as Cache-Control max-age, Cache-Control                     s-maxage, and Expires to objects.By default, AWS CloudFormation specifies 31536000 seconds (one year). If the value            of the MinTTL or DefaultTTL property is greater than the            maximum value, CloudFront uses the default TTL value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### MinTTL
The minimum amount of time that you want objects to stay in the cache before                  CloudFront queries your origin to see whether the object has been updated.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### PathPattern
The pattern to which this cache behavior applies. For example, you can specify                     images/*.jpg.When CloudFront receives an end-user request, CloudFront compares the requested path with                  path patterns in the order in which cache behaviors are listed in the                  template.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SmoothStreaming
Indicates whether to use the origin that is associated with this cache behavior                  to distribute media files in the Microsoft Smooth Streaming format. If you specify                     true, you can still use this cache behavior to distribute other                  content if the content matches the PathPattern value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### TargetOriginId
The ID value of the origin to which you want CloudFront to route requests when a                  request matches the value of the PathPattern property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TrustedSigners
A list of AWS accounts that can create signed URLs in order to access private                  content.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### ViewerProtocolPolicy
The protocol that users can use to access the files in the origin that you                  specified in the TargetOriginId property when a request matches the                  value of the PathPattern property. For more information about the                  valid values, see the ViewerProtocolPolicy content for the CacheBehavior data type in the                     Amazon CloudFront API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### CloudFrontDefaultCacheBehavior
#### Properties
##### AllowedMethods
HTTP methods that CloudFront processes and forwards to your Amazon S3 bucket or your                  custom origin. In AWS CloudFormation templates, you can specify ["HEAD", "GET"],                     ["GET", "HEAD", "OPTIONS"], or ["DELETE", "GET", "HEAD",                     "OPTIONS", "PATCH", "POST", "PUT"]. If you don't specify a value, AWS CloudFormation                  specifies ["HEAD", "GET"].

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### CachedMethods
HTTP methods for which CloudFront caches responses. In AWS CloudFormation templates, you can                  specify ["HEAD", "GET"] or ["GET", "HEAD", "OPTIONS"].                  If you don't specify a value, AWS CloudFormation specifies ["HEAD", "GET"].

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Compress
Indicates whether CloudFront automatically compresses certain files for this cache                  behavior. For more information, see Serving Compressed Files                  in the Amazon CloudFront Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### DefaultTTL
The default time in seconds that objects stay in CloudFront caches before CloudFront                  forwards another request to your custom origin to determine whether the object has                  been updated. This value applies only when your custom origin does not add HTTP                  headers, such as Cache-Control max-age, Cache-Control                     s-maxage, and Expires to objects.By default, AWS CloudFormation specifies 86400 seconds (one day). If the value                  of the MinTTL property is greater than the default value, CloudFront uses                  the minimum Time To Live (TTL) value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### ForwardedValues
Specifies how CloudFront handles query strings or cookies.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontForwardedValues](#cloudfrontforwardedvalues)|Yes|

##### MaxTTL
The maximum time in seconds that objects stay in CloudFront caches before CloudFront                  forwards another request to your custom origin to determine whether the object has                  been updated. This value applies only when your custom origin does not add HTTP                  headers, such as Cache-Control max-age, Cache-Control                     s-maxage, and Expires to objects.By default, AWS CloudFormation specifies 31536000 seconds (one year). If the                  value of the MinTTL or DefaultTTL property is greater                  than the maximum value, CloudFront uses the default TTL value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### MinTTL
The minimum amount of time that you want objects to stay in the cache before                  CloudFront queries your origin to see whether the object has been updated.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SmoothStreaming
Indicates whether to use the origin that is associated with this cache behavior                  to distribute media files in the Microsoft Smooth Streaming format.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### TargetOriginId
The value of ID for the origin that CloudFront routes requests to when the default                  cache behavior is applied to a request.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TrustedSigners
A list of AWS accounts that can create signed URLs in order to access private                  content.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### ViewerProtocolPolicy
The protocol that users can use to access the files in the origin that you                  specified in the TargetOriginId property when the default cache                  behavior is applied to a request. For more information about the valid values, see                  the ViewerProtocolPolicy content for the DefaultCacheBehavior                  data type in the Amazon CloudFront API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### CloudFrontDistributionConfigCustomErrorResponse
#### Properties
##### ErrorCachingMinTTL
The minimum amount of time, in seconds, that Amazon CloudFront caches the HTTP status code                  that you specified in the ErrorCode property. The default value is                     300.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### ErrorCode
An HTTP status code for which you want to specify a custom error page. You can                  specify 400, 403, 404, 405,                     414, 500, 501, 502,                     503, or 504.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### ResponseCode
The HTTP status code that CloudFront returns to viewer along with the custom error                  page. You can specify 200, 400, 403,                     404, 405, 414, 500,                     501, 502, 503, or                  504.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. Required if you specified the                     ResponsePagePath property.|

##### ResponsePagePath
The path to the custom error page that CloudFront returns to a viewer when your                  origin returns the HTTP status code that you specified in the                     ErrorCode property. For example, you can specify                     /404-errors/403-forbidden.html.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. Required if you specified the ResponseCode                  property.|


### CloudFrontDistributionConfigurationRestrictions
#### Properties
##### GeoRestriction
The countries in which viewers are able to access your content.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontDistributionConfigRestrictionsGeoRestriction](#cloudfrontdistributionconfigrestrictionsgeorestriction)|Yes|


### CloudFrontDistributionConfigRestrictionsGeoRestriction
#### Properties
##### Locations
The two-letter, uppercase country code for a country that you want to include                  in your blacklist or whitelist.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. Required if you specified blacklist or                     whitelist for the RestrictionType property.|

##### RestrictionType
The method to restrict distribution of your content:Prevents viewers in the countries that you specified from accessing                              your content.Allows viewers in the countries that you specified to access your                              content.No distribution restrictions by country.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### CloudFrontDistributionConfig
#### Properties
##### Aliases
CNAMEs (alternate domain names), if any, for the distribution.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### CacheBehaviors
A list of CacheBehavior types for the distribution.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[CloudFrontDistributionConfigCacheBehavior](#cloudfrontdistributionconfigcachebehavior)|No|

##### Comment
Any comments that you want to include about the distribution.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### CustomErrorResponses
Whether CloudFront replaces HTTP status codes in the 4xx and                     5xx range with custom error messages before returning the response                  to the viewer.Type List of CloudFront      DistributionConfig CustomErrorResponse

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DefaultCacheBehavior
The default cache behavior that is triggered if you do not specify the                     CacheBehavior property or if files don't match any of the values                  of PathPattern in the CacheBehavior property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontDefaultCacheBehavior](#cloudfrontdefaultcachebehavior)|Yes|

##### DefaultRootObject
The object (such as index.html) that you want CloudFront to request from                  your origin when the root URL for your distribution (such as                     http://example.com/) is requested.NoteSpecifying a default root object avoids exposing the contents of your distribution.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Enabled
Controls whether the distribution is enabled to accept end user requests for content.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### HttpVersion
The latest HTTP version that viewers can use to communicate with CloudFront. Viewers                  that don't support the latest version automatically use an earlier HTTP version.                  By default, AWS CloudFormation specifies http1.1.For valid values, see the HttpVersion content for the DistributionConfig data                  type in the Amazon CloudFront API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Logging
Controls whether access logs are written for the distribution. To turn on                  access logs, specify this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontLogging](#cloudfrontlogging)|No|

##### Origins
A list of origins for this CloudFront distribution. For each origin, you can specify                  whether it is an Amazon S3 or custom origin.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[CloudFrontDistributionConfigOrigin](#cloudfrontdistributionconfigorigin)|Yes|

##### PriceClass
The price class that corresponds with the maximum price that you want to pay                  for the CloudFront service. For more information, see Choosing the Price Class in the                     Amazon CloudFront Developer Guide.For more information about the valid values, see the PriceClass                  content for the DistributionConfig data type in the                     Amazon CloudFront API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Restrictions
Specifies restrictions on who or how viewers can access your content.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontDistributionConfigurationRestrictions](#cloudfrontdistributionconfigurationrestrictions)|No|

##### ViewerCertificate
The certificate to use when viewers use HTTPS to request objects.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontDistributionConfigurationViewerCertificate](#cloudfrontdistributionconfigurationviewercertificate)|No|

##### WebACLId
The AWS WAF web ACL to associate                  with this distribution. AWS WAF is a web application firewall that enables you to                  monitor the HTTP and HTTPS requests that are forwarded to CloudFront and to control who                  can access your content. CloudFront permits or forbids requests based on conditions that                  you specify, such as the IP addresses from which requests originate or the values                  of query strings.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### CloudFrontDistributionConfigurationViewerCertificate
#### Properties
##### AcmCertificateArn
If you're using an alternate domain name, the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate. Use the ACM service to provision and manage your certificates. For more information, see the AWS Certificate Manager User Guide.NoteCurrently, you can specify only certificates that are in the US East (N. Virginia) region.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify one of the following properties: AcmCertificateArn, CloudFrontDefaultCertificate, or IamCertificateId.|

##### CloudFrontDefaultCertificate
Indicates whether to use the default certificate for your CloudFront domain name when                  viewers use HTTPS to request your content.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Conditional. You must specify one of the following properties: AcmCertificateArn, CloudFrontDefaultCertificate, or IamCertificateId.|

##### IamCertificateId
If you're using an alternate domain name, the ID of a server certificate that was purchased from a certificate authority. This ID is the ServerCertificateId value, which AWS Identity and Access Management (IAM) returns when the certificate is added to the IAM certificate store, such as ASCACKCEVSQ6CEXAMPLE1.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify one of the following properties: AcmCertificateArn, CloudFrontDefaultCertificate, or IamCertificateId.|

##### MinimumProtocolVersion
The minimum version of the SSL protocol that you want CloudFront to use for HTTPS                  connections. CloudFront serves your objects only to browsers or devices that support at                  least the SSL version that you specify. For valid values, see the                     MinimumProtocolVersion content for the ViewerCertificate data                  type in the Amazon CloudFront API Reference.AWS CloudFormation specifies SSLv3 by default. However, if you specify the IamCertificateId or AcmCertificateArn property and specify SNI only for the SslSupportMethod property, AWS CloudFormation specifies TLSv1 for the minimum protocol version.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SslSupportMethod
Specifies how CloudFront serves HTTPS requests. For valid values, see the                     SslSupportMethod content for the ViewerCertificate data                  type in the Amazon CloudFront API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. Required if you specified the                     IamCertificateId or AcmCertificateArn                  property.|


### CloudFrontLogging
#### Properties
##### Bucket
The Amazon S3 bucket address where access logs are stored, for example,                     mybucket.s3.amazonaws.com.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### IncludeCookies
Indicates whether CloudFront includes cookies in access logs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Prefix
A prefix for the access log file names for this distribution.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### CloudFrontForwardedValuesCookies
#### Properties
##### Forward
The cookies to forward to the origin of the cache behavior. You can specify                     none, all, or whitelist.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### WhitelistedNames
The names of cookies to forward to the origin for the cache behavior.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. Required if you specified whitelist for                  the Forward property.|


### CloudFrontForwardedValues
#### Properties
##### Cookies
Forwards specified cookies to the origin of the cache behavior. For more information, see Configuring CloudFront to Cache Based on Cookies in the Amazon CloudFront Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontForwardedValuesCookies](#cloudfrontforwardedvaluescookies)|No|

##### Headers
Specifies the headers that you want Amazon CloudFront to forward to the origin for this                  cache behavior (whitelisted headers). For the headers that you specify, Amazon CloudFront                  also caches separate versions of a specified object that is based on the header                  values in viewer requests.For custom origins, if you specify a single asterisk (["*"]), all headers are forwarded. If you don't specify a value, only the default headers are forwarded. For Amazon S3 origins, you can forward only selected headers; specifying * is not supported. For more information, see Configuring CloudFront to Cache Objects Based on Request Headers in the Amazon CloudFront Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### QueryString
Indicates whether you want CloudFront to forward query strings to the origin that is                  associated with this cache behavior. If so, specify true; if not,                  specify false. For more information, see Configuring CloudFront to Cache Based on Query String Parameters in the Amazon CloudFront Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### QueryStringCacheKeys
If you forward query strings to the origin, specifies the query string                  parameters that CloudFront uses to determine which content to cache. For more                  information, see Configuring                     CloudFront to Cache Based on Query String Parameters in the                     Amazon CloudFront Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### CloudFrontDistributionConfigOriginOriginCustomHeader
#### Properties
##### HeaderName
The name of a header that CloudFront forwards to your origin. For more information, see Forwarding Custom Headers to Your Origin (Web Distributions Only) in the Amazon CloudFront Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### HeaderValue
The value for the header that you specified in the HeaderName property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### CloudFrontDistributionConfigOrigin
#### Properties
##### CustomOriginConfig
Origin information to specify a custom origin.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontDistributionConfigOriginCustomOrigin](#cloudfrontdistributionconfigorigincustomorigin)|Conditional. You cannot use CustomOriginConfig and                     S3OriginConfig in the same distribution, but you                     must specify one or the other.|

##### DomainName
The DNS name of the Amazon Simple Storage Service (S3) bucket or the HTTP server from which you want                  CloudFront to get objects for this origin.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Id
An identifier for the origin. The value of Id must be unique                  within the distribution.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### OriginCustomHeaders
Custom headers that CloudFront includes when it forwards a request to your origin.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[CloudFrontDistributionConfigOriginOriginCustomHeader](#cloudfrontdistributionconfigoriginorigincustomheader)|No|

##### OriginPath
The path that CloudFront uses to request content from an S3 bucket or custom origin.                  The combination of the DomainName and OriginPath                  properties must resolve to a valid path. The value must start with a slash mark                     (/) and cannot end with a slash mark.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### S3OriginConfig
Origin information to specify an S3 origin.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[CloudFrontDistributionConfigOriginS3Origin](#cloudfrontdistributionconfigorigins3origin)|Conditional. You cannot use S3OriginConfig and                     CustomOriginConfig in the same distribution, but you                     must specify one or the other.|


### CloudFrontDistributionConfigOriginS3Origin
#### Properties
##### OriginAccessIdentity
The CloudFront origin access identity to associate with the origin. This is used to                  configure the origin so that end users can access objects in an Amazon S3 bucket                  through CloudFront only.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSCodeBuildProjectArtifacts
#### Properties
##### Location
The location where AWS CodeBuild saves the build output artifacts. For valid values, see the              artifacts-location field in the              AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify CODEPIPELINE or              NO_ARTIFACTS for the Type property, don't specify this            property. For all of the other types, you must specify this property.|

##### Name
The name of the build output folder where AWS CodeBuild saves the build output artifacts.            For .zip packages, the name of the build output .zip file that contains the build output            artifacts.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify CODEPIPELINE or              NO_ARTIFACTS for the Type property, don't specify this            property. For all of the other types, you must specify this property.|

##### NamespaceType
The information AWS CodeBuild adds to the build output path, such as a build ID. For more            information, see the namespaceType field in the              AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Packaging
Indicates how AWS CodeBuild packages the build output artifacts. For valid values, see the              packaging field in the            AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Path
The path to the build output folder where AWS CodeBuild saves the build output            artifacts.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Type
The type of build output artifact. For valid values, see the artifacts-type field            in the AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodeBuildProjectEnvironmentEnvironmentVariables
#### Properties
##### Name
The name of an environment variable.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value of the environment variable.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodeCommitRepositoryTrigger
#### Properties
##### Branches
The names of the branches in the AWS CodeCommit repository that contain events that you want            to include in the trigger. If you don't specify at least one branch, the trigger applies            to all branches.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### CustomData
When an event is triggered, additional information that AWS CodeCommit includes when it sends            information to the target.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DestinationArn
The Amazon Resource Name (ARN) of the resource that is the target for this trigger.            For valid targets, see Manage Triggers for              an AWS CodeCommit Repository in the AWS CodeCommit User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Events
The repository events for which AWS CodeCommit sends information to the target, which you            specified in the DestinationArn property. If you don't specify events, the            trigger runs for all repository events. For valid values, see the RepositoryTrigger data type in            the AWS CodeCommit API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Name
A name for the trigger.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSCodeBuildProjectEnvironment
#### Properties
##### ComputeType
The type of compute environment, such as BUILD_GENERAL1_SMALL. The            compute type determines the number of CPU cores and memory the build environment uses.            For valid values, see the computeType field in the            AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### EnvironmentVariables
The environment variables that your builds can use. For more information, see the              environmentVariables field in the              AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSCodeBuildProjectEnvironmentEnvironmentVariables](#awscodebuildprojectenvironmentenvironmentvariables)|No|

##### Image
The Docker image identifier that the build environment uses. For more information,            see the image field in the            AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Type
The type of build environment. For valid values, see the environment-type field in the              AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodeDeployDeploymentConfigMinimumHealthyHosts
#### Properties
##### Type
The type of count to use, such as an absolute value or a percentage of the                  total number of instances in the deployment. For valid values, see MinimumHealthyHosts in                  the AWS CodeDeploy API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Value
The minimum number of healthy instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AWSCodeBuildProjectSource
#### Properties
##### BuildSpec
The build specification, specified as a single string. For more information, see the              Build Spec                Reference in the AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Location
The location of the source code in the specified repository type. For more            information, see the source-location field in the              AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify CODEPIPELINE for the              Type property, don't specify this property. For all of the other types,            you must specify this property.|

##### Type
The type of repository that contains your source code. For valid values, see the              source-type field in the              AWS CodeBuild User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location
#### Properties
##### Bucket
The name of the S3 bucket where the application revision is stored.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### BundleType
The file type of the application revision, such as tar,                     tgz, or zip. For valid values, see S3Location in the                     AWS CodeDeploy API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ETag
The Amazon S3 ETag (a file checksum) of the application revision. If you don't                  specify a value, AWS CodeDeploy skips the ETag validation of your application                  revision.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Key
The file name of the application revision (Amazon S3 object name).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Version
For versioning-enabled buckets, a specific version of the application                  revision.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation
#### Properties
##### CommitId
The SHA1 commit ID of the GitHub commit to use as your application                  revision.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Repository
The GitHub account and repository name that includes the application revision.                  Specify the value as                        account/repository_name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodeDeployDeploymentGroupDeploymentRevision
#### Properties
##### GitHubLocation
If your application revision is stored in GitHub, information about the                  location where it is stored.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation](#awscodedeploydeploymentgroupdeploymentrevisiongithublocation)|No|

##### RevisionType
The application revision's location, such as in an S3 bucket or GitHub                  repository. For valid values, see RevisionLocation in the                     AWS CodeDeploy API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### S3Location
If the application revision is stored in an S3 bucket, information about the                  location.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location](#awscodedeploydeploymentgroupdeploymentrevisions3location)|No|


### AWSCodeDeployDeploymentGroupDeployment
#### Properties
##### Description
A description about this deployment.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### IgnoreApplicationStopFailures
Whether to continue the deployment if the                     ApplicationStop deployment lifecycle event fails. If you                  want AWS CodeDeploy to continue the deployment lifecycle even if the                     ApplicationStop event fails on an instance, specify                     true. The deployment continues to the BeforeInstall                  deployment lifecycle event. If you want AWS CodeDeploy to stop deployment on the instance                  if the ApplicationStop event fails, specify false or do                  not specify a value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Revision
The location of the application revision to deploy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodeDeployDeploymentGroupDeploymentRevision](#awscodedeploydeploymentgroupdeploymentrevision)|Yes|


### AWSCodeDeployDeploymentGroupEc2TagFilters
#### Properties
##### Key
Filter instances with this key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Type
The filter type. For example, you can filter instances by the key, tag value,                  or both. For valid values, see EC2TagFilter in the AWS CodeDeploy API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
Filter instances with this tag value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSCodePipelinePipelineArtifactStore
#### Properties
##### EncryptionKey
The encryption key AWS CodePipeline uses to encrypt the data in the artifact store, such                  as an AWS Key Management Service (AWS KMS) key. If you don't specify a key, AWS CodePipeline uses the default                  key for Amazon Simple Storage Service (Amazon S3).

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodePipelinePipelineArtifactStoreEncryptionKey](#awscodepipelinepipelineartifactstoreencryptionkey)|No|

##### Location
The location where AWS CodePipeline stores artifacts for a pipeline, such as an S3                  bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Type
The type of the artifact store, such as Amazon S3. For valid values, see ArtifactStore in the                     AWS CodePipeline API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodePipelinePipelineDisableInboundStageTransitions
#### Properties
##### Reason
An explanation of why the transition between two stages of a pipeline was                  disabled.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StageName
The name of the stage to which transitions are disabled.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters
#### Properties
##### Key
Filter on-premises instances with this key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Type
The filter type. For example, you can filter on-premises instances by the key,                  tag value, or both. For valid values, see EC2TagFilter in the                     AWS CodeDeploy API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Value
Filter on-premises instances with this tag value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSCodePipelinePipelineArtifactStoreEncryptionKey
#### Properties
##### Id
The ID of the key. For an AWS KMS key, specify the key ID or key Amazon Resource                  Number (ARN).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Type
The type of encryption key, such as KMS. For valid values, see                     EncryptionKey in the                     AWS CodePipeline API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodePipelinePipelineStagesActionsActionTypeId
#### Properties
##### Category
A category that defines which action type the owner (the entitiy that performs                  the action) performs. The category that you select determine the providers that                  you can specify for the Provider property. For valid values, see                     ActionTypeId in the                     AWS CodePipeline API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Owner
The entity that performs the action. For valid values, see ActionTypeId in the                     AWS CodePipeline API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Provider
The service provider that the action calls. The providers that you can specify                  are determined by the category that you select. For example, a valid provider for                  the Deploy category is AWS CodeDeploy, which you would specify as                     CodeDeploy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Version
A version identifier for this action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodePipelinePipelineStagesActionsInputArtifacts
#### Properties
##### Name
The name of the artifact that the AWS CodePipeline action works on, such as My                     App.The input artifact of an action must match the output artifact from                  any preceding action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodePipelinePipelineStagesActionsOutputArtifacts
#### Properties
##### Name
The name of the artifact that is the result of an AWS CodePipeline action, such as                     My App. Output artifact names must be unique within a                  pipeline.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodePipelinePipelineStagesActions
#### Properties
##### ActionTypeId
Specifies the action type and the provider of the action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSCodePipelinePipelineStagesActionsActionTypeId](#awscodepipelinepipelinestagesactionsactiontypeid)|Yes|

##### Configuration
The action's configuration. These are key-value pairs that specify input values                  for an action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|No|

##### InputArtifacts
The name or ID of the artifact that the action consumes, such as a test or                  build artifact.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSCodePipelinePipelineStagesActionsInputArtifacts](#awscodepipelinepipelinestagesactionsinputartifacts)|No|

##### Name
The action name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### OutputArtifacts
The artifact name or ID that is a result of the action, such as a test or build                  artifact.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSCodePipelinePipelineStagesActionsOutputArtifacts](#awscodepipelinepipelinestagesactionsoutputartifacts)|No|

##### RoleArn
The Amazon Resource Name (ARN) of a service role that the action uses. The                  pipeline's role assumes this role.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RunOrder
The order in which AWS CodePipeline runs this action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AWSCodePipelinePipelineStages
#### Properties
##### Actions
The actions to include in this stage.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSCodePipelinePipelineStagesActions](#awscodepipelinepipelinestagesactions)|Yes|

##### Blockers
The gates included in a stage.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSCodePipelinePipelineStagesBlockers](#awscodepipelinepipelinestagesblockers)|No|

##### Name
A name for this stage.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodePipelinePipelineStagesBlockers
#### Properties
##### Name
The name of the gate declaration.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Type
The type of gate declaration. For valid values, see BlockerDeclaration in                  the AWS CodePipeline API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSConfigConfigRuleScope
#### Properties
##### ComplianceResourceId
The ID of an AWS resource that you want AWS Config to evaluate against a rule. If you            specify an ID, you must also specify a resource type for the              ComplianceResourceTypes property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ComplianceResourceTypes
The types of AWS resources that you want AWS Config to evaluate against the rule. If you            specify the ComplianceResourceId property, specify only one resource            type.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Conditional. If you specify a value for the              ComplianceResourceId property, you must also specify this            property.|

##### TagKey
The tag key that is applied to the AWS resources that you want AWS Config to evaluate            against the rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify a tag value, you must specify this            property.|

##### TagValue
The tag value that is applied to the AWS resources that you want AWS Config to evaluate            against the rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify a tag key, you must specify this            property.|


### AWSConfigConfigRuleSourceSourceDetails
#### Properties
##### EventSource
The source, such as an AWS service, that generate events, triggering AWS Config to            evaluate your AWS resources. For valid values, see the SourceDetail data type in the              AWS Config API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MessageType
The type of Amazon Simple Notification Service (Amazon SNS) message that triggers AWS Config to run an            evaluation.To run an evaluation when AWS Config delivers a configuration item change notification,            specify ConfigurationItemChangeNotification.To run an evaluation when AWS Config delivers a configuration snapshot, specify              ConfigurationSnapshotDeliveryCompleted.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSConfigConfigRuleSource
#### Properties
##### Owner
Indicates who owns and manages the AWS Config rule. For valid values, see the Source data type in the              AWS Config API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SourceDetails
Provides the source and type of event that triggers AWS Config to evaluate your AWS            resources.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AWSConfigConfigRuleSourceSourceDetails](#awsconfigconfigrulesourcesourcedetails)|No|

##### SourceIdentifier
For AWS managed rules, the identifier of the rule. For a list of identifiers, see              AWS Managed              Rules in the AWS Config Developer Guide.For customer managed rules, the Amazon Resource Name (ARN) of the rule's            Lambda function.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSConfigConfigurationRecorderRecordingGroup
#### Properties
##### AllSupported
Indicates whether to record all supported resource types. If you specify this            property, do not specify the ResourceTypes property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### IncludeGlobalResourceTypes
Indicates whether AWS Config records all supported global resource types. When AWS Config            supports new global resource types, AWS Config will automatically start recording them if you            enable this property.NoteIf you set this property to true, you must set the                AllSupported property to              true.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### ResourceTypes
A list of valid AWS resource types to include in this recording group, such as              AWS::EC2::Instance or              AWS::CloudTrail::Trail. If you specify this property, do not            specify the AllSupported property. For a list of supported resource types,            see Supported resource types in the AWS Config Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties
#### Properties
##### DeliveryFrequency
The frequency with which AWS Config delivers configuration snapshots. For valid            values, see ConfigSnapshotDeliveryProperties in the            AWS Config API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### CloudWatchMetricDimensionPropertyType
#### Properties
##### Name
The name of the dimension, from 1–255 characters in length.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value representing the dimension measurement, from 1–255 characters in length.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSDataPipelineParameterObjectsAttributes
#### Properties
##### Key
Specifies the name of a parameter attribute. To view parameter attributes, see                     Creating a Pipeline Using                     Parameterized Templates in the                  AWS Data Pipeline Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StringValue
A parameter attribute value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional if the key that you are using requires it.|


### AWSDataPipelinePipelineParameterObjects
#### Properties
##### Attributes
Key-value pairs that define the attributes of the parameter object.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSDataPipelineParameterObjectsAttributes](#awsdatapipelineparameterobjectsattributes)|Yes|

##### Id
The identifier of the parameter object.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSDataPipelinePipelineParameterValues
#### Properties
##### Id
The ID of a parameter object.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StringValue
A value to associate with the parameter object.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSDataPipelineDataPipelineObjectFields
#### Properties
##### Key
Specifies the name of a field for a particular object. To view fields for a                  data pipeline object, see Pipeline Object Reference in the                     AWS Data Pipeline Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RefValue
A field value that you specify as an identifier of another object in the same                  pipeline definition.NoteYou can specify the field value as either a string value                        (StringValue) or a reference to another object                        (RefValue), but not both.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional if the key that you are using requires it.|

##### StringValue
A field value that you specify as a string. To view valid values for a                  particular field, see Pipeline                     Object Reference in the AWS Data Pipeline Developer Guide.NoteYou can specify the field value as either a string value                        (StringValue) or a reference to another object                        (RefValue), but not both.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional if the key that you are using requires it.|


### AWSDataPipelinePipelineObjects
#### Properties
##### Fields
Key-value pairs that define the properties of the object.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSDataPipelineDataPipelineObjectFields](#awsdatapipelinedatapipelineobjectfields)|Yes|

##### Id
Identifier of the object.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Name
Name of the object.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSDataPipelinePipelinePipelineTags
#### Properties
##### Key
The key name of a tag.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value to associate with the key name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSDirectoryServiceMicrosoftADVpcSettings
#### Properties
##### SubnetIds
A list of two subnet IDs for the directory servers. Each subnet must be in different Availability Zones (AZs). AWS Directory Service creates a directory server and a DNS server in each subnet.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### VpcId
The VPC ID in which to create the Microsoft Active Directory server.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### DynamoDBAttributeDefinitions
#### Properties
##### AttributeName
The name of an attribute. Attribute names can be 1 – 255 characters long                  and have no character restrictions.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### AttributeType
The data type for the attribute. You can specify S for string                  data, N for numeric data, or B for binary data.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSDirectoryServiceSimpleADVpcSettings
#### Properties
##### SubnetIds
A list of two subnet IDs for the directory servers. Each subnet must be in different Availability Zones (AZ). AWS Directory Service creates a directory server and a DNS server in each subnet.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### VpcId
The VPC ID in which to create the Simple AD directory.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### DynamoDBGlobalSecondaryIndexes
#### Properties
##### IndexName
The name of the global secondary index. The index name can be 3 – 255                  characters long and have no character restrictions.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### KeySchema
The complete index key schema for the global secondary index, which consists of                  one or more pairs of attribute names and key types.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[DynamoDBKeySchema](#dynamodbkeyschema)|Yes|

##### Projection
Attributes that are copied (projected) from the source table into the index.                  These attributes are in addition to the primary key attributes and index key                  attributes, which are automatically projected.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[DynamoDBProjectionObject](#dynamodbprojectionobject)|Yes|

##### ProvisionedThroughput
The provisioned throughput settings for the index.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[DynamoDBProvisionedThroughput](#dynamodbprovisionedthroughput)|Yes|


### DynamoDBProvisionedThroughput
#### Properties
##### ReadCapacityUnits
Sets the desired minimum number of consistent reads of items (up to 1KB in                  size) per second for the specified table before Amazon DynamoDB balances the                  load.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### WriteCapacityUnits
Sets the desired minimum number of consistent writes of items (up to 1KB in                  size) per second for the specified table before Amazon DynamoDB balances the                  load.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### DynamoDBLocalSecondaryIndexes
#### Properties
##### IndexName
The name of the local secondary index. The index name can be 3 – 255                  characters long and have no character restrictions.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### KeySchema
The complete index key schema for the local secondary index, which consists of                  one or more pairs of attribute names and key types. For local secondary indexes,                  the hash key must be the same as that of the source table.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[DynamoDBKeySchema](#dynamodbkeyschema)|Yes|

##### Projection
Attributes that are copied (projected) from the source table into the index.                  These attributes are additions to the primary key attributes and index key                  attributes, which are automatically projected.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[DynamoDBProjectionObject](#dynamodbprojectionobject)|Yes|


### DynamoDBKeySchema
#### Properties
##### AttributeName
The attribute name that is used as the primary key for this table. Primary key                  element names can be 1 – 255 characters long and have no character                  restrictions.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### KeyType
Represents the attribute data, consisting of the data type and the attribute                  value itself. You can specify HASH or RANGE.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### DynamoDBProjectionObject
#### Properties
##### NonKeyAttributes
The non-key attribute names that are projected into the index.For local secondary indexes, the total count of NonKeyAttributes                  summed across all of the local secondary indexes must not exceed 20. If you                  project the same attribute into two different indexes, this counts as two distinct                  attributes in determining the total.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### ProjectionType
The set of attributes that are projected into the index:Only the index and primary keys are projected into the                              index.Only the specified table attributes are projected into the index.                              The list of projected attributes are in                              NonKeyAttributes.All of the table attributes are projected into the index.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### DynamoDBTableStreamSpecification
#### Properties
##### StreamViewType
Determines the information that the stream captures when an item in the table                  is modified. For valid values, see StreamSpecification in                  the Amazon DynamoDB API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonEC2BlockDeviceMappingProperty
#### Properties
##### DeviceName
The name of the device within Amazon EC2.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Ebs


| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonElasticBlockStoreBlockDeviceProperty](#amazonelasticblockstoreblockdeviceproperty)|Conditional You can specify either VirtualName or                     Ebs, but not both.|

##### NoDevice
This property can be used to unmap a defined device.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### VirtualName
The name of the virtual device. The name must be in the form                        ephemeralX                   where X is a number starting from zero (0); for                  example, ephemeral0.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional You can specify either VirtualName or                     Ebs, but not both.|


### AmazonElasticBlockStoreBlockDeviceProperty
#### Properties
##### DeleteOnTermination
Determines whether to delete the volume on instance termination. The default                  value is true.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Encrypted
Indicates whether the volume is encrypted. Encrypted Amazon EBS volumes can only be                  attached to instance types that support Amazon EBS encryption. Volumes that are created                  from encrypted snapshots are automatically encrypted. You cannot create an                  encrypted volume from an unencrypted snapshot or vice versa. If your AMI uses                  encrypted volumes, you can only launch the AMI on supported instance types. For                  more information, see Amazon EBS                     encryption in the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Iops
The number of I/O operations per second (IOPS) that the volume supports. This can be an integer               from 100 – 2000.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional Required when the volume type is                     io1; not used with other volume types.|

##### SnapshotId
The snapshot ID of the volume to use to create a block device.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional If you specify both SnapshotId and                     VolumeSize, VolumeSize must be equal or greater than                  the size of the snapshot.|

##### VolumeSize
The volume size, in gibibytes (GiB). For valid values, see the Size parameter for the CreateVolume action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional If you specify both SnapshotId and                     VolumeSize, VolumeSize must be equal or greater than                  the size of the snapshot.|

##### VolumeType
The volume type. If you set the type to io1, you must also set the Iops property. For valid values, see the VolumeType parameter for the CreateVolume action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### ElasticLoadBalancingAppCookieStickinessPolicyType
#### Properties
##### CookieName
Name of the application cookie used for stickiness.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PolicyName
The name of the policy being created. The name must be unique within the set of                  policies for this Load Balancer.NoteTo associate this policy with a listener, include the policy name in the                        listener's PolicyNames property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### ElasticLoadBalancingAccessLoggingPolicy
#### Properties
##### EmitInterval
The interval for publishing access logs in minutes. You can specify an interval                  of either 5 minutes or 60 minutes.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Enabled
Whether logging is enabled for the load balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### S3BucketName
The name of an Amazon S3 bucket where access log files are stored.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### S3BucketPrefix
A prefix for the all log object keys, such as                     my-load-balancer-logs/prod. If you store log files from multiple                  sources in a single bucket, you can use a prefix to distinguish each log file and                  its source.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### ElasticLoadBalancingLBCookieStickinessPolicyType
#### Properties
##### CookieExpirationPeriod
The time period, in seconds, after which the cookie should be considered stale. If this parameter                  isn't specified, the sticky session will last for the duration of the browser session.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PolicyName
The name of the policy being created. The name must be unique within the set of                  policies for this load balancer.NoteTo associate this policy with a listener, include the policy name in the                     listener's PolicyNames                     property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|undefined|


### ElasticLoadBalancingConnectionDrainingPolicy
#### Properties
##### Enabled
Whether or not connection draining is enabled for the load balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### Timeout
The time in seconds after the load balancer closes all connections to a                  deregistered or unhealthy instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### ElasticLoadBalancingHealthCheckType
#### Properties
##### HealthyThreshold
Specifies the number of consecutive health probe successes required before moving the instance to                  the Healthy state.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Interval
Specifies the approximate interval, in seconds, between health checks of an individual                  instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Target
Specifies the instance's protocol and port to check. The protocol can be TCP,                  HTTP, HTTPS, or SSL. The range of valid ports is 1 through 65535.NoteFor TCP and SSL, you specify a port pair. For example, you can specify                        TCP:5000 or SSL:5000. The health check attempts to                     open a TCP or SSL connection to the instance on the port that you specify. If                     the health check fails to connect within the configured timeout period, the                     instance is considered unhealthy.For HTTP or HTTPS, you specify a port and a path to ping                           (HTTP or                           HTTPS:port/PathToPing).                     For example, you can specify HTTP:80/weather/us/wa/seattle. In                     this case, an HTTP GET request is issued to the instance on the given port and                     path. If the health check receives any response other than 200 OK                     within the configured timeout period, the instance is considered unhealthy. The                     total length of the HTTP or HTTPS ping target cannot be more than 1024 16-bit                     Unicode characters.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Timeout
Specifies the amount of time, in seconds, during which no response means a failed health probe.                  This value must be less than the value for Interval.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### UnhealthyThreshold
Specifies the number of consecutive health probe failures required before moving the instance to                  the Unhealthy state.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### ElasticLoadBalancingConnectionSettings
#### Properties
##### IdleTimeout
The time (in seconds) that a connection to the load balancer can remain idle,                  which means no data is sent over the connection. After the specified time, the                  load balancer closes the connection.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### ElasticLoadBalancingListenerPropertyType
#### Properties
##### InstancePort
Specifies the TCP port on which the instance server listens. You can't modify                  this property during the life of the load balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### InstanceProtocol
Specifies the protocol to use for routing traffic to back-end instances: HTTP,                  HTTPS, TCP, or SSL. You can't modify this property during the life of the load                  balancer.NoteIf the front-end protocol is HTTP or HTTPS,                              InstanceProtocol must be on the same protocol layer (HTTP                           or HTTPS). Likewise, if the front-end protocol is TCP or SSL,                              InstanceProtocol must be TCP or SSL. By default, Elastic Load Balancing                           sets the instance protocol to HTTP or TCP.If there is another Listener with the same                              InstancePort whose InstanceProtocol is                           secure, (using HTTPS or SSL), the InstanceProtocol of the                              Listener must be secure (using HTTPS or SSL). If there is                           another Listener with the same InstancePort                           whose InstanceProtocol is HTTP or TCP, the                              InstanceProtocol of the Listener must be                           either HTTP or TCP.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### LoadBalancerPort
Specifies the external load balancer port number. You can't modify this                  property during the life of the load balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PolicyNames
A list of ElasticLoadBalancing policy names to associate with the                     Listener. Specify only policies that are compatible with a                     Listener. For more information, see DescribeLoadBalancerPolicyTypes in the                     Elastic Load Balancing API Reference version 2012-06-01.NoteBy default, Elastic Load Balancing associates the latest predefined policy with your load                        balancer. When a new predefined policy is added, we recommend that you                        update your load balancer to use the new predefined policy. Alternatively,                        you can select a different predefined security policy or create a custom                        policy. To create a security policy, use the Policies property                        of the AWS::ElasticLoadBalancing::LoadBalancer resource.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Protocol
Specifies the load balancer transport protocol to use for routing: HTTP, HTTPS,                  TCP or SSL. You can't modify this property during the life of the load                  balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SSLCertificateId
The ARN of the SSL certificate to use. For more information about SSL                  certificates, see Managing                     Server Certificates in the AWS Identity and Access                     Management User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### ElasticLoadBalancingPolicyType
#### Properties
##### Attributes
A list of arbitrary attributes for this policy. If you don't need to specify                  any policy attributes, specify an empty list ([]).

| Array    | Type     | Required |
|----------|----------|----------|
|true|Map|Yes|

##### InstancePorts
A list of instance ports for the policy. These are the ports associated with the back-end                  server.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### LoadBalancerPorts
A list of external load balancer ports for the policy.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Only for some policies. For more information,                  see the Elastic Load Balancing                        Developer Guide.|

##### PolicyName
A name for this policy that is unique to the load balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PolicyType
The name of the policy type for this policy. This must be one of the types reported by the Elastic Load Balancing                     DescribeLoadBalancerPolicyTypes action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonEC2InstanceSsmAssociationsAssociationParameters
#### Properties
##### Key
The name of an input parameter that is in the associated SSM document.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value of an input parameter.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|


### EC2MountPointPropertyType
#### Properties
##### Device
How the device is exposed to the instance (such as /dev/sdh, or xvdh).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### VolumeId
The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone               and the instance must be running.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### EC2NetworkAclEntryIcmp
#### Properties
##### Code
The Internet Control Message Protocol (ICMP) code. You can use -1 to specify all ICMP codes                  for the given ICMP type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. Required if you specify 1 (ICMP) for the CreateNetworkAclEntry protocol parameter.|

##### Type
The Internet Control Message Protocol (ICMP) type. You can use -1 to specify all ICMP                  types.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. Required if you specify 1 (ICMP) for the CreateNetworkAclEntry protocol parameter.|


### EC2NetworkInterfaceEmbeddedPropertyType
#### Properties
##### AssociatePublicIpAddress
Indicates whether the network interface receives a public IP address. You can                  associate a public IP address with a network interface only if it has a device                  index of eth0 and if it is a new network interface (not an existing                  one). In other words, if you specify true, don't specify a network interface ID.                  For more information, see Amazon EC2 Instance IP                     Addressing.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### DeleteOnTermination
Whether to delete the network interface when the instance terminates.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Description
The description of this network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DeviceIndex
The network interface's position in the attachment order.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### GroupSet
A list of security group IDs associated with this network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### NetworkInterfaceId
An existing network interface ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you don't specify the SubnetId property, you must specify this property.|

##### Ipv6AddressCount
The number of IPv6 addresses to associate with the network interface. Amazon EC2                  automatically selects the IPv6 addresses from the subnet range. To specify                  specific IPv6 addresses, use the Ipv6Addresses property and don't                  specify this property.For restrictions on which instance types support IPv6 addresses, see the RunInstances                  action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Ipv6Addresses
One or more specific IPv6 addresses from the IPv6 CIDR block range of your                  subnet to associate with the network interface. To specify a number of IPv6                  addresses, use the Ipv6AddressCount property and don't specify this                  property.For information about restrictions on which instance types support IPv6                  addresses, see the RunInstances action in the                  Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[EC2NetworkInterfaceIpv6Addresses](#ec2networkinterfaceipv6addresses)|No|

##### PrivateIpAddress
Assigns a single private IP address to the network interface, which is used as                  the primary private IP address. If you want to specify multiple private IP                  address, use the PrivateIpAddresses property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PrivateIpAddresses
Assigns a list of private IP addresses to the network interface. You can                  specify a primary private IP address by setting the value of the                     Primary property to true in the                     PrivateIpAddressSpecification property. If you want Amazon EC2 to                  automatically assign private IP addresses, use the                     SecondaryPrivateIpCount property and do not specify this                  property.For information about the maximum number of private IP addresses, see Private IP Addresses                     Per ENI Per Instance Type in the                     Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[EC2NetworkInterfacePrivateIPSpecification](#ec2networkinterfaceprivateipspecification)|No|

##### SecondaryPrivateIpAddressCount
The number of secondary private IP addresses that Amazon EC2 auto assigns to the                  network interface. Amazon EC2 uses the value of the PrivateIpAddress                  property as the primary private IP address. If you don't specify that property,                  Amazon EC2 auto assigns both the primary and secondary private IP addresses.If you want to specify your own list of private IP addresses, use the                     PrivateIpAddresses property and do not specify this                  property.For information about the maximum number of private IP addresses, see Private IP Addresses                     Per ENI Per Instance Type in the                     Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### SubnetId
The ID of the subnet to associate with the network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you don't specify the                     NetworkInterfaceId property, you must specify this                  property.|


### AmazonEC2InstanceSsmAssociations
#### Properties
##### AssociationParameters
The input parameter values to use with the associated SSM document.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2InstanceSsmAssociationsAssociationParameters](#amazonec2instancessmassociationsassociationparameters)|No|

##### DocumentName
The name of an SSM document to associate with the instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### EC2SecurityGroupRulePropertyType
#### Properties
##### CidrIp
Specifies a CIDR range.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify only one of the following properties:                     CidrIp, DestinationPrefixListId,                     DestinationSecurityGroupId, or                  SourceSecurityGroupId.|

##### DestinationPrefixListId
The AWS service prefix of an Amazon VPC endpoint. For more information, see VPC Endpoints in the                     Amazon VPC User Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify only one of the following properties:                     CidrIp, DestinationPrefixListId,                     DestinationSecurityGroupId, or                  SourceSecurityGroupId.|

##### DestinationSecurityGroupId
Specifies the GroupId of the destination Amazon VPC security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify only one of the following properties:                     CidrIp, DestinationPrefixListId,                     DestinationSecurityGroupId, or                  SourceSecurityGroupId.|

##### FromPort
The start of port range for the TCP and UDP protocols, or an ICMP type number.                  An ICMP type number of -1 indicates a wildcard (i.e., any ICMP type                  number).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### IpProtocol
An IP protocol name or number. For valid values, go to the IpProtocol parameter                  in AuthorizeSecurityGroupIngress

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SourceSecurityGroupId
For VPC security groups only. Specifies the ID of the                  Amazon EC2 Security Group to allow access. You can use the                     Ref intrinsic function to refer to the logical ID of a                  security group defined in the same template.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify only one of the following properties:                     CidrIp, DestinationPrefixListId,                     DestinationSecurityGroupId, or                  SourceSecurityGroupId.|

##### SourceSecurityGroupName
For non-VPC security groups only. Specifies the name of                  the Amazon EC2 Security Group to use for access. You can use the                     Ref intrinsic function to refer to the logical name of a                  security group that is defined in the same template.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify CidrIp, do not                  specify SourceSecurityGroupName.|

##### SourceSecurityGroupOwnerId
Specifies the AWS Account ID of the owner of the Amazon EC2 Security Group that                  is specified in the SourceSecurityGroupName property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify                     SourceSecurityGroupName and that security group is owned                  by a different account than the account creating the stack, you must specify the                     SourceSecurityGroupOwnerId; otherwise, this property is                  optional.|

##### ToPort
The end of port range for the TCP and UDP protocols, or an ICMP code. An ICMP                  code of -1 indicates a wildcard (i.e., any ICMP code).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### EC2NetworkInterfacePrivateIPSpecification
#### Properties
##### PrivateIpAddress
The private IP address of the network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Primary
Sets the private IP address as the primary private address. You can set only                  one primary private IP address. If you don't specify a primary private IP address,                  Amazon EC2 automatically assigns a primary private IP address.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|


### EC2NetworkInterfaceIpv6Addresses
#### Properties
##### Ipv6Address
The IPv6 address to associate with the network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### EC2NetworkAclEntryPortRange
#### Properties
##### From
The first port in the range.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. Required if you specify 6 (TCP) or 17 (UDP) for the protocol parameter.|

##### To
The last port in the range.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. Required if you specify 6 (TCP) or 17 (UDP) for the protocol parameter.|


### AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile
#### Properties
##### Arn
The Amazon Resource Name (ARN) of the instance profile to associate with the                  instances. The instance profile contains the IAM role that is associated with                  the instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs
#### Properties
##### DeleteOnTermination
Indicates whether to delete the volume when the instance is terminated.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Encrypted
Indicates whether the EBS volume is encrypted. Encrypted Amazon EBS volumes can be                  attached only to instances that support Amazon EBS encryption.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Iops
The number of I/O operations per second (IOPS) that the volume supports. For                  more information, see Iops for the EbsBlockDevice action in the                     Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### SnapshotId
The snapshot ID of the volume that you want to use. If you specify both the                     SnapshotId and VolumeSize properties,                     VolumeSize must be equal to or greater than the size of the                  snapshot.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### VolumeSize
The volume size, in Gibibytes (GiB). If you specify both the SnapshotId                  and VolumeSize properties, VolumeSize must be equal to                  or greater than the size of the snapshot. For more information about specifying                  the volume size, see VolumeSize for the EbsBlockDevice action in the                     Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### VolumeType
The volume type. For more information about specifying the volume type, see                     VolumeType for the                     EbsBlockDevice action in the                     Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings
#### Properties
##### DeviceName
The name of the device within the EC2 instance, such as /dev/dsh                  or xvdh.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Ebs
The Amazon Elastic Block Store (Amazon EBS) volume information.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsblockdevicemappingsebs)|Conditional You can specify either the VirtualName or                     Ebs, but not both.|

##### NoDevice
Suppresses the specified device that is included in the block device mapping of                  the Amazon Machine Image (AMI).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### VirtualName
The name of the virtual device. The name must be in the form                        ephemeralX where                     X is a number equal to or greater than zero (0), for                  example, ephemeral0.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional You can specify either the VirtualName or                     Ebs, but not both.|


### AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring
#### Properties
##### Enabled
Indicates whether monitoring is enabled for the instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|


### AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces
#### Properties
##### AssociatePublicIpAddress
Indicates whether to assign a public IP address to an instance that you launch                  in a VPC. You can assign the public IP address can only to a network interface for                  eth0, and only to a new network interface, not an existing one.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### DeleteOnTermination
Indicates whether to delete the network interface when the instance                  terminates.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Description
The description of this network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DeviceIndex
The network interface's position in the attachment order.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### Groups
A list of security group IDs to associate with this network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Ipv6AddressCount
The number of IPv6 addresses to associate with the network interface. Amazon Elastic Compute Cloud                  automatically selects the IPv6 addresses from the subnet range. To specify                  specific IPv6 addresses, use the Ipv6Addresses property and don't                  specify this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Ipv6Addresses
One or more specific IPv6 addresses from the IPv6 CIDR block range of your                  subnet to associate with the network interface. To specify a number of IPv6                  addresses, use the Ipv6AddressCount property and don't specify this                  property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[EC2NetworkInterfaceIpv6Addresses](#ec2networkinterfaceipv6addresses)|No|

##### NetworkInterfaceId
A network interface ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PrivateIpAddresses
One or more private IP addresses to assign to the network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsnetworkinterfacesprivateipaddresses)|No|

##### SecondaryPrivateIpAddressCount
The number of secondary private IP addresses that Amazon EC2 automatically assigns                  to the network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### SubnetId
The ID of the subnet to associate with the network interface.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you don't specify the                     NetworkInterfaceId property, you must specify this                  property.|


### AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses
#### Properties
##### Primary
Indicates whether the private IP address is the primary private IP address. You                  can designate only one IP address as primary.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### PrivateIpAddress
The private IP address.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement
#### Properties
##### AvailabilityZone
The Availability Zone (AZ) of the placement group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### GroupName
The name of the placement group (for cluster instances).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups
#### Properties
##### GroupId
The ID of a security group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonEC2ContainerServiceServiceDeploymentConfiguration
#### Properties
##### MaximumPercent
The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment. To calculate the maximum number of tasks, Amazon ECS uses this formula: the value of DesiredCount * (the value of the MaximumPercent/100), rounded down to the nearest integer value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### MinimumHealthyPercent
The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment. To calculate the minimum number of tasks, Amazon ECS uses this formula: the value of DesiredCount * (the value of the MinimumHealthyPercent/100), rounded up to the nearest integer value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications
#### Properties
##### BlockDeviceMappings
Defines the block devices that are mapped to the Spot instances.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsblockdevicemappings)|No|

##### EbsOptimized
Indicates whether the instances are optimized for Amazon Elastic Block Store (Amazon EBS) I/O. This                  optimization provides dedicated throughput to Amazon EBS and an optimized configuration                  stack to provide optimal EBS I/O performance. This optimization isn't available                  with all instance types. Additional usage charges apply when you use an                  Amazon EBS-optimized instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### IamInstanceProfile
Defines the AWS Identity and Access Management (IAM) instance profile to associate with the                  instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsiaminstanceprofile)|No|

##### ImageId
The unique ID of the Amazon Machine Image (AMI) to launch on the                  instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### InstanceType
Specifies the instance type of the EC2 instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### KernelId
The ID of the kernel that is associated with the Amazon Elastic Compute Cloud (Amazon EC2) AMI.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### KeyName
An Amazon EC2 key pair to associate with the instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Monitoring
Enable or disable monitoring for the instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring](#amazonec2spotfleetspotfleetrequestconfigdatalaunchspecificationsmonitoring)|No|

##### NetworkInterfaces
The network interfaces to associate with the instances.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsnetworkinterfaces)|No|

##### Placement
Defines a placement group, which is a logical grouping of instances within a                  single Availability Zone (AZ).

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationsplacement)|No|

##### RamdiskId
The ID of the RAM disk to select. Some kernels require additional drivers at                  launch. Check the kernel requirements for information about whether you need to                  specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center                  and search for the kernel ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SecurityGroups
One or more security group IDs to associate with the instances.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecificationssecuritygroups)|No|

##### SpotPrice
The bid price per unit hour for the specified instance type. If you don't specify a value, Amazon EC2 uses the Spot bid price for the fleet. For more information, see How Spot Fleet Works in the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SubnetId
The ID of the subnet in which to launch the instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### UserData
Base64-encoded MIME user data that instances use when starting up.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### WeightedCapacity
The number of units provided by the specified instance type. These units are                  the same units that you chose to set the target capacity in terms of instances or                  a performance characteristic, such as vCPUs, memory, or I/O. For more information,                  see How Spot Fleet Works in the                     Amazon EC2 User Guide for Linux Instances.If the target capacity divided by this value is not a whole number, Amazon EC2                  rounds the number of instances to the next whole number.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AmazonEC2SpotFleetSpotFleetRequestConfigData
#### Properties
##### AllocationStrategy
Indicates how to allocate the target capacity across the Spot pools that you                  specified in the Spot fleet request. For valid values, see SpotFleetRequestConfigData in the                     Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ExcessCapacityTerminationPolicy
Indicates whether running Spot instances are terminated if you decrease the                  target capacity of the Spot fleet request below the current size of the Spot                  fleet. For valid values, see SpotFleetRequestConfigData in the                     Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### IamFleetRole
The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that grants the                  Spot fleet the ability to bid on, launch, and terminate instances on your behalf.                  For more information, see Spot                     Fleet Prerequisites in the                  Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### LaunchSpecifications
The launch specifications for the Spot fleet request.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications](#amazonelasticcomputecloudspotfleetspotfleetrequestconfigdatalaunchspecifications)|Yes|

##### SpotPrice
The bid price per unit hour. For more information, see How Spot Fleet Works in the                     Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TargetCapacity
The number of units to request for the spot fleet. You can choose to set the                  target capacity as the number of instances or as a performance characteristic that                  is important to your application workload, such as vCPUs, memory, or I/O. For more                  information, see How Spot Fleet                     Works in the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### TerminateInstancesWithExpiration
Indicates whether running Spot instances are terminated when the Spot fleet                  request expires.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### ValidFrom
The start date and time of the request, in UTC format                     (YYYY-MM-DDTHH:MM:SSZ).                  By default, Amazon Elastic Compute Cloud (Amazon EC2 ) starts fulfilling the request immediately.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ValidUntil
The end date and time of the request, in UTC format                     (YYYY-MM-DDTHH:MM:SSZ).                  After the end date and time, Amazon EC2 doesn't request new Spot instances or enable                  them to fulfill the request.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonEC2ContainerServiceServiceLoadBalancers
#### Properties
##### ContainerName
The name of a container to use with the load balancer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ContainerPort
The port number on the container to direct load balancer traffic to. Your                  container instances must allow ingress traffic on this port.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### LoadBalancerName
The name of a Classic Load Balancer to associate with the Amazon ECS service.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### TargetGroupArn
An Application load balancer target group Amazon Resource Name (ARN) to associate with the Amazon ECS service.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment
#### Properties
##### Name
The name of the environment variable.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value of the environment variable.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration
#### Properties
##### LogDriver
The log driver to use for the container. This parameter requires that your container instance uses Docker Remote API Version 1.18 or greater. For more information, see the logDriver content for the LogConfiguration data type in the Amazon EC2 Container Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Options
The configuration options to send to the log driver. This parameter requires that your container instance uses Docker Remote API Version 1.18 or greater.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|


### AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints
#### Properties
##### ContainerPath
The path on the container that indicates where you want to mount the                  volume.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### SourceVolume
The name of the volume to mount.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ReadOnly
Indicates whether the container can write to the volume. If you specify                     true, the container has read-only access to the volume.                  If you specify false, the container can write to the                  volume. By default, the value is false.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|


### AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry
#### Properties
##### Hostname
The hostname to use in the /etc/hosts file.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### IpAddress
The IP address to use in the /etc/hosts file.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom
#### Properties
##### SourceContainer
The name of the container that has the volumes to mount.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ReadOnly
Indicates whether the container can write to the volume. If you specify                     true, the container has read-only access to the volume.                  If you specify false, the container can write to the                  volume. By default, the value is false.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|


### AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit
#### Properties
##### HardLimit
The hard limit for the ulimit type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### Name
The type of ulimit. For valid values, see the name content for the              Ulimit data type in the              Amazon EC2 Container Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SoftLimit
The soft limit for the ulimit type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings
#### Properties
##### ContainerPort
The port number on the container bound to the host port.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### HostPort
The host port number on the container instance that you want to reserve for                  your container. You can specify a non-reserved host port for your container port                  mapping, omit the host port, or set the host port to 0. If you                  specify a container port but no host port, your container host port is assigned                  automatically .Don't specify a host port in the 49153 to 65535 port                  range; these ports are reserved for automatic assignment. Other reserved ports                  include 22 for SSH, 2375 and 2376 for                  Docker, and 51678 for the Amazon EC2 Container Service container agent. Don't specify a                  host port that is being used for a task—that port is reserved while the                  task is running.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Protocol
The protocol used for the port mapping. For valid values, see the protocol parameter in the Amazon EC2 Container Service Developer Guide. By default, AWS CloudFormation specifies tcp.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions
#### Properties
##### Command
The CMD value to pass to the container. For more information                        about the Docker CMD parameter, see https://docs.docker.com/engine/reference/builder/#/cmd.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Cpu
The minimum number of CPU units to reserve for the container. Containers share unallocated CPU units with other containers on the instance by using the same ratio as their allocated CPU units. For more information, see the cpu content for the ContainerDefinition data type in the Amazon EC2 Container Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### DisableNetworking
Indicates whether networking is disabled within the container.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### DnsSearchDomains
A list of DNS search domains that are provided to the container. The domain names that the DNS logic looks up when a process attempts to access a bare unqualified hostname.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### DnsServers
A list of DNS servers that Amazon ECS provides to the container.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### DockerLabels
A key-value map of labels for the container.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### DockerSecurityOptions
A list of custom labels for SELinux and AppArmor multi-level security systems. For more information, see the dockerSecurityOptions content for the ContainerDefinition data type in the Amazon EC2 Container Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### EntryPoint
The ENTRYPOINT value to pass to the container. For more                        information about the Docker ENTRYPOINT parameter, see https://docs.docker.com/reference/builder/#entrypoint.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Environment
The environment variables to pass to the container.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment](#amazonec2containerservicetaskdefinitioncontainerdefinitionsenvironment)|No|

##### Essential
Indicates whether the task stops if this container fails. If you specify true and the container fails, all other containers in the task stop. If you specify false and the container fails, none of the other containers in the task is affected. This value is true by default.You must have at least one essential container in a task.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### ExtraHosts
A list of hostnames and IP address mappings to append to the /etc/hosts file on the container.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry](#amazonec2containerservicetaskdefinitioncontainerdefinitionshostentry)|No|

##### Hostname
The name that Docker will use for the container's hostname.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Image
The image to use for a container, which is passed directly to the Docker                        daemon. You can use images in the Docker Hub registry or specify other                        repositories                            (repository-url/image:tag).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Links
The name of another container to connect to. With links, containers can                        communicate with each other without using port mappings.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### LogConfiguration
Configures a custom log driver for the container. For more information, see the              logConfiguration content for the ContainerDefinition data type            in the Amazon EC2 Container Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration](#amazonec2containerservicetaskdefinitioncontainerdefinitionslogconfiguration)|No|

##### Memory
The number of MiB of memory to reserve for the container. If your container attempts to exceed the allocated memory, the container is terminated.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. You must specify one or both of the                            Memory or MemoryReservation properties. If you                        specify both, the value for the Memory property must be greater                        than the value of the MemoryReservation property.|

##### MemoryReservation
The number of MiB of memory to reserve for the container. When system                        memory is under contention, Docker attempts to keep the container memory                        within the limit. If the container requires more memory, it can consume up                        to the value specified by the Memory property or all of the                        available memory on the container instance, whichever comes first. This is                        called a soft limit.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. You must specify one or both of the                            Memory or MemoryReservation properties. If you                        specify both, the value for the Memory property must be greater                        than the value of the MemoryReservation property.|

##### MountPoints
The mount points for data volumes in the container.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints](#amazonec2containerservicetaskdefinitioncontainerdefinitionsmountpoints)|No|

##### Name
A name for the container.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PortMappings
A mapping of the container port to a host port. Port mappings enable                        containers to access ports on the host container instance to send or receive                        traffic.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings](#amazonec2containerservicetaskdefinitioncontainerdefinitionsportmappings)|No|

##### Privileged
Indicates whether the container is given full access to the host container instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### ReadonlyRootFilesystem
Indicates whether the container's root file system is mounted as read only.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Ulimits
A list of ulimits to set in the container. The ulimits set constraints on how much resources a container can consume so that it doesn't deplete all available resources on the host.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit](#amazonec2containerservicetaskdefinitioncontainerdefinitionsulimit)|No|

##### User
The user name to use inside the container.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### VolumesFrom
The data volumes to mount from another container.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom](#amazonec2containerservicetaskdefinitioncontainerdefinitionsvolumesfrom)|No|

##### WorkingDirectory
The working directory in the container in which to run commands.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonEC2ContainerServiceTaskDefinitionVolumesHost
#### Properties
##### SourcePath
The data volume path on the host container instance.If you don't specify this parameter, the Docker daemon assigns a path for you,                  but the data volume might not persist after the associated container stops                  running. If you do specify a path, the data volume persists at that location on                  the host container instance until you manually delete it.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonEC2ContainerServiceTaskDefinitionVolumes
#### Properties
##### Name
The name of the volume. To specify mount points in your container definitions,                  use the value of this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Host
Determines whether your data volume persists on the host container instance and                  at the location where it is stored.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEC2ContainerServiceTaskDefinitionVolumesHost](#amazonec2containerservicetaskdefinitionvolumeshost)|No|


### AmazonElasticFileSystemFileSystemFileSystemTags
#### Properties
##### Key
The key name of the tag. You can specify a value that is from 1 to 128 Unicode                  characters in length, but you cannot use the prefix aws:.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Value
The value of the tag key. You can specify a value that is from 0 to 128 Unicode                  characters in length.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonElastiCacheReplicationGroupNodeGroupConfiguration
#### Properties
##### PrimaryAvailabilityZone
The Availability Zone where ElastiCache launches the node group's primary                  node.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ReplicaAvailabilityZones
A list of Availability Zones where ElastiCache launches the read replicas. The number                  of Availability Zones must match the value of the ReplicaCount                  property or, if you don't specify the ReplicaCount property, the                  replication group's ReplicasPerNodeGroup property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### ReplicaCount
The number of read replica nodes in the node group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Slots
A string of comma-separated values where the first set of values are the slot                  numbers (zero based), and the second set of values are the keyspaces for each                  slot. The following example specifies three slots (numbered 0, 1, and 2):                     0,1,2,0-4999,5000-9999,10000-16,383.If you don't specify a value, ElastiCache allocates keys equally among each                  slot.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### ElasticLoadBalancingListenerRuleConditions
#### Properties
##### Field
The name of the condition that you want to define, such as path-pattern (which forwards requests based on the URL of the request).For valid values, see the Field contents for the RuleCondition data type in the              Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Values
The value for the field that you specified in the Field property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### ElasticLoadBalancingListenerCertificates
#### Properties
##### CertificateArn
The Amazon Resource Name (ARN) of the certificate to associate with the listener.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### ElasticLoadBalancingListenerDefaultActions
#### Properties
##### TargetGroupArn
The Amazon Resource Name (ARN) of the target group to which Elastic Load Balancing routes the traffic.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Type
The type of action. For valid values, see the Type contents for the              Action data type in the              Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### ElasticLoadBalancingListenerRuleActions
#### Properties
##### TargetGroupArn
The Amazon Resource Name (ARN) of the target group to which Elastic Load Balancing routes the traffic.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Type
The type of action. For valid values, see the Type contents for the              Action data type in the              Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### ElasticLoadBalancingLoadBalancerLoadBalancerAttributes
#### Properties
##### Key
The name of an attribute that you want to configure. For the list of attributes that you can configure, see the Key contents for the LoadBalancerAttribute data type in the Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Value
A value for the attribute.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### ElasticLoadBalancingTargetGroupTargetGroupAttributes
#### Properties
##### Key
The name of the attribute that you want to configure. For the list of attributes that you can configure, see the Key contents for the TargetGroupAttribute data type in the Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Value
A value for the attribute.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### ElasticLoadBalancingTargetGroupTargetDescription
#### Properties
##### Id
The ID of the target, such as an EC2 instance ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Port
The port number on which the target is listening for traffic.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### ElasticLoadBalancingTargetGroupMatcher
#### Properties
##### HttpCode
The HTTP codes that a healthy target must use when responding to a health check,            such as 200,202 or 200-399.For valid and default values, see the HttpCode contents for the Matcher data type in the Elastic Load Balancing API Reference version 2015-12-01.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonElasticsearchServiceDomainEBSOptions
#### Properties
##### EBSEnabled
Specifies whether Amazon EBS volumes are attached to data nodes in the Amazon ES            domain.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Iops
The number of I/O operations per second (IOPS) that the volume supports. This            property applies only to the Provisioned IOPS (SSD) EBS volume type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### VolumeSize
The size of the EBS volume for each data node. The minimum and maximum size of an            EBS volume depends on the EBS volume type and the instance type to which it is attached.            For more information, see Configuring EBS-based Storage in the            Amazon Elasticsearch Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### VolumeType
The EBS volume type to use with the Amazon ES domain, such as standard,              gp2, or io1. For more information about each type, see              Amazon EBS Volume Types in the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonElasticsearchServiceDomainElasticsearchClusterConfig
#### Properties
##### DedicatedMasterCount
The number of instances to use for the master node.If you specify this property, you must specify true for the              DedicatedMasterEnabled property

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### DedicatedMasterEnabled
Indicates whether to use a dedicated master node for the Amazon ES domain. A            dedicated master node is a cluster node that performs cluster management tasks, but            doesn't hold data or respond to data upload requests. Dedicated master nodes offload            cluster management tasks to increase the stability of your search clusters.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### DedicatedMasterType
The hardware configuration of the computer that hosts the dedicated master node,            such as m3.medium.elasticsearch. For valid values, see Configuring Amazon ES Domains in the            Amazon Elasticsearch Service Developer Guide.If you specify this property, you must specify true for the              DedicatedMasterEnabled property

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### InstanceCount
The number of data nodes (instances) to use in the Amazon ES domain.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### InstanceType
The instance type for your data nodes, such as m3.medium.elasticsearch.            For valid values, see Configuring Amazon ES Domains in the            Amazon Elasticsearch Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ZoneAwarenessEnabled
Indicates whether to enable zone awareness for the Amazon ES domain. When you enable            zone awareness, Amazon ES allocates the nodes and replica index shards that belong to a            cluster across two Availability Zones (AZs) in the same region to prevent data loss and            minimize downtime in the event of node or data center failure. Don't enable zone            awareness if your cluster has no replica index shards or is a single-node cluster. For            more information, see Enabling Zone              Awareness in the Amazon Elasticsearch Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|


### AmazonElasticsearchServiceDomainSnapshotOptions
#### Properties
##### AutomatedSnapshotStartHour
The hour in UTC during which the service takes an automated daily snapshot of the            indices in the Amazon ES domain. For example, if you specify 0, Amazon ES            takes an automated snapshot everyday between midnight and 1 am. You can specify a value            between 0 and 23.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AmazonEMRClusterApplication
#### Properties
##### AdditionalInfo
Metadata about third-party applications that third-party vendors use for testing            purposes.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### Args
Arguments that Amazon EMR passes to the application.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Name
The name of the application to add to your cluster, such as Hadoop or              Hive. For valid values, see the Applications parameter in the Amazon EMR API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Version
The version of the application.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonEMRClusterBootstrapActionConfigScriptBootstrapActionConfig
#### Properties
##### Args
A list of command line arguments to pass to the bootstrap action script.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Path
The location of the script that Amazon EMR runs during a bootstrap action. Specify a            location in an S3 bucket or your local file system.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonEMRClusterJobFlowInstancesConfigInstanceGroupConfig
#### Properties
##### BidPrice
When launching instances as Spot Instances, the bid price in USD for each EC2 instance in the instance group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Configurations
A list of configurations to apply to this instance group. For more information see, Configuring Applications in the Amazon EMR Release Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEMRClusterConfiguration](#amazonemrclusterconfiguration)|No|

##### EbsConfiguration
Configures Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEMREbsConfiguration](#amazonemrebsconfiguration)|No|

##### InstanceCount
The number of instances to launch in the instance group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### InstanceType
The EC2 instance type for all instances in the instance group. For more information,            see Instance Configurations in the Amazon EMR Management            Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Market
The type of marketplace from which your instances are provisioned into this group,            either ON_DEMAND or SPOT. For more information, see Amazon EC2 Purchasing            Options.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Name
A name for the instance group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonEMRClusterConfiguration
#### Properties
##### Classification
The name of an application-specific configuration file. For more information see,              Configuring Applications in the Amazon EMR Release              Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ConfigurationProperties
The settings that you want to change in the application-specific configuration file.            For more information see, Configuring Applications in the Amazon EMR Release              Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### Configurations
A list of configurations to apply to this configuration. You can nest configurations            so that a single configuration can have its own configurations. In other words, you can            configure a configuration. For more information see, Configuring Applications in the Amazon EMR Release              Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEMRClusterConfiguration](#amazonemrclusterconfiguration)|No|


### AmazonEMRClusterBootstrapActionConfig
#### Properties
##### Name
The name of the bootstrap action to add to your cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ScriptBootstrapAction
The script that the bootstrap action runs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEMRClusterBootstrapActionConfigScriptBootstrapActionConfig](#amazonemrclusterbootstrapactionconfigscriptbootstrapactionconfig)|Yes|


### AmazonEMRClusterJobFlowInstancesConfigPlacementType
#### Properties
##### AvailabilityZone
The Amazon Elastic Compute Cloud (Amazon EC2) AZ for the job flow. For more information, see http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html in the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonEMREbsConfigurationEbsBlockDeviceConfigVolumeSpecification
#### Properties
##### Iops
The number of I/O operations per second (IOPS) that the volume supports. For more information, see Iops for the EbsBlockDevice action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### SizeInGB
The volume size, in Gibibytes (GiB). For more information about specifying the volume size, see VolumeSize for the EbsBlockDevice action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### VolumeType
The volume type, such as standard or io1. For more information about specifying the volume type, see VolumeType for the EbsBlockDevice action in the Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonEMRClusterJobFlowInstancesConfig
#### Properties
##### AdditionalMasterSecurityGroups
A list of additional EC2 security group IDs to assign to the master instance (master            node) in your Amazon EMR cluster. Use this property to supplement the rules specified by the            Amazon EMR managed master security group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### AdditionalSlaveSecurityGroups
A list of additional EC2 security group IDs to assign to the slave instances (slave            nodes) in your Amazon EMR cluster. Use this property to supplement the rules specified by the            Amazon EMR managed slave security group.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### CoreInstanceGroup
The settings for the core instances in your Amazon EMR cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEMRClusterJobFlowInstancesConfigInstanceGroupConfig](#amazonemrclusterjobflowinstancesconfiginstancegroupconfig)|Yes|

##### Ec2KeyName
The name of an Amazon Elastic Compute Cloud (Amazon EC2) key pair, which you can use to access the instances            in your Amazon EMR cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Ec2SubnetId
The ID of a subnet where you want to launch your instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EmrManagedMasterSecurityGroup
The ID of an EC2 security group (managed by Amazon EMR) that is assigned to the master            instance (master node) in your Amazon EMR cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EmrManagedSlaveSecurityGroup
The ID of an EC2 security group (managed by Amazon EMR) that is assigned to the slave            instances (slave nodes) in your Amazon EMR cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HadoopVersion
The Hadoop version for the job flow. For valid values, see the HadoopVersion parameter in            the Amazon EMR API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MasterInstanceGroup
The settings for the master instance (master node).

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEMRClusterJobFlowInstancesConfigInstanceGroupConfig](#amazonemrclusterjobflowinstancesconfiginstancegroupconfig)|Yes|

##### Placement
The Availability Zone (AZ) in which the job flow runs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEMRClusterJobFlowInstancesConfigPlacementType](#amazonemrclusterjobflowinstancesconfigplacementtype)|No|

##### ServiceAccessSecurityGroup
The ID of an EC2 security group (managed by Amazon EMR) that services use to access            clusters in private subnets.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### TerminationProtected
Indicates whether to prevent the EC2 instances from being terminated by an API call            or user intervention. If you want to delete a stack with protected instances, update            this value to false before you delete the stack. By default, AWS CloudFormation sets            this property to false.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|


### AmazonEMREbsConfigurationEbsBlockDeviceConfigs
#### Properties
##### VolumeSpecification
The settings for the Amazon EBS volumes.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonEMREbsConfigurationEbsBlockDeviceConfigVolumeSpecification](#amazonemrebsconfigurationebsblockdeviceconfigvolumespecification)|Yes|

##### VolumesPerInstance
The number of Amazon EBS volumes that you want to create for each instance in the EMR cluster or instance group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AmazonEMREbsConfiguration
#### Properties
##### EbsBlockDeviceConfigs
Configures the block storage devices that are associated with your EMR instances.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEMREbsConfiguration](#amazonemrebsconfiguration)|No|

##### EbsOptimized
Indicates whether the instances are optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. For more information about fees and supported instance types, see EBS-Optimized Instances in the Amazon EC2 User Guide for Linux Instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|


### AmazonEMRStepHadoopJarStepConfig
#### Properties
##### Args
A list of command line arguments passed to the JAR file's main function when the            function is executed.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Jar
A path to the JAR file that Amazon EMR runs for the job flow step.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MainClass
The name of the main class in the specified JAR file. If you don't specify a value,            you must specify a main class in the JAR file's manifest file.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### StepProperties
A list of Java properties that are set when the job flow step runs. You can use            these properties to pass key-value pairs to your main function in the JAR file.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonEMRStepHadoopJarStepConfigKeyValue](#amazonemrstephadoopjarstepconfigkeyvalue)|No|


### AmazonEMRStepHadoopJarStepConfigKeyValue
#### Properties
##### Key
The unique identifier of a key-value pair.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Value
The value part of the identified key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonCloudWatchEventsRuleTarget
#### Properties
##### Arn
The Amazon Resource Name (ARN) of the target.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Id
A unique, user-defined identifier for the target. Acceptable values include                  alphanumeric characters, periods (.), hypens (-), and                  underscores (_).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Input
A JSON-formatted text string that is passed to the target. This value overrides the matched event.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No. If you don't specify both this property and the InputPath, CloudWatch Events passes the entire matched event to the target.|

##### InputPath
When you don't want to pass the entire matched event, the JSONPath that describes which part of the event to pass to the target.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No. If you don't specify both this property and the Input, CloudWatch Events passes the entire matched event to the target.|


### AmazonGameLiftAliasRoutingStrategy
#### Properties
##### FleetId
A unique identifier of a GameLift fleet to associate with the alias.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify SIMPLE for the Type            property, you must specify this property.|

##### Message
A text message that GameLift displays for the Terminal routing            type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you specify TERMINAL for the              Type property, you must specify this property.|

##### Type
The type of routing strategy. For the SIMPLE type, traffic is routed to            an active GameLift fleet. For the Terminal type, GameLift returns an exception            with the message that you specified in the Message property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonGameLiftBuildStorageLocation
#### Properties
##### Bucket
The S3 bucket where the GameLift build package files are stored.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Key
The prefix (folder name) where the GameLift build package files are located.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
An AWS Identity and Access Management (IAM) role Amazon Resource Name (ARN) that GameLift can assume to            retrieve the build package files from Amazon Simple Storage Service (Amazon S3).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### IAMPolicies
#### Properties
##### PolicyDocument
A policy document that describes what actions are allowed on which                  resources.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Object|Yes|

##### PolicyName
The name of the policy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### IAMUserLoginProfile
#### Properties
##### Password
The password for the user.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PasswordResetRequired
Specifies whether the user is required to set a new password the next time the                  user logs in to the AWS Management Console.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|


### AmazonGameLiftFleetEC2InboundPermission
#### Properties
##### FromPort
The starting value for a range of allowed port numbers. This value must be lower            than the ToPort value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### IpRange
The range of allowed IP addresses in CIDR notation.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Protocol
The network communication protocol that is used by the fleet. For valid values, see            the IpPermission data type in the              Amazon GameLift API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ToPort
The ending value for a range of allowed port numbers. This value must be higher than            the FromPort value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AWSIoTActions
#### Properties
##### CloudwatchAlarm
Changes the state of a CloudWatch alarm.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTCloudwatchAlarmAction](#awsiotcloudwatchalarmaction)|No|

##### CloudwatchMetric
Captures a CloudWatch metric.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTCloudwatchMetricAction](#awsiotcloudwatchmetricaction)|No|

##### DynamoDB
Writes data to a DynamoDB table.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTDynamoDBAction](#awsiotdynamodbaction)|No|

##### Elasticsearch
Writes data to an Elasticsearch domain.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTElasticsearchAction](#awsiotelasticsearchaction)|No|

##### Firehose
Writes data to a Firehose stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTFirehoseAction](#awsiotfirehoseaction)|No|

##### Kinesis
Writes data to an Amazon Kinesis stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTKinesisAction](#awsiotkinesisaction)|No|

##### Lambda
Invokes a Lambda function.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTLambdaAction](#awsiotlambdaaction)|No|

##### Republish
Publishes data to an MQ Telemetry Transport (MQTT) topic different from the one                  currently specified.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTRepublishAction](#awsiotrepublishaction)|No|

##### S3
Writes data to an S3 bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTS3Action](#awsiots3action)|No|

##### Sns
Publishes data to an SNS topic.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTSnsAction](#awsiotsnsaction)|No|

##### Sqs
Publishes data to an SQS queue.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTSqsAction](#awsiotsqsaction)|No|


### AWSIoTCloudwatchAlarmAction
#### Properties
##### AlarmName
The CloudWatch alarm name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
The IAM role that allows access to the CloudWatch alarm.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StateReason
The reason for the change of the alarm state.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StateValue
The value of the alarm state.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSIoTDynamoDBAction
#### Properties
##### HashKeyField
The name of the hash key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### HashKeyValue
The value of the hash key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### PayloadField
The name of the column in the DynamoDB table that contains the result of the query. You            can customize this name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RangeKeyField
The name of the range key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RangeKeyValue
The value of the range key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
The ARN of the IAM role that grants access to the DynamoDB table.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TableName
The name of the DynamoDB table.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSIoTCloudwatchMetricAction
#### Properties
##### MetricName
The name of the CloudWatch metric.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MetricNamespace
The name of the CloudWatch metric namespace.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MetricTimestamp
An optional Unix timestamp.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MetricUnit
The metric unit                 supported by Amazon CloudWatch.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MetricValue
The value to publish to the metric. For example, if you count the occurrences                  of a particular term such as Error, the value will be 1                  for each occurrence.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
The ARN of the IAM role that grants access to the CloudWatch metric.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSIoTElasticsearchAction
#### Properties
##### Endpoint
The endpoint of your Elasticsearch domain.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Id
A unique identifier for the stored data.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Index
The Elasticsearch index where the data is stored.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
The ARN of the IAM role that grants access to Elasticsearch.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Type
The type of stored data.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSIoTLambdaAction
#### Properties
##### FunctionArn
The ARN of the Lambda function.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSIoTFirehoseAction
#### Properties
##### DeliveryStreamName
The delivery stream name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
The Amazon Resource Name (ARN) of the IAM role that grants access to the                  Firehose stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Separator
A character separator that's used to separate records written to the Firehose                  stream. For valid values, see Firehose Action in the AWS IoT Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSIoTRepublishAction
#### Properties
##### RoleArn
The ARN of the IAM role that grants publishing access.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Topic
The name of the MQTT topic topic different from the one currently                  specified.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSIoTKinesisAction
#### Properties
##### PartitionKey
The partition key (the grouping of data by shard within an an Amazon Kinesis                  stream).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RoleArn
The ARN of the IAM role that grants access to an Amazon Kinesis stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StreamName
The name of the Amazon Kinesis stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSIoTS3Action
#### Properties
##### BucketName
The name of the S3 bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Key
The object key (the name of an object in the S3 bucket).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
The ARN of the IAM role that grants access to Amazon S3.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSIoTSnsAction
#### Properties
##### MessageFormat
The format of the published message.  Amazon SNS uses this setting to determine                  whether it should parse the payload and extract the platform-specific bits from                  the payload.For more information, see Appendix:                     Message and JSON Formats in the                  Amazon Simple Notification Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RoleArn
The ARN of the IAM role that grants access to Amazon SNS.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TargetArn
The ARN of the Amazon SNS topic.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSIoTTopicRulePayload
#### Properties
##### Actions
The actions associated with the rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSIoTActions](#awsiotactions)|Yes|

##### AwsIotSqlVersion
The version of the SQL rules engine to use when evaluating the rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Description
The description of the rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RuleDisabled
Specifies whether the rule is disabled.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### Sql
The SQL statement that queries the topic. For more information, see Rules for AWS IoT                  in the AWS IoT Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSIoTSqsAction
#### Properties
##### QueueUrl
The URL of the Amazon Simple Queue Service (Amazon SQS) queue.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleArn
The ARN of the IAM role that grants access to Amazon SQS.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### UseBase64
Specifies whether Base64 encoding should be used.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|


### AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints
#### Properties
##### IntervalInSeconds
The length of time, in seconds, that Firehose buffers incoming data before delivering it to the destination. For valid values, see the IntervalInSeconds content for the BufferingHints data type in the Amazon Kinesis Firehose API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### SizeInMBs
The size of the buffer, in MBs, that Firehose uses for incoming data before delivering it to the destination. For valid values, see the SizeInMBs content for the BufferingHints data type in the Amazon Kinesis Firehose API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions
#### Properties
##### DurationInSeconds
After an initial failure to deliver to Amazon ES, the total amount of time during which Firehose re-attempts delivery (including the first attempt). If Firehose can't deliver the data within the specified time, it writes the data to the backup S3 bucket. For valid values, see the DurationInSeconds content for the ElasticsearchRetryOptions data type in the Amazon Kinesis Firehose API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration
#### Properties
##### BufferingHints
Configures how Firehose buffers incoming data while delivering it to the Amazon ES domain.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints](#amazonkinesisfirehosedeliverystreamelasticsearchdestinationconfigurationbufferinghints)|Yes|

##### CloudWatchLoggingOptions
The Amazon CloudWatch Logs logging options for the delivery stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions](#amazonkinesisfirehosedeliverystreamdestinationcloudwatchloggingoptions)|No|

##### DomainARN
The Amazon Resource Name (ARN) of the Amazon ES domain that Firehose delivers data to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### IndexName
The name of the Elasticsearch index to which Firehose adds data for indexing.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### IndexRotationPeriod
The frequency of Elasticsearch index rotation. If you enable index rotation, Firehose appends a portion of the UTC arrival timestamp to the specified index name, and rotates the appended timestamp accordingly. For more information, see Index Rotation for the Amazon ES Destination in the Amazon Kinesis Firehose Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleARN
The ARN of the AWS Identity and Access Management (IAM) role that grants Firehose access to your S3 bucket, AWS KMS (if you enable data encryption), and Amazon CloudWatch Logs (if you enable logging).For more information, see Grant Firehose Access to an Amazon Elasticsearch Service Destination  in the Amazon Kinesis Firehose Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### S3BackupMode
The condition under which Firehose delivers data to Amazon Simple Storage Service (Amazon S3). You can send Amazon S3 all documents (all data) or only the documents that Firehose could not deliver to the Amazon ES destination. For more information and valid values, see the S3BackupMode content for the ElasticsearchDestinationConfiguration data type in the Amazon Kinesis Firehose API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TypeName
The Elasticsearch type name that Amazon ES adds to documents when indexing data.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions
#### Properties
##### Enabled
Indicates whether CloudWatch Logs logging is enabled.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### LogGroupName
The name of the CloudWatch Logs log group that contains the log stream that Firehose will use.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you enable logging, you must specify this property.|

##### LogStreamName
The name of the CloudWatch Logs log stream that Firehose uses to send logs about data delivery.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. If you enable logging, you must specify this property.|


### AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand
#### Properties
##### CopyOptions
Parameters to use with the Amazon Redshift COPY command. For examples, see the CopyOptions content for the CopyCommand data type in the Amazon Kinesis Firehose API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DataTableColumns
A comma-separated list of the column names in the table that Firehose copies data to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DataTableName
The name of the table where Firehose adds the copied data.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints
#### Properties
##### IntervalInSeconds
The length of time, in seconds, that Firehose buffers incoming data before delivering it to the destination. For valid values, see the IntervalInSeconds content for the BufferingHints data type in the Amazon Kinesis Firehose API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### SizeInMBs
The size of the buffer, in MBs, that Firehose uses for incoming data before delivering it to the destination. For valid values, see the SizeInMBs content for the BufferingHints data type in the Amazon Kinesis Firehose API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig
#### Properties
##### AWSKMSKeyARN
The Amazon Resource Name (ARN) of the AWS KMS encryption key that Amazon S3 uses to encrypt data delivered by the Firehose stream. The key must belong to the same region as the destination S3 bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration
#### Properties
##### BucketARN
The Amazon Resource Name (ARN) of the S3 bucket to send data to.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### BufferingHints
Configures how Firehose buffers incoming data while delivering it to the S3 bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints](#amazonkinesisfirehosedeliverystreams3destinationconfigurationbufferinghints)|Yes|

##### CloudWatchLoggingOptions
The Amazon CloudWatch Logs logging options for the delivery stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions](#amazonkinesisfirehosedeliverystreamdestinationcloudwatchloggingoptions)|No|

##### CompressionFormat
The type of compression that  Firehose uses to compress the data that it delivers to the S3 bucket. For valid values, see the CompressionFormat content for the S3DestinationConfiguration data type in the Amazon Kinesis Firehose API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### EncryptionConfiguration
Configures Amazon Simple Storage Service (Amazon S3) server-side encryption. Firehose uses AWS Key Management Service (AWS KMS) to encrypt the data that it delivers to your S3 bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration](#amazonkinesisfirehosedeliverystreams3destinationconfigurationencryptionconfiguration)|No|

##### Prefix
A prefix that Firehose adds to the files that it delivers to the S3 bucket. The prefix helps you identify the files that Firehose delivered.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleARN
The ARN of an AWS Identity and Access Management (IAM) role that grants Firehose access to your S3 bucket and AWS KMS (if you enable data encryption).For more information, see Grant Firehose Access to an Amazon S3 Destination in the Amazon Kinesis Firehose Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration
#### Properties
##### CloudWatchLoggingOptions
The Amazon CloudWatch Logs logging options for the delivery stream.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions](#amazonkinesisfirehosedeliverystreamdestinationcloudwatchloggingoptions)|No|

##### ClusterJDBCURL
The connection string that Firehose uses to connect to the Amazon Redshift cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### CopyCommand
Configures the Amazon Redshift COPY command that Firehose uses to load data into the cluster from the S3 bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand](#amazonkinesisfirehosedeliverystreamredshiftdestinationconfigurationcopycommand)|Yes|

##### Password
The password for the Amazon Redshift user that you specified in the Username property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RoleARN
The ARN of the AWS Identity and Access Management (IAM) role that grants Firehose access to your S3 bucket and AWS KMS (if you enable data encryption).For more information, see Grant Firehose Access to an Amazon Redshift Destination  in the Amazon Kinesis Firehose Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### S3Configuration
The S3 bucket where Firehose first delivers data. After the data is in the bucket, Firehose uses the COPY command to load the data into the Amazon Redshift cluster. For the S3 bucket's compression format, don't specify SNAPPY or ZIP because the Amazon Redshift COPY command doesn't support them.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration](#amazonkinesisfirehosedeliverystreams3destinationconfiguration)|Yes|

##### Username
The Amazon Redshift user that has permission to access the Amazon Redshift cluster. This user must have INSERT privileges for copying data from the S3 bucket to the cluster.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration
#### Properties
##### KMSEncryptionConfig
The AWS Key Management Service (AWS KMS) encryption key that Amazon S3 uses to encrypt your data.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig](#amazonkinesisfirehosedeliverystreams3destinationconfigurationencryptionconfigurationkmsencryptionconfig)|No|

##### NoEncryptionConfig
Disables encryption. For valid values, see the NoEncryptionConfig content for the EncryptionConfiguration data type in the Amazon Kinesis Firehose API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSLambdaFunctionCode
#### Properties
##### S3Bucket
The name of the S3 bucket that contains the source code of your Lambda function. The S3 bucket must be in the same region as the stack.NoteThe cfn-response module isn't available for source code stored in S3 buckets. You must write your own functions to send responses.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional You must specify both the S3Bucket and S3Key properties or specify the ZipFile property.|

##### S3Key
The location and name of the .zip file that contains your source code. If you specify this property, you must also specify the S3Bucket property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional You must specify both the S3Bucket and S3Key properties or specify the ZipFile property.|

##### S3ObjectVersion
If you have S3 versioning enabled, the version ID of the.zip file that contains your source code. You can specify this property only if you specify the S3Bucket and S3Key properties.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ZipFile
For nodejs4.3 and python2.7 runtime environments, the            source code of your Lambda function. You can't use this property with other runtime            environments.You can specify up to 4096 characters. You must precede certain special characters in your source code, such as quotation marks ("), newlines (\n), and tabs (\t), with a backslash (\). For a list of special characters, see http://json.org/.If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module that simplifies sending responses. For more information, see cfn-response Module.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional You must specify both the S3Bucket and S3Key properties or specify the ZipFile property.|


### NameType
#### Properties

### AWSLambdaFunctionEnvironment
#### Properties
##### Variables
A map of key-value pairs that the Lambda function can access.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|


### AWSLambdaFunctionVPCConfig
#### Properties
##### SecurityGroupIds
A list of one or more security groups IDs in the VPC that includes the resources to which your Lambda function requires access.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### SubnetIds
A list of one or more subnet IDs in the VPC that includes the resources to which your Lambda function requires access.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|


### CloudWatchLogsMetricFilterMetricTransformationProperty
#### Properties
##### MetricName
The name of the CloudWatch metric to which the log information will be                  published.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MetricNamespace
The destination namespace of the CloudWatch metric. Namespaces are containers for                  metrics. For example, you can add related metrics in the same namespace.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### MetricValue
The value that is published to the CloudWatch metric. For example, if you're counting                  the occurrences of a particular term like Error, specify                     1 for the metric value. If you're counting the number of bytes                  transferred, reference the value that is in the log event by using $                  followed by the name of the field that you specified in the filter pattern, such                  as $size.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSOpsWorksSslConfigurationType
#### Properties
##### Certificate
The contents of the certificate's domain.crt file.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Chain
An intermediate certificate authority key or client authentication.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### PrivateKey
The private key; the contents of the certificate's                     domain.kex file.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### DataSource
#### Properties
##### Arn
The ARN of the data source.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### DatabaseName
The name of the database.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Type
The type of the data source, such as                     AutoSelectOpsworksMysqlInstance,                     OpsworksMysqlInstance, or RdsDbInstance. For valid                  values, see the DataSource                  type in the AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSOpsWorksInstanceBlockDeviceMappingEbsBlockDevice
#### Properties
##### DeleteOnTermination
Indicates whether to delete the volume when the instance is terminated.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Iops
The number of I/O operations per second (IOPS) that the volume supports. For                  more information, see Iops for the EbsBlockDevice action in the                     Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### SnapshotId
The snapshot ID of the volume that you want to use. If you specify both the                     SnapshotId and VolumeSize properties,                     VolumeSize must be equal to or greater than the size of the                  snapshot.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### VolumeSize
The volume size, in Gibibytes (GiB). If you specify both the                     SnapshotId and VolumeSize properties,                     VolumeSize must be equal to or greater than the size of the                  snapshot. For more information about specifying volume size, see VolumeSize for the                     EbsBlockDevice action in the                     Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### VolumeType
The volume type. For more information about specifying the volume type, see                     VolumeType for the                     EbsBlockDevice action in the                     Amazon EC2 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSOpsWorksAppEnvironment
#### Properties
##### Key
The name of the environment variable, which can consist of up to 64 characters.                  You can use upper and lowercase letters, numbers, and underscores (_), but the                  name must start with a letter or underscore.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Secure
Indicates whether the value of the environment variable is concealed, such as                  with a DescribeApps                  response. To conceal an environment variable's value, set the value to                     true.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Value
The value of the environment variable, which can be empty. You can specify a                  value of up to 256 characters.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSOpsWorksLayerLifeCycleConfiguration
#### Properties
##### ShutdownEventConfiguration
Specifies the shutdown event configuration for a layer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration](#awsopsworkslayerlifecycleconfigurationshutdowneventconfiguration)|No|


### AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration
#### Properties
##### DelayUntilElbConnectionsDrained
Indicates whether to wait for connections to drain from the Elastic Load Balancing load                  balancers.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### ExecutionTimeout
The time, in seconds, that AWS OpsWorks waits after a shutdown event has been                  triggered before shutting down an instance.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AWSOpsWorksInstanceBlockDeviceMapping
#### Properties
##### DeviceName
The name of the device that is exposed to the instance, such as                     /dev/dsh or xvdh. For the root device, you can use                  the explicit device name or you can set this parameter to                  ROOT_DEVICE. If you set the parameter to ROOT_DEVICE,                  AWS OpsWorks provides the correct device name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Ebs
Configuration information about the Amazon Elastic Block Store (Amazon EBS) volume.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksInstanceBlockDeviceMappingEbsBlockDevice](#awsopsworksinstanceblockdevicemappingebsblockdevice)|Conditional You can specify either the VirtualName or                     Ebs, but not both.|

##### NoDevice
Suppresses the device that is specified in the block device mapping of the                  AWS OpsWorks instance Amazon Machine Image (AMI).

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### VirtualName
The name of the virtual device. The name must be in the form                        ephemeralX, where                     X is a number equal to or greater than zero (0), for                  example, ephemeral0.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional You can specify either the VirtualName or                     Ebs, but not both.|


### AWSOpsWorksTimeBasedAutoScalingType
#### Properties
##### Friday
The schedule for Friday.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### Monday
The schedule for Monday.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### Saturday
The schedule for Saturday.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### Sunday
The schedule for Sunday.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### Thursday
The schedule for Thursday.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### Tuesday
The schedule for Tuesday.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|

##### Wednesday
The schedule for Wednesday.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Map|No|


### AWSOpsWorksRecipesType
#### Properties
##### Configure
Custom recipe names to be run following a Configure event. The event occurs on                  all of the stack's instances when an instance enters or leaves the online                  state.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Deploy
Custom recipe names to be run following a Deploy event. The event occurs when                  you run a deploy command, typically to deploy an application to a set                  of application server instances.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Setup
Custom recipe names to be run following a Setup event. This event                  occurs on a new instance after it successfully boots.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Shutdown
Custom recipe names to be run following a Shutdown event. This                  event occurs after you direct AWS OpsWorks to shut an instance down before the associated                  Amazon EC2 instance is actually terminated.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Undeploy
Custom recipe names to be run following a Undeploy event. This                  event occurs when you delete an app or run an undeploy command to                  remove an app from a set of application server instances.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AWSOpsWorksAutoScalingThresholdsType
#### Properties
##### CpuThreshold
The percentage of CPU utilization that triggers the starting or stopping of                  instances (scaling).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### IgnoreMetricsTime
The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks should                  ignore metrics and not start any additional scaling events.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### InstanceCount
The number of instances to add or remove when the load exceeds a                  threshold.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### LoadThreshold
The degree of system load that triggers the starting or stopping of instances                  (scaling). For more information about how load is computed, see Load                     (computing).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### MemoryThreshold
The percentage of memory consumption that triggers the starting or stopping of                  instances (scaling).

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### ThresholdsWaitTime
The amount of time, in minutes, that the load must exceed a threshold before                  instances are added or removed.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AWSOpsWorksLoadBasedAutoScalingType
#### Properties
##### DownScaling
The threshold below which the instances are scaled down (stopped). If the load                  falls below this threshold for a specified amount of time, AWS OpsWorks stops a specified                  number of instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksAutoScalingThresholdsType](#awsopsworksautoscalingthresholdstype)|No|

##### Enable
Whether to enable automatic load-based scaling for the layer.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### UpScaling
The threshold above which the instances are scaled up (added). If the load                  exceeds this thresholds for a specified amount of time, AWS OpsWorks starts a specified                  number of instances.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSOpsWorksAutoScalingThresholdsType](#awsopsworksautoscalingthresholdstype)|No|


### AWSOpsWorksVolumeConfigurationType
#### Properties
##### Iops
The number of I/O operations per second (IOPS) to provision for the                  volume.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. If you specify io1 for the volume type,                  you must specify this property.|

##### MountPoint
The volume mount point, such as /dev/sdh.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### NumberOfDisks
The number of disks in the volume.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### RaidLevel
The volume RAID level.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### Size
The volume size.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### VolumeType
The type of volume, such as magnetic or SSD. For valid values, see VolumeConfiguration in                  the AWS OpsWorks Stacks API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSOpsWorksChefConfigurationType
#### Properties
##### BerkshelfVersion
The Berkshelf version.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ManageBerkshelf
Whether to enable Berkshelf.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|


### AWSOpsWorksStackElasticIp
#### Properties
##### Ip
The Elastic IP address.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Name
A name for the Elastic IP address.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSOpsWorksStackRdsDbInstance
#### Properties
##### DbPassword
The password of the registered database.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### DbUser
The master user name of the registered database.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RdsDbInstanceArn
The Amazon Resource Name (ARN) of the Amazon RDS DB instance to register with the                  AWS OpsWorks stack.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSOpsWorksSourceType
#### Properties
##### Password
This parameter depends on the repository type. For Amazon S3 bundles, set                     Password to the appropriate IAM secret access key. For HTTP                  bundles, Git repositories, and Subversion repositories, set Password                  to the appropriate password.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Revision
The application's version. With AWS OpsWorks, you can deploy new versions of an                  application. One of the simplest approaches is to have branches or revisions in                  your repository that represent different versions that can potentially be                  deployed.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SshKey
The repository's SSH key. For more information, see Using Git Repository SSH                     Keys in the AWS OpsWorks User Guide.To pass in an SSH key as a parameter, see the following                  example:

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Type
The repository type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Url
The source URL.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Username
This parameter depends on the repository type. For Amazon S3 bundles, set                     Username to the appropriate IAM access key ID. For HTTP bundles,                  Git repositories, and Subversion repositories, set Username to the                  appropriate user name.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSOpsWorksStackConfigurationManagerType
#### Properties
##### Name
The name of the configuration manager.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Version
The Chef version.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonRDSOptionGroupOptionConfigurationsOptionSettings
#### Properties
##### Name
The name of the option setting that you want to specify.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Value
The value of the option setting.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSCloudFormationResourceTagsType
#### Properties
##### Key
The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonRDSOptionGroupOptionConfigurations
#### Properties
##### DBSecurityGroupMemberships
A list of database security group names for this option. If the option requires            access to a port, the security groups must allow access to that port. If you specify            this property, don't specify the VPCSecurityGroupMemberships            property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### OptionName
The name of the option. For more information about options, see Working with Option              Groups in the Amazon Relational Database Service User              Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### OptionSettings
The settings for this option.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonRDSOptionGroupOptionConfigurationsOptionSettings](#amazonrdsoptiongroupoptionconfigurationsoptionsettings)|No|

##### Port
The port number that this option uses.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### VpcSecurityGroupMemberships
A list of VPC security group IDs for this option. If the option requires access to a            port, the security groups must allow access to that port. If you specify this property,            don't specify the DBSecurityGroupMemberships property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|


### AmazonRDSSecurityGroupRule
#### Properties
##### CIDRIP
The IP range to authorize.For an overview of CIDR ranges, go to the Wikipedia                  Tutorial.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EC2SecurityGroupId
Id of the VPC or EC2 Security Group to authorize.For VPC DB Security Groups, use EC2SecurityGroupId. For EC2 Security Groups, use                  EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EC2SecurityGroupName
Name of the EC2 Security Group to authorize.For VPC DB Security Groups, use EC2SecurityGroupId. For EC2 Security Groups, use                  EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### EC2SecurityGroupOwnerId
AWS Account Number of the owner of the EC2 Security Group specified in the EC2SecurityGroupName                  parameter. The AWS Access Key ID is not an acceptable value.For VPC DB Security Groups, use EC2SecurityGroupId. For EC2 Security Groups, use                  EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### Route53AliasTargetProperty
#### Properties
##### DNSName
The DNS name of the load balancer, the domain name of the CloudFront distribution, the website endpoint of the Amazon S3 bucket, or another record set in the same hosted zone that is the target of the alias.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### EvaluateTargetHealth
Whether Amazon Route 53 checks the health of the resource record sets in the alias target                  when responding to DNS queries. For more information about using this property,                  see EvaluateTargetHealth in the                  Amazon Route 53 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### HostedZoneId
The hosted zone ID. For load balancers, use the canonical hosted zone ID of the                  load balancer. For Amazon S3, use the hosted zone ID for your bucket's website                  endpoint. For CloudFront, use Z2FDTNDATAQYW2. For a list of hosted zone IDs                  of other services, see the relevant service in the AWS Regions and Endpoints.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonRoute53HealthCheckConfig
#### Properties
##### FailureThreshold
The number of consecutive health checks that an endpoint must pass or fail for                  Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or                  healthy to unhealthy.  For more information, see How Amazon Route 53 Determines Whether an Endpoint Is Healthy in the                     Amazon Route 53 Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### FullyQualifiedDomainName
If you specified the IPAddress property, the value that you want                  Amazon Route 53 to pass in the host header in all health checks except for TCP health                  checks. If you don't specify an IP address, the domain that Amazon Route 53 sends a DNS                  request to. Amazon Route 53 uses the IP address that the DNS returns to check the health of                  the endpoint.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### IPAddress
The IPv4 IP address of the endpoint on which you want Amazon Route 53 to                  perform health checks. If you don't specify an IP address, Amazon Route 53 sends a DNS                  request to resolve the domain name that you specify in the                     FullyQualifiedDomainName property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Port
The port on the endpoint on which you want Amazon Route 53 to perform health                  checks.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. Required when you specify TCP for the                     Type property.|

##### RequestInterval
The number of seconds between the time that Amazon Route 53 gets a response from your                  endpoint and the time that it sends the next health-check request. Each Amazon Route 53                  health checker makes requests at this interval. For valid values, see the RequestInterval element in the                     Amazon Route 53 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|

##### ResourcePath
The path that you want Amazon Route 53 to request when performing health checks. The path                  can be any value for which your endpoint returns an HTTP status code of                        2xx or                        3xx when the endpoint is healthy,                  such as /docs/route53-health-check.html.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### SearchString
If the value of the Type property is HTTP_STR_MATCH                  or HTTPS_STR_MATCH, the string that you want Amazon Route 53 to search for in                  the response body from the specified resource. If the string appears in the                  response body, Amazon Route 53 considers the resource healthy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Type
The type of health check that you want to create, which indicates how Amazon Route 53                  determines whether an endpoint is healthy. You can specify HTTP,                     HTTPS, HTTP_STR_MATCH,  HTTPS_STR_MATCH,                  or TCP. For information about the different types, see the Type element                  in the Amazon Route 53 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonRoute53HostedZoneTags
#### Properties
##### Key
The key name of the tag.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value for the tag.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonRoute53HostedZoneConfigProperty
#### Properties
##### Comment
Any comments that you want to include about the hosted zone.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonRoute53HealthCheckTags
#### Properties
##### Key
The key name of the tag.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value for the tag.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonS3CorsConfigurationRule
#### Properties
##### AllowedHeaders
Headers that are specified in the Access-Control-Request-Headers                  header. These headers are allowed in a preflight OPTIONS request. In response to                  any preflight OPTIONS request, Amazon S3 returns any requested headers that are                  allowed.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### AllowedMethods
An HTTP method that you allow the origin to execute. The valid values are                     GET, PUT, HEAD, POST, and                     DELETE.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### AllowedOrigins
An origin that you allow to send cross-domain requests.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|

##### ExposedHeaders
One or more headers in the response that are accessible to client applications                  (for example, from a JavaScript XMLHttpRequest object).

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|No|

##### Id
A unique identifier for this rule. The value cannot be more than 255                  characters.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### MaxAge
The time in seconds that your browser is to cache the preflight response for                  the specified resource.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|No|


### AmazonS3CorsConfiguration
#### Properties
##### CorsRules
A set of origins and methods that you allow.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3CorsConfigurationRule](#amazons3corsconfigurationrule)|Yes|


### AmazonS3LifecycleRuleNoncurrentVersionTransition
#### Properties
##### StorageClass
The storage class to which you want the object to transition, such as                     GLACIER. For valid values, see the StorageClass                  request element of the PUT                     Bucket lifecycle action in the                  Amazon Simple Storage Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TransitionInDays
The number of days between the time that a new version of the object is                  uploaded to the bucket and when old versions of the object are transitioned to the                  specified storage class.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AmazonS3LifecycleRuleTransition
#### Properties
##### StorageClass
The storage class to which you want the object to transition, such as                     GLACIER. For valid values, see the StorageClass                  request element of the PUT                     Bucket lifecycle action in the                  Amazon Simple Storage Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TransitionDate
Indicates when objects are transitioned to the specified storage class. The                  date value must be in ISO 8601 format. The time is always midnight UTC.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### TransitionInDays
Indicates the number of days after creation when objects are transitioned to                  the specified storage class.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional|


### AmazonRoute53RecordSetGeoLocationProperty
#### Properties
##### ContinentCode
All DNS queries from the continent that you specified are routed to this                  resource record set. If you specify this property, omit the                     CountryCode and SubdivisionCode properties.For valid values, see the ContinentCode element in the                  Amazon Route 53 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify this or the CountryCode                  property.|

##### CountryCode
All DNS queries from the country that you specified are routed to this resource                  record set. If you specify this property, omit the ContinentCode                  property.For valid values, see the CountryCode element in the                  Amazon Route 53 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify this or the ContinentCode                  property.|

##### SubdivisionCode
If you specified US for the country code, you can specify a state                  in the United States. All DNS queries from the state that you specified are routed                  to this resource record set. If you specify this property, you must specify                     US for the CountryCode and omit the                     ContinentCode property.For valid values, see the SubdivisionCode element in the                  Amazon Route 53 API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonS3LoggingConfiguration
#### Properties
##### DestinationBucketName
The name of an Amazon S3 bucket where Amazon S3 store server access log files. You can                  store log files in any bucket that you own. By default, logs are stored in the                  bucket where the LoggingConfiguration property is defined.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### LogFilePrefix
A prefix for the all log object keys. If you store log files from multiple Amazon S3                  buckets in a single bucket, you can use a prefix to distinguish which log files                  came from which bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonS3LifecycleRule
#### Properties
##### ExpirationDate
Indicates when objects are deleted from Amazon S3 and Amazon Glacier. The date value must be                  in ISO 8601 format. The time is always midnight UTC. If you specify an expiration                  and transition time, you must use the same time unit for both properties (either                  in days or by date). The expiration time must also be later than the transition                  time.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions.|

##### ExpirationInDays
Indicates the number of days after creation when objects are deleted from Amazon S3                  and Amazon Glacier. If you specify an expiration and transition time, you must use the same                  time unit for both properties (either in days or by date). The expiration time                  must also be later than the transition time.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions.|

##### Id
A unique identifier for this rule. The value cannot be more than 255                  characters.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### NoncurrentVersionExpirationInDays
For buckets with versioning enabled (or suspended), specifies the time, in                  days, between when a new version of the object is uploaded to the bucket and when                  old versions of the object expire. When object versions expire, Amazon S3 permanently                  deletes them. If you specify a transition and expiration time, the expiration time                  must be later than the transition time.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions.|

##### NoncurrentVersionTransition
For buckets with versioning enabled (or suspended), specifies when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the NoncurrentVersionTransitions property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3LifecycleRuleNoncurrentVersionTransition](#amazons3lifecyclerulenoncurrentversiontransition)|Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions.|

##### NoncurrentVersionTransitions
For buckets with versioning enabled (or suspended), one or more transition rules that specify when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the NoncurrentVersionTransition property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonS3LifecycleRuleNoncurrentVersionTransition](#amazons3lifecyclerulenoncurrentversiontransition)|Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions.|

##### Prefix
Object key prefix that identifies one or more objects to which this rule                  applies.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Status
Specify either Enabled or Disabled. If you specify                     Enabled, Amazon S3 executes this rule as scheduled. If you specify                     Disabled, Amazon S3 ignores this rule.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Transition
Specifies when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the Transitions property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3LifecycleRuleTransition](#amazons3lifecycleruletransition)|Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions.|

##### Transitions
One or more transition rules that specify when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the Transition property.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonS3LifecycleRuleTransition](#amazons3lifecycleruletransition)|Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions.|


### AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations
#### Properties
##### Event
The S3 bucket event for which to invoke the Lambda function.                  For more information, see Supported Event Types in the                  Amazon Simple Storage Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Filter
The filtering rules that determine which objects invoke the Lambda function. For                  example, you can create a filter so that only image files with a                     .jpg extension invoke the function when they are added to                  the S3 bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3NotificationConfigurationConfigFilter](#amazons3notificationconfigurationconfigfilter)|No|

##### Function
The Amazon Resource Name (ARN) of the Lambda function that Amazon S3 invokes when the                  specified event type occurs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonS3LifecycleConfiguration
#### Properties
##### Rules
A lifecycle rule for individual objects in an S3 bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3LifecycleRule](#amazons3lifecyclerule)|Yes|


### AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations
#### Properties
##### Event
The S3 bucket event about which you want to publish messages to Amazon Simple Queue Service (                  Amazon SQS). For more information, see Supported Event Types in the                  Amazon Simple Storage Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Filter
The filtering rules that determine for which objects to send notifications. For                  example, you can create a filter so that Amazon Simple Storage Service (Amazon S3) sends notifications only                  when image files with a .jpg extension are added to the                  bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3NotificationConfigurationConfigFilter](#amazons3notificationconfigurationconfigfilter)|No|

##### Queue
The Amazon Resource Name (ARN) of the Amazon SQS queue that Amazon S3 publishes messages                  to when the specified event type occurs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonS3NotificationConfigurationTopicConfigurations
#### Properties
##### Event
The Amazon Simple Storage Service (Amazon S3) bucket event about which to send notifications. For more                  information, see Supported Event                     Types in the Amazon Simple Storage Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Filter
The filtering rules that determine for which objects to send notifications. For                  example, you can create a filter so that Amazon Simple Storage Service (Amazon S3) sends notifications only                  when image files with a .jpg extension are added to the                  bucket.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3NotificationConfigurationConfigFilter](#amazons3notificationconfigurationconfigfilter)|No|

##### Topic
The Amazon SNS topic Amazon Resource Name (ARN) to which Amazon S3 reports the specified                  events.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonS3NotificationConfiguration
#### Properties
##### LambdaConfigurations
The AWS Lambda functions to invoke and the events for which to invoke the                  functions.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations](#amazonsimplestorageservicenotificationconfigurationlambdaconfigurations)|No|

##### QueueConfigurations
The Amazon Simple Queue Service queues to publish messages to and the events for which to publish                  messages.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations](#amazonsimplestorageservicenotificationconfigurationqueueconfigurations)|No|

##### TopicConfigurations
The topic to which notifications are sent and the events for which notification                  are generated.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonS3NotificationConfigurationTopicConfigurations](#amazons3notificationconfigurationtopicconfigurations)|No|


### AmazonS3NotificationConfigurationConfigFilterS3KeyRules
#### Properties
##### Name
Whether the filter matches the prefix or suffix of object key names. For valid                  values, see the Name request element of the PUT Bucket                     notification action in the                  Amazon Simple Storage Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
The value that the filter searches for in object key names.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonS3ReplicationConfigurationRulesDestination
#### Properties
##### Bucket
The Amazon resource name (ARN) of an S3 bucket where Amazon S3 stores replicated                  objects. This destination bucket must be in a different region than your source                  bucket.If you have multiple rules in your replication configuration, specify the same                  destination bucket for all of the rules.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### StorageClass
The storage class to use when replicating objects, such as standard or reduced                  redundancy. By default, Amazon S3 uses the storage class of the source object to create                  object replica. For valid values, see the StorageClass element of the                     PUT Bucket                     replication action in the Amazon Simple Storage Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonS3NotificationConfigurationConfigFilterS3Key
#### Properties
##### Rules
The object key name to filter on and whether to filter on the suffix or prefix                  of the key name.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonS3NotificationConfigurationConfigFilterS3KeyRules](#amazons3notificationconfigurationconfigfilters3keyrules)|Yes|


### AmazonS3NotificationConfigurationConfigFilter
#### Properties
##### S3Key
Amazon S3 filtering rules that describe for which object key names to send                  notifications.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3NotificationConfigurationConfigFilterS3Key](#amazons3notificationconfigurationconfigfilters3key)|Yes|


### AmazonS3ReplicationConfigurationRules
#### Properties
##### Destination
Defines the destination where Amazon S3 stores replicated objects.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3ReplicationConfigurationRulesDestination](#amazons3replicationconfigurationrulesdestination)|Yes|

##### Id
A unique identifier for the rule. If you don't specify a value, AWS CloudFormation generates                  a random ID.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Prefix
An object prefix. This rule applies to all Amazon S3 objects with this prefix. To                  specify all objects in an S3 bucket, specify an empty string.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Status
Whether the rule is enabled. For valid values, see the Status                  element of the PUT Bucket                     replication action in the Amazon Simple Storage Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonS3VersioningConfiguration
#### Properties
##### Status
The versioning state of an Amazon S3 bucket. If you enable versioning, you must                  suspend versioning to disable it.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty
#### Properties
##### HttpErrorCodeReturnedEquals
Applies this redirect if the error code equals this value in the event of an                  error.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify at least one condition                  property.|

##### KeyPrefixEquals
The object key name prefix when the redirect is applied. For example, to                  redirect requests for ExamplePage.html, set the key prefix to                     ExamplePage.html. To redirect request for all pages with the                  prefix docs/, set the key prefix to docs/, which                  identifies all objects in the docs/ folder.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must at least one condition property.|


### AmazonS3ReplicationConfiguration
#### Properties
##### Role
The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that Amazon S3 assumes                  when replicating objects. For more information, see How to Set Up Cross-Region                     Replication in the Amazon Simple Storage Service Developer Guide.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Rules
A replication rule that specifies which objects to replicate and where they are                  stored.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonS3ReplicationConfigurationRules](#amazons3replicationconfigurationrules)|Yes|


### AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty
#### Properties
##### HostName
Name of the host where requests are redirected.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Protocol
Protocol to use (http or https) when redirecting                  requests. The default is the protocol that is used in the original request.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty
#### Properties
##### HostName
Name of the host where requests are redirected.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### HttpRedirectCode
The HTTP redirect code to use on the response.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Protocol
The protocol to use in the redirect request.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ReplaceKeyPrefixWith
The object key prefix to use in the redirect request. For example, to redirect                  requests for all pages with the prefix docs/ (objects in the                     docs/ folder) to the documents/ prefix, you can set                  the KeyPrefixEquals property in routing condition property to                     docs/, and set the ReplaceKeyPrefixWith property to documents/.ImportantIf you specify this property, you cannot specify the                        ReplaceKeyWith property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ReplaceKeyWith
The specific object key to use in the redirect request. For example, redirect                  request to error.html.ImportantIf you specify this property, you cannot specify the                        ReplaceKeyPrefixWith property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AmazonS3WebsiteConfigurationRoutingRulesProperty
#### Properties
##### RedirectRule
Redirect requests to another host, to another page, or with another                  protocol.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty](#amazons3websiteconfigurationroutingrulesredirectruleproperty)|Yes|

##### RoutingRuleCondition
Rules that define when a redirect is applied.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty](#amazons3websiteconfigurationroutingrulesroutingruleconditionproperty)|No|


### CloudFormationStackParametersPropertyType
#### Properties

### AmazonSQSRedrivePolicy
#### Properties
##### deadLetterTargetArn
The Amazon Resource Name (ARN) of the dead letter queue to which the messages are            sent to after the maxReceiveCount value has been exceeded.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### maxReceiveCount
The number of times a message is delivered to the source queue before being sent to            the dead letter queue.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AmazonSNSSubscriptionPropertyType
#### Properties
##### Endpoint
The subscription's endpoint (format depends on the protocol). For more                  information, see the Subscribe                     Endpoint parameter in the                  Amazon Simple Notification Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Protocol
The subscription's protocol. For more information, see the Subscribe Protocol parameter in                  the Amazon Simple Notification Service API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonS3WebsiteConfigurationProperty
#### Properties
##### ErrorDocument
The name of the error document for the website.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### IndexDocument
The name of the index document for the website.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### RedirectAllRequestsTo
The redirect behavior for every request to this bucket's website endpoint.ImportantIf you specify this property, you cannot specify any other                        property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty](#amazons3websiteconfigurationredirectallrequeststoproperty)|No|

##### RoutingRules
Rules that define when a redirect is applied and the redirect behavior.

| Array    | Type     | Required |
|----------|----------|----------|
|true|[AmazonS3WebsiteConfigurationRoutingRulesProperty](#amazons3websiteconfigurationroutingrulesproperty)|No|


### AmazonEC2SystemsManagerAssociationTargets
#### Properties
##### Key
The name of the criteria that EC2 instances must meet. For valid keys, see the              Target data type in the              Amazon EC2 Systems Manager API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Values
The value of the criteria. SSM runs targeted commands on EC2 instances that match            the criteria. For more information, see the Target data type in the Amazon EC2 Systems Manager API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|true|String|Yes|


### AWSWAFByteMatchSetByteMatchTuples
#### Properties
##### FieldToMatch
The part of a web request that you want AWS WAF to search, such as a specific                  header or a query string.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSWAFByteMatchSetByteMatchTuplesFieldToMatch](#awswafbytematchsetbytematchtuplesfieldtomatch)|Yes|

##### PositionalConstraint
How AWS WAF finds matches within the web request part in which you are searching.                  For valid values, see the PositionalConstraint content for the ByteMatchTuple data type in                  the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### TargetString
The value that AWS WAF searches for. AWS CloudFormation base64 encodes this value before                  sending it to AWS WAF.AWS WAF searches for this value in a specific part of web requests, which you                  define in the FieldToMatch property.Valid values depend on the Type value in the                     FieldToMatch property. For example, for a METHOD                  type, you must specify HTTP methods such as DELETE, GET, HEAD, OPTIONS,                     PATCH, POST, and PUT. For more information, see the                     TargetString content for the ByteMatchTuple data type in                  the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify this property or the                     TargetStringBase64 property.|

##### TargetStringBase64
The base64-encoded value that AWS WAF searches for. AWS CloudFormation sends this value to                  AWS WAF without encoding it.AWS WAF searches for this value in a specific part of web requests, which you                  define in the FieldToMatch property.Valid values depend on the Type value in the                     FieldToMatch property. For example, for a METHOD                  type, you must specify HTTP methods such as DELETE, GET, HEAD, OPTIONS,                     PATCH, POST, and PUT. For more information, see the                     TargetString content for the ByteMatchTuple data type in                  the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional. You must specify this property or the                     TargetString property.|

##### TextTransformation
Specifies how AWS WAF processes the target string value. Text transformations                  eliminate some of the unusual formatting that attackers use in web requests in an                  effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms the                  target string value before inspecting a web request for a match.For example, AWS WAF can replace whitespace characters (such as \t                  and \n) with a single space. For valid values, see the                     TextTransformation content for the ByteMatchTuple data type in                  the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFIPSetIPSetDescriptors
#### Properties
##### Type
The IP address type, such as IPV4. For valid values, see the                     Type contents of the IPSetDescriptor data type                  in the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Value
An IP address (in CIDR notation) that AWS WAF permits, blocks, or counts. For                  example, to specify a single IP address such as 192.0.2.44, specify                     192.0.2.44/32. To specify a range of IP addresses such as                     192.0.2.0 to 192.0.2.255, specify                     192.0.2.0/24.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFByteMatchSetByteMatchTuplesFieldToMatch
#### Properties
##### Data
If you specify HEADER for the Type property, the name            of the header that AWS WAF searches for, such as User-Agent or              Referer. If you specify any other value for the Type            property, do not specify this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### Type
The part of the web request in which AWS WAF searches for the target string. For            valid values, see FieldToMatch            in the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFRulePredicates
#### Properties
##### DataId
The unique identifier of a predicate, such as the ID of a ByteMatchSet or IPSet.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Negated
Whether to use the settings or the negated settings that you specified in the ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects.Specify false if you want AWS WAF to allow, block, or count requests based on the settings in the specified ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects. For example, if an IPSet object includes the IP address 192.0.2.44, AWS WAF allows, blocks, or counts requests originating from that IP address.Specify true if you want AWS WAF to allow, block, or count requests based on the negated settings in the ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects. For example, if an IPSet object includes the IP address 192.0.2.44, AWS WAF allows, blocks, or counts requests originating from all IP addresses except 192.0.2.44.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### Type
The type of predicate in a rule, such as an IPSet              (IPMatch). For valid values, see the Type contents of the              Predicate data type in the              AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFSizeConstraintSetSizeConstraint
#### Properties
##### ComparisonOperator
The type of comparison that you want AWS WAF to perform. AWS WAF uses this value in combination with the Size and FieldToMatch property values to check if the size constraint is a match. For more information and valid values, see the ComparisonOperator content for the SizeConstraint data type in the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### FieldToMatch
The part of a web request that you want AWS WAF to search, such as a specific header or a query string.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSWAFSizeConstraintSetSizeConstraintFieldToMatch](#awswafsizeconstraintsetsizeconstraintfieldtomatch)|Yes|

##### Size
The size in bytes that you want AWS WAF to compare against the size of the specified FieldToMatch. AWS WAF uses Size in combination with the ComparisonOperator and FieldToMatch property values to check if the size constraint of a web request is a match. For more information and valid values, see the Size content for the SizeConstraint data type in the                     AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### TextTransformation
Specifies how AWS WAF processes the FieldToMatch property before inspecting a request for a match. Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms the FieldToMatch before inspecting a web request for a match.For example, AWS WAF can replace white space characters (such as \t and \n) with a single space. For valid values, see the TextTransformation content for the SizeConstraint data type in the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFSizeConstraintSetSizeConstraintFieldToMatch
#### Properties
##### Data
If you specify HEADER for the Type property, the name of the header that AWS WAF searches for, such as User-Agent or Referer. If you specify any other value for the Type property, do not specify this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### Type
The part of the web request in which AWS WAF searches for the target string. For valid values, see FieldToMatch in the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch
#### Properties
##### Data
If you specify HEADER for the Type property, the name                  of the header that AWS WAF searches for, such as User-Agent or                     Referer. If you specify any other value for the Type                  property, do not specify this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### Type
The part of the web request in which AWS WAF searches for the target string. For                  valid values, see FieldToMatch in the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples
#### Properties
##### FieldToMatch
The part of a web request that you want AWS WAF to search, such as a specific                  header or a query string.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSWAFByteMatchSetByteMatchTuplesFieldToMatch](#awswafbytematchsetbytematchtuplesfieldtomatch)|Yes|

##### TextTransformation
Text transformations eliminate some of the unusual formatting that attackers                  use in web requests in an effort to bypass AWS WAF. If you specify a transformation,                  AWS WAF transforms the target string value before inspecting a web request for a                  match. For valid values, see the TextTransformation content for the                     SqlInjectionMatchTuple data type in the                     AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFWebACLAction
#### Properties
##### Type
For actions that are associated with a rule, the action that AWS WAF takes when a                  web request matches all conditions in a rule.For the default action of a web access control list (ACL), the action that                  AWS WAF takes when a web request doesn't match all conditions in any rule.For valid value, see the Type contents of the WafAction data type in the                     AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFXssMatchSetXssMatchTuple
#### Properties
##### FieldToMatch
The part of a web request that you want AWS WAF to search, such as a specific header or a query string.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSWAFXssMatchSetXssMatchTupleFieldToMatch](#awswafxssmatchsetxssmatchtuplefieldtomatch)|Yes|

##### TextTransformation
Specifies how AWS WAF processes the FieldToMatch property before inspecting a request for a match. Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms theFieldToMatch parameter before inspecting a web request for a match.For example, AWS WAF can replace white space characters (such as \t and \n) with a single space. For valid values, see the TextTransformation content for the XssMatchTuple data type in the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFWebACLRules
#### Properties
##### Action
The action that Amazon CloudFront (CloudFront) or AWS WAF takes when a web request matches all                  conditions in the rule, such as allow, block, or count the request.

| Array    | Type     | Required |
|----------|----------|----------|
|false|[AWSWAFWebACLAction](#awswafwebaclaction)|Yes|

##### Priority
The order in which AWS WAF evaluates the rules in a web ACL. AWS WAF evaluates                  rules with a lower value before rules with a higher value. The value must be a                  unique integer. If you have multiple rules in a web ACL, the priority numbers do                  not need to be consecutive.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### RuleId
The ID of an AWS WAF rule to                  associate with a web ACL.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSWAFXssMatchSetXssMatchTupleFieldToMatch
#### Properties
##### Data
If you specify HEADER for the Type property, the name of the header that AWS WAF searches for, such as User-Agent or Referer. If you specify any other value for the Type property, do not specify this property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Conditional|

##### Type
The part of the web request in which AWS WAF searches for the target string. For valid values, see FieldToMatch in the AWS WAF API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AmazonRedshiftParameterType
#### Properties
##### ParameterName
The name of the parameter.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### ParameterValue
The value of the parameter.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodePipelineCustomActionTypeSettings
#### Properties
##### EntityUrlTemplate
The URL that is returned to the AWS CodePipeline console that links to the resources of                  the external system, such as the configuration page for an AWS CodeDeploy deployment                  group.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ExecutionUrlTemplate
The URL that is returned to the AWS CodePipeline console that links to the top-level                  landing page for the external system, such as the console page for AWS CodeDeploy.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### RevisionUrlTemplate
The URL that is returned to the AWS CodePipeline console that links to the page where                  customers can update or change the configuration of the external action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### ThirdPartyConfigurationUrl
The URL of a sign-up page where users can sign up for an external service and                  specify the initial configurations for the service's action.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


### AWSCodePipelineCustomActionTypeArtifactDetails
#### Properties
##### MaximumCount
The maximum number of artifacts allowed for the action type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|

##### MinimumCount
The minimum number of artifacts allowed for the action type.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Number|Yes|


### AmazonRoute53HostedZoneVPCs
#### Properties
##### VPCId
The ID of the Amazon VPC that you want to associate with the hosted zone.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### VPCRegion
The region in which the Amazon VPC was created as specified in the                     VPCId property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|


### AWSCodePipelineCustomActionTypeConfigurationProperties
#### Properties
##### Description
A description of this configuration property that will be displayed to                  users.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|

##### Key
Indicates whether the configuration property is a key.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### Name
A name for this configuration property.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|Yes|

##### Queryable
Indicates whether the configuration property will be used with the                     PollForJobs call. A custom action can have one queryable property.                  The queryable property must be required (see the Required property)                  and must not be secret (see the Secret property). For more                  information, see the queryable contents for the ActionConfigurationProperty data type in the                     AWS CodePipeline API Reference.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|No|

##### Required
Indicates whether the configuration property is a required value.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### Secret
Indicates whether the configuration property is secret. Secret configuration                  properties are hidden from all AWS CodePipeline calls except for GetJobDetails,                     GetThirdPartyJobDetails, PollForJobs, and                     PollForThirdPartyJobs.

| Array    | Type     | Required |
|----------|----------|----------|
|false|Boolean|Yes|

##### Type
The type of the configuration property, such as String,                     Number, or Boolean.

| Array    | Type     | Required |
|----------|----------|----------|
|false|String|No|


