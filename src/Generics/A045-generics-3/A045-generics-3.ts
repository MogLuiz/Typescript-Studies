
interface PessoaProtocolo<T, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T, U> = {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Henrique',
  idade: 21
}

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 21
}

const aluno3: PessoaProtocolo2<string, number> = {
  nome: 'luizin',
  sobrenome: 'dú grau',
  idade: 21
}

console.log(aluno1)
console.log(aluno2)
console.log(aluno3)
