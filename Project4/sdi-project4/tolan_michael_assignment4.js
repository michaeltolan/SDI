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
	var prefix1,
		prefix2;
	
	prefix1 = url.substr(0,7);
	prefix2 = url.substr(0,8);
	if (prefix1 === "http://" && url.indexOf(".") !== -1) return true;  //Use of "NOT" conditional. Project 2.
	else if (prefix2 === "https://" && url.indexOf(".") !== -1) return true;
	else return false;
};

var titleCase = function(str) {
	var sentence = "",
		word,
		char1,
		char2;
	
	do {
		if(str.indexOf(" ") === -1) {
			char1 = str.charAt(0);
			char2 = char1.toLocaleUpperCase();
			str = str.replace(char1, char2);
			sentence = sentence.concat(str);
			str = "";
		}
		else {
			word = str.substr(0, str.indexOf(" "));
			char1 = word.charAt(0);
			char2 = char1.toLocaleUpperCase();
			word = word.replace(char1, char2);
			sentence = sentence.concat(word + " ");
			str = str.substr(word.length + 1, str.length);
		}
	} while (str.length > 1);
	
	return sentence;
};

var replaceSeparator = function(str, sep1, sep2) {
	while(str.indexOf(sep1) !== -1) str = str.replace(sep1, sep2);
	return str;
};

//-------------------------------------------------------------------------------//
//NUMBER FUNCTIONS

var truncateDecimal = function(number, decimal) {
	number = number+"";
	number = number.substr(0, (number.indexOf(".") + decimal+1));
	number = parseFloat(number);
	return number;
};

var fuzzyMatch = function(num1, num2, percent) {
	var temp;
	
	if (num1 > num2) {
		temp = (num1 - num2) * 10;
		if (temp <= percent) return true;
		else return false;
	}
	else {
		temp = (num2 - num1) * 10;
		if (temp <= percent) return true;
		else return false;
	}
};

var dateDiff = function(date1, date2, hORd) {
	var difference;
	
	if(date1 > date2) difference = date1 - date2;
	else difference = date2 - date1;
	if(hORd === "h") difference = difference / 3600000;
	else if(hORd === "d") difference = difference / 86400000;
	return difference;
};

var toNumber = function(str) {
	var num = parseFloat(str),
		nan = false;
	
	for (var i=0; i<str.length; i++){
		var chara = str.charAt(i);
		if(isNaN(chara) && chara !== "." ) nan = true;
	}
	if (nan === false) return num;
	else return "The value given is not a number.";
};

//-------------------------------------------------------------------------------//
//ARRAY FUNCTIONS

var nextHighest = function(array, num) {
	var answer;
		temp = 0;
		newArray = [];
	
	for(var i=0; i<array.length; i++) {
		if (array[i] > num) {
			newArray.push(array[i]);
		}
	}
	
	for(var i=0; i<newArray.length; i++) {
		if (newArray.length === 1) answer = newArray[0];
		else if (i === 0) temp = newArray[i];
		else {
			if (newArray[i] < temp) answer = newArray[i];
			else answer = temp;
		}
	}
	return answer;
};

var arrayNumSum = function(array) {
	var total = 0;
	
	for(var i=0; i<array.length; i++) {
		if(isNaN(array[i])) ;
		else if (typeof array[i] === "number") total = total+array[i];
	}
	return total;
};
