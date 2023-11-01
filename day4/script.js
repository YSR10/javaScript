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
