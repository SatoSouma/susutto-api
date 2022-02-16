import socketio from 'socket.io'
import tasks from '../models/tasks'

const socketConnect = {
  socketChargeUpdate(socket: socketio.Socket) {
    socket.on('chup', (data) => {
      try {
        tasks.putCharge(data)
        socket.emit('chResult', { message: true })
      } catch {
        socket.emit('chResult', { message: false })
      }
    })
  },
}

export default socketConnect
