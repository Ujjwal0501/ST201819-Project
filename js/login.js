function local_login () {

	var uname = document.getElementsByName("user-name")[0].value;
	var pass = document.getElementsByName('password')[0].value;
	
	if (uname == "" && pass == "") {
		alert("Empty field value detected!\nYou should login with correct credentials.")
		return;
	}
	
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
	} else if (sessionStorage[""+uname]) {
		if (sessionStorage[""+uname+"password"] == pass) {
			save_user(uname, pass);
			alert("User Login Successful!");
			window.open("../index.html", '_top')
		} else {
			alert("Invalid User credentials!!")
		}
	}
	else {
		alert("User not registered!!");
	}
}

function save_user (uname, pass) {
	sessionStorage[uname+"state"] = "loggedin";
	// sessionStorage[9] = "sold";
	// sessionStorage[10] = "sold";
}
