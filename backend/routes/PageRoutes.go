package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func PageRoutes(route *gin.Engine) {
	pageController := new(controllers.PageController)
	route.GET("/pages/list", pageController.GetList)
	route.GET("/pages/byPath", pageController.GetPageByPath)
	route.GET("/pages/byId", pageController.GetById)
	route.POST("/pages/create", pageController.Create)
	route.PUT("/pages/update/:id", pageController.Update)
	route.DELETE("/pages/delete/:id", pageController.Delete)
}