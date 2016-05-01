<?php include('./header.html'); ?>
<div class = "container"> 
	<div class = "col-md-3"></div>
	<div class = "col-xs-12 col-md-6 content">

		<form autocomplete = "on" action="" id = "newShindig">

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
		
		<div class="form-group has-feedback">
			<label class = "control-label" for="eventstartdatetime">What time does the event start?</label>
			<input type="datetime-local" class="form-control" id="eventstartdatetime" placeholder = "Who's Hosting?">
			<span class="glyphicon startdtresponse glyphicon-ok form-control-feedback"></span>
			<span class= "event-startdt-msg"></span>
		</div>

		<div class="form-group has-feedback">
			<label class = "control-label" for="eventenddatetime">What time does the event end?</label>
			<input type="datetime-local" class="form-control" id="eventenddatetime" placeholder = "Who's Hosting?">
			<span class="glyphicon enddtresponse glyphicon-ok form-control-feedback"></span>
			<span class= "event-enddt-msg"></span>
		</div>

		<div class="form-group has-feedback">
			<label class = "control-label" for="eventdeets">Who's on the guestlist so far?</label>
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

		<div class="optionalmessage form-group has-feedback">
			<label class = "control-label" for="optionalmsg">Got anything else to say? (optional)</label>
				<textarea rows = "4" class="form-control" id="optionalmsg" placeholder = "What else do potential attendees need to know?"></textarea>
		</div>

		<div class = "text-center"><input class = "btn btn-primary hidden submit-button" type = "submit" value = "Let's Party"></div>
		</form>
	</div>
	<div class = "col-md-3"></div>
</div>
<?php include('./footer.html'); ?>
