package db

import (
	"log"
)

func pageTable(){
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

func CreateTables(){
	pageTable()
}