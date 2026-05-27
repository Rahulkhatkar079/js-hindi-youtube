const user = {
    username: "rahul",
    price:999,

    welcomeMessage: function(){
        console.log('${this.username},welcome to website');
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


function chai() {
    let username = "rahul"
    console.log(this.username);
    
}

chai()


const chai = function () {
    let username = "rahul"
    console.log(this.username);
    
}


const chai =  () => {
    let username = "rahul"
    console.log(this);
    
}

chai()



const addTwo = (num1,num2) => {
    return num1 + num2
}



const addTwo = (num1,num2) => (num1 + num2)
//     () = paranthesis

console.log(addTwo(3,4));
