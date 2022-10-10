package models

type AppPage struct {
	Id               uint    `json:"id"`
	Page_title       *string `json:"page_title"`
	Page_description *string `json:"page_description"`
	Path             string  `json:"path"`
	Redirect         *string `json:"redirect"`
	Title            *string `json:"title"`
	Content          *string `json:"content"`
	Layout_filename  *string `json:"layout_filename"`
	Scripts          *string `json:"scripts"`
	Styles           *string `json:"styles"`
}