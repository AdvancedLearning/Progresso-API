/* jslint node: true, mocha: true */
// test/employeeContract.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var employees = require('../lib/employeeContractsRoles');
var authinfo;

describe('employeeContractsRoles', function () {
    this.timeout(30000);

    before(function(done){
        apitoken.get(config.target, config.username, config.password, function(error, res, body){
            authinfo = body;
            done();
        });
    });
    
    it('should roles for employees contracts',function(done) {
    employees.post(authinfo.access_token, config.employeeContractsRoles.data, function(error, res, body){
            res.statusCode.should.eql(200);
            done();
        });
    });
    
});