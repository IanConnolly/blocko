#!/usr/bin/env node
var config = require('../config.json');
var Twit = require('twit');
var argv = require('yargs').argv;


var in_id;

if (argv.id) {
    in_id = argv._[0];
} else {
    in_id = argv.url.match(/[^/]+$/)[0];
}

var T = new Twit(config);

function block(id) {
  T.post('blocks/create', { user_id: id }, function (err, reply) {
      if (err) console.err(err);
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
