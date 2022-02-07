'use strict'

import express from 'express'
import getTaskRouter from './api/taskList'

// Constants
const PORT: number = 8080
const HOST: string = '0.0.0.0'

// App
const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World ~')
})

// Task取得
app.use(getTaskRouter)

// Task登録

// Task削除

// Task修正

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
