// Part A - Strings
console.log("--------- Part A - Strings -----------")
var fullName = "Ahmed Ali";
console.log("Number of characters in 'Ahmed Ali' = " + fullName.length);

var sentence = "I am learning JavaScript";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

var email = "student@nti.com";
console.log("Does 'student@nti.com' contain '@'? " + email.includes("@"));

var word = "JavaAcript";
console.log("The first character in 'JavaAcript' is: " + word[0] + ", and the last character is: " + word[word.length-1]);

var text = "This is a bad day";
console.log("Text before: " + text + ", text after: " + text.replace("bad", "good"));

var sentence1 = "I love coding";
var words = sentence1.split(" ");
console.log("Words Array: " + words);
console.log("Joined again: " + words.join("-"));

var text1 = " nti egypt training ";
console.log("Final result: " + text1.trim().toUpperCase().replace("EGYPT", "CAIRO"));

// Part B - Numbers & Math
console.log("--------- Part B - Numbers & Math -----------")
var num = "45.8";
console.log("The real number is: " + Number(num));

var num1 = 7.6;
console.log("Rounded value = " + Math.round(num1));
console.log("Floor value = " + Math.floor(num1));
console.log("Ceil value = " + Math.ceil(num1));

var a = 12; b = 5; c = 28; d = 9;
console.log("Max number = " + Math.max(a, b, c, d));
console.log("Min number = " + Math.min(a, b, c, d));

var randomNum = Math.floor(Math.random() * 20) + 1
console.log("Random value in Range [1, 20]: " + randomNum);

var price = 19.4567;
console.log("Price = " + price.toFixed(2));

var randomNums = [];
for (var i = 0; i < 5; i++){
    randomNums[i] = Math.floor(Math.random() * 50) + 1
}
console.log("Random numbers: " + randomNums);
console.log("Max number: " + Math.max(...randomNums));
console.log("Min number: " + Math.min(...randomNums));

var sum = 0;
for(var num of randomNums){
    sum += num;
}
console.log("Average = " + (sum/5));

// Part C - Loops
console.log("--------- Part C - Loops -----------")
console.log("print from 1 to 20")
for (var i = 1; i <= 20; i++){
    console.log(i);
}

console.log("print odd numbers from 1 to 15")
for (var i = 1; i <= 15; i++){
    if (i % 2 == 1){
        console.log(i);
    }
}

console.log("countdown from 10 to 1")
var startNum = 10;
while(startNum > 0){
    console.log(startNum);
    startNum--;
}

console.log("print Array of names")
var names = ["Sara", "Omar", "Mona", "Youssef"];
for (var name of names){
    console.log(name);
}

console.log("print from 1 to 6")
for (var i = 1; i <= 10; i++){
    if (i == 7){
        break;
    } else{
        console.log(i);
    }
}

console.log("print multiplication table from 1 to 3")
for (var i = 1; i <= 3; i++){
    for (var j = 1; j <= 12; j++){
        console.log(i + " * " + j + " = " + (i*j));
    }
}

console.log("print numbers that not divisible by 3 from 1 to 25")
for (var i = 1; i <= 30; i++){
    if (i == 25){
        break;
    } else if (i % 3 == 0){
        continue;
    } else{
        console.log(i);
    }
}

// Part D - Mix(Strings + Numbers + Loops)
console.log("--------- Part D - Mix(Strings + Numbers + Loops) -----------")
console.log("print 'HELLO' as letters");
var word1 = "HELLO"
for (var i = 0; i < word1.length; i++){
    console.log(word1[i]);
}

var numsArray = [10, 20, 30, 40];
var sum1 = 0;
for(var num of numsArray){
    sum1 += num;
}
console.log("The sum of [10, 20, 30, 40] = " + sum1);

var counter = 0;
var sentence2 = "JavaScript is amazing and awesome";
for (var i = 0; i < sentence2.length; i++){
    if (sentence2[i] == "a" || sentence2[i] == "A"){
        counter++;
    }
}
console.log("the 'a' or 'A' in this sentence 'JavaScript is amazing and awesome' = " + counter);

var grades = [70, 85, 92, 60, 77, 88];
console.log("The Even grades in [70, 85, 92, 60, 77, 88] are: ");
for (var grade of grades){
    if (grade % 2 == 0){
        console.log(grade);
    }
}

console.log("The Star pattern: ");
for (var i = 1; i <= 4; i++){
    var stars = ""
    for (var j = 1; j <= i; j++){
        stars += "* ";
    }
    console.log(stars);
}

console.log("The original Array: [ahmed, sara, omar, laila, hassan]");
var counter1 = 0;
var studentNames = ["ahmed", "sara", "omar", "laila", "hassan"];
var i = 0;
for (var name of studentNames){
    studentNames[i] = name.toUpperCase();

    if(studentNames[i].startsWith("A") || studentNames[i].startsWith("S")){
        console.log(studentNames[i]);
        i++;
        counter1++
    }
}
console.log("The number of matched names = " + counter1);