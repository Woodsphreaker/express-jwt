import express from 'express'
import loadModules from './helpers/loadModules'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
loadModules(app)

// Load deafaut route
app.get('/', (req, res) => {
  res.send('API Server Running on port 3000')
})

app.listen(3000, () => console.log('server running'))
