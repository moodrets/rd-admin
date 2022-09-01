// packages
const express = require('express');
const app = express();
const cors = require('cors');
const env = require('dotenv').config({ path: '../.env' });

// base
const PORT = env.parsed.BACKEND_DEV_SERVER_PORT || 1346;
const { query } = require('./db/query');

// routes
const { PageRouter } = require('./modules/pages/router');

// uses
app.use(cors());
app.use(PageRouter);

app.listen(PORT, async () => {
	await query(`CREATE DATABASE IF NOT EXISTS rd_admin;`);
	console.log(`Express app listening at http://localhost:${PORT}`);
});
