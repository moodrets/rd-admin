package controllers

import (
	"backend/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

var pageService = new(services.PageService)

type PageController struct{}

func (controller *PageController) GetPageByPath(c *gin.Context) {
	page, err := pageService.GetByPath(c.Query("path"))

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"page": page})
}

func (controller *PageController) GetById(c *gin.Context) {
	pageId := c.Param("id")
	page, err := pageService.GetById(pageId)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"page": page})
}

func (controller *PageController) GetList(c *gin.Context) {
	pages, err := pageService.GetList(20, 0)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"message": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"pages": pages})
}

func (controller *PageController) Create(c *gin.Context)  {}
func (controller *PageController) Update(c *gin.Context)  {}
func (controller *PageController) Delete(c *gin.Context)  {}