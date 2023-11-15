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
