"use strict"

let funker = require("./funker-node");
let sample = require("./sampleresponse.json");
var request = require("request");
let async = require('async');

async.whilst(() => {console.log("Request.."); return true; },
(cb) => {
  funker.handle((args, callback) => {
    console.log(args);
    var fs = require('fs');
    fs.readFile("/etc/hostname", "utf8", (err,data) => {
      sample.response.outputSpeech.text = "Your hostname is: " + data;
      sample.response.card.content = "Your hostname is: "+ data
      sample.response.card.title = "Your hostname";
      callback(sample);
      cb();
    });
  });
});
