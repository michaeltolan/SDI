/* Michael Tolan
 * Apr 14, 2014
 * Project 3
 * Shopping List
 */

//GLOBAL VARIABLES
var shoppingList = [],
	listLength = 0,
	moneyOnHand = 100;

//FUNCTIONS
var showJSON = function(json) {
	console.log("Walmart:");
	for (var i=0; i<json.walmart.groceries.length; i++) {
		console.log(json.walmart.groceries[i]);
	}
	for (var i=0; i<json.walmart.tech.length; i++) {
		console.log(json.walmart.tech[i]);
	}
	for (var i=0; i<json.walmart.auto.length; i++) {
		console.log(json.walmart.auto[i]);
	}
	console.log("Target:");
	for (var i=0; i<json.target.apparel.length; i++) {
		console.log(json.target.apparel[i]);
	}
	for (var i=0; i<json.target.toys.length; i++) {
		console.log(json.target.toys[i]);
	}
	for (var i=0; i<json.target.baby.length; i++) {
		console.log(json.target.baby[i]);
	}
	console.log("Sams:");
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
					listLength++;
					break;
				case "tech" :
					json.walmart.tech.push(item);
					listLength++;
					break;
				case "auto" :
					json.walmart.auto.push(item);
					listLength++;
					break;
				default :
			}
		case "target":
			switch (department) {
				case "apparel" :
					json.target.apparel.push(item);
					listLength++;
					break;
				case "toys" :
					json.target.toys.push(item);
					listLength++;
					break;
				case "baby" :
					json.target.baby.push(item);
					listLength++;
					break;
				default :
			}
		case "sams":
			switch (department) {
				case "outdoor" :
					json.sams.outdoor.push(item);
					listLength++;
					break;
				case "home" :
					json.sams.home.push(item);
					listLength++;
					break;
				case "hygiene" :
					json.sams.hygiene.push(item);
					listLength++;
					break;
				default : 
			}
		default : 
	}
};

var removeItem = function(json, item, store, department) {
	switch (store) {
		case "walmart":
			switch (department) {
				case "groceries" :
					var spot = json.walmart.groceries.indexOf(item);
					json.walmart.groceries.splice(spot);
					listLength--;
					break;
				case "tech" :
					var spot = json.walmart.tech.indexOf(item);
					json.walmart.tech.splice(spot);
					listLength--;
					break;
				case "auto" :
					var spot = json.walmart.auto.indexOf(item);
					json.walmart.auto.splice(spot);
					listLength--;
					break;
				default : 
			}
		case "target":
			switch (department) {
				case "apparel" :
					var spot = json.target.apparel.indexOf(item);
					json.target.apparel.splice(spot);
					listLength--;
					break;
				case "toys" :
					var spot = json.target.toys.indexOf(item);
					json.target.toys.splice(spot);
					listLength--;
					break;
				case "baby" :
					var spot = json.target.baby.indexOf(item);
					json.target.baby.splice(spot);
					listLength--;
					break;
				default : 
			}
		case "sams":
			switch (department) {
				case "outdoor" :
					var spot = json.sams.outdoor.indexOf(item);
					json.sams.outdoor.splice(spot);
					listLength--;
					break;
				case "home" :
					var spot = json.sams.home.indexOf(item);
					json.sams.home.splice(spot);
					listLength--;
					break;
				case "hygiene" :
					var spot = json.sams.hygiene.indexOf(item);
					json.sams.hygiene.splice(spot);
					listLength--;
					break;
				default : 
			}
		default : 
	}
};

var smallList = function(num) {
	if (num<10) {
		return true;
	}
	else {
		return false;
	}
};

var easyDay = function(easy) {
	if (easy === true) {
		return "Your shopping day will be easy.";
	}
	else {
		return "You're in for a long day.";
	}
};

var showList = function(list) {
	for (var i=0; i<list.length; i++) {
		console.log(list[i]);
	}
};

var reverseList = function(list) {
	var reversed = list.reverse();
	return reversed;
};

var boughtSomething = function(money) {
	money = money - 10;
	return money;
};

//MAIN BODY
console.log("I have $" + moneyOnHand + ". I'm going camping, what do I need?");
shoppingList.push("tent", "tissue", "deoderant", "oil", "shirt", "shoes", "frisbee", "sandwiches");
showList(shoppingList);

console.log("Just for fun, let's see that backwards.");
var backwardList = reverseList(shoppingList);
showList(backwardList);
reverseList(shoppingList);

console.log("Can I get it all in one place?");
console.log("For the sake of the code, we can not.");
var allInOnePlace = false;

console.log("Let's put everything in our list according to the store. These are the stores");
showJSON(shoppingListJSON);

