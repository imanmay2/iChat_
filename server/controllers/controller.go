package controllers

import (
	"github.com/gin-gonic/gin"
	model "ichat/server/model"
)

func GetUser(c *gin.Context){
	userInfo:=[]model.User{{
		Name:"Anwesha",
		Email:"ianwesha2@gmail.com",
	},
	{
		Name:"Manmay",
		Email:"ianwesha2@gmail.com",
	}}

	id:=c.Param("id");
	for _,obj := range userInfo {
		if obj.Name==id{
			c.IndentedJSON(200,obj)
			return
		}
	}

	c.JSON(400,gin.H{"err":"Data not found!!"})
	
}

func CreateUser(c *gin.Context){
	var user model.User

	if err:=c.ShouldBindJSON(&user); err!=nil{
		c.IndentedJSON(400,gin.H{"err":err.Error()});
		return
	}


	c.IndentedJSON(200,gin.H{
		"Name":user.Name,
		"Email":user.Email,
	})
}