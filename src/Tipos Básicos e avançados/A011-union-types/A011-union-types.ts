
function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b

  return `${a}${b}`
}


console.log(addOrConcat(20, 27))
console.log(addOrConcat('51', '52'))
