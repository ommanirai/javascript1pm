/*
application data
-> let, var
-> const
-> function
const pi = 3.14;
var name = 'ram'
function hi(){

}

scope:
-> scope is the accessibility of application data

types of scope
1. global scope
2. functional/local scope
3. block scope

*/

// global scope
// declare in outermost layer (outside the function)
// accessible within the file

// functional scope
// var maintain functional/local scope
// accessible within the function

// block scope
// let maintain the block scope
// accessible within the block


// add = "vedu"
// var name = 'ram'
function wel(names){
    var name = 'shyam'
    console.log(names)
    console.log(name)
}

// wel("hari")
// console.log(name)
// var text = 'hi'
// var text = "hello"
// console.log(text)

// block scope
var greetingText = 'hi'
var text = greetingText // hi
var msg = 'namaste'
// truthy value: string, number, bool,true, condition true
// falsy value: 0, null, undefined, '', NaN, false
if(greetingText){
    let text = greetingText+ " " + msg // hi namaste
    console.log(text)
}
else{
    let text = greetingText + ' hello'
    console.log(text)
}
console.log(text)