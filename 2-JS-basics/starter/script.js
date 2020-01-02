/************************
*Variables and Data Types
*/

/*
var firstName = 'Blake';
console.log(firstName);

var lastName = 'Grant';
var age = 30;

console.log(firstName, lastName, age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job)

job = 'Developer';
console.log(job);

//Variable name rules
var 3years = 3;
var _3years = 3;
var blakeGrant = 'Blake Grant'
var if = 30;
*/

/**************************************
* Variable mutation and type coercion

/*
var firstName = 'Blake';
var age = 30;

// Type Coercion
console.log(firstName + ' is '+ age);

var job, isMarried;
job = 'Developer';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'Thirty';
job = 'Designer';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/
 
/***********************
 *  Basic Operators 
 

 /*
 var year, yearBlake, yearDevin;
 year = 2020;
 ageBlake = 30; 
 ageDevin = 29; 

 //Math Operators 
 yearBlake = year - 30; 
 yearDevin = year - 29; 

 console.log(yearBlake, yearDevin);
 console.log(year + 2);
 console.log(year * 2);
 console.log(year / 10);

 // Logical Operators 
var blakeOlder = ageBlake < ageDevin;
console.log(blakeOlder);

// Typeof Operators 
console.log(typeof blakeOlder);
console.log(typeof yearBlake);
console.log(typeof 'Blake is older than Devin');
var x;
console.log(typeof x);

/******************
 * Operator precedence


 var year = 2020; 
 var yearBlake = 1989; 
 var fullAge = 30; 

 // Multiple Operators
 var isFullAge = year - yearBlake >= fullAge; // true 
 console.log(isFullAge);

 //Grouping 
 var ageBlake = year - yearBlake;
 var ageDevin = 29;
 var average = (ageBlake + ageDevin) / 2;
 console.log(average);

 */

 // Multiple Assignments 
 var x, y; 
 x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 - 6 // 26
 console.log(x, y);

 // More Operators 
 x *= 2; 
 console.log(x);
 x += 10; 
 console.log(x);