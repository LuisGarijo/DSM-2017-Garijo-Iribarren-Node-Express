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
var s = fs.createReadStrem(f).once('open', function (){
	var headers = {'Content-type': mimeTypes[path.extname(buscar)]};
	response.writeHead(200, headers);
	this.pipe(response);
}).once('error', function (e) {
	console.log(e);
	response.writeHead(500);
	response.end('Error Servidor');
});

response;
			}
			response.writeHead(404); //No se ha encontrado ese archivo
			response.end('¡Página no encontrada!');
		});
			
	}).listen(8080);
	console.log('Servidor ejecutándose en el puerto 8080');

	var cache = {};
	function cacheYEntrega(f, cb) { 
		if(!cache[f]){
			fs.readFile(f, function (err, data) {
				if(!err){
					cache[f] = {content: data};
				}
				cb(err, data);
			});
			return;
		}
		console.log('Cargando ' + f + 'de cache');
		cb(null, cache[f].content);

	}