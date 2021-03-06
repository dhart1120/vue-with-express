const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/api/test', function(req, res){
	res.send('{"test":"json response"}');
});


if (process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + '/../dist'));

	app.get(/.*/, function(req, res){
		res.sendfile(__dirname + '/../dist/index.html');
	});
}


app.listen(port);

console.log('Server started...');