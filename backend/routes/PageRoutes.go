package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func PageRoutes(router *gin.Engine) {
	pageController := new(controllers.PageController)
	router.GET("/byPath", pageController.GetPageByPath)

	group := router.Group("/pages")
	group.GET("/list", pageController.GetList)
	group.GET("/byPath", pageController.GetPageByPath)
	group.GET("/byId/:id", pageController.GetById)
	group.POST("/create", pageController.Create)
	group.PUT("/update/:id", pageController.Update)
	group.DELETE("/delete/:id", pageController.Delete)
}