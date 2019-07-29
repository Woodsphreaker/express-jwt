import express from 'express'
import loadModules from './helpers/loadModules'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
loadModules(app)

// Load deafaut route
app.get('/', (req, res) => {
  res.send('API Server Running on port 3000')
})

app.listen(3000, () => console.log('server running'))
