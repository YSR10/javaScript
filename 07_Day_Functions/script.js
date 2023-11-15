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

function areaOfCircle(pi, r, r) {
  calc = pi * r * r;
  return calc;
}
console.log(areaOfCircle(3.412, 9, 6));
