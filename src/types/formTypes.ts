export type putChargeFormType = {
  taskId: string
  employeeId: string
}

export type createFormType = {
  taskName: string
  taskDetail: string
  deadLine: string
  department: string
}

export type statusUpType = {
  taskId: string
}

export type loginInfo = {
  id: string
  pass: string
  departmentColor: string
  employeeClass: number
}

export type taskFix = {
  id: string
  taskDetail: string
  deadLine: string
}
