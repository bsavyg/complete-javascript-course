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
 /* 
 var x, y; 
 x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 - 6 // 26
 console.log(x, y);

 // More Operators 
 x *= 2; 
 console.log(x);
 x += 10; 
 console.log(x);
 x++;
 console.log(x);
 x--;
 console.log(x);
 */

 /*********
  * Coding Challenge 1 
  */
 /*
  var massBlake = 95; //kg
  var heightBlake = 1.91; // meters

  var massCara = 65; //kg
  var heightCara =  0.98; // meters

  var BMIBlake = massBlake / (heightBlake * heightBlake);
  var BMICara = massCara / (heightCara * heightCara);
  
  console.log(BMIBlake, " , ", BMICara);

  var blakeHigherbvbBMI = BMIBlake > BMICara;
  
  console.log('Is Blake\'s BMI higher than Cara\'s ? ' + blakeHigherbvbBMI);
*/

// var firstName = 'Blake';
// var civilStatus = 'married';

// if (civilStatus === 'single') { 
//     console.log(firstName + ' is single!');
// } else { 
//     console.log(firstName + ' is happily married!!')
// }

// var isMarried = true;
// if (isMarried) { 
//     console.log(firstName + ' is married!');
// } else { 
//     console.log(firstName + ' will hopefully marry soon');
// }

// var massBlake = 95; //kg
// var heightBlake = 1.91; // meters

// var massCara = 165; //kg
// var heightCara =  0.98; // meters

// var BMIBlake = massBlake / (heightBlake * heightBlake);
// var BMICara = massCara / (heightCara * heightCara);

// if (BMIBlake < BMICara) {
//     console.log( 'Blake BMI is greater than Cara ');
// } else {
//     console.log('Cara BMI is greater than Blakes');
// }

// var firstName = 'Blake';
// var age = 30; 

// if (age < 18) {
//     console.log(firstName + ' is still in his prime.');    
// } else if (age >= 18 && age < 31) {
//     console.log(firstName + ' is getting old.');
// } else { 
//     console.log(firstName + ' IS OLD!');
// }
/******************* 
 * The Ternary Operator and Switch Statements
 */

//  var firstName = 'Blake';
//  var age = 20;

//  age >= 30 ? console.log(firstName + ' drinks proseco!')
//  : console.log(firstName + ' drinks water.');

// ***** Ternary Opertor Example ******
//  var drink = age >= 18 ? 'proseco' : 'water';
//  console.log(drink);

//  // alternative if else block for Ternary Operator 
//  if (age >= 21) {
//   var drink = 'prosseco';
//  } else {
//    var drinl = 'water';
//  } 
//  console.log(drink);

//*********************** Switch Statement *****
var firstName = 'Blake';
var job = 'UI Designer';
var age = 30;

switch (job) {
  case 'designer':
  case 'UI Designer':
    console.log(firstName + ' designs to future of the world!');
    break;
  case 'developer':
    console.log(firstName + ' develops the future of the world!');
    break;
  case 'Sys Admin':
    console.log(firstName + ' Protects the future of the world!');
    break;
  default:
    console.log(firstName + ' does other IT things!');    
}

switch (true) {
  case age < 15:
    console.log(firstName + ' is a boy.');
    break;
  case age > 15 && age < 20:
    console.log(firstName + ' is a teen.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a man.');
    break; 
    

    
}
 