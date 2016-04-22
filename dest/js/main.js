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
'use strict'
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

console.log("this file will contain the logic for the new member form, but it doesn't quite yet.");