/* jslint node: true, async: true */
// lib/groups.js

var _utils = require('./_utils');

module.exports.get = function(token, AcYearId, callback) {
  var path = '/v2/courseYear/?AcYearId=' + AcYearId;

  _utils.get(path, token, callback);
};