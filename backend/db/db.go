package db

import (
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func Connect() (*gorm.DB, error) {
    db, err := gorm.Open(mysql.Open("root:root@tcp(127.0.0.1:3308)/rd_admin"), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Silent),
	})

    if err != nil {
        log.Fatal(err.Error())
    }

    return db, err
}