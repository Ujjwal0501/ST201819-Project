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

    // var nameRegex = /^[a-zA-Z\-]+$/;
    // var validate = document.getElementsByName("user-name")[0].value.match(nameRegex);
    // if(validate == null){
    //     alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
    //     document.frm.firstName.focus();
    //     return false;
    // }
	
	if (parseFloat(uname) || parseFloat(document.getElementsByName("full-name")[0].value)) {
		val = "Invalid username/full name";
		alert("Invalid username/full name");
		return;
	}
	
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
				return;
			}
		}
	}
	// console.log(uname);
	if (sessionStorage["users"]) sessionStorage["users"] = sessionStorage["users"] + ","+uname;
	else sessionStorage["users"] = ""+uname;
	sessionStorage[uname+"password"] =  document.getElementsByName("password")[0].value+"";
	
	alert(val);
	// if (val == "You are now registered!")
	window.open("login.html", '_top');
}
