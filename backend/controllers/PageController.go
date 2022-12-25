package controllers

import (
	"backend/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

type PageController struct {}

var pageService = new(services.PageService)

func (controller *PageController) GetPageByPath(c *gin.Context) {
	page, err := pageService.PagesGetByPath(c.Query("path"))

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