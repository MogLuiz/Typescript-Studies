import isEmail from 'validator/lib/isEmail'

const SHOW_ERROR_MESSAGES = 'show-error-message'

const form = document.querySelector('.form') as HTMLFormElement
const username = document.querySelector('.username') as HTMLInputElement
const email = document.querySelector('.email') as HTMLInputElement
const password = document.querySelector('.password') as HTMLInputElement
const password2 = document.querySelector('.password2') as HTMLInputElement

form.addEventListener('submit', function (event: Event) {

  event.preventDefault()

  hideErrorMessages(this)

  checkForEmptyFields(username, email, password, password2)

  checkEmail(email)

  checkEqualsPasswords(password, password2)
})


function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if(!input.value) showErrorMessage(input, 'Campo Obrigatório!')
  })
}

function checkEmail(input: HTMLInputElement): void {
  if(!isEmail(input.value)) showErrorMessage(input, 'Email inválido')
}


function checkEqualsPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'A senha precisa ser igual')
    showErrorMessage(password2, 'A senha precisa ser igual')
  }
}


function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES)
  .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES))
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {

  const formFields = input.parentElement as HTMLDivElement //Buscando o elemento pai, ou seja a div com form-field

  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement

  errorMessage.innerText = msg

  formFields.classList.add(SHOW_ERROR_MESSAGES)

}

