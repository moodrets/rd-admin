import MenuService from './service'

const MenuController = {
	async create(req, res, next) {
		const body = req.body
		const existMenu = await MenuService.getByName(body.name)

		if (existMenu) {
			res.status(409).json({
				message: MENU_NAME_EXIST,
			})
			return
		}

		const createResult = await MenuService.create(body)

		if (!createResult) {
			res.status(200).json({
				message: SERVER_ERROR,
			})
		}

		res.status(200).json({
			message: MENU_CREATED,
		})
	},
	async getById(req, res, next) {},
	async update(req, res, next) {},
	async delete(req, res, next) {},
}

export default MenuController
