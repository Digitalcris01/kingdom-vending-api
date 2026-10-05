let mesasDB = [
    { id: 1, nombre: 'Mesa 1', zona: 'ZONA DE BAR', estado: 'disponible', items: [] },
    { id: 2, nombre: 'Mesa 2', zona: 'ZONA DE BAR', estado: 'disponible', items: [] },
    { id: 3, nombre: 'Mesa 3', zona: 'ZONA DE ONCES', estado: 'disponible', items: [] },
    { id: 4, nombre: 'Mesa 4', zona: 'CALLE', estado: 'disponible', items: [] }
];

const obtenerMesas = (req, res) => {
    res.status(200).json({ ok: true, mesas: mesasDB });
};

const actualizarComanda = (req, res) => {
    const { id } = req.params;
    const { items, estado } = req.body;

    const mesa = mesasDB.find(m => m.id === Number(id));
    if (!mesa) {
        return res.status(404).json({ ok: false, mensaje: 'Mesa no encontrada.' });
    }

    if (items !== undefined) mesa.items = items;
    if (estado !== undefined) mesa.estado = estado;

    res.status(200).json({ ok: true, mensaje: 'Comanda actualizada exitosamente.', mesa });
};

module.exports = { obtenerMesas, actualizarComanda };