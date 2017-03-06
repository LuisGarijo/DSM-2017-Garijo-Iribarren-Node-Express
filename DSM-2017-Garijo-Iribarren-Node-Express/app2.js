var http = require('http');
var path = require('path');

http.createServer(function (request, response){

		var ruta = path.basename(decodeURI(request.url));
			if(ruta == ''){
				response.writeHead(200, {'content-type':'text/plain'});
				response.end('Hola mundo');
			}else if(ruta == 'about'){
				response.writeHead(200, {'content-type': 'text/plain'});
				response.end('Información sobre nosostros');
			}else{
				response.writeHead(404);
				response.end('Página no encontrada');
			}

}).listen(8080);

console.log('Servidor ejecutándose en el puerto 8080');