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

// function welcome() {
//     console.log("welcome to Vedu");
// }

// welcome();
// welcome();
// welcome();
// welcome();
// welcome();

function sum() {
    var a = 13;
    var b = 34;
    var sum = a + b;
    console.log(sum)
}

function add(num1, num2, num3) { // parameter
    var sum = num1 + num2 + num3;
    console.log(sum)
}

// var n1 = prompt("enter the first number")
// var n2 = prompt("enter the second number")
// var n3 = prompt("enter the third number")

var n1 = 23;
var n2 = 23;
var n3 = 45;

add(n1, n2, n3) // argument
// add(1, 3, 23)
// add(121, 323, 2332)

// sum()

function multiply() {
    var a = 2;
    var b = 2;
    var multi = a * b;
    console.log(multi)
}

// multiply()
// multiply()
// multiply()
// multiply()
// multiply()

function welcome(name, address){
    var greetingText = 'good morning ' + name + " welcome to " + address
    console.log(greetingText)
}

welcome('sita', 'vedu')