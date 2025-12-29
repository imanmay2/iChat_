package router

import (
	"github.com/gin-gonic/gin"
	controller "ichat/server/controllers"
)

func RegisterUser(router *gin.Engine) {
	user := router.Group("/user")
	user.GET("/:id", controller.GetUser)
	user.POST("/", controller.CreateUser)

}
