/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

// all
module.exports.all = function(token, contactid, callback) {
  var path = '/v2/Contacts';
  _utils.get(path, token, callback);
};

// get
module.exports.single = function(token, contactid, callback) {
  var path = '/v2/Contacts/' + contactid;
  _utils.get(path, token, callback);
};

module.exports.post = function(token, callback) {
  var path = '/v2/Contacts/' + data;
  _utils.get(path, token, callback);
};
