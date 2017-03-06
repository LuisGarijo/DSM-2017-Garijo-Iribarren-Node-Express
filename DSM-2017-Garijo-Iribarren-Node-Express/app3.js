var http = require('http');
var path = require('path');

var paginas = [
	{ruta: '', output: 'Bienvenida'},
	{ruta: 'about', output: 'Información sobre nosotros'},
	{ruta: 'productos', output: 'Info de productos'}
];

http.createServer(
	function (request, response){

		var ruta = path.basename(decodeURI(request.url));
		paginas.forEach(function(pagina) {
			if(ruta == pagina.ruta){
				response.writeHead(200, {'content-type':'text/html'});
				response.end(pagina.output);
			}
		});
		if (!response.finished) {
				response.writeHead(404);
				response.end('¡Págin no encontrada!');
		}

}).listen(8080);

console.log('Servidor ejecutándose en el puerto 8080');