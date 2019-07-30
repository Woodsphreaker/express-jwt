import jwt from 'jsonwebtoken'
import secret from '../config/secrets'

export default (req, res, next) => {
  const hash = req.cookies.Authorization

  if (!hash) { return res.status(401).send({ error: 'no token provider' }) }

  const [schema, token] = hash.split(' ')

  if (schema !== 'Bearer') { return res.status(401).send({ error: 'unexpected token format' }) }

  jwt.verify(token, secret.key, (error, decoded) => {
    if (error) { return res.status(401).send({ error: 'token invalid' }) }
    next()
  })
}
