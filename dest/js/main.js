'use strict'
$(function(){

	/* 
	*** Create a function to interact with users filling out the form. ***
	*/ 
	function testinput(messageblock, response, id, responsetext){
		$(messageblock).text(''); 
		if($(id).val() != ''){ 
			$(response).removeClass('glyphicon-remove'); 
			$(response).addClass('glyphicon-ok'); 
			$(id).closest('div').removeClass('has-error');
			$(id).closest('div').addClass('has-success'); 
		} else {
			$(response).addClass('glyphicon-remove'); 
			$(id).closest('div').removeClass('has-success'); 
			$(id).closest('div').addClass('has-error'); 
			$(messageblock).text(responsetext);
		}
		$(response).css('visibility', 'visible'); 
	}
	/* 
	*** Test the input for every form field on focusout ***
	*/ 
	// Event Name
	$('#eventname').on('focusout', function(){
		testinput('span.event-name-msg', 'span.nameresponse', '#eventname', 'Parties need names homie.');
	});
	// Event Type
	$('#eventtype').on('focusout', function(){
		testinput('span.event-type-msg', 'span.typeresponse', '#eventtype', 'Should I wear my birthday suit?'); 
	});
	// Event Host
	$('#eventhost').on('focusout', function(){
		testinput('span.event-host-msg', 'span.whoresponse', '#eventhost', 'Take me to your leader!'); 
	});
	// Start Date / Time
	$('#startdate').on('focusout', function(){
		testinput('span.event-startdate-msg', 'span.startdateresponse', '#startdate'); 
	});
	$('#starttime').on('focusout', function(){
		testinput('span.event-starttime-msg', 'span.starttimeresponse', '#starttime'); 
	});
	// End Date / Time
	$('#enddate').on('focusout', function(){
		testinput('span.event-enddate-msg', 'span.enddateresponse', '#enddate'); 
	});
	$('#endtime').on('focusout', function(){
		testinput('span.event-endtime-msg', 'span.endtimeresponse', '#endtime'); 
	});
	// Event Details
	$('#eventdeets').on('focusout', function(){
		testinput('span.event-details-msg', 'span.deetresponse', '#eventdeets', 'Gimme the deets!'); 
	});
	// Event Location
	$('#location').on('focusout', function(){
		testinput('span.event-location-msg', 'span.locationfeedback', '#location', 'Where we goin?'); 
	});

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
	// NAME TEST //
	function testinput(messageblock, response, id, responsetext){
		$(messageblock).text(''); 
		if($(id).val() != ''){ 
			$(response).removeClass('glyphicon-remove'); 
			$(response).addClass('glyphicon-ok'); 
			$(id).closest('div').removeClass('has-error');
			$(id).closest('div').addClass('has-success'); 
		} else {
			$(response).addClass('glyphicon-remove'); 
			$(id).closest('div').removeClass('has-success'); 
			$(id).closest('div').addClass('has-error'); 
			$(messageblock).text(responsetext);
		}
		$(response).css('visibility', 'visible'); 
	}
	// RUN NAME TEST //
	$('#name').on('focusout', function(){
		testinput('span.name-msg', 'span.newnameresponse', '#name', 'Hey, whatsyerface.');
	});

	// EMAIL TEST //
	function isEmail(email){
	 	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email); 
	};	
	// RUN EMAIL TEST
	$('#email').on('focusout', function(){
		var email = $('#email').val(); 
		$('span.emailresponse').text(''); 
		if(isEmail(email) === true){
			$('span.emailresponse').removeClass('glyphicon-remove'); 
			$('span.emailresponse').addClass('glyphicon-ok'); 
			$('#email').closest('div').removeClass('has-error');
			$('#email').closest('div').addClass('has-success'); 
		} else {
			$('span.emailresponse').addClass('glyphicon-remove'); 
			$('#email').closest('div').removeClass('has-success'); 
			$('#email').closest('div').addClass('has-error'); 
			$('span.email-msg').text('How am I supposed to get in touch?');
		}; 
		$('span.emailresponse').css('visibility', 'visible'); 	
	});

	// PASSWORD ONE TEST //
	function testPassword(password){
		var result = "pass"; 
		var output = "<ul>"; 
		var symbol = new RegExp(/[\!\@\#\$\%\^\&\*]/g,'');
	    var number = new RegExp(/\d/g,'');
	    var lowercase = new RegExp(/[a-z]/g,'');
	    var uppercase = new RegExp(/[A-Z]/g,'');
    	var illegal = new RegExp(/[^A-z0-9\!\@\#\$\%\^\&\*]/g,'');

		if(password.length < 16 || password.length > 100){
			output += "<li>Password must be between 16 and 100 characters</li>";
			result = "fail"; 
		} 
    	if(!symbol.test(password)){
    		output += "<li>Password must contain at least one special character ( ! @ # $ % ^ & * )</li>";
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
		} else {
			$('.passwordresonse').addClass('glyphicon-remove'); 
			$('#password').closest('div').removeClass('has-success'); 
			$('#password').closest('div').addClass('has-error'); 
		}
		$('.passwordresonse').css('visibility', 'visible'); 
	};
	// RUN PASSWORD ONE TEST //
	$('#password').on('keyup', function(){
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
		} else {
			$('.password2resonse').addClass('glyphicon-remove'); 
			$('#password2').closest('div').removeClass('has-success'); 
			$('#password2').closest('div').addClass('has-error'); 
			$('span.password2-msg').text('Passwords do not match');
		}
		$('.password2resonse').css('visibility', 'visible'); 
	}
	
	// RUN PASSWORD TWO TEST
	$('#password2').on('keyup', function(){
		testPasswordTwo(); 
	});
});