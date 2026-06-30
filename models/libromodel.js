const mongoose = require('mongoose');

// Definición del esquema de libro
const libroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    }
},
{timestamps: true} // Agrega campos de fecha de creación y actualización automáticamente
);

const ModeloLibro = mongoose.model('Libro', libroSchema);
module.exports = ModeloLibro;