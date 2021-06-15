const request = require('supertest');
const app = require('../lib/app.js');
const createResponse = require('../lib/utils/createResponse');


describe('app routes', () => {
  it.only('receives all from / using GET', async() => {
    const content = {
      body: 'hi',
      status: '200 OK',
      contentType: 'text/plain'
    };

    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it.only('creates a response from /echo using POST', async() => {

    const res = await request(app);

    expect(res.text).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 0
Content-Type: text/plain\r
\r`);
  });
});
