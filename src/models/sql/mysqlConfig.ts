import mysql from 'mysql2'
const config: mysql.ConnectionOptions = {
  host: 'host.docker.internal',
  user: 'root',
  password: '',
  database: 'throw_work',
}

export default config
