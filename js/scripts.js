

var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var thousands = ["thousand", "million", "billion", "trillion", "f**kton"];

var wordNumber = "";

var numberArray = [];
var toWords = function(number) {

	var x = number;

	while (x) {
		numberArray.push(x%10);
		x = Math.floor(x/10);

	}
	numberArray.reverse();
	

	
}





toWords(3546);