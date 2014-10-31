/* jslint node: true, mocha: true */
// test/test-token.js

var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var contacts = require('../lib/contacts');
var authinfo;

describe('contacts', function() {
  this.timeout(5000);

  before(function(done){
    apitoken.get(config.target, config.username, config.password, function(error, res, body){
      authinfo = body;
      done();
    });
  });

//  it('should retrieve a list of all contacts',function(done) {
//    contacts.get(config.target, authinfo.access_token, undefined, function(error, res, body){
//      res.statusCode.should.eql(200);
//      done();
//    });
//  });

  it('should retrieve a single contact', function(done) {
    contacts.get(config.target, authinfo.access_token, config.contacts.contactId, function(err, res, body){
      res.statusCode.should.eql(200);
      done();
    });
  });
});