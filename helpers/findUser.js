import users from '../config/users.json'

export default (userName) => {
  return users.find(({ user } = {}) => user === userName)
}
