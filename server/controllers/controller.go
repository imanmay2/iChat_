package controllers

import (
	"fmt"
	"log"
	"github.com/gin-gonic/gin"
	con "ichat/server/config"
	model "ichat/server/model"
	"context"
	
)

func GetUser(c* gin.Context){
	email:=c.Param("email")
	
	//supabase search
	fmt.Println("-------> Email got : ",email);
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

	var id string

	query:=` INSERT INTO test_user (name,email,password) values($1,$2,$3) RETURNING id `
	err:=con.DB.QueryRow(context.Background(),query,userDetails.Name,userDetails.Email,userDetails.Password).Scan(&id)
	if err!=nil{
		log.Fatal("Error : "+err.Error())
	}

	log.Println("------------>ID from RegisterUser function is : "+id)

	c.IndentedJSON(200,gin.H{"Message":"Data saved successfully."})
}