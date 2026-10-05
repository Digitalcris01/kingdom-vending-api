const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'kingdom_vending_secret_key_2026';

// Simulación de base de datos de usuarios
const usuariosDB = [];

const registrarEstablecimiento = (req, res) => {
    const { nombreNegocio, correo, password, plan } = req.body;

    if (!nombreNegocio || !correo || !password) {
        return res.status(400).json({ ok: false, mensaje: 'Todos los campos son obligatorios.' });
    }

    const nuevoUsuario = {
        id: Date.now(),
        nombreNegocio,
        correo,
        password, // En producción se debe encriptar con bcrypt
        plan: plan || '10000',
        licenciaActiva: true,
        fechaRegistro: new Date().toISOString()
    };

    usuariosDB.push(nuevoUsuario);

    const token = jwt.sign(
        { id: nuevoUsuario.id, correo: nuevoUsuario.correo, negocio: nuevoUsuario.nombreNegocio },
        JWT_SECRET,
        { expiresIn: '24h' }
    );

    res.status(201).json({
        ok: true,
        mensaje: 'Establecimiento registrado y licencia activada exitosamente.',
        token,
        usuario: {
            id: nuevoUsuario.id,
            nombreNegocio: nuevoUsuario.nombreNegocio,
            correo: nuevoUsuario.correo,
            licenciaActiva: nuevoUsuario.licenciaActiva
        }
    });
};

const login = (req, res) => {
    const { correo, password } = req.body;

    const usuario = usuariosDB.find(u => u.correo === correo && u.password === password);

    if (!usuario) {
        return res.status(401).json({ ok: false, mensaje: 'Credenciales inválidas.' });
    }

    const token = jwt.sign(
        { id: usuario.id, correo: usuario.correo, negocio: usuario.nombreNegocio },
        JWT_SECRET,
        { expiresIn: '24h' }
    );

    res.status(200).json({
        ok: true,
        mensaje: 'Inicio de sesión exitoso.',
        token,
        usuario: {
            id: usuario.id,
            nombreNegocio: usuario.nombreNegocio,
            correo: usuario.correo,
            licenciaActiva: usuario.licenciaActiva
        }
    });
};

module.exports = { registrarEstablecimiento, login };