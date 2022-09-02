// packages
const express = require('express');
const cors = require('cors');
const { parsed } = require('dotenv').config({ path: '../.env' });

// base
const PORT = parsed.BACKEND_DEV_SERVER_PORT || 1346;
const { query } = require('./db/query');
const { pageTable, menuTable, menuItem, menuPageTable } = require('./db/migrations');

// routes
const { PageRouter } = require('./modules/pages/router');
const { MenuRouter } = require('./modules/menu/router');

// app
const app = express();

// uses
app.use(express.json());
app.use(cors());
app.use(PageRouter);
app.use(MenuRouter);

app.listen(PORT, async () => {
	await query(`CREATE DATABASE IF NOT EXISTS rd_admin;`);
	await pageTable();
	await menuTable();
	await menuItem();
	await menuPageTable();
	console.log(`Express app listening at http://localhost:${PORT}`);
});
