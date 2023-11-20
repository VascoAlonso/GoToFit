const Auth = {}
const jwt = require('jsonwebtoken')

Auth.verificarToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json({
      mensaje: 'No estas autoridado'
    })
  }

  const token = req.headers.authorization
  if (token === null) {
    return res.json({
      mensaje: 'No estas autoridado'
    })
  }

  jwt.verify(token, 'Secreto', (error, resultado) => {
    if (error) {
      return res.json({
        mensaje: 'No estas autoridado'
      })
    }
    next()
  })
}

module.exports = Auth
