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

// Passando uma chave apenas como Readonly

type PassaPraReadonly = Pick<PessoaProtocol, Exclude<keyof PessoaProtocol, 'nome'>> & {
  readonly nome: string;
}


const objeto2: PassaPraReadonly = {
  nome: 'Luiz',
  sobrenome: 'Henrique',
  idade: 30,
}




// Extract e Exclude

type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

type TipoExclude = Exclude<ABC, CDE> // Exclude -> Computa tudo que está em ABC que não está em CDE. Vai excluir os tipos que estão repetidos

type TipoExtract = Extract<ABC, CDE> // Extract -> Computa os tipos repetidos.

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
}

type AccountApi = {
  id: string;
  nome: string;
  idade: number;
}

const accountMongo: AccountMongo = {
  _id: 'asdf8sdf7d',
  nome: 'Luiz',
  idade: 30,
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo

  return { ...accountData, id: _id }
}

const accountApi = mapAccount(accountMongo)
console.log(accountApi)
