package services

import (
	"backend/db"
	"backend/models"
	"errors"
)

var (
	pageNotFound = errors.New("page not found")
	pagesNotFound = errors.New("pages not found")
)

type PageService struct{}

func (p *PageService) GetByPath(path string) (models.Page, error) {
	client := db.Connect()
	page := models.Page{}

	// global menus
	globalMenus := []models.Menu{}
	client.Where("global = true").Preload("Items").Find(&globalMenus)

	if err := client.Where("path = ?", path).Where("hidden = false").Preload("Menus.Items").Preload("Blocks").First(&page).Error; err != nil {
		return page, pageNotFound
	}

	if len(globalMenus) != 0 {
		page.Menus = append(page.Menus, globalMenus...)
	}

	return page, nil
}

func (p *PageService) GetById(id string) (models.Page, error) {
	client := db.Connect()
	page := models.Page{}

	if err := client.Where("id = ?", id).Where("hidden = false").Preload("Menus.Items").Preload("Blocks").First(&page).Error; err != nil {
		return page, pageNotFound
	}

	return page, nil
}

func (p *PageService) GetList(limit int, offset int) ([]models.Page, error) {
	client := db.Connect()

	pages := []models.Page{}

	client.Find(&pages).Limit(limit).Offset(offset)

	if len(pages) == 0 {
		return pages, pagesNotFound
	}

	return pages, nil
}