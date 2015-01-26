# MEAN STACK
---

Este repositorio contiene una serie de ejemplos de uso del stack MEAN (MongoDB-Express-AngularJS-NodeJS).

El objetivo final es construir una aplicación que estará compuesta por:

- Un *frontend* desarrollado con AngulasJS y siguiendo algunos principios de desarrollo ágil

- Un *backend* para la parte de administración

- Una *API* con autenticación basada en tokens para consumir los datos desde el frontend


## Pre-requisitos

Debemos tener instalado:

- [NodeJS y npm](http://nodejs.org/)

- [Nodemon](http://nodemon.io)

		$ > npm install -g nodemon

- [Bower](http://bower.io/)

		$ > npm install -g bower

- [Gulp](http://gulpjs.com/)

		$ > npm install -g gulp

- [MongoDB](http://www.mongodb.org/)

Además utilizaremos las siguientes herramientas para probar la API Rest:

- Postman38 (Chrome) 

- RESTClient39 (Firefox)



## ¿Qué voy a encontrar?

Cada uno de los ejemplos del repositorio es una mini-aplicación donde se explicará conceptos relacionados con el desarrollo basado en la tecnología MEAN.

Cada ejemplo contiene:

- `package.json`: fichero donde se declaran las dependencias de la mini-aplicación de ejemplo.

- `README.md`: fichero con la descripción y detalle del ejemplo.

- `/app`: carpeta donde estará todo el código necesario para ejecutar la mini-aplicación de ejemplo.

- `/app/app.js`: fichero principal de la mini-aplicación hecha Express.	

Estos son los ficheros mínimos que tendremos. A medida que vamos avanzando en complejidad, tendremos más ficheros que serán explicados en el `README.md` de cada ejemplo concreto.


## ¿Cómo probar los ejemplos?

Todos los ejemplos siguen la misma estructura. Por tanto, para ejecutar un ejemplo concreto sólo tienes que:

1. Moverte a la carpeta donde está el ejemplo que quieres probar

		$ > cd mean-stack-examples/<nombre_ejemplo>

2. Instalar las dependencias del proyecto

		$ > npm install

3. Arrancar la aplicación

		$ > nodemon

4. Acceder a la url `http://localhost:8080`


En caso de que en un ejemplo tengamos que hacer más cosas, éstas serán reflejadas en su fichero `README.md`.
