package models

import (
	"time"
)

type Setting struct {
	Id        uint      `gorm:"primaryKey" json:"id"`
	CreatedAt time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt time.Time `gorm:"autoUpdateTime" json:"updated_at"`
}

type Page struct {
	Id              uint      `gorm:"primaryKey" json:"id"`
	CreatedAt       time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt       time.Time `gorm:"autoUpdateTime" json:"updated_at"`
	PageTitle       string    `gorm:"type:text" json:"page_title"`
	PageDescription string    `gorm:"type:text" json:"page_description"`
	Path            string    `gorm:"unique;not null" json:"path"`
	Redirect        string    `gorm:"type:text" json:"redirect"`
	Title           string    `gorm:"type:text" json:"title"`
	Content         string    `gorm:"type:longtext" json:"content"`
	LayoutFilename  string    `gorm:"type:varchar(255);DEFAULT:common" json:"layout_filename"`
	Scripts         string    `gorm:"type:longtext" json:"scripts"`
	Styles          string    `gorm:"type:longtext" json:"styles"`
	Hidden          bool      `gorm:"type:bool;DEFAULT:false" json:"hidden"`
	Menus           []Menu    `gorm:"many2many:pages_menu;" json:"menus,omitempty"`
	Blocks          []Block   `gorm:"many2many:pages_blocks;" json:"blocks,omitempty"`
}

type Menu struct {
	Id        uint      `gorm:"primaryKey" json:"id"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	Title     string    `gorm:"type:text" json:"title"`
	Name      string    `gorm:"unique;not null;varchar(255)" json:"name"`
	Hidden    bool      `gorm:"type:bool;DEFAULT:false" json:"hidden"`
	Global    bool      `gorm:"type:bool;DEFAULT:false" json:"global"`
	Items     []MenuItem `json:"items,omitempty"`
}

type MenuItem struct {
	Id        uint      `gorm:"primaryKey" json:"id"`
	CreatedAt time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt time.Time `gorm:"autoUpdateTime" json:"updated_at"`
	Title     string    `gorm:"type:text" json:"title"`
	Url       string    `gorm:"type:text" json:"url"`
	Icon      string    `gorm:"type:text" json:"icon"`
	Hidden    bool      `gorm:"type:bool;DEFAULT:false" json:"hidden"`
	ParentId  uint      `gorm:"DEFAULT:0" json:"parent_id"`
	MenuId    int       `json:"menu_id"`
}

type Block struct {
	Id        uint      `gorm:"primaryKey" json:"id"`
	CreatedAt time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt time.Time `gorm:"autoUpdateTime" json:"updated_at"`
	Name      string    `gorm:"not null;" json:"name"`
	Title     string    `gorm:"type:text" json:"title"`
	JsonData  string    `gorm:"type:json" json:"json_data"`
	Global    bool      `gorm:"type:bool;DEFAULT:true" json:"global"`
}