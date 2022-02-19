import mysql from 'mysql2/promise'
import config from './mysqlConfig'
import tables from './tableName'

const tasksStatusUpQuery = async (taskId: string) => {
  const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
  const udateQuery = `UPDATE ${tables.taskTable} SET taskStatus = 2 WHERE id = ?`
  const updateValues = [taskId]

  try {
    await conn.query(udateQuery, updateValues)
    return true
  } catch (err) {
    console.log('通過error')
    return false
  }
}

export default tasksStatusUpQuery
