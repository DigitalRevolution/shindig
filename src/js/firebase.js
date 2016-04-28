'use strict';
$(function(){

// Create Firebase Connection
var shindig = {};
var user = {};

var shindigdb = new Firebase('https://shindig.firebaseio.com/events');
var usersdb = new Firebase('https://shindig.firebaseio.com/users');

	$('#newShindig').submit(function(e){
		e.preventDefault();
		shindig.name = $('#eventname').val();
		shindig.type = $('#eventtype').val();
		shindig.host = $('#eventhost').val();
		shindig.startDate = $('#startdate').val();
		shindig.startTime = $('#starttime').val();
		shindig.endDate = $('#enddate').val();
		shindig.endTime = $('#endtime').val();
		shindig.details = $('#eventdeets').val();
		shindig.location = $('#location').val();

		shindigdb.push(shindig, function(){
			$("input[type=text], input[type=date], input[type=time], textarea").val("");
			window.location = "../";
		});
	});

	$('#newUser').submit(function(e){
		e.preventDefault();
		user.name = $('#name').val(); 
		user.email = $('#email').val();
		user.password = $('#password').val();  

		usersdb.push(user, function(){
			window.location = "../";
		});
	});

	shindigdb.once("value", function(snapshot) {
		var output = "<div>"; 
	  	snapshot.forEach(function(childSnapshot) {
	    	var shindig = childSnapshot.val();
	    	console.log(shindig.name);
	    	console.log(shindig.type);
	    	console.log(shindig.host);
	    	console.log(shindig.startDate + " at " + shindig.startTime);
	    	console.log(shindig.endDate + " at " + shindig.endTime);
	    	console.log(shindig.details);
	    	console.log(shindig.location);
	   		output += shindig.name;
	   		output += shindig.type;
	   		output += shindig.host;
	   		output += shindig.startDate + " at " + shindig.startTime;
	   		output += shindig.endDate + " at " + shindig.endTime;
	   		output += shindig.details;
	   		output += shindig.location; 
  		});
  		output += "</div>";
  		//console.log(output); 
	});


}); 
