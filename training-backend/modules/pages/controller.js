const PageService = require('./service');
const MenuService = require('../menus/service');
const { PAGE_CREATED, PAGE_URL_EXIST, SERVER_ERROR, PAGE_DELETED, PAGE_UPDATED } = require('../../common/messages');

const PageController = {
    async getAppPage(req, res, next) {
        const path = req.query.path;
        const page = await PageService.getAppPage(path);
        let globalMenus = [];
        let pageMenus = [];

        if (page) {
            globalMenus = await MenuService.getGlobalMenus();
            pageMenus = await MenuService.getByPage(page.id);
        }

        res.status(200).json({
            page,
            menus: [...globalMenus, ...pageMenus],
        });
    },
    async getById(req, res, next) {
        const id = req.params.id;
        const page = await PageService.getById(+id);
        res.status(200).json(page);
    },
    async getList(req, res, next) {
        const pages = await PageService.getList();
        res.status(200).json(pages);
    },
    async create(req, res, next) {
        const body = req.body;
        const existPage = await PageService.getByPath(body.path);

        if (existPage) {
            res.status(409).json({
                message: PAGE_URL_EXIST,
            });
            return;
        }

        const createResult = await PageService.create(body);

        if (!createResult) {
            res.status(200).json({
                message: SERVER_ERROR,
            });
            return;
        }

        res.status(200).json({
            message: PAGE_CREATED,
        });
    },
    async update(req, res, next) {
        const id = body.id;
        const body = req.body;
        delete body.id;
        const updateResult = await PageService.update(body, id);

        if (!updateResult) {
            res.status(200).json({
                message: SERVER_ERROR,
            });
            return;
        }

        res.status(200).json({
            message: PAGE_UPDATED,
        });
    },
    async delete(req, res, next) {
        const id = req.params.id;
        const deleteResult = await PageService.delete(id);

        if (!deleteResult) {
            res.status(200).json({
                message: SERVER_ERROR,
            });
            return;
        }

        res.status(200).json({
            message: PAGE_DELETED,
        });
    },
};

module.exports = PageController;
