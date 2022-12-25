package services

import (
	"backend/db"
	"backend/models"
	"errors"
	"log"
)

func PagesGetByPath(path string) (*models.Page, error) {
	db, err := db.Connect()
	if err != nil {
		log.Fatal(err.Error())
	}

	page := models.Page{}
	result := db.Where("path = ?", path).Preload("Menus").First(&page)

	if result.RowsAffected == 0 {
		return &page, errors.New("Page not found")
	}

	return &page, nil
}