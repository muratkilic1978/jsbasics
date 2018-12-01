/*********************************
* Variables and datatypes
*
*/

/*
//String variable
var firstName = 'Murat Kilic';
console.log(firstName);

//Number variable. Hint is decimalnumbers
var age = 41;

//Boolean variable
var isPensioner = false;
console.log(isPensioner);


//Undefined variable
var job = "Senior lecturer"

console.log(job);

//Error syntax in JS console

//var 40years = 40;
//var year&old = 40;
//var function = 40;
//var if = 40;
*/

/*
Always use english characters in JS programming language

Don't use spaces in between variables
Don't begin a variable with number or symbols
To increase readability you should always use camel notation

*/

/***************************
* Variables mutation and type coercion
*
*/
/*
var firstName = 'Murat';
var age = 40;

// Type coercison
// JS automatically converts age into a string and print it's out
console.log(firstName + ' ' + age);

var job, isMarried;
job = "Senior lecturer";
//isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried );

// Variable mutation
age = "fourty one";
job = "driver";

var lastName = prompt('What is his last Namw?');
console.log(firstName + ' ' + lastName);
*/
/***************************
* Basic operators
*
*/
var currentYear, yearMurat, yearGertie
currentYear = 2019;

// Math operators
yearMurat = currentYear - 1978;
yearGertie = currentYear - 1963;
console.log(yearMurat);
console.log(yearGertie);
console.log(currentYear + 2);
console.log(yearMurat);
console.log(yearGertie);
console.log(currentYear * 2);
console.log(yearMurat);
console.log(yearGertie);
console.log(currentYear / 10);
console.log(yearMurat);
console.log(yearGertie);

// Logical operators
var muratOlder = yearMurat > yearGertie;
console.log('Is Murat older than Gertie? ' + muratOlder);

// Typeof operators
console.log(typeof muratOlder);
console.log(typeof currentYear);
console.log(typeof 'Gertie is older than Murat');
console.log(typeof X);
;





