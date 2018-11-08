function local_login () {

	var uname = document.getElementsByName("user-name")[0].value;
	var pass = document.getElementsByName('password')[0].value;
	
	if (uname == 'admin' && pass == 'admin123') {
		// redirect to user page
		save_user(uname, pass);
		alert("Admin Login Successful!");
		window.open("../index.html", '_top');
	} else if (uname == 'user' && pass == 'user123') {
		// redirect to admin page
		save_user(uname, pass);
		alert("User Login Successful!");
		window.open("../index.html", '_top');
	} else {
		alert("Invalid user credentials!!");
	}
}

function save_user (uname, pass) {
	sessionStorage[uname] = "loggedin";
	// sessionStorage[9] = "sold";
	// sessionStorage[10] = "sold";
}