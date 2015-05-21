/* jslint node: true, async: true */
// lib/employeeContacts.js

var _utils = require('./_utils');

// get
module.exports.get = function(token, status, callback) {
  var path = '/v2/employeeContacts?status=' + status;

  _utils.get(path, token, callback);
};
module.exports.post = function(token, callback) {
  var path = '/v2/employeeContacts/';

  _utils.get(path, token, callback);
};