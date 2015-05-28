/* jslint node: true, async: true */
// lib/employees.js

var _utils = require('./_utils');

module.exports.all = function(token, callback) {
  var path = '/v2/Employees';

  _utils.get(path, token, callback);
};

module.exports.single = function(token, employeeid, callback) {
  var path = '/v2/employees';
  if (employeeid) path = '/v2/employees/' + employeeid;

  _utils.get(path, token, callback);
};

module.exports.collection = function(token, callback) {
  var path = '/v2/employees?status=active';

  _utils.get(path, token, callback);
};

module.exports.post = function(token, data, callback) {
  var path = 'v2/employees' + data;

  _utils.get(path, token, callback);
};