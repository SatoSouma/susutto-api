import executeQuery from './executeQuery'
// import moment from 'moment'
const taskTable = 'task'
// const issueTable = 'issue'

const tasks = {
  async create(form: any) {
    const taskName = form['taskName']
    const taskDetail = form.taskDetail
    const taskStatus = form.taskStatus
    const deadLine = form.deadLine
    // const nowDate: string = moment().format('YYYY-MM-DD') //現在時刻

    const taskQuery = `INSERT INTO ${taskTable} (taskName,taskDetail,taskStatus,deadLine) VALUES (?, ?, ?, ?)`
    const taskValues: string[] = [taskName, taskDetail, taskStatus, deadLine]

    // const issueQuery = `INSERT INTO ${issueTable} (taskId,departmentId,createdDate) VALUES (?, ?, ?)`

    const result = await executeQuery(taskQuery, taskValues)

    console.log('クエリ結果' + result)
  },
}

export default tasks
