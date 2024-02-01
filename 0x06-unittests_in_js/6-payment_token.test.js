const { expect } = require('chai');
const payment = require('./6-payment_token');

describe('sendPaymentTokenFromApi', () => {
  it('should call console.log once', (done) => {
    payment(true).then((response) => {
      expect(response.data).to.equal('Successful response from the API');
      done();
    });
  });
});
