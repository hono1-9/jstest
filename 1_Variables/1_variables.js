// one line comment
/* here is multi-line comment
another comment is here */

//console.log("hello");

// 1 ----VAR------
var oddNumber = 11;
console.log(oddNumber);

var evenNumber;
console.log(evenNumber);
evenNumber = 20;
console.log(evenNumber);

var spacialVariable = null;
console.log(spacialVariable);

// do not recommend
var num1 = 100, num2 = 101, num3 = 102;

var num1 = 100;
var num2 = 101;
var num3 = 102;

// variable redeclaration
// var is allowed to redeclaration
var number = 1000;
console.log(number);
var number = 1001;
console.log(number);

// variable reassignment
var myNumber = 9;
myNumber = 19;


// 2 ----LET------
//let is not allowed to redeclaration
// let is allowed to reassiginment
let firstName = 'Bronco';
let lastName = "CPP";
let anotherFullName = firstName + " " +lastName;
console.log(anotherFullName);
let fulName = `full name is ${firstName} ${lastName}`;
console.log(fulName);

let magicNumber;
magicNumber = 13;

// 3 ----CONST------
/*
const piNumber;
piNumber = 3.14 
is not allowed 

cannot reassign constant -> type error!
 */
const PI_NUMBER = 3.14;
console.log(PI_NUMBER);