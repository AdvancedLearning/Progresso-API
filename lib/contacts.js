/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

// get contact
module.exports.get = function(token, contactid, callback) {
  var path = '/v2/Contacts';
  if (contactid) path = '/v2/Contacts/' + contactid;

  _utils.get(path, token, callback);
};
