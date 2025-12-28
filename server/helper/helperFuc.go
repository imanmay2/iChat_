package helper

import (
	"fmt"
	"ichat/server/model"
)



func Add(num1 int,num2 int) int{
	fmt.Println("Addition function executed.");
	return num1+num2;
}

func PrintUserData(userData []model.User){
	for key,value := range userData{
		fmt.Printf("%v : %v\n",key,value);
	}
}

