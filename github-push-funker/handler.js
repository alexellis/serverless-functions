"use strict"

let funker = require("./funker-node");
let sample = require("./sampleresponse.json");
let request = require("request");
let util = require('util');

funker.handle(function(args, callback) {

  console.log(util.inspect(args, {showHidden: false, depth: null, colorize: true}));
  args.commits.forEach((commit) => {
  
    if(args.commits.length > 0) {
       console.log(commit.message);

       let file = "";
       if(commit.modified.length) {
         file = commit.modified[0];
       } else if(commit.added.length) {
         file = commit.added[0];
       } else {
         return res.status(200);
       }

       let url = "https://raw.githubusercontent.com/" + args.repository.full_name + "/" + commit.id + "/" + file;
       console.log("GET "+ url);
       request.get(url, (err, response, body) => {
          if(err) {
            console.error(err);
            return callback({"status": "errored", "error": err });
          }

          console.log("Contents of ["+file+"]");
          console.log(body);

          return callback({"status": "fetched", "received": body.length});
       });
     };
  });
});
