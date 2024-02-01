const sinon = require('sinon');
const { expect } = require('chai');
const payment = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call utils once', () => {
    const spying = sinon.stub(Utils, 'calculateNumber').returns(10);
    const log = sinon.spy(console, 'log');
    payment(100, 20);
    expect(spying.called).to.be.true;
    expect(log.calledWith('The total is: 10')).to.be.true;
    spying.restore();
    log.restore();
  });
});
