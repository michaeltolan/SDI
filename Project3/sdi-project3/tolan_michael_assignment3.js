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
	console.log(json);
};

var addItem = function(item, list) {
	listLength = list.push(item);
	console.log("The item '" + item + "' was added to the list '" + list + "'.");
};

var removeItem = function(item, list) {
	list.splice(list.indexOf(item,1));
};

var listLength = function (list) {
	return list.length();
};

//MAIN BODY
showJSON(storeInventoryJSON);