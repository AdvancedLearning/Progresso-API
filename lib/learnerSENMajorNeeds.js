/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function (token, status, callback) {
  var path = '/v2/learnerSENMajorNeeds?status=' + status;
  _utils.get(path, token, callback);
};
  
module.exports.post = function (token, body, callback) {
  var path = '/v2/learnerSENMajorNeeds' + body;
  _utils.post(path, token, callback);
};