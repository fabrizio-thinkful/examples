// JavaScript Document

var number = Math.floor(Math.random()*100);


/*function generateNumber(){
	number = 25;
}*/

function validate(param){    //0 - 100
	if(isNaN(param) || param === null || param == "undefined" || param == ""){
		return -1;		
	} else {
		return +param;
	}	
}

function checking(param){
	var guess = validate(param);
	var message = "";
	if(guess==-1){
		message = "You didn't type a valid number! Try again";
	} else if(guess == number){
		message = "Woo hoo, great guess!";
	} else if(guess>(number*1.5) || guess<(number/2)){
		message = "You're Cold, Try Again!";
	} else {
		message = "You're Warm, Try Again!";	
	}
	return message;
}

function displaymessage(param){
	pMessage = checking(param);
	document.getElementById("message").innerHTML = pMessage;
	document.getElementById("message").display = "block";
}