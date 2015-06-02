/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var employees = require('../lib/employeeContacts');
var authinfo;

describe('Learners', function () {
  this.timeout(30000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve a collection of active Learners', function (done) {
    employees.get(authinfo.access_token, 'active', function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
  
  it('should create contact', function (done) {
    employees.get(authinfo.access_token, config.contacts.data, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
});