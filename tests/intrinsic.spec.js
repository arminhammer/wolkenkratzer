const { Ref, FnGetAtt, FnEquals } = require('../dist/index');

describe('Intrinsic', () => {
  test('Can create a Ref', () => {
    const r = Ref('Bucket');
    expect(r).toEqual({
      kind: 'Ref',
      Ref: 'Bucket'
    });
  });

  test('Can create an FnGetAtt', () => {
    const r = FnGetAtt('Function', 'ARN');
    expect(r).toEqual({
      kind: 'FnGetAtt',
      'Fn::GetAtt': ['Function', 'ARN']
    });
  });

  test('Can create an FnEquals', () => {
    const r = FnEquals('Function', 'ARN');
    expect(r).toEqual({ kind: 'FnEquals', 'Fn::Equals': ['Function', 'ARN'] });
  });
});
