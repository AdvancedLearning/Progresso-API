/* jslint node: true, async: true */
// lib/groups.js

var _utils = require('./_utils');

module.exports.get = function(token, iD, AcYearId, callback) {
  var path = '/v2/termBreaks/?AcYearId=' + AcYearId + '&id=' + iD;

  _utils.get(path, token, callback);
};