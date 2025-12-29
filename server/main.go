package main

import (
	// "fmt"
	"github.com/gin-gonic/gin"
	// model "ichat/server/model"
	router "ichat/server/router"
	"time"
	"github.com/gin-contrib/cors"
)

func main(){
	app:=gin.Default()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:   []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge: 12 * time.Hour,
	}))
	//routing
	router.RegisterUser(app)

	app.Run(":8080");
}