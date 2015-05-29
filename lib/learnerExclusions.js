/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');

module.exports.get = function (token, startdate, enddate, callback) {
  var path = '/v2/learnerExclusions?startDate=' + startdate + '&endDate=' + enddate;

  _utils.get(path, token, callback);
};
