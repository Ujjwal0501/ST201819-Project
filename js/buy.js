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