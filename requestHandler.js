exports = module.exports = function (io, chatData)	{
	var module = {};

	module.newPerson = (person)	=> {
		var p = {};
		p.nickname = person.nickname;
		chatData.onlineCount++;
		chatData.online.add(person.nickname);
		console.log('There is ' + chatData.onlineCount + ' users online.');
		io.emit('new-person', person);
		io.emit('online', Array.from(chatData.online));
		console.log(Array.from(chatData.online));
		return p;
	}

	module.newMsg = (person, msg) =>	{
		io.emit('new-msg', person, msg);
	}

	module.isTyping = (person) =>	{
		chatData.typers.add(person.nickname)
		io.emit('is-typing', Array.from(chatData.typers));
	}

	module.stopTyping = (person) =>	{
		console.log(person);
		chatData.typers.delete(person.nickname);
		io.emit('is-typing', Array.from(chatData.typers));
	}

	module.disconnect = (person) =>	{
		console.log(person);
		chatData.onlineCount--;
		chatData.online.delete(person.nickname);
		io.emit('online', Array.from(chatData.online));
		console.log('There is ' + chatData.onlineCount + ' users online.');
	}

	return module;
};