addItem(shoppingListJSON, shoppingList[0], "sams", "outdoor");
addItem(shoppingListJSON, shoppingList[1], "sams", "hygiene");
addItem(shoppingListJSON, shoppingList[2], "sams", "hygiene");
addItem(shoppingListJSON, shoppingList[3], "walmart", "auto");
addItem(shoppingListJSON, shoppingList[4], "target", "apparel");
addItem(shoppingListJSON, shoppingList[5], "target", "apparel");
addItem(shoppingListJSON, shoppingList[6], "target", "toys");
addItem(shoppingListJSON, shoppingList[7], "walmart", "groceries");

console.log("Here is our list by store.");
showJSON(shoppingListJSON);

console.log("Is it going to take a while to get all " + listLength + " items?");
console.log(easyDay(smallList(listLength)));

if (allInOnePlace === true) {
	if(smallList(listLength)) {
		console.log("Let's put this off for another day. There's not much to do");
	}
	else console.log("Maybe we should get going, this could take a while.");
}
else {
	if(smallList(listLength)){
		console.log("We've got some stores to hit. Let's get going");
	}
	else console.log("I'm gonna need some help on this one.");
}

console.log("As we finish an item, It will be removed from the JSON but remain in our main list.");
console.log("Let's say for the sake of this project that everythinng costs $10.");

console.log("We're at Walmart right now.");
console.log("I found the " + shoppingList[7] + ", let's cross that off.");
removeItem(shoppingListJSON, shoppingList[7], "walmart", "groceries");
moneyOnHand = boughtSomething(moneyOnHand);
console.log("We have $" + moneyOnHand + " left.");
console.log("We have " + listLength + " items left. Here they are.");
showJSON(shoppingListJSON);
console.log("I found the " + shoppingList[3] + ", let's cross that off.");
removeItem(shoppingListJSON, shoppingList[3], "walmart", "auto");
moneyOnHand = boughtSomething(moneyOnHand);
console.log("We have $" + moneyOnHand + " left.");
console.log("We have " + listLength + " items left. Here they are.");
showJSON(shoppingListJSON);

console.log("We're at Target right now.");
console.log("I found the " + shoppingList[4] + ", let's cross that off.");
removeItem(shoppingListJSON, shoppingList[4], "target", "apparel");
moneyOnHand = boughtSomething(moneyOnHand);
console.log("We have $" + moneyOnHand + " left.");
console.log("We have " + listLength + " items left. Here they are.");
showJSON(shoppingListJSON);
console.log("I found the " + shoppingList[5] + ", let's cross that off.");
removeItem(shoppingListJSON, shoppingList[5], "target", "apparel");
moneyOnHand = boughtSomething(moneyOnHand);
console.log("We have $" + moneyOnHand + " left.");
console.log("We have " + listLength + " items left. Here they are.");
showJSON(shoppingListJSON);
console.log("I found the " + shoppingList[6] + ", let's cross that off.");
removeItem(shoppingListJSON, shoppingList[6], "target", "toys");
moneyOnHand = boughtSomething(moneyOnHand);
console.log("We have $" + moneyOnHand + " left.");
console.log("We have " + listLength + " items left. Here they are.");
showJSON(shoppingListJSON);

console.log("We're at Sams right now.");
console.log("I found the " + shoppingList[0] + ", let's cross that off.");
removeItem(shoppingListJSON, shoppingList[0], "sams", "outdoor");
moneyOnHand = boughtSomething(moneyOnHand);
console.log("We have $" + moneyOnHand + " left.");
console.log("We have " + listLength + " items left. Here they are.");
showJSON(shoppingListJSON);
console.log("I found the " + shoppingList[1] + ", let's cross that off.");
removeItem(shoppingListJSON, shoppingList[1], "sams", "hygiene");
moneyOnHand = boughtSomething(moneyOnHand);
console.log("We have $" + moneyOnHand + " left.");
console.log("We have " + listLength + " items left. Here they are.");
showJSON(shoppingListJSON);
console.log("I found the " + shoppingList[2] + ", let's cross that off.");
removeItem(shoppingListJSON, shoppingList[2], "sams", "hygiene");
moneyOnHand = boughtSomething(moneyOnHand);
console.log("We have $" + moneyOnHand + " left.");
console.log("We have " + listLength + " items left. Here they are.");
showJSON(shoppingListJSON);

console.log("All done, let's go camping.");
var havingFun = true;
while(havingFun === true) {
	console.log("We're having fun.");
	for (var i=0; i<shoppingList.length; i++) {
		console.log("We've used some supplies.");
		shoppingList.splice(i);
	}
	showList(shoppingList);
	if (listLength === 0) {
		console.log("We're not having fun anymore.");
		havingFun = false;
	}
}
console.log("Goodbye World!");
