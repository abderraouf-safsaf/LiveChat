var handler = require('./requestHandler');
var socket_io = require('socket.io');
var chatData = {
	onlineCount: 0,
	typers: new Set(),
	online: new Set()
};

function start(http)	{

	var io = socket_io(http);

	var requestHandler = handler(io, chatData);
	io.on('connection', function(socket)	{
		socket.on('new-person', (person) =>	{
			requestHandler.newPerson(person);
		});

		socket.on('new-msg', (person, msg) =>	{
			requestHandler.newMsg(person, msg);
		});

		socket.on('is-typing', (person) =>	{
			requestHandler.isTyping(person);
		});

		socket.on('stop-typing', (person) =>	{
			requestHandler.stopTyping(person);
		});

		socket.on('user-disconnect', (person) =>	{
			console.log('disconnect');
			requestHandler.disconnect(person);
		});
	});
}

exports.start = start;