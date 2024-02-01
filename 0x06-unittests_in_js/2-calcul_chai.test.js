const {expect} = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('caulateNumber', () => {
  it('should sum and round numbers', () => {
    expect(calculateNumber('SUM', 1.3, 2.3)).to.equal(3);
  });

  it('should sum and round negative numbers', () => {
    expect(calculateNumber('SUM', -1, -2.3)).to.equal(-3);
  });

  it('should subtract and round numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.3, 2.3)).to.equal(-1);
  });

  it('should subtract and round negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -1, -2.3)).to.equal(1);
  });

  it('should round and divide numbers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should sum zeros', () => {
    expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
  });
});
