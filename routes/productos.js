const express = require('express');
const router = express.Router();
const {Productos} = require('../classProductos/classProductos');
const manejadorProductos = new Productos();

router.get('/productos', (req, res) =>{
    const productos = manejadorProductos.getAll();
    res.send(productos);
    console.log(productos);
});

router.post('/productos', (req, res) =>{
    const producto = manejadorProductos.save(req.body);
    res.send(`Se recibió el producto: ${JSON.stringify(producto)}`);
    // console.log(`Se recibió el producto: ${JSON.stringify(producto)}`);
});

router.get('/productos/:id', (req, res) =>{
    const producto = manejadorProductos.getById(req.params.id);
    res.send(producto);
    console.log(`El producto con el id es: ${JSON.stringify(producto)}`);
});

router.put('/productos/:id', (req, res) =>{
    const producto = manejadorProductos.updateById(req.params.id, req.body);
    res.send((producto === undefined ? `Se actualizó el producto con id ${req.params.id}` : JSON.stringify(producto)));
});

router.delete('/productos/:id', (req, res) =>{
    const producto = manejadorProductos.deleteById(req.params.id);
    res.send((producto === undefined ? `Se eliminó el producto con id ${req.params.id}` : JSON.stringify(producto)));
});

module.exports = router;