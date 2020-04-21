//Configurações do Servidor
const app = require('express')();
const bodyParser = require('body-parser');
//const handlebars = require('express-handlebars');
const dns = require('dns');
const https = require('https');
const fs = require('fs');

//const cors = requeri('cors');


//Certificado não valido
var server = https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app);

var io = require('socket.io')(server);

//Rota default
app.get('/', function(req, res){
  //res.send('Hello World!');
  res.sendFile(__dirname + "/html/index.html");
});

	//Demais Rotas
	app.get('/page', function (req, res) {
		// body...
		res.send('page');
	});

	app.get('/aplication', function (req, res) {
		// body...
		res.send('aplication');
	});



//Rota
io.on('connection', (socket) => {
    console.log(`Socket conectado. ID: ${socket.id}`);
});

dns.lookup('wburlani', (err, address, family) => {
  console.log('address: 192.168.1.40 family: IPv4', address, family);
});


server.listen(3000, function () {
  console.log('SERVIDOR DISPONIVEL NA PORTA 3000!')
});



