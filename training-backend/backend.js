// packages
const express = require('express');
const cors = require('cors');
const { parsed: env } = require('dotenv').config({ path: '../.env' });

// base
const PORT = env.BACKEND_DEV_SERVER_PORT || 1346;

// routes
const { PageRouter } = require('./modules/pages/routes');
const { MenuRouter } = require('./modules/menus/routes');
const { createTables } = require('./db/migrations');

// app
const app = express();

// use
app.use(express.json());
app.use(cors());
app.use(PageRouter);
app.use(MenuRouter);

app.listen(PORT, async () => {
    await createTables();
    console.log(`Express app listening at http://localhost:${PORT}`);
});
