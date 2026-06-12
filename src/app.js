import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import mundiales from './routes/mundiales.js'
import errorHandler from './middlewares/errorHandler.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

// Middlewares
app.use(express.json())

// Archivos estáticos (imágenes)
app.use('/imagenes', express.static(join(__dirname, '..', 'public', 'imagenes')))

// Ruta raíz — información del API
app.get('/', (req, res) => {
  res.json({
    nombre: 'API Copa Mundial FIFA',
    version: '1.0.0',
    descripcion: 'API REST con información de las ediciones de la Copa Mundial de la FIFA',
    rutas: [
      'GET /mundiales',
      'GET /mundiales?include=full',
      'GET /mundial/:slug',
      'GET /campeon/:pais',
      'GET /random',
      'GET /search/:text',
      'GET /imagenes/:archivo'
    ]
  })
})

// Rutas de mundiales
app.use('/', mundiales)

// 404 — Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' })
})

// Manejo de errores global
app.use(errorHandler)

export default app
