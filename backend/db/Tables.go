package db

import (
	"log"
)

func pagesTable(){
	db := Connection()
	_, err := db.Query(`
		CREATE TABLE IF NOT EXISTS pages (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            page_title TEXT,
            page_description TEXT,
            path varchar(255),
            redirect varchar(255),
            title TEXT,
            content LONGTEXT,
            layout_filename varchar(255) DEFAULT 'default',
            scripts TEXT,
            styles TEXT,
            hidden BOOLEAN DEFAULT false,
            UNIQUE(path)
        );
	`)
	if err != nil {
		log.Fatal(err.Error())
	}
	defer db.Close()
}

func menusTable(){
	db := Connection()
	defer db.Close()
	_, err := db.Query(`
		CREATE TABLE IF NOT EXISTS menus (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            title TEXT,
            name varchar(255),
            hidden BOOLEAN DEFAULT false,
            global BOOLEAN DEFAULT false,
            UNIQUE(name)
        );
	`)
	if err != nil {
		log.Fatal(err.Error())
	}
}

func menusItemsTable(){
	db := Connection()
	defer db.Close()
	_, err := db.Query(`
		CREATE TABLE IF NOT EXISTS menus_items (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            title TEXT,
            url TEXT,
            icon TEXT,
            hidden BOOLEAN DEFAULT false,
            menu_id INT NOT NULL,
            parent_id INT NOT NULL DEFAULT 0
        );
	`)
	if err != nil {
		log.Fatal(err.Error())
	}
}

func pagesMenusTable(){
	db := Connection()
	defer db.Close()
	_, err := db.Query(`
		CREATE TABLE IF NOT EXISTS pages_menus (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            menu_id int,
            page_id int,
            FOREIGN KEY (menu_id) REFERENCES menus(id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE ON UPDATE CASCADE
        );
	`)
	if err != nil {
		log.Fatal(err.Error())
	}
}

func CreateTables(){
	pagesTable()
	menusTable()
	menusItemsTable()
	pagesMenusTable()
}