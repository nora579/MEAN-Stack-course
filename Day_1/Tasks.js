//Task 1: Console Intro
console.log("---------------Task 1---------------");
console.log("JS is running successfully");

//Task 2: Start Alert
console.log("---------------Task 2---------------");
alert("Ready to practice!");

//Task 3: Product Variables
console.log("---------------Task 3---------------");
var productName = "Laptop";
var price = 15000;
var isAvailable = true;

console.log("Product Name: " + productName);
console.log(typeof productName);
console.log("Price: " + price);
console.log(typeof price);
console.log("Is Available: " + isAvailable);
console.log(typeof isAvailable);

//Task 4: Change Page Title
console.log("---------------Task 4---------------");
document.getElementById("mainTitle").innerHTML = "Practice Time";

// Task 5: City Label with
console.log("---------------Task 5---------------");
var city = "Cairo";
var country = "Egypt";
console.log(city + ", " + country);

//Task 6: City Label with Template Literals
console.log("---------------Task 6---------------");
console.log(`${city}, ${country}`);

//Task 7: Shop Math
console.log("---------------Task 7---------------");
var itemPrice = 120;
var quantity = 3;
console.log("Total Price: " + (itemPrice * quantity));
console.log("The Remain Amount: " + (itemPrice * quantity - 400));
console.log("Product: " + (itemPrice * quantity));
console.log("Division: " + (itemPrice / quantity));
console.log("Modulus: " + (itemPrice % quantity));
console.log("Power: " + (quantity ** 2));

//Task 8: Ask Favorite Color
console.log("---------------Task 8---------------");
var favoriteColor = prompt("Enter your favorite color?");
console.log("Your favorite color is: " + favoriteColor);

//Task 9: Loose vs Strict
console.log("---------------Task 9---------------");
var score = 20;
var textScore = "20";
console.log("Loose Equality: " + (score == textScore));     //checks for the value only
console.log("Strict Equality: " + (score === textScore));   //checks for the value and the data type

//Task 10: Convert Quantity
console.log("---------------Task 10---------------");
var numberOfPieces = prompt("Enter the number of pieces: ");
console.log("The data type after Number(): " + typeof(Number(numberOfPieces)));
console.log("The data type after parseInt(): " + typeof(parseInt(numberOfPieces)));
console.log("The data type after +value: " + typeof(+numberOfPieces));

//Task 11: Fruits List
console.log("---------------Task 11---------------");
var fruits = ["apple", "banana", "mango"];
console.log("Second Element: " + fruits[1]);
fruits[1] = "orange";
fruits.push("grape");
console.log("The Array after update: " + fruits);

//Task 12: Course Object
console.log("---------------Task 12---------------");
var course ={"title": "Web Development", "hours": "90", "level": "beginner"};
course.title = "MEAN Stack";
console.log("Course Hours: " + course.hours);
console.log("Course Object: ");
console.log(course);

//Task 13: Access Check
console.log("---------------Task 13---------------");
var hasAccount = true;
var isVerified = false;
console.log("Allow Access: " + (hasAccount && isVerified));
console.log("May be Allowed: " + (hasAccount || isVerified));
console.log("Refuse Access: " + (!isVerified));

//Task 14: Update Balance
console.log("---------------Task 14---------------");
var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log("Balance: " + balance);

//Task 15: Booking Summary
console.log("---------------Task 15---------------");
var hotel = prompt("Enter the hotel name: ");
var nights = prompt("Enter the number of nights: ");
var confirmed = confirm("Is your booking confirmed?");
var bookingMsg = `Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${confirmed}`;
alert(bookingMsg);
console.log(bookingMsg);

//Task 16: Predict the Output
console.log("---------------Task 16---------------");
console.log(2 + 8 + "0");   //  100
console.log("2" + 8 + 0);   // 28
console.log(2 + "8" + 0);  //280

//Task 17: Copy Behavior
console.log("---------------Task 17---------------");
var city1 = "Alex"; 
var city2 = city1; 
city2 = "Giza"; 
console.log(city1, city2);    //Alex Giza

