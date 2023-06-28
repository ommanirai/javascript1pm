/*
function
-> function is reusable block of code which perform specific task

syntax:

// function declaration
function function_name(){
    // body of function
}

//  function call
function_name()


*/
// variable declaration
var name = 'roshan'


function calculator() {
    var a = 13;
    var b = 34;
    var sum = a + b;
    var multi = a * b;
    var diff = a - b;
    console.log(multi)
    console.log(diff)
    console.log(sum)
}
// sum()
// sum()
// sum()
// sum()
// sum()

// function add(num1, num2, num3) { // parameter
//     var sum = num1 + num2 + num3;
//     console.log(sum)
// }

// add(12,12,12) // argument

// var n1 = prompt("enter the first number")
// var n2 = prompt("enter the second number")
// var n3 = prompt("enter the third number")

var n1 = 23;
var n2 = 23;
var n3 = 45;

// add(n1, n2, n3) // argument
// add(1, 3, 23)
// add(121, 323, 2332)

// sum()
// const multiply = (a, b) =>{

// }

function multiply(a, b) {
    // var a = 2;
    // var b = 2;
    var multi = a * b;
    var sum = a + b;
    var diff = a - b;
    // multiple value store
    // array and object
    return {
        // es5 (ecma script 5)
        // es6 (ecma script 6)
        // object shorthand property
        multi,
        // multi: multi,
        sum: sum,
        diff: diff 
    };
    // return [multi, sum, diff]
    // console.log("the multiplication of two number is: ", multi)
}
// multiplication of a and b is:
// 
var result = multiply(12,12)
console.log("what comes in: ", result.multi)
// console.log("result: ", multiply(12,12))
// console.log("the multiplication of two number is: ", result)



// multiply()
// multiply()
// multiply()
// multiply()
// var names;
// console.log(names)
// function welcome(name, address){
//     var greetingText = 'good morning ' + name + " welcome to " + address
//     console.log(greetingText)
// }

// welcome(null,'vedu')

/*
two way of writing a function
1. expression syntax
2. declaration syntax

*/
// var name = 'ram'


// wel
// welcome()
// expression syntax
// wel()
var wel = function (){
    console.log("welcome")
}

// declaration syntax
// welcome();
var details = {
    name: 'ram',
    address: 'lalitpur',
    phone: 234324,
    email: 'ram@gmail.com',
    gender: 'male'
}

function welcome(det) {
    // function welcome(name, address, phone, email, gender) {
    console.log("what comes in: ", det.name)
    console.log("welcome to Vedu");
}

welcome(details)
// welcome('ram', 234324, 'lalitpur', 'ram@gmail.com', 'male')
// Hoisting: it is a mechanism which moves all the declaration at top before execution


/*
types of function:
1. named function
2. function with argument/parameter
3. function with return type
4. anynamous function(unnamed function)
syntax:
function(){

}

5. IIFE(immediately invoked functional expression)
syntax:
()()

*/

function hi(){
    console.log("hi guys")
}
// hi()

(function(){
    console.log("i am anynamous function")
    console.log(" i am taking help of IIFE to get executed")
})()