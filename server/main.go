package main

import ("fmt"
		"ichat/server/helper"
		model "ichat/server/model"

	)

func main(){
	fmt.Println("Welcome to the GoLang server of iChat.");
	res:=helper.Add(2,6);
	fmt.Println("Result of the addition is : ",res);

	


	//Array of structs : 

	var userData []model.User
	for i:=1;i<3;i++ {

		var u model.User;
		
		fmt.Println("First Name : ");
		fmt.Scan(&u.FirstName);

		fmt.Println("Last Name : ");
		fmt.Scan(&u.LastName);

		fmt.Println("Email  : ");
		fmt.Scan(&u.Email);

		fmt.Println("No. of tickets : ");
		fmt.Scan(&u.Tickets);

		userData=append(userData,u);
	}


	helper.PrintUserData(userData);
	

}