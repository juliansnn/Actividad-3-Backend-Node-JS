const express = require('express')
const bootcampModel = require('../models/BootcampsModels')
const router = express.Router()

//URIs de bootcamps

//traer todos los bootcamps
router.get('/' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": "Mostrar todos los bootcamps"
                    })
        });
//traer bootcamp por id
router.get('/:id' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": `Seleccionando bootcamp con id ${request.params.id}`
                    })
        });   
//crear un bootcamp
router.post('/' , 
            (request, response )=>{
             //crear el nuevo bootcamp
//            const bootcamp = bootcampModel.create( request.body )



            response.status(200)
                    .json({
                            "success": true,
                            "data": request.body
                    })
        });   
//actualizar bootcamp por id
router.put('/:id' , 
        (request, response )=>{
            response.status(200)
                    .json({
                            "success": true,
                            "msg": `Actualizando bootcamp con id ${request.params.id}`
                    })
        });   
//Borrar bootcamp por id
router.delete('/:id' , 
(request, response )=>{
    response.status(200)
            .json({
                    "success": true,
                    "msg": `Eliminando bootcamp con id ${request.params.id}`
            })
}); 

module.exports = router