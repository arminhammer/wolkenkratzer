#!/bin/sh
wget https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json -P spec
cd spec/
mv CloudFormationResourceSpecification.json CloudFormationResourceSpecification.json.gz
gunzip CloudFormationResourceSpecification.json.gz