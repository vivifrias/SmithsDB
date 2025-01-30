const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Definición del esquema para la colección Usuario
const UsuarioSchema = new mongoose.Schema({
  USUARIO: {
    type: String,
    required: true,
    unique: true, // Hace que el nombre de usuario sea único
  },
  NOMBRE: {
    type: String,
    required: true,
  },
  CORREO: {
    type: String,
    required: true,
  },
  ROL: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// Configura passport-local-mongoose para usar "USUARIO" como nombre de usuario
UsuarioSchema.plugin(passportLocalMongoose, {
  usernameField: 'USUARIO',
});

// Exportar el modelo
module.exports = mongoose.model('Usuario', UsuarioSchema);
