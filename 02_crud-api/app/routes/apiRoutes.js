var express = require('express');

module.exports = (function() {

    'use strict';
    

    // Instancia de la clase Router
    var apiRouter = express.Router();



    // middleware que se ejecuta antes que cualquier otra ruta de la api
    apiRouter.use(function(req, res, next){

    	console.log('Alguien usa la API: Autenticar usuario ');

    	next();
    });


    /*
		Punto de entrada a la API
    */
    apiRouter.get('/', function(req, res) { 
    	res.json({ message: 'Hey! Este esta es la home de mi API' }); 
    });


    /*
		Usuarios
    */
    var UsersCtrl = require('../controllers/userController');
    apiRouter.route('/users')
		.get(UsersCtrl.findAllUsers)
		.post(UsersCtrl.addUser);

	apiRouter.route('/users/:username')
		.get(UsersCtrl.findByUsername)
		.put(UsersCtrl.updateUser)
		.delete(UsersCtrl.deleteUser);



	/*
		Devolvemos las rutas de la API
	*/
    return apiRouter;

})();    