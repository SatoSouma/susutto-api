import moment from 'moment-timezone'
import { tasksChargeQuery, tasksGetQuery, tasksQuery } from './index'
import { putChargeFormType, createFormType, statusUpType } from '../types/formTypes'
import tasksStatusUpQuery from './sql/tasksStatusUpQuery'
import tasksGetAdminQuery from './sql/tasksGetAdminQuery'

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
    console.log(result)
    return result
  },
}

export default tasks
