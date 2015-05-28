/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var employees = require('../lib/Learners');
var authinfo;
var x;

describe('Learners', function () {
  this.timeout(30000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve a collection of active employee contacts', function (done) {
    employees.collection(authinfo.access_token, config.learners.learnerId, config.learners.status, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
  
  it('should retrieve a learner record', function (done) {
    employees.single(authinfo.access_token, config.learners.learnerId, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
  
  it('should create a learner record', function (done) {
    employees.post(authinfo.access_token, config.learnerbody.data, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
  
  });