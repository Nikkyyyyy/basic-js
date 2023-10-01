// console.log("Hello from index.js")

//ES5
/*
var  person="Nikita"
person= "Nikita"

console.log(person);
*/

//Es6 

// const: constant (doesnot change)

// let : changable variable


/*
let people = "hari"
people="rita"

console.log(people);


const numberDefine= 3.144
console.log(numberDefine);

const isValid = true; //Bollen
console.log(isValid);
*/

//Browser based interaction

// const personName = prompt("What is your name?")
// console.log(personName);

// const isAbove18 = confirm("Your age is above 18? ")
// console.log(isAbove18);

// alert(personName, isAbove18);


// const isOfAge = isAbove18 ? "above" : "before"
// const text = "My name is "+ personName +" and I am "+ isOfAge + " 18 years";
// alert(text);
// console.log(text);

//WRITE A JS CODE THAT ASK FOR USERNAME AND PASSWORD WITH CONFIRM PASSWORD,
// IF THE USERNAME AND PASSWORD MATCHES ALERT: YOU HAVE SUCCESSFULLY LOGED In ELSE ALERT : USERNAME AND PASSWORD IS INCORRECT


document.querySelector('.button').onclick = function(){
    var password = document.querySelector('.password').value,
    confirmPassword = document.querySelector('.confirmPassword').value;

    if(password == ""){
        alert("Field cannot be empty.");
    }
    else if(password != confirmPassword){
        alert("Password didn't match. Try Again!!!")
        return false
    }
    else if(password == confirmPassword){
        alert("Password Match!")
        
    }
    return true


}

