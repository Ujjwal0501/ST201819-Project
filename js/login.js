function local_login () {

	var uname = document.getElementsByName("user-name")[0].value;
	var pass = document.getElementsByName('password')[0].value;
	console.log(''+uname+pass);
	if (uname == 'admin' && pass == 'admin123') {
		// redirect to user page
		alert("Admin Login Succussful!");
		window.open("../index.html", '_top');
	} else if (uname == 'user' && pass == 'user123') {
		// redirect to admin page
		alert("User Login Succussful!");
		window.open("../index.html", '_top');
	} else {
		alert("Invalid user credentials!!");
	}
}