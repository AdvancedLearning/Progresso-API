/* jslint node: true, async: true */
// lib/employeeChecks.js

var _utils = require('./_utils');

module.exports.get = function (token, status, employeeid, callback) {
  var path = '/v2/employeeChecks?status=' + status + '&employee=' + employeeid;

  _utils.get(path, token, callback);
};