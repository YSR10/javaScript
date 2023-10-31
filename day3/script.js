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
