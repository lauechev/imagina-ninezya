import type { DatosYa } from '@/tipos';

export const ya7: DatosYa = {
  nombre: 'Fortalecimiento Familiar del cuidado y la crianza de la niñez',
  imagen: 'ya7',
  ruta: 'fortalecimiento-familiar',
  definicion:
    'Es crucial fortalecer a las familias para proteger y cuidar a la niñez, asegurando vínculos emocionales y cumpliendo normativas como la Declaración Universal de Derechos Humanos. La asistencia a las familias, respaldada por la Convención sobre los Derechos del Niño y la Constitución Nacional, es esencial para la crianza. El Plan Nacional de Desarrollo (2018-2022) destaca la importancia de las familias como garantes de la protección de los niños, requiriendo oportunidades y capacidades para enfrentar su entorno y asegurar el bienestar de todos sus miembros. La familia desempeña un papel crucial en la socialización y protección integral de la niñez.',
  hay_datos: false,
  indicadores: [
    {
      nombre: 'GINI',
      ruta: 'gini',
      archivo: 'ya7-1',
      hay_datos: true,
      explicacion: '',
      definicion: '',
      metodologia: '',
      unidad: '',
      fuente_numerador: '',
      fuente_denominador: '',
      desagregacion: 'Municipal',
      contexto: '',
      interpretacion: '',
    },
    {
      nombre: 'Pobreza Monetaria',
      ruta: 'pobreza-monetaria',
      archivo: 'ya7-2',
      hay_datos: true,
      explicacion: '',
      definicion: '',
      metodologia: '',
      unidad: '',
      fuente_numerador: '',
      fuente_denominador: '',
      desagregacion: 'Municipal',
      contexto: '',
      interpretacion: '',
    },
  ],
};
