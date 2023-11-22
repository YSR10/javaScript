// level 1
//1 Create an empty object called dog
let dog = {};

//2 Print the the dog object on the console
console.log(dog);
//3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
let dogg = {
  name: `bingo`,
  legs: `four`,
  color: `black`,
  age: `2years`,
  bark: ` woof`,
  Bark: function () {
    return `${this.bark} ${this.bark}`;
  },
};
console.log(dogg);

//4 Get name, legs, color, age and bark value from the dog object
let blackDog = Object.assign({}, dogg);
let value = Object.values(blackDog);
console.log(value);

//5Set new properties the dog object: breed, getDogInfo

dogg.getDogInfor = function () {
  let breed = `pure breed`;
  let info = `this is my ${this.name}, it has ${
    this.legs
  } legs and barks ${this.Bark()} which is also a ${breed}`;
  return info;
};
console.log(dogg.getDogInfor());
