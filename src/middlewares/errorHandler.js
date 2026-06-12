/**
 * Middleware de manejo de errores global.
 * Captura cualquier error no controlado y devuelve JSON.
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Error interno del servidor' })
}

export default errorHandler
