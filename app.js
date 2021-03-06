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


// F. Biggie Smalls
let variable = 100;
if(variable < 100) {
    console.log("little number");
} else {
    console.log("big number");
}


// G. Monkey in the Middle
variable = 8;
if(variable < 5) {
    console.log("little number");
} else if(variable > 10) {
    console.log("big number");
} else{
    console.log("monkey");
}



// H. What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // 1. 
  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

  // 2.
  kristynsCloset.splice(6, 0, "raybans");
  console.log(kristynsCloset);

  // 3.
  kristynsCloset.splice(5, 1, "stained knit hat");
  console.log(kristynsCloset);

  // 4.
console.log(thomsCloset[0][0]);

// 5.
console.log(thomsCloset[1][0]);

// 6.
console.log(thomsCloset[2][2]);

// 7.
console.log("Thom is looking fierce in a " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + 
            " and " + thomsCloset[2][1] + "!");

// 8.
thomsCloset[1].splice(2, 1, "Footie Pajamas");
console.log(thomsCloset);



// IV. Functions
// A. `printGreeting`
function printGreeting(name) {
    return `Hello there, ${name}!`;
}
console.log(printGreeting("Slimer"));

// B. `printCool`
function printCool(name) {
    return `${name} is cool`;
}
console.log(printCool("Caption Reynolds"));

// C. `calculateCube`
function calculateCube(num) {
    return Math.pow(num, 3);
}
console.log(calculateCube(5));

// D. `isVowel`
function isVowel(char) {
    char = char.toLowerCase();
    let vowels = "aeiou";
    return vowels.search(char) !== -1 ? true : false;
}
console.log(isVowel('Z'));

// E. getTwoLengths
function getTwoLengths(str1, str2) {
    return [str1.length, str2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));


// F. getMultipleLengths
function getMultipleLengths(arrOfStr) {
    let lengthOfString =[];
    for(let i = 0; i < arrOfStr.length; i++) {
        lengthOfString.push(arrOfStr[i].length);
    }
    return lengthOfString;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(maxOfThree(9, 19, 3));

// H. `printLongestWord`
function printLongestWord(arrOfStr) {
    let lengthOfWordInArray = getMultipleLengths(arrOfStr);
    let maxLength = Math.max.apply(null, lengthOfWordInArray);

    let i = 0;
    for(; i < lengthOfWordInArray.length; i++) {
        if(lengthOfWordInArray[i] === maxLength) {
            break;
        }
    }
    return arrOfStr[i];
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", 
                            "Peanutbutter", "big", "Todd", "abcdfredtuyh"]));





// I. `transmogrify`
function transmogrify(num1, num2, num3) {
    return Math.pow((num1 * num2), num3);
}
console.log(transmogrify(5, 3, 2));

// J. `reverseWordOrder` v2
function reverseWordOrder(strWords) {
    let reverseStrWords = "";
    
    let arrayOfWords = [];
    
    let word = "";


    for(let i = 0; i < strWords.length; i++) {
        if(strWords[i] === " " || i === (strWords.length - 1)) {
            arrayOfWords.push(word);
            word = "";
        } else{
            word += strWords[i];
        }        
    }

    while(s = arrayOfWords.pop()) {
        reverseStrWords += s + " ";
    }

    return reverseStrWords;
} 
console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));


// K. Get down and dirty with `Math.random()`
function randomNumber() {
    // 1.
    let randomArray1to10 = [];
    for (let i = 1; i < 20; i++) {
        randomArray1to10.push((Math.floor(Math.random() * 10)) + 1);
    }
    console.log(randomArray1to10);

    // 2.
    let randomArray10to100 = [];
    for (let i = 1; i < 200; i++) {
        randomArray10to100.push((Math.floor(Math.random() * (100 - 10 + 1))) + 10);
    }
    console.log(randomArray10to100);

    // 3.
    let randomArray532to13267 = [];
    for (let i = 1; i < 15000; i++) {
        randomArray532to13267.push((Math.floor(Math.random() * (13267 - 532 + 1))) + 532);
    }
    console.log(randomArray532to13267);

    // 4.
    let randomArray1to10_2 = [];
    for (let i = 1; i < 20; i++) {
        randomArray1to10_2.push((Math.floor(Math.random() * (10 - 1 + 1))) + 1);
    }
    console.log(randomArray1to10_2);
}

randomNumber();

// 5.

quotes = ["Those who dare to fail miserably can achieve greatly.", 
            "Let us always meet each other with smile, for the smile is the beginning of love",
             "Love is a serious mental disease", 
             "It is hard to fail, but it is worse never to have tried to succeed.",
             "If you want to be happy, be"];

function getRandomElement(quotes) {
    return (quotes[Math.floor(Math.random() * (quotes.length - 0)) + 0]);
}

function quotesArray() {
    let quotesArray = [];
    for(let i = 0; i < 10; i++) {
        quotesArray.push(getRandomElement(quotes));
    }
    return quotesArray;
}

console.log(quotesArray());


// Objects

// A. Make a user object
// 1. 2.
const user = {
    name: "Amin",
    email: "am@am.com",
    age: 40,
    purchased: []
}


// B. Update the user
// 1.
user.email = "cc@cc.org";
console.log(user.email);

// 2.
user.age++;
console.log(user.age);

// C. Adding keys and values
// 1.
user['location'] = "Denver";
console.log(user.location);

// D. Shopaholic!
// 1. 
user.purchased.push('carbohydrates');
console.log(user.purchased);

// 2.
user.purchased.push('peace of mind');
console.log(user.purchased);

// 3.
user.purchased.push('Merino jodhpurs');
console.log(user.purchased);

// 4.
console.log(user.purchased[user.purchased.length - 1]);



// E. Object-within-object
// 1.
user.friend = {
    name: "anna",
    age: 32,
    location: "San Jose",
    purchased: []
}

// 2.
console.log(user.friend.name);

// 3.
console.log(user.friend.location);

// 4.
user.friend.age = 55;
console.log(user.friend.age);

// 5.
user.friend.purchased.push("The One Ring");

// 6.
user.friend.purchased.push("A latte");

// 7.
console.log(user.friend.purchased[user.friend.purchased.length - 1]);



// F. Loops

// 1.
for(let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
}

// 2.
for(let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
}


// G. Functions can operate on objects

// 1.
function updateUser() {
    user.age++;
    user['name'] = user.name.toUpperCase();
    console.log(user);
}

updateUser();

// 2.
function oldAndLoud(person) {
    person.age++;
    person['name'] = person.name.toUpperCase();
    console.log(user);
}
oldAndLoud(user);


//=================================================
// Hungry for More?

// Cat Combinator
// 1. Mama cat

const cat1 = {
    name: 'moa',
    breed: 'persian',
    age: 4
}
// console.log(cat1.age);
// console.log(cat1.breed);

// 2.
const cat2 = {
    name: 'patty',
    breed: 'german',
    age: 7
}

// 3. Combine Cats!
function combineCats(mama, papa) {
    // console.log({name: `${mama.name}`, age: `${mama.age}`, breed: `${mama.breed}`});
    // console.log({name: `${papa.name}`, age: `${papa.age}`, breed: `${papa.breed}`});

    return {name: `${mama.name}${papa.name}`, age: mama.age, breed: `${mama.breed}-${papa.breed}`};
}

console.log(combineCats(cat1, cat2));

// 4. Cat brain bender
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));


