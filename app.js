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
// 75-90 percent thinking and 10-25 percent coding



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

// E. Driver's Ed

// 1.
let personAge = 45;

// 2. & 3.
if(personAge > 16) {
    console.log("Here are the keys");
} else{
    console.log("Sorry, you're too young.");
}

// II. Loops

// A. The basics
// 1.
for(let i = 0; i < 11; i++) {
    console.log(i);
}

// 2.
for(let i = 10; i < 401; i++) {
    console.log(i);
}

// 3.
for(let i = 12; i < 4000; i+=3) {
    console.log(i);
}

// B. Get even
// 1. 2.
for(let i = 0; i < 100; i++) {
    if(i % 2 === 0) {
        console.log(`${i} is an even number.`);
    }
}


// C. Give me Five
// 1. 2.
for(let i = 0; i < 100; i++) {
    if(i % 5 === 0) {
        console.log(`I found a ${i}. High five!`);
    } else if(i % 3 === 0){
        console.log(`I found a ${i}. Three is a crowd`);
    }
}

// D. Savings account
// 1.
let bank_account = 0;
for (let i = 1; i < 11; i++) {
    bank_account += i;
}
console.log(bank_account);

// 2.
bank_account = 0;
for (let i = 1; i < 101; i++) {
    bank_account += i * 2;
}
console.log(bank_account);

// E. Multiples of 3 and 5
let muliple = 0
for(let i = 0; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        muliple += i;
    }
}
console.log(muliple);

// III. Arrays & Control flow

// A. Talk about it
// 1. index
// 2. yes, indexes is in order starting from 0
// 3. kid's pastille

// B. Easy Does It
let quotes = ["Those who dare to fail miserably can achieve greatly.", 
            "Let us always meet each other with smile, for the smile is the beginning of love",
             "Love is a serious mental disease"];

             
// C. Accessing elements
const randomThings = [1, 10, "Hello", true];

// 1.
console.log(randomThings[0]);

// 2.
randomThings[2] = "World";

// 3.
console.log(randomThings);


// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// 1.
console.log(ourClass[2]);

// 2.
ourClass[4] = "Octocat";
console.log(ourClass[4]);

// 3.
ourClass.push("Cloud City");
console.log(ourClass);

// E. Mix It Up
const myArray = [5, 10, 500, 20];
console.log(myArray);

// 1.
myArray.push("Egon");
myArray.push("I am so cool!");
console.log(myArray);


// 2.
myArray.splice(0,1);
console.log(myArray);

// 3.
myArray.splice(0, 0, "Bob Marley");
console.log(myArray);

// 4.
myArray.pop();
console.log(myArray);

// 5.
myArray.reverse();
console.log(myArray);
// Yes, I mutated the array. It means I've changed the original order of items in the array. 
// reverse() method returnes a reference to the reversed array.

