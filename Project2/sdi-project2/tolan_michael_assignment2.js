/* Michael Tolan
 * Apr 09, 2014
 * Project 2
 * The Mall
 */

//GLOBAL VARIABLES - named for their use
var goodDirection = false, //Indicates whether the user entered a usable direction in the prompt.
	directionChosen = "undefined", //The string representation of the direction the user enters.
	doFirstOption; //Used with the confirm dialog to be used with the boolean function

//PROCEDURE FUNCTION - checks and sets walking direction in the mall
var getWalkingDirection = function(direction) {
		direction = direction.toLowerCase(); //Error catch - makes sure value is true despite different capitalizations.
		if (direction === "left" || direction === "l") { //The use of 'or' allows more values to match true.
			directionChosen = "left"; //Sets the global variable to be used later.
			console.log("The direction you chose is " + directionChosen + "."); //Output A
			goodDirection = "true"; //We have the varable we were looking for. Terminate the loop.
		}
		else if (direction === "right" || direction === "r") { //ditto
			directionChosen = "right"; //ditto
			console.log("The direction you chose is " + directionChosen + "."); //Output B
			goodDirection = "true"; //ditto
		}
		else { //Error catch - if no acceptable value is entered, the message is shown and the loop continues.
			console.log("Please choose only left or right. You may also type 'l' or 'r'.");
		}
};

//MAIN BODY
do { //Calls procedure function
 	directionChosen = prompt("You have entered the mall. Which direction would you like to go?" , "Right or Left only!");
 	getWalkingDirection(directionChosen);
} while (goodDirection === false);

if (directionChosen === "left") { //Block of conditionals that determines the order of the boolean function.
	doFirstOption = confirm("Going left means you encounter the food court before the shops. Do you want to eat first?");
}
else if (directionChosen === "right") {
	doFirstOption = confirm("Going right means you encounter the shops before the food court. Do you want to shop first?");
}
else { //Used to make sure no unacceptable variables made it past the first loop.
	console.log("ERROR! YOUR PROCEDURE FUNCTION OR DO-WHILE LOOP IS FAILING!");
}



//BOOLEAN FUNCTION - you went 'x' direction, that means you want to 'y' first.
//var firstAction = function();


/*CODE REFERENCES
 * Reference for "truncateDecimals" function
 * Knowlson, N. (2012, Feb 10). Truncate (not round off) decimal numbers in javascript [Msg 3]. Message posted to 
 * http://stackoverflow.com/questions/4912788/truncate-not-round-off-decimal-numbers-in-javascript
 */

/*OLD CODE
 * (from Project 1)
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
*/