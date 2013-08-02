// JavaScript Document
function setdraggable(property){
	$("div").draggable(property);
}

$(function() {
	$("div").draggable();
});



function togglestyle1(el){
	var prop="";
    if(el.className == "on1") {	
		prop="disable";
    	el.className="off1";		
    } else {
		prop="enable";
    	el.className="on1";
    }
	setdraggable(prop);
}

function togglestyle2(el){
    if(el.className == "on2") {
    	el.className="off2";
    } else {
		$("#letterA").css({top: '50px', left: '200px'});
		$("#letterB").css({top: '50px', left: '400px'});
		$("#letterC").css({top: '50px', left: '600px'});
			
		$("#letterD").css({top: '250px', left: '200px'});
		$("#letterE").css({top: '250px', left: '400px'});
		$("#letterF").css({top: '250px', left: '600px'});
		
		$("#letterG").css({top: '450px', left: '200px'});
		$("#letterH").css({top: '450px', left: '400px'});
		$("#letterI").css({top: '450px', left: '600px'});
    	el.className="on2";
		
		
		
    }
}