package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func AuthRoutes(router *gin.Engine) {
	AuthController := new(controllers.AuthController)
	router.POST("/admin", AuthController.Login)
}