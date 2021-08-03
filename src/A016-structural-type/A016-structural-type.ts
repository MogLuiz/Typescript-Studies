type User = { username: string, password: string }

type VerifyUserFn = ( user: User, recibValue: User) => boolean

const verifyUser: VerifyUserFn = (user, recibValue) => {
  return (
    user.username === recibValue.username && user.password === recibValue.password
  )
}

const bdUSer = { username: 'joao', password: '123456' }
const recibUser = { username: 'joao', password: '123456' }

const loggedIn = verifyUser(bdUSer, recibUser)

console.log(loggedIn)
