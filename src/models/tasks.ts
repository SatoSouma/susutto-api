import executeQuery from './executeQuery'
// import moment from 'moment'
const taskTable = 'tasks'
// const issueTable = 'issue'

const tasks = {
  async create(form: any) {
    const taskName = form.taskName
    const taskDetail = form.taskDetail
    const deadLine = form.deadLine
    console.log(`${deadLine}`)
    // const nowDate: string = moment().format('YYYY-MM-DD') //現在時刻

    const taskQuery = `INSERT INTO ${taskTable} (taskName,taskDetail,deadLine) VALUES (?, ?, ?)`
    const taskValues: string[] = [taskName, taskDetail, deadLine]

    // const issueQuery = `INSERT INTO ${issueTable} (taskId,departmentId,createdDate) VALUES (?, ?, ?)`

    console.log(taskQuery)
    const result = await executeQuery(taskQuery, taskValues)

    if (result !== undefined) {
      console.log(result)
    }
  },
}

export default tasks
