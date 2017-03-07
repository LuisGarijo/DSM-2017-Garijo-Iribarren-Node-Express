var http = require('http');
var path = require('path');
var fs = require('fs'); // el módulo fs que se encagar de comunicarse con el gestor de archivos del ordenador

var mineTypes = {
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
					if (err) {response.writeHead(500);   //encabezado de la respuesta, mandamos información, tipo de contenido 
					//que estamos mandado código(status code) 500: hubo algún problema
						response.end('Error del Servidor');
						return;}
					var headers = {'Content-type': mineTypes[path.extname(buscar)]};
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
