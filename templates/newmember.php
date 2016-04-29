<?php include('./header.html'); ?>

<div class = "col-md-3"></div>
<div class = "col-xs-12 col-md-6">

<form autocomplete = "on" action="" id = "newUser">
<div class="form-group has-feedback">
	<label class = "control-label" for="name">What's Your Name?</label>
	<input type="text" class="form-control" id="name" placeholder = "Name" autofocus>
	<span class="glyphicon newnameresponse form-control-feedback"></span>
	<span class ="name-msg"></span>
</div>

<div class="form-group has-feedback">
	<label class = "control-label" for="email">What is your email address?</label>
	<input type="text" class="form-control" id="email" placeholder = "Email Address" autofocus>
	<span class="glyphicon emailresponse form-control-feedback"></span>
	<span class ="email-msg"></span>
</div>	


<div class="form-group has-feedback">
	<label class = "control-label" for="password">Please Choose A Password</label>
	<input type="password" class="form-control" id="password" placeholder = "Password" autofocus>
	<span class="glyphicon passwordresonse form-control-feedback"></span>
	<span class ="password-msg"></span>
</div>

<div class="form-group has-feedback">
	<label class = "control-label" for="password2">Password Again</label>
	<input type="password" class="form-control" id="password2" placeholder = "Password" autofocus>
	<span class="glyphicon password2resonse form-control-feedback"></span>
	<span class ="password2-msg"></span>
</div>	
<a class = "btn btn-primary register-submit" type = "submit">Let's Party</a>


</form>

</div>

<div class = "col-md-4"></div>


<?php include('./footer.html'); ?>