// import this script in a page to check log-in state and
// redirect to index.html if the usr is logged out

function login_check () {
	if (sessionStorage["admin"] != "loggedin" && sessionStorage["user"] != "loggedin") {
		
		document.getElementById("logout").style.display = 'none';
		document.getElementById("login").style.display = 'block';
	} else {
		document.getElementById("logout").style.display = 'block';
		document.getElementById("login").style.display = 'none';
	}
}