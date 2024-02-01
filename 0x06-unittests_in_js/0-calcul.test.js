const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('caulateNumber', () => {
  it('should sum and round numbers', () => {
    assert.equal(calculateNumber(1, 2), 3);
  });

  it('should sum and round numbers > .5', () => {
    assert.equal(calculateNumber(1.3, 2.3), 3);
  });

  it('should sum and round numbers < .5', () => {
    assert.equal(calculateNumber(1.2, 2), 3);
  });

  it('should sum zeros', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });

  it('should sum and round negative numbers < .5', () => {
    assert.equal(calculateNumber(-1, -2.3), -3);
  });

  it('should sum and round negative numbers > .5', () => {
    assert.equal(calculateNumber(-1.4, -2.3), -3);
  });
});
