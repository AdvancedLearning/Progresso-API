/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var lib = require('../lib/site');
var authinfo;

describe('Sites', function () {
  this.timeout(30000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve sites', function (done) {
    lib.get(authinfo.access_token, config.site.siteId, function (error, res, body) {
      var j = JSON.parse(res);
      console.log(j);
      res.statusCode.should.eql(200);
      done();
    });
  });
  
});