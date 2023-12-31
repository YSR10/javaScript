// level 1
//1 Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//while loop
let e = 0;
while (e <= 10) {
  console.log(e);
  e++;
}

//do while loop
let j = 0;
do {
  console.log();
  j++;
} while (j <= 10);

//2 Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let w = 10; w >= 0; w--) {
  console.log(w);
}
//while loop
let s = 10;
while (s >= 0) {
  console.log(s);
  s--;
}

//do while loop
let t = 10;
do {
  console.log(t);
  t--;
} while (t >= 0);

//3 Iterate 0 to n using for loop
let n = 10;
for (let c = 0; c <= n; c++) {
  console.log(c);
}
//4 Write a loop that makes the following pattern using console.log()
/*#
##
###
####
#####
######
#######*/
let hash = ["#", "##", "###", "####", "#####", "######", "#######"];
for (let i = 0; i <= hash.length - 1; i++) {
  console.log(hash[i], i);
}

//5
/*0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/

for (let e = 0; e <= 10; e++) {
  console.log(`${e} * ${e} = ${e * e}`);
}

//6 Using loop print the following pattern
/* i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000*/

//7 Use for loop to iterate from 0 to 100 and print only even numbers
let k = 2;
let evenSum = 0;
for (let k = 0; k <= 100; k++) k % 2 == 0;
evenSum = evenSum + k;
console.log(evenSum);

//8 Use for loop to iterate from 0 to 100 and print only odd numbers
let m = 2;
let oddsum = 1;
for (let m = 1; m <= 100; m++) m % 2 == 1;
oddsum = oddsum + m;
console.log(oddsum);

//9 Use for loop to iterate  from 0 to 100 and print only prime numbers
let q = 1;
let primesum = 1;
for (let q = 1; q <= 100; q++) q ** 2 == 0;
primesum = primesum + q;
console.log(primesum);

//10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(`the sum of all numbers from 0 to 100 is ${sum}`);

//11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    evenSum = evenSum + i;
  } else {
    oddSum = oddSum + i;
  }
}
console.log(evenSum);
console.log(oddSum);
console.log(
  `the sum of all evens from 0 to 100 is ${evenSum}. and the sum of all odds from 0 to 100 is ${oddSum}`
);

//12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let odd = 0;
let even = 0;
let total = [];
for (let x = 0; x <= 100; x++) {
  if (x % 2 == 1) {
    odd = odd + x;
  } else {
    even = even + x;
  }
}
total.push(even, odd);
console.log(total);

//13 Develop a small script which generate array of 5 random numbers
let array = [];
for (let i = 0; array.length <= 4; i++) {
  const randomArr = Math.floor(Math.random() * 5);
  array.push(randomArr);
}
console.log(array);

//14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
let unique = [];
for (let i = 0; unique.length <= 4; i++) {
  const uniqueArr = Math.floor(Math.random() * 10);
  if (unique.indexOf(uniqueArr) == -1) {
    unique.push(uniqueArr);
  }
}
console.log(unique);

//15 Develop a small script which generate a six characters random id: 5j2khz
let characters = `abcdefghijklmnopqrstuvwzyz1234567890`;
id = ``;
for (let i = 0; i <= 5; i++) {
  const alphanumeric = Math.floor(Math.random() * characters.length);
  id = id + characters.charAt(alphanumeric);
}
console.log(id);

// level 2

//1 Develop a small script which generate any number of characters random id:
let yasir = (Math.random() + 1).toString(20).substring(2);
console.log(`randomNumber`, yasir);
let we = (Math.random() + 1).toString(15).substring(2);
console.log(we);

//2 Write a script which generates a random hexadecimal number. '#ee33df'
let hexadecimal = `#qwertyuiop2314567890bvcxznmjk`;
id = ``;
for (let i = 0; i <= 6; i++) {
  const alpha = Math.floor(Math.random() * hexadecimal.length);
  id = id + hexadecimal.charAt(alpha);
}
console.log(id);

//3 Write a script which generates a random rgb color number. rgb(240,180,80)
let rgb = `rgb`;
let number = Math.floor(Math.random() * 255);
console.log(`${rgb} (${number}, ${number}, ${number})`);

//4 Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

const country = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let newCountry = [];
for (let i = 0; i < country.length; i++) {
  newCountry.push(country[i].toUpperCase());
}
console.log(newCountry);

//5 Using the above countries array, create an array for countries length'.
console.log([
  country[0].length,
  country[1].length,
  country[2].length,
  country[3].length,
  country[4].length,
  country[5].length,
  country[6].length,
  country[7].length,
  country[8].length,
  country[9].length,
  country[10].length,
]);

//6 Using the above countries array, create an array for countries length'.
// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

console.log(country[0].slice(0, 3).toUpperCase());
console.log(`[
  ['${country[0]}','${country[0].slice(0, 3).toUpperCase()}', ${
  country[0].length
}]\n
['${country[1]}','${country[1].slice(0, 3).toUpperCase()}', ${
  country[1].length
}]\n
['${country[2]}','${country[2].slice(0, 3).toUpperCase()}', ${
  country[2].length
}]\n
['${country[3]}','${country[3].slice(0, 3).toUpperCase()}', ${
  country[3].length
}]\n
['${country[4]}','${country[4].slice(0, 3).toUpperCase()}', ${
  country[4].length
}]\n
['${country[5]}','${country[5].slice(0, 3).toUpperCase()}', ${
  country[5].length
}]\n
['${country[6]}','${country[6].slice(0, 3).toUpperCase()}', ${
  country[6].length
}]\n
['${country[7]}','${country[7].slice(0, 3).toUpperCase()}', ${
  country[7].length
}]\n
['${country[8]}','${country[8].slice(0, 3).toUpperCase()}', ${
  country[8].length
}]\n
['${country[9]}','${country[9].slice(0, 3).toUpperCase()}', ${
  country[9].length
}]\n
['${country[10]}','${country[10].slice(0, 3).toUpperCase()}', ${
  country[10].length
}]
]`);

//7 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let arr = [];
arr = country.includes(`land`);
console.log(arr);

//8
for (const yas of country) {
  let yasarray = [];
  yasarray.push(yas);
  if (yas.endsWith(`ia`)) {
    console.log(yasarray);
  }
}
