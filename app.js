// Homework - W01d05

// I. Variables & Datatypes

// A. Q + A

// 1. 
// let variable = value;
// var variable = value;
// const variable = value;

// 2.
// variable = newValue;

// 3.
// let newVariable = variable;

// 4.
// declare: telling a program/compiler we need that variable in our program
// define: clarifying a variabl type, settng a name to it and reserving a memory space in a computer 
// assign: allocating/reserving a value for a variable

// 5.
// Pseudocode is a technique that lets developer write their program in simple, 
// step-by-step instructions using plain English words rather than a programming language.

// We should use it because It allows us to break down a program into simple steps, 
// like a computer would, without getting errors or distracted by syntax.

// 6.
// ??



// B. Strings
// 1.
let firstVariable = "Hello World";
firstVariable = 6;
let secondVariable = firstVariable;
secondVariable = "Goodbye! World";
// firstVariable = 6;
console.log(firstVariable);

// 2.
let yourName = "Amin Pahlavani";
console.log("Hello, my name is " + yourName);

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true != false);
console.log(false || false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b  || c);
console.log(a < a < d);
console.log(48 == '48');

// D. The farm
let animal = "cow";
if (animal === "cow") {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.");
}
