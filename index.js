var express = require('express');
var server = express();
var port = 8080;

//this line is writing up a server power called express.static
//it allows the server to server static files from a directory
server.use(express.static(__dirname + '/public'));

server.listen(port, function(){
   console.log('Now listening on port...', port);
});
