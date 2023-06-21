/*
prime
*/
var n = 7
var count = 0
for (i = 1; i <= n; i++) {
    if (n % i == 0) { // 15 % i(1,2,3,4,5,6,7) => 1, 7
        count++
    }
}
if (n == 0) {
    console.log(n + ' is a whole number')
}
else if (count == 2) {
    console.log(n + ' is prime numebr')
}
else {
    console.log(n + ' is composite number')
}

