/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

// get
module.exports.get = function(token, learnerid, callback) {
  var path = '/v2/Learners';
  if (learnerid) path = '/v2/Learners/' + learnerid;

  _utils.get(path, token, callback);
};
