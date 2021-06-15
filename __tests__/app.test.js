const request = require('supertest');
const app = require('../lib/app.js');
const createResponse = require('../lib/utils/createResponse');


describe('app routes', () => {
  it('receives all from / using GET', async() => {
    
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it('creates a response from /echo using POST', async() => {

    const res = await request(app)
      .post('/echo');
    expect(res.text).toEqual('Boo');
  });

  it('receives red from /red via GET', async() => {
  

    const res = await request(app)
      .get('/red');

    expect(res.text).toEqual('<h1>red</h1>');
  });
});
