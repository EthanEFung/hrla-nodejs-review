const fs = require('fs'); // built in node.js module

module.exports = {

  static: {
    GET: (request, response) => {
      const path = request.url === '/' ? '/index.html' : req.url;
      fs.readFile(`${__dirname}/../client/static${path}`, 'utf8', (err, content) => {
        if (err){ 
          throw err;
        } else {
          response.end(content);
        }
      });
    },
  },
};