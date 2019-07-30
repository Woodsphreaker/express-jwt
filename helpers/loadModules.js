import fs from 'fs'
import path from 'path'
import auth from '../middleware/auth'
const modules = fs.readdirSync(path.join(__dirname, '../modules')).filter(el => el !== 'login')

export default app => {
  for (const mod of modules) {
    app.use(`/${mod}`, auth, require(`../modules/${mod}`))
  }

  // Route does not pass authorization
  app.use(`/login`, require(`../modules/login`))
}
