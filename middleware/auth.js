import jwt from 'jsonwebtoken'
import secret from '../config/secrets'

export default (req, res, next) => {
  const token = req.cookies.Authorization

  if (!token) { return res.status(401).send('no token provider') }

  jwt.verify(token, secret.key, (error, decoded) => {
    if (error) { return res.status(401).send('token invalid') }
    next()
  })
}
