/* jslint node: true, async: true */
// lib/employeeContracts.js

var _utils = require('./_utils');

// get
module.exports.get = function(token, employeeId, callback) {
  var path = '/v2/employeeContacts?employee=' + employeeId;

  _utils.get(path, token, callback);
};