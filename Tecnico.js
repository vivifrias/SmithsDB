// backend/models/Tecnico.js
const mongoose = require('mongoose');

// Definición del esquema para la colección Tecnico
const TecnicoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, // Campo requerido
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Exportar el modelo
module.exports = mongoose.model('Tecnico', TecnicoSchema);
