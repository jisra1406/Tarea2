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
    nombre: 'Copa Mundial Francia 1938',
    anio: 1938,
    sede: 'Francia',
    campeon: 'Italia',
    subcampeon: 'Hungría',
    goleador: 'Leônidas',
    equipos: 15,
    imagen: 'francia-1938.jfif',
    slug: 'francia-1938',
    resumen: 'Italia bicampeón en un torneo marcado por tensiones políticas antes de la guerra.',
    descripcion: 'Último torneo antes de la Segunda Guerra Mundial. Italia defendió su título venciendo a Hungría 4-2 en la final disputada en París.'
  },
  {
    nombre: 'Copa Mundial Brasil 1950',
    anio: 1950,
    sede: 'Brasil',
    campeon: 'Uruguay',
    subcampeon: 'Brasil',
    goleador: 'Ademir',
    equipos: 13,
    imagen: 'brasil-1950.jfif',
    slug: 'brasil-1950',
    resumen: 'El Maracanazo: Uruguay derrotó a Brasil ante 200 mil espectadores.',
    descripcion: 'Primer Mundial tras la Segunda Guerra Mundial. Se usó formato de grupos en fase final. Uruguay derrotó a Brasil 2-1 en el Maracaná en lo que se conoce como el Maracanazo.'
  },
  {
    nombre: 'Copa Mundial Suiza 1954',
    anio: 1954,
    sede: 'Suiza',
    campeon: 'Alemania Federal',
    subcampeon: 'Hungría',
    goleador: 'Sándor Kocsis',
    equipos: 16,
    imagen: 'suiza-1954.jfif',
    slug: 'suiza-1954',
    resumen: 'El Milagro de Berna: Alemania derrotó a la legendaria Hungría.',
    descripcion: 'Alemania Occidental ganó su primer título mundial al derrotar 3-2 a Hungría en la final tras remontar un 2-0 adverso.'
  },
  {
    nombre: 'Copa Mundial Suecia 1958',
    anio: 1958,
    sede: 'Suecia',
    campeon: 'Brasil',
    subcampeon: 'Suecia',
    goleador: 'Just Fontaine',
    equipos: 16,
    imagen: 'suecia-1958.jfif',
    slug: 'suecia-1958',
    resumen: 'La aparición de Pelé y el récord de 13 goles de Just Fontaine.',
    descripcion: 'Brasil ganó su primera Copa del Mundo. Pelé, con 17 años, deslumbró al mundo anotando dos goles en la final contra Suecia (5-2). Fontaine impuso una marca histórica de 13 goles.'
  },
  {
    nombre: 'Copa Mundial Chile 1962',
    anio: 1962,
    sede: 'Chile',
    campeon: 'Brasil',
    subcampeon: 'Checoslovaquia',
    goleador: 'Garrincha',
    equipos: 16,
    imagen: 'chile-1962.jfif',
    slug: 'chile-1962',
    resumen: 'Brasil bicampeón con un juego brillante de Garrincha ante la lesión de Pelé.',
    descripcion: 'Torneo marcado por un juego físico y la lesión temprana de Pelé. Garrincha asumió el liderazgo del equipo y guió a Brasil a su segundo título tras vencer 3-1 a Checoslovaquia.'
  },
  {
    nombre: 'Copa Mundial Inglaterra 1966',
    anio: 1966,
    sede: 'Inglaterra',
    campeon: 'Inglaterra',
    subcampeon: 'Alemania Federal',
    goleador: 'Eusébio',
    equipos: 16,
    imagen: 'inglaterra-1966.png',
    slug: 'inglaterra-1966',
    resumen: 'Inglaterra campeona en casa con el polémico gol fantasma en la final.',
    descripcion: 'La selección anfitriona se coronó campeona del mundo por primera vez al vencer 4-2 a Alemania Occidental en la prórroga con el famoso triplete de Geoff Hurst.'
  },
  {
    nombre: 'Copa Mundial México 1970',
    anio: 1970,
    sede: 'México',
    campeon: 'Brasil',
    subcampeon: 'Italia',
    goleador: 'Gerd Müller',
    equipos: 16,
    imagen: 'mexico-1970.jfif',
    slug: 'mexico-1970',
    resumen: 'Brasil de Pelé conquistó su tercera Copa del Mundo con fútbol total.',
    descripcion: 'Considerado uno de los mejores Mundiales de la historia. Brasil ganó 4-1 a Italia en la final y se quedó con la Copa Jules Rimet de manera permanente.'
  },
  {
    nombre: 'Copa Mundial Alemania 1974',
    anio: 1974,
    sede: 'Alemania Federal',
    campeon: 'Alemania Federal',
    subcampeon: 'Países Bajos',
    goleador: 'Grzegorz Lato',
    equipos: 16,
    imagen: 'alemania-1974.jfif',
    slug: 'alemania-1974',
    resumen: 'El nacimiento del Fútbol Total holandés y la consagración de Beckenbauer.',
    descripcion: 'La "Naranja Mecánica" de Johan Cruyff deslumbró al mundo, pero Alemania Occidental, liderada por Franz Beckenbauer y Gerd Müller, se impuso en la final por 2-1.'
  },
  {
    nombre: 'Copa Mundial Argentina 1978',
    anio: 1978,
    sede: 'Argentina',
    campeon: 'Argentina',
    subcampeon: 'Países Bajos',
    goleador: 'Mario Kempes',
    equipos: 16,
    imagen: 'argentina-1978.png',
    slug: 'argentina-1978',
    resumen: 'Argentina conquistó su primer título mundial en medio de un clima político complejo.',
    descripcion: 'Liderada por la efectividad goleadora de Mario Kempes, la albiceleste venció 3-1 a Holanda en el tiempo extra en la final disputada en Buenos Aires.'
  },
  {
    nombre: 'Copa Mundial España 1982',
    anio: 1982,
    sede: 'España',
    campeon: 'Italia',
    subcampeon: 'Alemania Federal',
    goleador: 'Paolo Rossi',
    equipos: 24,
    imagen: 'españa-1982.jfif',
    slug: 'espana-1982',
    resumen: 'El renacer de Italia gracias a los goles salvadores de Paolo Rossi.',
    descripcion: 'Primer mundial con 24 selecciones. Italia derrotó 3-1 a Alemania Occidental en la final. Paolo Rossi fue el héroe italiano marcando 6 goles en el torneo.'
  },
  {
    nombre: 'Copa Mundial México 1986',
    anio: 1986,
    sede: 'México',
    campeon: 'Argentina',
    subcampeon: 'Alemania Federal',
    goleador: 'Gary Lineker',
    equipos: 24,
    imagen: 'mexico-1986.jfif',
    slug: 'mexico-1986',
    resumen: 'El mundial de Maradona y la consagración albiceleste.',
    descripcion: 'Diego Maradona firmó una actuación legendaria, incluyendo la "Mano de Dios" y el "Gol del Siglo" ante Inglaterra. Argentina venció 3-2 a Alemania Federal en la final.'
  },
  {
    nombre: 'Copa Mundial Italia 1990',
    anio: 1990,
    sede: 'Italia',
    campeon: 'Alemania Occidental',
    subcampeon: 'Argentina',
    goleador: 'Salvatore Schillaci',
    equipos: 24,
    imagen: 'italia-1990.png',
    slug: 'italia-1990',
    resumen: 'Alemania Occidental ganó con un polémico penal ante Argentina en la final.',
    descripcion: 'Torneo defensivo con muchos empates. Alemania Occidental derrotó a Argentina 1-0 en la final con un gol de penal de Brehme.'
  },
  {
    nombre: 'Copa Mundial Francia 1998',
    anio: 1998,
    sede: 'Francia',
    campeon: 'Francia',
    subcampeon: 'Brasil',
    goleador: 'Davor Šuker',
    equipos: 32,
    imagen: 'francia-1998.jfif',
    slug: 'francia-1998',
    resumen: 'Francia se coronó campeona por primera vez de la mano de Zinedine Zidane.',
    descripcion: 'Primer mundial con 32 selecciones. En la final, Francia goleó 3-0 a Brasil en Saint-Denis con dos goles de cabeza de Zidane.'
  },
  {
    nombre: 'Copa Mundial Corea-Japón 2002',
    anio: 2002,
    sede: 'Corea del Sur y Japón',
    campeon: 'Brasil',
    subcampeon: 'Alemania',
    goleador: 'Ronaldo',
    equipos: 32,
    imagen: 'corea-japon-2002.png',
    slug: 'corea-japon-2002',
    resumen: 'La redención de Ronaldo y el pentacampeonato de Brasil en el primer Mundial en Asia.',
    descripcion: 'Coorganizado por primera vez. Brasil ganó todos sus partidos, venciendo 2-0 a Alemania en la final con dos goles del renacido Ronaldo "El Fenómeno".'
  },
  {
    nombre: 'Copa Mundial Alemania 2006',
    anio: 2006,
    sede: 'Alemania',
    campeon: 'Italia',
    subcampeon: 'Francia',
    goleador: 'Miroslav Klose',
    equipos: 32,
    imagen: 'alemania-2006.png',
    slug: 'alemania-2006',
    resumen: 'Italia tetracampeona y el último partido en la carrera de Zidane.',
    descripcion: 'Recordado por el cabezazo de Zidane a Materazzi en la final. Italia se impuso 5-3 en los penaltis tras empatar 1-1 en los 120 minutos.'
  },
  {
    nombre: 'Copa Mundial Sudáfrica 2010',
    anio: 2010,
    sede: 'Sudáfrica',
    campeon: 'España',
    subcampeon: 'Países Bajos',
    goleador: 'Thomas Müller',
    equipos: 32,
    imagen: 'sudafrica-2010.jfif',
    slug: 'sudafrica-2010',
    resumen: 'El primer mundial en tierras africanas consagró el tiquitaca de España.',
    descripcion: 'España se coronó campeona del mundo por primera vez gracias al agónico gol de Andrés Iniesta en el minuto 116 del tiempo extra contra los Países Bajos.'
  },
  {
    nombre: 'Copa Mundial Brasil 2014',
    anio: 2014,
    sede: 'Brasil',
    campeon: 'Alemania',
    subcampeon: 'Argentina',
    goleador: 'James Rodríguez',
    equipos: 32,
    imagen: 'brasil-2014.jfif',
    slug: 'brasil-2014',
    resumen: 'Alemania goleó 7-1 a Brasil y venció a Argentina en la final.',
    descripcion: 'Brasil sufrió la infame derrota 7-1 ante Alemania en semifinales. La final se decidió con un gol de Götze en el tiempo extra.'
  },
  {
    nombre: 'Copa Mundial Rusia 2018',
    anio: 2018,
    sede: 'Rusia',
    campeon: 'Francia',
    subcampeon: 'Croacia',
    goleador: 'Harry Kane',
    equipos: 32,
    imagen: 'rusia-2018.jfif',
    slug: 'rusia-2018',
    resumen: 'Francia bicampeona del mundo con una brillante generación joven liderada por Mbappé.',
    descripcion: 'Francia se consagró tras vencer 4-2 a la sorpresiva Croacia en una final con muchos goles disputada en Moscú.'
  },
  {
    nombre: 'Copa Mundial Qatar 2022',
    anio: 2022,
    sede: 'Qatar',
    campeon: 'Argentina',
    subcampeon: 'Francia',
    goleador: 'Kylian Mbappé',
    equipos: 32,
    imagen: 'qatar-2022.jfif',
    slug: 'qatar-2022',
    resumen: 'Argentina campeón tras una final épica ante Francia.',
    descripcion: 'Primer Mundial en Medio Oriente. Argentina ganó en penales su tercer título. La final fue considerada la mejor de la historia: 3-3 y definición por penaltis.'
  },
  {
    nombre: 'Copa Mundial Mundial 2026',
    anio: 2026,
    sede: 'Canadá, EE.UU. y México',
    campeon: 'Por definir',
    subcampeon: 'Por definir',
    goleador: 'Por definir',
    equipos: 48,
    imagen: 'mundial-2026.png',
    slug: 'mundial-2026',
    resumen: 'La primera edición con 48 selecciones participantes y tres sedes coorganizadoras.',
    descripcion: 'Primera vez en la historia que se coorganiza el mundial en tres países de Norteamérica, expandiéndose a 48 equipos y un formato de grupos modificado.'
  }
]

// Limpiar la tabla antes de insertar
db.exec('DELETE FROM mundiales')

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

console.log(`✅ Base de datos recreada y poblada con ${mundiales.length} ediciones del Mundial.`)
