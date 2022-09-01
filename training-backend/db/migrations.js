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
	await query(`INSERT INTO page (path, title) VALUES ('/', 'Main Page');`);
	await query(`INSERT INTO page (path, title) VALUES ('/about', 'About Page');`);
	await query(`INSERT INTO page (path, title) VALUES ('/test', 'Test Page');`);
	await query(`INSERT INTO page (path, title, hidden) VALUES ('/log', 'Log Page', 0);`);
};

module.exports = {
	pageTable,
};
