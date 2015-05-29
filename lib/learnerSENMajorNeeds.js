/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function (token, status, callback) {
  var path = '/v2/learnerSENMajorNeeds?status=' + status;
  _utils.get(path, token, callback);
};
  
module.exports.post = function (token, data, callback) {
  var path = '/v2/learnerSENMajorNeeds' + data;
  _utils.get(path, token, callback);
};
