/*
0
1
1
2
3
5
8
13
21
34
55
*/

var a = 0
var b = 1
var n = 10
if(n==1){
    console.log(0)
}
else if(n==2){
    console.log(0)
    console.log(1)
}
else {
    console.log(0)
    console.log(1)
    /*
    i = 3
    c = 0 + 1 = 1
    a = 1
    b = 1

    i = 4
    c = 1 + 1 => 2
    a = 1
    b = 2

    i = 5
    c = 1 + 2 => 3
    a = 2
    b = 3

    i = 6
    c = 2 + 3 => 5
    a = 3
    b = 5
    */
    for(i=3; i<=n; i++){
        var c = a + b; 
        a = b; 
        b = c; 
        console.log(c)
    }
}