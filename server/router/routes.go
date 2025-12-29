package router

import (
	"github.com/gin-gonic/gin"
	controller "ichat/server/controllers"
)

func RegisterUser(router *gin.Engine) {
	user := router.Group("/auth")
	user.GET("/login/:email", controller.GetUser)
	user.POST("/signup", controller.RegisterUser)
}
