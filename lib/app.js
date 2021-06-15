const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET' && request.path === '/') {
      socket.write(createResponse({ body: 'hi', contentType: 'text/plain' }));
  
    } else if(request.method === 'POST' && request.path === '/echo') {
      socket.write(createResponse({ contentType: 'text/plain' }));
    } else { 
      socket.write(createResponse(request));
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});
module.exports = app;
