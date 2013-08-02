// JavaScript Document

function displaymessage(str_message){
	alert(str_message);
}

function displaymessage2(str_message){
	var str_additional = ", this is what I think";
	alert(str_message + str_additional);
	return "";
}

function message(pObject){
  	alert(document.getElementById(pObject).value);
}




$("#mybutton").on("click",function(){
		alert($("#txtMyName").val(function(data){
		}));
});
