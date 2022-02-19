import mysql from 'mysql2/promise'
import config from './mysqlConfig'
import tables from './tableName'

const tasksChargeQuery = async (
  taskId: string,
  employeeId: string,
  nowDate: string
) => {
  const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
  const taskQuery = `INSERT INTO ${tables.chargeTable} (taskId,employeeId,createdDate) VALUES (?, ?, ?)`
  const taskValues = [taskId, employeeId, nowDate]
  const udateQuery = `UPDATE ${tables.taskTable} SET taskStatus = 1 WHERE id = ?`
  const updateValues = [taskId]

  try {
    await conn.execute(taskQuery, taskValues)
    await conn.query(udateQuery, updateValues)
    return true
  } catch (err) {
    console.log('通過error')
    return false
  }
}

export default tasksChargeQuery
