/* jslint node: true, mocha: true */
// test/test-token.js

require('../coverage/blanket');
var should = require('should');
var config = require('../config.js');
var apitoken = require('../lib/token');

describe('token', function () {
  this.timeout(10000);

  it('should issue a token for a valid username and password', function(done){
    apitoken.get(config.target, config.username, config.password, function(err, res, body){
      res.statusCode.should.eql(200);

      should.exists(body.token_type);
      should.exists(body.expires_in);
      should.exist(body.access_token);
      done();
    });
  });

  it('should not issue a token when send a bad password', function(done) {
    apitoken.get(config.target, config.username, 'BadPassword', function(err, res, body){
      res.statusCode.should.eql(400);

      var msg = JSON.parse(body);
      msg.error.should.eql('invalid_grant');
      msg.error_description.should.eql('The user name or password is invalid.');
      done();
    });
  });

});


