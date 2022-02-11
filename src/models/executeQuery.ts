import mysql from 'mysql2'

const config: unknown = {
  host: 'host.docker.internal',
  port: '3306',
  user: 'root',
  password: '',
  database: 'throw_work',
}

const executeQuery = async (query: any, values: string[]) => {
  try {
    const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
    const rows = await conn.execute(query, values)
    conn.end()
    console.log(rows)
    return rows
  } catch (err) {
    console.log(err)
  }
}

export default executeQuery
