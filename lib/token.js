/* jslint node: true */
// lib/token.js

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports.get = function(target, username, password, callback){
  var https = require('https');
  var mypath = "/v2/Token";
  var data = "grant_type=password&username=" + username + "&password=" + encodeURIComponent(password);

  var options = {
    hostname: target,
    path: mypath,
    method: 'POST',
    rejectUnauthorized: false,
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded'
    },
  };

  var req = https.request(options, function(res){
    var data = '';
    res.setEncoding('utf-8');

    res.on('data', function(chunk){data += chunk;});
    res.on('end', function(){
      if (res.statusCode != 200) {
        console.error(data);
        callback(data, res, data);
      } else {
        callback(false, res, JSON.parse(data));
      }
    });
  });
  req.write(data);
  req.end();

  req.on('error', function(e){
    console.error(e);
    callback(e, null, null);
  });
};
