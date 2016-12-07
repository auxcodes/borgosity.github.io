
$(document).ready(function(){
// page templates
	$("#header").load("templates/header.html"); 
	$("#parentheader").load("../templates/header.html"); 
	$("#menu").load("templates/menu.html"); 
	$("#parentmenu").load("../templates/menu.html"); 
	$("#footer").load("templates/footer.html");
	$("#parentfooter").load("../templates/footer.html"); 
	
// theme memory
	var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
	var $checkboxes = $(":checkbox");

	$checkboxes.on("change", function(){
	  $checkboxes.each(function(){
		checkboxValues[this.id] = this.checked;
	  });
	  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
	});
	// set check box from storage	
	var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues'));
	if (checkboxValues === null){
	  checkboxValues = {};
	}

	$.each(checkboxValues, function(key, value) {
	  $("#" + key).prop('checked', value);
	});
});
