/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var employees = require('../lib/LearnerExclusions');
var authinfo;

describe('LearnerExclusions', function () {
  this.timeout(30000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve a learner exclusion details', function (done) {
    employees.get(authinfo.access_token, config.learnerExclusions.startdate, config.learnerExclusions.enddate, function (error, res, body) {
      console.warn(error);
      console.warn(res);
      res.statusCode.should.eql(200);
      done();
    });
  });
  
});