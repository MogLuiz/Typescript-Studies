// Essa função não retorna nada mais ela cria um erro que pode parar a minha aplicação se esse erro não for tratado no local que for utilizado.
export function criarErro(): never {
  throw new Error('Erro qualquer')
}

criarErro()
