const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonaSchema = new Schema({
  nombre: { type: String, required: [true, 'Nombre obligatorio'] },
  apellido: String,
  correo: String,
  contrasena: String,
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('persona', PersonaSchema)
