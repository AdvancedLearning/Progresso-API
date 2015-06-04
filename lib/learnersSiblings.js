/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function(token, learnerid, callback) {
  var path = '/v2/learnerSiblings?learnerId=' + learnerid;

  _utils.get(path, token, callback);
};