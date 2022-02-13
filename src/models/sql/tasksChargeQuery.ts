import mysql from 'mysql2'
import config from './mysqlConfig'
import tables from './tableName'

const tasksChargeQuery = async (
  employeeId: string,
  taskId: string,
  nowDate: string
) => {
  const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
  const taskQuery = `INSERT INTO ${tables.chargeTable} (taskId,employeeId,createdDate) VALUES (?, ?, ?)`
  const taskValues = [taskId, employeeId, nowDate]

  try {
    await conn.execute(taskQuery, taskValues)
    return true
  } catch (err) {
    return false
  }
}

export default tasksChargeQuery
