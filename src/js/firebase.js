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
		var output = ''; 
		//$('.output').html('');
	  	snapshot.forEach(function(childSnapshot) {
	    	var shindig = childSnapshot.val();
			output += '<table class = "table table-striped table-bordered">';
	   		output += '<tr><td>Event Name: </td><td> ' + shindig.name + '</td></tr>';
	   		output += '<tr><td>Event Type: </td><td> ' + shindig.type + '</td></tr>';
	   		output += '<tr><td>Event Host: </td><td> ' + shindig.host + '</td></tr>';
	   		output += '<tr><td>Event Location: </td><td> ' + shindig.location + '</td></tr>';
	   		output += '<tr><td>Event Start: </td><td> ' + shindig.startDate + ' at ' + shindig.startTime + '</td></tr>';
	   		output += '<tr><td>Event End: </td><td> ' + shindig.endDate + ' at ' + shindig.endTime + '</td></tr>';
	   		output += '<tr><td>Event Details: </td><td> ' + shindig.details + '</td></tr>';
	   		output += '</table>'
  		});
		$('.output').html(output);
	});


}); 
