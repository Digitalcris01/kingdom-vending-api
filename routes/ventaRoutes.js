const express = require('express');
const router = express.Router();
const { registrarVenta, obtenerHistorialVentas } = require('../controllers/ventaController');
const { verificarToken } = require('../middleware/authMiddleware');

router.post('/', verificarToken, registrarVenta);
router.get('/', verificarToken, obtenerHistorialVentas);

module.exports = router;