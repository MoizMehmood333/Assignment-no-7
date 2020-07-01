// ----------------chapter-21-25-----------------


// &&&& task-1 &&&&

// var firstName = prompt("Enter your First Name: ");
// var lastName = prompt("Enter your Last name: ");
// var fullName = firstName + " " + lastName;
// alert ( "Welcome to our store " + fullName );

// &&&& task-2 &&&&

// var favMobile = prompt("Enter your favourite mobile phone: ");
// var lengthMobileString = favMobile.length;
// document.writeln("My favourite phone is: " + favMobile + "<br>");
// document.writeln("Length of String: " + lengthMobileString);


// &&&& task-3 &&&&

// var na = "Pakistani";
// var n = na.indexOf('n');
// document.writeln("String : " + na + "<br>")
// document.writeln("Index of 'n': " + n)


// &&&& task-4 &&&&

// var na = "Hello World";
// var n = na.lastIndexOf('l');
// document.writeln("String : " + na + "<br>")
// document.writeln("Index of 'n': " + n)



// &&&& task-5 &&&&

// var na = "Pakistani";
// var n = na[3];
// document.writeln("String : " + na + "<br>");
// document.writeln("Character at Index of 3: " + n);

// &&&& task-6 &&&&

// var na = "Pakistani";
// var n = na.concat();
// var nn = n[3]; 
// document.writeln("String : " + na + "<br>");
// document.writeln("Character at Index of 3: " + nn);


// &&&& task-7 &&&&

// var city = "Hyderabad";
// document.writeln("City: " + city + "<br>");

// city = city.replace("Hyder", "Islam")
// document.writeln("After replacement: " + city+ "<br>");


// &&&& task-8 &&&&

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.writeln("Message: " + message + "<br>");

// message = message.replace(/and/g, "&")
// document.writeln("After replacement: " + message+ "<br>");

// &&&& task-9 &&&&

// var num = "472";


// var numConv = parseInt(num);


// document.writeln("Value: " + num+ "<br>");
// document.writeln("Type: String " + "<br>"  );
// if(Number.isInteger(num) == false  ){
//     document.writeln("checkValue: " + num + " is string <br>");

// }
// document.writeln("Value: " + numConv+ "<br>");
// document.writeln("Type: Int " + "<br>");
// if(Number.isInteger(numConv) == true  ){
//     document.writeln("checkValue: " + num + " is integer <br>");

// }






// &&&& task-10 &&&&

// var input  = prompt("Enter any word you wanna capatalize");
// document.writeln("User Input: " + input + "<br>");
// document.writeln("Upper case: " + input.toUpperCase() + "<br>");

// &&&& task-11 &&&&

// var input  = prompt("Enter any word you wanna capatalize");
// var firstLetter = input[0].toUpperCase();
// var restLetter = input.slice(1).toLowerCase();
// document.writeln(firstLetter + restLetter);


// &&&& task-12 &&&&

// var num = 35.36 ;
// var string = num.toString();
// string = string.slice(0,2) + string.slice(3);
// document.writeln(string);


// &&&& task-13 &&&&

// var userName = prompt("Enter a User Name");
// var charUser=[];
// var increment = 0;
// for (let i = 0; i < userName.length; i++) {
//     charUser[i] = userName.charCodeAt(i);

// }

// for (let j = 0; j < charUser.length; j++) {
//     if (charUser[j] == 33 || charUser[j] == 44 || charUser[j] == 46 || charUser[j] == 64)   {
//         increment = ++increment;
//     }
// }

// if (increment > 0) {
//     document.writeln("Enter a valid User Name")
// }
// else{
//     document.writeln("Welcome")
// }
// &&&& task-14 &&&&

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to abc store! what do you want to order sir/ma'am? <br>");
// input = input.toLowerCase();
// for (let i = 0; i < a.length; i++) {

//     if (input === a[i]) {
//         document.writeln(input +" is available at index " + i + " in our bakery <br>");
//         break
//     } else {
//         document.writeln("We are sorry. " +  input +  " is not available in our bakery");
//     }
// }




// &&&& task-15 &&&&


// var password = prompt("Enter a Password");
// var charPass=[];
// var increment = 0;
// var charIncrement=0;
// for (let i = 0; i < password.length; i++) {
//     charPass[i] = password.charCodeAt(i);

