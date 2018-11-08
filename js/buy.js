function show_detail () {
	if (sessionStorage["admin"] != "loggedin" && sessionStorage["user"] != "loggedin") {
		alert("You are not logged in!!\nThis feature requires a login account.");
	}
	else
		window.open("./property_detail.html", '_top');
}

function buy_local (propertyid) {
	if (sessionStorage["admin"] != "loggedin" && sessionStorage["user"] != "loggedin") {
		alert("You are not logged in!!\nThis feature requires a login account.");
	}
	else {
		sessionStorage[propertyid] = "sold";
		alert("You have successfully bought the property with ID = "+propertyid);
	}
}

function hide_sold () {
	for (var i = 1; i <= 16; i++) {
		if (sessionStorage[i] == "sold") {
			console.log(i+" sold\n");
			document.getElementById(''+i).style.display = 'none';
		} else if (sessionStorage[i] == "added") {
			var arr = sessionStorage["ID"+i].toString().split(",");
			document.getElementById('name'+i).innerHTML = arr[0];
			document.getElementById('loc'+i).innerHTML = arr[1];
			document.getElementById('price'+i).innerHTML = arr[2];
			document.getElementById('sname'+i).innerHTML = arr[3];

			document.getElementById(''+i).style.display = 'table-row';
		}
	}
}