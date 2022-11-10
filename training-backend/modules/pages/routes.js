import express from 'express'
import PageController from './controller.js'

const PageRouter = express.Router()

PageRouter.get('/page/byPath', PageController.getAppPage)
PageRouter.get('/page/list', PageController.getList)
PageRouter.get('/page/:id', PageController.getById)
PageRouter.post('/page/', PageController.create)
PageRouter.patch('/page/:id', PageController.update)
PageRouter.delete('/page/:id', PageController.delete)

export default PageRouter
