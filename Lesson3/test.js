// var a = 10
// var b = 5

var a = 5
var b = 10

a = [a , b]
b = a[0]
a = a[1]
// a = a + b
// b = a - b
// a = a - b
console.log (a)
console.log (b)

[a, b] = [b, a];
console.log(`${a} ${b}`);