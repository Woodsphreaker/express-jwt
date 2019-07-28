import fs from 'fs'
import path from 'path'
const modules = fs.readdirSync(path.join(__dirname, '../modules'))

export default app => {
  for (const mod of modules) {
    app.use(`/${mod}`, require(`../modules/${mod}`))
  }
}
