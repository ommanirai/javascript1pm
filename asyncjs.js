// function wel(name, address){
//     console.log("hi")
// }
// wel()

// function setTimeout(){

// }


// synchronous pattern
// console.log(1)
// console.log(2)
// setTimeout(function(){}, time)
// setTimeout(function(){
//     console.log(3)
// }, 3000) // js inbuilt function(method)
var number = 0
var result = setInterval(function () {
    number++
    if (number % 2 == 0) {
        console.log(number)
    }
    if (number == 10) {
        clearInterval(result)
    }
}, 500)
// console.log(4)
// console.log(5)