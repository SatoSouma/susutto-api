import tasks from '../models/tasks'
import express from 'express'

const taskController = {
  async index(req: express.Request, res: express.Response) {
    res.send('Hello world')
  },

  async store(req: express.Request, res: express.Response) {
    console.log('通過')
    const formData = req.body
    const results = await tasks.create(formData)
    res.send(results)
  },

  async getTasks(req: express.Request, res: express.Response) {
    console.log('通過')
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
    console.log('通過')
    const results = await tasks.getAdminTasks()
    res.send(results)
  },

  async login(req: express.Request, res: express.Response) {
    const results = await tasks.login(req.body.userId, req.body.pass)
    res.send(results)
  },

  async adminLogin(req: express.Request, res: express.Response) {
    const results = await tasks.AdminLogin(req.body.userId, req.body.pass)
    res.send(results)
  },

  async taskFix(req: express.Request, res: express.Response) {
    const formData = req.body
    const results = await tasks.taskFix(formData)
    res.send(results)
  },
}

export default taskController
