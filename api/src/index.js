// Requerimos las dependencias necesarias
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('./database')

// configuracion del puerto
app.set('Port', process.env.PORT || 27017)
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: '*' }))

app.use('/persona', require('./routes/Persona.route'))

app.listen(app.get('Port'), () => {
  console.log('Servidor esta escuchando por el puerto', app.get('Port'))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Hubo un error en el servidor')
})
