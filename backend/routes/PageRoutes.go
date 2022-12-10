package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func PageRoutes(router *gin.Engine) {
	pageController := new(controllers.PageController)
	router.GET("/pages/list", pageController.GetList)
	router.GET("/pages/byPath", pageController.GetPageByPath)
	router.GET("/pages/byId", pageController.GetById)
	router.POST("/pages/create", pageController.Create)
	router.PUT("/pages/update/:id", pageController.Update)
	router.DELETE("/pages/delete/:id", pageController.Delete)
}