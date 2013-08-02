// JavaScript Document

stat = 0;

$(function(){
	availableTags = ["Plan ", "Create ", "Complete "];
  $("#txttask").autocomplete({
		source: availableTags,
		messages: {
        noResults: '',
        results: function() {}
    }
	});
});  


function cleartext(){  
  if(stat===0){
    $('#txttask').val('');
		stat=1;
  }
}

function formatstring(){
  var mFormattedString="";  
	mTask="",mUrgency="",mWho="",mWhen="";
	mFormattedString+=$("#txttask").val();
  switch(+$("#ddl_urgency option:selected").val()){
    case 1: mTask="(!LO.IM)";break;
    case 2: mTask+="(!HI.IM)";break;
    case 3: mTask+="(!LO.HU)";break;
    case 4: mTask+="(!HI.HU)";break;
  }
	switch(+$("#ddl_time option:selected").val()){
    case 1: mUrgency="(2h)";break;
    case 2: mUrgency="(5m)";break;
    case 3: mUrgency="(30m)";break;
  }				
	if(+$("#ddl_assignee option:selected").val()>0){
		 var iCheck=0;
		 $('#ddl_assignee option:selected').each(function(index, value) {
	     mWho+=(iCheck>0)?",":"@";   
			 mWho+=$(value).text();
			 iCheck++;
     });
  }				
	switch(+$("#ddl_deadline option:selected").val()){
    case 1: mWhen="(*"+getdate(gettoday())+")";break;
    case 2: mWhen="(*"+getdate(gettomorrow())+")";break;
    case 3: mWhen="(*"+getdate(getnextweek())+")";break;
  }			
	mFormattedString = mTask + " " + mUrgency + " " + mWho + " " + mWhen;
  alert(mFormattedString);
	//sending_info_to_server(mTask,mUrgency,mWho,mWhen)
  return mFormattedString;
}

function sending_info_to_server(pTask,pUrgency,pWho,pWhen){	
	var parameters = {
  					Task: pTask,
						Urgency: pUrgency,
						Who: pWho,
						When: pWhen
					};
    
	data: JSON.stringify(parameters),
	
	$.ajax({
  	url: '', // the server url
    type: 'POST',
    data: JSON.stringify(p),
    success: function(result) {
    	alert(result.data);
    }
  });	
}


function getdate(pDate){
	var fullDate = pDate;
	var twoDigitMonth = fullDate.getMonth()+1+"";if(twoDigitMonth.length==1)  twoDigitMonth="0" +twoDigitMonth;
	var twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1) twoDigitDate="0" +twoDigitDate;
	var currentDate = twoDigitMonth + "/" + twoDigitDate + "/" + fullDate.getFullYear();
	return currentDate;
}

function gettoday(){
	return new Date();
}

function gettomorrow(){
	var tomorrow = new Date();
	tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));
	return tomorrow;
}

function getnextweek(){
	var tomorrow = new Date();
	tomorrow.setTime(tomorrow.getTime() + (1000*3600*165));
	return tomorrow;
}