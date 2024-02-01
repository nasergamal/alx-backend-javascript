const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('caulateNumber', () => {
  it('should round and sum numbers', () => {
    assert.equal(calculateNumber('SUM', 1.3, 2.3), 3);
  });

  it('should round and sum negative numbers', () => {
    assert.equal(calculateNumber('SUM', -1, -2.3), -3);
  });

  it('should round and subtract numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.3, 2.3), -1);
  });

  it('should round subtract negative numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -1, -2.3), 1);
  });

  it('should round and divide numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should divide by zers', () => {
    assert.equal(calculateNumber('DIVIDE', 2, 0), 'Error');
  });

});
