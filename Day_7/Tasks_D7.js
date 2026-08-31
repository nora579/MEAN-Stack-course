// Part A — "use strict"
console.log("----- Part A — 'use strict' -----");
function assignWithoutStrict() {
    variable1 = "Without Strict";
}

assignWithoutStrict();
console.log(variable1);   //output: "Without Strict" , because without strict the assign wothout declaration can happened and the variable will bw glopal

function assignWithStrict() {
    "use strict";
    try {
        variable2 = "With Strict";
    } catch(error){
        console.log("Error:", error.message);
    }
}

assignWithStrict();

function deleteTest() {
    "use strict";
    var localVar = "test";
    try {
        // delete localVar;
    } catch (error) {
        console.log("Error deleting variable:", error.message);
     }

    var obj = { prop: "to be deleted" };
    delete obj.prop;
    console.log("Object after deletion:", obj);
}
deleteTest();

// Part B — Hoisting
console.log("----- Part B — Hoisting -----");
console.log(x);  //undefined
var x = 10;
console.log(x);  //10

// Case 1
sayHi();   //print "Hi" , because this is a declared function so can hoising
function sayHi() {
    console.log("Hi");
}
// Case 2
// sayBye();    // error because this is a expression function do not hoising
var sayBye = function () {
    console.log("Bye"); 
};

// console.log(a);  //error because let do not allow hoising
let a = 5;

var n = 1;
function demo() {
    console.log(n);   //undefined (hoised but still not assigned), start search in the function scoope
    var n = 2;
    console.log(n); //2 
}
demo();
console.log(n); //1   start search in the outer scoope

// Part C — var vs let vs const
console.log("----- Part C — var vs let vs const -----");

function varScopeExample() {
    if (true) {
        var message = "var from if block to function scoope";
    }
    console.log(message);  //will see and print the message (var scoope os the function)
}

varScopeExample();


if (true) {
    let message2 = "let from if block";
    const message3 = "const from if block";

    console.log(message2);
    console.log(message3);
}
// console.log(message2);   // error  (let scoope only the if block)
// console.log(message3);  //error   (const scoope only the if block)

var number = 10;
var number = 20; // success

console.log("var number:", number); //20

let age = 20;
// let age = 30;   //fail

console.log("let age:", age); //20



const student = {
    name: "Mona",
    age: 19,
    city: "Alex"
};

console.log("Original student:", student);

student.age = 22;
console.log("After changing age:", student);

student.grade = "A";
console.log("After adding grade:", student);

delete student.city;
console.log("After deleting city:", student);

try {
    student = {
        name: "Ahmed",
        age: 25
    };
} catch (error) {
    console.log("Error:", error.message);
}



const nums = [1, 2, 3];
console.log("Original array:", nums);

nums.push(4);  //allowed
console.log("After push:", nums);

nums[0] = 10;  //allowed
console.log("After changing index 0:", nums);

try {
    nums = [5, 6, 7];  // not allowed
} catch (error) {
    console.log("Error:", error.message);
}



var a1;  //valid (undefined)
let b;  // valid (undefined)
// const c;  // not valid (error)


var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log(window.g1);  //"var global" 
console.log(window.g2);   //undefined
console.log(window.g3);   //undefined


const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
console.log(handlers.fn0());  //with var: 3 , with let: 0
console.log(handlers.fn2());  // with var: 3 , with let: 2


// Part D — Arrow Functions & Template Literals
console.log("----- Part D — Arrow Functions & Template Literals -----");

function welcome(name) {
    return "Welcome, " + name + "!";
}
var welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Hana"));


var fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
console.log(fullInfo("Ali", "Hassan", 25));


var multiply = (a, b) => a*b;
console.log("Product1 = " + multiply(10, 10));

var multiplyBlock = (a, b) => {
    console.log("a = " + a);
    console.log("b = " + b);
    return a*b
};
console.log("Product2 = " + multiplyBlock(10, 10));


