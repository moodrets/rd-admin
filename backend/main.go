package main

import (
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	ginRouter := gin.Default()
	routes.PageRoutes(ginRouter)
	ginRouter.Run("127.0.0.1:1346")
}