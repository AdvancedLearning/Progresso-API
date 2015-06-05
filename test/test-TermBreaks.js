/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var lib = require('../lib/TermBreaks');
var authinfo;

describe('Term Breaks', function () {
  this.timeout(30000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve Term Breaks', function (done) {
    lib.get(authinfo.access_token, config.termBreaks.acYearId, config.termBreaks.iD, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
  
});