const http = require('http');
const url = require('url'); // built in node.js module
const routes = require('./requestRoutes');
const request = require('./requests');

const port = 3000;
const ip = '127.0.0.1' || 'localhost';

const router = {
  '/': routes.static, //root page usually pages like html or css

};

const server = http.createServer((request, response) => {
  console.log(`serving request type ${request.method} for url ${request.url}`);

  const route = router[url.parse(req.url).pathname];

  route ? route[request.method](request, response) : requests.sendResponse(response, '', 404);
});
console.log(`listening on port ${port}`);
server.listen(port, ip);