/* jslint node: true, mocha: true */
// test/employeeContract.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var learnerSENMajorNeeds = require('../lib/learnerSENMajorNeeds');
var authinfo;

describe('learnerSENMajorNeeds', function () {
  this.timeout(30000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve a learner SEN Major needs details', function (done) {
    learnerSENMajorNeeds.get(authinfo.access_token, config.learnerSENMajorNeeds.status, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
  
  it('should create a learner SEN Major needs', function (done) {
    learnerSENMajorNeeds.post(authinfo.access_token, function (error, res, body) {
      body = {
        learnerCode:      '2013-00001',
        learnerId:        '0001',
        majorNeeds:   {
          majorNeedId:          '0',
          majorNeedCode:        'SLD',
          majorNeedDescription: 'Severe Learning Difficulty ',
          ranking:            '1'
        }
      };
      res.statusCode.should.eql(200);
      done();
    });
  });
  
  
  
  
  
    
});