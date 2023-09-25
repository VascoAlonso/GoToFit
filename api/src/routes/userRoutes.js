const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController'); // Importa tu controlador

// Rutas para autenticación de usuario
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/forgotpassword', UserController.forgotPassword);
router.post('/resetpassword', UserController.resetPassword);

module.exports = router;