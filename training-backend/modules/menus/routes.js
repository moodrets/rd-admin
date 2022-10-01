const { Router } = require('express');
const MenuRouter = Router();
const MenuController = require('./controller');

MenuRouter.post('/menu', MenuController.create);
MenuRouter.get('/menu/:id', MenuController.getById);
MenuRouter.put('/menu/:id', MenuController.update);
MenuRouter.delete('/menu/:id', MenuController.delete);

module.exports = {
    MenuRouter,
};
