var httpServer = require('http');

function start(express)	{
	var app = express();
	var http = httpServer.Server(app);

	app.get('/', function(req, res)	{
		res.sendFile(__dirname + '/index.html');
	});

	app.use(express.static(__dirname + '/'));

	http.listen(3000, function()	{
		console.log('Listening on *:3000');
	});

	return http;
}

exports.start = start