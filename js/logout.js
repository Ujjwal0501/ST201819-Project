function logout_local () {
	sessionStorage["adminstate"] = "loggedout";
	sessionStorage["userstate"] = "loggedout";
	var arr = sessionStorage["users"].split(",");
	for (var i = 0; i < arr.length; i++) {
		sessionStorage[arr[i]+"state"] = "loggedout";
	}
}
