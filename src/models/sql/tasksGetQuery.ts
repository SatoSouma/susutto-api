import mysql, { ResultSetHeader } from 'mysql2'

const config: mysql.ConnectionOptions = {
  host: 'host.docker.internal',
  user: 'root',
  password: '',
  database: 'throw_work',
}

const taskTable = 'tasks'
const issueTable = 'issue'

const tasksGetQuery = async () => {
  const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
  const taskGetQuery = `INSERT INTO ${taskTable} (taskName,taskDetail,deadLine) VALUES (?, ?, ?)`
  const taskGetValue = [taskName, taskDetail, deadLine]

  try {
    await conn.execute(taskQuery)
    return true
  } catch (err) {
    return false
  }
}

export default tasksGetQuery
