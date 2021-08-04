// Condicional (que também faz o refinamento do tipo)
const body1 = document.querySelector('body')
if(body1) body1.style.background = 'red'


// Non-null assertion (!)
const body2 = document.querySelector('body')! // Passando a exclamação eu informo que essa constante não é nula
body2.style.background = 'red'


// Type assertion (Ele pega o tipo que foi inferido e fala que essa constante só é do tipo inferido)
const body3 = document.querySelector('body') as HTMLBodyElement
if(body3) body3.style.background = 'red'


// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement


// Subindo tipo na arvore e depois descendo
const body4 = (document.querySelector('body')
