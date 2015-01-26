// = 		CONFIGURACION BASICA 		=
// ======================================

//  Cargamos los paquetes que necesitamos
// ----
var express = require('express'),
	app = express(),
	port = process.env.PORT || 8080;



// = 		ENRUTAMIENTO DE LA APP 		=
// ======================================

// Home
app.get("/", function(req, res) {
	res.send('Ejemplo de enrutamiento');
});

// Admin
var adminRoutes = require('./routes/adminRoutes');
app.use("/admin", adminRoutes);




// = 		ARRANCAMOS EL SERVER 		=
// ======================================
// Escuchar en el puerto configurado
app.listen(port);

// Log para saber cuando se arranca el servidor
console.log('NodeJS escuchando en el puerto: ' + port);



