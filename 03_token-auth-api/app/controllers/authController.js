// Mongoose
var mongoose = require('mongoose');

// JWT
var jwt = require('jsonwebtoken');


// Modelo del Usuario
var User = require('../models/userModel');


// Clave secreta para la encriptación
var superSecret = 'miclavesupersecreta';



// Método donde autenticamos al usuario
exports.authUser = function(req, res) {

	// Buscamos el usuario
	User.findOne({ 

		username: req.body.username 

	}).select('name username password').exec(function(err, user) {

		if (err) throw err;


		// ... si no existe devolvemos el error
		if (!user) {

			res.status(400).json({ error: 'El usuario ' + req.body.username + ' no existe' });
		
		} else {

			// Si existe, comprobamos que ha metido bien la password
			var passwordOK = user.compararPassword(req.body.password); 

			// Si ha metido mal la password
			if (!passwordOK) {
				
				// ... devolvemos el error
				res.status(400).json({ error: 'Contraseña incorrecta' });

			} else {

				// ... y si todo ha ido bien, creamos el token
				var token = jwt.sign(
					{
						name: user.name,
						username: user.username 
					}, 
					superSecret, 
					{
						expiresInMinutes: 1440 // expira en 24 horas 
					}
				);

				// ... y lo devolvemos
				res.status(200).json({ success: true, message: 'Ahi va nuestro token!', token: token });

			} // end if password
				
		} // end if user


	}); // end User.findOne

}


// Método que verifica un token
exports.checkToken = function(req, res, next) {

	// Recuperamos el token como valor por POST, de los parámetros de la URL o de la cabecera
	var token = req.body.token || req.params.token || req.headers['x-access-token'];

    // Si existe el token
    if (token) {

        // ... lo verificamos
        jwt.verify(token, superSecret, function(err, decoded) { 

            // Si el token es erróneo
            if (err) {

                // ... respondemos con un código de estado 403
                res.status(403).send({ error: 'Token de seguridad inválido' });
            
            } else {

                // ... y si todo ha ido bien, lo guardamos para utilizarlo en otras rutas
                req.decoded = decoded;
                    
                // y tiramos para adelante
                next();
            }

        });
            
        

    } else {

        // ... en caso de no existir, respondemos con un código de estado 403
        res.status(403).send({ error: 'Sin token de seguridad' });
    }

}
