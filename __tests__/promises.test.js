const request = require('supertest');
const promises = require('../promises.js');

describe('promise route', () => {
  it.only('reads the contents of the public folder via a promimse', async() => {
    const res = await request(promises)
      .get('/index.html');

    expect(res.text).toEqual('<h1>HOORAY YOU SOLVED THE LAB CONGRATULATIONS!!!!</h1>');
  });
});
