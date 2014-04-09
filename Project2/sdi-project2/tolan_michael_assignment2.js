/* Michael Tolan
 * Apr 09, 2014
 * Project 2
 * The Mall
 */

//Initial variables. I named them for how they will be used.
var goodName = "mike",
	noMall = ' doesn\'t like the mall.',
	moneyRequired = 20.00,
	enoughMoney = true;
	moneyRequired = moneyRequired.toFixed(2); //Making sure I have 2 decimal spaces
//It takes a while to create the sentences and output the variables. The confirm dialog will appear first even though the code comes later.
console.log("My name is " + goodName + ", and " + goodName + noMall);
console.log("To say that I have enough money to go to the mall would be " + enoughMoney + " and the amount I have is $" + moneyRequired + ".");
//A few undefined variables.
var goToMall,
	moneyOnHand,
	userName;
// The confirm prompt.
goToMall = confirm("Do you want to go to the mall?");

if (goToMall) { //Condition 1 - boolean true
	moneyOnHand = prompt("How much money do you have?", "Enter a number"); //The number prompt.
	moneyOnHand = parseFloat(moneyOnHand);
	moneyOnHand = truncateDecimals(moneyOnHand, 2); //Custom function obtained from the web. See the comments at the bottom.
	moneyOnHand = parseFloat(moneyOnHand.toFixed(2)); //Changes float to currency format.
	if (moneyOnHand < moneyRequired) { //Condition 2 - number true
		console.log("You don't have enough money. Here's $20.00");
		//moneyOnHand += parseFloat(moneyRequired); //Something fishy happens here if you enter 19.99 or 19.98, weirdest thing I've ever seen, so I changed it.
		moneyOnHand = parseFloat(moneyOnHand + moneyRequired); //Adds a 2 to the end of the decimals for some reason
		moneyOnHand = truncateDecimals(moneyOnHand, 2); //Gets rid of that 2
		console.log("Now you have $" + moneyOnHand + ". Let's Go!");
	}
	else { //Condition 2 - number false
		console.log("You have $" + moneyOnHand + ". That's enough money. Let's Go!");
	}
}
else { //Condition 1 - boolean false
	userName = prompt("What's you name?", "Enter your name"); //The string prompt.
	userName = userName.toLowerCase(); //returns "true" for the condition whether "mike" or "Mike" or any other capitalization variation is entered.
	if (userName == goodName) { //Condition 3 - string true
		goodName = "Mike";
		console.log(goodName + " is an awesome name! No wonder you don't like the mall.");
	}
	else { //Condition 3 - string false
		console.log("I guess " + userName + noMall); //String concatinization essential to maintain theme
	}
}
//The comments for this function are showing I understand what it is doing.
function truncateDecimals (num, digits) { //The function is called with two integers as input. "num" is the number to be truncated and "digits" is the number of digits past the decimal point to keep
    var numS = num.toString(), //The number is parsed to a string
        decPos = numS.indexOf('.'), //This variable holds the integer representation of the position of the decimal point
        substrLength = decPos == -1 ? numS.length : 1 + decPos + digits, //Holds the number of decimal places to be removed
        trimmedResult = numS.substr(0, substrLength), //Contructs the new string
        finalResult = isNaN(trimmedResult) ? 0 : trimmedResult; //It's not-a-number

    return parseFloat(finalResult); //Parses the result to a float and returns it
}

/*Reference for "truncateDecimals" function
 * Knowlson, N. (2012, Feb 10). Truncate (not round off) decimal numbers in javascript [Msg 3]. Message posted to 
 * http://stackoverflow.com/questions/4912788/truncate-not-round-off-decimal-numbers-in-javascript
 */

/*
 * var getWalkingDirection = function(direction) {
 * 		direction = direction.toLowerCase();
 * 		if (direction === "left") {
 * 			directionChosen = "left";
 *			console.log("The direction you chose is " + directionChosen);
 * 			goodDirection = "true";
 * 		}
 * 		else if (direction === "right") {
 * 			directionChosen = "right";
 *			console.log("The direction you chose is " + directionChosen);
 * 			goodDirection = "true";
 * 		}
 * 		else {
 * 			console.log("Please choose only left or right.");
 * 		}
 * };
 */