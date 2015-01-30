//  PAQUETES 
// ----------
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	mongoose = require('mongoose'),
	port = process.env.PORT || 8080;


//  APP CONFIGURATION 
// -------------------
// Utilizamos el objeto bodyParser para manipular la información que nos llega por POST
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 


// configuramos nuestra aplicación para que acepte peticiones desde todos los dominios posibles (CORS)
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

	next();
});


// por cada petición, mostramos una traza por consola
app.use(morgan('dev'));


// nos conectamos a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/labs', function(err, res) {

	if (err) throw err;

	console.log('Conectado a la BD');

}); 



//  MODELOS
// ---------
// definición del modelo de Usuario
var User = require('./models/userModel');


//  RUTAS
// -------

// Home
app.get("/", function(req, res) {
	res.send("Bienvenido a mi página");
});

// API
var apiRoutes = require('./routes/apiRoutes');
app.use("/api", apiRoutes);





//  ARRANCAR EL SERVER
// --------------------
// Escuchar en el puerto configurado
app.listen(port);

// Log para saber cuando se arranca el servidor
console.log('NodeJS escuchando en el puerto: ' + port);



