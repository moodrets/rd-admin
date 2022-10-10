package services

import (
	"backend/db"
	"backend/models"
	"log"
)

func GetAppPage(path string) models.AppPage {
	db := db.Connection()
	defer db.Close()

	rows, err := db.Query(`
		SELECT 
			id, 
			page_title, 
			page_description,
			path,
			redirect,
			title,
			content,
			layout_filename,
			scripts,
			styles
		FROM pages WHERE path=? AND hidden=false
	`, path)

    if err != nil {
        log.Fatal(err)
    }

	var page models.AppPage

	for rows.Next() {
        if err := rows.Scan(
				&page.Id, 
				&page.Page_title, 
				&page.Page_description, 
				&page.Path, 
				&page.Redirect, 
				&page.Title, 
				&page.Content,
				&page.Layout_filename,
				&page.Scripts,
				&page.Styles);
		err != nil {
            log.Fatal(err)
        }
    }
	return page
}