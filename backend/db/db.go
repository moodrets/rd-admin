package db

import (
	"backend/models"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func Connect() (*gorm.DB, error) {
    db, err := gorm.Open(mysql.Open("root:root@tcp(127.0.0.1:3308)/rd_admin?parseTime=true"), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Silent),
	})

    if err != nil {
        log.Fatal(err.Error())
    }

    return db, err
}

func FillMockData(db *gorm.DB) {
	menu := models.Menu{Name: "main_menu", Title: "Main Menu"}
	menu2 := models.Menu{Name: "top_menu", Title: "Top Menu", Global: true}
	page := models.Page{Path: "/", Title: "Main Page"}
	menuItem := models.MenuItem{Url: "/", Title: "Item", MenuId: 1}
	menuItem2 := models.MenuItem{Url: "/", Title: "Item2", MenuId: 2}
	db.Create(&page)
	db.Create(&menu)
	db.Create(&menu2)
	db.Create(&menuItem)
	db.Create(&menuItem2)
}