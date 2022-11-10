import express from 'express'
import MenuController from './controller.js'

const MenuRouter = express.Router()

MenuRouter.post('/menu', MenuController.create)
MenuRouter.get('/menu/:id', MenuController.getById)
MenuRouter.put('/menu/:id', MenuController.update)
MenuRouter.delete('/menu/:id', MenuController.delete)

export default MenuRouter
