const express = require('express');
const app = express();
const dbconnect = require('./config/db'); // aca se importa la funcion de coneccion a al bd
const libroRoutes = require('./routes/libros'); // Importar las rutas de libros


app.use(express.json());
app.use( libroRoutes); // Usar las rutas de libros con el prefijo /api

// Rutas 
app.get('/', (req, res) => {
    res.send('Bienvenidos a la API de libros!');
});


//probar la conecciona la bd y al servidor
const PORT = process.env.PORT || 3000;

dbconnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}) .catch((error) => {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1); // Salir del proceso con un código de error
});

