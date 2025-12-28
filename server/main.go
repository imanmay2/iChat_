package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func main(){
	router:=gin.Default()
	
	router.GET("/greet",func(c *gin.Context){
		fmt.Println("Welcome to the first API build in GoLang!!");
		c.JSON(200,gin.H{"msg":"Welcome to the first API build in GoLang!!"})
	})


	router.Run(":8080");
}