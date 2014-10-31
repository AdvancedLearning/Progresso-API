/* jslint node: true, async: true */
// lib/contacts.js

var https = require('https');
var config = require('../config.js');

module.exports.get = get;

function get(path, token, callback) {
  var options = {
    hostname: config.target,
    path: path,
    method: 'GET',
    headers: {
      "Authorization": 'Bearer ' + token
    }
  };

  var req = https.request(options, function(res){
    var data = '';
    res.setEncoding('utf-8');

    res.on('data', function(chunk){data += chunk;});
    res.on('end', function(){
      callback(false, res, JSON.parse(data));
    });
  });
  req.end();

  req.on('error', function(e){
    console.error(e);
    callback(e, null, null);
  });
}
