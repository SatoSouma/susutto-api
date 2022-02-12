import tasksQuery from './tasksQuery'
import moment from 'moment'

const tasks = {
  async create(form) {
    const taskName = form.taskName
    const taskDetail = form.taskDetail
    const deadLine = form.deadLine
    const departmentId = form.department
    const nowDate = moment().format('YYYY-MM-DD') //現在時刻

    const result = await tasksQuery(
      taskName,
      taskDetail,
      deadLine,
      nowDate,
      departmentId
    )

    if (result !== undefined) {
      console.log(result)
    } else {
      console.log('unnnnnn')
    }
  },
}

export default tasks
