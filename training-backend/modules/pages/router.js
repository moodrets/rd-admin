const { Router } = require('express');
const { query } = require('../../db/query');

// query(`CREATE TABLE page;`);

const PageRouter = Router();

PageRouter.get('/page/byPath', (req, res, next) => {});
PageRouter.get('/page/get/:id', (req, res, next) => {});
PageRouter.get('/page/list', (req, res, next) => {
	res.status(200).json({
		samsa: 'samsa',
	});
});
PageRouter.post('/page/create', (req, res, next) => {});
PageRouter.put('/page/update/:id', (req, res, next) => {});
PageRouter.delete('/page/delete/:id', (req, res, next) => {});

module.exports = {
	PageRouter,
};
