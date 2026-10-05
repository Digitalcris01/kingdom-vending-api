const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'kingdom_vending_secret_key_2026';

const verificarToken = (req, res, next) => {
    const tokenHeader = req.headers['authorization'];

    if (!tokenHeader) {
        return res.status(403).json({ ok: false, mensaje: 'Acceso denegado: Token no proporcionado.' });
    }

    const token = tokenHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ ok: false, mensaje: 'Token inválido o expirado.' });
    }
};

module.exports = { verificarToken };