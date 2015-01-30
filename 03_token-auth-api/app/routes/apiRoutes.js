var express = require('express');

module.exports = (function() {

    'use strict';
    

    // Instancia de la clase Router
    var apiRouter = express.Router();


    /*
        Autenticación
    */
    var AuthCtrl = require('../controllers/authController');

    // Ruta de autenticación
    apiRouter.route('/auth')
        .post(AuthCtrl.authUser);

    // Middleware que se ejecuta antes que cualquier otra ruta de la api
    apiRouter.use(AuthCtrl.checkToken);
    


    /*
		Punto de entrada a la API
    */
    apiRouter.get('/', function(req, res) { 
    	res.send(req.decoded);
    });



    /*
		Operaciones CRUD con Usuarios
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