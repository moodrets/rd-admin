package routes

import (
	"backend/controllers"
	"net/http"
)

func PageRoutes(){
	// for app
	http.HandleFunc("/page/byPath", controllers.GetAppPage())

	// for admin
	http.HandleFunc("/page/list", controllers.GetPagesList())
	http.HandleFunc("/page/create", controllers.PageCreate())
	http.HandleFunc("/page/update/{id}", controllers.PageUpdate())
	http.HandleFunc("/page/delete/{id}", controllers.PageDelete())
}