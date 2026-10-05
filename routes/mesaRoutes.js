const express = require('express');
const router = express.Router();
const { obtenerMesas, actualizarComanda } = require('../controllers/mesaController');
const { verificarToken } = require('../middleware/authMiddleware');

router.get('/', obtenerMesas);
router.put('/:id/comanda', verificarToken, actualizarComanda);

module.exports = router;