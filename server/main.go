package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	ginRouter := gin.Default()
	ginRouter.Use(cors.Default())

	ginRouter.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"data": "hello world"})
	})

	ginRouter.GET("/ping", func(c *gin.Context) {

		s := c.Query("q")
		c.String(http.StatusOK, s)
	})

	ginRouter.Run()
}
