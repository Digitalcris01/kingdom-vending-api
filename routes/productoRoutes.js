const express = require('express');
const router = express.Router();
const { obtenerProductos, crearProducto, eliminarProducto } = require('../controllers/productoController');
const { verificarToken } = require('../middleware/authMiddleware');

router.get('/', obtenerProductos);
router.post('/', verificarToken, crearProducto);
router.delete('/:id', verificarToken, eliminarProducto);

module.exports = router;