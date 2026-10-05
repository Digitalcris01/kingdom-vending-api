# Kingdom Vending POS — API REST Web Services

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![Express](https://img.shields.io/badge/Express-v4.x-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![SENA](https://img.shields.io/badge/SENA-ADSO-green)

Servicios Web API REST desarrollados para el sistema de punto de venta y gestión de comandas **Kingdom Vending POS**. Evidencia de desempeño correspondiente a **GA7-220501096-AA5-EV03: Diseño y desarrollo de servicios web – proyecto**.

---

## 📋 Tabla de Contenidos
1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Arquitectura y Estructura](#arquitectura-y-estructura)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación y Configuración](#instalación-y-configuración)
5. [Variables de Entorno](#variables-de-entorno)
6. [Endpoints de la API](#endpoints-de-la-api)
7. [Autor y Datos de Entrega](#autor-y-datos-de-entrega)

---

## 📖 Descripción del Proyecto
La API de Kingdom Vending proporciona la capa backend necesaria para gestionar operaciones comerciales en tiempo real para establecimientos gastronómicos y de venta. Permite el control de autenticación mediante tokens JWT, la gestión del catálogo de productos, el monitoreo e interactividad de comanda por mesas en distintas zonas y la emisión/registro de facturas de venta.

---

## 📁 Arquitectura y Estructura
El proyecto está construido bajo el patrón arquitectónico **MVC (Modelo-Vista-Controlador)** enfocado exclusivamente en servicios REST API:

```text
kingdom-vending-api/
├── config/
│   └── db.js                 # Conexión a Base de Datos
├── controllers/
│   ├── authController.js     # Autenticación y licencias
│   ├── productoController.js # Catálogo de productos
│   ├── mesaController.js     # Gestión de mesas y comandas
│   └── ventaController.js    # Facturación y reportes
├── middleware/
│   └── authMiddleware.js     # Verificación de JWT
├── routes/
│   ├── authRoutes.js
│   ├── productoRoutes.js
│   ├── mesaRoutes.js
│   └── ventaRoutes.js
├── .gitignore
├── package.json
├── README.md
└── server.js                 # Punto de entrada de la aplicación