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
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

GOOD LUCK :-)
*/

/*var scoreJohn = (98 + 134 + 103) / 3;
scoreJohn = scoreJohn.toFixed(2);
var scoreMike = (116 + 94 + 123) / 3;
scoreMike = scoreMike.toFixed(2);
var scoreMary = (97 + 134 + 55) / 3;
scoreMary = scoreMary.toFixed(2);
console.log(scoreJohn, scoreMike, scoreMary);


if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\s team wins with ' + scoreJohn + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\s team wins with ' + scoreMary + ' points');
}  else {
    console.log('There is a draw');
}
*/
/*if (scoreJohn > scoreJohn) {
    console.log('John\s team wins with ' + scoreJohn ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\s team wins with ' + scoreJohn ' points');
} else {
    console.log('There is a draw');
}*/


/***************************
*  JS Functions
*  
*/

/*function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1933);
var ageMike = calculateAge(1948);
var ageMary = calculateAge(1964);
var ageLarry = calculateAge(1918);
console.log(ageJohn, ageMike, ageLarry, ageMary);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = (68 - age);
    
    if (retirement > 0 ) {
     console.log(firstName + ' retires in ' + retirement + ' years.')
    } else {
     console.log(firstName + ' is already retired.');
    }  
}
   

yearsUntilRetirement(1978, "Murat");
yearsUntilRetirement(1969, "Hamdi");
yearsUntilRetirement(1949, "Gertie");
yearsUntilRetirement(1924, "Yvonne");
*/

/***************************
*  JS Functions Statements and expressions
*  
*/

// Function declaration
/*function whatDoTouWorkWith(job, firstName) {

}
*/

// Functions expression
/*
var whatDoYouWorkWith = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kid how to code';
        case 'driver':
            return firstName + ' drives a can in Lissbon';    
        case 'designer':
            return firstName + ' designs beatifuk Websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouWorkWith('teacher', 'John'));
console.log(whatDoYouWorkWith('laywer', 'Melissa'));
*/

/***************************
*  JS Arrays
*  
*/

/*
// Initialize new array
var names = ['John', 'Melissa', 'Mark', 'Luis', 'Jenniffer'];
var years = new Array(1864, 1970, 1999, 2001, 2008);

//console.log(names[0]);
//console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[7] = 'Kevin';
//console.log(names);

// Different data types

var john = ['John','Danial','Paul',1990,'teacher',2000, false];
console.log(john);
console.log(john.length);

john.push('blue'); //add string element to the tail of the array
john.unshift('Mr'); //add string element to the head of the array
console.log(john); //print out the array to console
john.pop(); // removes element from the tail of the array
console.log(john);
john.pop(); // removes element from the tail of the array

console.log(john);
console.log(john.length); //print out number of element in the array

john.shift(); // removes element from the head of the array
console.log(john);

console.log(john.indexOf('Paul')); //returns the position of the element in the array

console.log(john.indexOf('George')); //returns -1 if the element is not included in the array

//john.indexOf('designer') === -1 ? console.log('designer IS NOT included in the array') : console.log('designer is included in the array');

var isDesignerIncluded = john.indexOf('teacher') === -1 ? 'designer IS NOT included in the array' : 'designer is included in the array';

console.log(isDesignerIncluded);
*/

/***************************
*  JS Challenge 03
*  
*/
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill)
2. Containing all three final paid amounts (bill + tip)

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK :-)
*/

/***************************
*  JS Challenge 03 - solution
*  
*/

/*function tipCalculator(bill) {
    var percentage;
    if(bill < 50){
        percentage = .2;   
    } else if (bill >= 50 && bill < 200){
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(300));

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
var totalBills = [bills[0] + tips[0], 
                 bills[1] + tips[1],
                 bills[2] + tips[2]
                ]
            
console.log(tips, totalBills);
*/

/***************************
*  JS Objects and properties
*  
*/
// Creating a object (john) with following properties {firstName, lastName, birthYear, ect.}
//Object Literal syntax
/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1978,
    family: ['Jane', 'Mark', 'Bob', 'William'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
console.log(john.family[1]);
console.log(john.isMarried);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
console.log(john.job);
console.log(john);

john.isMarried = false;
console.log(john.isMarried);
console.log(john);
john.isMarried = true;

//New object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Larryson';
jane.birthYear = 1990;
jane.family = ['Mario', 'James'];
console.log(jane);

//Object Literal syntax
var danny = {
    firstName: 'Danny',
    lastName: 'Tyson',
    birthYear: 1990,
    family: ['Mario', 'James'],
    job: 'Police officer',
    isMarried: true
}
console.log(danny);
*/
/***************************
*  JS Objects and Methods
*  
*/
/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1988,
    family: ['Jane', 'Mark', 'Bob', 'William'],
    job: 'teacher',
    isMarried: false,
    */
    /*calcAge: function(birthYear){
        var date = new Date();
        var currentYear = date.getFullYear();
        return currentYear - birthYear; // this means the current object "john's" birthyear property
    }*/
    /*calcAge: function(){
        var date = new Date();
        var currentYear = date.getFullYear();
        //return currentYear - this.birthYear; // this means the current object "john's" birthyear property
        this.age = currentYear - this.birthYear;
    }
};

console.log(john.calcAge());
console.log(john);

john.sex = "male";
console.log(john.sex);
*/
// create a property age and insert John's age
/*var age = john.calcAge();
john.age = age;
console.log(john);

// Another way to rewrite above code
john.age = john.calcAge();
console.log(john);
*/

/***************************
*  JS Challenge 04
*  
*/
/*Let's remember tge first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods. 
1. For each of them, create an object properties for their full name, weight and height.
2. Then, add a metjod to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console, who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.*/

/***************************
*  JS Challenge 04 - solution
*  
*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 78,
    height: 1.78,
    calcBMI: function(){
        this.bmi = (this.weight / (this.height * this.height));
        return this.bmi;
    }
}


var mark = {
    firstName: 'Mark',
    lastName: 'Jones',
    weight: 91,
    height: 1.63,
    calcBMI: function(){
        this.bmi = (this.weight / (this.height * this.height));
        return this.bmi;
    }
}


if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.firstName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.firstName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log(john.firstName + ' & ' + mark.firstName + ' have the same BMI');
}