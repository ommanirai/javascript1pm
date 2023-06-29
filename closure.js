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

    function location(addr){
        // location is a closure
        var greetingText = 'Namaste'
        // console.log(status)
        // console.log(name)
        // console.log(address)
        // console.log(person)
        // console.log(greetingText)
        var text = greetingText +" "+ name + ' welcome to '+addr
        console.log(text)
    }
    location("vedu")
    location("Lagankhel")
}
welcome('shambhu')
welcome('ram')