import jwt from 'jsonwebtoken'
import secret from '../../../helpers/secrets'

export default (req, res) => {
  const { user, pass } = req.body
  const token = jwt.sign({ user }, secret.key, {
    expiresIn: 3600
  })
  res.cookie('Authorization', token, { maxAge: 3600, httpOnly: true })
  res.send({ user, pass, token })
}
