// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Henrique',
  idade: 30,
}

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
}

// Required

type PessoaRequired = Required<PessoaProtocol> // Type Required -> transforma tudo que é opcional em obrigatório

// Required

type PessoaPartial = Partial<PessoaRequired> // Partial -> transforma tudo que é obrigatório em opcional

// Readonly

type PessoaReadonly = Readonly<PessoaPartial> // Readonly -> Transforma tudo em readonly, ou seja, não pode ser modificado

// Pick

type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'> // Pick -> Permite escolher quais coisas quero usar dentro do objeto

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Henrique',
  idade: 30,
}


