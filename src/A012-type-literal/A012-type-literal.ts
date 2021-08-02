let x = 10 // let fica do tipo number

const y = 10 // const fica do tipo do valor que é um subtipo de number

const pessoa = {
  nome: 'Luiz' as const, // Agora o nome é do tipo Luiz e não pode ser alterado .
  sobrenome: 'Miranda',
}

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor
}

console.log(escolhaCor('Azul'))


export default 1
