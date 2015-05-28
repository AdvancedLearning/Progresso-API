/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function(token, since, callback) {
  var path = '/v2/learnerHealth?since=' + since;

  _utils.get(path, token, callback);
};
