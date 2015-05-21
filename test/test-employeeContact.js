/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var employees = require('../lib/employeeContacts');
var authinfo;

describe('employeeContact', function () {
    this.timeout(20000);

    before(function(done){
        apitoken.get(config.target, config.username, config.password, function(error, res, body){
            authinfo = body;
            done();
        });
    });
    
    it('should retrieve a collection of active employee contacts',function(done) {
    employees.get(authinfo.access_token, 'active', function(error, res, body){
            res.statusCode.should.eql(200);
            done();
        });
    });
    
});