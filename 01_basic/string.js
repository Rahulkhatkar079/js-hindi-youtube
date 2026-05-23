 const name = "rahul"
 const repoCount = 50

// console.log(name+repoCount+"value");
 
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new string('rahul-kh')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));



const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringOne = "  rahul  "
console.log(newStringOne.trim());
console.log(newStringOne);
const url = "http://rahul.com/rahul%20jat"

console.log(url.replace('%20','-'))

console.log(url.includes('der'));

console.log(gameName.split('-'));
