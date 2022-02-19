import mysql from 'mysql2/promise'
import config from './mysqlConfig'
import tables from './tableName'

const tasksQuery = async (
  taskName: string,
  taskDetail: string,
  deadLine: string,
  nowDate: string,
  departmentId: string
) => {
  const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
  const taskQuery = `INSERT INTO ${tables.taskTable} (departmentNo,taskName,taskDetail,deadLine) VALUES (?, ?, ?, ?)`
  const taskValues = [departmentId, taskName, taskDetail, deadLine]

  try {
    await conn.execute(taskQuery, taskValues)
    return true
  } catch (err) {
    return false
  }
}

export default tasksQuery
