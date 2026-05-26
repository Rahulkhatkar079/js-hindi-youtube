const myArr = [0,1,2,3,4]
const myheros = ["shaktiman","naagraj"]

const myarr2 = new Array(1,2,3,4)
console.log(myArr[0]);//0

//array methods

myArr.push(5)
console.log(myArr);//0,1,2,3,4,5
//add krta h value
myArr.pop()//last value ko remove kr dega
myArr.unshift(0)//array ke start me add hota h
myArr.shift()//y jo bhi add huwa h use remove krta h
console.log(myArr.includes(9));//false

const newArr = myArr.join()//array+nuimbers print honge

//slice,splice
console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)//last wala bhi include ho jata h
console.log(myn2);
  




const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]
marvel_heros.push(dc)

console.log(marvel_heros);//array  nke andar array aa jata h

 const all_new = marvel_heros.concat(dc)
console.log(all_new);//same uper wale jaisa

const all_new = [...marvel_heros,...dc]
console.log(all_new);//sperate karta h array se

const another_array = [1,2,3,[4,5,6],7,[8,9],[4,5]]
const real_another_array = another_array.flat()
console.log(real_another_array);//sub ek single array m aa jata 



console.log(Array.isArray("rahul"));//false  arrray nhi h
console.log(Array.from("rahul"));//convert kr dega all words ko

console.log(Array.from({name:"rahul"}));//[] empty array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//teeno ka array bn jyega

