var fruits = ['apple', 'apple', 'orange', 'mango', 'kiwi', 'orange']
// var length = fruits.length
// console.log(length)
// console.log(fruits[0])
// console.log(fruits.indexOf('orange'))
// console.log(fruits.lastIndexOf("orange"))
// console.log(fruits.indexOf("apples"))
// console.log(fruits.indexOf("appless"))

// add item
// at first
// fruits.unshift("banana")

// at last
// fruits.push('banana')

// remove item
// from first
// fruits.shift()

// from last
// fruits.pop()

// console.log(fruits.slice(1,3))

// splice()
// syntax
/*
array_name.splice(starting_index, no_of_items_to_remove, no_of_items_to_add)
*/
// splice to remove item
// var removeItem = fruits.splice(1,2) 
// console.log(removeItem)

// splice to add item
// fruits.splice(1, 0, "cherry", 'cherry')

// splice for both add and remove
// fruits.splice(1, 1, "cherry", "cherry")


// console.log(fruits)

// types of loop
/*
for
while
do-while

JS CENTRIC LOOP
1. forEach
2. map
3. reduce
4. find
5. some
6. every
*/

// forEach
// syntax
// array_name.forEach(function(item, index){

// })
var uniqueArray = []
fruits.forEach(function (item, index) {
    // console.log("item is: ", item)
    // console.log("index of", item, "is", index)

    // first solution
    // if (uniqueArray.indexOf(item) == -1) {
    //     // 1
    //     // uniqueArray.indexOf("orange") == -1
    //     // 3 == -1
    //     uniqueArray.push(item)
    // }

    // second solution
    if (!uniqueArray.includes(item)) {
        uniqueArray.push(item)
    }

    // third solution
    if (uniqueArray.includes(item)) {

    }
    else {
        uniqueArray.push(item)
    }
})

console.log(uniqueArray)