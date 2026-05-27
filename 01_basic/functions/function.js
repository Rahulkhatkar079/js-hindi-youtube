console.log("r");
console.log("a");
console.log("h");
console.log("u");
console.log("l");




function sayMyName(){
    console.log("r");
    console.log("a");
    console.log("h");
    console.log("u");
    console.log("l");
}

sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
    
}
addTwoNumbers(3,4)//function ko call krta h




function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return '${username} just logged in'
}
console.log(loginUserMessage("rahul"))

