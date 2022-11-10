import db from '../../db/db.js'

const MenuService = {
	async create(body) {
		const pages = body.pages
		delete body.pages
		const rows = await db.query(`INSERT INTO menus SET ?`, [body])
		const createStatus = rows[0] && rows[0].affectedRows

		if (createStatus && pages?.length) {
			const createdMenu = await this.getByName(body.name)
			createdMenu && this.setMenuForPages(createdMenu.id, pages)
		}

		return createStatus ? true : false
	},
	async update(id) {},
	async delete(id) {},
	async getByPage(pageId) {
		// const [rows] = await db.query(`SELECT * from`);
		// console.log(rows);
		return []
	},
	async getById(id) {},
	async getByName(name) {
		const [rows] = await db.query(`SELECT * FROM menus WHERE name=?;`, [name])
		return rows.length ? rows[0] : null
	},
	async getGlobalMenus() {
		const [rows] = await db.query(`SELECT * from menus WHERE global=true AND hidden=false`)
		return rows.length ? rows : []
	},
	async setMenuForPages(menuId, pagesIds = []) {
		pagesIds.forEach(async (pageId) => {
			await db.query(`INSERT INTO pages_menus SET menu_id=?, page_id=?`, [menuId, pageId])
		})
	},
}

export default MenuService
