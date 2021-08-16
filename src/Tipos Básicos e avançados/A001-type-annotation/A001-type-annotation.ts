// Tipos básicos

let nome: string = 'luiz'
let idade: number = 30
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer symbol')
//let big: bigint = 10n // big INT


// Arrays

let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3]

let arrayDeStringOuNumber: Array<string | number> = [1, 2, 3, "luiz"]

// Objetos

let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 21,
  nome: "Luiz"
}

console.log(pessoa.nome)


// Funçoes

function soma(x: number, y: number): number {
  return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y // A função só vem depois do sinal de igual , antes disso é a tipagem das
                                                                // variáveis e depois a tipagem da função e só depois do "=" que vem a função.
