import mysql from 'promise-mysql'
import config from './mysqlConfig'
import tables from './tableName'

const employeeGetQuery = async () => {
  const conn = await mysql.createConnection(config as mysql.ConnectionOptions)
  const loginInfoQuery = `SELECT a.id , a.employeeClass , b.pass, d.departmentColor FROM ${tables.employeeTable} a INNER JOIN ${tables.passTable} b ON a.passId = b.id INNER JOIN belongs c ON a.id = c.employeeId INNER JOIN departments d ON c.departmentId = d.id`
  try {
    const loginInfo = await conn.query(loginInfoQuery)
    return loginInfo
  } catch (err) {
    return false
  }
}

export default employeeGetQuery
