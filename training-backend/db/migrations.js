const { query } = require('./query');

const pageTable = async () => {
	await query(`DROP TABLE IF EXISTS page;`);
	await query(`
        CREATE TABLE IF NOT EXISTS page (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            page_title TEXT,
            page_description TEXT,
            path varchar(255),
            redirect varchar(255),
            title TEXT,
            content LONGTEXT,
            template_filename varchar(255) DEFAULT 'BasePage',
            scripts TEXT,
            styles TEXT,
            json_data JSON,
            hidden BOOLEAN DEFAULT false,
            UNIQUE(path)
        );
    `);

	const mainPage = await query(`SELECT * FROM page WHERE path='/';`);
	const aboutPage = await query(`SELECT * FROM page WHERE path='/about';`);
	const testPage = await query(`SELECT * FROM page WHERE path='/test';`);
	const logPage = await query(`SELECT * FROM page WHERE path='/log';`);
	!mainPage.length && (await query(`INSERT INTO page (path, title) VALUES ('/', 'Main Page')`));
	!aboutPage.length && (await query(`INSERT INTO page (path, title) VALUES ('/about', 'About Page')`));
	!testPage.length && (await query(`INSERT INTO page (path, title) VALUES ('/test', 'Test Page')`));
	!logPage.length && (await query(`INSERT INTO page (path, title) VALUES ('/log', 'Log Page')`));
};

const menuTable = async () => {
	await query(`DROP TABLE IF EXISTS menu;`);
	await query(`
        CREATE TABLE IF NOT EXISTS menu (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            title TEXT,
            name TEXT,
            json_data JSON,
            hidden BOOLEAN DEFAULT false,
            global BOOLEAN DEFAULT false
        );
    `);
	const headerMenu = await query(`SELECT * FROM menu WHERE name='header_menu';`);
	const asideMenu = await query(`SELECT * FROM menu WHERE name='aside_menu';`);
	!headerMenu.length &&
		(await query(`INSERT INTO menu (title, name, global) values('Header Menu', 'header_menu', true);`));
	!asideMenu.length &&
		(await query(`INSERT INTO menu (title, name, global) values('Aside Menu', 'aside_menu', true);`));
};

const menuItem = async () => {
	await query(`DROP TABLE IF EXISTS menu_item;`);
	await query(`
        CREATE TABLE IF NOT EXISTS menu_item (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            title TEXT,
            url TEXT,
            icon TEXT,
            json_data JSON,
            hidden BOOLEAN DEFAULT false,
            menu_id INT NOT NULL,
            parent_id INT NOT NULL DEFAULT 0
        );
    `);
	const menuItem1 = await query(`SELECT * FROM menu_item WHERE id=1;`);
	const menuItem2 = await query(`SELECT * FROM menu_item WHERE id=2;`);
	!menuItem1.length && (await query(`INSERT INTO menu_item (title, url, menu_id) values('item 1', '/', 1);`));
	!menuItem2.length && (await query(`INSERT INTO menu_item (title, url, menu_id) values('item 1', '/about', 2);`));
};

const menuPageTable = async () => {
	await query(`DROP TABLE IF EXISTS menu_page;`);
	await query(`
        CREATE TABLE IF NOT EXISTS menu_page (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            menu_id INT,
            page_id int
        );
    `);
	const localMenu = await query(`SELECT * FROM menu WHERE id=3;`);
	const menuItem3 = await query(`SELECT * FROM menu_item WHERE id=3;`);
	!localMenu.length && (await query(`INSERT INTO menu (title, name) values('About Menu', 'about_menu');`));
	!localMenu.length && (await query(`INSERT INTO menu_page (menu_id, page_id) values(3, 2);`));
	!menuItem3.length &&
		(await query(`INSERT INTO menu_item (title, url, menu_id) values('about item', '/some-url', 3);`));
};

module.exports = {
	pageTable,
	menuTable,
	menuItem,
	menuPageTable,
};
