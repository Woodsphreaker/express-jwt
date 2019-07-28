import express from 'express'
import list from './actions/list'
const router = express.Router()

router.get('/', list)

router.get('/:id', list)

// export default router
module.exports = router
