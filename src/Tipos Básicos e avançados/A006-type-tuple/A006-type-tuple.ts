

const dadosCliente1: readonly [number, string] = [1, 'Luiz'] // o READONLY deixa minha tupla imutável
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Henrique']
const dadosCliente3: [number, string, string?] = [1, 'Luiz']
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Henrique', 'de', 'Jesus', 'Ramos'] //Primeira posição number , 2 string , restante que entrar é string



console.log(dadosCliente1)
console.log(dadosCliente4)
