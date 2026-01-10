package controllers

import (
	// "fmt"
	"context"
	con "ichat/server/config"
	model "ichat/server/model"
	"log"

	"github.com/gin-gonic/gin"
)

func GetUser(c *gin.Context) {

	//Post Request
	var userLoginDetails model.Login
	err := c.ShouldBindJSON(&userLoginDetails)
	if err != nil {
		c.IndentedJSON(400, gin.H{"Message": "Internal Server Error", "err": true})
		return
	}
	log.Println("----->Email got from post request is : ", userLoginDetails.Email)
	query := ` SELECT name,password FROM test_user where email=$1 `
	var dbPass, dbName string
	err_ := con.DB.QueryRow(context.Background(), query, userLoginDetails.Email).Scan(&dbName, &dbPass)
	// if(err_==sql.ErrNoRows){
	// 	c.IndentedJSON(200,gin.H{"","err":true})
	// 	return
	// }
	if err_ != nil {
		c.IndentedJSON(400, gin.H{"Message": "Email is Invalid", "err": true})
		return
	}

	if userLoginDetails.Password != dbPass {
		c.IndentedJSON(200, gin.H{"Message": "Password is incorrect", "err": false})
		return
	}
	c.IndentedJSON(200, gin.H{"Message": "User Logged in Successfully", "username": dbName, "err": false})
}

func RegisterUser(c *gin.Context) {
	var userDetails model.SignUp
	if err := c.ShouldBindJSON(&userDetails); err != nil {
		c.IndentedJSON(400, gin.H{"Message": "Data not found !! ", "err": true})
		return
	}

	var id string

	query := ` INSERT INTO test_user (name,email,password) values($1,$2,$3) RETURNING id `
	err := con.DB.QueryRow(context.Background(), query, userDetails.Name, userDetails.Email, userDetails.Password).Scan(&id)
	if err != nil {
		log.Fatal("Error : " + err.Error())
		return
	}

	log.Println("------------>ID from RegisterUser function is : " + id)

	c.IndentedJSON(200, gin.H{"Message": "Data saved successfully.", "err": false})
}
