package main

import (
	"backend/db"
	"backend/routes"
	"net/http"
)

func main() {
	db.CreateTables()
	routes.PageRoutes()
	http.ListenAndServe("127.0.0.1:1346", nil)
}