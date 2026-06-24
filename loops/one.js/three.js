// for of

//["","",""]
//[{},{},{}]


const arr = [1,2,3,4,5]

for (const num of arr){
console.log(num);

}

const greetings = "hello world !"
for (const greet of greetings) {
    console.log('each char is ${greet}');
    
}

// Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('FR',"FRANCE")
map.set('IN',"INDIA")
console.log(Map);


for (const key of map) {
    console.log(key);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,':-',value);
    
}



const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
}

for (const key in myObject) {
    
    console.log(myObject[key]);
    
    
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    
    console.log(key);
    
}
   
programming.forEach(function (item){
    console.log(item);
    
})

programming.forEach((item) =>{
    console.log(item);
    
})
