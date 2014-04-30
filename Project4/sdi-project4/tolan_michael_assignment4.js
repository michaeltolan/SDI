/* Michael Tolan
 * Apr 24, 2014
 * Project 4
 * Problem Solving Functions
 */

//-------------------------------------------------------------------------------//
//STRING FUNCTIONS

var isPhoneNumber = function(phoneNumber) {
	var firstPart,
		secondPart,
		thirdPart,
		remainder;
		
	if(phoneNumber.indexOf("-",0) !== -1)
	{
		firstPart = phoneNumber.substr(0,3);
		secondPart = phoneNumber.substr(4,3);
		thirdPart = phoneNumber.substr(8,4);
		remainder = phoneNumber.substr(12, (phoneNumber.length - 10));
	}
	else {
		firstPart = phoneNumber.substr(0,3);
		secondPart = phoneNumber.substr(3,3);
		thirdPart = phoneNumber.substr(6,4);
		remainder = phoneNumber.substr(10, (phoneNumber.length - 10));
	}
	
	if(isNaN(firstPart) === true || isNaN(secondPart) === true || isNaN(thirdPart) === true) return false; 
	else if (remainder.length > 0) return false; 
	else return true;
};

var isEmailAddress = function(emailAddress) {
	var at = emailAddress.indexOf("@"),
		dot = emailAddress.lastIndexOf(".");
		
	if( at === -1 || dot === -1 ) return false;
	else if(at > dot) return false;
	else return true;
};

var isURL = function(url) {
	return false;
};

var titleCase = function(str) {
	return str;
};

var replaceSeparator = function(str, sep1, sep2) {
	return str;
};

//-------------------------------------------------------------------------------//
//NUMBER FUNCTIONS

var truncateDecimal = function(number, decimal) {
	return number;
};

var fuzzyMatch = function(num1, num2, percent) {
	return ?;
};

var dateDiff = function(date1, date2, hORd) {
	return ?;
};

var toNumber = function(str) {
	return num;
};

//-------------------------------------------------------------------------------//
//ARRAY FUNCTIONS

var nextHighest = function(array, num) {
	return num;
};

var arrayNumSum = function(array) {
	return total;
};

var sortArray = function(array, key) {
	return array;
};


