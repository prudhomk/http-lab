const fs = require('fs');

const net = require('net');
const parseRequest = require('./lib/utils/parseRequest');
const createResponse = require('./lib/utils/createResponse');
const fsPromises = fs.promises;

const promises = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET' && request.path === '/index.html') {
      fsPromises.readFile('./public/index.html')
        .then((contents) => fsPromises.writeFile('./public/index.html', contents)
          .then(() => fsPromises.readFile('./public/index.html', 'utf8')))
        .then((body) => socket.end(createResponse({ body })));
        
    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});
    
module.exports = promises;

