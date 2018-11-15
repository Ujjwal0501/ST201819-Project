// import this script in a page to check log-in state and
// redirect to index.html if the usr is logged out

function login_check () {
	if (!login_state_check()) {
		
		document.getElementById("logout").style.display = 'none';
		document.getElementById("login").style.display = 'block';
	} else {
		document.getElementById("logout").style.display = 'block';
		document.getElementById("login").style.display = 'none';
	}
}

function login_state_check() {
	if (sessionStorage["adminstate"] != "loggedin" && sessionStorage["userstate"] != "loggedin") {
		var arr = sessionStorage["users"].split(",");
		for (var i = 0; i < arr.length; i++) {
			if (sessionStorage[arr[i]+"state"] == "loggedin") return true;
		}
		return false;
	} else {
		return true;
	}
}
