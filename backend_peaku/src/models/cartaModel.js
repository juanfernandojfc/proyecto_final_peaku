const { Schema, model } = require("mongoose")

const cartaSchema = Schema({
    ciudad: {
        type: String
    },
    puntaje:{
        type: String
    },
    pais:{
        type: String
    },
    precio:{
        type: String
    },
    descuento:{
        type: String
    },
},{
    collection : "cartas",
    
});

module.exports = model('Carta', cartaSchema); 