const { Router } = require('express');
const PageRouter = Router();
const { query } = require('../../db/query');
const { makePageData, makeCreatePageSQLQuery, makeUpdatePageSQLQuery } = require('./helpers/pageHelpers');
const { JSON_INVALID, SERVER_ERROR } = require('../../common/messages');
const {
	PAGE_CREATED,
	PAGE_DELETED,
	PAGE_URL_EXIST,
	PAGE_NOT_FOUND,
	PAGE_UPDATED,
} = require('./messages/page-messages');

PageRouter.get('/page/byPath', async (req, res, next) => {
	const path = req.query.path;
	const [db_page] = await query(`
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

	const menus = {};
	const blocks = {};
	let page = {};

	if (db_page) {
		page = { ...db_page };
		let db_local_menus = [];
		const db_global_menus = await query(`SELECT id, json_data, title, name, global from menu WHERE global=true`);
		const [db_menu_page] = await query(`SELECT menu_id from menu_page WHERE page_id=${page.id}`);
		if (db_menu_page) {
			const menu_id = db_menu_page.menu_id;
			db_local_menus = await query(
				`SELECT id, json_data, title, name, global from menu WHERE id=${menu_id} AND hidden=false`
			);
		}
		// db_local_menuss = await query(
		// 	`SELECT * from menu m INNER JOIN menu_page mp ON m.id=mp.menu_id INNER JOIN page p ON p.id=mp.page_id`
		// );
		const mergeMenus = [...db_global_menus, ...db_local_menus];
		for (let menu of mergeMenus) {
			const db_menu_items = await query(
				`SELECT id, icon, json_data, menu_id, parent_id, title, url from menu_item WHERE menu_id=${menu.id} AND hidden=false`
			);
			if (db_menu_items.length) {
				menu['items'] = db_menu_items;
				menus[menu.name] = menu;
			}
		}

		return res.status(200).json({
			page,
			menus,
			blocks,
		});
	}

	return res.status(200).json({
		page,
		menus,
		blocks,
	});
});

PageRouter.get('/page/get/:id', async (req, res, next) => {
	const pageId = req.params.id;
	const [db_page] = await query(`SELECT * FROM page WHERE id=${pageId}`);

	if (db_page) {
		return res.status(200).json({ ...db_page });
	}

	return res.status(404).json({
		message: PAGE_NOT_FOUND,
	});
});

PageRouter.get('/page/list', async (req, res, next) => {
	const db_page_list = await query('SELECT * from page;');
	return res.status(200).json(db_page_list);
});

PageRouter.post('/page/create', async (req, res, next) => {
	const frontPage = req.body;
	const [db_exist_page] = await query(`SELECT * from page WHERE path='${frontPage.path}'`);

	if (db_exist_page) {
		return res.status(409).json({
			message: PAGE_URL_EXIST,
		});
	}

	const page = makePageData(frontPage);
	const queryString = makeCreatePageSQLQuery(page);

	try {
		const { affectedRows } = await query(queryString);
		if (affectedRows) {
			return res.status(200).json({
				message: PAGE_CREATED,
			});
		}
	} catch (error) {
		if (error.message.includes('Invalid JSON text:')) {
			return res.status(500).json({
				message: JSON_INVALID,
			});
		}
	}

	return res.status(500).json({
		message: SERVER_ERROR,
	});
});

PageRouter.put('/page/update/:id', async (req, res, next) => {
	const frontPage = req.body;
	const page = makePageData(frontPage);
	const queryString = makeUpdatePageSQLQuery(page);

	try {
		const { affectedRows } = await query(queryString);
		if (affectedRows) {
			return res.status(200).json({
				message: PAGE_UPDATED,
			});
		}
	} catch (error) {
		if (error.message.includes('Invalid JSON text:')) {
			return res.status(500).json({
				message: JSON_INVALID,
			});
		}
	}

	return res.status(500).json({
		message: SERVER_ERROR,
	});
});

PageRouter.delete('/page/delete/:id', async (req, res, next) => {
	const pageId = req.params.id;
	const { affectedRows } = await query(`DELETE FROM page WHERE id=${pageId}`);

	if (affectedRows) {
		return res.status(200).json({
			message: PAGE_DELETED,
		});
	}

	return res.status(500).json({
		message: SERVER_ERROR,
	});
});

module.exports = {
	PageRouter,
};
