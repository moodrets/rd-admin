package main

import (
	"backend/db"
	"backend/models"
	"backend/routes"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	database, err := db.Connect()

	if err != nil {
		log.Fatal(err.Error())
	}

	database.AutoMigrate(&models.Page{})
	database.AutoMigrate(&models.Menu{})
	database.AutoMigrate(&models.MenuItem{})
	database.AutoMigrate(&models.Block{})
	// database.AutoMigrate(&models.Settings{})

	db.FillMockData(database)

	router := gin.Default()

	routes.PageRoutes(router)
	routes.AuthRoutes(router)

	router.Run("127.0.0.1:1346")
}
