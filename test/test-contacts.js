/* jslint node: true */
// test/test-token.js

var config = require('../config.js');
var apitoken = require('../lib/token');
var contacts = require('../lib/contacts');
var authinfo;

exports.get = {
  setUp: function(callback) {
    apitoken.get(config.target, config.username, config.password, function(error, res, body){
      authinfo = body;
      callback();
    });
  },
  allContacts: function(test) {
    contacts.get(config.target, authinfo.access_token, undefined, function(error, res, body){
      test.expect(1);
      test.ok(res.statusCode == 200, "Expecting response code of 200 not " + res.statusCode);
      test.done();
    });
  },
  singleContact: function(test) {
    contacts.get(config.target, authinfo.access_token, authinfo.userId, function(error, res, body){
      test.expect(1);
      test.ok(res.statusCode == 200, "Expecting response code of 200 not " + res.statusCode);
      test.done();
    });
  }
};
