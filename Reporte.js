const mongoose = require('mongoose');

// Definición del esquema para la colección Reporte
const ReporteSchema = new mongoose.Schema({
  maquina: {
    type: String,
    required: true, // Campo requerido
  },
  numeroEmpleado: {
    type: String,
    required: true, // Campo requerido
  },
  codigoFalla: {
    type: String,
    required: false, // Campo requerido
  },
  numParte: {
    type: String,
    required: false,
  },
  comentarios: {
    type: String,
    default: "", // Campo opcional 
  },
  proceso: {
    type: String,
    required: false,
    default: "", // Campo opcional
  },
  descripcionFalla: {
    type: String,
    required: true, // Campo requerido
  },
  fechaReporte: {
    type: String,
    required: true, // Campo requerido
  },
  horaReporte: {
    type: String,
    required: true, // Campo requerido
  },
  turno: {
    type: Number,
    required: true, // Campo requerido
  },
  tecnicoAsignado: {
    type: String,
    required: false,
    default: "", // Campo opcional 
  },
  horaAsignacion: {
    type: String,
    required: false,
    default: "", // Campo opcional 
  },
  asistenciaTecnica: {
    type: String, //boolean?
    required: false,
    default: "", // Campo opcional
  },
  horaAsistencia: {
    type: String, //dateTime
    required: false,
    default: "", // Campo opcional 
  },
  descripcionMantenimiento: {
    type: String,
    required: false,
    default: "", // Campo opcional 
  },
  codigoCausa: {
    type: String,
    required: false,
    default: "", // Campo opcional 
  },
  causaRaiz: {
    type: String,
    required: false,
    default: "", // Campo opcional 
  },
  horaTermino: {
    type: String,
    required: false,
    default: "", // Campo opcional 
  },
  fechaTermino: {
    type: String,
    required: false,
    default: "", // Campo opcional
  },
  tiempoAjuste: {
    type: String,
    required: false,
    default: "", // Campo opcional
  },
  tiempoMuertoTotal: {
    type: String,
    required: false,
    default: "", // Campo opcional
  },
  estado: {
    type: String,
    required: true, // Campo requerido
    default: "Abierto",
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Exportar el modelo
module.exports = mongoose.model('Reporte', ReporteSchema);