// }

// for (let j = 0; j < charPass.length; j++) {
//     if ((charPass[j] >=49 && charPass[j] <=57) || (charPass[j] >=65 && charPass[j] <=90) || (charPass[j] >=97 && charPass[j] <=122))   {
//         increment = ++increment;
//     }
//     else{
//         charIncrement = ++charIncrement;
//     }
// }


// if (increment>0 && charIncrement == 0 &&   charPass.length >=6 && (charPass[0] > 57)) {
//     document.writeln("Valid password")

// }else if( charPass.length >=6 && (charPass[0] <= 57) )
// {
//     document.writeln("Password cannot begin with a number")

// }
// else if(charPass.length <6 && (charPass[0] <= 57) )
// {
//     document.writeln("Password cannot begin with a number and cannot be shotter than 6 digits")

// }

// else if( charPass.length <6 && (charPass[0] > 57))
// {
//     document.writeln("Password cannot be shotter than 6 digits")

// }
// else{
//     document.writeln("Invalid password")

// }


// &&&& task-16 &&&

// var nam = "University Of Karachi";
// var nameSplit = nam.split("");

// for (let i = 0; i < nameSplit.length; i++) {

//     document.writeln(nameSplit[i] + "<br>");

// }


// &&&& task-17 &&&&

// var nam = "Pakistan";
// document.writeln("Last character of Input: " + nam.charAt(nam.length - 1))

// &&&& task-18 &&&&

// var string = "The quick brown fox jumps over the lazy dog";
// string = string.toLowerCase();
// var increment= 0;
// for (let i = 0; i < string.length; i++) {
//     if (string.slice(i, i+3) === "the") {
//     increment = increment+1;

//     }
// }
// document.writeln("Text: " +  )

// document.writeln(increment)

// ----------------chapter-26-30-----------------


// &&&& task-1 &&&&

// var number =  3.45214;
// var roundOff = Math.round(number);
// var floorValue = Math.floor(number);
// var ceilValue = Math.ceil(number);

// document.writeln("number: " + number + "<br>");
// document.writeln("Round Off: " + roundOff + "<br>");
// document.writeln("Floor Value: " + floorValue + "<br>");
// document.writeln("Ceil Value: " + ceilValue + "<br>");


// &&&& task-2 &&&&


// var number =  -2.673;
// var roundOff = Math.round(number);
// var floorValue = Math.floor(number);
// var ceilValue = Math.ceil(number);

// document.writeln("number: " + number + "<br>");
// document.writeln("Round Off: " + roundOff + "<br>");
// document.writeln("Floor Value: " + floorValue + "<br>");
// document.writeln("Ceil Value: " + ceilValue + "<br>");


// &&&& task-3 &&&&

// var value = -5;
// var absoluteValue = value * -1;
// document.writeln("The absolute value of: " + value + " is " + absoluteValue+" <br>");



// &&&& task-4 &&&&

// var value = Math.random()*6;

// var absoluteValue = Math.round(value);
// document.writeln("Random dice value is : " + absoluteValue);



// &&&& task-5 &&&&


// var value = Math.random()*2;

// var absoluteValue = Math.ceil(value);
// if (absoluteValue == 2) {
//     document.writeln(absoluteValue + "<br>")
//     document.writeln("Random Coin value :  Heads")

// } else {
//     document.writeln(absoluteValue + "<br>")
//     document.writeln("Random Coin value :  Tails")
// }


// &&&& task-6 &&&&


// var value = Math.random()*100;

// var absoluteValue = Math.ceil(value);
// document.writeln("Random value between 1 and 100 : " + absoluteValue);



// &&&& task-7 &&&&

// var weight = prompt("Enter you weight");
// var a= parseFloat(weight)
// document.writeln("The weight of user is "+ a + " Kilograms" )

// &&&& task-8 &&&&

// var secNum = 6;
// var inpNum = +prompt("Enter a number between 1 - 10");
// if (inpNum == secNum) {
//     document.writeln("Congratulations! you've entered the right number!!!")
// } else {
//     document.writeln("Try Again!!!")

// }



// ----------------chapter-------------------


// &&&& task-1 &&&&

// var a = new Date();
// document.writeln(a);

// &&&& task-2 &&&&

