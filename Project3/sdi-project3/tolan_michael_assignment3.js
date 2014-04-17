/* Michael Tolan
 * Apr 14, 2014
 * Project 3
 * Shopping List
 */

//GLOBAL VARIABLES
var shoppingList = [],
	listLength = 0;

//FUNCTIONS
var showJSON = function(json) {
	console.log("show function works.");
	for (var i=0; i<json.walmart.groceries.length; i++) {
		console.log(json.walmart.groceries[i]);
	}
	for (var i=0; i<json.walmart.tech.length; i++) {
		console.log(json.walmart.tech[i]);
	}
	for (var i=0; i<json.walmart.auto.length; i++) {
		console.log(json.walmart.auto[i]);
	}
	for (var i=0; i<json.target.apparel.length; i++) {
		console.log(json.target.apparel[i]);
	}
	for (var i=0; i<json.target.toys.length; i++) {
		console.log(json.target.toys[i]);
	}
	for (var i=0; i<json.target.baby.length; i++) {
		console.log(json.target.baby[i]);
	}
	for (var i=0; i<json.sams.outdoor.length; i++) {
		console.log(json.sams.outdoor[i]);
	}
	for (var i=0; i<json.sams.home.length; i++) {
		console.log(json.sams.home[i]);
	}
	for (var i=0; i<json.sams.hygiene.length; i++) {
		console.log(json.sams.hygiene[i]);
	}
};

var addItem = function(json, item, store, department) {
	switch (store) {
		case "walmart":
			switch (department) {
				case "groceries" :
					json.walmart.groceries.push(item);
					break;
				case "tech" :
					json.walmart.tech.push(item);
					break;
				case "auto" :
					json.walmart.auto.push(item);
					break;
				default :
			}
		case "target":
			switch (department) {
				case "apparel" :
					json.target.apparel.push(item);
					break;
				case "toys" :
					json.target.toys.push(item);
				case "baby" :
					json.target.baby.push(item);
				default :
			}
		case "sams":
			switch (department) {
				case "outdoor" :
					json.sams.outdoor.push(item);
				case "home" :
					json.sams.home.push(item);
				case "hygiene" :
					json.sams.hygiene.push(item);
				default :
			}
		default :
	}
};

var removeItem = function(item, list) {
	list.splice(list.indexOf(item,1));
};

var listLength = function (list) {
	return list.length();
};

//MAIN BODY
showJSON(storeInventoryJSON);
addItem(storeInventoryJSON, "gun", "target", "toys");
showJSON(storeInventoryJSON);
