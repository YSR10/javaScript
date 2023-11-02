//1 Declare an empty array
const empty = Array();
console.log(empty);

//2 Declare an array with more than 5 number of elements
const arr = [
  `name`,
  `firstname`,
  `lastname`,
  `surename`,
  `middlename`,
  `familyname`,
];
console.log(arr);
//3 find the length of your array
console.log(arr.length);

//4 Get the first item, the middle item and the last item of the array
//first item
console.log(arr[0]);
//the middle item
console.log(arr[3]);
// the last item
let lastArr = arr.length - 1;
console.log(arr[lastArr]);

//5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [12, `yasir`, true, null, undefined, NaN];
console.log(mixedDataTypes.length);

//6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  `Facebook`,
  `Google`,
  `Microsoft`,
  `Apple`,
  `IBM`,
  `Oracle`,
  `Amazon`,
];

//7 Print the number of companies in the array
console.log(itCompanies);

//8 Print the number of companies in the array
console.log(itCompanies.length);

//9 Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
let lastItCompanies = itCompanies.length - 1;
console.log(itCompanies[lastItCompanies]);

//10 Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//11 Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(`,`));

//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// console.log();

if (itCompanies.includes("Facebook")) {
  console.log("Facebook Company");
} else {
  console.log("Company not found");
}

//14 Filter out companies which have more than one 'o' without the filter method

//15 Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

//16 Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

//17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(3, 0, 1, 2));

//18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(3, 4, 5, 6));

//19 Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 3));

//20 Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21.Remove the middle IT company or companies from the array
let middleIt = itCompanies.splice(4, 4);
console.log(middleIt);

//22 Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

//23 Remove all IT companies
console.log(itCompanies.splice());
