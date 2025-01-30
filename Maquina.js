// backend/models/Maquina.js
const mongoose = require('mongoose');

// Definición del esquema para la colección Maquina
const MaquinaSchema = new mongoose.Schema({
  NOMBRE_BASE: {
    type: String,
    required: true, // Campo requerido
  },
  NUEVO_NOMBRE: {
    type: String,
    required: true, // Campo requerido
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Exportar el modelo
module.exports = mongoose.model('Maquina', MaquinaSchema);
