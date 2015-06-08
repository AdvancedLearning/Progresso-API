/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function(token, siteId, callback) {
  var path = '/v2/site/?siteId=' + siteId;

  _utils.get(path, token, callback);
};