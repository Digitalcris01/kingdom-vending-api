// config/db.js
const mongoose = require('mongoose');

/**
 * Función para gestionar la conexión asíncrona a la base de datos NoSQL (MongoDB Atlas)
 */
const conectarBD = async () => {
    try {
        // La URI de conexión se obtiene desde la variable de entorno o una conexión local/de pruebas
        const dbURI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/kingdom_vending_db';

        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('[Base de Datos] Conexión establecida exitosamente con MongoDB');
    } catch (error) {
        console.error('[Error Base de Datos] Fallo en la conexión:', error.message);
        // Si no se logra conectar en producción, detiene la ejecución de la API
        process.exit(1);
    }
};

module.exports = conectarBD;