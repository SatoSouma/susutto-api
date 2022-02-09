'use strict'
import express from 'express'
import taskRouter from './routes/tasks'

// Constants
const PORT: number = 8080
const HOST: string = '0.0.0.0'

// App
const app = express()

//cors許可
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Request-Method', '*')
    next()
  }
)

// data変換
app.use(express.json({ extended: true }))

// task関連API
app.use(taskRouter)

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
