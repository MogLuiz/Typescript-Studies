type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }

type Pessoa = TemNome & TemSobrenome & TemIdade // Nesse caso aqui esta funcionando como um AND
                                                // Tem que ter Nome , Sobrenome e idade

const pessoa: Pessoa = {

  nome: 'Luiz',
  sobrenome: 'Henrique',
  idade: 21
}
console.log(pessoa)

// OUTRA FORMA DE UTILIZAR

type AB = 'A' | 'B'
type AC = 'A' | 'C'

type Intersecao = AB & AC // O resultado é a interseção entre os dois tipos . Ou seja o 'A' . Que é o que se repete nesse conjunto








export { pessoa }
