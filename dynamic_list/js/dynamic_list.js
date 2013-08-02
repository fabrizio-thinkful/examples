// JavaScript Document



function add(param_text, param_list, param_msg) {	
	var element = document.getElementById(param_text).value;
	var container = document.getElementById(param_list);			
	var new_element = document.createElement('li');     
	new_element.innerHTML = element;		
	console.log("say hello");
	container.insertBefore(new_element, container.firstChild);				
	document.getElementById(param_msg).display="block";	
	document.getElementById(param_msg).innerHTML = "Element " + element + " added!" ;	
	document.getElementById(param_text).value="";	
}


function add2(param_text, param_list, param_msg){
	$("#"+param_list).prepend("<li>"+$('input[id='+param_text+']').val()+"</li>");
	$("#"+param_msg).text("Element "+ $('input[id='+param_text+']').val()+" added!");
	$("#"+param_text).val("");
}
