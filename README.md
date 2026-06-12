# API REST — Copa Mundial de la FIFA

API REST construida con **Node.js**, **Express**, **SQLite** y **Zod** para consultar información sobre las ediciones de la Copa Mundial de la FIFA.

## Tecnologías

- **Node.js** con módulos ESM (`import`/`export`)
- **Express** — framework HTTP
- **better-sqlite3** — base de datos SQLite (síncrona)
- **Zod** — validación de parámetros de entrada

## Requisitos

- Node.js v18 o superior

## Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Poblar la base de datos (crear tablas + insertar datos)
npm run seed

# 3. Iniciar el servidor
npm start

# O en modo desarrollo (recarga automática)
npm run dev
```

El servidor queda disponible en: `http://localhost:4321`

## Rutas disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Información del API |
| GET | `/mundiales` | Lista todas las ediciones (solo nombre y slug) |
| GET | `/mundiales?include=full` | Lista todas las ediciones con todos los campos |
| GET | `/mundial/:slug` | Detalle de una edición por slug |
| GET | `/campeon/:pais` | Slugs de las ediciones ganadas por un país |
| GET | `/random` | Edición aleatoria |
| GET | `/search/:text` | Búsqueda por texto (mínimo 3 caracteres) |
| GET | `/imagenes/*` | Imágenes de cada edición |

## Códigos de respuesta

| Código | Descripción |
|--------|-------------|
| 200 | Petición exitosa |
| 400 | Error de validación (Zod) |
| 404 | Recurso no encontrado |

## Ejemplos de uso (con xh / httpie)

```bash
xh GET :4321/mundiales
xh GET :4321/mundiales include==full
xh GET :4321/mundial/qatar-2022
xh GET :4321/mundial/inexistente    # -> 404 JSON
xh GET :4321/campeon/Argentina
xh GET :4321/random
xh GET :4321/search/final
xh GET :4321/search/ab              # -> 400 JSON (mínimo 3 caracteres)
```

## Estructura del proyecto

```
Tarea2/
├── public/
│   └── imagenes/          # Imágenes de cada edición del Mundial
├── src/
│   ├── db/
│   │   ├── database.js    # Conexión SQLite con better-sqlite3
│   │   └── seed.js        # Crea las tablas e inserta los datos
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── routes/
│   │   └── mundiales.js   # Todas las rutas de la API
│   ├── app.js             # Configuración de Express
│   └── server.js          # Punto de entrada
├── .gitignore
├── package.json
├── README.md
└── REFERENCIAS.md
```
