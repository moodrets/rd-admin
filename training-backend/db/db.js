const mysql = require('mysql2');
const cors = require('cors');
const { parsed: env } = require('dotenv').config({ path: '../.env' });

const connection = mysql.createConnection({
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    password: env.MYSQL_ROOT_PASSWORD,
    port: env.MYSQL_CONTAINER_PORT,
    database: env.MYSQL_DATABASE,
});

module.exports = connection.promise();
