/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function (token, status, callback) {
  var path = '/v2/learnerSENProvisions?status=' + status;

  _utils.get(path, token, callback);
};