var car1 = { brand: "Toyota" }; 
var car2 = car1; 
car2.brand = "Honda"; 
console.log(car1, car2);   //{ brand: "Honda" } { brand: "Honda" }

var car1 = { brand: "Toyota" }; 
var car2 = Object.assign({}, car1);
car2.brand = "Honda"; 
console.log(car1, car2);   //{ brand: "Toyota" } { brand: "Honda" }

//Task 18: Mixed Bag
console.log("---------------Task 18---------------");
var mixedArray = [10, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
for (var i = 0; i < mixedArray.length; i++) {
    console.log("Element at index " + i + ": " + mixedArray[i] + ", And its Type: " + typeof mixedArray[i]);
}    //type of null is object because it ia a bug in js from history.

//Task 19: Order Message (IPO)
console.log("---------------Task 19---------------");
var clientName = prompt("Enter your name: ");
var orderPrice = prompt("Enter the order price: ");
var paymentStatus = confirm("Is the payment completed?");
price = Number(orderPrice);
var orderMsg = `Client Name: ${clientName}, Order Price: ${price}, Payment Completed: ${paymentStatus}`;
console.log(orderMsg);
alert(orderMsg);
document.getElementById("result").innerText = orderMsg;

//Task 20: Two Numbers Report
console.log("---------------Task 20---------------");
var num1 = prompt("Enter the first number: ");
var num2 = prompt("Enter the second number: ");
var number1 = Number(num1);
var number2 = Number(num2);
console.log(num1 + "+" + num2 + "=" + (number1 + number2));
console.log(num1 + "-" + num2 + "=" + (number1 - number2));
console.log(num1 + "*" + num2 + "=" + (number1 * number2));
console.log(num1 + "/" + num2 + "=" + (number1 / number2));
console.log(num1 + "%" + num2 + "=" + (number1 % number2));
console.log(num1 + "^" + num2 + "=" + (number1 ** number2));

//Task 21: Fix the Total
console.log("---------------Task 21---------------");
var a = 40; 
var b = 50; 
var c = "60"; 
var d = 30; 
var e = 30; 
console.log(a + b + Number(c) + d + e);

//Task 24: Compare Values
console.log("---------------Task 24---------------");
var a = "15"; 
var b = 15; 
var c = null; 
var d; 
var e = [15]; 
var f = { value: 15 };
console.log("a: " + a + " | value: " + a + " | typeOf: " + typeof(a) + " | a == 15: " + (a == 15) + " | a === 15: " + (a === 15));
console.log("b: " + b + " | value: " + b + " | typeOf: " + typeof(b) + " | b == 15: " + (b == 15) + " | b === 15: " + (b === 15));
console.log("c: " + c + " | value: " + c + " | typeOf: " + typeof(c) + " | c == 15: " + (c == 15) + " | c === 15: " + (c === 15));
console.log("d: " + d + " | value: " + d + " | typeOf: " + typeof(d) + " | d == 15: " + (d == 15) + " | d === 15: " + (d === 15));
console.log("e: " + e + " | value: " + e + " | typeOf: " + typeof(e) + " | e == 15: " + (e == 15) + " | e === 15: " + (e === 15));
console.log("f: " + f.value + " | value: " + f.value + " | typeOf: " + typeof(f) + " | f == 15: " + (f == 15) + " | f === 15: " + (f === 15));

//Task 25: Product Card App
console.log("---------------Task 25---------------");
var productName = prompt("Enter the product name: ");
var brand = prompt("Enter the brand: ");
var price = prompt("Enter the price: ");
var category = prompt("Enter the category: ");
var inStock = confirm("Is this product in stock?");

price = Number(price);

var prodectInfo ={
    name: productName,
    brand: brand,
    price: price,
    category: category,
    inStock: inStock
};

var ProdectCard = `Product Name: ${prodectInfo.name}, Brand: ${prodectInfo.brand}, Price: ${prodectInfo.price}, Category: ${prodectInfo.category}, In Stock: ${prodectInfo.inStock}`;
console.log(ProdectCard);
alert(ProdectCard);
document.getElementById("productCard").innerText = ProdectCard;

console.log("The first character in the product name: " + prodectInfo.name[0]);