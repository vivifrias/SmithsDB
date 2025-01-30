// backend/models/CodigosFalla.js
const mongoose = require('mongoose');

const codigoFallaSchema = new mongoose.Schema({
  CODIGO_FALLA: {
    type: String,
    required: true,
  },
  DESCRIPCION: {
    type: String,
    required: true,
  },
  TIEMPO_ESTANDAR: {
    type: String,
    required: false,
    default: "0:00", // Valor por defecto
  },
});

module.exports = mongoose.model('CodigoFalla', codigoFallaSchema);
