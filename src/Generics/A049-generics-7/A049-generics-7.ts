export function isNumber(value: unknown): value is number { // Sempre que esse boleano for true meu valor vai ser do tipo NUMBER (Predicado de tipos)
  return typeof value === 'number'
}

console.log(isNumber('123'))
console.log(isNumber(123))

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value
    }
    return sum
  }, 0)

  return retorno
}

console.log(soma(10,30,50,10))

console.log(soma(...[1, 'a', 123123, 'b']))

interface qualquerNome <T>{
  data: T[];
  chave: (banana: T) => void;
}


export function Testeasdas<T>({data, chave }: qualquerNome<T>) {
  console.log('qqCoisa')
}

Testeasdas({  data: [   {asd: 'sadasdsa', chaveQQ: 'ValorQQ'}  ], chave: () => {}   } )