// Part E — Destructuring, Default, Rest, Spread
console.log("----- Part E — Destructuring, Default, Rest, Spread -----");

const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};
const { title, price, inStock } = product;
console.log("Title:", title);
console.log("Price:", price);
console.log("In Stock:", inStock);


const progLang = ["HTML", "CSS", "JS", "React"];
const [first, second] = progLang;
console.log("First Item:", first);
console.log("Second Item:", second);


function  greet(name = "Guest", message = "Hello"){
    return `${message}, ${name}!`;
}
console.log("Greet 1: " + greet("Nora", "Welcome"));
console.log("Greet 2: " + greet("Nora"));
console.log("Greet 3: " + greet());


function sumAll(...numbers){
    return numbers.reduce(function (sum, number) {
        return sum += number;
    }, 0);
}

console.log("Sum test 1 = " + sumAll(1, 2, 3));
console.log("Sum test 1 = " + sumAll(10, 20, 30, 40));


const array1 = [1, 2];
const array2 = [3, 4, 5];
const mergedArray = [...array1, ...array2];
console.log("Merged array:", mergedArray);

const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];

copiedArray.push(40);

console.log("Original:", originalArray);
console.log("Copy:", copiedArray);


const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };

const mergedUser = {...user, ...contact};

console.log("merged User info: ", mergedUser);  // age = 23 (because it considered the last edit)


const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}

const result = total(...values);
console.log("Total result = " + result);



// Part F — Memory & Copying
console.log("----- Part F — Memory & Copying -----");

let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";
console.log(person1.name);  //Omar   (because it copied by refernce no deep copy)

const original = {
    name: "Mona",
    details: { city: "Cairo" }
};
const shallowCopy = {...original};

console.log("Before changes");
console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);

shallowCopy.name = "Sara";
console.log("After changing copy name");
console.log("Original:", original);
console.log("Copy:", shallowCopy);      // the name will change in copy only because it is in the top level

shallowCopy.details.city = "Alex";
console.log("After changing copy details city");
console.log("Original:", original);
console.log("Copy:", shallowCopy);   // the city will change in both because in shallow copy any other levels than the top level are shared

const original2 = {
    name: "Mona",
    details: { city: "Cairo" }
};

const deepCopy = structuredClone(original2);
deepCopy.details.city = "Alex";

console.log("Original:", original2);
console.log("Deep Copy:", deepCopy);


const userdata = { name: "Ahmed", age: 26, city: "Alex" };

localStorage.setItem("userdata", JSON.stringify(userdata));

const savedData = localStorage.getItem("userdata");
const parsedData = JSON.parse(savedData);

console.log("Type after parsing: ", typeof parsedData);

console.log("Name:", parsedData.name);
console.log("Age:", parsedData.age);
console.log("City:", parsedData.city);

localStorage.removeItem("userdata");



// Part G — Challenge Mix
console.log("----- Part G — Challenge Mix -----");
const APP_CONFIG = {
    name: "My App",
    version: "1.0.0",
    api: {
        baseUrl: "https://example.com",
        timeout: 5000
    },
    features: []
};
APP_CONFIG.api.timeout = 10000;
console.log("After changing timeout:", APP_CONFIG);

APP_CONFIG.features.push("Mode");
console.log("After adding feature:", APP_CONFIG);

try {
    APP_CONFIG = {
        name: "New App",
        version: "2.0.0"
    };
} catch (error) {
    console.log("Error:", error.message);
}


function createCard(title, price = 0, ...tags) {
    return {
        title: title,
        price: price,
        tags: tags,
        label: `${title} - ${price} EGP`
    };
}

const card1 = createCard(
    "Laptop",
    15000,
    "Electronics",
    "Technology"
);

const card2 = createCard(
    "Book",
    500,
    "Education",
    "Programming"
);

console.log("Card 1:", card1);
console.log("Card 2:", card2);


const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

students.map(function (student){
    console.log(`${student.name} scored ${student.grade}`);
})