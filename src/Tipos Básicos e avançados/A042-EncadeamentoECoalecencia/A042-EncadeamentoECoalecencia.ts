// Encadeamento opcional e Operador de coelescência nula

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo : "Eu sou um título",
  texto : "Eu sou um texto",
  // data: new Date()
}

console.log(documento.data?.toDateString() ?? 'Vish, não existe Data')
