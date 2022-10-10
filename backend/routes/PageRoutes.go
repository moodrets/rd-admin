package routes

import (
	"backend/controllers"
	"net/http"
)

func PageRoutes(){
	http.HandleFunc("/page/byPath", controllers.GetPageApp())
	http.HandleFunc("/page/list", controllers.GetPagesList())
	http.HandleFunc("/page/{id}", controllers.GetPageById())
	http.HandleFunc("/page/create", controllers.CreatePage())
	http.HandleFunc("/page/update/{id}", controllers.UpdatePage())
	http.HandleFunc("/page/delete/{id}", controllers.DeletePage())
}