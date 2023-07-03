/*
closure:
-> closure is an inner function which has access to
1. global scope
2. parent function argument/parameter
3. parent function scope
4. own argument and scope
*/
var status = 'active'
function welcome(name){
    var address = 'Lalitpur'
    // console.log(typeof(address))
    function location(addr){
        // location is a closure
        var greetingText = 'Namaste'
        // console.log(status)
        // console.log(name)
        // console.log(address)
        // console.log(person)
        // console.log(greetingText)
        var text = greetingText +" "+ name + ' welcome to '+addr
        // console.log(text)
        return text;
    }
    return location
    // location("vedu")
    // location("Lagankhel")
}

var result = welcome("shambhu")("vedu")
console.log(result)
var res = welcome("ram")("Lagankhel")
console.log(res)
// console.log(typeof(result))
// console.log(result("vedu"))
// console.log(res("lagankhel"))

// location("ktm")
// welcome('shambhu')
// welcome('ram')


// closure
/*
var result = multiply(3)(3) // 9
// console.log(result) // 9
*/

function multiply(num1){
    function hi(num2){
        // hi is closure
        var mul = num1 * num2;
        return mul;
    }
    return hi;
}

var result = multiply(3)(3)
// console.log(result(4))
console.log(result)

// TASK
function sum(a, b){
    function ad(c){
        var result = a + b + c;
        return result;
    }
    return ad;
}

var sum_result = sum(2,3)(4)
console.log(sum_result) // 9