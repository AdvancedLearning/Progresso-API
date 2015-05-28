/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var employees = require('../lib/LearnerContacts');
var authinfo;
var x;

describe('LearnerContacts', function () {
  this.timeout(30000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve a contact associated to a learner', function (done) {
    employees.get(authinfo.access_token, config.learnerContacts.since, config.learnerContacts.status, config.learnerContacts.responsibility, config.learnerContacts.priority, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
  

  
  });