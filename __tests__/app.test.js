const request = require('supertest');
const app = require('../lib/app.js');



describe('app routes', () => {
  it('receives all from / using GET', async() => {
    
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it('creates a response from /echo using POST', async() => {

    const res = await request(app)
      .post('/echo')
      .send('echo');
      
    expect(res.text).toEqual('echo');
  });

  it('receives red from /red via GET', async() => {
  
    const res = await request(app)
      .get('/red');

    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('receives green from /green via GET', async() => {

    const res = await request(app)
      .get('/green');

    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('receives blue from /blue via GET', async() => {

    const res = await request(app)
      .get('/blue');

    expect(res.text).toEqual('<h1>blue</h1>');
  });
});
