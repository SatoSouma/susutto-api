import mysql from 'mysql2'

console.log(process.env.HOST)

const config: mysql.ConnectionOptions = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DBNAME,
  port: Number(process.env.PORT),
}

export default config
