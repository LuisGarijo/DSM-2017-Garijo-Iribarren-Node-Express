var http = require('http');
var form = require('fs').readFileSync('form.html');

http.createServer(function (request, response) {
	if(request.method === "POST") {
		var postData= '';
		request.on('data', 
			function (chunk) {
			postData += chunk;	}).on('end', 

			function() { 
			console.log('El usuario ha escrito:\n' + postData);
			response.end('Usted ha escrito:\n' + postData); });
   	}
   	if(request.method === "GET"){
   		response.writeHead(200, {'Content-Type': 'text/html'});
   	}
}).listen(8080);

console.log("Servidor ejecutándose en el puerto 8080")