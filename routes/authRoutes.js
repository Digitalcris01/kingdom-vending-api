const express = require('express');
const router = express.Router();
const { registrarEstablecimiento, login } = require('../controllers/authController');

router.post('/registro', registrarEstablecimiento);
router.post('/login', login);

module.exports = router;