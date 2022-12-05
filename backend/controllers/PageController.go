package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type PageController struct {}

func (controller *PageController) GetPageByPath(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"samsa": "samsu",
	})
}

func (controller *PageController) GetById(c *gin.Context) {}
func (controller *PageController) GetList(c *gin.Context) {}
func (controller *PageController) Create(c *gin.Context) {}
func (controller *PageController) Update(c *gin.Context) {}
func (controller *PageController) Delete(c *gin.Context) {}