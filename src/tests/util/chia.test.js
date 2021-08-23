const kiwi = require('../../util/kiwi');

describe('kiwi', () => {
  it('converts number mojo to kiwi', () => {
    const result = kiwi.mojo_to_kiwi(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to kiwi', () => {
    const result = kiwi.mojo_to_kiwi('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to kiwi string', () => {
    const result = kiwi.mojo_to_kiwi_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to kiwi string', () => {
    const result = kiwi.mojo_to_kiwi_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number kiwi to mojo', () => {
    const result = kiwi.kiwi_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string kiwi to mojo', () => {
    const result = kiwi.kiwi_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = kiwi.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = kiwi.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = kiwi.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = kiwi.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = kiwi.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = kiwi.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
