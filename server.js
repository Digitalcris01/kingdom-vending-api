const conectarBD = require('./config/db.js');
conectarBD(); // Invoca la conexión antes de iniciar las rutas
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const productoRoutes = require('./routes/productoRoutes');
const mesaRoutes = require('./routes/mesaRoutes');
const ventaRoutes = require('./routes/ventaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas de la API Web
app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/mesas', mesaRoutes);
app.use('/api/ventas', ventaRoutes);

// Ruta base de comprobación (Health Check)
app.get('/api', (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Servicio Web API Kingdom Vending POS operando correctamente',
        version: '1.0.0'
    });
});

app.listen(PORT, () => {
    console.log(`[API Kingdom Vending] Servidor ejecutándose en http://localhost:${PORT}`);
});