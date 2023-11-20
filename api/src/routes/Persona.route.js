const { Router } = require('express')
const router = Router()
const PersonaCtrl = require('../controllers/persona.controller')
const Auth = require('../helper/Auth')

router.post('/crear', PersonaCtrl.crear)
router.post('/login', PersonaCtrl.login)
router.get('/listarPersonas', Auth.verificarToken, PersonaCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, PersonaCtrl.listarId)
router.get('/listarCriterio/:criterio', Auth.verificarToken, PersonaCtrl.buscarPersonaCriterio)
router.get('/ListarPersonasCiudad/:id', PersonaCtrl.personaDeUnaCiudad)
router.delete('/eliminar/:id', Auth.verificarToken, PersonaCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificarToken, PersonaCtrl.actualizar)

module.exports = router
