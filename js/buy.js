
function buy_local (propertyid) {
	if (!login_check()) {
		if (confirm("You are not logged in!!\nPlease login to add your property for sale.\nDo you want to LOGIN NOW"))
		window.open("../webpages/login.html", '_top');
		// else window.open("../index.html", '_top');
	}
	else {
		sessionStorage[propertyid] = "sold";
		alert("You have successfully bought the property with ID = "+propertyid);
		document.getElementById(''+propertyid).getElementsByClassName('sold-out-tag')[0].style.display = 'block';
		document.getElementById('buy-'+propertyid).style.display = 'none';
	}
}

function hide_sold () {
	hide_sold_tag();

	for (var i = 1; i <= 16; i++) {
		if (sessionStorage[i] == "sold") {
			console.log(i+" sold\n");
			document.getElementById(''+i).style.display = 'none';
		} else if (sessionStorage[i] == "added") {
			var arr = sessionStorage["ID"+i].toString().split(",");
			document.getElementById('name'+i).innerHTML = "Property Name: "+arr[0];
			document.getElementById('loc'+i).innerHTML = "Property Location: "+arr[1];
			document.getElementById('price'+i).innerHTML = "Price: "+arr[2];
			document.getElementById('sname'+i).innerHTML = "Trader's Name: "+arr[3];

			document.getElementById(''+i).style.display = 'table-row';
		}
	}
}

function hide_sold_tag () {
	var arr = document.getElementsByClassName('sold-out-tag');

	for (var i = 0; i < arr.length; i++)
		arr[i].style.display = 'none';

}

function login_check() {
	if (sessionStorage["adminstate"] != "loggedin" && sessionStorage["userstate"] != "loggedin") {
		if (sessionStorage["users"]) {
			var arr = sessionStorage["users"].split(",");
			for (var i = 0; i < arr.length; i++) {
				if (sessionStorage[arr[i]+"state"] == "loggedin") return true;
			}
		}
		return false;
	} else {
		return true;
	}
}
