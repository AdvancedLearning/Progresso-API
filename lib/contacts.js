/* jslint node: true, async: true */
// lib/contacts.js

var https = require('https');

// get all contacts
module.exports.get = function(target, token, callback) {
  var mypath = "/v2/Contacts/";
  var options = {
    hostname: target,
    path: mypath,
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
};

// get a single contact
module.exports.get = function(target, token, contactid, callback) {
  var mypath = "/v2/Contacts/" + contactid;

  var options = {
    hostname: target,
    path: mypath,
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
};