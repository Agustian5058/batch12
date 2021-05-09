var x = 9;
var y = 12;
var z = 30;

var arr = [x, y, z];
console.log(arr);

var arr = new Array(x, y, z);
console.log(arr);

var arr = new Array(3);
arr[0] = 1325;
arr[1] = 34;
arr[2] = 185;
arr[3] = 457;
console.log(arr);

console.log(arr[2]);
console.log("length", arr.length);

console.log("Index");
arr[4] = 87;
console.log(arr);

console.log("Push");
arr.push(856);
console.log(arr);

console.log("Unshift");
arr.unshift(14);
console.log(arr);

console.log("Pop");
let temp = arr.pop();
console.log(temp);
console.log(arr);

console.log("Shift");
temp = arr.shift();
console.log(temp);
console.log(arr);

let test = "Nama Saya Agus"
var arr = Array.from(test);
console.log(arr)

var arr = test.split(" ");
console.log(arr)
