const sinon = require('sinon');
const { expect } = require('chai');
const payment = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call utils once', () => {
    const spying = sinon.spy(Utils, 'calculateNumber');
    payment(100, 20);
    expect(spying.called).to.be.true;
    spying.restore();
  });
});
