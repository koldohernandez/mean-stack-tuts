var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require('bcrypt-nodejs');


// Declaro el esqueda del usuario
var UserSchema = Schema ({
	
	name: String,
	username: { type: String, required: true, index: true, unique: true },
	password: { type: String, required: true, select: false }

});


// Declaro un middleware que se ejecuta antes de que se guarde un registro de usuario 
// que se encargue de codificar la password
UserSchema.pre('save', function(next) {

	var user = this;

	// Si no se ha modificado la password, sigo el flujo normal del programa
	if (!user.isModified('password')) return next();

	// Encripto la password
	bcrypt.hash(user.password, null, null, function(err, hash) {
		// si hay un error, envío la respuesta de error
		if (err) return next(err);

		// ... y si no, cambio la password del usuario al valor encriptado
		user.password = hash;
		next();
	});

});


// Método para comparar la pasword enviada como parametro con el valor de la bd
UserSchema.methods.compararPassword = function(pwd) {

	var user = this;

	return bcrypt.compareSync(pwd, user.password);

};



module.exports = mongoose.model('User', UserSchema); 





