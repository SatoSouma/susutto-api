import mysql from 'promise-mysql'
import config from './mysqlConfig'
import tables from './tableName'

const tasksGetQuery = async (id: string, nowDate: string) => {
  const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
  const taskGetQuery = `SELECT * FROM ${tables.taskTable} WHERE id IN (SELECT taskId FROM ${tables.issueTable} WHERE departmentId IN (SELECT departmentId FROM ${tables.belongTable} WHERE employeeId = ?)) AND taskStatus = 0 AND deadLine >= ? `
  const taskGetValue = [id, nowDate]

  try {
    const rows = await conn.query(taskGetQuery, taskGetValue)
    return rows
  } catch (err) {
    return false
  }
}

export default tasksGetQuery
