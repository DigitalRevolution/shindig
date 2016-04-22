$(function(){
	// $(this).on('keyup', function(){
	// 	$('span.event-name-msg').text("I can't Wait!!!"); 
	// 	$('#eventname').closest('div').removeClass('has-error'); 		
	// 	$('#eventname').closest('div').addClass('has-success'); 
	// });

	// $(this).on('keyup', function(){
	// 	$('span.event-name-msg').text('');
	// 	if($('#eventname').val() != ''){
	// 		$('span.nameresponse').removeClass('glyphicon-remove');
	// 		$('span.nameresponse').addClass('glyphicon-ok');
	// 		$('#eventname').closest('div').removeClass('has-error'); 
	// 		$('#eventname').closest('div').addClass('has-success'); 
	// 	} else {
	// 		$('span.nameresponse').addClass('glyphicon-remove');
	// 		$('#eventname').closest('div').removeClass('has-success'); 
	// 		$('#eventname').closest('div').addClass('has-error'); 
	// 		$('span.event-name-msg').text("Parties need names homie."); 
	// 	}
	// 	$('span.nameresponse').css('visibility', 'visible'); 
	// });

	function testinput(messageblock, response, id, responsetext){
		$(messageblock).text(''); // messageblock
		if($(id).val() != ''){ // id
			$(response).removeClass('glyphicon-remove'); // response
			$(response).addClass('glyphicon-ok'); // response
			$(id).closest('div').removeClass('has-error'); // id
			$(id).closest('div').addClass('has-success'); // id
		} else {
			$(response).addClass('glyphicon-remove'); // response
			$(id).closest('div').removeClass('has-success'); // id
			$(id).closest('div').addClass('has-error'); // id
			$(messageblock).text(responsetext); //messageblock 
		}
		$(response).css('visibility', 'visible'); // response
	}
	// Event Name
	$('#eventname').on('keyup', function(){
		testinput('span.event-name-msg', 'span.nameresponse', '#eventname', 'Parties need names homie.');
	});
	// Event Type
	$('#eventtype').on('keyup', function(){
		testinput('span.event-type-msg', 'span.typeresponse', '#eventtype', 'Should I wear my birthday suit?'); 
	});
	// Event Host
	$('#eventhost').on('keyup', function(){
		testinput('span.event-host-msg', 'span.whoresponse', '#eventhost', 'Take me to your leader!'); 
	});
	// Start Date / Time
	$('#startdate').on('keyup', function(){
		testinput('span.event-start-msg', 'span.startdateresponse', '#startdate', 'I don\'t wanna be late.'); 
	});
	// End Date / Time
	$('#enddate').on('keyup', function(){
		testinput('span.event-end-msg', 'span.enddateresponse', '#enddate', 'Every new beginning comes from some other beginning\'s end'); 
	});
	// Event Details
	$('#eventdeets').on('keyup', function(){
		testinput('span.event-details-msg', 'span.deetresponse', '#eventdeets', 'Gimme the deets!'); 
	});
	// Event Location
	$('#location').on('keyup', function(){
		testinput('span.event-location-msg', 'span.locationfeedback', '#location', 'Where we goin?'); 
	});


});
'use strict'

console.log("this file will contain the logic for the new member form, but it doesn't quite yet.");