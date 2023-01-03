package services

import (
	"backend/db"
	"backend/models"
	"errors"
)

type PageService struct{}

func (p *PageService) GetByPath(path string) (models.Page, error) {
	client := db.Connect()
	page := models.Page{}
	globalMenus := []models.Menu{}
	// globalBlock := []models.Block{}

	// global menus
	client.Where("global = true").Preload("Items").Find(&globalMenus)

	// global block

	if err := client.Where("path = ?", path).Where("hidden = false").Preload("Menus").Preload("Blocks").First(&page).Error; err != nil {
		return page, errors.New("Page not found")
	}

	if len(globalMenus) != 0 {
		page.Menus = append(page.Menus, globalMenus...)
	}

	return page, nil
}

func (p *PageService) GetList(limit int, offset int) ([]models.Page, error) {
	client := db.Connect()

	pages := []models.Page{}

	client.Find(&pages).Limit(limit).Offset(offset)

	if len(pages) == 0 {
		return pages, errors.New("Pages not found")
	}

	return pages, nil
}