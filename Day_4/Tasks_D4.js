// Part A — Objects
console.log("-------- Part A — Objects ---------");

var car = {
    brand : "BMW",
    model : "123",
    year : "2020",
    color : "red"
}
console.log("Car = ", car);

console.log("Car Brand: " + car.brand);
console.log("Car Year: " + car["year"]);

car.color = "black";
car.price = 100000;
console.log("Car = ", car);

var student = {
    "student-name": "Sara"
}
student.age = 20;
console.log("Student Name: " + student["student-name"]);


var book = {
    title: "book1",
    author: {
        firstName: "Mohammed",
        lastName: "Ahmed"
    }
}

console.log("Author Last Name: " + book.author.lastName);

var obj = {
    name: "Ali",
    age: 25,
    city: "Cairo"
}

console.log("Object Keys: " + Object.keys(obj));
console.log("Object Values: " + Object.values(obj));
console.log("Has property 'job': " + obj.hasOwnProperty("job"));

var settings = {
    theme: "dark",
    lang: "en"
}
Object.freeze(settings);
settings.theme = "light";
settings.fontSize = 16;
// wont change because freeze doesn't allow to change valus or add or remove property
console.log("Settings Object: ", settings); 

// Part B — Arrays Basics
console.log("-------- Part B — Arrays Basics ---------");
var cities = ["Cairo", "Giza", "Alexandria", "Suiz", "Menia"];
console.log("Cities Names: " + cities);
console.log("It's length = " + cities.length);

console.log("First city: " + cities[0]);
console.log("Second city: " + cities[1]);
console.log("Last city: " + cities[cities.length - 1]);

cities.push("Bahrain");
cities.unshift("Beni-Suif");
console.log("Cities Names: " + cities);

cities.pop();
cities.shift();
console.log("Cities Names: " + cities);

var progLang = ["HTML", "CSS", "JS", "React"];
console.log("Index of 'JS' = " + progLang.indexOf("JS"));
console.log("Is include 'python'? " + progLang.includes("Python"));

var tools = ["pen", "book", "bag"];
tools.forEach(function(tool, index) {
    console.log(index + " >>>> " + tool);
})

var colors = ["red", "green", "blue", "yellow"];
for (var color of colors){
    if (color == "blue"){
        break;
    }
    console.log(color);
}

var letters = ["A", "B", "C"];
letters.push("D");
letters.push("E");
letters.shift();
console.log("Letters: " + letters);

// Part C — Array Methods
console.log("-------- Part C — Array Methods ---------");
var fruits = ["apple", "banana", "cherry"];
var newFruits = fruits.map(function(fruite) {
    return fruite.toUpperCase();
})

console.log("Fruits: " + fruits);
console.log("Fruits (UpperCase): " + newFruits);

var nums = [10, 55, 30, 80, 45, 90];
var filteredNums = nums.filter(function(num) {
    return num > 50;
})
console.log("Filtered Numbers: " + filteredNums);

var cities2 = ["Cairo", "Giza", "Alex", "Aswan"];
var aCity = cities2.find(function(city) {
    return city.startsWith("A");
})

var aCityIndex = cities2.findIndex(function (city) {
    return city.startsWith("A");
});

console.log(aCity + " and it's index = " + aCityIndex);

var letters2 = ["a", "b", "c", "d", "e"];
console.log(letters2.slice(1, 4));
console.log(letters2);

var items = ["one", "two", "three", "four", "five"];
var removedItems = items.splice(1, 2);
console.log("Removed Items: " + removedItems);
console.log("Remained Items: " + items);

var numbers = [40, 100, 1, 5, 25];
numbers.sort(function(a, b) {
    return a - b;
})
console.log("Sorted Array: " + numbers);

var numbers2 = [16, 21, 17, 19];
var someNum = numbers.some(function(number) {
    return number >= 18;
})

var everyNum = numbers.every(function(number) {
    return number >= 18;
})

console.log("Some number is >= 18? " + someNum);
console.log("Every number is >= 18? " + everyNum);

var numbers3 = [5, 10, 15, 20];
var sum = numbers3.reduce(function(number, n) {
    return n += number;
}, 0)
console.log("Total Value = " + sum);

//Part D — Mix (Objects + Arrays)
console.log("-------- Part D — Mix (Objects + Arrays) ---------");
var studentsArr = [{ name: "Omar", grade: 80 }, { name: "Mona",
grade: 90 }, { name: "Ali", grade: 70 }]

for (var student of studentsArr){
    console.log("Name: " + student.name + ", Grade = " + student.grade);
}

var filteredGrads = studentsArr.filter(function(student) {
    if (student.grade >= 80){
        return student;
    }
})

var filteredNames = filteredGrads.map(function(student) {
    return student.name;
})
console.log("Students with grads >= 80: " + filteredNames);

var products = [{name: "apple", price: 10}, {name: "oil", price: 20}, {name: "banana", price: 5}, {name: "meat", price: 30}];
var totalPrice = products.reduce(function(n, product) {
    return n + product.price;
}, 0)

console.log("The total price of products = " + totalPrice);

var progLang2 = ["js", "html", "css", "js", "react", "js"];
var counter = 0;
for (var lang of progLang2){
    if (lang === "js"){
        counter++;
    }
}
console.log("The Times of 'js' appearance = " + counter);

var classroom = {
    teacher: "Mohammed",
    students: ["Noha", "Mona", "Maher", "Rana"]
}

console.log("The Teacher name: " + classroom.teacher);
console.log("The number of students = " + classroom.students.length);
console.log("The name of the last student: " + classroom.students[classroom.students.length - 1]);

var products2 =[{ id: 1, title: "Pen", price: 10 }, { id: 2, title: "Book",
price: 50 }, { id: 3, title: "Bag", price: 25 }];

var UpperCaseProducts = products2.map(function(product) {
    return product.title.toUpperCase();
})

var lessPrices = products2.filter(function(product) {
    return product.price < 30
})

var totalPrice2 = 0;
for (var product of lessPrices){
    totalPrice2 += product.price;
}

console.log("The Titles in Upper case: " + UpperCaseProducts);
console.log("The Prices less than 30: ", lessPrices);
console.log("The Total price of all products = " + totalPrice2);
