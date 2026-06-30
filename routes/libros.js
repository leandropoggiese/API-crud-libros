const express = require('express');
const router = express.Router();
const ModeloLibro = require('../models/libromodel');

// Ruta para obtener todos los libros
router.get('/libros', async (req, res) => {
    try { 
        const libros = await ModeloLibro.find();
        res.status(200).json(libros);
    } catch (error) {
        console.error('Error al obtener los libros:', error);
        res.status(500).json({ message: 'Error al obtener los libros' });
    }
})

// obtener libro por id
router.get('/libros/:id', async (req, res) => {
    try {
        const libro = await ModeloLibro.findById(req.params.id);
        if (!libro) {
            return res.status(404).json({ message: 'Libro no encontrado' });
        }
        res.status(200).json(libro);
    } catch (error) {
        console.error('Error al obtener el libro:', error);
        res.status(500).json({ message: 'Error al obtener el libro' });
    }
});

//crear nuevo libro
router.post('/libros', async (req, res) => {
    try {
        const nuevoLibro = new ModeloLibro(req.body);
        const libroGuardado = await nuevoLibro.save();
        res.status(201).json(libroGuardado);
    } catch (error) {
        console.error('Error al crear el libro:', error);
        res.status(500).json({ message: 'Error al crear el libro' });  
    }
});