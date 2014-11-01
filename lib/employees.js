/* jslint node: true, async: true */
// lib/employees.js

var _utils = require('./_utils');

module.exports.all = function(token, callback) {
  var path = '/v2/Employees';

  _utils.get(path, token, callback);
};

module.exports.single = function(token, employeeid, callback) {
  var path = '/v2/Employees';
  if (employeeid) path = '/v2/Employees/' + employeeid;

  _utils.get(path, token, callback);
};
