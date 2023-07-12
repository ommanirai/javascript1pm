var details = [
    {
        name: 'ram',
        address: 'lalitpur',
        class: 12,
        phone: 982323423423
    },
    {
        name: 'shyam',
        address: 'bhaktapur',
        class: 10,
        phone: 9842342342
    },
    {
        name: 'ram',
        address: 'ktm',
        class: 11,
        phone: 9823423423
    },
    {
        name: 'shyam',
        address: 'lalitpur',
        class: 9,
        phone: 9823234
    },
    {
        name: 'hari',
        address: 'pokhara',
        class: 10,
        phone: 982323423
    },{
        name: 'sita',
        address: 'lumbini',
        class: 9,
        phone: 9823234
    },{
        name: 'gita',
        address: 'pokhara',
        class: 7,
        phone: 982323423
    },{
        name: 'rahul',
        address: 'bhaktapur',
        class: 9,
        phone: 9823234
    },{
        name: 'shyam',
        address: 'lalitpur',
        class: 9,
        phone: 9823234
    },{
        name: 'shyam',
        address: 'lalitpur',
        class: 9,
        phone: 9823234
    },{
        name: 'shyamu',
        address: 'lalitpur',
        class: 9,
        phone: 9823234
    },{
        name: 'roshan',
        address: 'lalitpur',
        class: 11,
        phone: 9823234
    }
]

// map 
var result = details.map(function(item, index){
    // console.log(item)
    // console.log(index)
        return item.name;
        // console.log(item.name)
        // return true;
})
console.log(result)

// find
var result = details.find(function(item, index){
    if(item.name == "ram"){
        return item;
    }
})
// console.log(result)

// some
var result = details.some(function(item, index){
    if(item.class == 9){
        return true;
    }
})
// console.log(result)

// every
var result = details.every(function(item, index){
    if(item.class == 9){
        return true;
    }
})
// console.log(result)

// reduce
// syntax
/*
array_name.reduce(function(acc, item, index, source){

}, initial_value)



*/
// details.reduce(function(acc, item, index, source){
//     console.log(acc)
//     console.log(item)
//     console.log(index)
//     console.log(source)
//     return item;
// },1)