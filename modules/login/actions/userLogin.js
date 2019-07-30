import jwt from 'jsonwebtoken'
import secret from '../../../config/secrets'
import findUsers from '../../../helpers/findUser'

export default (req, res) => {
  const { user, pass } = req.body
  const userData = findUsers(user)
  
  if (!userData) { return res.status(401).send('user not found')}

  if(pass !== userData.pass) { return res.status(401).send('user or password invalid ') }

  const token = jwt.sign({ user }, secret.key, {
    expiresIn: 600
  })
  
  res.cookie('Authorization', `Bearer ${token}`, { maxAge: 360000, httpOnly: true })
  res.send({ token })
}
