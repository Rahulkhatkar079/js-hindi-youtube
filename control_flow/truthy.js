const userEmail = "hitesh@gmail.com"//[] y bhi true ki condition hogi
if (userEmail) {
    console.log("got user email");
    
}else {
    console.log("don't have user email");
    
}

// falsy value
//false,0,BigInt On,"",null,-0,undefined,NaN


//truthy value
//"0",'false'," ",[],{},function(){}

if (userEmail.length === 0) {
    console.log("array is empty");
    
}
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
} 
 //nullish Coalescing Operator (??): null undefined

 let val1;
 val1 = 5 ?? 10
val1 = null ?? 10
var1 = undefined ?? 15
val1 = null ?? 10 ?? 20
 console.log(val1);//5,10,15,10

 // terniary Operator

 //condition ? true : false

 const iceTeaPrice = 100
 iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
 
 