/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function(token, roomId, callback) {
  var path = '/v2/rooms/?roomId=' + roomId;

  _utils.get(path, token, callback);
};