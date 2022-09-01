// packages
const express = require('express');
const cors = require('cors');
const env = require('dotenv').config({ path: '../.env' });

// base
const PORT = env.parsed.BACKEND_DEV_SERVER_PORT || 1346;
const { query } = require('./db/query');
const { pageTable } = require('./db/migrations');

// routes
const { PageRouter } = require('./modules/pages/router');

// app
const app = express();

// uses
app.use(express.json());
app.use(cors());
app.use(PageRouter);

app.listen(PORT, async () => {
	await query(`CREATE DATABASE IF NOT EXISTS rd_admin;`);
	await pageTable();
	console.log(`Express app listening at http://localhost:${PORT}`);
});
