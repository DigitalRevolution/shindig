$(function(){

// Create Firebase Connection
var shindig = {};
var shindigdb = new Firebase('https://shindig.firebaseio.com/');


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
			console.log(shindig);
		});
	}); 
});