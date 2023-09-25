const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });

// Rutas
const userRoutes = require('./routes/userRoutes'); // Importa tus rutas
app.use('/users', userRoutes); // Asigna tus rutas a un prefijo, por ejemplo '/users'

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});