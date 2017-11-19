#!/bin/sh
cd src/spec/
rm CloudFormationResourceSpecification.json
wget https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json
mv CloudFormationResourceSpecification.json CloudFormationResourceSpecification.json.gz
gunzip CloudFormationResourceSpecification.json.gz
node transform.js