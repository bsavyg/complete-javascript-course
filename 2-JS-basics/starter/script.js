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
*
*/

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
