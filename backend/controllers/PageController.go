package controllers

import (
	"backend/services"
	"encoding/json"
	"net/http"
)

func GetAppPage() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if (r.Method == "GET") {
			path := r.URL.Query().Get("path")
			page := services.GetAppPage(path)
			pageJson, err := json.Marshal(page)
			if err != nil{
				return
			}
			// result := make(map[string]string)
			// resultJson, err := json.Marshal(result)
			// if err != nil{
			// 	return
			// }
			// result["page"] = pageJSON
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusOK)
			w.Write(pageJson)
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

func PageCreate() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if (r.Method == "POST") {
			return
		}
		w.WriteHeader(http.StatusNotFound)
	}
}

func PageUpdate() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if (r.Method == "PUT") {

		}
		w.WriteHeader(http.StatusNotFound)
	}
}

func PageDelete() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if (r.Method == "DELETE") {

		}
		w.WriteHeader(http.StatusNotFound)
	}
}