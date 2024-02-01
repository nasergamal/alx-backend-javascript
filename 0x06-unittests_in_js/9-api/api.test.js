const { expect } = require('chai');
const http = require('http');
const { describe, it } = require('mocha');

describe('express', () => {
  it('GET / status_code', (done) => {
    http.get('http://127.0.0.1:7865/', (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('GET / content', (done) => {
    http.get('http://127.0.0.1:7865/', (res) => {
      res.setEncoding('utf-8');
      res.on('data', (data) => {
        expect(data).to.equal('Welcome to the payment system');
      });
      done();
    });
  });

  it('GET /cart/id status_code', (done) => {
    http.get('http://127.0.0.1:7865/cart/25', (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('GET /cart/id wrong status_code', (done) => {
    http.get('http://127.0.0.1:7865/cart/star', (res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
