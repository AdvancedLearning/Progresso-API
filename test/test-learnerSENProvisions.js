/* jslint node: true, mocha: true */
// test/employeeContract.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var employees = require('../lib/learnerSENProvisions');
var authinfo;

describe('learnerSENProvisions', function () {
    this.timeout(30000);

    before(function(done){
    apitoken.get(config.target, config.username, config.password, function (error, res, body){
            authinfo = body;
            done();
        });
    });
    
    it('should retrieve a learner SEN Provision details',function(done) {
    employees.get(authinfo.access_token, config.learnerSENProvisions.status, function (error, res, body){
            res.statusCode.should.eql(200);
            done();
        });
    });
    
});