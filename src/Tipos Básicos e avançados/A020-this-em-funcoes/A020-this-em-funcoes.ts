export function funcao(this: Date, nome: string, age: number): void {
  console.log(this)
  console.log(nome, age)
}

//Tipando o this. O primeiro parâmetro da função não é um argumento e sim a tipagem do this.

funcao.call(new Date(), 'Luiz', 20)
funcao.apply(new Date(), ['Bruno', 20])

//Chamando uma função com o this tipado.
