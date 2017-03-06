var http = require('http');
var url = require('url');

var paginas = [
	{id: '1', ruta: '', output: 'Bievenido'},
	{id: '2', ruta: 'about', output: 'Información sobre nosotros'},
	{id: '3', ruta: 'productos', output: 'Info de productos'}
];

	http.createServer(
			function (request, response){

				var id = url.parse(decodeURI(request.url), true).query.id;
				console.log(ruta);
				if(id){
					paginas.forEach(function(pagina) {
						if(pagina.id === id){
							response.writeHead(200, {'content-type':'text/html'});
							response.end(pagina.output);
						}
					});
				}
					if (!response.finished) {
							response.writeHead(404);
							response.end('¡Página no encontrada!');
					}
			
		}).listen(8080);
		console.log('Servidor ejecutándose en el puerto 8080');
