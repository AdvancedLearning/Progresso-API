/* jslint node: true, async: true */
// lib/groups.js

var _utils = require('./_utils');

module.exports.get = function(token, groupStartDate, groupEndDate, type, since, callback) {
  var path = '/v2/groups?groupStartDate=' + groupStartDate + '&groupEndDate=' + groupEndDate + '&type=' + type + '&since=' + since;

  _utils.get(path, token, callback);
};