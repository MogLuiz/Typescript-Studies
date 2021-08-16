type Idade = number

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'

type CorCMYK = 'Ciano' | 'Magenta' | 'Preto'

type CorPreferida = CorRGB | CorCMYK // Cor preferida é a união de tudo que tiver em CorRGB e em CorCMYK


export const pessoa: Pessoa = {

  idade: 20,
  nome: 'Luiz',
  salario: 10000,
}

// É como se fosse protocolo, esse objeto pessoa implementa o contrato Pessoa

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor}
}

// setando pessoa respeitando o princípio da imutabilidade . pegando todos os atributos anteriores e setando apenas a cor preferida.

console.log(setCorPreferida(pessoa, 'Preto'))
