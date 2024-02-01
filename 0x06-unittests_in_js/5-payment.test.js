const sinon = require('sinon');
const { expect } = require('chai');
const payment = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let log;
  beforeEach('setup', () => {
    log = sinon.spy(console, 'log');
  });
  afterEach('cleanup', () => {
    log.restore();
  });
  it('should call console.log once', () => {
    payment(100, 20);
    expect(log.calledOnce).to.be.true;
    expect(log.withArgs('The total is: 120').calledOnce).to.be.true;
  });
  it('repeat of the previous test', () => {
    payment(10, 10);
    expect(log.calledOnce).to.be.true;
    expect(log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
