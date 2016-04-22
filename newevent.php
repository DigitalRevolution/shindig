<?php include('./templates/header.html'); ?>

<div class = "col-md-3"></div>
<div class = "col-xs-12 col-md-6">

<form autocomplete = "on" action="">

<div class="form-group has-feedback">
	<label class = "control-label" for="eventname">What shall we call this shindig?</label>
	<input type="text" class="form-control" id="eventname" placeholder = "Event Name" autofocus>
	<span class="glyphicon nameresponse form-control-feedback"></span>
	<span class ="event-name-msg"></span>
</div>	

<div class="form-group has-feedback">
	<label class = "control-label" for="eventtype">What kinda shindig is it?</label>
	<input type="dropdown" class="form-control" id="eventtype" placeholder = "Event Type">
	<span class="glyphicon typeresponse glyphicon-ok form-control-feedback"></span>
	<span class= "event-type-msg"></span>
</div>

<div class="form-group has-feedback">
	<label class = "control-label" for="eventhost">Who's in charge of this shindig?</label>
	<input type="text" class="form-control" id="eventhost" placeholder = "Who's Hosting?">
	<span class="glyphicon whoresponse glyphicon-ok form-control-feedback"></span>
	<span class= "event-host-msg"></span>
</div>

<div class = "row">
	<div class="form-group has-feedback col-md-7" style = "padding-right:0;">
		<label class = "control-label" for="startdate">Start Date</label>
		<input type = "date" class="form-control" id="startdate">
		<span class = "glyphicon startdateresponse glyphicon-ok form-control-feedback"></span>
		<span class = "event-stardate-msg"></span>
	</div>
	<div class="form-group has-feedback col-md-5">
		<label class = "control-label" for="starttime">Start Time</label>
		<input type = "time" class="form-control" id="starttime">
		<span class = "glyphicon starttimeresponse glyphicon-ok form-control-feedback" style = "right:15px"></span>
		<span class = "event-starttime-msg"></span>
	</div>
</div>

<div class = "row">
	<div class="form-group has-feedback col-md-7" style = "padding-right:0;">
		<label class = "control-label" for="enddate">What day should I be there?</label>
		<input type = "date" class="form-control" id="enddate">
		<span class = "glyphicon enddateresponse glyphicon-ok form-control-feedback"></span>
		<span class = "event-enddate-msg"></span>
	</div>
	<div class="form-group has-feedback col-md-5">
		<label class = "control-label" for="endtime">What time should I be there?</label>
		<input type = "time" class="form-control" id="endtime">
		<span class = "glyphicon endtimeresponse glyphicon-ok form-control-feedback" style = "right:15px"></span>
		<span class = "event-endtime-msg"></span>
	</div>
</div>

<div class="form-group has-feedback">
	<label class = "control-label" for="eventdeets">Who's gonna be there? What do you wanna do?</label>
		<textarea rows = "4" class="form-control" id="eventdeets" placeholder = "Guestlist and Details"></textarea>
		<span class="glyphicon deetresponse glyphicon-ok form-control-feedback"></span>
	<span class= "event-details-msg"></span>
</div>

<div class="form-group has-feedback">
	<label class = "control-label" for="location">Where's it gonna be?</label>
	<input onFocus="geolocate()" type="text" class="form-control" id="location" placeholder = "Where?">
	<span class="glyphicon locationfeedback glyphicon-ok form-control-feedback"></span>
	<span class= "event-location-msg"></span>
</div>


</form>

</div>
<div class = "col-md-3"></div>
<?php include('./templates/footer.html'); ?>
