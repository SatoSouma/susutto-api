import moment from 'moment-timezone'
import { tasksChargeQuery, tasksGetQuery, tasksQuery, tasksStatusUpQuery, employeeGetQuery, tasksGetAdminQuery, taskFixQuery } from './index'
import { putChargeFormType, createFormType, statusUpType, loginInfo, taskFix } from '../types/formTypes'

moment.tz.setDefault('Asia/Tokyo')

const tasks = {
  async create(form: createFormType) {
    const taskName = form.taskName
    const taskDetail = form.taskDetail
    const deadLine = form.deadLine
    const departmentId = form.department
    const nowDate = moment().format('YYYY-MM-DD') //現在時刻
    const result = await tasksQuery(taskName, taskDetail, deadLine, nowDate, departmentId)

    return result
  },

  async getTasks(id: string) {
    const nowDate = moment().format('YYYY-MM-DD HH:mm:ss')
    const result = await tasksGetQuery(id, nowDate)
    return result
  },

  async putCharge(form: putChargeFormType) {
    const taskId = form.taskId
    console.log(taskId)
    const employeeId = form.employeeId
    const nowDate = moment().format('YYYY-MM-DD')
    const result = await tasksChargeQuery(taskId, employeeId, nowDate)
    return result
  },

  async statusUp(form: statusUpType) {
    const taskId = form.taskId
    const result = await tasksStatusUpQuery(taskId)
    return result
  },

  async getAdminTasks() {
    const nowDate = moment().format('YYYY-MM-DD HH:mm:ss')
    const result = await tasksGetAdminQuery(nowDate)
    return result
  },

  async login(id: string, pass: string) {
    let loginFlug: boolean = false
    let departmentColor: string = ''
    const loginInfo = await employeeGetQuery()
    console.log(loginInfo)

    loginInfo.map((val: loginInfo) => {
      if (val.id == id) {
        if (val.pass == pass) {
          console.log('ログイン成功')
          departmentColor = val.departmentColor
          loginFlug = true
        }
      }
    })

    if (loginFlug) {
      const color = { departmentColor: departmentColor }
      return color
    } else {
      return false
    }
  },

  async AdminLogin(id: string, pass: string) {
    let loginFlug: boolean = false

    const loginInfo = await employeeGetQuery()
    console.log(loginInfo)

    loginInfo.map((val: loginInfo) => {
      if (val.id == id) {
        if (val.pass == pass) {
          if (val.employeeClass == 1) {
            loginFlug = true
          }
        }
      }
    })

    if (loginFlug) {
      return true
    } else {
      return false
    }
  },

  async taskFix(form: taskFix) {
    console.log(form)
    const id = form.id
    const taskDetail = form.taskDetail
    const deadLine = form.deadLine
    const nowDate = moment().format('YYYY-MM-DD HH:mm:ss')
    const result = await taskFixQuery(id, taskDetail, deadLine, nowDate)
    return result
  },
}

export default tasks
