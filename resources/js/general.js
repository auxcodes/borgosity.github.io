
$(document).ready(function(){
// page templates
	$("#header").load("templates/header.html"); 
	$("#parentheader").load("../../templates/header.html"); 
	$("#menu").load("templates/menu.html"); 
	$("#parentmenu").load("../../templates/menu.html"); 
	$("#footer").load("templates/footer.html");
	$("#parentfooter").load("../../templates/footer.html"); 
	
// sticky menu
	// When the user scrolls the page, execute myFunction
	window.onscroll = function () { myFunction() };

	// Get the header
	var menu = document.getElementById("menu");
	var header = document.getElementById("header");

	// Get the offset position of the navbar
	var sticky = menu.offsetTop + header.offsetHeight;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset >= sticky) {
			menu.classList.add("sticky");
			console.log(sticky);
		} else {
			menu.classList.remove("sticky");
			console.log(sticky);
		}
	} 
});

