package main

import (
	"backend/db"
	"backend/routes"
	"net/http"
)

func main() {
	db.CreateTables()
	routes.PageRoutes()
	http.ListenAndServe(":1346", nil)
}