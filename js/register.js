function local_registration () {
	var val = "You are now registered!"
	if (document.getElementsByName("full-name")[0].value == "")
		val = "Invalid input/no input";
	else if (document.getElementsByName("user-name")[0].value == "")
		val = "Invalid input/no input";
	else if (document.getElementsByName("password")[0].value == "")
		val = "Invalid input/no input";
	alert(val);
	if (val != "Invalid input/no input")
		window.open("../webpages/login.html", '_top');
}