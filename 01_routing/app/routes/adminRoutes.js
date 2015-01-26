var express = require('express');

module.exports = (function() {

    'use strict';
    
    var adminRouter = express.Router();

	adminRouter.use(function(req, res, next) { 

		// Realizamos las comprobaciones necesarias
		console.log('Realizamos comprobaciones antes de ejecutar la request');

		// ... y seguimos con el flujo del programa
		next();
	});

	// ... creamos la ruta principal de administración
	adminRouter.get('/', function(req, res) { 

		res.send('Panel de control de administración!'); 

	});

	// ... una ruta para ver usuarios
	adminRouter.get('/user', function(req, res) {

		res.send('[admin] Lista de usuarios'); 

	});


	// ... comprobaremos que el usuario pasado como parámetro está logeado
	adminRouter.param('name', function(req, res, next, name) {

		console.log("comprobamos que el usuario esta logeado");

		// tras la validación, debemos añadir el nuevo parámetro a la request
		req.alias = name + " HM";

		// ... y procesamos la petición
		next();

	});


	// ... una ruta para saludar al usuario que se pasa como parámetro
	adminRouter.get('/user/:name', function(req, res) {

		res.send('[admin] Detalle del usuario ' + req.params.name + ', alias ' + req.alias);  

	});


	// ... un ruta para lista post
	adminRouter.get('/post', function(req, res) {

		res.send('[admin] Lista de posts'); 

	});

    return adminRouter;
    
})();