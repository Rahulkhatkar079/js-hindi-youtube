// if

if (true){

}
if (false) {
    // nhi execute hoga
}

const isuserloggedIn = true
const tempreture = 42

if (tempreture<50) {
    console.log("less than 50");
    
}
else {
console.log("tempreture is greater than 50");
}
//>,<,<=,>=,==,!=,===
console.log("execute");


const score = 200

if (score>100) {
    const power = "fly"
    console.log('User power: ${power}');
}
//  console.log('User power: ${power}');


const balance = 1000
if (balance>500) {
    console.log("less than 1200");
}

const userloggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
    
}
if (loggedInFromGoogle|| loggedInFromEmail) {
    console.log("User logged in");
    
}
