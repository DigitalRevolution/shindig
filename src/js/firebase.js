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
}); 
