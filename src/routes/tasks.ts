import express from 'express'
import taskController from '../controller/taskController'

const router = express.Router()

router.get('/', taskController.index)
router.post('/create', taskController.store)
router.get('/getAllTask', taskController.getTasks)
router.put('/taskCharge', taskController.putCharge)
router.put('/putStatus', taskController.updateStatus)
router.get('/getAdminTask', taskController.getAdminTasks)
router.post('/login', taskController.login)

export default router
