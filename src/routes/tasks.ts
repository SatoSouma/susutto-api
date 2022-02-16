import express from 'express'
import taskController from '../controller/taskController'

const router = express.Router()

router.get('/', taskController.index)
router.post('/create', taskController.store)
router.get('/getAllTask', taskController.getTasks)
router.put('/taskCharge', taskController.putCharge)

export default router
