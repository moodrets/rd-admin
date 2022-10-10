package controllers

import (
	"backend/services"
	"encoding/json"
	"net/http"
)

func GetPageApp() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if (r.Method == "GET") {
			path := r.URL.Query().Get("path")
			page := services.GetAppPage(path)
			responseData := map[string]interface{}{
				"page": page,
				"menus": nil,
				"blocks": nil,
			}
			responseJSON, _ := json.Marshal(responseData)
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusOK)
			w.Write(responseJSON)
			return
		}

		w.WriteHeader(http.StatusNotFound)
	}
}

func GetPageById() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if (r.Method == "GET") {
			return
		}
		w.WriteHeader(http.StatusNotFound)
	}
}

func GetPagesList() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request){
		if (r.Method == "GET") {
			return
		}
		w.WriteHeader(http.StatusNotFound)
	}
}

func CreatePage() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if (r.Method == "POST") {
			return
		}
		w.WriteHeader(http.StatusNotFound)
	}
}

func UpdatePage() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if (r.Method == "PUT") {

		}
		w.WriteHeader(http.StatusNotFound)
	}
}

func DeletePage() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if (r.Method == "DELETE") {

		}
		w.WriteHeader(http.StatusNotFound)
	}
}