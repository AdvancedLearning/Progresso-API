/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.all = function(token, callback) {
  var path = '/v2/Learners';

  _utils.get(path, token, callback);
};

module.exports.single = function(token, learnerid, callback) {
  var path = '/v2/Learners/' + learnerid;

  _utils.get(path, token, callback);
};

