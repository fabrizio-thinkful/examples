// JavaScript Document

function filloutcombo(){
	x=0;
  while(x<50){
		var myopt = document.createElement("option");		
		var mycombo = document.getElementById("books");
		
		myopt.innerHTML="<option value='"+x+"'>Book "+x+"</option>";
		mycombo.insertBefore(myopt,mycombo.lastChild);
		x++;
	}
}