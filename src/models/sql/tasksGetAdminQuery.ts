import mysql from 'promise-mysql'
import config from './mysqlConfig'
import tables from './tableName'

const tasksGetAdminQuery = async (nowDate: string) => {
  const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
  const taskDoingQuery = `SELECT a.id , a.taskName ,a.taskDetail, a.deadLine , b.departmentColor ,b.departmentName, e.employeeName FROM ${tables.taskTable} as a INNER JOIN ${tables.departmentTable} as b ON a.departmentNo = b.id INNER JOIN ${tables.chargeTable} as c ON a.id = c.taskId INNER JOIN ${tables.employeeTable} as e ON e.id = c.employeeId WHERE a.taskStatus = 1 AND a.deadLine >= ?`
  const taskDoingValue = [nowDate]
  const taskTodoQuery = `SELECT a.id , a.taskName ,a.taskDetail, a.deadLine , b.departmentColor ,b.departmentName FROM ${tables.taskTable} as a INNER JOIN ${tables.departmentTable} as b ON a.departmentNo = b.id WHERE a.deadLine >= ? AND a.taskStatus = 0 `
  const taskTodoValue = [nowDate]
  const taskDoneQuery = `SELECT a.id , a.taskName ,a.taskDetail, a.deadLine , b.departmentColor ,b.departmentName, e.employeeName FROM ${tables.taskTable} as a INNER JOIN ${tables.departmentTable} as b ON a.departmentNo = b.id INNER JOIN ${tables.chargeTable} as c ON a.id = c.taskId INNER JOIN ${tables.employeeTable} as e ON e.id = c.employeeId WHERE a.taskStatus = 2`
  const taskNoAchieveQuery = `SELECT a.id , a.taskName ,a.taskDetail, a.deadLine , b.departmentColor ,b.departmentName, e.employeeName FROM ${tables.taskTable} as a INNER JOIN ${tables.departmentTable} as b ON a.departmentNo = b.id LEFT OUTER JOIN ${tables.chargeTable} as c ON a.id = c.taskId LEFT OUTER JOIN ${tables.employeeTable} as e ON c.employeeId = e.id WHERE a.deadLine <= ? AND (a.taskStatus <> 2 ) `
  const taskNoAhieveValue = [nowDate]

  try {
    const doing = await conn.query(taskDoingQuery, taskDoingValue)
    const todo = await conn.query(taskTodoQuery, taskTodoValue)
    const done = await conn.query(taskDoneQuery)
    const noAchieve = await conn.query(taskNoAchieveQuery, taskNoAhieveValue)
    const tasks = {
      doing: doing,
      todo: todo,
      done: done,
      noAchieve: noAchieve,
    }
    return tasks
  } catch (err) {
    return false
  }
}

export default tasksGetAdminQuery
