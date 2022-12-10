package controllers

import (
	"github.com/gin-gonic/gin"
)

type PageController struct {
}

func (controller *PageController) GetPageByPath(c *gin.Context) {
	// db, err := db.Connect()
    // if err != nil {
    //     log.Fatal(err.Error())
    // }

	// if err := db.Where("path= ?", c.Param("id")).First(&grocery).Error; err != nil {
    //     c.JSON(http.StatusNotFound, gin.H{"error": "Grocery not found"})
    //     return
    // }
}

func (controller *PageController) GetById(c *gin.Context) {}
func (controller *PageController) GetList(c *gin.Context) {}
func (controller *PageController) Create(c *gin.Context) {}
func (controller *PageController) Update(c *gin.Context) {}
func (controller *PageController) Delete(c *gin.Context) {}