var http = require('http');

http.createServer(function (request, response){
	console.log('Petición http');
	response.writeHead(200, {'content-type':'text/plain'});
	response.end('Hola mundo');
}).listen(8080);

console.log('Servidor ejecutándose en el puerto 8080');