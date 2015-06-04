/* jslint node: true, async: true */
// lib/groups.js

var _utils = require('./_utils');

module.exports.get = function(token, groupId, since, groupStartDate, groupEndDate, callback) {
  var path = '/v2/groupAssociation/?groupId=' + groupId + '&since=' + since + '&groupStartDate=' + groupStartDate + '&groupEndDate=' + groupEndDate;

  _utils.get(path, token, callback);
};