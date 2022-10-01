const db = require('../../db/db');

const PageService = {
    async getAppPage(path) {
        const [rows] = await db.query(`SELECT * FROM pages WHERE path=? AND hidden=false;`, [path]);
        return rows.length ? rows[0] : null;
    },
    async getByPath(path) {
        const [rows] = await db.query(`SELECT * FROM pages WHERE path=?;`, [path]);
        return rows.length ? rows[0] : null;
    },
    async getById(id) {
        const [rows] = await db.query(`SELECT * FROM pages WHERE id=?;`, [id]);
        return rows.length ? rows[0] : null;
    },
    async getList(limit = 20) {
        const [rows] = await db.query(`SELECT * FROM pages LIMIT ?;`, [limit]);
        return rows.length ? rows : [];
    },
    async create(body) {
        const rows = await db.query(`INSERT INTO pages SET ?;`, [body]);
        return rows[0] && rows[0].affectedRows ? true : false;
    },
    async update(body, id) {
        const rows = await db.query(`UPDATE pages SET ? WHERE id=?;`, [body, id]);
        return rows[0] && rows[0].affectedRows ? true : false;
    },
    async delete(id) {
        const rows = await db.query(`DELETE FROM pages WHERE id=?;`, id);
        return rows[0] && rows[0].affectedRows ? true : false;
    },
};

module.exports = PageService;
