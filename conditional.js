/*
conditional operator in javascript

syntax:

condition ? <body_Of_truth> : <body_of_false>
*/

var n = 100
n >= 50 // 100 >= 50
    ? n > 75
        ? n == 1000
            ? console.log("n is equalls to 100")
            : console.log('n is not equalls to 100')
        : console.log("n is greater than 50 and less tahn 75")
    : console.log(n, "is less than 100")