
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1)
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor)
}

export function toUpperCase(...args: string[]): string[] { // Posso ter o retorno de uma função como um ARRAY também.
  return args.map((valor) => valor.toUpperCase())
}

const result = multiplicaArgs(1, 2, 3)
const concatenacao = concatenaString('l', 'u', 'i', 'z')
const upper = toUpperCase('l', 'u', 'i', 'z')

console.log(result)
console.log(concatenacao)
console.log(upper)
