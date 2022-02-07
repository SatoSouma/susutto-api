import mysql from 'mysql2'

const config: unknown = {
  host: 'mysql',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'throw_work',
}

const executeQuery = async (query: any, values: string[]) => {
  try {
    const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
    const rows = await conn.execute(query, values)
    conn.end()
    return rows
  } catch (err) {
    console.log(err)
  }
}

export default executeQuery
