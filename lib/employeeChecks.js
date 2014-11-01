/* jslint node: true, async: true */
// lib/employeeChecks.js

var _utils = require('./_utils');

// get
module.exports.get = function(token, employeeid, callback) {
  var path = '/v2/EmployeesCotacts/' + employeeid;

  _utils.get(path, token, callback);
};
