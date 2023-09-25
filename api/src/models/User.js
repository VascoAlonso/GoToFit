const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true, // Asegura que el nombre de usuario sea único
    required: true, // Requerido
  },
  email: {
    type: String,
    unique: true, // Asegura que el correo electrónico sea único
    required: true, // Requerido
  },
  password: {
    type: String,
    required: true, // Requerido
  },
  // Otros campos de usuario, como nombre, apellido, fecha de registro, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;