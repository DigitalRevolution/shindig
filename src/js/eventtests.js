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
		testinput('span.event-type-msg', 'span.typeresponse', '#eventtype', 'I need to decide what to wear...'); 
		test.type = pass; 
	});
	// Event Host
	$('#eventhost').bind('keyup blur', function(){
		testinput('span.event-host-msg', 'span.whoresponse', '#eventhost', 'Take me to your leader!'); 
		test.host = pass; 
	});
	// Start Date / Time
	$('#startdate').bind('keyup blur', function(){
		testinput('span.event-startdate-msg', 'span.startdateresponse', '#startdate');
		test.sdate = pass; 
	});
	$('#starttime').bind('keyup blur', function(){
		testinput('span.event-starttime-msg', 'span.starttimeresponse', '#starttime'); 
		test.stime = pass; 
	});
	// End Date / Time
	$('#enddate').bind('keyup blur', function(){
		testinput('span.event-enddate-msg', 'span.enddateresponse', '#enddate'); 
		test.edate = pass; 
	});
	$('#endtime').bind('keyup blur', function(){
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

	$(document).bind('keyup change', function(){
		if( test.name === true && 
			test.type === true && 
			test.host === true && 
			test.sdate === true && 
			test.stime === true && 
			test.edate === true && 
			test.etime === true && 
			test.deets === true && 
			test.location === true) {
				$('input.submit-button').removeClass('hidden');
					} else {
				$('input.submit-button').addClass('hidden');
			}
	});
});