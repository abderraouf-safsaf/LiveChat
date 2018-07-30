var httpServer = require('http');

function start(express)	{
	var app = express();
	var http = httpServer.Server(app);

	app.get('/', function(req, res)	{
		res.sendFile(__dirname + '/index.html');
	});

	app.use(express.static(__dirname + '/'));

	const PORT = process.env.PORT || 3000;

	http.listen(PORT, function()	{
		console.log('Listening on *: ' + PORT);
	});

	return http;
}

exports.start = start