type CoresObj = typeof coresObj // typeof = a partir de um objeto eu peguei o tipo completo.
type CoresChaves = keyof CoresObj // keyof = a partir do tipo eu peguei as chaves do meu objeto deixando ele dinâmico.

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
}

function traduzirCor(cor: 'vermelho' | 'verde' | 'azul', cores: CoresObj) {
  return cores[cor]
}

console.log(traduzirCor('vermelho', coresObj))
