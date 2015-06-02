/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var employees = require('../lib/LearnerHealth');
var authinfo;
var x;

describe('LearnerHealth', function () {
  this.timeout(30000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve a learner health details', function (done) {
    employees.get(authinfo.access_token, config.learnerHealth.since, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
  

  
  });