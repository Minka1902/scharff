const fetchIntercept = require('fetch-intercept');
const fs = require('fs');
const { removeBaseUrl } = require('./constants/functions');

module.exports.scharff = fetchIntercept.register({
  request: function (url, config) {
    let tempUrl = url;
    tempUrl = removeBaseUrl(tempUrl);
    let tempReq = { url };
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
  //   // Modify the response object
  //   return response;
  // },

  // responseError: function (error) {
  //   // Handle an fetch error
  //   return Promise.reject(error);
  // }
});
