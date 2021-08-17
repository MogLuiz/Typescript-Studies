
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave]

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina1', 'Vacina2']
}

const vacinas = obterChave(animal, 'cor')
const vacinas = obterChave(animal, 'vacinas')
