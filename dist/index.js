'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.Pseudo = exports.getInstanceTypeNameList = exports.getInstanceTypeList = exports.S3BucketTransform = exports.ResourceMetadata = exports.CreationPolicy = exports.FnJoin = exports.FnEquals = exports.FnGetAtt = exports.Ref = exports.Condition = exports.CustomResource = exports.Resource = exports.Mapping = exports.Output = exports.Description = exports.Parameter = exports.Template = undefined;var _template = require('./template');Object.defineProperty(exports, 'Template', { enumerable: true, get: function () {return _template.

        Template;} });var _parameter = require('./elements/parameter');Object.defineProperty(exports, 'Parameter', { enumerable: true, get: function () {return _parameter.
        Parameter;} });var _description = require('./elements/description');Object.defineProperty(exports, 'Description', { enumerable: true, get: function () {return _description.
        Description;} });var _output = require('./elements/output');Object.defineProperty(exports, 'Output', { enumerable: true, get: function () {return _output.
        Output;} });var _mapping = require('./elements/mapping');Object.defineProperty(exports, 'Mapping', { enumerable: true, get: function () {return _mapping.
        Mapping;} });var _resource = require('./elements/resource');Object.defineProperty(exports, 'Resource', { enumerable: true, get: function () {return _resource.
        Resource;} });Object.defineProperty(exports, 'CustomResource', { enumerable: true, get: function () {return _resource.CustomResource;} });var _condition = require('./elements/condition');Object.defineProperty(exports, 'Condition', { enumerable: true, get: function () {return _condition.
        Condition;} });var _intrinsic = require('./intrinsic');Object.defineProperty(exports, 'Ref', { enumerable: true, get: function () {return _intrinsic.
        Ref;} });Object.defineProperty(exports, 'FnGetAtt', { enumerable: true, get: function () {return _intrinsic.FnGetAtt;} });Object.defineProperty(exports, 'FnEquals', { enumerable: true, get: function () {return _intrinsic.FnEquals;} });Object.defineProperty(exports, 'FnJoin', { enumerable: true, get: function () {return _intrinsic.FnJoin;} });var _creationpolicy = require('./attributes/creationpolicy');Object.defineProperty(exports, 'CreationPolicy', { enumerable: true, get: function () {return _creationpolicy.

        CreationPolicy;} });var _metadata = require('./attributes/metadata');Object.defineProperty(exports, 'ResourceMetadata', { enumerable: true, get: function () {return _metadata.
        ResourceMetadata;} });var _s = require('./transform/s3');Object.defineProperty(exports, 'S3BucketTransform', { enumerable: true, get: function () {return _s.
        S3BucketTransform;} });var _ec2meta = require('./macros/ec2meta.macro');Object.defineProperty(exports, 'getInstanceTypeList', { enumerable: true, get: function () {return _ec2meta.

        getInstanceTypeList;} });Object.defineProperty(exports, 'getInstanceTypeNameList', { enumerable: true, get: function () {return _ec2meta.
        getInstanceTypeNameList;} });var _pseudo = require('./pseudo');Object.defineProperty(exports, 'Pseudo', { enumerable: true, get: function () {return _pseudo.

        Pseudo;} });var _service = require('./service');

var _fs = require('fs');var fs = _interopRequireWildcard(_fs);
var _path = require('path');var path = _interopRequireWildcard(_path);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}

const files = fs.readdirSync(path.resolve(__dirname, './stubs/json'));

