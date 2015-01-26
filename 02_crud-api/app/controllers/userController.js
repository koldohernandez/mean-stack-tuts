// Mongoose
var mongoose = require('mongoose');


// Modelo del Usuario
var User = require('../models/userModel');



// Crear un usuario
exports.addUser = function(req, res) {

	var user = new User({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password
	});

	user.save(function(err) { 

		if (err) {

			// clave duplicada
			if (err.code == 11000) 
				return res.json({ success: false, message: 'Usuario ya creado en la base de datos. Elije otro nombre.'});
			else
				return res.send(err);

		} 

		res.json({ message: 'Usuario creado' });

	});

}



// Buscar todos los usuarios
exports.findAllUsers = function(req, res) {

	User.find(function (err, users) {

		if (err) return res.send(err);

		res.json(users);

	});

}


// Buscar un usuario concreto
/*exports.findById = function(req, res) {

	User.findById(req.params.id, function (err, user) {

		if (err) return res.send(err);

		res.json(user);

	});

}*/


// Buscar un usuario concreto en base al username
exports.findByUsername = function(req, res) {

	User.findOne({username: req.params.username}, function(err, user) {

		if (err) return res.send(err);

		if (user) 
			res.json(user);
		else
			res.json({ success: false, message: 'El usuario ' + req.params.username + ' no existe'});

	});

}




// Modificar un usuario concreto
exports.updateUser = function(req, res) {

	User.findOne({username: req.params.username}, function(err, user) {

		if (err) res.send(err);

		if (req.body.name) user.name = req.body.name;
		if (req.body.password) user.password = req.body.password;

		user.save(function(err) {

			if (err) {

				// clave duplicada
				if (err.code == 11000) 
					res.json({ success: false, message: 'Usuario ya creado en la base de datos. Elije otro nombre.'});
				else
					res.send(err);

			}
			
			res.json({ message: 'Usuario modificado' });

		});

	});

}



// Eliminar un usuario
exports.deleteUser = function(req,res) {

	User.remove({ username: req.params.username }, function(err, user) { 

		if (err) res.send(err);
		
		res.json({ message: 'Usuario borrado correctamente' });
	});

}