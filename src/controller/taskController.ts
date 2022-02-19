import tasks from '../models/tasks'
import express from 'express'

const taskController = {
  async index(req: express.Request, res: express.Response) {
    res.send('Hello world')
  },

  async store(req: express.Request, res: express.Response) {
    const formData = req.body
    const results = await tasks.create(formData)
    res.send(results)
  },

  async getTasks(req: express.Request, res: express.Response) {
    const id = req.query.id
    const results = await tasks.getTasks(id as string)
    res.send(results)
  },

  async putCharge(req: express.Request, res: express.Response) {
    const formData = req.body
    const results = await tasks.putCharge(formData)
    res.send(results)
  },

  async updateStatus(req: express.Request, res: express.Response) {
    const formData = req.body
    const results = await tasks.statusUp(formData)
    res.send(results)
  },

  async getAdminTasks(req: express.Request, res: express.Response) {
    const results = await tasks.getAdminTasks()
    console.log(results)
    res.send(results)
  },
}

export default taskController
