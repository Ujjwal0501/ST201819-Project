function buy_local () {
	if (sessionStorage["admin"] != "loggedin" && sessionStorage["user"] != "loggedin") {
		alert("You are not logged in!!\nThis feature requires a login account.");
	}
	else
		window.open("./property_detail.html", '_top');
}