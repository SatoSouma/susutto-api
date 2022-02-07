import executeQuery from './executeQuery'
const table = 'task'

const tasks = {
  async create(form: any) {
    const taskName = form.taskName
    const taskDetail = form.taskDetail
    const taskStatus = form.taskStatus
    const deadLine = form.deadLine

    const query = `INSERT INTO ${table} (taskName,taskDetail,taskStatus,deadLine) VALUES (?, ?, ?, ?)`
    const values: string[] = [taskName, taskDetail, taskStatus, deadLine]

    await executeQuery(query, values)
  },
}

export default tasks
