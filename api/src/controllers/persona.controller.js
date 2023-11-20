const PersonaCtrl = {}
const Persona = require('../models/Persona.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Crea Persona
PersonaCtrl.crear = async (req, res) => {
  const { nombre, apellido, correo, contrasena } = req.body
  const NuevaPersona = new Persona({
    nombre,
    apellido,
    correo,
    contrasena
  })
  const correoPersona = await Persona.findOne({ correo: correo })
  if (correoPersona) {
    res.json({
      mensaje: 'El correo ya existe'
    })
  } else {
    NuevaPersona.contrasena = await bcrypt.hash(contrasena, 10)
    const token = jwt.sign({ _id: NuevaPersona._id }, 'Secreto')
    await NuevaPersona.save()

    res.json({
      mensaje: 'Bienvenid@ ' + nombre,
      id: NuevaPersona._id,
      nombre: NuevaPersona.nombre,
      correo: NuevaPersona.correo,
      token

    })
  }
}

// Login Persona

PersonaCtrl.login = async (req, res) => {
  const { correo, contrasena } = req.body
  const persona = await Persona.findOne({ correo: correo })
  if (!persona) {
    return res.json({
      mensaje: 'El correo es incorrecto'
    })
  }

  const match = await bcrypt.compare(contrasena, persona.contrasena)
  if (match) {
    const respuesta = jwt.sign({ _id: persona._id }, 'Secreto')
    res.json({
      mensaje: 'Bienvenid@ ' + persona.nombres,
      id: persona._id,
      nombre: persona.nombres,
      respuesta

    })
  } else {
    res.json({
      mensaje: 'Contraseña incorrecta'
    })
  }
}

// Lista Personas

PersonaCtrl.listar = async (req, res) => {
  const respuesta = await Persona.find()
  res.json(respuesta)
}

// Listar id

PersonaCtrl.listarId = async (req, res) => {
  const id = req.params.id
  const respuesta = await Persona.findById({ _id: id })
  res.json(respuesta)
}

// Listar personas de una ciudad

PersonaCtrl.personaDeUnaCiudad = async (req, res) => {
  const id = req.params.id
  const respuesta = await Persona.find({ ciudad: id })
  res.json(respuesta)
}

// Eliminar Persona

PersonaCtrl.eliminar = async (req, res) => {
  const id = req.params.id
  await Persona.findByIdAndRemove({ _id: id })
  res.json({
    mensaje: 'Persona eliminada'
  })
}

// Actualizar Persona

PersonaCtrl.actualizar = async (req, res) => {
  const id = req.params.id
  await Persona.findByIdAndUpdate({ _id: id }, req.body)
  res.json({
    mensaje: 'Persona actualizada'
  })
}

// Actualizar Persona Criterio

PersonaCtrl.buscarPersonaCriterio = async (req, res) => {
  const estadoVacuna = req.params.criterio

  try {
    const respuesta = await Persona.find({ estadoVacuna: estadoVacuna })
    res.json(respuesta)
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
}

module.exports = PersonaCtrl
