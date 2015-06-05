/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');
var lib = require('../lib/CalendarEvents');
var authinfo;

describe('Calendar Events', function () {
  this.timeout(30000);

  before(function (done) {
    apitoken.get(config.target, config.username, config.password, function (error, res, body) {
      authinfo = body;
      done();
    });
  });
    
  it('should retrieve Calendar Events', function (done) {
    lib.get(authinfo.access_token, config.calendarEvents.acYearId, config.calendarEvents.iD, function (error, res, body) {
      res.statusCode.should.eql(200);
      done();
    });
  });
  
});