// function sayHello() {
//     console.log("Hello World");
// }

// var role = prompt("Enter your role (admin/user/guest):");
// switch (role) {
//     case "admin":
//         console.log("Welcome Admin");
//         break;
//     case "user":
//         console.log("Welcome User");
//         break;
//     default:
//         console.log("Welcome Guest");
//         break;
// }

// var nums = [10, 20, 30, 40, 50];
// var sum = 0;
// for (num of nums) {
//     sum += num;
// }
// var average = sum / nums.length;
// console.log("Average of the numbers: " + average);


//Task 1: Attendance Sheet
console.log("----------------Task 1: Attendance Sheet----------------");
for (var i = 1; i <= 10; i++) {
    console.log("Student " + i + " is present");
}

//Task 2: Even Seat Numbers
console.log("----------------Task 2: Even Seat Numbers----------------");
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Seat Number " + i + " is available for online booking");
    }
}

//Task 3: Daily Sales Total
console.log("----------------Task 3: Daily Sales Total----------------");
var result = 0;
for (var i = 1; i <= 15; i++) {
    result += i;
}
console.log("Total sales = " + result);

//Task 4: Queue Tickets
console.log("----------------Task 4: Queue Tickets----------------");
var i = 1;
while (i <= 7) {
    console.log("Ticket number: " + i);
    i++;
}

//Task 5: Rocket Launch Countdown
console.log("----------------Task 5: Rocket Launch Countdown----------------");
var countdown = 8;
while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
}

//Task 6: First Login Welcome
console.log("----------------Task 6: First Login Welcome----------------");
var j = 1;
do {
    console.log("Welcome! login number " + j);
    j++;
} while (j <= 5);

//Task 7: Empty Cart vs First Visit
console.log("----------------Task 7: Empty Cart vs First Visit----------------");
var itemsInCart = 10;
do {                  //it will excute the process in do first then will check the condition in while
    console.log("Start Shopping, Items in cart = " + itemsInCart);
} while (itemsInCart < 5)

while (itemsInCart < 5){    //it will start by checking the condition in while first which is false so it won't print anything
    console.log("Items in cart = " + itemsInCart);
}

//Task 8: Student Profile Card
console.log("----------------Task 8: Student Profile Card----------------");
var userName = "Ali";
var userAge = 22;
var isStudent = true;
console.log("Name: " + userName + " Type of (Name): " + typeof(userName) + " Age: " + userAge + " Type of (Age): " + typeof(userAge) + " is student: " + isStudent + " Type of (is student): " + typeof(isStudent));

// Task 9: Price Match Bug
console.log("----------------Task 9: Price Match Bug----------------");
var dbPrice = 10;
var inputPrice = "10";
console.log("dbPrice == inputPrice? " + (dbPrice == inputPrice));    // compare only the value
console.log("dbPrice === inputPrice? " + (dbPrice === inputPrice));  // compare the value and the data type

//Task 10: App Welcome Screen
console.log("----------------Task 10: App Welcome Screen----------------");
var userName = prompt("Please, Enter your name");
alert(`Welcome, ${userName}`);

// Task 11: Checkout Quantity
console.log("----------------Task 11: Checkout Quantity----------------");
var quantity = prompt("Enter the required quantity");
console.log("first way using '+value', quantity = " + (+quantity) + " and the data type is: " + typeof(+quantity));
console.log("second way using 'parseInt', quantity = " + (parseInt(quantity)) + " and the data type is: " + typeof(parseInt(quantity)));
console.log("third way using 'Number', quantity = " + (Number(quantity)) + " and the data type is: " + typeof(Number(quantity)));

// Task 12: Mini Calculator
console.log("----------------Task 12: Mini Calculator----------------");
var a = 10;
var b = 3;
console.log(a + " + " + b + " = " + (a + b));
console.log(a + " - " + b + " = " + (a - b));
console.log(a + " * " + b + " = " + (a * b));
console.log(a + " / " + b + " = " + (a / b));
console.log(a + " % " + b + " = " + (a % b));
console.log(a + " ^ " + b + " = " + (a ** b));

// Task 13: Cinema Age Gate
console.log("----------------Task 13: Cinema Age Gate----------------");
var age = prompt("Enter your age");
if (age >= 18) {
    console.log("You can enter");
}
else{
    console.log("Sorry, underage")
}

