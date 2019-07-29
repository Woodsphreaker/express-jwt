import express from 'express'
import list from './actions/list'
import auth from '../../middleware/auth'
const router = express.Router()

router.get('/', auth, list)

router.get('/:id', auth, list)

// export default router
module.exports = router
