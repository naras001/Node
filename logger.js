var url = 'http://mylogger.io/log'

function log(message){
    //send an http request
    console.log(message);
}

message = "Hare Krishna";

// Module.exports.log = log;
module.exports = log;

// module.export.message = message;