package controllers

import (
	"fmt"
	"github.com/gin-gonic/gin"
	model "ichat/server/model"
)

func GetUser(c* gin.Context){
	email:=c.Param("email")
	
	//supabase search
	fmt.Println("Email got : ",email);
	UserData:=model.SignUp{
		Name:"Manmay Chakraborty",
		Email:"imanmay2@gmail.com",
		Password:"Manmay1234",
	}


	c.IndentedJSON(200,UserData)
}


func RegisterUser(c *gin.Context){
	var userDetails model.SignUp
	if err:=c.ShouldBindJSON(&userDetails);err!=nil{
		c.IndentedJSON(400,gin.H{"Message":"Data not found !! ","err":true})
		return
	}

	c.IndentedJSON(200,gin.H{"Message":"Data saved successfully."})
}