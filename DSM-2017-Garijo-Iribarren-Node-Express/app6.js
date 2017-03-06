var http = require('http');
var path = require('path');
var fs = require('fs');

var paginas = {
	'.js' : 'text/javascript',
	'.html' : 'text/html',
	'.cs' : 'text/css'
};

	http.createServer(
			function (request, response){
		var buscar = path.basename(decodeURI(request.url)) || 'index.html';
		var f = 'content/' + buscar;
		console.log(f);
		fs.exists(f,function(exists) {
			if (exists){
				fs.readFile(f,function (err, data){
					if (err) {response.writeHead(500);
						response.end('Error del Servidor');
						return;}
					var headers = {'content-type': mineTypes[path.extname(buscar)]};
					response.writeHead(200, headers);
					response.end(data);
				});
				response;
			}
			response.writeHead(404); //No se ha encontrado ese archivo
			response.end('¡Página no encontrada!');
		});
			
	}).listen(8080);
	console.log('Servidor ejecutándose en el puerto 8080');
