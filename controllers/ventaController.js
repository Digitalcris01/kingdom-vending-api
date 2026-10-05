let ventasDB = [];

const registrarVenta = (req, res) => {
    const { mesaId, mesaNombre, metodoPago, total, items } = req.body;

    if (!mesaNombre || !metodoPago || !total) {
        return res.status(400).json({ ok: false, mensaje: 'Faltan parámetros de facturación.' });
    }

    const nuevaFactura = {
        id: 'FACT-' + Math.floor(1000 + Math.random() * 9000),
        mesaNombre,
        metodoPago,
        total: Number(total),
        items: items || [],
        fecha: new Date().toISOString()
    };

    ventasDB.push(nuevaFactura);

    res.status(201).json({
        ok: true,
        mensaje: 'Venta registrada y comprobante generado exitosamente.',
        factura: nuevaFactura
    });
};

const obtenerHistorialVentas = (req, res) => {
    const totalAcumulado = ventasDB.reduce((acc, v) => acc + v.total, 0);
    res.status(200).json({
        ok: true,
        kpi: {
            ventasTotales: totalAcumulado,
            comandasCobradas: ventasDB.length
        },
        ventas: ventasDB
    });
};

module.exports = { registrarVenta, obtenerHistorialVentas };