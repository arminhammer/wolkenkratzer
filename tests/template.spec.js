const { Template, EC2 } = require('../src/index');

describe('Template', () => {
  test('Can turn a Template to JSON', () => {
    const t = Template();
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can take an existing Template as a parameter for .import()', () => {
    const s3static = require('../tests/templates/s3static.json');
    const t = Template().import(s3static);
    let res = t.build();
    expect(res).toEqual(s3static);
  });

  test("Don't generate empty properties", () => {
    const t = Template().add(
      EC2.SecurityGroup('MyGroup', {
        GroupDescription: 'Test Group',
        SecurityGroupEgress: []
      })
    );

    expect(t.build()).toEqual({
      Resources: {
        MyGroup: {
          Properties: {
            GroupDescription: 'Test Group'
          },
          Type: 'AWS::EC2::SecurityGroup'
        }
      },
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
