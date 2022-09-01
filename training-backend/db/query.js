const mysql = require('mysql2/promise');
const dbConfig = require('./config.js');

async function query(sql, params) {
	const connection = await mysql.createConnection(dbConfig);
	const [results] = await connection.execute(sql, params);
	connection.end();
	return results;
}

module.exports = {
	query,
};
