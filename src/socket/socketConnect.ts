import socketio from 'socket.io'
import tasks from '../models/tasks'

export function socketChargeUpdate(socket: socketio.Socket) {
  socket.on('chup', (data) => {
    console.log('chup 通過')
    console.log(data)
    try {
      tasks.putCharge(data)
      socket.emit('chResult', { message: true })
    } catch {
      socket.emit('chResult', { message: false })
    }
  })
}

export function socketTaskCreate(socket: socketio.Socket) {
  socket.on('crtask', (data) => {
    console.log('crtask')
    try {
      tasks.create(data)
      socket.emit('crResult', { message: true })
    } catch {
      socket.emit('crResult', { message: false })
    }
  })
}

export function socketTaskUpdate(socket: socketio.Socket) {
  socket.on('taskup', (data) => {
    console.log('status変更')
    console.log(data)
    try {
      tasks.statusUp(data)
      socket.emit('chResult', { message: true })
    } catch {
      socket.emit('chResult', { message: false })
    }
  })
}

export function socketTaskFix(socket: socketio.Socket) {
  socket.on('uptask', (data) => {
    console.log('uptask')
    console.log(data)
    try {
      tasks.taskFix(data)
      socket.emit('crResult', { message: true })
    } catch {
      socket.emit('crResult', { message: false })
    }
  })
}
