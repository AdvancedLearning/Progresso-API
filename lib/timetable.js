/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function(token, callback) {
  var path = '/v2/TTSource';

  _utils.get(path, token, callback);
};