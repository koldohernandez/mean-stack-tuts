# Operaciones CRUD para una API con Express

En este tutorial vamos a ver cómo crear operaciones de tipo CRUD (create, read, update y delete) para una API con Express. Este es el primero de los tutoriales cuyo objetivo final es crear una API Resst con autenticación basada en tockens. 

Concretamente en este ejemplo vamos a crear una aplicación que permite manejar operaciones CRUD con una esquema de usuarios:

- Obtener una lista de usuarios (/api/users)

- Obtener el detalle de un usuario concretp (/api/users/:id)

- Utilizaremos los verbos propios de las aplicaciones REST: GET, POST, PUT y DELETE

En todos los casos devolveremos datos en formato JSON y tiraremos una serie de logs por consola.

Para ello, vamos a utilizar otro de los componentes de MEAN: MongoDB. MongoDB es una base de datos documental que pertenece a la famila de bases de datos NoSQL (no relacionales). 

Como tarea importante para todas las aplicaciones que se encarguen de manejar usuarios, guardaremos las contraseñas de éstos encriptadas.