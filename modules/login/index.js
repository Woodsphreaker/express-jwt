import express from 'express'
import userLogin from './actions/userLogin'
const router = express.Router()

router.post('/', userLogin)

module.exports = router
