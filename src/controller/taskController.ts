import tasks from '../models/tasks'
import express from 'express'

const taskController = {
  async index(req: express.Request, res: express.Response) {
    res.send('Hello world')
  },

  async store(req: express.Request, res: express.Response) {
    console.log(req.body)
    const formData = req.body
    const results = await tasks.create(formData)
    res.send(results)
  },
}

export default taskController

// 部署ごとのtask全権取得
// task情報statusと共に全権取得
// task追加
// task status変更
// task 削除
