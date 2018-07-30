var express = require('express');
var app = express();
var server = require('./server');
var chat = require('./chat');

var http = server.start(express);

chat.start(http);

