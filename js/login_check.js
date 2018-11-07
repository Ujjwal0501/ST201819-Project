// import this script in a page to check log-in state and
// redirect to index.html if the usr is logged out

if (sessionStorage["admin"] != "loggedin" && sessionStorage["user"] != "loggedin") {
	// redirect to index.html if user is not logged in
	window.open("../index.html", '_top');
}