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

type PessoaRequired = Required<PessoaProtocol> // Type Required transforma tudo que é opcional em obrigatório

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Henrique',
  idade: 30,
}


