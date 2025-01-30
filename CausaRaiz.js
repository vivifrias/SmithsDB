// backend/models/CausaRaiz.js
const mongoose = require('mongoose');

// Definición del esquema
const CausaRaizSchema = new mongoose.Schema({
  CODIGO: {
    type: String,
    required: true, // Campo requerido
  },
  DESCRIPCION: {
    type: String,
    required: true, // Campo requerido
  },
  EJEMPLOS: {
    type: String,
    required: true, // Campo requerido
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Exportar el modelo
module.exports = mongoose.model('CausaRaiz', CausaRaizSchema);
