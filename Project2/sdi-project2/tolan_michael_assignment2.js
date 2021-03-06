/* Michael Tolan
 * Apr 09, 2014
 * Project 2
 * The Mall
 */

//GLOBAL VARIABLES - named for their use
var goodDirection = false, //Indicates whether the user entered a usable direction in the prompt.
	directionChosen = "undefined", //The string representation of the direction the user enters.
	doFirstOption, //Used with the confirm dialog to be used with the boolean function.
	firstActionEat, //Decision from boolean function to be passed on to other functions.
	totalMoney = 100, //You brought a little bit of money.
	finalStatement; //Concatinized by the string function and used as the final output.

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

//BOOLEAN FUNCTION - you went 'x' direction, that means you want to 'y' first.
var firstAction = function(direction, firstOption) {
	var thisFunctionLoops = true;
	while (thisFunctionLoops === true) {
		if (direction === "left" && firstOption === true) {
			console.log("OK. Let's eat first.");
			thisFunctionLoops = false; //Got desired outcome. No need to keep looping.
			return true;
		}
		else if (direction === "left" && firstOption === false) {
			console.log("Maybe we'll have time to eat later. Let's shop first.");
			thisFunctionLoops = false; //Got desired outcome. No need to keep looping.
			return false;
		}
		else if (direction === "right" && firstOption === true) {
			console.log("OK. Let's shop first.");
			thisFunctionLoops = false; //Got desired outcome. No need to keep looping.
			return false;
		}
		else if (direction === "right" && firstOption === false) {
			console.log("Maybe we'll have time to shop later. Let's eat first.");
			thisFunctionLoops = false; //Got desired outcome. No need to keep looping.
			return true;
		}
		else {
			console.log("I don't know how you got past all my error catches so far. Now you're stuck in an infinite loop. MUAWHAHAHA!");
		}
	}
};

//NUMBER FUNCTION - Let's spend some money
var spendMoney = function(money) {
	for (var i = money; i > 10; i++) { //The loop is impractical to use here. It only runs once.
		if (firstActionEat === true) {
			console.log("You eat some food. What kind is not important. You spent $20.");
			money = money - 20;
			console.log("You have $" + money + " dollars left for shopping.");
			i = 1;
		}
		else if (firstActionEat === false) {
			console.log("You bought a book for $15.");
			money = money - 15;
			console.log("Then you bought a phone case for $25.");
			money = money - 25;
			console.log("Finally, you spent the rest on clothes.");
			money = money - money;
			i = 0;
		}
		else {
			console.log("You made it to the number function, but something went wrong here.");
		}
	};
	return money;
};

//STRING FUNCTION
var stringFunction = function(firstOption, money) {
	var temporaryString = "When you entered the mall, you went " + directionChosen + " first. Saying you chose to eat first is " + firstOption + ". And you have $" + money + " left over.";
	return temporaryString;
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

firstActionEat = firstAction(directionChosen, doFirstOption); //Call the boolean function
totalMoney = spendMoney(totalMoney); //Call the number function.
firstActionEat = firstActionEat.toString(); //Make a couple strings
totalMoney = totalMoney.toString();
finalStatement = stringFunction(firstActionEat, totalMoney); //Call the string function
console.log(finalStatement); //Final output

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