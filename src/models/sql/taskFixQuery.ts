import mysql from 'mysql2/promise'
import config from './mysqlConfig'
import tables from './tableName'

const taskFixQuery = async (id: string, taskDetail: string, deadLine: string, nowDate: string) => {
  const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
  const udateQuery = `UPDATE ${tables.taskTable} SET taskDetail = ? , deadLine = ? , updateDate = ? WHERE id = ?`
  const updateValues = [taskDetail, deadLine, nowDate, id]

  try {
    await conn.query(udateQuery, updateValues)
    return true
  } catch (err) {
    console.log('通過error')
    return false
  }
}

export default taskFixQuery
