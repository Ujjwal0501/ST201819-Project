
var id = 8;

function local_sell () {
	if (sessionStorage["idd"]) id = Number(String(sessionStorage["idd"]));
	id++;
	var name = document.getElementsByName('property-name')[0].value;
	var location = document.getElementsByName('property-location')[0].value;
	var price = document.getElementsByName('property-price')[0].value;
	var sname = document.getElementsByName('seller-name')[0].value;
	sessionStorage["ID"+id] = [name+"", location+"", price+"", sname+""];
	sessionStorage[id] = "added";
	sessionStorage["idd"] = id;
	alert("Your property has been listed for selling with provided details.\nHang on till someone buys it!!")
	console.log(sessionStorage[id]);
}