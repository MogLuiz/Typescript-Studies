const objetoA: {
  chaveA: string;
  readonly chaveB: string; // Quando eu coloco readonly significa que não posso alterar o valor dessa chave
  chaveC?: string;
  [key: string]: unknown; // Se eu for precisar ao longo do tempo criar mais chaves eu uso uma index signature
} = {
  chaveA: 'Valor a',
  chaveB: 'Valor B'
}

objetoA.chaveA = 'Outro Valor'
objetoA.chaveD = 'Nova Chave'
