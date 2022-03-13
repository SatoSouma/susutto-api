import mysql from 'mysql2'

const config: mysql.ConnectionOptions = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_DBNAME,
  password: process.env.DATABASE_PASS,
  port: Number(process.env.DATABASE_POST),
}

export default config
