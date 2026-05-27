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
//Object.freeze(jsUser)
jsUser.email = "rahul@microsoft.com"
console.log(jsUser);

jsUser.greetingtwo = function(){
    console.log('hello js user,${this.name}');
}
console.log(jsUser.greetingtwo());

const tinderUser  = new Object()
//const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "rahul"
tinderUser.isloggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rahul",
            lastname:"khatkar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}
 //const obj3 = Object.assign({},obj1,obj2)
 const obj3 = {...obj1,...obj2}
 //console.log(obj3);
 
//{} esme target ki tarah work karega or baki source ki tarah warna obj1 target ki tarah work krega

const users = [
    {
        id:1,
        email:"rahul@gmail.com"
    },

]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedIn'));//false




const course = {
    course: "js in hindi",
    price: "999",
    courseInstructor:"rahul"
}

//course.courseInstructor

const {courseInstructor:instructor} = course

console.log(instructor);
//method how to destructure object
const navbar = ({navbar}) => {

}
navbar(company = "rahul")


//api ,json

//{
 //    "name": "rahul",
 //    "coursename": "js hindi",
 //    ""price": "free"
//}



[
    {},
    {},
    {}
]

