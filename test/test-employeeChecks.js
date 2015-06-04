/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var employees = require('../lib/employeeChecks');
var authinfo;

describe('employeeChecks', function () {
  this.timeout(20000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve a collection of active employee checks', function (done) {
    employees.get(authinfo.access_token, config.employeeChecks.status, config.employees.employeeId, function (error, res, body) {
      res.statusCode.should.eql(200);
      console.log('Status in config =' + config.employeeChecks.status);
      done(body);
    });
  });

});