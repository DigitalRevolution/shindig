'use strict'
$(function(){
var pass; 
var test = {}; 

	/* 
	*** Create a function to interact with users filling out the form. ***
	*/ 
	function testinput(messageblock, response, id, responsetext){
		$(messageblock).text('');
		pass = false; 
		if($(id).val() != ''){ 
			$(response).removeClass('glyphicon-remove'); 
			$(response).addClass('glyphicon-ok'); 
			$(id).closest('div').removeClass('has-error');
			$(id).closest('div').addClass('has-success');
			pass = true;
		} else {
			$(response).addClass('glyphicon-remove'); 
			$(id).closest('div').removeClass('has-success'); 
			$(id).closest('div').addClass('has-error'); 
			$(messageblock).text(responsetext);
			pass = false; 
		}
		$(response).css('visibility', 'visible'); 
	}
	/* 
	*** Test the input for every form field on focusout ***
	*/ 
	// Event Name
	$('#eventname').bind('keyup blur', function(){
		testinput('span.event-name-msg', 'span.nameresponse', '#eventname', 'Parties need names homie.');
		test.name = pass;
	});
	// Event Type
	$('#eventtype').bind('keyup blur', function(){
		testinput('span.event-type-msg', 'span.typeresponse', '#eventtype', 'Should I wear my birthday suit?'); 
		test.type = pass; 
	});
	// Event Host
	$('#eventhost').bind('keyup blur', function(){
		testinput('span.event-host-msg', 'span.whoresponse', '#eventhost', 'Take me to your leader!'); 
		test.host = pass; 
	});
	// Start Date / Time
	$('#startdate').on('focusout', function(){
		testinput('span.event-startdate-msg', 'span.startdateresponse', '#startdate');
		test.sdate = pass; 
	});
	$('#starttime').on('focusout', function(){
		testinput('span.event-starttime-msg', 'span.starttimeresponse', '#starttime'); 
		test.stime = pass; 
	});
	// End Date / Time
	$('#enddate').on('focusout', function(){
		testinput('span.event-enddate-msg', 'span.enddateresponse', '#enddate'); 
		test.edate = pass; 
	});
	$('#endtime').on('focusout', function(){
		testinput('span.event-endtime-msg', 'span.endtimeresponse', '#endtime'); 
		test.etime = pass; 
	});
	// Event Details
	$('#eventdeets').bind('keyup blur', function(){
		testinput('span.event-details-msg', 'span.deetresponse', '#eventdeets', 'Gimme the deets!'); 
		test.deets = pass; 
	});
	// Event Location
	$('#location').bind('keyup blur', function(){
		testinput('span.event-location-msg', 'span.locationfeedback', '#location', 'Where we goin?'); 
		test.location = pass;
	});

	document.onkeyup = function (){
		if( test.name === true && 
			test.type === true && 
			test.host === true && 
			test.sdate === true && 
			test.stime === true && 
			test.edate === true && 
			test.etime === true && 
			test.deets === true && 
			test.location === true) {
				$('.register-submit').css('visibility', 'visible');
		} else {
				$('.register-submit').css('visibility', 'hidden');
		}
	};

});
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

	shindigdb.orderByChild("startDate").limitToFirst(3).once("value", function(snapshot) {
		var output = ''; 
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

'use strict'
var autocomplete; 
function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('location')),
    {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address fields in the form.
  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace(); 
  });
}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
'use strict'
$(function(){
	var submit = {};
	// NAME TEST //
	function testinput(messageblock, response, id, responsetext){
		$(messageblock).text(''); 
		if($(id).val() != ''){ 
			$(response).removeClass('glyphicon-remove'); 
			$(response).addClass('glyphicon-ok'); 
			$(id).closest('div').removeClass('has-error');
			$(id).closest('div').addClass('has-success'); 
			submit.name = true; 
		} else {
			$(response).addClass('glyphicon-remove'); 
			$(id).closest('div').removeClass('has-success'); 
			$(id).closest('div').addClass('has-error'); 
			$(messageblock).text(responsetext);
			submit.name = false; 
		}
		$(response).css('visibility', 'visible'); 
		// showSubmit(submit);
	}
	// RUN NAME TEST //
	$('#name').bind('keyup blur', function(){
		testinput('span.name-msg', 'span.newnameresponse', '#name', 'Hey, whatsyerface. ;)');
	});

	// EMAIL TEST //
	function isEmail(email){
	 	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email); 
	};	
	// RUN EMAIL TEST
	$('#email').bind('blur keyup', function(){
		var email = $('#email').val(); 
		$('span.email-msg').text(''); 
		if(isEmail(email) === true){
			$('span.emailresponse').removeClass('glyphicon-remove'); 
			$('span.emailresponse').addClass('glyphicon-ok'); 
			$('#email').closest('div').removeClass('has-error');
			$('#email').closest('div').addClass('has-success'); 
			submit.email = true; 
		} else {
			$('span.emailresponse').addClass('glyphicon-remove'); 
			$('#email').closest('div').removeClass('has-success'); 
			$('#email').closest('div').addClass('has-error'); 
			$('span.email-msg').text('We won\'t spam you, we promise');
			submit.email = false; 
		}; 
		$('span.emailresponse').css('visibility', 'visible');
		// showSubmit(submit);
	});

	// PASSWORD ONE TEST //
	function testPassword(password){
		var result = "pass"; 
		var output = "<ul>"; 
		var symbol = new RegExp(/[\!\@\#\$\%\^\&\*]/g);
	    var number = new RegExp(/\d/g);
	    var lowercase = new RegExp(/[a-z]/g);
	    var uppercase = new RegExp(/[A-Z]/g);
    	var illegal = new RegExp(/[^A-z0-9\!\@\#\$\%\^\&\*]/g);

		if(password.length < 16 || password.length > 100){
			output += "<li>Password must be between 16 and 100 characters.</li>";
			result = "fail"; 
		} 
    	if(!symbol.test(password)){
    		output += "<li>Password must contain at least one special character ( ! @ # $ % ^ & * ).</li>";
    		result = "fail"; 
    	}
    	if(!number.test(password)){
    		output += "<li>Password must contain at least one number.</li>"; 
			result = "fail"; 
    	}
		if(!lowercase.test(password)){
    		output += "<li>Password must contain at least one lowercase number.</li>"; 
			result = "fail"; 
    	}
    	if(!uppercase.test(password)){
    		output += "<li>Password must contain at least uppercase letter.</li>"; 
			result = "fail"; 
    	}
    	if(illegal.test(password)){
    		output += "<li>Password must not contain any illegal characters.</li>"; 
			result = "fail"; 
    	}
    	output += "</ul>";
		$('span.password-msg').html(output); 
    	response(result);  
	}
	function response(result){
		if(result === "pass"){ 
			$('.passwordresonse').removeClass('glyphicon-remove'); 
			$('.passwordresonse').addClass('glyphicon-ok'); 
			$('#password').closest('div').removeClass('has-error');
			$('#password').closest('div').addClass('has-success'); 
			submit.pass = true; 
		} else {
			$('.passwordresonse').addClass('glyphicon-remove'); 
			$('#password').closest('div').removeClass('has-success'); 
			$('#password').closest('div').addClass('has-error'); 
			submit.pass = false; 
		}
		$('.passwordresonse').css('visibility', 'visible'); 
		// showSubmit(submit);	
	};
	// RUN PASSWORD ONE TEST //
	$('#password').bind('keyup blur', function(){
		var password = $('#password').val();
		testPassword(password);
	})

	// PASSWORD TWO TEST //
	function testPasswordTwo(){
		var result = "fail";
		if( $('#password').val() === $('#password2').val() && $('#password2').val() != '') {
			result = "pass"; 
		}
		passTwoResponse(result);
	}
	function passTwoResponse(result){
		$('span.password2-msg').text(''); 
		if(result === "pass"){ 
			$('.password2resonse').removeClass('glyphicon-remove'); 
			$('.password2resonse').addClass('glyphicon-ok'); 
			$('#password2').closest('div').removeClass('has-error');
			$('#password2').closest('div').addClass('has-success'); 
			submit.pass2 = true; 
		} else {
			$('.password2resonse').addClass('glyphicon-remove'); 
			$('#password2').closest('div').removeClass('has-success'); 
			$('#password2').closest('div').addClass('has-error'); 
			$('span.password2-msg').text('Passwords do not match');
			submit.pass2 = false; 
		}
		$('.password2resonse').css('visibility', 'visible'); 
	}
	// RUN PASSWORD TWO TEST
	$('#password2').bind('keyup blur', function(){
		testPasswordTwo(); 
		// showSubmit(submit);
	});

	document.onkeyup = function (){
		if(submit.name === true && submit.email === true && submit.pass && submit.pass2){
			$('.register-submit').css('visibility', 'visible');
		} else {
			$('.register-submit').css('visibility', 'hidden');
		}
	};

	function showSubmit(submit){
		if(submit.name === true && submit.email === true && submit.pass && submit.pass2){
			$('.register-submit').css('visibility', 'visible');
		} else {
			$('.register-submit').css('visibility', 'hidden');
		}
	}
//    asdfASDF1234!@#$
});