package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func PageRoutes(route *gin.Engine) {
	pageController := new(controllers.PageController)
	route.GET("/pages", pageController.GetList)
	route.GET("/pages/byPath", pageController.GetPageByPath)
	route.GET("/pages/:id", pageController.GetById)
	route.POST("/pages", pageController.Create)
	route.PUT("/pages/:id", pageController.Update)
	route.DELETE("/pages/:id", pageController.Delete)
}