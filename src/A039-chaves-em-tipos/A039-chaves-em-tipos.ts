type Veiculo = {
  marca: string;
  ano: number;
}

type car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
}

const carro: car = {
  brand: 'Ford',
  year: 2020,
  name: 'Fusion',
}

console.log(carro)