files.map(file => {
    if (file !== 'json') {
        const service = file.replace('.json', '');
        exports[service] = (0, _service.Service)(service);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsIlBhcmFtZXRlciIsIkRlc2NyaXB0aW9uIiwiT3V0cHV0IiwiTWFwcGluZyIsIlJlc291cmNlIiwiQ3VzdG9tUmVzb3VyY2UiLCJDb25kaXRpb24iLCJSZWYiLCJGbkdldEF0dCIsIkZuRXF1YWxzIiwiRm5Kb2luIiwiQ3JlYXRpb25Qb2xpY3kiLCJSZXNvdXJjZU1ldGFkYXRhIiwiUzNCdWNrZXRUcmFuc2Zvcm0iLCJnZXRJbnN0YW5jZVR5cGVMaXN0IiwiZ2V0SW5zdGFuY2VUeXBlTmFtZUxpc3QiLCJQc2V1ZG8iLCJmcyIsInBhdGgiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsIm1hcCIsImZpbGUiLCJzZXJ2aWNlIiwicmVwbGFjZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBRVNBLGdCO0FBQ0FDLGlCO0FBQ0FDLG1CO0FBQ0FDLGM7QUFDQUMsZTtBQUNBQyxnQiw4R0FBVUMsYztBQUNWQyxpQjtBQUNBQyxXLHlHQUFLQyxRLHlHQUFVQyxRLHVHQUFVQyxNOztBQUV6QkMsc0I7QUFDQUMsd0I7QUFDQUMseUI7O0FBRVBDLDJCO0FBQ0FDLCtCOztBQUVPQyxjLE1BUlQ7O0FBVUEsd0IsSUFBWUMsRTtBQUNaLDRCLElBQVlDLEk7O0FBRVosTUFBTUMsUUFBUUYsR0FBR0csV0FBSCxDQUFlRixLQUFLRyxPQUFMLENBQWFDLFNBQWIsRUFBd0IsY0FBeEIsQ0FBZixDQUFkOztBQUVBSCxNQUFNSSxHQUFOLENBQVVDLFFBQVE7QUFDaEIsUUFBSUEsU0FBUyxNQUFiLEVBQXFCO0FBQ25CLGNBQU1DLFVBQVVELEtBQUtFLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLEVBQXRCLENBQWhCO0FBQ0FDLGdCQUFRRixPQUFSLElBQW1CLHNCQUFRQSxPQUFSLENBQW5CO0FBQ0Q7QUFDRixDQUxEOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUZBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuZXhwb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlJztcbmV4cG9ydCB7IFBhcmFtZXRlciB9IGZyb20gJy4vZWxlbWVudHMvcGFyYW1ldGVyJztcbmV4cG9ydCB7IERlc2NyaXB0aW9uIH0gZnJvbSAnLi9lbGVtZW50cy9kZXNjcmlwdGlvbic7XG5leHBvcnQgeyBPdXRwdXQgfSBmcm9tICcuL2VsZW1lbnRzL291dHB1dCc7XG5leHBvcnQgeyBNYXBwaW5nIH0gZnJvbSAnLi9lbGVtZW50cy9tYXBwaW5nJztcbmV4cG9ydCB7IFJlc291cmNlLCBDdXN0b21SZXNvdXJjZSB9IGZyb20gJy4vZWxlbWVudHMvcmVzb3VyY2UnO1xuZXhwb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnLi9lbGVtZW50cy9jb25kaXRpb24nO1xuZXhwb3J0IHsgUmVmLCBGbkdldEF0dCwgRm5FcXVhbHMsIEZuSm9pbiB9IGZyb20gJy4vaW50cmluc2ljJztcbmltcG9ydCB7IFNlcnZpY2UsIElTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcbmV4cG9ydCB7IENyZWF0aW9uUG9saWN5IH0gZnJvbSAnLi9hdHRyaWJ1dGVzL2NyZWF0aW9ucG9saWN5JztcbmV4cG9ydCB7IFJlc291cmNlTWV0YWRhdGEgfSBmcm9tICcuL2F0dHJpYnV0ZXMvbWV0YWRhdGEnO1xuZXhwb3J0IHsgUzNCdWNrZXRUcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybS9zMyc7XG5leHBvcnQge1xuICBnZXRJbnN0YW5jZVR5cGVMaXN0LFxuICBnZXRJbnN0YW5jZVR5cGVOYW1lTGlzdFxufSBmcm9tICcuL21hY3Jvcy9lYzJtZXRhLm1hY3JvJztcbmV4cG9ydCB7IFBzZXVkbyB9IGZyb20gJy4vcHNldWRvJztcblxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zdHVicy9qc29uJykpO1xuXG5maWxlcy5tYXAoZmlsZSA9PiB7XG4gIGlmIChmaWxlICE9PSAnanNvbicpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gZmlsZS5yZXBsYWNlKCcuanNvbicsICcnKTtcbiAgICBleHBvcnRzW3NlcnZpY2VdID0gU2VydmljZShzZXJ2aWNlKTtcbiAgfVxufSk7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFdvbGtlbmtyYXR6ZXIgaXMgYSBKYXZhc2NyaXB0IGxpYnJhcnkgdGhhdCBhbGxvd3MgeW91IHRvIHByb2dyYW1tYXRpY2FsbHkgZ2VuZXJhdGUgQVdTIENsb3VkRm9ybWF0aW9uIHRlbXBsYXRlcy4gVGhlIGxpYnJhcnkgdGFyZ2V0cyAxMDAlIGZlYXR1cmUgcGFyaXR5IHdpdGggQ2xvdWRGb3JtYXRpb24uIFRoaXMgaXMgYWNjb21wbGlzaGVkIGJ5IHNjcmFwaW5nIHRoZSBwdWJsaWMgZG9jdW1lbnRhdGlvbiBhbmQgdXNpbmcgdGhhdCB0byBidWlsZCB0aGUgZGF0YSBtb2RlbC4gVGhlIHNjcmFwZXIgYW5kIGpzb24gZGF0YSBtb2RlbCBhcmUgaW4gdGhlIGNmbi1kb2MtanNvbi1zdHVicyBwcm9qZWN0LiBNYXJrZG93biBkb2N1bWVudGF0aW9uIGZvciB0aGUgZGF0YSBtb2RlbCBpcyBhdmFpbGFibGUgYXQgZG9jLm1kLlxuICogXG4gKiBXYXJuaW5nOiBUaGUgQVBJIGZvciB3b2xrZW5rcmF0emVyIGlzIG5vdCBzdGFibGUhIFRoZXJlIHdlcmUgbWFueSBjaGFuZ2VzIGJldHdlZW4gdGhlIDAuNi4wIGFuZCAwLjcuMCByZWxlYXNlcy4gVGhlIEFQSSB3aWxsIGNvbnRpbnVlIHRvIHVuc3RhYmxlIHVudGlsIHRoZSAxLjAgcmVsZWFzZS4gSWYgeW91IHdhbnQgdG8gdXNlIHdvbGtlbmtyYXR6ZXIgbWFrZSBzdXJlIHlvdSBsb2NrIHRoZSB2ZXJzaW9uIHlvdSBhcmUgdXNpbmcgaW4geW91ciBwYWNrYWdlLmpzb24gc28gdGhhdCB5b3VyIGNvZGUgZG9lc24ndCBicmVhay5cbiAqIFxuICogV29sa2Vua3JhdHplcidzIEFQSSBpcyBkZXNpZ25lZCBhcm91bmQgaW1tdXRhYmxlIFRlbXBsYXRlIG9iamVjdHMsIGFuZCBhY3Rpb24gZnVuY3Rpb25zIHRoYXQgdGFrZSBhbiBleGlzdGluZyBUZW1wbGF0ZSBvYmplY3QgYW5kIHJldHVybiBhIG5ldyBvbmUsIHdpdGhvdXQgbXV0YXRpbmcgdGhlIGV4aXN0aW5nIG9uZS4gVGhpcyBhbGxvd3MgZm9yIHRlY2huaXF1ZXMgc3VjaCBhcyBtZXRob2QgY2hhaW5pbmc6XG4gKiBcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHsgVGVtcGxhdGUsIE91dHB1dCwgUzMsIFJlZiB9ID0gcmVxdWlyZSgnd29sa2Vua3JhdHplcicpO1xuICogXG4gKiBsZXQgdCA9IFRlbXBsYXRlKClcbiAqIC5hZGQoUzMuQnVja2V0KCdCdWNrZXQnKSlcbiAqIC5hZGQoT3V0cHV0KCdCdWNrZXROYW1lJywgeyBWYWx1ZTogUmVmKCdCdWNrZXQnKSB9KSk7XG4gKiBcbiAqIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHQuYnVpbGQoKSwgbnVsbCwgMikpO1xuICogYGBgXG4gKiBcbiAqIFJlc3VsdHMgaW46XG4gKiBgYGBqc29uXG4gKiB7XG4gIFwiQVdTVGVtcGxhdGVGb3JtYXRWZXJzaW9uXCI6IFwiMjAxMC0wOS0wOVwiLFxuICBcIlJlc291cmNlc1wiOiB7XG4gICAgXCJCdWNrZXRcIjoge1xuICAgICAgXCJUeXBlXCI6IFwiQVdTOjpTMzo6QnVja2V0XCIsXG4gICAgICBcIlByb3BlcnRpZXNcIjoge31cbiAgICB9XG4gIH0sXG4gIFwiT3V0cHV0c1wiOiB7XG4gICAgXCJCdWNrZXROYW1lXCI6IHtcbiAgICAgIFwiVmFsdWVcIjoge1xuICAgICAgICBcIlJlZlwiOiBcIkJ1Y2tldFwiXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5gYGBcblxuIFdoZW4gYWRkaW5nIHJlc291cmNlcyB0byB0aGUgdGVtcGxhdGUsIHlvdSBjYW4gb3B0aW9uYWxseSBoYXZlIGFuIE91dHB1dCBibG9jayBhbmQgKHN0cmluZykgUGFyYW1ldGVycyBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgaW4gb25lIGNhbGw6XG5cbiBgYGBqYXZhc2NyaXB0XG5jb25zdCB7IFRlbXBsYXRlLCBTMyB9ID0gcmVxdWlyZSgnd29sa2Vua3JhdHplcicpO1xuXG5sZXQgdCA9IFRlbXBsYXRlKCkuYWRkKFMzLkJ1Y2tldCgnQnVja2V0JyksIHtcbiAgT3V0cHV0OiB0cnVlLFxuICBQYXJhbWV0ZXJzOiBbJ0J1Y2tldE5hbWUnXVxufSk7XG5cbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHQuYnVpbGQoKSwgbnVsbCwgMikpO1xuIGBgYFxuXG5SZXN1bHQ6XG5gYGBqc29uXG57XG4gICAgXCJBV1NUZW1wbGF0ZUZvcm1hdFZlcnNpb25cIjogXCIyMDEwLTA5LTA5XCIsXG4gICAgXCJSZXNvdXJjZXNcIjoge1xuICAgICAgICBcIkJ1Y2tldFwiOiB7XG4gICAgICAgICAgICBcIlR5cGVcIjogXCJBV1M6OlMzOjpCdWNrZXRcIixcbiAgICAgICAgICAgIFwiUHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJCdWNrZXROYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJSZWZcIjogXCJCdWNrZXRTM0J1Y2tldFBhcmFtXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiUGFyYW1ldGVyc1wiOiB7XG4gICAgICAgIFwiQnVja2V0UzNCdWNrZXRQYXJhbVwiOiB7XG4gICAgICAgICAgICBcIlR5cGVcIjogXCJTdHJpbmdcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIk91dHB1dHNcIjoge1xuICAgICAgICBcIkJ1Y2tldFMzQnVja2V0T3V0cHV0XCI6IHtcbiAgICAgICAgICAgIFwiVmFsdWVcIjoge1xuICAgICAgICAgICAgICAgIFwiUmVmXCI6IFwiQnVja2V0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkV4cG9ydFwiOiB7XG4gICAgICAgICAgICAgICAgXCJOYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJGbjo6U3ViXCI6IFwiJHtBV1M6OlN0YWNrTmFtZX0tUzMtQnVja2V0LUJ1Y2tldFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuYGBgXG5cbiAqL1xuLyoqIFxuICogXG4gKiBcbiAqIFdvbGtlbmtyYXR6ZXIgd2lsbCBhbHNvIGRvIChydWRpbWVudGFyeSkgdGVtcGxhdGUgdHlwZSB2YWxpZGF0aW9uLCB0aHJvd2luZyBhbiBlcnJvciBpZiBhbiBpbmNvcnJlY3QgdmFsdWUgaXMgcHJvdmlkZWQuXG4gKiBcbiAqIGBcbiAqL1xuIl19