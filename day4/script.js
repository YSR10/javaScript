//level 1
//1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userInput = prompt(`Enter your age`);
if (userInput >= 18) {
  console.log(`you are old enough to drive.`);
} else {
  console.log(`you are left with ${18 - userInput} years to drive`);
}

//2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let age = prompt(`Enter your age`);
// if ((age = 30)) {
//   console.log(`you are older than me`);
// } else {
//   console.log(`am older than you`);
// }

let myAge = 30;
let yourAge = prompt(`Enter your age`);
if (myAge > yourAge) {
  console.log(`i am ${myAge - yourAge} years older than you`);
} else if (yourAge > myAge) {
  console.log(`you are ${yourAge - myAge} years older than me`);
} else if (myAge === yourAge) {
  console.log(`we are age mate`);
} else {
  console.log(`${yourAge} is not a number`);
}

//3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4;
let b = 3;
// using if else
if (a > b) {
  console.log(`a is greater than b`);
} else {
  console.log(`a is less than b`);
}

//ternary operator
a ? console.log(`a is greater than b`) : console.log(`a is less than b`);

//4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt(`Enter a number`);
let even = number % 2;
if (even === 0) {
  console.log(
    `the remainder is ${even}, therefore ${number} is an even number`
  );
} else {
  console.log(
    `the remainder is  ${even},therefore ${number} is not an even number`
  );
}

//level 2

//1.Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
let mark = 99;
if (mark >= 80 && mark <= 100) {
  console.log(`A`);
} else if (mark >= 70 && mark <= 79) {
  console.log(`B`);
} else if (mark >= 60 && mark <= 69) {
  console.log(`C`);
} else if (mark >= 50 && mark <= 59) {
  console.log(`D`);
} else {
  console.log(`F`);
}

//2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer
let seasonUserInput = prompt(`Enter month to know the season`);
let season = seasonUserInput.toLocaleLowerCase();

switch (season) {
  case `September`:
  case `October`:
  case `November`:
    console.log(Autumn);
    break;
  case `December`:
  case `January`:
  case `February`:
    console.log(Winter);
    break;
  case `March`:
  case `April`:
  case `May`:
    console.log(Spring);
    break;
  case `June`:
  case `JUly`:
  case `August`:
    console.log(Summer);
    break;
  default:
    console.log(`it is not a season`);
}
// 3 Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.
let day = prompt(`Enter day to know if it a working day or a weekend`);
let days = day.toLocaleLowerCase();
switch (days) {
  case `saturday`:
  case `sunday`:
    console.log(`${days}is a weekend`);
    break;
  case `monday`:
  case `tuesday`:
  case `wednesday`:
  case `thursday`:
  case `friday`:
    console.log(
      `${dayCase?.charAt(0).toUpperCase() + dayCase.slice(1)} is a working day`
    );
    break;
  default:
    console.log(`${days} is not a day`);
}

//level 3
