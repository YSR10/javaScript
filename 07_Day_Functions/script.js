//1 Declare a function fullName and it print out your full name.
function fullName() {
  console.log(`sulyman yasir`);
}
fullName();

//2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName(`yasir`, `sulyman`));

//3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(y, m) {
  let sum = y + m;
  return sum;
}
console.log(addNumbers(1, 2));

//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  let calc = length * width;
  return calc;
}
console.log(areaOfRectangle(1, 2));

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  calc = 2 * length * width;
  return calc;
}
console.log(perimeterOfRectangle(2, 6));

//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  calc = length * width * height;
  return calc;
}
console.log(volumeOfRectPrism(3, 4, 5));

//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(PI, r, r) {
  calc = PI * r * r;
  return calc;
}
console.log(areaOfCircle(3.143, 9, 6));

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumference(PI, r) {
  let sum = 2 * PI * r;
  return sum;
}
console.log(circumference(2, 3.143, 4));

//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
  calc = mass / volume;
  return calc;
}
console.log(density(5, 6));

//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
  calc = distance / time;
  return calc;
}
console.log(speed(10, 2));

//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
  let total = mass * gravity;
  return total;
}
console.log(weight(4, 6));

//12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
let convertCelsiusToFahrenheit = (oC) => {
  calc = oC * (9 / 5) + 32;
  return calc;
};
console.log(convertCelsiusToFahrenheit(34));

//13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function BMI(weight, height) {
  let bmi = weight / height ** 2;

  if (bmi < 18.5) {
    console.log("Underweight: BMI is less than 18.5");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal weight: BMI is 18.5 to 24.9");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight: BMI is 25 to 29.9");
  } else if (bmi >= 30) {
    console.log("Obese: BMI is 30 or more");
  } else {
    console.log(
      "You have either made a mistake or the brower is not functioning properly"
    );
  }
  return bmi;
}
console.log(BMI(894, 6));

//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let checkSeason = (month) => {
  let answer = month;
  switch (answer) {
    case `january`:
    case `febuary`:
    case `march`:
      console.log(`'${month}' is an 'Autumn' season`);
      break;
    case "april":
    case "may":
    case "june":
      console.log(`'${month}' is a 'Winter' season`);
      break;
    case "july":
    case "august":
    case "september":
      console.log(`'${month}' is a 'Spring' season`);
      break;
    case "october":
    case "november":
    case "december":
      console.log(`'${month}' is a 'Summer' season`);
      break;
    default:
      console.log(`'${month}' is not a month`);
  }
  return answer;
};
console.log(checkSeason("april"));

/* 15  Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0*/
function findMax(param1, param2, param3) {
  if (param1 > param2 && param1 > param3) {
    return param1;
  } else if (param2 > param1 && param2 > param3) {
    return param2;
  } else if (param3 > param1 && param3 > param2) {
    return param3;
  }
}
console.log(findMax(2, 3, 4));
console.log(findMax(5, 6, 7));
console.log(findMax(-0, 8, 4));

// level2
//1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
  let me = `me`;
  let linear = me + a ** 6;
  return linear;
}
console.log(solveLinEquation(6));

//2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(yasir1, yasir2) {
  let myName = [yasir1, yasir2];
  return myName;
}
console.log(printArray(`sulyman, yasir`));

//4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = () => {
  let newdate = new Date();
  let day = newdate.getDay();
  let month = newdate.getMonth();
  let year = newdate.getFullYear();
  let hours = newdate.getHours();
  let minutes = newdate.getMinutes();
  let total = `${day}/${month}/${year}  ${hours}:${minutes}`;
  return total;
};
console.log(showDateTime());

//5 Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues(x, y) {
  let swaps1 = y;
  let swaps2 = x;
  let swaps = `x=${swaps1}, y=${swaps2}`;
  return swaps;
}

console.log(swapValues(100, 200));

//6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use   od).

let reverseArray = (params) => {
  let reverse = params.reverse();
  return reverse;
};
console.log(reverseArray([0, 1, 2, 3]));

//7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (...params) => {
  console.log(params);
};

capitalizeArray(`boy`, `male`, `man`);

//8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr = [`pen`, `book`, `mouse`]) {
  return arr;
}
console.log(addItem);

//9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (arr = [`pen`, `b ook`, `laptop`, `p"hone`]) => {
  return arr;
};
console.log(removeItem([`laptop`, `mouse`]));

//10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
let sum = 0;
function sumOfNumbers(param = 2) {
  for (let i = 0; i <= param; i++) {
    let = sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(20));

//11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (paramOdd) => {
  let odd = 0;
  for (let i = 0; i <= paramOdd; i++) {
    if (i % 2 === 1) {
      odd += i;
    }
  }
  return odd;
};
console.log(sumOfOdds(10));

//12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (paramEven) => {
  let even = 0;
  for (let i = 0; i <= paramEven; i++) {
    if (i % 2 === 0) {
      even += i;
    }
  }
  return even;
};
console.log(sumOfEven(10));
