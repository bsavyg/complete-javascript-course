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
//    var drink = 'water';
//  } 
//  console.log(drink);

//*********************** Switch Statement *****
// var firstName = 'Blake';
// var job = 'UI Designer';
// var age = 30;

// switch (job) {
//   case 'designer':
//   case 'UI Designer':
//     console.log(firstName + ' designs to future of the world!');
//     break;
//   case 'developer':
//     console.log(firstName + ' develops the future of the world!');
//     break;
//   case 'Sys Admin':
//     console.log(firstName + ' Protects the future of the world!');
//     break;
//   default:
//     console.log(firstName + ' does other IT things!');    
// }

// switch (true) {
//   case age < 15:
//     console.log(firstName + ' is a boy.');
//     break;
//   case age > 15 && age < 20:
//     console.log(firstName + ' is a teen.');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a man.');
//     break;     
// }
/**********************
* Truthy and Falsy values and equality operators
*/
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height; 

// height = 0; 

//if (height || height === 0) {
//   console.log('Variable is defined');  
// } else {
//   console.log('Variable has NOT been defined');  
// }
/******
 * Coding Challenge 2
 */

//  var scoreJohn = (89 + 120 + 150) / 3;
//  var scoreMike = (116 + 94 + 123) / 3;

//  console.log('John score is ', scoreJohn);
//  console.log('Mike score is ', scoreMike);

//  if (scoreJohn > scoreMike) {
//    console.log('John scored more/better than Mike with: ' + scoreJohn );   
//  } else if (scoreMike > scoreJohn) {
//    console.log('Mike scored more/better than John with: ' + scoreMike);   
//  } else {
//    console.log('Its a draw');   
//  }

/********
* Functions
*/
// function KEYWORD, name of function, the arguments to pass into function, function block of code

// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }

// var ageBlake = calculateAge(1989);
// var ageDevin = calculateAge(2000);
// var ageCara = calculateAge(1950);
// console.log(ageBlake, ageDevin, ageCara);
// ^^^ Returned Function, Notice the Keyword ^^^

// function yearsUntilRetirement(year, firstName) // defined the block with parameters
// {
//   var age = calculateAge(year);
//   var retirement = 70 - age; 

//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.' ); 
//   } else {
//     console.log(firstName + ' is already retired.');    
//   }   
// }

// yearsUntilRetirement(1989, 'Blake'); // defined parameters for defined function 
// yearsUntilRetirement(1990, 'Cara');
// yearsUntilRetirement(1949, 'Devin');

/*************************************
 * Function Statements and Expressions
 */

 //Function declaration example: 
 // function whatDoYouDo(job, FirstName){}

 // Function Expression 
//  var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//       case 'Developer':
//         return firstName + ' codes the world';
//       case 'Designer':
//         return firstName + ' makes applications look good';
//       case 'Tech':
//         return firstName + ' maintains all the Tech';
//       default:
//         return firstName + ' does something else';
//     }
//  }

// console.log(whatDoYouDo('Designer', 'Blake'));
// console.log(whatDoYouDo('Tech', 'Devin'));
// console.log(whatDoYouDo('Retired', 'Frank'));

/***********************
* Arrays
*/

// Init of new Array
// var names = ['Blake', 'Cara', 'Devin'];
// var years = new Array(1989, 1992, 1990);

// console.log(names.length);
// console.log(names[2]);

// Mutate array data
// names[1] = 'DeMillo';
// names[names.length] = 'Cara';
// console.log(names);

// Different data types
// var blake = ['Blake', 'Grant', 1989, 'designer', true];

// blake.push('orange'); // adds at the end of Array list 
// blake.unshift('Mr.'); //adds at the beginning of Array list
// console.log(blake);

// blake.pop(); // removes last item of Array list 
// blake.pop();
// blake.shift(); /// removes first element from array list
// console.log(blake);

// console.log(blake.indexOf(1989)); // place within Array list 
// console.log(blake.indexOf(1995)); // will render -1; good way to test if element is part of Array list 

// var isDesigner = blake.indexOf('designer') === -1 ? 'Blake is NOT a designer' : 'Blake IS a designer';
// console.log(isDesigner);

/*****************************
 * Coding Challenge 3
 */

//  function tipCal(bill) {
//   var percentage;
//     if(bill < 50) {
//       percentage = .2;
//     } else if ( bill >= 50 && bill < 200) {
//       percentage = .15;
//     } else {
//       percentage = .1;
//     }
//    return percentage * bill;   
//  }
//  console.log(tipCal(10));

//  var bills = [124, 48, 268];
//  var tips = [tipCal(bills[0]),
//              tipCal(bills[1]),
//              tipCal(bills[2])];

//  var finalValue = [bills[0] + tips[0],
//                    bills[1] + tips[1],
//                    bills[2] + tips[2],
// ]            
//  console.log(bills, tips, finalValue);

 












 