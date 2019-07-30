import express from 'express'
import list from './actions/list'
// import auth from '../../middleware/auth'
const router = express.Router()

router.get('/', list)

router.get('/:id', list)

// export default router
module.exports = router
