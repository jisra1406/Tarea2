import db from './database.js'

const mundiales = [
  {
    nombre: 'Copa Mundial Uruguay 1930',
    anio: 1930,
    sede: 'Uruguay',
    campeon: 'Uruguay',
    subcampeon: 'Argentina',
    goleador: 'Guillermo Stábile',
    equipos: 13,
    imagen: 'uruguay-1930.jpg',
    slug: 'uruguay-1930',
    resumen: 'El primer Mundial de la historia, ganado por Uruguay como anfitrión.',
    descripcion: 'Primer torneo organizado por la FIFA. Solo 13 selecciones participaron. Uruguay venció a Argentina 4-2 en la final disputada en Montevideo.'
  },
  {
    nombre: 'Copa Mundial Brasil 1950',
    anio: 1950,
    sede: 'Brasil',
    campeon: 'Uruguay',
    subcampeon: 'Brasil',
    goleador: 'Ademir',
    equipos: 13,
    imagen: 'brasil-1950.jpg',
    slug: 'brasil-1950',
    resumen: 'El Maracanazo: Uruguay derrotó a Brasil ante 200 mil espectadores.',
    descripcion: 'Primer Mundial tras la Segunda Guerra Mundial. Se usó formato de grupos en fase final. Uruguay derrotó a Brasil 2-1 en el Maracaná en lo que se conoce como el Maracanazo, una de las mayores sorpresas de la historia.'
  },
  {
    nombre: 'Copa Mundial México 1970',
    anio: 1970,
    sede: 'México',
    campeon: 'Brasil',
    subcampeon: 'Italia',
    goleador: 'Gerd Müller',
    equipos: 16,
    imagen: 'mexico-1970.jpg',
    slug: 'mexico-1970',
    resumen: 'Brasil de Pelé conquistó su tercera Copa del Mundo con fútbol total.',
    descripcion: 'Considerado uno de los mejores Mundiales. Brasil ganó 4-1 a Italia en la final y se quedó con la Copa Jules Rimet de manera permanente al ser tricampeón. Pelé brilló en su último Mundial.'
  },
  {
    nombre: 'Copa Mundial Italia 1990',
    anio: 1990,
    sede: 'Italia',
    campeon: 'Alemania Occidental',
    subcampeon: 'Argentina',
    goleador: 'Salvatore Schillaci',
    equipos: 24,
    imagen: 'italia-1990.jpg',
    slug: 'italia-1990',
    resumen: 'Alemania Occidental ganó con un polémico penal ante Argentina en la final.',
    descripcion: 'Torneo defensivo con muchos empates. Alemania Occidental derrotó a Argentina 1-0 en la final con un gol de penal de Brehme. Fue el último Mundial de Maradona. Destacó el portero camerunés Thomas Nkono.'
  },
  {
    nombre: 'Copa Mundial Brasil 2014',
    anio: 2014,
    sede: 'Brasil',
    campeon: 'Alemania',
    subcampeon: 'Argentina',
    goleador: 'James Rodríguez',
    equipos: 32,
    imagen: 'brasil-2014.jpg',
    slug: 'brasil-2014',
    resumen: 'Alemania goleó 7-1 a Brasil y venció a Argentina en la final.',
    descripcion: 'Brasil sufrió la infame derrota 7-1 ante Alemania en semifinales (el Mineirazo). La final se decidió con un gol de Götze en el tiempo extra. James Rodríguez de Colombia fue el goleador del torneo con 6 goles.'
  },
  {
    nombre: 'Copa Mundial Qatar 2022',
    anio: 2022,
    sede: 'Qatar',
    campeon: 'Argentina',
    subcampeon: 'Francia',
    goleador: 'Kylian Mbappé',
    equipos: 32,
    imagen: 'qatar-2022.jpg',
    slug: 'qatar-2022',
    resumen: 'Argentina campeón tras una final épica ante Francia.',
    descripcion: 'Primer Mundial en Medio Oriente. Argentina ganó en penales su tercer título. La final fue considerada la mejor de la historia: 3-3 al final del tiempo extra con hat-trick de Mbappé. Messi coronó su carrera con el único título que le faltaba.'
  }
]

// Preparar el insert
const insert = db.prepare(`
  INSERT OR IGNORE INTO mundiales
    (nombre, anio, sede, campeon, subcampeon, goleador, equipos, imagen, slug, resumen, descripcion)
  VALUES
    (@nombre, @anio, @sede, @campeon, @subcampeon, @goleador, @equipos, @imagen, @slug, @resumen, @descripcion)
`)

// Ejecutar todos los inserts en una transacción
const insertAll = db.transaction((items) => {
  for (const item of items) {
    insert.run(item)
  }
})

insertAll(mundiales)

console.log(`✅ Base de datos creada y poblada con ${mundiales.length} ediciones del Mundial.`)
