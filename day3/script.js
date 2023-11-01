//level 1

let firstName = `yasir`;
console.log(typeof firstName); //string
let lastName = `sulyman`;
console.log(typeof lastName); //string
let country = `nigeria`;
console.log(typeof country); //string
let city = `ilorin`;
console.log(typeof city); //string
let age = 19;
console.log(typeof age); // number
let isMarried = false;
console.log(isMarried); //boolean
let year = 2023;
console.log(typeof year); //number

let tenString = `10`;
let tenNum = 10;
console.log(typeof `10` === 10);

let parseint = 9.8;
let numb = 10;
console.log(parseInt(9.8) === 10);

//Write three JavaScript statement which provide truthy value.
console.log(4 > 3);
console.log(5 > 4);
console.log(6 > 5);

//Write three JavaScript statement which provide falsy value.
console.log(2 < 1);
console.log(3 < 2);
console.log(4 < 3);

4 > 3; // true
4 >= 3; //true
4 < 3; //false
4 <= 3; //false
4 == 4; //true
4 === 4; //true
4 != 4; //false
4 !== 4; //false
4 != "4"; //true
4 == "4"; //true
4 === "4"; //false
let py = `python`.length;
let ja = `jargon`.length;
console.log(py != ja);

4 > 3 && 10 < 12; //true
4 > 3 && 10 > 12; //true
4 > 3 || 10 < 12; //false
4 > 3 || 10 > 12; //true
!(4 > 3); //false
!(4 < 3); //true
!false; //true
!(4 > 3 && 10 < 12); //false
!(4 > 3 && 10 > 12); // true
!(4 === "4"); //true

let string = "there is no 'on' in dragon and python";
console.log(!"dragon".includes("on") && !"python".includes("on")); //false

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());

let base = prompt(`base`);
let height = prompt(`height`);
let area = 0.5 * base * height;
console.log(area);

let sideA = prompt(`side a`);
let sideB = prompt(`side b`);
let sideC = prompt(`side c`);
let perimeter = sideA + sideB + sideC;
console.log(perimeter);

let length = prompt(`length`);
let width = prompt(`width`);
let areaa = length * width;
let perimeterr = 2 * (length + width);
console.log(areaa);
console.log(perimeterr);

let radius = prompt(`radius`);
let pi = prompt(`pi`);
let areaCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(areaCircle);
console.log(circumference);

// 5.Calculate the slope, x - intercept and y - intercept of y = 2x - 2
// let y_Intercept = Number(prompt('Enter Y-intercept'));
// let x_Intercept = Number(prompt('Enter X-intercept'));
let x_Intercept = 3;
let y_Intercept = 4;
let answerIntercept = (y_Intercept = 2 * x_Intercept - 2);
console.log("Slope =", answerIntercept);

// let x = prompt(`X`);
// let y = 2 * x - 2;
// console.log(`the slope is ${y}`);

// let y1 = prompt(`Enter y1`);
// let x1 = prompt(`Enter x1`);
// let y2 = prompt(`Enter y2`);
// let x2 = prompt(`Enter x2`);
let y1 = 2;
let x1 = 2;
let y2 = 6;
let x2 = 10;
let twoPoints = (y2 - y1) / (x2 - x1);
console.log(twoPoints);

//7. Compare the slope of above two questions.
let comparism = answerIntercept >= twoPoints;
console.log(comparism);

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = -3;
let calc = x ** 2 + 6 * x + 9;
console.log(calc);

// 9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt(`Enter hours`);
let ratePerHour = prompt(`Enter rate per hour`);
console.log(hours * ratePerHour);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = "Yasir";
if (myName.length < 7) {
  console.log("My name is short");
} else {
  console.log("My name is long");
}

// 11. Compare your first name length and your family name length and you should get this output.
let myFamilyName = `sulyman`;
let myFirstName = `Yasir`;
if (myFirstName.length < myFamilyName.length) {
  console.log(
    `my familyname, ${myFamilyName} is longer than my firstname, ${myFirstName}`
  );
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you., this means it should be in the console

let myAge = 250;
let yourAge = 25;
if (myAge > yourAge) {
  console.log(`i am ${myAge - yourAge} years older than you`);
}

// 13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
let yearOld = prompt(`how old are you`);
if (yearOld >= 18) {
  console.log(`you are ${yearOld}. you are old enough to drive`);
} else {
  console.log(
    `you are ${yearOld}. you will be allowed to drive after ${
      18 - yearOld
    } years`
  );
}

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
let numberOfYears = prompt(`Enter number of years you live`);
let seconds =
  numberOfYears * 365 * 24 * 60 * 60 + (numberOfYears / 4) * (24 * 60 * 60);
console.log(seconds);

// 15.Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

let todayDate = new Date();
let hour = todayDate.getHours();
let minutes = todayDate.getMinutes();
let day = todayDate.getDay();
let month = todayDate.getMonth() + 1;
let yearr = todayDate.getFullYear();
console.log(`${yearr}-${month}-${day}-${hour}-${minutes}`);
console.log(`${day}-${month}-${yearr}-${hour}-${minutes}`);
console.log(`${day}/${month}/${yearr}/${hour}/${minutes}`);

// Exercises :Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
month = month.toString().length < 2 ? `${month}` : month;
console.log(`${yearr}-${month}-${day} ${hour}:${minutes}`);
