const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
//19.Slice out the middle IT company or companies from the array
let rslice = webTechs.slice(4, -4);
console.log(rslice);
console.log(webTechs);
// 21.Remove the middle IT company or companies from the array

let r = webTechs.splice(1, 4);
console.log(r);
console.log(webTechs);
// 5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechsConfirm = webTechs.includes("Sass");
let addSass = webTechs.push("Sass");
if (webTechsConfirm) {
  console.log(`Sass is a CSS preprocess`);
} else {
  console.log(`${webTechs}`);
}
let removemiddle = webTechs;

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);
