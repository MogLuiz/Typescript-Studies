function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Henrique',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  }
}

semRetorno('Luiz', 'Henrique', 'de Jesus')
pessoa.exibirNome()

export { pessoa }
