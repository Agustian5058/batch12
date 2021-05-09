var arr = [235, 236, 236, 7568, 2457, 94]

for(let i = 0; i < arr.length / 2; i++){
    console.log(arr[i])
}
console.log("----------------")
let result = 0;
for (x of arr) {
    result += x
}
console.log(result)
