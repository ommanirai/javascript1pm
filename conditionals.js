// conditionals in javascript
/*
1. if
2. if else
3. if, else if, else
4. switch

1. if
syntax:
if(condition){
    // body of truth statement
}

condition:
truthy value: true, 1, 'ram' 
falsy value: false,0, '', undefined, NaN

2. if else
syntax:
if(condition){
    // truth statement
}
else {
    // false statement
}


3. if else if else
if(condition 1){
    // body of condition 1
}
else if(condition 2){
    // body of condition 2
}
else if(condition 3){
    // body of condition 3
}
.
.
.
.
else if(condition n){
    // body of condition n
}
else {
    // default block
}

*/

// var a = 12;
// if ('') {
//     console.log("true block goes here")
// }

// console.log(a < 20)
var english = 59


var number = 100
if (number > 500) { // number < 500 => 100 < 500
    console.log("number is less than 500")
}
else {
    console.log("number is greater than 500")
}

var nepali = 50;
var english = 38;
var math = 80;
var science = 80;
var health = 67;
if (nepali >= 35 && english >= 35 && math >= 35 && science >= 35 && health >= 35) {
    console.log("congratulation")
    var per = ((nepali + english + math + science + health) / 500) * 100
    if (per >= 80) {
        console.log("you got distinction")
        console.log("your percentage is: ", per)
    }
    if (per < 80 && per >= 60) {
        console.log("you got first division")
        console.log("your percentage is: ", per)
    }
    if (per < 60 && per >= 45) {
        console.log("you got second division")
        console.log("your percentage is: ", per)
    }
    if (per < 45) {
        console.log("my boy, you got third division")
        console.log("your percentage is: ", per)
    }
}
else {
    console.log("try again")
}

var number = 21
if (number % 3 == 0 && number % 7 == 0) {
    console.log(number, 'is divisible by 3 and 7')
}
else if (number % 3 == 0) {
    console.log(number, 'is divisible by 3')
}
else if (number % 7 == 0) {
    console.log(number, "is divisible by 7")
}
else {
    console.log(number, " is not divisible by 3 and 7")
}