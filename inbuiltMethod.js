/*
js methods
1. setInterval()
2. setTimeout()
3. clearInterval()
4. typeof()
Number()
String()

type conversion/coercion
1. internal conversion(internal coercion)
2. external conversion(external coercion)

*/
// var name = '4'
// // console.log(typeof(Number(name)))
// var num = 3;
// console.log(name * num)

// inbuilt method
// string
var college = "United"
// console.log(college.substring(1, 2))
// console.log(college.substr(1, 2))
// console.log(college.length)
// console.log(college.toUpperCase())
// console.log(college.toLowerCase())
// console.log(college.trim().length)

// Number
var num = '12.987987'
// console.log(isNaN('1212sdfsd'))
// console.log(num.toFixed(0))
// console.log(parseInt(num))
// console.log(num)
// console.log(parseFloat(num))


// includes
var email = "ommanirai27@gmail.com"

// console.log(email.includes(".com@gmail"))
// if (email.includes("@") && email.includes("gmail") && email.includes(".com")) {
//     console.log("valid email")
// }
// else {
//     console.log("invalid email")
// }

// Object
var phone = {
    brand: 'samsung',
    price: 13000,
    ram: '4gb',
}
console.log(typeof(phone))
// object to string
var newPhone = JSON.stringify(phone)
console.log(newPhone)
console.log(typeof(newPhone))

// string to object
var oldPhone = JSON.parse(newPhone)
console.log(oldPhone)
console.log(typeof(oldPhone))


// console.log(phone.brand)
// console.log(phone['brand'])

// console.log(phone.hasOwnProperty("brand"))
// console.log(Object.keys(phone))
// console.log(Object.values(phone))