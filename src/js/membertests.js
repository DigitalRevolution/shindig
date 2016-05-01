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
	});


	document.onkeyup = function (){
		if(submit.name === true && submit.email === true && submit.pass && submit.pass2){
			$('.member-submit-button').removeClass('hidden'); 
			$('div.bioarea').addClass('has-success');
		} else {
			$('.member-submit-button').addClass('hidden'); 
			$('div.bioarea').removeClass('has-success');

		}
	};

//    asdfASDF1234!@#$
});