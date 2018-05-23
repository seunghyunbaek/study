const http = require('http');

http.createServer((request, response)=> {
  console.log('server on');
  request.on('error', (err) => {
    console.error(err);
    response.status = 400;
    response.end();
  });
  request.on('error', (err) => {
    conosle.error(err);
  });
  if (request.method === 'POST' && request.url === '/halexa') {
    console.log(request.body.data);
  } else {
    response.status = 404;
    response.end();
  }
}).listen(8080);
