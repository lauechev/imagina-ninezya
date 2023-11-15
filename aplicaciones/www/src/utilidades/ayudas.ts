//import { escalaColores } from '@enflujo/alquimia';

/// PRUEBA ///

/**
 * Convierte un valor de una escala a otra.
 *
 * @param valor Valor que se quiere convertir
 * @param escalaBaseMin Valor mínimo de la escala inicial.
 * @param escalaBaseMax Valor máximo de la escala inicial.
 * @param escalaDestinoMin Valor mínimo de la escala final.
 * @param escalaDestinoMax Valor máximo de la escala final.
 * @returns Valor convertido a la nueva escala.
 */
export const convertirEscala = (
  valor: number,
  escalaBaseMin: number,
  escalaBaseMax: number,
  escalaDestinoMin: number,
  escalaDestinoMax: number
): number => {
  return (
    ((valor - escalaBaseMin) * (escalaDestinoMax - escalaDestinoMin)) / (escalaBaseMax - escalaBaseMin) +
    escalaDestinoMin
  );
};

export const hexARGB = (valor: string): number[] | null => {
  valor = valor.includes('#') ? valor.trim().replace('#', '') : valor.trim();

  if (valor.length === 3) {
    valor = valor[0] + valor[0] + valor[1] + valor[1] + valor[2] + valor[2];
  }

  if (valor.length != 6) {
    console.log(`No se puede convertir el color ${valor}`);
  }

  const color = valor.match(/.{1,2}/g);
  if (color) {
    const rgb = [parseInt(color[0], 16), parseInt(color[1], 16), parseInt(color[2], 16)];

    return rgb;
  }

  return null;
};

/**
 * Convierte una escala de valores a una escala de colores y mapea el
 * valor ingresado al color correspondiente.
 * @param valorMin Valor mínimo de la escala que se quiere mapear.
 * @param valorMax Valor máximo de la escala que se quiere mapear.
 * @param color1 Color inicial de la escala en hexadecimal.
 * @param color2 Color central.
 * @param color3 Color final de la escala en hexadecimal.
 * @returns
 */
export const escalaColores = (valorMin: number, valorMax: number, color1: string, color2: string, color3: string) => {
  const colorMin = hexARGB(color1);
  const colorMed = hexARGB(color2);
  const colorMax = hexARGB(color3);
  const valorMed = (valorMin + valorMax) / 2;

  const [rMin, gMin, bMin] = colorMin ? colorMin : [255, 255, 255];
  const [rMed, gMed, bMed] = colorMed ? colorMed : [127, 127, 127];
  const [rMax, gMax, bMax] = colorMax ? colorMax : [0, 0, 0];
  /**
   * @param {number} valor Cualquier número de la escala que se quiere mapear.
   */
  return (valor: number) => {
    let r: number;
    let g: number;
    let b: number;
    if (valor <= valorMed) {
      r = convertirEscala(valor, valorMin, valorMed, rMin, rMed);
      g = convertirEscala(valor, valorMin, valorMed, gMin, gMed);
      b = convertirEscala(valor, valorMin, valorMed, bMin, bMed);
    } else {
      r = convertirEscala(valor, valorMed, valorMax, rMed, rMax);
      g = convertirEscala(valor, valorMed, valorMax, gMed, gMax);
      b = convertirEscala(valor, valorMed, valorMax, bMed, bMax);
    }

    return `rgb(${r},${g},${b})`;
  };
};

export const aleatorioFraccion = (min: number, max: number) => Math.random() * (max - min) + min;

export function calcularPorcentaje(valor: number, porcentaje: number) {
  return valor * (porcentaje / 100);
}

export const color = escalaColores(0, 100, '#ff0000', 'ffffff', '#00ff00');

export const porcentajeAPixeles = (porcentaje: number, total: number) => (porcentaje / 100) * total;

export async function pedirDatos<Respuesta>(url: string, config: RequestInit = {}): Promise<Respuesta> {
  const res = await fetch(url, config);
  const datos = await res.json();
  return datos as Respuesta;
}
