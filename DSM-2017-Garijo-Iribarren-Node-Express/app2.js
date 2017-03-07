var http = require('http');
var path = require('path'); // el módulo path proporciona utilidades para trabajar con rutas de archivos y directorios 

http.createServer(function (request, response){

		var ruta = path.basename(decodeURI(request.url)); // el método basename devuelve la última parte de una ruta
		// con decodeURI sustituimos los caracteres para indicar espacios, signos, etc (my%20test.asp?name=st%C3%A5le&car=saab // Encoded URI)
		// por su correspondiente valor (my test.asp?name=ståle&car=saab // Decoded URI)
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