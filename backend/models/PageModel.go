package models

import "database/sql"

type AppPage struct {
	Id               uint    `json:"id"`
	Page_title       sql.NullString `json:"page_title"`
	Page_description sql.NullString `json:"page_description"`
	Path             sql.NullString  `json:"path"`
	Redirect         sql.NullString `json:"redirect"`
	Title            sql.NullString `json:"title"`
	Content          sql.NullString `json:"content"`
	Layout_filename  sql.NullString `json:"layout_filename"`
	Scripts          sql.NullString `json:"scripts"`
	Styles           sql.NullString `json:"styles"`
}