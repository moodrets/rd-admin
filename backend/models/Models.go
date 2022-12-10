package models

import (
	"time"

	"gorm.io/gorm"
)

type Page struct {
	gorm.Model
	ID        uint `gorm:"primaryKey"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
	PageTitle string `gorm:"type:text"`
	PageDescription string `gorm:"type:text"`
	Path string `gorm:"unique;not null"`
	Redirect string `gorm:"type:text"`
	Title string `gorm:"type:text"`
	Content string `gorm:"type:longtext"`
	LayoutFilename string `gorm:"type:text"`
	Scripts string `gorm:"type:longtext"`
	Styles string `gorm:"type:longtext"`
	Hidden bool `gorm:"type:bool;default:false"`
}

type Menu struct {
	gorm.Model
	ID        uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	Title string `gorm:"type:text"`
	Name string `gorm:"unique;not null;varchar(255)"`
	Hidden bool `gorm:"type:bool;default:false"`
	Global bool `gorm:"type:bool;default:false"`
}

type MenuItem struct {
	gorm.Model
	ID        uint      `gorm:"primaryKey"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
	Title string `gorm:"type:text"`
	Url string `gorm:"type:text"`
	Icon string `gorm:"type:text"`
	Hidden bool `gorm:"type:bool;default:false"`
	MenuId Menu
	ParentId uint
}