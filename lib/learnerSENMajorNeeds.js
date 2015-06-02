/* jslint node: true, async: true */
// lib/contacts.js

var _utils = require('./_utils');
var data = {
    'learnerCode':      '2013-00001',
    'learnerId':        '0001',
    'majorNeeds':   {
      'majorNeedId':          '0',
      'majorNeedCode':        'SLD',
      'majorNeedDescription': 'Severe Learning Difficulty ',
      'ranking':            '1'
    }
  };

module.exports.get = function (token, status, callback) {
  var path = '/v2/learnerSENMajorNeeds?status=' + status;
  _utils.get(path, token, callback);
};
  
module.exports.post = function (token, data, callback) {
  var path = '/v2/learnerSENMajorNeeds' + data;
  console.log(callback);
  console.log(data);
  _utils.post(path, token, callback);
};