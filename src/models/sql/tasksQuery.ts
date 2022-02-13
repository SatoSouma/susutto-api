import mysql, { ResultSetHeader } from 'mysql2'
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
  const taskQuery = `INSERT INTO ${tables.taskTable} (taskName,taskDetail,deadLine) VALUES (?, ?, ?)`
  const taskValues = [taskName, taskDetail, deadLine]
  // const issueQuery = `INSERT INTO ${issueTable} (taskId,departmentId,createdDate) VALUES (?, ?, ?)`

  try {
    await conn.execute(
      taskQuery,
      taskValues,
      async function (error, results: ResultSetHeader) {
        console.log(results.insertId)
        const issueQuery = `INSERT INTO ${tables.issueTable} (taskId,departmentId,createdDate) VALUES (?, ?, ?)`
        const issueValues = [results.insertId, departmentId, nowDate]
        await conn.execute(issueQuery, issueValues)
      }
    )
    return true
  } catch (err) {
    return false
  }
}

export default tasksQuery
