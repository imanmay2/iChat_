package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	// model "ichat/server/model"
	router "ichat/server/router"
	"time"


	"ichat/server/config"

	"github.com/gin-contrib/cors"
)

func main() {

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error in loading the DB : " + err.Error())
	}

	url := os.Getenv("DB_URL")
	fmt.Println("URL is " + url)
	config.ConnectDB()

	app := gin.Default()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	//routing
	router.RegisterUser(app)

	app.Run(":8080")

}