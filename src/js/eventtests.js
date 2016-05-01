'use strict';
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
	$('#eventstartdatetime').bind('keyup blur', function(){
		testinput('span.event-startdt-msg', 'span.startdtresponse', '#eventstartdatetime'); 
		test.startdt = pass; 
	});
	// End Date / Time
	$('#eventenddatetime').bind('keyup blur', function(){
		var s = moment($('#eventstartdatetime').val()).format('X'); 
		var e = moment($('#eventenddatetime').val()).format('X');
		$('span.event-enddt-msg').text('');
		pass = false; 
		if($('#eventenddatetime').val() != '' && s < e){ 
			$('span.enddtresponse').removeClass('glyphicon-remove'); 
			$('span.enddtresponse').addClass('glyphicon-ok'); 
			$('#eventenddatetime').closest('div').removeClass('has-error');
			$('#eventenddatetime').closest('div').addClass('has-success');
			pass = true;
		} else {
			$('span.enddtresponse').addClass('glyphicon-remove'); 
			$('#eventenddatetime').closest('div').removeClass('has-success'); 
			$('#eventenddatetime').closest('div').addClass('has-error'); 
			$('span.event-enddt-msg').text('All good things must end... after they start.');
			pass = false; 
		}
		$('span.enddtresponse').css('visibility', 'visible'); 
		test.enddt = pass; 
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
			test.startdt === true && 
			test.enddt === true && 
			test.deets === true && 
			test.location === true) {
				$('input.submit-button').removeClass('hidden');
				$('.optionalmessage').addClass('has-success');
					} else {
				$('input.submit-button').addClass('hidden');
				$('.optionalmessage').removeClass('has-success');
			}
	});
});