import mysql from 'mysql2'
import dotenv from 'dotenv'
const { parsed: env } = dotenv.config({ path: '../.env' })

const connection = mysql.createConnection({
	host: env.MYSQL_HOST,
	user: env.MYSQL_USER,
	password: env.MYSQL_ROOT_PASSWORD,
	port: env.MYSQL_CONTAINER_PORT,
	database: env.MYSQL_DATABASE,
})

export default connection.promise()
