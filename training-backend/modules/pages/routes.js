const { Router } = require('express');
const PageRouter = Router();
const PageController = require('./controller');

PageRouter.get('/page/byPath', PageController.getAppPage);
PageRouter.get('/page/list', PageController.getList);
PageRouter.get('/page/:id', PageController.getById);
PageRouter.post('/page', PageController.create);
PageRouter.put('/page/:id', PageController.update);
PageRouter.delete('/page/:id', PageController.delete);

module.exports = {
    PageRouter,
};
