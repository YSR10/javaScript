//Exercise: Level 1
/*non-primitive data type(array & object)
let nums = [34567];
nums[3] = 89;
console.log(nums);
primitive data type(string,number, null, boolean,undifine, symbol)
let r = `eer`;
let t = `eer`;
console.log(r == t);*/

let challenge = `30 Days Of JavaScript`;
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.substr(2, 19));
console.log(challenge.includes(`Script`));
console.log(challenge.split());
console.log(challenge.split(``));

let companies = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`;
console.log(companies.split(`,`));

console.log(challenge.replace(`JavaScript`, `Python`));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(`j`));
console.log(challenge.indexOf(`a`));
console.log(challenge.lastIndexOf(`a`));

let because = `You cannot end a sentence with because because because is a conjunction`;
console.log(because.indexOf(`because`));
console.log(because.lastIndexOf(`because`));
console.log(because.search(`because`));

let trim = "30 Days Of JavaScript";
console.log(trim.trim());
console.log(trim.startsWith("30"));
console.log(trim.endsWith("JavaScript"));
console.log(trim.match(`a`));

let con = "30 Days of";
console.log(con.concat("JavaScript"));

let re = "30 Days Of JavaScript";
console.log(re.repeat(2));

//Exercise: Level 2
let theQuote = `There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another`;
console.log(theQuote);

let motherTeresa = `Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead`;
console.log(motherTeresa);

let tenstring = `10`;
let tennumber = 10;
console.log(typeof `10` === 10);
console.log(tenstring);

let float = `9.8`;
let num = 9.8;
console.log(Math.ceil(float));

let py = `python`;
let ja = `jargon`;
console.log(`python`.includes(`on`) && `jargon`.includes(`on`));

let jargon = `I hope this course is not full of jargon`;
console.log(`I hope this course is not full of jargon`.includes(`jargon`));

let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

let random = Math.floor(Math.random() * 50) + 50;
console.log(random);

let number = Math.floor(Math.random() * 255);
console.log(number);

let string = Math.floor(Math.random() * 10);
console.log("JavaScript".charAt(string));

// Use console.log() and escape characters to print the following pattern.

/*1 1 1 1 1
 2 1 2 4 8
 3 1 3 9 27
 4 1 4 16 64
5 1 5 25 125*/

console.log(`1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125`);

let phraseBecause =
  "You cannot end a sentence with because because because is a conjunction";
console.log(phraseBecause.substr(31, 23));
