const { removeBaseUrl } = require('./constants/functions');
const fetchIntercept = require('fetch-intercept');
const fs = require('fs');
const os = require('os');

module.exports.unregister = fetchIntercept.register({
  request: function (url, config) {
    const interfaces = os.networkInterfaces();
    let addresses = [];
    let tempUrl = url;
    for (let i in interfaces) {
      for (var i2 in interfaces[i]) {
        var address = interfaces[i][i2];
        if (address.family === 'IPv4' && !address.internal) {
          addresses.push(address.address);
        }
      }
    }
    let tempReq = { type: 'Outgoing_Request', url, ip: addresses[0] };
    tempReq.date = { date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() };
    tempUrl = removeBaseUrl(tempUrl);
    if (tempUrl !== url) {
      tempReq.originUrl = tempUrl;
    }
    if (config === undefined) {
      tempReq.method = 'GET';
    } else {
      if (config) {
        if (config.method) {
          tempReq.method = config.method;
        }
        if (config.headers) {
          tempReq.headers = config.headers;
        }
        if (config.body) {
          tempReq.body = JSON.parse(config.body);
        }
      }
    }

    fs.open('./outgoingRequest.log', 'a', function (e, id) {
      fs.write(id, JSON.stringify(tempReq) + "\n", null, 'utf8', function () {
        fs.close(id, function () {
        });
      });
    });

    return [url, config];
  },

  // requestError: function (error) {
  //   // Called when an error occurred during another 'request' interceptor call
  //   return Promise.reject(error);
  // },

  // response: function (response) {
  //   let tempRes = { incomingTime: new Date() };
  //   if (response) {
  //     if (response.status) {
  //       tempRes.status = { status: response.status, statusText: response.statusText };
  //     }
  //     if (response.request) {
  //       tempRes.request = { method: response.request.method, originalUrl: response.request.url, mode: response.request.mode };
  //     }
  //     if (response.type) {
  //       tempRes.type = response.type;
  //     }
  //     if (response.redirected) {
  //       tempRes.redirected = response.redirected;
  //     }
  //     if (response.url) {
  //       tempRes.url = response.url;
  //     }
  //     if (response.ok === true) {
  //       tempRes.isActive = true;
  //     } else {
  //       tempRes.isActive = false;
  //     }
  //   }
  //   fs.open('./incomingResponse.log', 'a', function (e, id) {
  //     fs.write(id, JSON.stringify(tempRes) + "\n", null, 'utf8', function () {
  //       fs.close(id, function () {
  //       });
  //     });
  //   });
  //   return response;
  // },

  // responseError: function (error) {
  //   // Handle an fetch error
  //   return Promise.reject(error);
  // }
});
