const fs = require('fs');

module.exports.log = (req) => {
  fs.readFile('request.log', 'utf-8', function (err, data) {
    if (err) throw err;

    let tempRequest = createTempRequest(req);

    const newData = `${data}\n${tempRequest}`;

    fs.writeFile('request.log', newData, 'utf-8', function (err) {
      if (err) throw err;
    });
  });
};

const createTempRequest = (req) => {
  if (req.hostname) {
    tempRequest.hostname = req.hostname;
  }
  if (req.method) {
    tempRequest.method = req.method;
  }
  if (req.originalUrl) {
    tempRequest.originalUrl = req.originalUrl;
  }
  if (req.ip) {
    tempRequest.ip = req.ip;
  }
  if (req.params !== {}) {
    tempRequest.params = req.params;
  }
  if (req.query !== {}) {
    tempRequest.query = req.query;
  }
  if (req.headers.length > 0) {
    for (let i = 0; i < req.rawHeaders.length; i += 2) {
      tempRequest.headers[req.rawHeaders[i]] = req.rawHeaders[i + 1];
    }
  }
  if (req.route) {
    if (req.route.path) {
      tempRequest.route.path = req.route.path;
    }
    if (req.route.stack.length > 0) {
      tempRequest.route.stackLength = req.route.stack.length;
    }
  }
  if (req.length > 0) {
    tempRequest.length = req.length;
  }
  if (req.body !== {}) {
    tempRequest.body = req.body;
  }
};
