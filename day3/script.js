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

let x = prompt(`X`);
let y = 2 * x - 2;
console.log(`the slope is ${y}`);

let m = (10 - 2) / (6 - 2);
console.log(m);
console.log(y == m);

y = x * x + 6 * x + 9;
x = prompt("x");
console.log(y);

// let name = prompt("Enter your name");
//  let nameLenght = name.length
//  nameLenght > 7 ? alert("your name is long");
//  alert("your name is short");
let name = prompt("Enter your name");
let nameLenght = name.length;
nameLenght > 7 ? console.log("your name is long");
console.log("your name is short");

const todaysDate = newDate();
console.log(todaysDate);
