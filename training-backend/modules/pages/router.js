const { Router } = require('express');
const { query } = require('../../db/query');

const PageRouter = Router();

PageRouter.get('/page/byPath', async (req, res, next) => {
	const path = req.query.path;
	const pages = await query(`
        SELECT 
            id,
            page_title,
            page_description,
            path, redirect,
            title,
            content,
            template_filename,
            scripts,
            styles,
            json_data
        FROM page 
        WHERE path='${path}'
        AND hidden=0;
    `);

	if (pages[0]) {
		return res.status(200).json({ ...pages[0] });
	}

	return res.status(200).json({
		page: null,
	});
});

PageRouter.get('/page/get/:id', async (req, res, next) => {
	const pageId = req.params.id;
	const pages = await query(`SELECT * FROM page WHERE id=${pageId}`);

	if (pages[0]) {
		return res.status(200).json({ ...pages[0] });
	}

	return res.status(404).json({
		message: 'Страница не найдена',
	});
});

PageRouter.get('/page/list', async (req, res, next) => {
	const pages = await query('SELECT * from page;');

	if (pages[0]) {
		return res.status(200).json(pages);
	}

	return res.status(200).json([]);
});

PageRouter.post('/page/create', async (req, res, next) => {
	const frontPage = req.body;
	const existPage = await query(`SELECT * from page WHERE path='${frontPage.path}'`);

	if (existPage[0]) {
		return res.status(409).json({
			message: 'Страница с таким url уже существует',
		});
	}

	frontPage.json_data && (frontPage.json_data = JSON.stringify(frontPage.json_data));

	const columns = [];
	const values = [];

	for (const key in frontPage) {
		columns.push(key);
		switch (key) {
			case 'json_data':
				values.push(frontPage[key]);
				break;
			case 'hidden':
				values.push(+frontPage[key]);
				break;
			default:
				values.push(`'${frontPage[key]}'`);
		}
	}

	const queryString = `INSERT INTO page (${[...columns]}) VALUES (${[...values]})`;

	const dbRequest = await query(queryString);

	if (dbRequest.affectedRows) {
		return res.status(200).json({
			message: 'Страница успешно создана',
		});
	}

	return res.status(500).json({
		message: 'Ошибка сервера',
	});
});

PageRouter.put('/page/update/:id', async (req, res, next) => {});

PageRouter.delete('/page/delete/:id', async (req, res, next) => {
	const pageId = req.params.id;
	const dbRequest = await query(`DELETE FROM page WHERE id=${pageId}`);

	if (dbRequest.affectedRows) {
		return res.status(200).json({
			message: 'Страницы с таким id не существует',
		});
	}

	return res.status(500).json({
		message: 'Ошибка сервера',
	});
});

module.exports = {
	PageRouter,
};
