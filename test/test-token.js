/* jslint node: true */
// test/test-token.js

var config = require('../config.js');
var apitoken = require('../lib/token');

exports.testTokenSuccess = function(test) {
  apitoken.get(config.target, config.username, config.password, function(error, res, body){
    test.expect(5);
    test.ok(res.statusCode == 200, "Expecting response code of 200 not " + res.statusCode + ". Additional info: " + body.error);
    test.ok(body.schoolId == "10410");
    test.ok(body.companyId == "1000");
    test.ok(body.userId == "44184");
    test.ok(body.access_token);
    test.done();
  });
};

exports.testTokenBadPassword = function(test) {
  apitoken.get(config.target, config.username, 'BadPassword', function(error, res, body){
    test.expect(3);
    test.ok(res.statusCode == 400);
    test.ok(body.error == 'invalid_grant');
    test.ok(body.error_description == 'The user name or password is invalid.');
    test.done();
  });
};

