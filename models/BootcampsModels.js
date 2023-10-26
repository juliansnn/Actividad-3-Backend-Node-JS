const mongoose = require('mongoose')

//Definir el modelo para bootcamps

const BootcampSchema = mongoose.Schema({
    name:{
        type: String,
        unique: [ true , "nombre de bootcamp debe ser único"],
        required: [true, "nombre del bootcamp requerido"],
        maxlength: [50 , "longitud de nombre menor a 50"] 
    },
    phone:{
        type: Number,
        maxlength: [10 , "longitud de teléfono menor a 10"]
    },
    adress:{
        type:String,
        required: [true, "Dirección requerida"]
    },
    topics:{
        type: [String],
        enum: [
            "AI",
            "Frontend/Ux",
            "Backend",
            "DevOps"
        ]
    },
    averageRating: Number,
    createdAt: Date
})

module.exports = mongoose.model('Bootcamps' , 
                                BootcampSchema )