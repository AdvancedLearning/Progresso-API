/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var employees = require('../lib/employees');
var authinfo;

describe('employees', function () {
  this.timeout(20000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve a list of all employees', function (done) {
    employees.all(authinfo.access_token, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
    
  it('should retrieve a single employee', function (done) {
    employees.single(authinfo.access_token, config.employees.employeeId, function (err, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });

  it('should fail for an invalid employee', function (done) {
    employees.single(authinfo.access_token, '1', function (err, res, body) {
      res.statusCode.should.eql(401);
      done();
    });
  });
  
  it('should receive a collection of employees', function (done) {
    employees.collection(authinfo.access_token, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
 
  it('should create an employee', function (done) {
    employees.post(authinfo.access_token, config.employees.data, function (error, res, body) {
      console.info(res);
      res.statusCode.should.eql(200);
      done();
    });
  });
  
});