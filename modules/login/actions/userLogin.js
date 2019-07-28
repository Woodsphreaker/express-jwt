import jwt from 'jsonwebtoken'

export default (req, res) => {
  const { user, pass } = req.body
  const token = jwt.sign('daasd', 'abdc')
  res.send({ user, pass, token })
}
