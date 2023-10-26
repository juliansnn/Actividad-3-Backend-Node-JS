//Dependencia commonjs
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
//dependencias de rutas:
const bootcampRoutes = require('./routes/bootcampRoutes')
//dependencia para conexion a base de datos 
const conectDB = require('./config/db')

//establecer archivo .env del proyecto
dotenv.config({
        path: './config/.env'
    })


conectDB()
    
//Crear el objeto app
const app = express()
//Express para recibir datos json
app.use(express.json())
//vincular rutas de bootcamps
app.use('/api/v1/devcamp/bootcamps', bootcampRoutes)
//Primera prueba de URL del servidor
app.get('/prueba' , 
        function(request, response){
            response.send('Holaaaaa');
});


//EVIDENCIA: URIs de cursos
//traer todos los cursos
app.get('/api/v1/devcamp/courses' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": "Mostrar todos los cursos"
                    })
        });
//traer cursos por id
app.get('/api/v1/devcamp/courses/:id' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": `Seleccionando curso con id ${request.params.id}`
                    })
        });   
//crear un curso
app.post('/api/v1/devcamp/courses' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": "Crear curso"
                    })
        });   
//actualizar curso por id
app.put('/api/v1/devcamp/courses/:id' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": `Actualizando cursos con id ${request.params.id}`
                    })
        });   
//Borrar curso por id
app.delete('/api/v1/devcamp/courses/:id' , 
(request, response )=>{
    response.status(200)
            .json({
                    "success": true,
                    "msg": `Eliminando cursos con id ${request.params.id}`
            })
}); 

//EVIDENCIA: URIs para reviews
//traer todos las reseñas
app.get('/api/v1/devcamp/reviews' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": "Mostrar todos las reseñas"
                    })
        });
//traer reseñas por id
app.get('/api/v1/devcamp/reviews/:id' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": `Seleccionando reseña con id ${request.params.id}`
                    })
        });   
//crear un reseña
app.post('/api/v1/devcamp/reviews' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": "Crear reseña"
                    })
        });   
//actualizar reseña por id
app.put('/api/v1/devcamp/reviews/:id' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": `Actualizando reseñas con id ${request.params.id}`
                    })
        });   
//Borrar reseña por id
app.delete('/api/v1/devcamp/reviews/:id' , 
(request, response )=>{
    response.status(200)
            .json({
                    "success": true,
                    "msg": `Eliminando reseñas con id ${request.params.id}`
            })
}); 

//EVIDENCIA: URIs para users
//traer todos los usuarios
app.get('/api/v1/devcamp/users' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": "Mostrar todos los usuarios"
                    })
        });
//traer usuarios por id
app.get('/api/v1/devcamp/users/:id' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": `Seleccionando usuario con id ${request.params.id}`
                    })
        });   
//crear un usuario
app.post('/api/v1/devcamp/users' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": "Crear usuario"
                    })
        });   
//actualizar usuario por id
app.put('/api/v1/devcamp/users/:id' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": `Actualizando usuario con id ${request.params.id}`
                    })
        });   
//Borrar usuarios por id
app.delete('/api/v1/devcamp/users/:id' , 
(request, response )=>{
    response.status(200)
            .json({
                    "success": true,
                    "msg": `Eliminando usuarios con id ${request.params.id}`
            })
}); 

//establecer un servidor 
const PUERTO = process.env.EXPRESS_PORT

app.listen( PUERTO , 
        console.log(`Servidor escuchando en el puerto: ${PUERTO}`.bgBlue.red))
