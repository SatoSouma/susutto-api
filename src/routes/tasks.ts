import express from 'express'
import taskController from '../controller/taskController'

const router = express.Router()

router.get('/', taskController.index)
router.post('/create', taskController.store)
router.get('/getAllTask', taskController.getTasks)

export default router
