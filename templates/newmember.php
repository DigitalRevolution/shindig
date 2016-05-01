<?php include('./header.html'); ?>
<div class = "container"> 
	<div class = "col-md-4"></div>
	<div class = "col-xs-12 col-md-4 content">

		<form autocomplete = "on" action="" id = "newUser">

		<div class="form-group has-feedback">
			<label class = "control-label" for="name">What's Your Name?</label>
			<input type="text" class="form-control" id="name" placeholder = "Name" autofocus required>
			<span class="glyphicon newnameresponse form-control-feedback"></span>
			<span class ="name-msg"></span>
		</div>

		<div class="form-group has-feedback">
			<label class = "control-label" for="email">What is your email address?</label>
			<input type="email" class="form-control" id="email" placeholder = "Email Address" required>
			<span class="glyphicon emailresponse form-control-feedback"></span>
			<span class ="email-msg"></span>
		</div>	


		<div class="form-group has-feedback">
			<label class = "control-label" for="password">Please Choose A Password</label>
			<input type="password" class="form-control" id="password" placeholder = "Password" required>
			<span class="glyphicon passwordresonse form-control-feedback"></span>
			<span class ="password-msg"></span>
		</div>

		<div class="form-group has-feedback">
			<label class = "control-label" for="password2">Password Again</label>
			<input type="password" class="form-control" id="password2" placeholder = "Password" required>
			<span class="glyphicon password2resonse form-control-feedback"></span>
			<span class ="password2-msg"></span>
		</div>

		<div class="bioarea form-group has-feedback">
			<label class = "control-label" for="memberdeets">Tell us a little about yourself (optional)</label>
				<textarea rows = "4" class="form-control" id="memberdeets" placeholder = "List of reasons you are awesome."></textarea>
				<span class="glyphicon glyphicon-ok form-control-feedback"></span>
		</div>

		<div class = "text-center"><input class = "btn btn-primary hidden member-submit-button" type = "submit" value = "Sign Me Up"></div>
		</form>

	</div>

	<div class = "col-md-4"></div>

</div>

<?php include('./footer.html'); ?>