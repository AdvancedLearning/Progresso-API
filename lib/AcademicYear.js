/* jslint node: true, async: true */
// lib/groups.js

var _utils = require('./_utils');

module.exports.get = function(token, Id, callback) {
  var path = '/v2/academicYear/?id=' + Id;

  _utils.get(path, token, callback);
};