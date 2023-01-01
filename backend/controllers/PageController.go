package controllers

import (
	"backend/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

var pageService = new(services.PageService)

type PageController struct {}

func (controller *PageController) GetPageByPath(c *gin.Context) {
	page, err := pageService.GetByPath(c.Query("path"))

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"page": page})
}

func (controller *PageController) GetById(c *gin.Context) {}
func (controller *PageController) GetList(c *gin.Context) {}
func (controller *PageController) Create(c *gin.Context) {}
func (controller *PageController) Update(c *gin.Context) {}
func (controller *PageController) Delete(c *gin.Context) {}