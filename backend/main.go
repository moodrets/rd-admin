package main

import (
	"backend/db"
	"backend/models"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	client := db.Connect()
	client.AutoMigrate(&models.Page{})
	client.AutoMigrate(&models.Menu{})
	client.AutoMigrate(&models.MenuItem{})
	client.AutoMigrate(&models.Block{})
	client.AutoMigrate(&models.Setting{})
	db.FillMockData(client)

	router := gin.Default()
	routes.PageRoutes(router)
	routes.AuthRoutes(router)
	router.Run("127.0.0.1:1346")
}