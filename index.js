import express from 'express'
import loadModules from './helpers/loadModules'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

app.set('trust proxy', true)
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use(express.urlencoded({ extended: false }))

// Load all modules (routes)
loadModules(app)

// Load deafaut route
app.get('/', (req, res) => {
  res.send('API Server Running on port 3000')
})

app.listen(3000, () => console.log('server running'))