// var a = new Date();
// var monthNames = ["Jan", "Feb", "March", "Aprl", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
// var theMonth = a.getMonth();
// var nameOfThisMonth = monthNames[theMonth];
// alert("Current Month: " + nameOfThisMonth)

// &&&& task-3 &&&&

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.writeln("Today is: " + nameOfToday );



// &&&& task-4 &&&&

// var now = new Date();
// var theDay = now.getDay();
// if (theDay == 0 || theDay ==6) {
//     document.writeln("It's Fun Dayy")
// } else {
//     document.writeln("A shit here we go again")
// }

// &&&& task-5 &&&&

// var now = new Date();
// var theDay = now.getDate();


// if (theDay <= 15) {
//     document.writeln("First 15 days of Month" )
// } else {
//     document.writeln("Last days of Month" )
    
// }

// &&&& task-6 &&&&

// var now = new Date();
// var timeinMili = now.getTime();

// document.writeln("Current Date: " + now + "<br>");
// document.writeln("Elapsed milliseconds since midnight January, 1970: " + timeinMili + "<br>");
// document.writeln("Elapsed minutes since midnight January, 1970: " + (timeinMili/1000/60/60)+ "<br>");



// &&&& task-7 &&&&


// var now = new Date();
// var timeinMiliDayEarlier = now.getTime()-(24*1000*60*60);
// var timeinMili = now.getTime();

// var timeInHours =  (timeinMili-timeinMiliDayEarlier)/1000/60/60/24;
// if (timeInHours >= 12) {
//     document.writeln("It's AM")
// } else {
//     document.writeln("It's PM")
    
// }



// &&&& task-8 &&&&


// var laterDate = new Date();
// laterDate.setFullYear(2020);
// laterDate.setHours(00,00,00)
// laterDate.setMonth(11, 31);
// document.writeln(laterDate);


// &&&& task-9 &&&&

// var lastRamzan = new Date("June 18, 2015");
// lastRamzan.getTime();
// var now = new Date();
// now.getTime();
// var daysPassedSinceRamzan = (now - lastRamzan)/1000/60/60/24;
// document.writeln(Math.ceil(daysPassedSinceRamzan)+ " days have passed since 1st Ramadan, 2015");


// &&&& task-10 &&&&

// var beginingYear = new Date("Jan 1, 2015");
// var refrenceYear = new Date();
// refrenceYear.setFullYear(2015,11,5);
// refrenceYear.setHours(22,50,16);



// var refrenceYeartime = refrenceYear.getTime();
// var beginingYeartime =  beginingYear.getTime();
// var timeInSec = (refrenceYeartime- beginingYeartime)/1000;

// document.writeln("On refrence date " + refrenceYear + ",  " +Math.round(timeInSec) + " seconds have passed since the begging of year 2015")





// &&&& task-11 &&&&

// var hourAgo = new Date();
// var gethour = hourAgo.getHours();
// hourAgo.setHours(gethour-1);
// document.writeln(hourAgo);


// &&&& task-12 &&&&

// var yearsAgo = new Date();
// var getFullYear = yearsAgo.getFullYear();
// yearsAgo.setFullYear(getFullYear-100);
// document.writeln(yearsAgo);



// &&&& task-13 &&&&

// var age = +prompt("Enter your age: ");
// var now = new Date();
// var currentYear = now.getFullYear();
// var birthYear = currentYear - age;
// document.writeln("Your age is: "+age + "<br>");
// document.writeln("Your birth year is: " + birthYear);


// &&&& task-14 &&&&









// ----------------chapter-35-38-----------------


// &&&& task-1 &&&&

// function date() {

// var a = new Date();
// return a;

// }

// var a = date();
// document.writeln(a)


// &&&& task-2 &&&&

// function greet(firstName, lastName) {

//     var fullName = firstName + " " + lastName;
//     document.writeln("Welcome " + fullName); 

// }

// greet("Moiz", "Mehmood");



// &&&& task-3 &&&&

// function sum(num1,num2) {
//     var num = num1 + num2;
//     return num;    
// }

// var a  = sum(8,4);
// document.writeln("Sum of the numbers is " + a)




// &&&& task-4 &&&&

// function calc(no1, operator, no2) {

//     document.writeln("First no : " + no1 + "<br>");
//     document.writeln("Second no : " + no2 + "<br>");
//     document.writeln("Operation to be performed : " + operator + "<br>");
//     var number;




