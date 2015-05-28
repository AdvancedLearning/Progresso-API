/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function(token, since, status, responsibility, priority, callback) {
  var path = '/v2/learnerContacts?' + since + '&status=' + status + '&responsibility=' +responsibility + '&priority=' + priority;

  _utils.get(path, token, callback);
};