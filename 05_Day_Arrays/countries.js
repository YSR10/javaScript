const countries = [
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
4; //In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let confirmEthopia = countries.includes("Ethiopia");
let pushs = countries.push("Ethopia");
if (confirmEthopia) {
  console.log("ETHIOPIA");
} else {
  console.log(`${countries}`);
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let divideCountry = countries.length % 2;
let divideCountryHalf = countries.length / 2;
let addCountry = countries.unshift(`Nigeria`);
if ((divideCountry = 0)) {
  console.log(countries[divideCountryHalf]);
} else {
  console.log(addCountry);
}