//     if (operator == "+") {
//        return document.writeln("Result is : " + (no1 + no2) + "<br>");

//     } else if (operator == "-") {
//        return number = no1 - no2;

//     } else if (operator == "*") {
//        return number =  no1 * no2;

//     } else if (operator == "/") {
//        return  number = no1 / no2;

//     } else if (operator == "%") {
//        return  number =  no1 % no2;

//     }
// }

// var a = calc(4,"*",10);
// document.writeln("Result is: " + a)

// &&&& task-5 &&&&

// function square(no) {
//     var num = no*no;
//     return num;
// }

// var a = square(4)
// document.writeln(a)


// &&&& task-6 &&&&

// function factorial(no) {
//     var num =1  ;
//     for (let i = 1; i <= no; i++) {
//         num = num* i;

//     }
//     return num;

// }

// var a = factorial(4);
// document.writeln(a);

// &&&& task-7 &&&&

// function count(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.writeln(i + "<br>")
//     }
// }

// count(1,100)

// &&&& task-8 &&&&

// function calculateHypotenuse(base, perpendicular) {
//     function square(no) {
//         var num = no * no;
//         return num;
//     }
//     base = square(base);
//     perpendicular = square(perpendicular);
//     var Hypotenuse = Math.sqrt(perpendicular + base); 
//     return Hypotenuse;
// }

// var a = calculateHypotenuse(10,50);
// document.writeln(a)

// &&&& task-9 &&&&

// function area(width,height) {
//     var area = width * height;
//     return area; 
// }

// var a = 10;
// var b = 15;
// document.writeln(area(a,b) + "<br>")
// document.writeln(area(10,40))


// &&&& task-10 &&&&

// function palindrome(word) {
//     var palindrome = "";
//     Boolean = false;
//     for (let i = word.length - 1; i >= 0; i--) {
//         palindrome += word[i];

//     }
//     if (palindrome === word) {
//        return Boolean = true;
//     }
//     else {
//        return Boolean = false
//     }
// }

// var word = "afifa"
// word = palindrome(word);

// if (Boolean == true) {
//     document.writeln("The word is palindrome")
// } else if(Boolean == false) {
//     document.writeln("The word is not a palindrome")

// }


// &&&& task-11 &&&&

// var nam = "UnivERsity Of KarAChi";


// function para(nam) {
//     document.writeln(nam + "<br>");
//     var nameSplit = nam.split(" ");

//     for (let i = 0; i < nameSplit.length; i++) {

//         nameSplit[i] = nameSplit[i].slice(0, 1).toUpperCase() + nameSplit[i].slice(1).toLowerCase();

//     }
//     nameSplit = nameSplit.join(' ');
//     return nameSplit;
// }



// document.writeln(para(nam))


// &&&& task-12 &&&&

// function biggestWord(nam) {
//     var nameSplit = nam.split(" ");
//     var output = "";
//     document.writeln(nameSplit);
//     for (let i = 0; i < nameSplit.length-1; i++) {
//         if (nameSplit[i].length > nameSplit[i+1].length) {
//             output =  nameSplit[i];
//         }
//         else if (output.length < nameSplit[i+1].length){
//             output = nameSplit[i+1];
//         }

//     }
//     return output; 
// }
// var nam = "University Of Karachi";
// document.writeln(biggestWord("<br>"+nam));


// &&&& task-13 &&&&

// function countOccurance(String, letter) {
//     string.toLowerCase();
//     var occurance = 0;

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === letter) {
//             ++occurance;
//         }

//     }
//     return occurance;

// }
// var string = "dametoqosita" 
// var letter = "o";

// document.writeln("The letter '" + letter + "' occured: " + countOccurance(string, letter) + " times" )



// &&&& task-14 &&&&


// var radius = 20;
// var circumference, area;

// function calcCircumference(radius) {
//     circumference = 2 * 3.142 * radius;
//     return circumference;

// }
// function calcArea(params) {
//     area = 3.142 * (radius * radius);
//     return area;    
// }
// document.writeln("Radius of Circle is : " + radius + "<br>");
// document.writeln("Circumference of Circle is : " + calcCircumference(radius) + "<br>");
// document.writeln("Area of Circle is : " + calcArea(radius) + "<br>");






