'use strict'
import express from 'express'
import taskRouter from './routes/tasks'
import bodyParser from 'body-parser'
import http from 'http'
import socketio from 'socket.io'
import { socketChargeUpdate, socketTaskCreate, socketTaskFix, socketTaskUpdate } from './socket/socketConnect'

// Constants
const PORT = Number(process.env.API_PORT)

// App
const app = express()
const server: http.Server = http.createServer(app)
//socket
const io: socketio.Server = new socketio.Server(server, {
  cors: {
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  },
})

//cors許可
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

// data変換
app.use(bodyParser.json())

// task関連API
app.use(taskRouter)

// socket
io.on('connection', (socket: socketio.Socket) => {
  console.log('connect')
  socketChargeUpdate(socket)
  socketTaskCreate(socket)
  socketTaskUpdate(socket)
  socketTaskFix(socket)
})

server.listen(PORT)

console.log(`Running on http://${PORT}`)
