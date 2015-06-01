/* jslint node: true, async: true */
// lib/employeeContracts.js

var _utils = require('./_utils');

// get
module.exports.post = function(token, data, callback) {
  var path = '/v2/employeeContractRoles' + data;

  _utils.get(path, token, callback);
};