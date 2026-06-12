import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DB_PATH = join(__dirname, 'mundiales.db')

const db = new Database(DB_PATH)

// Activar WAL para mejor rendimiento en lectura
db.pragma('journal_mode = WAL')

// Crear la tabla si no existe
db.exec(`
  CREATE TABLE IF NOT EXISTS mundiales (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre      TEXT NOT NULL,
    anio        INTEGER NOT NULL,
    sede        TEXT NOT NULL,
    campeon     TEXT NOT NULL,
    subcampeon  TEXT NOT NULL,
    goleador    TEXT NOT NULL,
    equipos     INTEGER NOT NULL,
    imagen      TEXT NOT NULL,
    slug        TEXT NOT NULL UNIQUE,
    resumen     TEXT NOT NULL,
    descripcion TEXT NOT NULL
  )
`)

export default db
