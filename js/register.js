function local_registration () {
	var val = "You are now registered!"
	var uname = document.getElementsByName("user-name")[0].value;
	if (document.getElementsByName("full-name")[0].value == "")
		val = "Empty field value detected";
	else if (document.getElementsByName("user-name")[0].value == "")
		val = "Empty field value detected";
	else if (document.getElementsByName("password")[0].value == "")
		val = "Empty field value detected";
	else if (document.getElementsByName("cnf-password")[0].value == "")
		val = "Empty field value detected";
	else if (document.getElementsByName("password")[0].value != document.getElementsByName("cnf-password")[0].value)
		val = "Passwords do not match!";
	
	if (uname == "user" || uname == "admin") {
		val = "Username already registered!\nChoose another username.";
		alert(val);
		return;
	}
	if (sessionStorage["users"]) {
		var arr = sessionStorage["users"].split(",");
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == uname) {
				val = "Username already registered!\nChoose another username.";
				break;
			}
		}
	}
	console.log(uname);
	if (sessionStorage["users"]) sessionStorage["users"] = sessionStorage["users"] + ","+uname;
	else sessionStorage["users"] = ""+uname;
	sessionStorage[uname+"password"] =  document.getElementsByName("password")[0].value+"";
	
	alert(val);
	if (val == "You are now registered!")
		window.open("../webpages/login.html", '_top');
}
