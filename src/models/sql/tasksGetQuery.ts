import mysql from 'promise-mysql'
import config from './mysqlConfig'
import tables from './tableName'

const tasksGetQuery = async (id: string, nowDate: string) => {
  const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
  const allTaskGetQuery = `SELECT * FROM ${tables.taskTable} WHERE departmentNo IN (SELECT departmentId FROM ${tables.belongTable} WHERE employeeId = ?) AND taskStatus = 0 AND deadLine >= ? `
  const allTaskGetValue = [id, nowDate]
  const myTaskGetQuery = `SELECT * FROM ${tables.taskTable} WHERE id IN (SELECT taskId FROM ${tables.chargeTable} WHERE employeeId = ? AND deleteDate IS NULL) AND taskStatus = 1 AND deadLine >= ?`
  const myTaskGetValue = [id, nowDate]

  try {
    const allTask = await conn.query(allTaskGetQuery, allTaskGetValue)
    const myTask = await conn.query(myTaskGetQuery, myTaskGetValue)
    const tasks = {
      myTask: myTask,
      allTask: allTask,
    }
    return tasks
  } catch (err) {
    return false
  }
}

export default tasksGetQuery
