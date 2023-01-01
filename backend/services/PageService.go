package services

import (
	"backend/db"
	"backend/models"
	"errors"
	"log"
)

type PageService struct{}

func (p *PageService) GetByPath(path string) (models.Page, error) {
	db, err := db.Connect()
	if err != nil {
		log.Fatal(err.Error())
	}

	page := models.Page{}

	// global menus
	globalMenus := []models.Menu{}
	db.Where("global = true").Preload("Items").Find(&globalMenus)

	// global blocks
	// globalBlock := []models.Block{}

	if err := db.Where("path = ?", path).Where("hidden = false").Preload("Menus").Preload("Blocks").First(&page).Error; err != nil {
		return page, errors.New("Page not found")
	}

	if len(globalMenus) != 0 {
		page.Menus = append(page.Menus, globalMenus...)
	}

	return page, nil
}

func (p *PageService) GetList(limit int, offset int) ([]models.Page, error) {
	db, err := db.Connect()
	if err != nil {
		log.Fatal(err.Error())
	}

	pages := []models.Page{}

	db.Find(&pages).Limit(limit).Offset(offset)

	if len(pages) == 0 {
		return pages, errors.New("Pages not found")
	}

	return pages, nil
}