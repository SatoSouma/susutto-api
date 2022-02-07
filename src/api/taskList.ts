import express from 'express'

const router = express.Router()

router.get('/getTask', (req: express.Request, res: express.Response) => {
  res.send('taskliskcjanc')
})

export default router
