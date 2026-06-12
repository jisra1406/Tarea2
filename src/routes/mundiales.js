import { Router } from 'express'
import { z } from 'zod'
import db from '../db/database.js'

const router = Router()

// Schemas Zod
const SlugSchema   = z.object({ slug: z.string().min(1) })
const PaisSchema   = z.object({ pais: z.string().min(1) })
const SearchSchema = z.object({ text: z.string().min(3, 'El texto debe tener al menos 3 caracteres') })

// Helper para extraer el primer mensaje de error de Zod
const zodError = (result) => result.error.issues[0]?.message ?? 'Error de validación'

// ─── GET /mundiales ─────────────────────────────────────────────────────────
// Sin query param → [{ nombre, slug }]
// Con ?include=full → array completo
router.get('/mundiales', (req, res) => {
  const full = req.query.include === 'full'

  const rows = full
    ? db.prepare('SELECT * FROM mundiales ORDER BY anio ASC').all()
    : db.prepare('SELECT nombre, slug FROM mundiales ORDER BY anio ASC').all()

  res.json(rows)
})

// ─── GET /mundial/:slug ──────────────────────────────────────────────────────
router.get('/mundial/:slug', (req, res) => {
  const result = SlugSchema.safeParse(req.params)
  if (!result.success) {
    return res.status(400).json({ error: zodError(result) })
  }

  const { slug } = result.data
  const mundial = db.prepare('SELECT * FROM mundiales WHERE slug = ?').get(slug)

  if (!mundial) {
    return res.status(404).json({ error: 'Mundial no encontrado' })
  }

  res.json(mundial)
})

// ─── GET /campeon/:pais ──────────────────────────────────────────────────────
// Devuelve { pais, ediciones: ["slug1", "slug2"] }
router.get('/campeon/:pais', (req, res) => {
  const result = PaisSchema.safeParse(req.params)
  if (!result.success) {
    return res.status(400).json({ error: zodError(result) })
  }

  const { pais } = result.data
  const rows = db.prepare(
    'SELECT slug FROM mundiales WHERE campeon = ? ORDER BY anio ASC'
  ).all(pais)

  if (rows.length === 0) {
    return res.status(404).json({ error: `No se encontraron ediciones ganadas por ${pais}` })
  }

  res.json({
    pais,
    ediciones: rows.map(r => r.slug)
  })
})

// ─── GET /random ─────────────────────────────────────────────────────────────
router.get('/random', (req, res) => {
  const mundial = db.prepare(
    'SELECT * FROM mundiales ORDER BY RANDOM() LIMIT 1'
  ).get()

  res.json(mundial)
})

// ─── GET /search/:text ───────────────────────────────────────────────────────
// Busca en: nombre, resumen, descripcion
// Mínimo 3 caracteres (Zod → 400)
router.get('/search/:text', (req, res) => {
  const result = SearchSchema.safeParse(req.params)
  if (!result.success) {
    return res.status(400).json({ error: zodError(result) })
  }

  const { text } = result.data
  const patron = `%${text}%`

  const rows = db.prepare(`
    SELECT * FROM mundiales
    WHERE nombre      LIKE ?
       OR resumen     LIKE ?
       OR descripcion LIKE ?
    ORDER BY anio ASC
  `).all(patron, patron, patron)

  res.json(rows)
})

export default router

