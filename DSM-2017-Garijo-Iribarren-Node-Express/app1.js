var http = require('http'); //importamos el módulo http

http.createServer(function (request, response){ //método de http, le pasamos una función. Esta función ha de tener como parámetros
	//un objeto con la información de la solicitud que hace el usuario y el otro es un objeto que nos permite responder al usuario
	//Se ejecuta cada vez que el navegador hace una petición al servidor node
	console.log('Petición http'); //información que mostramos en nuestra consola

	response.writeHead(200, {'content-type':'text/plain'});  //encabezado de la respuesta, mandamos información, código 200: todo salio bien
	response.end('Hola mundo'); //terminamos la conexión y respondemos con el texto 'Hola mundo', utilizamos el método .end.

}).listen(8080); //puerto en el que escuchaS

console.log('Servidor ejecutándose en el puerto 8080'); //se ejecuta una única vez