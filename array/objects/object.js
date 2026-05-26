//singleton 
const mySym = Symbol("key1")

//object literals
//object.create//construtor method
const jsUser = {  
    //curlibrasis
     name:"rahul",

     age:18,
     location:"jaipur",
     email:"rahul@nith.ac.in"
}
console.log(jsUser["email"]);

jsUser.email = "rahul@gmail.com"
Object.freeze(jsUser)
jsUser.email = "rahul@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    
}


