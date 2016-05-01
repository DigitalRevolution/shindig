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
		shindig.startDateTime = $('#eventstartdatetime').val();
		shindig.endDateTime = $('#eventenddatetime').val();
		shindig.details = $('#eventdeets').val();
		shindig.location = $('#location').val();
		shindig.message = $('#optionalmsg').val();

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
		user.details = $('#memberdeets').val(); 

		usersdb.push(user, function(){
			window.location = "../";
		});
	});

	shindigdb.orderByChild("startDate").limitToFirst(3).once("value", function(snapshot) {
		var output = ''; 
	  	snapshot.forEach(function(childSnapshot) {
	    	var shindig = childSnapshot.val();
	    	var startDateTime = moment(shindig.startDateTime).format("dddd, MMMM Do YYYY [at] h:mm:ss a"); 
	    	var endDateTime = moment(shindig.endDateTime).format("dddd, MMMM Do YYYY [at] h:mm:ss a"); 
			output += '<table class = "table table-striped table-bordered">';
	   		output += '<tr><td>Event Name: </td><td> ' + shindig.name + '</td></tr>';
	   		output += '<tr><td>Event Type: </td><td> ' + shindig.type + '</td></tr>';
	   		output += '<tr><td>Event Host: </td><td> ' + shindig.host + '</td></tr>';
	   		output += '<tr><td>Event Location: </td><td> ' + shindig.location + '</td></tr>';
	   		output += '<tr><td>Event Start: </td><td> ' + startDateTime + '</td></tr>';
	   		output += '<tr><td>Event End: </td><td> ' + endDateTime + '</td></tr>';
	   		output += '<tr><td>Event Details: </td><td> ' + shindig.details + '</td></tr>';
	   		output += '</table>'
  		});
		$('.output').html(output);
	});


}); 
