let productosDB = [
    { id: 101, nombre: 'Cerveza Club Colombia', categoria: 'Bebidas', precio: 5000 },
    { id: 102, nombre: 'Gaseosa 350ml', categoria: 'Bebidas', precio: 3500 },
    { id: 103, nombre: 'Empanada Mixta', categoria: 'Comida Rápida', precio: 3000 },
    { id: 104, nombre: 'Café Tinto Express', categoria: 'Cafetería', precio: 2000 }
];

const obtenerProductos = (req, res) => {
    res.status(200).json({ ok: true, productos: productosDB });
};

const crearProducto = (req, res) => {
    const { nombre, categoria, precio } = req.body;

    if (!nombre || !categoria || !precio) {
        return res.status(400).json({ ok: false, mensaje: 'Faltan datos requeridos del producto.' });
    }

    const nuevoProducto = {
        id: Date.now(),
        nombre,
        categoria,
        precio: Number(precio)
    };

    productosDB.push(nuevoProducto);
    res.status(201).json({ ok: true, mensaje: 'Producto creado exitosamente.', producto: nuevoProducto });
};

const eliminarProducto = (req, res) => {
    const { id } = req.params;
    productosDB = productosDB.filter(p => p.id !== Number(id));
    res.status(200).json({ ok: true, mensaje: 'Producto eliminado correctamente.' });
};

module.exports = { obtenerProductos, crearProducto, eliminarProducto };