#!/usr/bin/env node
var config = require('../config.json');
var Twit = require('twit');
var argv = require('yargs').argv;

if (config.consumer_key === "your_api_token"
 || config.consumer_secret === "your_secret_api_token"
 || config.access_token === "your_access_token"
 || config.access_token_secret === "your_secret_access_token") {
    console.log("Hey! Go read the README first!");
    console.log("You need to generate some Twitter API + Access keys!");
    process.exit(-1);
}


var in_id;

if (argv.id) {
    in_id = argv.id;
} else {
    in_id = argv._[0].match(/[^/]+$/)[0];
}

var T = new Twit(config);

function block(id) {
    T.post('blocks/create', { user_id: id }, function (err, reply) {
        if (err) console.error(err);
        if (reply) console.log('Blocked user: ' + reply.id);
  });
}

T.get('statuses/retweeters/ids',
      { id: in_id, count: 100, stringify_ids: true},
      function(err, reply) {
          if (err) console.error(err);
          if (reply) {
              for (var i = 0; i < reply.ids.length; i++) {
                  block(reply.ids[i]);
              }
          }
});
