var express = require('express');
var http = require('http'); //socket.io lo necesita
var socket = require('socket.io');

//CREACION DEL SERVER
var app = express();
var server = http.createServer(app);
var usuarios = [];

server.listen( process.env.PORT || 3000, function(){
	console.log("Corriendo en el puerto 3000");
});

//Variable que esucha si hubo algun cambio
var io = socket.listen(server);


//DIRECCIONAMIENTO
app.get('/', function(llamado, respuesta){
	respuesta.sendFile(__dirname + '/cliente.html');
});

//FUNCIONAMIENTO DEL SOCKET
io.on('connection', function(socket){
	socket.on('nuevo usuario', function(usuario, callback){
		if(usuarios.indexOf(usuario) != -1){ //Verifica si el usuario ya existe
			callback(false);
		}else{
			callback(true);
			socket.usuario = usuario; //se añade al usuario al socket
			usuarios.push(usuario);
			console.log(usuario);

			//Actuliza la liista de usuarios
			actualizarUsuarios();
			io.emit('mensaje',{mensaje: 'se ha conectado', usuario: socket.usuario});
		}
	});

	//Checa cuando un usuario manda un mensaje
	socket.on('nuevo mensaje', function(mensaje){
		io.emit('mensaje',{mensaje: mensaje, usuario: socket.usuario}); //sabe que usuario envio ese mensaje
	});


	function actualizarUsuarios(){
		io.emit('actualizarUsuarios', usuarios);
	}

	socket.on('disconnect', function(data){
		usuarios.splice(usuarios.indexOf(socket.usuario),1);
		io.emit('mensaje',{mensaje: 'se ha desconectado', usuario: socket.usuario});
		actualizarUsuarios();
	});
});
