package main

import (
	// "fmt"
	"github.com/gin-gonic/gin"
	// model "ichat/server/model"
	router "ichat/server/router"
)

func main(){
	app:=gin.Default()

	// app.GET("/greet",func(c *gin.Context){
	// 	fmt.Println("Welcome to GoLang Server...");
	// 	c.JSON(200,gin.H{"msg":"Welcome to GoLang RESTFul operation."})
	// })


	// app.GET("/user/:id",func(c *gin.Context){
	// 	id:=c.Param("id");
	// 	c.String(200,"The id of the user is : %v",id);
	// })


	// app.GET("search",func(c *gin.Context){
	// 	q:=c.Query("q");
	// 	c.String(200,"The query searched is : %v",q);
	// })

	// app.POST("/login",func(c *gin.Context){
	// 	var user model.User
	// 	if err:=c.ShouldBindJSON(&user);err!=nil{
	// 		c.JSON(400,gin.H{"err":err.Error()})
	// 		return
	// 	}
	// 	c.JSON(200,gin.H{"name":user.Name,"email":user.Email})
	// })

	//routing
	router.RegisterUser(app)

	app.Run(":3000");
}