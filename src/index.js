// @flow

export { Template } from './template';
export { Parameter } from './elements/parameter';
export { Description } from './elements/description';
export { Output } from './elements/output';
export { Mapping } from './elements/mapping';
export { Resource, CustomResource } from './elements/resource';
export { Condition } from './elements/condition';
export { Ref, FnGetAtt, FnEquals, FnJoin } from './intrinsic';
import { Service, IService } from './service';
export { CreationPolicy } from './attributes/creationpolicy';
export { ResourceMetadata } from './attributes/metadata';
export { S3BucketTransform } from './transform/s3';
export {
  getInstanceTypeList,
  getInstanceTypeNameList
} from './macros/ec2meta.macro';
export { Pseudo } from './pseudo';

import * as fs from 'fs';
import * as path from 'path';

const files = fs.readdirSync(path.resolve(__dirname, './stubs/json'));

files.map(file => {
  if (file !== 'json') {
    const service = file.replace('.json', '');
    exports[service] = Service(service);
  }
});

/**
 * @description Wolkenkratzer is a Javascript library that allows you to programmatically generate AWS CloudFormation templates. The library targets 100% feature parity with CloudFormation. This is accomplished by scraping the public documentation and using that to build the data model. The scraper and json data model are in the cfn-doc-json-stubs project. Markdown documentation for the data model is available at doc.md.
 * 
 * Warning: The API for wolkenkratzer is not stable! There were many changes between the 0.6.0 and 0.7.0 releases. The API will continue to unstable until the 1.0 release. If you want to use wolkenkratzer make sure you lock the version you are using in your package.json so that your code doesn't break.
 * 
 * Wolkenkratzer's API is designed around immutable Template objects, and action functions that take an existing Template object and return a new one, without mutating the existing one. This allows for techniques such as method chaining:
 * 
 * ```javascript
 * const { Template, Output, S3, Ref } = require('wolkenkratzer');
 * 
 * let t = Template()
 * .add(S3.Bucket('Bucket'))
 * .add(Output('BucketName', { Value: Ref('Bucket') }));
 * 
 * console.log(JSON.stringify(t.build(), null, 2));
 * ```
 * 
 * Results in:
 * ```json
 * {
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "Bucket": {
      "Type": "AWS::S3::Bucket",
      "Properties": {}
    }
  },
  "Outputs": {
    "BucketName": {
      "Value": {
        "Ref": "Bucket"
      }
    }
  }
}
```

 When adding resources to the template, you can optionally have an Output block and (string) Parameters created automatically in one call:

 ```javascript
const { Template, S3 } = require('wolkenkratzer');

let t = Template().add(S3.Bucket('Bucket'), {
  Output: true,
  Parameters: ['BucketName']
});

console.log(JSON.stringify(t.build(), null, 2));
 ```

Result:
```json
{
    "AWSTemplateFormatVersion": "2010-09-09",
    "Resources": {
        "Bucket": {
            "Type": "AWS::S3::Bucket",
            "Properties": {
                "BucketName": {
                    "Ref": "BucketS3BucketParam"
                }
            }
        }
    },
    "Parameters": {
        "BucketS3BucketParam": {
            "Type": "String"
        }
    },
    "Outputs": {
        "BucketS3BucketOutput": {
            "Value": {
                "Ref": "Bucket"
            },
            "Export": {
                "Name": {
                    "Fn::Sub": "${AWS::StackName}-S3-Bucket-Bucket"
                }
            }
        }
    }
}
```

 */
/** 
 * 
 * 
 * Wolkenkratzer will also do (rudimentary) template type validation, throwing an error if an incorrect value is provided.
 * 
 * `
 */
