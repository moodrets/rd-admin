// packages
import express from 'express'
import cors from 'cors'

import dotenv from 'dotenv'
const { parsed: env } = dotenv.config({ path: '../.env' })

// base
const PORT = env.BACKEND_DEV_SERVER_PORT || 1346

// routes
import PageRouter from './modules/pages/routes.js'
import CreateTables from './db/migrations.js'

// app
const app = express()

// use
app.use(express.json())
app.use(cors())
app.use(PageRouter)
// app.use(MenuRouter)

app.listen(PORT, async () => {
	await CreateTables()
	console.log(`Express app listening at http://localhost:${PORT}`)
})
