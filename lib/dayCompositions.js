/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function(token, SourceId, callback) {
  var path = '/v2/dayCompositions/?TTSourceId=' + SourceId;

  _utils.get(path, token, callback);
};