package main

import (
	"backend/db"
	"backend/models"
	"backend/routes"
	"log"

	"github.com/gin-gonic/gin"
)

func main() {

	db,err := db.Connect()
	if err != nil {
        log.Fatal(err.Error())
    }

	db.AutoMigrate(&models.Page{})
	db.AutoMigrate(&models.Menu{})
	db.AutoMigrate(&models.MenuItem{})

	ginRouter := gin.Default()
	routes.PageRoutes(ginRouter)
	ginRouter.Run("127.0.0.1:1346")
}