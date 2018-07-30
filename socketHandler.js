
function handler(socket)	{

	var module = {};

	module.onConnect = (person) =>	{
	 	socket.emit('new-person', person);
	}

	module.newMsg = (person, msg) =>	{
		socket.emit('new-msg', person, msg)
	}

	module.isTyping = (person) =>	{
		socket.emit('is-typing', person);
	}

	module.stopTyping = (person) =>	{
		socket.emit('stop-typing', person);
	}

	module.disconnect = (person) =>	{
		console.log('disconnecting');
		socket.emit('user-disconnected', person);
	}
	return module;
}