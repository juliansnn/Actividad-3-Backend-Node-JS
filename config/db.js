const mongoose = require('mongoose')


//Función de conexión
async function conectDB (){
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Conectado a mongo` .bgMagenta.blue)
} 

module.exports = conectDB

//colores efectos de string colors - npm (npmjs.com)