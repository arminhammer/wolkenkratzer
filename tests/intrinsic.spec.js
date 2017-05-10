const { Ref, FnGetAtt, FnEquals } = require('../dist/index');

describe('Intrinsic', () => {
  test('Can create a Ref', () => {
    const r = Ref('Bucket');
    expect(r).toEqual({
      Ref: 'Bucket'
    });
  });

  test('Can create an FnGetAtt', () => {
    const r = FnGetAtt('Function', 'ARN');
    expect(r).toEqual({
      'Fn::GetAtt': ['Function', 'ARN']
    });
  });

  test('Can create an FnEquals', () => {
    const r = FnEquals('Function', 'ARN');
    expect(r).toEqual({ 'Fn::Equals': ['Function', 'ARN'] });
  });
});
