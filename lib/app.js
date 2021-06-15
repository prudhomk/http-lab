const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET' && request.path === '/') {
      socket.write(createResponse({ body: 'hi' }));
  
    } else if(request.method === 'POST' && request.path === '/echo') {
      socket.write(createResponse({ body: 'Boo', contentType: 'text/plain' }));
    
    } else if(request.method === 'GET' && request.path === '/red') {
      socket.write(createResponse({ body: '<h1>red</h1>' }));
    
    } else if(request.method === 'GET' && request.path === '/green') {
      socket.write(createResponse({ body: '<h1>green</h1>' }));
    
    } else if(request.method === 'GET' && request.path === '/blue') {
      socket.write(createResponse({ body: '<h1>blue</h1>' }));
      
    } else { 
      socket.write(createResponse(request));
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});
module.exports = app;
