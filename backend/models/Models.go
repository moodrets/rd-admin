package models

import (
	"time"
)

type Page struct {
	Id        uint `gorm:"primaryKey" json:"id"`
	CreatedAt time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt time.Time `gorm:"autoUpdateTime" json:"updated_at"`
	PageTitle string `gorm:"type:text" json:"page_title"`
	PageDescription string `gorm:"type:text" json:"page_description"`
	Path string `gorm:"unique;not null" json:"path"`
	Redirect string `gorm:"type:text" json:"redirect"`
	Title string `gorm:"type:text" json:"title"`
	Content string `gorm:"type:longtext" json:"content"`
	LayoutFilename string `gorm:"type:text" json:"layout_filename"`
	Scripts string `gorm:"type:longtext" json:"scripts"`
	Styles string `gorm:"type:longtext" json:"styles"`
	Hidden bool `gorm:"type:bool;default:false" json:"hidden"`
	Menus []Menu `gorm:"many2many:pages_menu;" json:"menus"`
}

type Menu struct {
	Id        uint `gorm:"primaryKey" json:"id"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	Title string `gorm:"type:text" json:"title"` 
	Name string `gorm:"unique;not null;varchar(255)" json:"name"`
	Hidden bool `gorm:"type:bool;default:false" json:"hidden"`
	Global bool `gorm:"type:bool;default:false" json:"global"`
}

type MenuItem struct {
	Id        uint      `gorm:"primaryKey" json:"id"`
	CreatedAt time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt time.Time `gorm:"autoUpdateTime" json:"updated_at"`
	Title string `gorm:"type:text" json:"title"`
	Url string `gorm:"type:text" json:"url"`
	Icon string `gorm:"type:text" json:"icon"`
	Hidden bool `gorm:"type:bool;default:false" json:"hidden"`
	MenuId Menu `gorm:"foreignkey:Id" json:"menu_id"`
	ParentId uint `json:"parent_id"`
}