// Task 14: Exam Result Letter
console.log("----------------Task 14: Exam Result Letter----------------");
var grade = prompt("Enter your grade");
if (grade >= 90){
    console.log("Your grade letter is: A")
} else if (grade >= 80 && grade <= 90){
    console.log("Your grade letter is: B")
} else if (grade >= 70 && grade <= 80){
    console.log("Your grade letter is: C")
}else {
    console.log("Your grade letter is: F")
}

// Task 15: Quick Age Label
console.log("----------------Task 15: Quick Age Label----------------");
var age2 = prompt("Enter your age again");
age2 >= 18? console.log("You are an Adult") : console.log("You are a Minor");

// Task 16: Workday Message
console.log("----------------Task 16: Workday Message----------------");
var day = prompt("Enter today's day:");
switch(day) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Saturday":
    case "Sunday":
    case "Friday":
        console.log("It's Weekend");
        break;
    default:
        console.log("It's Workday");
        break;

}

// Task 17: Product Price Table
console.log("----------------Task 17: Product Price Table----------------");
var unitPrice = prompt("Enter the price for one unit")
for (var i = 1; i <= 10 ; i++){
    console.log(i + " x " + unitPrice + " = " + (i*unitPrice));
}

// Task 18: Download Progress
var fileSize = prompt("Enter the file size");
if (fileSize > 0) {
    for (var i = 1; i <= fileSize; i++){
        console.log("Loading: " + i + " Mb")
    }
} else {
    console.log("Invalid file size ")
}

// Task 19: Order IDs Parity
console.log("----------------Task 19: Order IDs Parity----------------");
var startNumber = prompt("Enter the start order ID");
var endNumber = prompt("Enter the end order ID");
for (var i = startNumber; i <= endNumber; i++){
    if (i % 2 == 0){
        console.log("Order ID: " + i + " express")
    } else {
        console.log("Order ID: " + i + " normal")
    }
}

// Task 20: Class Roster
console.log("----------------Task 20: Class Roster----------------");
var num = 1;
var studentNames = ["Nora", "Ahmed", "Mahmoud", "Mona", "Yasser"]
for (var studentName of studentNames) {
    console.log("Student " + num + ": " + studentName);
    num++;
}

//Task 21: Weekly Expense Average
console.log("----------------Task 21: Weekly Expense Average----------------");
var sum = 0;
for (var i = 0; i < 5; i++){
    var num = Number(prompt("Enter The cost for day " + (i+1)));
    sum += num
}
console.log("The Sum for 5 days = " + sum);
console.log("The Average for 5 days = " + (sum/5));

// Task 22: ATM PIN Retry
var correctPin = "1234";
var attempts = 0;
while(attempts < 3){
    var enteredPin = prompt("Enter The pin contains 4 numbers")
    if (correctPin == enteredPin){
        console.log("Welcom, Access Success")
        break;
    }
    attempts++;
}
if (attempts == 3){
    console.log("Access Denied")
}

// Task 23: Account Verification Gate
console.log("----------------Task 23: Account Verification Gate----------------");
var hasAccount = true;
var isVerified = false;
var access = hasAccount && isVerified;
var verify = hasAccount || isVerified;
var signUp = !hasAccount;
console.log("Has Account and is Verified: " + access);
console.log("Has Account or is Verified: " + verify);
console.log("Hasn't Account: " + signUp);

if(access){
    console.log("Welcome back");
} else if(verify){
    console.log("Please verify your account");
} else if(signUp){
    console.log("Please sign up");
}

// Task 24: Broken Invoice Total
console.log("----------------Task 24: Broken Invoice Total----------------");
var a = 40; 
var b = 50; 
var c = "60"; 
var d = 30; 
var e = 30; 
console.log(a + b + Number(c) + d + e);
if ((a + b + Number(c) + d + e) <= 20){
    for(var i = 1; i<= 20; i++){
        console.log(i);
    }
} else{
    console.log("Too big to print line by line")
}

// Task 25: Promo Code Combinations
console.log("----------------Task 25: Promo Code Combinations----------------");
var n = Number(prompt("Enter a number n"))
var factorial = 1
if (n < 0){
    console.log("Invalid value (negative value)!!");
} else if (n == 0){
    console.log(n + "! = 0");
    alert(n + "! = 0");
}else {
    for (var i = 1; i <= n; i++){
        factorial *= i;
    }
    console.log(n + "! = " + factorial);
    alert(n + "! = " + factorial);
}