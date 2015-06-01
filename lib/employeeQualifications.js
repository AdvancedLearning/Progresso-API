/* jslint node: true, async: true */
// lib/employeeQualifications.js

var _utils = require('./_utils');

// get
module.exports.get = function (token, employeeId, callback) {
  var path = '/v2/employeeQualifications?employeeId=' + employeeId;

  _utils.get(path, token, callback);
};

module.exports.post = function (token, data, callback) {
  var path = '/v2/employeeQualifications/' + data;
  _utils.get(path, token, callback);
};