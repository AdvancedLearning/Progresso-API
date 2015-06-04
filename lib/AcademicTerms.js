/* jslint node: true, async: true */
// lib/groups.js

var _utils = require('./_utils');

module.exports.get = function(token, Id, AcYearId, callback) {
  var path = '/v2/academicTerms/?id=' + Id + '&AcYearId=' + AcYearId;

  _utils.get(path, token, callback);
};