'use strict';

var express = require('express');
var portno = 8000;
var app = express();
app.use(express.static(__dirname));

var server = app.listen(portno, function () {
  console.log('Listening at http://localhost:' + portno);
});
