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

			if (err.code == 11000) 
				return res.status(409).json({ error: 'Usuario ya creado en la base de datos. Elije otro nombre.'});
			else
				return res.status(412).send(err);

		} 

		return res.status(201).json({ success: true, message: 'Usuario creado' });

	});

}



// Buscar todos los usuarios
exports.findAllUsers = function(req, res) {

	User.find(function (err, users) {

		if (err) return res.status(412).send(err);

		res.status(200).json(users);
		

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

		if (err) return res.status(412).send(err);

		if (user) 
			res.status(200).json(user);
		else
			res.status(400).json({ error: 'El usuario ' + req.params.username + ' no existe' });

	});

}




// Modificar un usuario concreto
exports.updateUser = function(req, res) {

	User.findOne({username: req.params.username}, function(err, user) {

		if (err) return res.status(500).send({ success: false, error: err });

		if (req.body.name) user.name = req.body.name;
		if (req.body.password) user.password = req.body.password;

		user.save(function(err) {

			if (err) {

				if (err.code == 11000) 
					return res.status(409).json({ error: 'Usuario ya creado en la base de datos. Elije otro nombre.'});
				else
					return res.status(412).send(err);

			}
			
			return res.status(201).json({ success: true, message: 'Usuario modificado correctamente' });

		});

	});

}



// Eliminar un usuario
exports.deleteUser = function(req,res) {

	User.findOne({username: req.params.username}, function(err, user) {

		if (user) {

			User.remove({ username: req.params.username }, function(err, user) { 

				if (err) res.status(412).send(err);
				
				return res.status(200).json({ message: 'Usuario borrado correctamente' });
			});

		} else {

			return res.status(204).json({ error: 'El usuario ' + req.params.username + ' no existe'});

		}
		

	});

}