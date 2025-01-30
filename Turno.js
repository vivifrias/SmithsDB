// backend/models/Turno.js
const mongoose = require('mongoose');

// Definición del esquema para la colección Turno
const TurnoSchema = new mongoose.Schema({
  TURNO: {
    type: Number,
    required: true, // Campo requerido
  },
  INICIO: {
    type: String,
    required: true, // Campo requerido
  },
  FIN: {
    type: String,
    required: true, // Campo requerido
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Exportar el modelo
module.exports = mongoose.model('Turno', TurnoSchema);
