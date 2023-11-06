//1 Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//do while loop
let j = 0;
do {
  console.log();
  i++;
} while (i <= 10);

//2 Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
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
for (let k = 0; k <= 100; i++) k % 2 == 0;
evenSum = evenSum + k;
console.log(evenSum);

//8
let m = 2;
let oddsum = 1;
for (let m = 1; m <= 100; m++) m % 2 == 1;
oddsum = oddsum + m;
console.log(oddsum);
