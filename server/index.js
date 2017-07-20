const http = require('http');
const routes = require('./requestRoutes');
const port = 3000;
const ip = '127.0.0.1' || 'localhost';

const router = {
  '/': routes.static, //root page usually pages like html or css

};

const server = http.createServer((request, response) => {
  console.log(`serving request type ${request.method} for url ${request.url}`);
});
console.log(`listening on port ${port}`);
server.listen(port, ip);