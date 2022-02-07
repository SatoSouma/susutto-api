'use strict'
import express from 'express'
import taskRouter from './routes/tasks'

// Constants
const PORT: number = 8080
const HOST: string = '0.0.0.0'

// App
const app = express()

// task関連
app.use(taskRouter)

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
