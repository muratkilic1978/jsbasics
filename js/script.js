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

/*
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
*/

/***************************
*  Operator precedence
*  Check this page with JS Operator precedence
*  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

/*
var currentYear, yearMurat, yearGertie, pensionAge, qualifiedToPension, ageOfMurat, avgAge, ageOfGertie;
currentYear = 2018;
yearMurat = 1978;
yearGertie = 1964;
pensionAge = 56;
qualifiedToPension = currentYear - yearMurat >= pensionAge;
console.log('Is murat qualified To Pension? ' + qualifiedToPension);
ageOfMurat = currentYear - yearMurat;
console.log('How old is Murat? He is ' + ageOfMurat + ' years old.');
ageOfGertie = currentYear - yearGertie;
console.log('How old is Murat? He is ' + ageOfGertie + ' years old.');
avgAge = (ageOfMurat + ageOfGertie) / 2;
console.log('The average age of Murat and Gertie is ' + avgAge);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; /// 8 * 4 - 6 // 32 -6 // 26
console.log(x, y);

// More operators
//x = x * 2;
//console.log(x);
x *= 2;
console.log(x);

x += 10;
console.log(x);

//x = x +1; this is same as
x++;
console.log(x);

//x = x -1; this is same as
x--;
console.log(x);
*/

/***************************
*  JS Challenge 01
*  
*/

/*
var xPersonName, yPersonName, xPersonHeightInMeter, xPersonWeightInKg, xPersonCalculatedBMI, yPersonHeightInMeter, yPersonWeightInKg, yPersonCalculatedBMI, xPersonHasHigherBMI;

xPersonName = prompt('Please enter your name');
xPersonWeightInKg = prompt('Please enter your Weight in kilogram');
xPersonHeightInMeter = prompt('Please enter your Height in meter. Hint use dot as a decimal separator');
xPersonCalculatedBMI = (xPersonWeightInKg / (xPersonHeightInMeter * xPersonHeightInMeter));
console.log( xPersonName+ ' has a BMI at ' + xPersonCalculatedBMI);

yPersonName = prompt('Please enter your name');
yPersonWeightInKg = prompt('Please enter your Weight in kilogram');
yPersonHeightInMeter = prompt('Please enter your Height in meter. Hint use dot as a decimal separator');
yPersonCalculatedBMI = (yPersonWeightInKg / (yPersonHeightInMeter * yPersonHeightInMeter));
console.log( yPersonName +' Mark has a BMI at ' + yPersonCalculatedBMI);
xPersonHasHigherBMI = xPersonCalculatedBMI > yPersonCalculatedBMI;
console.log('Is ' + xPersonName + '\'s BMI higher than ' + yPersonName + '\'s?' + xPersonHasHigherBMI);
*/

/***************************
*  if, else statement
*  
*/

/*
var firstName, civilStatus, isMarried;
firstName = 'Murat';
civilStatus = 'married';

//if (civilStatus === 'married') {
//    console.log(firstName + ' is married');
//    
//} else {
//    console.log(firstName + ' is single');
//}
 
isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married');
    
} else {
    console.log(firstName + ' is single');
}

var xPersonName, yPersonName, xPersonHeightInMeter, xPersonWeightInKg, xPersonCalculatedBMI, yPersonHeightInMeter, yPersonWeightInKg, yPersonCalculatedBMI, xPersonHasHigherBMI;

xPersonName = prompt('Please enter your name');
xPersonWeightInKg = prompt('Please enter your Weight in kilogram');
xPersonHeightInMeter = prompt('Please enter your Height in meter. Hint use dot as a decimal separator');
xPersonCalculatedBMI = (xPersonWeightInKg / (xPersonHeightInMeter * xPersonHeightInMeter));
console.log( xPersonName+ ' has a BMI at ' + xPersonCalculatedBMI);

yPersonName = prompt('Please enter your name');
yPersonWeightInKg = prompt('Please enter your Weight in kilogram');
yPersonHeightInMeter = prompt('Please enter your Height in meter. Hint use dot as a decimal separator');
yPersonCalculatedBMI = (yPersonWeightInKg / (yPersonHeightInMeter * yPersonHeightInMeter));
console.log( yPersonName +' Mark has a BMI at ' + yPersonCalculatedBMI);

if (xPersonCalculatedBMI > yPersonCalculatedBMI) {
    console.log(xPersonName + '\'s BMI is higher than ' + yPersonName + '\'s.');
} else {
    console.log(yPersonName + '\'s BMI is higher than ' + xPersonName + '\'s.');
}

*/

/***************************
*  Boolean logic
*  
*/

/*
var firstName, age;
firstName = 'Murat';
age = 12;

if (age < 13 ) {
    console.log(firstName + ' is a boy.');
} else if ( age >= 13 && age < 18) {
    console.log(firstName + ' is a teenager.');
} else if ( age >= 18 && age < 67 ) {
    console.log(firstName + ' is a adult.');   
} else {
    console.log(firstName + ' is a pensioner.');  
}
*/

/***************************
*  Ternary operator and switch statements
*  
*/

// Ternary operator
/*
var firstName, age, drink;
firstName = 'John';
age = 40;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


//Now I write the same thing with an if else statement

if (age >=18 ) {
    var drink = 'beer';
    //alert(drink);
} else {
    var drink = 'juice';
    //alert(drink);
}

// Switch statement

var job = 'instructor';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches students how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives a taxi in Aarhus City.');
        break;
    case 'designer':
        console.log(firstName + ' design beatiful websites.');
        break;
    case 'policeofficer':
        console.log(firstName + ' uphold law and order through detection.');
        break;
    default:
        console.log(firstName + ' does something else.')
}

// Alternative to a switch statement - if else statement

age = 62;
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 18:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 18 && age < 67:
        console.log(firstName + ' is a adult.');
        break;
    default: 
        console.log(firstName + ' is a pensioner.'); 
    } 
*/

/***************************
*  Truthy and falsy values and equality operators
*  
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;

height = 23;
if (height || height === 0) {
    console.log('Variable is defined!');
} else {
    console.log('Variable has NOT been defined!');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/

/***************************
*  JS Challenge 01
*  
*/
/* John and Mike both play basketball in different teams. In the latest 3 games, John team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Donøt forget to take into account there might be a draw (the same average score).

GOOD LUCK :-)
*/