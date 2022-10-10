package db

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

func Connection() (db *sql.DB) {
	db, err := sql.Open("mysql", "root:root@tcp(localhost:3308)/rd_admin")
	if err != nil {
        log.Fatal(err)
    }
	return
}