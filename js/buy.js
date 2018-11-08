function show_detail () {
	if (sessionStorage["admin"] != "loggedin" && sessionStorage["user"] != "loggedin") {
		alert("You are not logged in!!\nThis feature requires a login account.");
	}
	else
		window.open("./property_detail.html", '_top');
}

function buy_local (propertyid) {
	sessionStorage[propertyid] = "sold";
	alert("You have successfully bought the property with ID = "+propertyid);
}

function hide_sold () {
	for (var i = 1; i <= 10; i++) {
		if (sessionStorage[i] == "sold") {
			console.log(i+" sold\n");
			document.getElementById(''+i).style.display = 'none';
		}
	}
}